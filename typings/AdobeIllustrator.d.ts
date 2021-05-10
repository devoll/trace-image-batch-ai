/**
 * Adobe Illustrator Type Definition
 */

/**
 * The Adobe® Illustrator® application object, referenced using the pre-defined global app object, which contains all other Illustrator objects.
 */
declare class IllustratorApplication {
    activeDocument: IllustratorDocument;
    readonly browserAvailable: boolean;
    readonly buildNumber: string;
    readonly colorSettingsList: object;
    coordinateSystem: CoordinateSystem;
    readonly defaultColorSettings: File;
    readonly documents: Documents;
    readonly flattenerPresetList: object;
    readonly freeMemory: number;
    readonly locale: string;
    readonly name: ApplicationType.Illustrator;
    readonly pasteRememberLayers: boolean;
    readonly path: File;
    readonly PDFPresetsList: object;
    readonly PPDFileList: object;
    preferences: Preferences;
    readonly printerList: Array<Printer>;
    readonly printPresetsList: object;
    readonly scriptingVersion: string;
    selection: Array<object>;
    readonly startupPresetsList: object;
    readonly textFonts: TextFonts;
    readonly tracingPresetList: Array<object>;
    readonly typename: TI.TypeName.Application;
    userInteractionLevel: UserInteractionLevel;
    readonly version: string;
    readonly visible: string;

    beep(): void;

    concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix;

    concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix;

    concatenateScaleMatrix(matrix: Matrix, scaleX: number, scaleY: number): Matrix;

    concatenateTranslationMatrix(matrix: Matrix, deltaX: number, deltaY: number): Matrix;

    convertSampleColor(
        sourceColorSpace: ImageColorSpace,
        sourceColor: ColorComponents,
        destColorSpace: ImageColorSpace,
        colorConvertPurpose: ColorConvertPurpose,
        sourceHasAlpha?: boolean,
        destHasAlpha?: boolean
    ): Array<ColorComponents>;

    copy(): void;

    cut(): void;

    deleteWorkspace(workspaceName: string): boolean;

    getIdentityMatrix(): Matrix;

    getIsFileOpen(filePath: string): boolean;

    getPPDFileInfo(name: string): PPDFileInfo;

    getPresetFileOfType(presetType: DocumentPresetType): File;

    getPresetSettings(preset: string): DocumentPreset;

    getRotationMatrix(angle?: number): Matrix;

    getScaleMatrix(scaleX?: number, scaleY?: number): Matrix;

    getScriptableHelpGroup(): unknown; //@TODO: неизвестный тип variant исправить
    getTranslationMatrix(deltaX?: number, deltaY?: number): Matrix;

    invertMatrix(matrix: Matrix): Matrix;

    isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean;

    isSingularMatrix(matrix: Matrix): boolean;

    loadColorSettings(fileSpec: File): void;

    open(
        file: File,
        documentColorSpace?: DocumentColorSpace,
        options?: any
    ): IllustratorDocument;

    paste(): void;

    quit(): void;

    redo(): void;

    redraw(): void;

    resetWorkspace(): boolean;

    saveWorkspace(workspaceName: string): boolean;

    sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;

    showPresets(fileSpec: File): PrintPresetList;

    switchWorkspace(workspaceName: string): boolean;

    translatePlaceholderText(text: string): string;

    undo(): void;
}

/**
 * An Illustrator document. Documents are contained in the Application object.
 */
declare class IllustratorDocument {
    activeDataset: Dataset;
    activeLayer: Layer;
    readonly activeView: View;
    readonly artboards: Artboards;
    readonly brushes: Brushes;
    readonly characterStyles: CharacterStyles;
    readonly compoundPathItems: CompoundPathItems;
    cropBox: [number, number, number, number];
    cropStyle: CropOptions;
    readonly dataSets: Datasets;
    defaultFillColor: Color;
    defaultFilled: boolean;
    defaultFillOverprint: boolean;
    defaultStrokeCap: StrokeCap;
    defaultStrokeColor: Color;
    defaultStroked: boolean;
    defaultStrokeDashes: object;
    defaultStrokeDashOffset: number;
    defaultStrokeJoin: StrokeJoin;
    defaultStrokeMiterLimit: number;
    defaultStrokeOverprint: boolean;
    defaultStrokeWidth: number;
    readonly documentColorSpace: DocumentColorSpace;
    readonly fullName: File;
    readonly geometricBounds: [number, number, number, number];
    readonly gradients: Gradients;
    readonly graphicStyles: GraphicStyles;
    readonly graphItems: GraphItems;
    readonly groupItems: GroupItems;
    readonly height: number;
    readonly inkList: object;
    readonly kinsokuSet: object;
    readonly layers: Layers;
    readonly legacyTextItems: LegacyTextItems;
    readonly meshItems: MeshItems;
    readonly mojikumiSet: object;
    readonly name: string;
    readonly nonNativeItems: NonNativeItems;
    readonly outputResolution: number;
    readonly pageItems: PageItems;
    pageOrigin: [number, number];
    readonly paragraphStyles: ParagraphStyles;
    readonly parent: Application;
    readonly path: File;
    readonly pathItems: PathItems;
    readonly patterns: Patterns;
    readonly placedItems: PlacedItems;
    readonly pluginItems: PluginItems;
    readonly printTiles: boolean;
    rasterEffectSettings: RasterEffectOptions;
    readonly rasterItems: RasterItems;
    rulerOrigin: [number, number];
    readonly rulerUnits: RulerUnits;
    saved: boolean;
    selection: Array<object> | null;
    readonly showPlacedImages: boolean;
    readonly splitLongPaths: boolean;
    readonly spots: Spots;
    readonly stationery: boolean;
    readonly stories: Stories;
    readonly swatches: Swatches;
    readonly swatchGroups: SwatchGroups;
    readonly symbolItems: SymbolItems;
    readonly symbols: Symbols;
    readonly tags: Tags;
    readonly textFrames: TextFrameItems;
    readonly tileFullPages: boolean;
    readonly typename: TI.TypeName.Document;
    readonly useDefaultScreen: boolean;
    readonly variables: Variables;
    variablesLocked: boolean;
    readonly views: Views;
    readonly visibleBounds: [number, number, number, number];
    readonly width: number;
    XMPString: string;

    activate(): void;

    arrange(layoutStyle?: DocumentLayoutStyle): boolean;

    close(saveOptions?: IllustratorSaveOptions): void;

    closeNoUI(): void;

    convertCoordinate(coordinate: Point, source: CoordinateSystem, destination: CoordinateSystem): Point;

    exportFile(exportFile: File, exportFormat: ExportType,
               options?: any // @todo: variant type
    ): void;

    exportPDFPreset(file: File): void;

    exportPerspectiveGridPreset(file: File): void;

    exportPrintPreset(file: File): void;

    exportVariables(file: File): void;

    fitArtboardToSelectedArt(index?: number): boolean;

    getPerspectiveActivePlane(): PerspectiveGridPlaneType;

    hidePerspectiveGrid(): boolean;

    imageCapture(imageFile: File, clipBounds?: Rect, options?: ImageCaptureOptions): void;

    importCharacterStyles(fileSpec: File): void;

    importParagraphStyles(fileSpec: File): void;

    importPDFPreset(fileSpec: File, replacingPreset?: boolean): void;

    importPerspectiveGridPreset(fileSpec: File, perspectivePreset?: string): void;

    importPrintPreset(printPreset: string, fileSpec: File): void;

    importVariables(fileSpec: File): void;

    print(options?: PrintOptions): void;

    rasterize(
        sourceArt: any, //@todo: variant
        clipBounds?: Rect,
        options?: RasterizeOptions
    ): RasterItem;

    rearrangeArboards(
        artboardLayout?: DocumentArtboardLayout,
        artboardRowsOrCols?: number,
        artboardSpacing?: number,
        artboardMoveArtwork?: boolean
    ): boolean;

    save(): void;

    saveAs(saveIn: File, options?: SaveOptions): void;

    saveNoUI(saveIn: File): void;

    selectObjectsOnActiveArtboard(): boolean;

    setActivePlane(gridPlane: PerspectiveGridPlaneType): boolean;

    selectPerspectivePreset(gridType: PerspectiveGridType, presetName: string): boolean;

    showPerspectiveGrid(): boolean;

    windowCapture(imageFile: File, windowSize: [number, number]): void;
}

declare class PerspectiveGridType {

}

declare class DocumentArtboardLayout {

}

declare class RasterizeOptions {

}

declare class PrintOptions {

}

declare class ImageCaptureOptions {

}

declare class Rect {

}

declare class PerspectiveGridPlaneType {

}

declare class ExportType {
    static FLASH;
    static GIF;
    static JPEG;
    static Photoshop;
    static AutoCAD;
    static PNG24;
    static PNG8;
    static SVG;
    static TIFF;
}

declare class ExportOptionsJPEG {
    antiAliasing: boolean = true;
    artBoardClipping: boolean;
    blurAmount: number = 0.0;
    horizontalScale: number = 100.0;
    matte: boolean = true;
    matteColor: RGBColor;
    optimization: boolean = true;
    qualitySetting: number = 30;
    saveAsHtml: boolean = false;
    readonly typename: string;
    verticalScale: number = 100.0;

}

declare class RGBColor {
    blue: number;
    green: number;
    red: number;
    readonly typename: TI.TypeName.RGBColor;
}

declare class Point extends Array {
    left: number;
    readonly length: number;
    top: number;
    x: number;
    y: number;
}

declare class SaveOptions {
    static DONOTSAVECHANGES;
    static SAVECHANGES;
    static PROMPTTOSAVECHANGES;
}

declare class DocumentLayoutStyle {

}

declare class CoordinateSystem {

}

declare class Preferences {

}

declare class Printer {

}

declare class TextFonts {

}

declare class UserInteractionLevel {

}

declare class Matrix {

}

declare class ImageColorSpace {

}

declare class ColorComponents {

}

declare class ColorConvertPurpose {

}

declare class PPDFileInfo {

}

declare class DocumentPresetType {

}

declare class DocumentPreset {

}

declare class DocumentColorSpace {

}

declare class PrintPresetList {

}

/**
 * A bitmap art item in a document. A script can create a raster item from an external file, or by copying an existing
 * raster item with the duplicate method.
 */
declare class RasterItem {
    artworkKnockout: KnockoutState;
    readonly bitsPerChannel: number;
    blendingMode: BlendModes;
    boundingBox: [number, number, number, number];
    readonly channels: number;
    readonly colorants: Array<string>;
    readonly colorizedGrayscale: boolean;
    contentVariable: Variable;
    readonly controlBounds: [number, number, number, number];
    readonly editable: boolean;
    embedded: boolean;
    readonly file: File;
    readonly geometricBounds: [number, number, number, number];
    height: number;
    hidden: boolean;
    readonly imageColorSpace: ImageColorSpace;
    isIsolated: boolean;
    readonly layer: Layer;
    left: number;
    locked: boolean;
    matrix: Matrix;
    name: string;
    note: string;
    opacity: number;
    overprint: boolean;
    readonly parent: Layer | GroupItem;
    readonly position: [number, number];
    selected: boolean;
    sliced: boolean;
    status: RasterLinkState;
    readonly tags: Tags;
    top: number;
    readonly transparent: boolean;
    readonly typename: TI.TypeName.RasterItem;
    uRL: string;
    visibilityVariable: Variable;
    readonly visibleBounds: [number, number, number, number];
    width: number;
    wrapInside: boolean;
    wrapOffset: number;
    wrapped: boolean;
    readonly zOrderPosition: number;

    colorize(rasterColor: Color): void;

    duplicate(relativeObject?: object, insertionLocation?: ElementPlacement): RasterItem;

    move(relativeObject: object, insertionLocation: ElementPlacement): RasterItem;

    remove(): void;

    resize(
        scaleX: number,
        scaleY: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        scaleAbout?: Transformation
    ): void;

    rotate(
        angle: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        rotateAbout?: Transformation
    ): void;

    trace(): PluginItem;

    transform(
        transformationMatrix: Matrix,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        transformAbout?: Transformation
    ): void;

    translate(
        deltaX?: number,
        deltaY?: number,
        transformObjects?: boolean,
        transformFillPatterns?: boolean,
        transformFillGradients?: boolean,
        transformStrokePatterns?: boolean
    ): void;

    zOrder(zOrderCmd: ZOrderMethod): void;
}

declare class KnockoutState {

}

declare class BlendModes {

}

declare class Variable {

}

declare class Variables {

}

declare class Layer {

}

declare class layers {

}

declare class GroupItem {
    readonly typename: TI.TypeName.GroupItem;
}

declare class RasterLinkState {

}

declare class Tags {

}

declare class Color {

}

declare class ElementPlacement {

}

declare class Transformation {

}

declare class PluginItem {
    artworkKnockout: KnockoutState;
    blendingMode: BlendModes;
    readonly controlBounds: [number, number, number, number];
    readonly editable: boolean;
    readonly geometricBounds: [number, number, number, number];
    height: number;
    hidden: boolean;
    isIsolated: boolean;
    isTracing: boolean;
    readonly layer: Layer;
    left: number;
    locked: boolean;
    name: string;
    note: string;
    opacity: number;
    readonly parent: Layer | GroupItem;
    position: [number, number];
    selected: boolean
    sliced: boolean;
    readonly tags: Tags;
    top: number;
    tracing: TracingObject;
    readonly typename: TI.TypeName.PluginItem;
    uRL: string;
    visibilityVariable: Variable;
    readonly visibleBounds: [number, number, number, number];
    width: number;
    wrapInside: boolean;
    wrapOffset: number;
    wrapped: boolean;
    readonly zOrderPosition: number;

    duplicate(relativeObject?: object, insertionLocation?: ElementPlacement): PluginItem;

    move(relativeObject: object, insertionLocation: ElementPlacement): PluginItem;

    remove(): void;

    resize(
        scaleX: number,
        scaleY: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        scaleAbout?: Transformation
    ): void;

    rotate(
        angle: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        rotateAbout?: Transformation
    ): void;

    transform(
        transformationMatrix: Matrix,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        transformAbout?: Transformation
    ): void;

    translate(
        deltaX?: number,
        deltaY?: number,
        transformObjects?: boolean,
        transformFillPatterns?: boolean,
        transformFillGradients?: boolean,
        transformStrokePatterns?: boolean
    ): void;

    zOrder(zOrderCmd: ZOrderMethod): void;
}

declare class TracingObject {
    readonly anchorCount: number;
    readonly areaCount: number;
    readonly imageResolution: number;
    readonly parent: object;
    readonly pathCount: number;
    sourceArt: PlacedItem | RasterItem;
    tracingOptions: TracingOptions;
    readonly typename: TI.TypeName.TracingObject;
    readonly usedColorCount: number;

    expandTracing(viewed?: boolean): GroupItem;

    releaseTracing(): PlacedItems | RasterItem;
}

declare class TracingOptions {
    cornerAngle: number;
    fills: boolean;
    ignoreWhite: boolean;
    livePainOutput: boolean;
    maxColors: number;
    maxStrokeWeight: number;
    minArea: number;
    minStrokeLength: number;
    outputToSwatches: boolean;
    palette: string;
    readonly parent: object;
    pathFitting: number;
    preprocessBlur: number;
    readonly preset: string;
    resample: boolean;
    resampleResolution: number;
    strokes: boolean;
    threshold: number;
    tracingMode: TracingModeType;
    readonly typename: TI.TypeName.TracingOptions;
    viewRaster: ViewRasterType;
    viewVector: ViewVectorType;

    loadFromPreset(presetName: string): boolean;

    storeToPreset(presetName: string): boolean;
}

declare class TracingModeType {
    TRACINGMODEBLACKANDWHITE;
    TRACINGMODECOLOR;
    TRACINGMODEGRAY;
}

declare class PluginItems {

}

declare class ZOrderMethod {

}

declare class Dataset {

}

declare class Datasets {

}

declare class View {

}

declare class Views {

}

declare class Artboards extends Array<Artboard> {
    readonly length: number;
    readonly parent: Artboard;
    readonly typename: TI.TypeName.Artboards;

    add(artboardRect: Rect): Artboard;

    getActiveArtboardIndex(): number;

    getByName(name: string): Artboard;

    insert(artboardRect: Rect, index: number): void;

    remove(index: number): void;

    setActiveArtboardIndex(index: number): void;
}

declare class Artboard {
    artboardRect: Rect;
    name: string;
    readonly parent: Document;
    rulerOrigin: Point;
    rulerPAR: number;
    showCenter: boolean;
    showCrossHairs: boolean;
    showSafeAreas: boolean;
    readonly typename: TI.TypeName.Artboard;

    remove(): void;
}

declare class Brushes {

}

declare class CharacterStyles {

}

declare class CompoundPathItems extends Array<CompoundPathItem> {

}

declare class CompoundPathItem {
    readonly typename: TI.TypeName.CompoundPathItem;
}

declare class CropOptions {

}

declare class StrokeCap {

}

declare class StrokeJoin {

}

declare class Gradients {

}

declare class GraphicStyles {

}

declare class GraphItems extends Array<GraphItem> {

}

declare class GraphItem {
    readonly typename: TI.TypeName.GraphItem;
}

declare class GroupItems {

}

declare class LegacyTextItems extends Array<LegacyTextItem> {

}

declare class LegacyTextItem {
    readonly typename: TI.TypeName.LegacyTextItem;
}

declare class MeshItems extends Array<MeshItem> {

}

declare class MeshItem {
    readonly typename: TI.TypeName.MeshItem;
}

declare class NonNativeItems extends Array<NonNativeItem> {

}

declare class NonNativeItem {
    readonly typename: TI.TypeName.NonNativeItem;
}

declare class PageItems extends Array<PageItem | CompoundPathItem | GraphItem | GroupItem | LegacyTextItem | MeshItem | NonNativeItem | PathItem | PlacedItem | PluginItem | RasterItem | SymbolItem | TextFrameItem> {
    readonly length: number;
    readonly parent: any;
    readonly typename: TI.TypeName.PageItems;

    getByName(name: string): PageItem;

    index(itemKey: string | number): PageItem;

    removeAll(): void;
}

declare class PageItem {
    artworkKnockout: KnockoutState;
    blendingMode: BlendModes;
    readonly controlBounds: [number, number, number, number];
    readonly editable: boolean;
    readonly geometricBounds: [number, number, number, number];
    height: number;
    hidden: boolean;
    isIsolated: boolean;
    readonly layer: Layer;
    left: number;
    locked: boolean;
    name: string;
    note: string;
    opacity: number;
    readonly parent: Layer | GroupItem;
    pixelAligned: boolean;
    position: Point;
    selected: boolean;
    sliced: boolean;
    tags: Tags;
    top: number;
    readonly typename: TI.TypeName.PageItem
    URL: string;
    visibilityVariable: any;
    width: number;
    wrapInside: boolean;
    wrapOffset: number;
    wrapped: boolean;
    readonly zOrderPosition: number;

    bringInPerspective(
        posX: number,
        posY: number,
        perspectiveGridPlane: PerspectiveGridPlaneType
    ): void;

    resize(
        scaleX: number,
        scaleY: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        scaleAbout?: Transformation
    ): void;

    rotate(
        angle: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        rotateAbout?: Transformation
    ): void;

    transform(
        transformationMatrix: Matrix,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        transformAbout?: Transformation
    ): void;

    translate(
        deltaX?: number,
        deltaY?: number,
        transformObjects?: boolean,
        transformFillPatterns?: boolean,
        transformFillGradients?: boolean,
        transformStrokePatterns?: boolean
    ): void;

    zOrder(zOrderCmd: ZOrderMethod): void;
}

declare class ParagraphStyles {

}

declare class PathItems extends Array<PathItem> {
    readonly length: number;
    readonly parent: any;
    readonly typename: TI.TypeName.PathItems;

    add(): PathItem;

    ellipse(
        top?: number,
        left?: number,
        width?: number,
        height?: number,
        reversed?: boolean,
        inscribed?: boolean
    ): PathItem

    getByName(name: string): PathItem;

    index(itemKey: string | number): PathItem;

    polygon(
        centerX?: number,
        centerY?: number,
        radius?: number,
        sides?: number,
        reversed?: boolean
    ): PathItem;

    rectangle(
        top: number,
        left: number,
        width: number,
        height: number,
        reversed?: boolean
    ): PathItem;

    removeAll(): void;

    roundedRectangle(
        top: number,
        left: number,
        width: number,
        height: number,
        horizontalRadius?: number,
        verticalRadius?: number,
        reversed?: boolean
    ): PathItem;

    star(
        centerX?: number,
        centerY?: number,
        radius?: number,
        innerRadius?: number,
        points?: number,
        reversed?: number
    ): PathItem;
}

declare class PathItem {
    readonly area: number;
    artworkKnockout: KnockoutState;
    blendingMode: BlendModes;
    clipping: boolean;
    closed: boolean;
    readonly controlBounds: [number, number, number, number];
    readonly editable: boolean;
    evenodd: boolean;
    fillColor: Color;
    filled: boolean;
    fillOverprint: boolean;
    readonly geometricBounds: [number, number, number, number];
    guides: boolean;
    height: number;
    hidden: boolean;
    isIsolated: boolean;
    layer: Layer;
    left: number;
    length: number;
    locked: boolean;
    name: string;
    note: string;
    opacity: number;
    parent: Layer | GroupItem;
    pathPoints: PathPoints;
    pixelAligned: boolean;
    polarity: PolarityValues;
    position: [number, number];
    resolution: number;
    selected: boolean;
    readonly selectedPathPoints: PathPoints;
    sliced: boolean;
    strokeCap: StrokeCap;
    strokeColor: Color;
    stroked: true;
    strokeDashes: object;
    strokeDashOffset: number;
    strokeJoin: StrokeJoin;
    strokeMiterLimit: numnber;
    strokeOverprint: boolean;
    strokeWidth: number;
    readonly tags: Tags;
    top: number;
    readonly typename: TI.TypeName.PathItem;
    uRL: string;
    visibilityVariable: Variable;
    readonly visibleBounds: [number, number, number, number];
    width: number;
    wrapInside: boolean;
    wrapOffset: number;
    wrapped: boolean;
    readonly zOrderPosition: number;

    duplicate(relativeObject?: object, insertionLocation?: ElementPlacement): PathItem;

    move(relativeObject: object, insertionLocation: ElementPlacement): PathItem;

    remove(): void;

    resize(
        scaleX: number,
        scaleY: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        scaleAbout?: Transformation
    ): void;

    rotate(
        angle: number,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        rotateAbout?: Transformation
    ): void;

    setEntirePath(pathPoints: Array<[number, number]>): void;

    transform(
        transformationMatrix: Matrix,
        changePositions?: boolean,
        changeFillPatterns?: boolean,
        changeFillGradients?: boolean,
        changeStrokePattern?: boolean,
        changeLineWidths?: number,
        transformAbout?: Transformation
    ): void;

    translate(
        deltaX?: number,
        deltaY?: number,
        transformObjects?: boolean,
        transformFillPatterns?: boolean,
        transformFillGradients?: boolean,
        transformStrokePatterns?: boolean
    ): void;

    zOrder(zOrderCmd: ZOrderMethod): void;
}

declare class PolarityValues {

}

declare class PathPoints {

}

declare class Patterns {

}

declare class PlacedItems extends Array<PlacedItem> {

}

declare class PlacedItem {
    readonly typename: TI.TypeName.PlacedItem;
}

declare class RasterEffectOptions {

}

declare class RasterItems {

}

declare class RulerUnits {

}

declare class Spots {

}

declare class Stories {

}

declare class Swatches {

}

declare class SwatchGroups {

}

declare class SymbolItems extends Array<SymbolItem> {

}

declare class SymbolItem {
    readonly typename: TI.TypeName.SymbolItem;
}

declare class Symbols {

}

declare class TextFrameItems extends Array<TextFrameItem> {

}

declare class TextFrameItem {
    readonly typename: TI.TypeName.TextFrameItem;
}

declare class EPSSaveOptions {
    artboardRange: string;
    cmykPostScript: boolean;
    compatibility: Compatibility;
    compatibleGradientPrinting: boolean = false;
    embedAllFonts: boolean = false;
    embedLinkedFiles: boolean;
    flattenOuput: OutputFlattening;
    includeDocumentThumbnails: boolean;
    overprint: PDFOverprint = PDFOverprint.PRESERVEPDFOVERPRINT;
    postScript: EPSPostScriptLevelEnum = EPSPostScriptLevelEnum.LEVEL2;
    preview: EPSPreview;
    saveMultipleArtboards: boolean = false;
    readonly typename: TI.TypeName.EPSSaveOptions;
}

declare class Compatibility {
    static ILLUSTRATOR8;
    static ILLUSTRATOR9;
    static ILLUSTRATOR10;
    static ILLUSTRATOR11;
    static ILLUSTRATOR12;
    static ILLUSTRATOR13;
    static ILLUSTRATOR14;
    static ILLUSTRATOR15;
    static ILLUSTRATOR16;
    static ILLUSTRATOR17;
    static ILLUSTRATOR19;
    static JAPANESEVERSION3;
}

declare class EPSPreview {
    static BWTIFF;
    static COLORTIFF;
    static TRANSPARENTCOLORTIFF;
    static None;
}

declare class PDFOverprint {
    static PRESERVEPDFOVERPRINT;
}

declare class EPSPostScriptLevelEnum {
    static LEVEL2;
}
