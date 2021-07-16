
// 分数面板类
class ScorePanel {
    private _score: number //分数
    private _level: number //等级
    private _upgradeScore: number = 10

    constructor(score = 0, level = 1) {
        this._score = score
        this._level = level
    }

    private get score() {
        return this._score
    }
    private set score(value: number) {
        this._score = value
        document.getElementById('score')!.innerHTML = String(value)
        this.level = Math.ceil(value / this._upgradeScore)
    }

    get level() {
        return this._level
    }
    private set level(value: number) {
        document.getElementById('level')!.innerHTML = String(value)
        this._level = value
    }

    addScore(): void {
        this.score = this.score + 1
    }
}

export default ScorePanel
