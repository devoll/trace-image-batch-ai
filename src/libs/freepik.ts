namespace Stocks {
    export class FreePick {

        constructor(sourceFolder: Folder) {

            const files = sourceFolder.getFiles("*.jpg");

            if(!files || files.length == 0){
                alert(Helpers.i18n("CHOOSE_SRC_FOLDER_EMPTY"));
                return;
            }

            this.process(sourceFolder, files);
        }

        /**
         * Main process
         * @param sourceFolder
         * @param files
         * @private
         */
        private process(sourceFolder: Folder, files: (File | Folder)[]){

            // Create new destination folder
            const destinationFolder = new Folder(`${sourceFolder}/${getCurrentDate()}_FreePick`);
            destinationFolder.create();

            for(let i=0; i<files.length; i++){

                if(files[i] instanceof Folder) continue;

                const file = files[i] as File;

                const sourceDoc = app.open(file); // return document object
                this.fixSourceFileSizeAndSave(sourceDoc, this.getNewName(destinationFolder, sourceDoc.name, "jpg"));

                if(sourceDoc.pageItems[0].typename === 'RasterItem') {
                    const pluginItem = this.traceImage(sourceDoc.pageItems[0] as RasterItem);
                    this.resizeItem(pluginItem);
                    this.changeArtboard(sourceDoc, pluginItem);
                }

                // save file
                const newName = this.getNewName(destinationFolder, sourceDoc.name);
                sourceDoc.saveAs(newName, this.getEpsOptions());
                sourceDoc.close();
            }

            alert(`${Helpers.i18n("PROCESSED_FILED")}: ${files.length}`);
        }

        /**
         * Trace raster image
         * @param {object} rasterItem
         * @returns {Object} traced image PluginItem
         */
         private traceImage(rasterItem: RasterItem){
             if(rasterItem.typename !== 'RasterItem'){
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
        private resizeItem(pluginItem: PluginItem){
            const basedResolution = 4194304;
            const upTo = Math.sqrt(basedResolution / (pluginItem.width * pluginItem.height));

            pluginItem.width = Math.round(pluginItem.width * upTo);
            pluginItem.height = Math.round(pluginItem.height * upTo);
        }

        /**
         * Fit artboard to image
         * @param {Object} sourceDoc
         * @param {Object} pluginItem
         */
         private changeArtboard(sourceDoc: Document, pluginItem: PluginItem){
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
        private fixSourceFileSizeAndSave(doc: Document, filename: File){

            if(doc.pageItems[0].typename !== 'RasterItem') return;
            const pageItem = doc.pageItems[0] as RasterItem;

            if(isFit(pageItem, 2000, 8000) === false){
                const minSize = pageItem.width > pageItem.height ? pageItem.height : pageItem.width;
                const maxSize = pageItem.width > pageItem.height ? pageItem.width : pageItem.height;

                if(minSize < 2000 && maxSize > 8000){
                    alert("Can not be resize to fit requirement size: " + doc.fullName);
                    return;
                }

                if(minSize < 2000){
                    // Scale to fit minimum requirements
                    const scale = 2000 / minSize;
                    pageItem.width = Math.ceil(pageItem.width * scale);
                    pageItem.height = Math.ceil(pageItem.height * scale);
                }else{
                    // Scale to fit maximum
                    const scale = 8000 / maxSize;
                    pageItem.width = Math.floor(pageItem.width * scale);
                    pageItem.height = Math.floor(pageItem.height * scale);
                }
            }

            const jpegOptions = new ExportOptionsJPEG();
            doc.exportFile(filename, ExportType.JPEG, jpegOptions);
        }

    }
}

function getCurrentDate(){
    const d = new Date();
    const day = d.getDate().toString();
    const month = (d.getMonth() + 1).toString();
    const year = d.getFullYear();

    return `${day.length == 2 ? day : '0' + day}.${month.length == 2 ? month : '0' + month}.${year}`;
}

function isFit(doc: RasterItem, min: number, max: number): boolean{
    return doc.width <= max && doc.width >= min && doc.height <= max && doc.height >= min
}
