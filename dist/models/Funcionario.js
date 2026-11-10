"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        if (!nome.trim())
            throw new Error("O nome é obrigatório.");
        if (!matricula.trim())
            throw new Error("A matrícula é obrigatória.");
        this._salario = 0;
        this.alterarSalario(salario);
    }
    get salario() { return this._salario; }
    // O salário só pode ser modificado por este método.
    alterarSalario(novoSalario) {
        if (!Number.isFinite(novoSalario) || novoSalario <= 0) {
            throw new Error("O salário deve ser um valor positivo.");
        }
        this._salario = novoSalario;
    }
}
exports.Funcionario = Funcionario;
