declare function alert(string): void;

declare var app: PhotoshopApplication | IllustratorApplication;

declare enum ApplicationType {
    Photoshop = 'Adobe Photoshop',
    Illustrator = 'Adobe Illustrator'
}

declare class Folder {
    static readonly appData: Folder;
    static readonly appPackage: string;
    static readonly commonFiles: Folder;
    static readonly current: Folder;
    static readonly desktop: Folder;
    static readonly fs: string;
    static readonly myDocuments: Folder;
    static readonly startup: Folder;
    static readonly system: Folder;
    static readonly temp: Folder;
    static readonly trash: Folder;
    static readonly userData: Folder;

    static decode(uri: string): string;

    static encode(name: string): string;

    static isEncodingAvailable(name: string): boolean;

    static selectDialog(prompt: string): Folder | File

    constructor(path: string);

    readonly absoluteURI: string;
    readonly alias: boolean;
    readonly created: Date;
    readonly displayName: string;
    readonly error: string;
    readonly exists: boolean;
    readonly fsName: string;
    readonly fullName: string;
    readonly localizedName: string;
    readonly modified: Date;
    readonly name: string;
    readonly parent: Folder;
    readonly path: string;
    readonly relativeURI: string;

    changePath(path: string): boolean;

    create(): boolean;

    execute(): boolean;

    getFiles(mask?: string): Array<File | Folder>;

    getRelativeURI(basePath?: string): string;

    remove(): boolean;

    rename(newName: string): boolean;

    resolve(): FolderObject;

    selectDlg(prompt: string): File | Folder | null;

}

/**
 * Represents a file in the local file system in a platform-independent manner. All properties and methods resolve file system aliases automatically and act on the original file unless otherwise noted.
 */
declare class File {

    static readonly fs: string;

    static decode(uri: string): string;

    static encode(name: string): string;

    static isEncodingAvailable(name: string): boolean;

    static openDialog(prompt?: string, filter?: string, multiSelect?: boolean): File | null;

    static saveDialog(prompt: string, preset?: string): File | null;

    constructor(path?): File;

    readonly absoluteURI: string;
    readonly alias: boolean;
    readonly created: Date;
    readonly displayName: string;
    encoding: string;
    readonly eof: boolean;
    error: string;
    readonly exists: boolean;
    readonly fsName: string;
    readonly fullName: string;
    hidden: boolean;
    langth: number;
    lineFeed: string;
    readonly localizedName: string;
    readonly modified: Date;
    readonly name: string;
    readonly parent: Folder;
    readonly path: string;
    "readonly": boolean;
    readonly relativeURI: string;
    readonly type: string;

    changePath(path: string): boolean;

    close(): boolean;

    copy(target: string): boolean;

    createAlias(path?: string): boolean;

    execute(): boolean;

    getRelativeURI(basePath?: string): string;

    open(mode: string, type?: string, creator?: string): boolean;

    openDlg(prompt?: string, filter?: string, multiSelect?: boolean): File | Folder | null;

    read(chars?: number): string;

    readch(): string;

    readln(): string;

    remove(): boolean;

    rename(newName: string): boolean;

    resolve(): File | null;

    saveDlg(prompt?: string, preset?: string): File | null;

    seek(pos: number, mode?: number): boolean;

    tell(): number;

    write(...text: string): boolean;

    writeln(...text: string): boolean;

}
