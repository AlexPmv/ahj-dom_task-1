export default class GameLogic {
  constructor() {
    this.itemCellArray = document.querySelectorAll('.item-cell');
    this.createGoblinElement();
    this.changeCell();
  }

  createGoblinElement() {
    const goblinImg = document.createElement('img');
    goblinImg.classList.add('goblin-img');
    goblinImg.src = './src/img/goblin.png';
    this.goblinElement = goblinImg;
  }

  getRandomFlag() {
    const flag = Math.floor(Math.random() * (this.itemCellArray.length - 1));

    this.currentFlag = flag === this.currentFlag ? this.getRandomFlag() : flag;
  }

  changeCell() {
    this.getRandomFlag();
    this.itemCellArray[this.currentFlag].appendChild(this.goblinElement);

    setInterval(() => {
      this.getRandomFlag();
      this.itemCellArray[this.currentFlag].appendChild(this.goblinElement);
    }, 2000);
  }
}
