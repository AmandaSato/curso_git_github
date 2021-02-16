// Para comparação, vamos realizar um mesmo procedimento feito com a função 'map' mas utilizando o 'forEach()'.

// Nota-se que ao contrário da função 'map' o 'forEach' não retorna nada. Dessa forma, salvar o retorno do 'forEach' numa variável não terá nenhum resultado.
// Para contornar isso, utilizamos o 'forEach'para preencher uma lista vazia com os nomes dos pets a cada iteração.

const pets = [
    {name: "Babi",
     animal: "dog",
     age: 14,
     weight: 2,
    },
    {name: "Tom",
     animal: "cat",
     age: 5,
     weight: 2.1 ,
    },
    {name: "Floopy",
     animal: "frog",
     age: 2,
     weight: 0.4 ,
    },
    {name: "Pandora",
     animal: "dog",
     age: 8,
     weight: 4.5,
    },
    {name: "Peanut",
     animal: "squirrel",
     age: 3,
     weight: 0.55,
    },
    {name: "Glub",
     animal: "fish",
     age: 1,
     weight: 0.05,
    },
]

// Função 'map' que o nome dos pets //
const map_names = pets.map((pet) => {return pet.name })
console.log("\n" + "Lista com o nome dos pets, utilizando 'map':")
console.log(map_names)

// Função 'forEach' com exatamente os mesmos parâmetros da função 'map' //
const foreach = pets.forEach((pet) => {return pet.name })
console.log("\n" + "Saída da função 'forEach':")
console.log(foreach)

// Função 'forEach' retornando os nomes dos pets //
const foreach_names = []

pets.forEach((pet) => {return foreach_names.push(pet.name) })
console.log("\n" + "Lista com o nome dos pets, utilizando 'forEach':")
console.log(foreach_names)

