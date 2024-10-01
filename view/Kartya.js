



export default class Kartya {

    #lista;         //Állítsd be az adattagokat! 
    #index;
    #szuloElem;

    constructor(lista, index, szuloElem){

        this.#lista = lista;
        this.#index = index;

        this.#szuloElem = $(".tartalom");
        this.htmlOsszerak();

        this.esemenyKezelo();

    }

    htmlOsszerak(){
        const felepites = `<div class="kartya"></div>`
        felepites.append(this.#szuloElem);
    }

    esemenyKezelo(){
        this.#szuloElem.on("click", () => {
            const e = new CustomEvent("kattint", {detail: this.#index})
            window.dispatchEvent(e)

            //alert(this.#lista[this.#index]);
            felepites.append(this.#lista[this.#index]);
        });
    }

}



