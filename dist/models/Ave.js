"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const Animal_1 = require("./Animal");
class Ave extends Animal_1.Animal {
    emitirSom() { return "Piu piu!"; }
    descreverCuidados() { return "Precisa de gaiola adequada, higiene e alimentação específica."; }
}
exports.Ave = Ave;
