
class Snake {

    private _x: number = 0;
    private _y: number = 0;


    private _snakeHead: HTMLElement;
    private _snakeEle: HTMLElement;
    private _bodies: HTMLCollection;


    constructor() {
        this._snakeEle = document.getElementById('snake')! as HTMLElement;
        this._snakeHead = document.getElementById('snake')!.firstChild as HTMLElement;
        this._bodies = this._snakeEle.getElementsByTagName('b')

        this.x = this.generateRandom()
        this.y = this.generateRandom()

    }

    set x(value: number) {
        this._x = value
        this._snakeHead.style.left = this._x + 'px'
    }
    set y(value: number) {
        this._y = value
        this._snakeHead.style.top = this._y + 'px'
    }

    get x(): number {
        return this._x
    }
    get y(): number {
        return this._y
    }

    // 生成坐标随机数
    private generateRandom(): number {
        return Math.floor((Math.random() * 30)) * 10
    }

    // 蛇吃了食物，生成一个尾巴
    eatFood() {
        const b = document.createElement('b')
        this._snakeEle.appendChild(b)
    }

    // 移动身体
    moveBodies() {
        for (let i = this._bodies.length - 1; i > 0; i--) {
            const ele: HTMLElement = this._bodies[i - 1] as HTMLElement;

            (<HTMLElement>this._bodies[i]).style.left = ele.style.left;
            (<HTMLElement>this._bodies[i]).style.top = ele.style.top;
        }
    }
}

export default Snake