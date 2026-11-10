import { Animal } from "./Animal";

export class Ave extends Animal {
  emitirSom(): string { return "Piu piu!"; }
  descreverCuidados(): string { return "Precisa de gaiola adequada, higiene e alimentação específica."; }
}
