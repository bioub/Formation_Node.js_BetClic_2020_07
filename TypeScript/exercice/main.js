"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jeu_1 = __importDefault(require("./jeu"));
const game = new jeu_1.default();
game.jouer();
