import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {
  private agendamentosConfirmados = 0;
  private readonly bonusPorAgendamento = 10;

  confirmarAgendamento(): void { this.agendamentosConfirmados++; }
  agendarAtendimento(nomeAnimal: string): string {
    if (!nomeAnimal.trim()) throw new Error("Informe o nome do animal.");
    return `Atendimento de ${nomeAnimal} agendado.`;
  }
  calcularBonus(): number { return this.agendamentosConfirmados * this.bonusPorAgendamento; }
}
