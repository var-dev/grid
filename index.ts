/**
 * 2D grid that extends Array for coordinate-based access
 * @template T The type of elements stored in the grid
 */
class Grid<T> extends Array<T>{
  private readonly _width: number
  private readonly _height: number
  
  /**
   * @param width Grid width
   * @param height Grid height
   * @param outBoundsCbX Callback for out-of-bounds X action
   * @param outBoundsCbY Callback for out-of-bounds Y action
   * @param array Initial array data
   */
  constructor(width: number, height: number, private outBoundsCbX: ()=>T | void = ()=>{}, private outBoundsCbY: ()=>T | void = ()=>{}, array: Array<T> = []){
    super()
    this._width = width
    this._height = height
    this.push(...array)
  }
  
  /** Converts x,y coordinates to array index */
  public index (x: number, y: number): number{
    return y * this.width + x 
  }
  
  /** Gets value at x,y coordinates */
  getCell(x: number, y: number): T | void{
    if(x < 0 || x >= this.width ) { return this.outBoundsCbX() }
    if(y < 0 || y >= this.height) { return this.outBoundsCbY() }
    return this[this.index(x, y)]
  }
  
  /** Sets value at x,y coordinates */
  setCell(x: number, y: number, value: T): T | void{
    if(x < 0 || x >= this.width ) { return this.outBoundsCbX() }
    if(y < 0 || y >= this.height) { return this.outBoundsCbY() }
    this[this.index(x, y)] = value
    return value
  }
  
  get width(){
    return this._width
  }
  
  get height(){
    return this._height
  }
}

export { Grid };