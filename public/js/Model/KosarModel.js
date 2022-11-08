class KosarModel {
  #kosarTomb = [];
  constructor() {
    //this.#kosarTomb = this.#kosarTomb
  }

  onKosarba(elem) {
    this.#kosarTomb.push(elem);
    console.log(this.#kosarTomb);
  }

  getKosarTomb() {
    return this.#kosarTomb;
  }
}

export default KosarModel;
