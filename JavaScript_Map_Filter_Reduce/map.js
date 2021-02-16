// Array.prototype.map()
// A partir do Array1, a função  'map' irá iterar sobre cada um dos elementos desse array. Em cada iteração, o valor do elemento será usado como parâmetro de uma função estabelecida, resultando num outro valor. Ao final das iterações, será retornado um NOVO array, Array2, com o mesmo tamanho do Array1, contendo os respectivos resultados da iteração sobre cada elemento.  

// ESTRUTURA:
// const Array2 = Array1.map( (parâmetro/elemento) => {return 'função(parâmetro)'} );

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

// Função 'map' que transforma o peso dos animais de Kilograma para Libras(Pounds) //
const weight_lbs = pets.map((pet) => {return pet.weight*2.205 })
console.log(weight_lbs)
