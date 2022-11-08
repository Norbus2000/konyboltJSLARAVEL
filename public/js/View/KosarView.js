/* class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        szuloElem.append(
            `<div class="konyvek"></div>`
            );
            this.kosarDiv=$(".kosar")
    

    tomb.forEach(item => {
        const kosaram = new KonyvPublicView(konyv,this.kosarDiv);
    });
}
} */

class KosarView {
  #kosarTomb;
  constructor(kosarTomb, szuloElem) {
    this.#kosarTomb = kosarTomb;
    szuloElem.html(`<table class="kosarTable"></table>`);
    this.tablaElem = $(".kosarTable");
    for (let index = 0; index < kosarTomb.length; index++) {
      this.tablaElem.append(`
    <tr>
    <td>${kosarTomb[index].cim}</td>
    <td>${kosarTomb[index].ar}</td>
    <td><button class="torles">törlés</button></td>
</tr>
`);
    }
    this.recordElem = szuloElem.children("tr:last-child");
    this.torolElem = this.recordElem
      .children("td:nth-child(2)")
      .children("button");

    this.torolElem.on("click", () => {
      this.kattintasTrigger("torol");
    });
  }
  kattintasTrigger(esemenyNeve) {
    const esemeny = new CustomEvent(esemenyNeve, {
      detail: this.#kosarTomb[elem],
    });
    window.dispatchEvent(esemeny);
  }
}

export default KosarView;
