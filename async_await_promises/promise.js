///////// PROMISES
// Promises possibilitam realizar funções assíncronas (funções que são processadas no "background" enquanto o restante do código é executado) e então utilizar este resultado quando o processamento acabar.


///////// Encadeamento then().catch(), como funciona?

var coinFlip = new Promise((resolve, reject) => 
                                        Math.random()>0.5? resolve(true) : reject(false))

// coinFlip.then((result) => console.log(result))
//         .then(() => console.log("Then() 2"))
//         .catch((err) => console.error("Catch erro 1")) 
//         .then(()=>{console.log("Continuação após o erro 1")})
//         .then(() => {throw new Error("Erro 2 proposital")})
//         .catch((err) => console.error("Catch erro 2"))

////// CASOS

// Quando a Promise 'coinflip' for aceita os dois primeiros then são executados. O catch() é ignoardo e a execução prossegue para o próximo then().

// Quando a Promise 'coinflip' falhar os dois primeiros then() serão ignorados. O primeiro catch() é executado e segue para o then() seguinte.

// A continuação após o Erro 1 sempre acontecerá, pois aquele console.log() nunca irá falhar. Então o catch() que vem em seguida nunca impedirá a execução desse then().
// Como existe aquele erro proposital. O último catch() sempre será executado.


///////// Encadeamento then().catch() chamando a Promise individualmente.

// coinFlip.then((result) => console.log(result))
//         .then(() => console.log("Then() 2"))

// coinFlip.catch(() => {throw new Error("Erro 1")}) 
//         .catch(() => console.log("Erro 2"))

////// CASOS

// Ou todos os Then() são executados OU todos os catch() serão executados.

// O segundo catch() só será executado pois estamos jogando um erro como resultado do primeiro.


///////// Método LOCK - colocar um then() dentro do outro

var coinFlip_delayed = new Promise((resolve, reject) => 
        setTimeout(()=>{Math.random()>0.5? resolve(true):reject(false)},2000))

const flip = Promise.resolve("Resolvido de imediato").then(coinFlip_delayed);

flip.then(console.log).catch(() => {console.log("Deu errooo!")})




