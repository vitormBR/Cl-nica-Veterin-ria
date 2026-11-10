"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = void 0;
const Funcionario_1 = require("./Funcionario");
class Recepcionista extends Funcionario_1.Funcionario {
    constructor() {
        super(...arguments);
        this.agendamentosConfirmados = 0;
        this.bonusPorAgendamento = 10;
    }
    confirmarAgendamento() { this.agendamentosConfirmados++; }
    agendarAtendimento(nomeAnimal) {
        if (!nomeAnimal.trim())
            throw new Error("Informe o nome do animal.");
        return `Atendimento de ${nomeAnimal} agendado.`;
    }
    calcularBonus() { return this.agendamentosConfirmados * this.bonusPorAgendamento; }
}
exports.Recepcionista = Recepcionista;
