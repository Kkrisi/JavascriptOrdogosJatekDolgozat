
import Modell from "../model/Modell.js"
import JatekTer from "../view/JatekTer.js"



export default class Controll{

    constructor(){

        this.copyModell = new Modell();
        const lista = this.copyModell.getLista();

        new JatekTer(lista);


        //JatekTer().setSzoveg();

        this.esemenyKezelo();

    }

    esemenyKezelo(){
        $(window).on("kattint", (event) => {

            this.copyModell.ellenorzes();

            new JatekTer(lista);

        })
    }
}
