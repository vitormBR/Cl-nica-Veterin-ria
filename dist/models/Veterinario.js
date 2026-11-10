"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinario = void 0;
const Funcionario_1 = require("./Funcionario");
class Veterinario extends Funcionario_1.Funcionario {
    constructor() {
        super(...arguments);
        this.consultasRealizadas = 0;
        this.bonusPorConsulta = 50;
    }
    realizarConsulta() { this.consultasRealizadas++; }
    prescreverTratamento(tratamento) {
        if (!tratamento.trim())
            throw new Error("Informe o tratamento.");
        return `Tratamento prescrito: ${tratamento}`;
    }
    calcularBonus() { return this.consultasRealizadas * this.bonusPorConsulta; }
}
exports.Veterinario = Veterinario;
