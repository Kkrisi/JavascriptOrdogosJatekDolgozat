
import Modell from "../model/Modell.js"
import JatekTer from "../view/JatekTer.js"



export default class Controll{

    constructor(){

        this.copyModell = new Modell();
        const lista = this.copyModell.getLista();


        this.jatekTer = new JatekTer(lista);


        //JatekTer().setSzoveg();

        this.esemenyKezelo();
        this.jatekVege = false;  // A játék vége jelző

    }

    esemenyKezelo() {
        $(window).on("kattint", (event) => {
            if (!this.jatekVege) {
                const index = event.detail;
                const eredmeny = this.copyModell.ellenorzes(index);

                if (eredmeny === "Elvitt az ördög!") {
                    this.jatekVege = true;  // Leállítja a további eseményeket
                    this.jatekTer.setSzoveg("Vesztettél! Elvitt az ördög!");  // Kiírja, hogy veszítettél
                } else {
                    this.jatekTer.setSzoveg("Megmentettek a jó lelkek!");
                }
            }
        });
    }
}