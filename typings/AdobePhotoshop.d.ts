/**
 * Adobe Photoshop Type Definition
 */

declare class PhotoshopApplication {
    activeDocument: PhotoshopDocument;
    backgroundColor: SolidColor;
    readonly build: string;
    readonly cloudWorkAreaDirectory: string;
    colorSettings: string;
    currentTool: string;
    displayDialogs: DialogModes;
    readonly documents: Documents;
    readonly fonts: TextFonts;
    foregroundColor: SolidColor;
    readonly freeMemory: number;
    readonly locale: string;
    readonly macintoshFileTypes: Array<string>;
    measurementLog: MeasurementLog;
    readonly name: ApplicationType.Photoshop;
    readonly notifiers: Notifiers;
    notifiersEnabled: boolean;
    readonly path: File;
    playbackDisplaysDialogs: DialogModes;
    playbackParameters: ActionDescriptor;
    readonly preferences: Preferences;
    readonly preferencesFolder: File;
    readonly recentFiles: Array<File>;
    readonly scriptingBuildDate: string;
    readonly scriptingVersion: string;
    readonly typename: string;
    readonly version: string;
    readonly windowsFileTypes: Array<string>;

    batch( inputFiles: Array<File>, action: string, from: string, options?: BatchOptions): string;
    beep(): void;
    bringToFont(): void;
    changeProgressText(progressText: string): void;
    charIDToTypeID(charID: string): number;
    compareWithNumbers(first: string, second: string): number;
    doAction(action: string, from: string): void;
    doForcedProgress(progressString: string, javaScriptString: string): void;
    doProgress(progressString: string, javaScriptString: string): void;
    doProgressSegmentTask(segmentLength: number, done: number, total: number, javaScriptString: string): boolean;
    doProgressSubTask(index: number, limit: number, javaScriptString: string): boolean;
    doProgressTask(taskLength: number, javaScriptString: string): boolean;
    eraseCustomOptions(key: string): void;
    executeAction(eventID: number, descriptor?: ActionDescriptor, displayDialogs?: DialogModes): ActionDescriptor;
    executeActionGet(reference: ActionReference): ActionDescriptor;
    featureEnabled(name: string): boolean;
    getCustomOptions(key: string): ActionDescriptor;
    isQuicktimeAvailable(): boolean;
    load(document: File): void;

    /**
     * @deprecated The method should not be used for Adobe Photoshop CS4
     */
    makeContactSheet(inputFiles: Array<File>, options?: ContactSheetOptions): string;

    /**
     * @deprecated The method should not be used for Adobe Photoshop CS4
     */
    makePDFPresentation(inputFiles: Array<File>, outputFiles: File, options?: PresentationOptions): string;

    /**
     * @deprecated The method should not be used for Adobe Photoshop CS4
     */
    makePhotoGallery(inputFolder: Array<File>, outputFolder: File): string;

    /**
     * @deprecated The method should not be used for Adobe Photoshop CS4
     */
    makePhotomerge(inputFiles: Array<File>): string;

    /**
     * @deprecated The method should not be used for Adobe Photoshop CS4
     */
    makePicturePackage(inputFiles: Array<File>, options?: PicturePackageOptions): string;

    open(document: File, as?: OpenDocumentType, asSmartObject?: boolean): PhotoshopDocument;
    openDialog(): Array<File>;
    purge(target: PurgeTarget): void;
    putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void;
    refresh(): void;
    refreshFonts(): void;
    runMenuItem(menuID: number): void;
    showColorPicker(): boolean;
    stringIDToTypeID(stringID: string): number;
    togglePalettes(): void;
    toolSupportsBrushes(tool: string): boolean;
    toolSupportsBrushPresets(tool: string): boolean;
    typeIDToCharID(typeID: number): string;
    typeIDToStringID(typeID: number): string;
    updateProgress(done: number, total: number): boolean;
}

declare class PhotoshopDocument {
    activeChannels: Array<Channel>;
    activeHistoryBrushSource: Guide;
    activeHistoryState: Guide;
    activeLayer: ArtLayer | LayerSet;
    readonly artLayers: ArtLayers;
    readonly backgroundLayer: ArtLayer;
    bitsPerChannel: BitsPerChannelType;
    readonly channels: Channels;
    readonly cloudDocument: boolean;
    readonly cloudWorkAreaDirectory: string;
    colorProfileName: string;
    colorProfileType: ColorProfileType;
    readonly colorSamplers: ColorSamplers;
    readonly componentChannels: Array<Channel>;
    readonly countItems: CountItems;
    readonly fullName: File;
    readonly guides: Guides;
    readonly height: number;
    readonly histogram: Array<number>;
    readonly historyStates: HistoryStates;
    readonly info: DocumentInfo;
    readonly layerComps: LayerComps;
    readonly layers: Layers;
    readonly layerSets: LayerSets;
    readonly managerd: boolean;
    readonly measurementScale: MeasurementScale;
    readonly mode: DocumentMode;
    readonly name: string;
    readonly parent: Application;
    readonly path: File;
    readonly pathItems: PathItems;
    pixelAspectRatio: number;
    readonly printSettings: DocumentPrintSettings;
    quickMaskMode: boolean;
    readonly resolution: number;
    readonly saved: boolean;
    readonly selection: Selection;
    readonly typename: string;
    readonly width: number;
    readonly xmpMetaData: XmpMetaData;

    autoCount(channel: Channel, threshold: number): void;
    changeMode(destinationMode: ChangeMode, options?: BitmapConversionOptions | IndexedConversionOptions): void;
    close(saving?: PhotoshopSaveOptions): void;
    convertProfile(destinationProfile: string, intent: Intent, blackPointCompensation?: boolean, dither?: boolean): void;
    crop(bounds: [ number, number, number, number ], angle?: number, width?: number, height?: number): void;
    duplicate( name?: string, mergeLayersOnly?: boolean): Document;
    exportDocument(exportIn?: File, exportAs?: ExportType, options?: ExportOptionsIllustrator | ExportOptionsSaveForWeb ): void;
    flatten(): void;
    flipCanvas(direction: Direction): void;
    importAnnotations(file: File): void;
    mergeVisibleLayers(): void;
    paste(intoSelection?: boolean): ArtLayer;
    print(sourceSpace?: SourceSpaceType, printSpace?: string, intent?: Intent, blackPointCompensation?: boolean): void;
    printOneCopy(): void;
    rasterizeAllLayers(): void;
    recordMeasurements(source?: MeasurementSource, dataPoints: Array<string>): void;
    resizeCanvas(width?: number, height?: number, anchor?: AnchorPosition): void;
    resizeImage(width?: number, height?: number, resolution?: number, resampleMethod?: ResampleMethod, amount?: number): void;
    revealAll(): void;
    rotateCanvas(angle: number): void;
    save(): void;
    saveAs(saveIn: File, options?: any, asCopy?: boolean, extensionType?: Extension): void;
    splitChannels(): Array<Document>;
    suspendHistory(hostoryString: string, javascriptString: string): void;
    trap(width: number): void;
    trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void;
}

declare class TrimType{
    BOTTOMRIGHT;
    TOPLEFT;
    TRANSPARENT;
}

declare class Extension {

}

declare class ResampleMethod {
    AUTOMATIC;
    BICUBIC;
    BICUBICAUTOMATIC;
    BICUBICSHARPER;
    BICUBICSMOOTHER;
    BILINEAR;
    NEARESTNEIGHBOR;
    NONE;
    PRESERVEDETAILS;
}

declare class AnchorPosition {

}

declare class MeasurementSource {

}

declare class SourceSpaceType {

}

declare class Direction {

}

declare class ExportOptionsSaveForWeb {

}

declare class ExportOptionsIllustrator {

}

declare class ExportType {

}

declare class File {

}

declare class Intent {

}

declare class PhotoshopSaveOptions {

}

declare class IndexedConversionOptions {

}

declare class BitmapConversionOptions {

}

declare class ChangeMode {

}

declare class XmpMetaData {

}

declare class Selection {

}

declare class DocumentPrintSettings {

}

declare class PathItems {

}

declare class DocumentMode {

}

declare class MeasurementScale {

}

declare class LayerSets {

}

declare class Layers {

}

declare class LayerComps {

}

declare class DocumentInfo {

}

declare class HistoryStates {

}

declare class Guides {

}

declare class CountItems {

}

declare class ColorSamplers {

}

declare class ColorProfileType {

}

declare class Channels {

}

declare class BitsPerChannelType {

}

declare class ArtLayers {

}

declare class LayerSet {

}

declare class ArtLayer {

}

declare class Guide {

}

declare class Channel {

}

declare class SolidColor {

}

declare class DialogModes {

}

declare class Documents {

}

declare class TextFonts {

}

declare class MeasurementLog {

}

declare class Notifiers {

}

declare class ActionDescriptor {

}

declare class Preferences {

}

declare class BatchOptions {

}
