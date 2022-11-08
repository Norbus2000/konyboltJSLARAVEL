class KonyvView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    szuloElem.append(`
            <tr>
                <td>${elem.id}</td>
                <td>${elem.cim}</td>
                <td>${elem.szerzo}</td>
                <td>${elem.ar}</td>
                <td><button class="modosit">módosítás</button></td>
                <td><button class="torles">törlés</button></td>
            </tr>
`);
    this.recordElem = szuloElem.children("tr:last-child");
    this.torolElem = this.recordElem
      .children("td:nth-child(6)")
      .children("button");
    this.modositElem = this.recordElem
      .children("td:nth-child(5)")
      .children("button");

    this.torolElem.on("click", () => {
      this.kattintasTrigger("torol");
    });
    this.modositElem.on("click", () => {
      this.kattintasTrigger("modosit");
    });
  }
  kattintasTrigger(esemenyNeve) {
    const esemeny = new CustomEvent(esemenyNeve, { detail: this.#elem });
    window.dispatchEvent(esemeny);
  }
}

export default KonyvView;
