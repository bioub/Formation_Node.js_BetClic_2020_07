"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const random_1 = require("./random");
class Jeu {
    constructor(options = {}) {
        this.rl = readline_1.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.essais = [];
        const { min = 0, max = 100 } = options;
        this.entierAlea = random_1.getRandomInt(min, max);
    }
    jouer() {
        if (this.essais.length) {
            console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
        }
        this.rl.question('Quel est le nombre ? ', (answer) => {
            const entierSaisi = Number.parseInt(answer, 10);
            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : Il faut saisir un entier');
                return this.jouer();
            }
            this.essais.push(entierSaisi);
            if (entierSaisi < this.entierAlea) {
                console.log('Trop petit');
                this.jouer();
            }
            else if (entierSaisi > this.entierAlea) {
                console.log('Trop grand');
                this.jouer();
            }
            else {
                console.log('Gagné');
                this.rl.close();
            }
        });
    }
}
exports.default = Jeu;
