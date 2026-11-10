import { Funcionario } from "./Funcionario";

export class Veterinario extends Funcionario {
  private consultasRealizadas = 0;
  private readonly bonusPorConsulta = 50;

  realizarConsulta(): void { this.consultasRealizadas++; }
  prescreverTratamento(tratamento: string): string {
    if (!tratamento.trim()) throw new Error("Informe o tratamento.");
    return `Tratamento prescrito: ${tratamento}`;
  }
  calcularBonus(): number { return this.consultasRealizadas * this.bonusPorConsulta; }
}
