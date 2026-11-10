"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./models/Cachorro");
const Gato_1 = require("./models/Gato");
const Ave_1 = require("./models/Ave");
const Veterinario_1 = require("./models/Veterinario");
const Recepcionista_1 = require("./models/Recepcionista");
const Consulta_1 = require("./models/Consulta");
const Clinica_1 = require("./models/Clinica");
const clinica = new Clinica_1.Clinica("Clínica Veterinária Dona Marta");
const rex = new Cachorro_1.Cachorro("Rex", 4, "João");
const mimi = new Gato_1.Gato("Mimi", 2, "Ana");
const loro = new Ave_1.Ave("Loro", 1, "Carlos");
const veterinaria = new Veterinario_1.Veterinario("Dra. Paula", "VET001", 4500);
const recepcionista = new Recepcionista_1.Recepcionista("Mariana", "REC001", 2200);
clinica.cadastrarAnimal(rex);
clinica.cadastrarAnimal(mimi);
clinica.cadastrarAnimal(loro);
clinica.contratarFuncionario(veterinaria);
clinica.contratarFuncionario(recepcionista);
// Polimorfismo: cada espécie responde de sua própria maneira.
for (const animal of clinica.listarAnimais()) {
    console.log(`${animal.nome}: ${animal.emitirSom()}`);
    console.log(`Cuidados: ${animal.descreverCuidados()}\n`);
}
const consulta = new Consulta_1.Consulta(rex, veterinaria, new Date());
recepcionista.confirmarAgendamento();
console.log(consulta.resumo());
console.log(`Bônus da veterinária: R$ ${veterinaria.calcularBonus().toFixed(2)}`);
console.log(`Bônus da recepcionista: R$ ${recepcionista.calcularBonus().toFixed(2)}`);
