export abstract class Funcionario {
  private _salario: number;

  constructor(
    public nome: string,
    public matricula: string,
    salario: number
  ) {
    if (!nome.trim()) throw new Error("O nome é obrigatório.");
    if (!matricula.trim()) throw new Error("A matrícula é obrigatória.");
    this._salario = 0;
    this.alterarSalario(salario);
  }

  get salario(): number { return this._salario; }


  alterarSalario(novoSalario: number): void {
    if (!Number.isFinite(novoSalario) || novoSalario <= 0) {
      throw new Error("O salário deve ser um valor positivo.");
    }
    this._salario = novoSalario;
  }

  abstract calcularBonus(): number;
}
