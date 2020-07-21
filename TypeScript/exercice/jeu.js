"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var random_1 = require("./random");
var Jeu = /** @class */ (function () {
    function Jeu(options) {
        if (options === void 0) { options = {}; }
        this.rl = readline_1.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.essais = [];
        var _a = options.min, min = _a === void 0 ? 0 : _a, _b = options.max, max = _b === void 0 ? 100 : _b;
        this.entierAlea = random_1.getRandomInt(min, max);
    }
    Jeu.prototype.jouer = function () {
        var _this = this;
        if (this.essais.length) {
            console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
        }
        this.rl.question('Quel est le nombre ? ', function (answer) {
            var entierSaisi = Number.parseInt(answer, 10);
            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : Il faut saisir un entier');
                return _this.jouer();
            }
            _this.essais.push(entierSaisi);
            if (entierSaisi < _this.entierAlea) {
                console.log('Trop petit');
                _this.jouer();
            }
            else if (entierSaisi > _this.entierAlea) {
                console.log('Trop grand');
                _this.jouer();
            }
            else {
                console.log('Gagné');
                _this.rl.close();
            }
        });
    };
    return Jeu;
}());
exports.default = Jeu;
