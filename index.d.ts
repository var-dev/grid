/**
 * 2D grid that extends Array for coordinate-based access
 * @template T The type of elements stored in the grid
 */
declare class Grid<T> extends Array<T> {
    private outBoundsCbX;
    private outBoundsCbY;
    private readonly _width;
    private readonly _height;
    /**
     * @param width Grid width
     * @param height Grid height
     * @param outBoundsCbX Callback for out-of-bounds X action
     * @param outBoundsCbY Callback for out-of-bounds Y action
     * @param array Initial array data
     */
    constructor(width: number, height: number, outBoundsCbX?: () => T | void, outBoundsCbY?: () => T | void, array?: Array<T>);
    /** Converts x,y coordinates to array index */
    index(x: number, y: number): number;
    /** Gets value at x,y coordinates */
    getCell(x: number, y: number): T | void;
    /** Sets value at x,y coordinates */
    setCell(x: number, y: number, value: T): T | void;
    get width(): number;
    get height(): number;
}
export { Grid };
//# sourceMappingURL=index.d.ts.map