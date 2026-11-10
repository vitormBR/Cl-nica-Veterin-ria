"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
class Clinica {
    constructor(nome) {
        this.nome = nome;
        this.animais = [];
        this.funcionarios = [];
        if (!nome.trim())
            throw new Error("O nome da clínica é obrigatório.");
    }
    cadastrarAnimal(animal) { this.animais.push(animal); }
    contratarFuncionario(funcionario) { this.funcionarios.push(funcionario); }
    listarAnimais() { return [...this.animais]; }
    listarFuncionarios() { return [...this.funcionarios]; }
}
exports.Clinica = Clinica;
