"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
        if (!nome.trim())
            throw new Error("O nome do animal é obrigatório.");
        if (idade < 0)
            throw new Error("A idade não pode ser negativa.");
        if (!tutor.trim())
            throw new Error("O nome do tutor é obrigatório.");
    }
}
exports.Animal = Animal;
