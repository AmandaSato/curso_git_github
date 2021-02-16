// Array.prototype.reduce()
// A partir do Array1, a função  'reduce' irá iterar sobre cada um dos elementos desse array. Em cada iteração, a variável acumulativa('total') da função pode ser modificada. Ao final das iterações, será retornado o valor final da Variável acumulativa.  

// ESTRUTURA:
// const Resultado = Array1.reduce( (total, parâmetro/elemento) => {
//    função(total,parâmetro)
//    return total
// }, valor_inicial)

const pets = [
    {name: "Babi",
     animal: "dog",
     age: 14
    },
    {name: "Tom",
     animal: "cat",
     age: 5
    },
    {name: "Floopy",
     animal: "frog",
     age: 2
    },
]

// Utilizando 'reduce' para obter a soma das idades //
const Soma_idades = pets.reduce((total,pet) => {return total+pet.age}, 0)
console.log(Soma_idades)

// Utilizando 'reduce' para retornar os nomes dos pets //
const Pet_names = pets.reduce((total,pet) => {
    total += (pet.name + "   ")
    return total}, "Os nomes dos pets são:  ")
console.log(Pet_names)

// Utilizando 'reduce' para retornar um objeto com as espécies e a soma das idades //
const All_animals = pets.reduce((total,pet) => {
    total.Species += (pet.animal + "   ")
    total.Soma_idades += pet.age
    return total}, {Species: '', Soma_idades: 0})
console.log(All_animals)

// Utilizando 'reduce' para filtrar eleemntos da lista //
const myPet = pets.reduce((total,pet) => {
    if(pet.name !== "Babi")
        return total

    total.Meus_Pets += (pet.name + "   ")
    total.Tipos += (pet.animal + "   ")
    total.Soma_idades += pet.age
    return total},
{Meus_Pets: '', Tipos: '', Soma_idades: 0})
console.log(myPet) 


