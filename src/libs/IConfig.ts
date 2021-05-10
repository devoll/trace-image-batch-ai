namespace TI {

    export enum TypeName {
        PageItem = 'PageItem',
        PathItem = 'PathItem',
        PlacedItem = 'PlacedItem',
        SymbolItem = 'SymbolItem',
        TextFrameItem = 'TextFrameItem',
        Document = 'Document',
        Application = 'Application',
        RGBColor = 'RGBColor',
        RasterItem = 'RasterItem',
        GroupItem = 'GroupItem',
        PluginItem = 'PluginItem',
        TracingObject = 'TracingObject',
        TracingOptions = 'TracingOptions',
        Artboards = 'Artboards',
        Artboard = 'Artboard',
        CompoundPathItem = 'CompoundPathItem',
        GraphItem = 'GraphItem',
        LegacyTextItem = 'LegacyTextItem',
        MeshItem = 'MeshItem',
        NonNativeItem = 'NonNativeItem',
        PageItems = 'PageItems',
        PathItems = 'PathItems',
        EPSSaveOptions = 'EPSSaveOptions'
    }

    export enum WindowType {
        dialog = "dialog",
        palette = "palette",
        window = "window"
    }


    /**
     * Interface for stock settings
     */
    export interface IConfig {
        name: string; // Stock name
        vectorRequirements: IResolutionImage | false; // Requirements for vector images
        rasterRequirements: IResolutionImage | false; // Requirements for raster images
        releaseFile: IReleaseFile | false; // Release file info
    }

    /**
     * Interface for output file resolution settings
     */
    export interface IResolutionImage {
        resolution?: IMinMax | number; // maximum allowed resolution
        width?: IMinMax | number,
        height?: IMinMax | number
    }

    interface IMinMax {
        min?: number;
        max?: number;
    }

    /**
     * Interface for release file
     */

    interface IReleaseFile {

    }
}
