
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
    readonly type: WindowType;
    visible: boolean;
    readonly window: WIndow;
    readonly windowBounds: Bounds;

    constructor(
        type: WindowType,
        title: string,
        bounds: Bounds,
        properties: {
            resizeable: boolean,
            su1PanelCoordinates: any,
            closeButton: boolean,
            maximizeButton: boolean,
            minimizeButton: boolean,
            independent: boolean
        }
    ): void;

    add(type: string, bounds: Bounds, text: string, properties: any): any;
    addEventListener(eventName: string, handler: object, capturePhase: boolean): boolean;
    alert(message: string, title: string, errorIcon?:boolean = false): void;
    center(window: Window): void;
    close(returns: any): void;
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
}

type FunctionCallbackEvent = () => void;

enum WindowType {
    dialog = "dialog",
    palette = "palette",
    window = "window"
}

enum NotifyEventName {
    dialog = "dialog",
    palette = "palette",
    window = "window"
}

declare class Bounds extends Array{
    bottom: number;
    height: number;
    left: number;
    readonly length: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
}

/**
 * Defines the size of a window or UI element. Contains a 2-element array.
 * Specifies the height and width of an element in pixels. A Dimension object is created when you set an element’s
 * size property. You can set the property using a JavaScript object with properties named width and height,
 * or an array with 2 values in the order [wd, ht].
 */
declare class Dimension extends Array {
    height: number;
    readonly length: number;
    width: number;
}

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
