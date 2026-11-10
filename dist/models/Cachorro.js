"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    emitirSom() { return "Au au!"; }
    descreverCuidados() { return "Precisa de passeio diário, alimentação e água fresca."; }
}
exports.Cachorro = Cachorro;
