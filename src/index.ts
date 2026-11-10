import { Cachorro } from "./models/Cachorro";
import { Gato } from "./models/Gato";
import { Ave } from "./models/Ave";
import { Veterinario } from "./models/Veterinario";
import { Recepcionista } from "./models/Recepcionista";
import { Consulta } from "./models/Consulta";
import { Clinica } from "./models/Clinica";

const clinica = new Clinica("Clínica Veterinária Dona Marta");

const rex = new Cachorro("Rex", 4, "João");
const mimi = new Gato("Mimi", 2, "Ana");
const loro = new Ave("Loro", 1, "Carlos");

const veterinaria = new Veterinario("Dra. Paula", "VET001", 4500);
const recepcionista = new Recepcionista("Mariana", "REC001", 2200);

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

const consulta = new Consulta(rex, veterinaria, new Date());
recepcionista.confirmarAgendamento();
console.log(consulta.resumo());
console.log(`Bônus da veterinária: R$ ${veterinaria.calcularBonus().toFixed(2)}`);
console.log(`Bônus da recepcionista: R$ ${recepcionista.calcularBonus().toFixed(2)}`);
