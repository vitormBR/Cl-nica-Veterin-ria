import { Animal } from "./Animal";

export class Gato extends Animal {
  emitirSom(): string { return "Miau!"; }
  descreverCuidados(): string { return "Precisa de arranhador, caixa de areia limpa e água fresca."; }
}
