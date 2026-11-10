"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    emitirSom() { return "Miau!"; }
    descreverCuidados() { return "Precisa de arranhador, caixa de areia limpa e água fresca."; }
}
exports.Gato = Gato;
