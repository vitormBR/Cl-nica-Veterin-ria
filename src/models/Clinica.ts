import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";

export class Clinica {
  private animais: Animal[] = [];
  private funcionarios: Funcionario[] = [];

  constructor(public nome: string) {
    if (!nome.trim()) throw new Error("O nome da clínica é obrigatório.");
  }

  cadastrarAnimal(animal: Animal): void { this.animais.push(animal); }
  contratarFuncionario(funcionario: Funcionario): void { this.funcionarios.push(funcionario); }

  listarAnimais(): Animal[] { return [...this.animais]; }
  listarFuncionarios(): Funcionario[] { return [...this.funcionarios]; }
}
