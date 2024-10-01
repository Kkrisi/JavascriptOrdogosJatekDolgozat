



export default class Kartya {

    #lista;       
    #index;

    constructor(lista, index){

        this.#lista = lista;
        this.#index = index;

        this.szuloElem = $(".tartalom");

        this.htmlOsszerak();

        this.esemenyKezelo();

    }

    htmlOsszerak(){
        const felepites = `<div class="kartya"></div>`
        this.szuloElem.append(felepites)
    }

    esemenyKezelo(){
        this.szuloElem.on("click", () => {
            const e = new CustomEvent("kattint", {detail: this.#index})
            window.dispatchEvent(e)

            //alert(this.#lista[this.#index]);
            felepites.append(this.#lista[this.#index]);
        });
    }

}



