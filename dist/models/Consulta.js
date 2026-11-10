"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
const Animal_1 = require("./Animal");
const Veterinario_1 = require("./Veterinario");
class Consulta {
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
        if (!(animal instanceof Animal_1.Animal))
            throw new Error("A consulta precisa de um animal.");
        if (!(veterinario instanceof Veterinario_1.Veterinario))
            throw new Error("A consulta precisa de um veterinário.");
        if (Number.isNaN(data.getTime()))
            throw new Error("A data da consulta é inválida.");
        veterinario.realizarConsulta();
    }
    resumo() {
        return `Consulta de ${this.animal.nome} com ${this.veterinario.nome} em ${this.data.toLocaleDateString("pt-BR")}.`;
    }
}
exports.Consulta = Consulta;
