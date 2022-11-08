(() => {
  class e {
    constructor() { this.itemCellArray = document.querySelectorAll('.item-cell'), this.createGoblinElement(), this.changeCell(); }

    createGoblinElement() { const e = document.createElement('img'); e.classList.add('goblin-img'), e.src = './src/img/goblin.png', this.goblinElement = e; }

    getRandomFlag() { const e = Math.floor(Math.random() * (this.itemCellArray.length - 1)); this.currentFlag = e === this.currentFlag ? this.getRandomFlag() : e; }

    changeCell() { this.getRandomFlag(), this.itemCellArray[this.currentFlag].appendChild(this.goblinElement), setInterval((() => { this.getRandomFlag(), this.itemCellArray[this.currentFlag].appendChild(this.goblinElement); }), 2e3); }
  }document.addEventListener('DOMContentLoaded', (() => { new e(); }));
})();
