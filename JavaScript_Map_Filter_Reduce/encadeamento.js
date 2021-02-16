// O encadeamento de funções consiste em aplicar várias funções de maneira consecutiva. Ou seja, a primeira função é aplicada e gera um resultado, a segunda função será aplicada o resultado da primeira e assim por diante. 

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

// Encadear a função 'filter' e 'reduce' para primeiro filtrar todos os elementos da lista que sejam cachorros e depois criar uma string apenas com o nome desses cachorros //
const cachorrinhos = pets.filter((pet) => {return pet.animal==="dog"}).reduce(
    (total,pet) => {
    total += (pet.name + "   ")
    return total}, "Os nomes dos cachorrinhos são:  ")

console.log(cachorrinhos)