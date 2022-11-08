class KonyvPublicView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    szuloElem.append(`
        <div>
            <h2>A könyv címe ${elem.cim}</h2>
            <h3>Szerző: ${elem.szerzo}</h3>
            <p>Ár: ${elem.ar}</p>
            <button class="kosarGomb" >Kosárba</button>
        </div>
`);
    this.kosarbaElem = szuloElem.children("div:last-child").children("button");
    this.kosarbaElem.on("click", () => {
      console.log("ittvagyok");
      this.kattintasTrigger("kosarba");
    });
  }

  kattintasTrigger(esemenyNeve) {
    const esemeny = new CustomEvent(esemenyNeve, { detail: this.#elem });
    window.dispatchEvent(esemeny);
  }
}
export default KonyvPublicView;
