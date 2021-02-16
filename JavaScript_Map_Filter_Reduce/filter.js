// Array.prototype.filter()
// A partir do Array1 que será filtrado, a função  'filter' irá iterar sobre cada um dos elementos desse array. Em cada iteração será realizado um teste lógico, retornando True ou False, caso o elemento em questão seja ou não aprovado pela condição estabelecida. Ao final das iterações, será retornado um NOVO array, Array2, apenas com os elementos do Array1 que foram aprovados. 

// ESTRUTURA:
// const Array2 = Array1.filter( (parâmetro/elemento) => {return 'condição do teste'} );


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
//console.log( pets)

const cachorrinho = pets.filter((pet)=>{ return pet.animal==="dog" });
console.log(cachorrinho)

// Notar que o array original ficou inalterado //
console.log("\n" +"Array original 'pets':" + "\n" + JSON.stringify(pets)) 
//console.log("OBS: saída normal do array sem JSON.stringfy()" + "\n" + pets)

// Outras formas de realizar o procedimento acima //
const SelecionaDog = (tipo) => {return tipo === "dog" }
const cachorrinho2 = pets.filter(({animal}) => SelecionaDog(animal))
//console.log(cachorrinho2)
const conclusao = (JSON.stringify(cachorrinho2) === JSON.stringify(cachorrinho))
console.log("\n" +"O resultado é o mesmo?" +"\n" + "Resposta:"+ conclusao)



// COMENTÁRIOS EXTRAS SOBRE O CÓDIGO //

// OBS: Ao colocar uma mensagem junto com o Array no console.log(), a saída não retorna os valores do conteúdo do Array. É possível contornar isso usando a função            JSON.stringify() que converte todos os valores inseridos em String.
