
declare class Window {
    active: boolean;
    alignChildren: string;
    alignment: string;
    bounds: Bounds;
    cancelElement: object;
    characters: number;
    readonly children: Array<object>;
    defaultElement: object;
    enabled: boolean;
    readonly frameBounds: Bounds;
    frameLocation: Point;
    readonly frameSize: Dimension;
    readonly graphics: ScriptUIGraphics;
    helpTip: string;
    indent: number;
    justify: string;
    layout: LayoutManager;
    location: Point;
    margins: number;
    maximized: boolean;
    minimized: boolean;
    maximumSize: Dimension;
    minimumSize: Dimension;
    orientation: string;
    readonly parent: object;
    preferredSize: Dimension;
    properties: object;
    shortcutKey: string;
    size: Dimension;
    spacing: number;
    text: number;
    readonly type: TI.WindowType;
    visible: boolean;
    readonly window: WIndow;
    readonly windowBounds: Bounds;

    constructor(
        type: TI.WindowType,
        title?: string,
        bounds?: Bounds,
        creation_properties?: {
            resizeable: boolean,
            su1PanelCoordinates: any,
            closeButton: boolean,
            maximizeButton: boolean,
            minimizeButton: boolean,
            independent: boolean
        }
    ): void;

    add(type: string, bounds?: Bounds, text?: string, creation_props?: any): ControlObject | ContainerObject;
    addEventListener(eventName: string, handler: object, capturePhase: boolean): boolean;
    alert(message: string, title: string, errorIcon?:boolean = false): void;
    center(window: Window): void;
    close(returns?: any): void;
    confirm(message: string, noAsDefault: boolean = false, title: string): boolean;
    dispatchEvent(): UIEvent;
    find(type: string, title: string): Window;
    hide(): void;
    notify(eventName: NotifyEventName): void;
    onClose: FunctionCallbackEvent;
    onDraw: FunctionCallbackEvent;
    onMove: FunctionCallbackEvent;
    onMoving: FunctionCallbackEvent;
    onResize: FunctionCallbackEvent;
    onResizing: FunctionCallbackEvent;
    onShortcutKey: FunctionCallbackEvent;
    onShow: FunctionCallbackEvent;
    prompt(prompt: string, defaultValue: string, title: string): string;
    remove(what: any): void;
    removeEventListener(eventName: string, handler:FunctionCallbackEvent, capturePhase?: boolean = false): boolean;
    show():void;

    static alert(message: string, title?: string, errorIcon?: boolean): void;
    static confirm(message: string, noAsDflt?: boolean, title?: string): boolean;
    static find(resourceName: string): Window | null;
    static find(type: TI.WindowType, title: string): Window | null;
    static prompt(message: string, preset: string, title?: string): string | null;
}

declare class ContainerObject {
    alignChildren: string;
    alignment: string;
    bounds: Bounds;
    readonly children: Array<any>;
    graphics: any; // ScriptUIGraphics object
    layout: LayoutManager;
    location: Point;
    margins: Margins;
    maximumSize: Dimension;
    minimumSize: Dimension;
    orientation: string;
    readonly parent: Window | ContainerObject;
    preferredSize: Dimension;
    properties: any;
    selection?: any; // For Tab only
    size: Dimension;
    spacing: number;
    text: string;
    visible: boolean;
    window: Window;
    windowBounds: Bounds;

    /**
     * Methods
     */
    add(type: string, bounds?: Bounds, text?: string, creation_props?: any): ContainerObject | ControlObject;
    add(type: string, value: string): void; // For ListBox items
    addEventListener( eventName: string, handler: () => void, capturePhase?: boolean): void;
    center(window?: Window): void;
    close(result?: number): void;
    dispatchEvent(eventObj: any): boolean;
    findElement(name: string): ControlObject | null;
    hide(): void;
    notify(event?: string): void;
    remove(index: number): void;
    remove(text: string): void;
    remove(child: ControlObject): void;
    removeAll(): void;
    removeEventListener(eventName: string, handler: () => void, capturePhase?: boolean): void;
    show(): any;
    update(): void;
}

declare class Margins {

}

declare class ControlObject {
    active: boolean;
    alignment: string;
    bounds: Bounds;
    characters: number;
    checked: boolean;
    columns?: any; // For Listbox object
    enabled: boolean;
    expanded?: boolean; // For ListItem object
    graphics: any;
    helpTip: string;
    icon: string | File;
    image: any;
    indent: number;
    index?: number; // For ListItem
    items: ControlObject[];
    itemSize: Dimension;
    jumpdelta: number;
    justify: string;
    location: Point;
    maximumSize: Dimension;
    minimumSize: Dimension;
    maxvalue: number;
    minvalue: number;
    readonly parent: ControlObject;
    preferredSize: Dimension;
    properties: any;
    selected?: Boolean; // For listitem
    selection?: Array<ListItem> | ListItem; // For ListBox only, Array of ListItem
    shortcutKey: string;
    size: Dimension;
    stepdelta: number;
    subitems: Array<{ text: string, image: any}>;
    text: string;
    textselection: string;
    title: string;
    titleLayout: {
        alignment: any,
        characters: number,
        spacing: number,
        margins: [ number, number, number, number ],
        justify: string,
        trancate: string
    };
    type: string;
    value: boolean | number;
    visible: Boolean;
    window: Window;
    windowBounds: Bounds;
    function_name: any;

    /**
     * Methods
     */

    addEventListener(eventName: string, handler: () => void, capturePhase?: boolean): void;
    dispatchEvent(eventObj: any): boolean;
    hide(): void;
    notify(event?: string): void;
    removeEventListener( eventName: string, handler: () => void, capturePhase?: boolean): void;
    show(): void;
    toString(): string;
    valueOf(): number;

}

declare class ListItem {

}


type FunctionCallbackEvent = () => void;

enum NotifyEventName {
    dialog = "dialog",
    palette = "palette",
    window = "window"
}

declare class BoundsPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}

declare class BoundsPoints {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

declare type Bounds = BoundsPosition | BoundsPoints | [ number, number, number, number ];

/**
 * Defines the size of a window or UI element. Contains a 2-element array.
 * Specifies the height and width of an element in pixels. A Dimension object is created when you set an element’s
 * size property. You can set the property using a JavaScript object with properties named width and height,
 * or an array with 2 values in the order [wd, ht].
 */
declare type Dimension = [ number, number ];

declare class ScriptUIGraphics {

}

/**
 * Controls the automatic layout behavior for a window or container.
 * The subclass AutoLayoutManager implements the default automatic layout behavior.
 */
declare class LayoutManager {
    layout(): void;
    resize(): void;
}
