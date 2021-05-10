namespace Libs {
    export class StockSaver {

        constructor(private config: TI.IConfig) {

            if(app.name !== ApplicationType.Illustrator){
                throw new Error("This class working only with Illustrator");
            }
        }

        /**
         * Main process
         * @param sourceFolder
         * @param files
         * @private
         */
        public process(sourceDoc: IllustratorDocument, destination?: Folder){

            let dst;

            if(!destination){
                dst = new Folder(`${sourceDoc.path}/${getCurrentDate()}_${this.config.name}`);
                dst.create();
            }else{
                dst = destination;
            }

            // For raster
            this.fixSourceFileSizeAndSave(sourceDoc, dst);

            // For vector
            this.traceSourceFileFixSizeAndSave(sourceDoc, dst);

        }

        /**
         * Trace raster image
         * @param {object} rasterItem
         * @returns {Object} traced image PluginItem
         */
         private traceImage(rasterItem: RasterItem){
             if(rasterItem.typename !== TI.TypeName.RasterItem){
                 throw new Error('traceImage can work only with RasterItem');
             }
             const pluginItem = rasterItem.trace();
             pluginItem.tracing.tracingOptions.loadFromPreset("High Fidelity Photo");
             return pluginItem;
        }

        /**
         * Resize image
         * @param {Object} pluginItem
         */
        private resizeItem(pluginItem: PluginItem, params: TI.IResolutionImage){

            const { width, height } = fitImage(pluginItem, params);
            pluginItem.width = width;
            pluginItem.height = height;
        }

        /**
         * Fit artboard to image
         * @param {Object} sourceDoc
         * @param {Object} pluginItem
         */
         private changeArtboard(sourceDoc: IllustratorDocument, pluginItem: PluginItem){
            const rect = sourceDoc.pathItems.rectangle(pluginItem.top, pluginItem.left, pluginItem.width, pluginItem.height);
            sourceDoc.artboards[0].artboardRect = rect.geometricBounds;
            sourceDoc.pathItems.removeAll();
        }

        /**
         *
         * @param {Object} sourceFolder Source folder
         * @param {String} originName Original filename
         * @param {String} extension filename extension
         * @returns {Object} file
         */
         private getNewName(sourceFolder: Folder, originName: string, extension?: string){
            const fileName = originName.split(".");
            const originExtension = fileName.pop();
            const newName = fileName.join(".") + "." + (extension || originExtension);
            return new File( sourceFolder + '/' + newName );
        }

        /**
         * Return EPS save options
         * @returns {Object} EPS save options
         */
        private getEpsOptions(){
            const saveOptions = new EPSSaveOptions();
            saveOptions.artboardRange = "";
            saveOptions.cmykPostScript = true;
            saveOptions.compatibility = Compatibility.ILLUSTRATOR10;
            saveOptions.compatibleGradientPrinting = false;
            saveOptions.embedAllFonts = false;
            saveOptions.embedLinkedFiles = true;
            // saveOptions.flattenOuput
            saveOptions.includeDocumentThumbnails = true;
            // saveOptions.overprint
            saveOptions.postScript = EPSPostScriptLevelEnum.LEVEL2;
            saveOptions.preview = EPSPreview.TRANSPARENTCOLORTIFF;
            saveOptions.saveMultipleArtboards = false;

            return saveOptions;
        }

        /**
         * Fix source reference file size for FreePik requirements
         * @param doc {Document} Document
         * @param filename {File} File for save to
         * @private
         */
        private fixSourceFileSizeAndSave(doc: IllustratorDocument, destination: Folder){

            if(doc.pageItems[0].typename !== 'RasterItem') return; // if document doesnot have raster images
            if(this.config.rasterRequirements === false) return; // if raster is not required

            const pageItem = doc.pageItems[0] as RasterItem;

            const { width, height } = fitImage(pageItem, this.config.rasterRequirements);

            pageItem.width = width;
            pageItem.height = height;

            const jpegOptions = new ExportOptionsJPEG();
            const newName = this.getNewName(destination, doc.name);
            doc.exportFile(newName, ExportType.JPEG, jpegOptions);
        }

        private traceSourceFileFixSizeAndSave(doc: IllustratorDocument, destination: Folder){

            if(!this.config.vectorRequirements){ return; }

            if(doc.pageItems[0].typename === TI.TypeName.RasterItem) {
                const pluginItem = this.traceImage(doc.pageItems[0]);
                this.resizeItem(pluginItem, this.config.vectorRequirements);
                this.changeArtboard(doc, pluginItem);
            }

            // save file
            const newName = this.getNewName(destination, doc.name);
            doc.saveAs(newName, this.getEpsOptions());
        }
    }

    enum ApplicationType {
        Photoshop = 'Adobe Photoshop',
        Illustrator = 'Adobe Illustrator'
    }

}

function getCurrentDate(){
    const d = new Date();
    const day = d.getDate().toString();
    const month = (d.getMonth() + 1).toString();
    const year = d.getFullYear();

    return `${day.length == 2 ? day : '0' + day}.${month.length == 2 ? month : '0' + month}.${year}`;
}

function fitImage(doc: RasterItem | PluginItem, params: TI.IResolutionImage): { width: number, height: number } {

    // If image fit, just return its' size
    if(isFit(doc, params)){ return { width: doc.width, height: doc.height }; }

    let size = { width: doc.width, height: doc.height };

    // Fit by resolution
    if(params.resolution){
        const originalResolution = doc.width * doc.height;

        // Exact resolution
        if(typeof params.resolution === 'number'){
            size = getSizeByResolution({
                width: doc.width,
                height: doc.height
            }, params.resolution);
        }

        if(typeof params.resolution === 'object'){


            if(params.resolution.min && params.resolution.min > originalResolution){
                size = getSizeByResolution({
                    width: doc.width,
                    height: doc.height
                }, params.resolution.min);
            }

            if(params.resolution.max && params.resolution.max < originalResolution){
                size = getSizeByResolution({
                    width: doc.width,
                    height: doc.height
                }, params.resolution.max);
            }


        }
    }

    // Fit by width
    if(params.width){
        if(typeof params.width === 'number'){
            size = getSizeBySize(
                { width: doc.width, height: doc.height },
                { width: params.width }
            )
        }

        if(typeof params.width === 'object'){

            if(params.width.min && params.width.min > doc.width){
                size = getSizeBySize(
                    { width: doc.width, height: doc.height },
                    { width: params.width.min }
                )
            }

            if(params.width.max && params.width.max < doc.width){
                size = getSizeBySize(
                    { width: doc.width, height: doc.height },
                    { width: params.width.max }
                )
            }
        }
    }

    // Fit by height
    if(params.height){
        if(typeof params.height === 'number'){
            size = getSizeBySize(
                { width: doc.width, height: doc.height },
                { height: params.height }
            )
        }

        if(typeof params.height === 'object'){

            if(params.height.min && params.height.min > doc.height){
                size = getSizeBySize(
                    { width: doc.width, height: doc.height },
                    { height: params.height.min }
                )
            }

            if(params.height.max && params.height.max < doc.height){
                size = getSizeBySize(
                    { width: doc.width, height: doc.height },
                    { height: params.height.max }
                )
            }
        }
    }

    return size;
}

function isFit(doc: RasterItem | PluginItem, params: TI.IResolutionImage): boolean {

    /**
     * Check resolution
     */

    if(params.resolution){
        // If resolution is number
        if(typeof params.resolution === 'number' && params.resolution !== doc.width * doc.height) { return false; }

        // if resolution min
        if(typeof params.resolution === 'object' && params.resolution.min && params.resolution.min > doc.width * doc.height ) { return false; }

        // if resolution max
        if(typeof params.resolution === 'object' && params.resolution.max && params.resolution.max < doc.width * doc.height ) { return false; }
    }

    /**
     * Check height
     */
    if(params.height){
        // If resolution is number
        if(typeof params.height === 'number' && params.height !== doc.height) { return false; }

        // if resolution min
        if(typeof params.height === 'object' && params.height.min && params.height.min > doc.height ) { return false; }

        // if resolution max
        if(typeof params.height === 'object' && params.height.max && params.height.max < doc.height ) { return false; }
    }

    /**
     * Check width
     */
    if(params.width){
        // If resolution is number
        if(typeof params.width === 'number' && params.width !== doc.width) { return false; }

        // if resolution min
        if(typeof params.width === 'object' && params.width.min && params.width.min > doc.width ) { return false; }

        // if resolution max
        if(typeof params.width === 'object' && params.width.max && params.width.max < doc.width ) { return false; }
    }

    return true;
}

function getSizeByResolution(size: {width: number, height: number}, resolution: number): { width: number, height: number} {
    const originalResolution = size.width * size.height;
    const factor = Math.sqrt(resolution / originalResolution);

    return {
        width: Math.ceil(size.width * factor),
        height: Math.floor(size.height * factor)
    }
}

function getSizeBySize(
    size: {width: number, height: number},
    newSize: IHeight | IWidth): { width: number, height: number}
{
    const factor: number = ((newSize as IWidth).width) ? (newSize as IWidth).width / size.width : (newSize as IHeight).height / size.height;
    return {
        width: Math.round(size.width * factor),
        height: Math.round(size.height * factor)
    };
}

interface IHeight {
    height: number;
}

interface IWidth {
    width: number;
}
