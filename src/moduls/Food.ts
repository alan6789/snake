
class Food {
    private _x: number = 0
    private _y: number = 0

    constructor() {
        this.generateLocation()
    }

    get x() {
        return this._x
    }
    set x(value: number) {
        this._x = value
    }
    get y() {
        return this._y
    }
    set y(value: number) {
        this._y = value
    }

    // 生成坐标随机数
    private generateRandom(): number {
        return Math.floor((Math.random() * 30)) * 10
    }

    // 给食物随机生成一个位置
    generateLocation(): void {
        this._x = this.generateRandom()
        this._y = this.generateRandom()

        const foodEle: HTMLElement = document.getElementById('food')!
        foodEle.style.left = this._x + 'px'
        foodEle.style.top = this._y + 'px'
    }
}

export default Food