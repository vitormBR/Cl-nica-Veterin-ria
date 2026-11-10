export abstract class Animal {
  constructor(
    public nome: string,
    public idade: number,
    public tutor: string
  ) {
    if (!nome.trim()) throw new Error("O nome do animal é obrigatório.");
    if (idade < 0) throw new Error("A idade não pode ser negativa.");
    if (!tutor.trim()) throw new Error("O nome do tutor é obrigatório.");
  }

  abstract emitirSom(): string;
  abstract descreverCuidados(): string;
}
