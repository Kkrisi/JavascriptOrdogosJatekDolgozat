


export default class Modell{

    constructor() {
        this.lista = [];
        
        // Generálunk egy random indexet, ahol az ördög lesz
        const ordogIndex = Math.floor(Math.random() * 20);  // Véletlenszerű szám 0 és 19 között

        for (let i = 0; i < 20; i++) {
            if (i === ordogIndex) {
                this.lista.push('👺');  // Csak az adott indexre helyez ördögöt
            } else {
                this.lista.push('👻');  // A többi kártya szellem
            }
        }
    }

    getLista() {
        return this.lista;
    }

    ellenorzes(index) {
        // Az index alapján dönti el, hogy a kártya ördög vagy szellem
        if (this.lista[index] === '👺') {
            return "Elvitt az ördög!";
        } else {
            return "Megmentettek a jó lelkek!";
        }
    }
}
