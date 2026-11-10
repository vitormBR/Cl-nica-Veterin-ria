import { Animal } from "./Animal";

export class Cachorro extends Animal {
  emitirSom(): string { return "Au au!"; }
  descreverCuidados(): string { return "Precisa de passeio diário, alimentação e água fresca."; }
}
