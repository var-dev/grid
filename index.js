/**
 * 2D grid that extends Array for coordinate-based access
 * @template T The type of elements stored in the grid
 */
class Grid extends Array {
    outBoundsCbX;
    outBoundsCbY;
    _width;
    _height;
    /**
     * @param width Grid width
     * @param height Grid height
     * @param outBoundsCbX Callback for out-of-bounds X action
     * @param outBoundsCbY Callback for out-of-bounds Y action
     * @param array Initial array data
     */
    constructor(width, height, outBoundsCbX = () => { }, outBoundsCbY = () => { }, array = []) {
        super();
        this.outBoundsCbX = outBoundsCbX;
        this.outBoundsCbY = outBoundsCbY;
        this._width = width;
        this._height = height;
        this.push(...array);
    }
    /** Converts x,y coordinates to array index */
    index(x, y) {
        return y * this.width + x;
    }
    /** Gets value at x,y coordinates */
    getCell(x, y) {
        if (x < 0 || x >= this.width) {
            return this.outBoundsCbX();
        }
        if (y < 0 || y >= this.height) {
            return this.outBoundsCbY();
        }
        return this[this.index(x, y)];
    }
    /** Sets value at x,y coordinates */
    setCell(x, y, value) {
        if (x < 0 || x >= this.width) {
            return this.outBoundsCbX();
        }
        if (y < 0 || y >= this.height) {
            return this.outBoundsCbY();
        }
        this[this.index(x, y)] = value;
        return value;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}
export { Grid };
//# sourceMappingURL=index.js.map