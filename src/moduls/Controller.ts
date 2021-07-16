
import './Score'
import Food from './Food'
import Snake from './Snake'
import Score from './Score'

// 四个方向的枚举
enum DirectionEnum {
    "top" = 'ArrowUp',
    "bottom" = 'ArrowDown',
    "left" = 'ArrowLeft',
    "right" = 'ArrowRight',
}

class Controller {

    food: Food;
    snake: Snake;
    score: Score;

    private _direction: DirectionEnum = DirectionEnum.right;

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.score = new Score()

        this.init()
    }

    private init() {

        this.move()

        window.addEventListener('keydown', this.keyboard.bind(this))

    }

    // 移动蛇
    private move(): void {
        this.snake.moveBodies()
        switch (this._direction) {
            case DirectionEnum.top:
                this.snake.y = this.snake.y - 10
                break;
            case DirectionEnum.bottom:
                this.snake.y = this.snake.y + 10
                break;
            case DirectionEnum.left:
                this.snake.x = this.snake.x - 10
                break;
            case DirectionEnum.right:
                this.snake.x = this.snake.x + 10
                break;
            default:
                break;
        }
        

        // 如果吃到食物
        if (this.checkEat()) {
            this.food.generateLocation(); // 食物换个位置
            this.snake.eatFood() //身体加一节
            this.score.addScore() //分数加一
        }
        setTimeout(() => { this.move() }, 200 - ((this.score.level - 1) * 20))
    }

    // 绑定键盘事件的回调
    private keyboard(event: KeyboardEvent): void {
        if ((Object as any).values(DirectionEnum).includes(event.code)) {
            this._direction = event.code as DirectionEnum
        }
    }

    // 判断吃到食物
    private checkEat(): boolean {
        return (this.snake.x === this.food.x) && (this.snake.y === this.food.y)
    }
}

export default Controller


