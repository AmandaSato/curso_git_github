//////////////////////////////////////////////////////////////////////////////////////////
////// Async-Await
////// Por baixo dos panos o async/await e o then/catch resolvem Promises da mesma maneira. Porém com uma sintaxe diferente, mais simples.

//////////////////////////////////////////////////////////////////////////////////////////
////// IIFE -> immediately invoked function expression
////// Estrutura de uma função que será executada imediatamente quando a linha for lida:
//
( function(){} )()
//
// OU
//
function DoIt(){}
DoIt();

//////////////////////////////////////////////////////////////////////////////////////////
////// Async -> irá fazer com que o retorno de uma função seja uma Promise
//
async function a(){ console.log("Função Assíncrona") }
//
// OU
//
 function a() {     
    return new Promise((resolve, reject) => {
        console.log("Função Assíncrona");
        resolve();
    })
    }


//////////////////////////////////////////////////////////////////////////////////////////
////// Await -> o Await substitui o then dentro de uma função Async 

var promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve("Cumpriu a promessa!")},1000)})

async function thenVSawait(){

    ////// THEN() //////

    // Chamando a Promise com then()
    promise.then((result)=>{console.log(result)});
    // forma mais compacta:
    promise.then(console.log);

    // Saída da Promise e Tratamento de erro
    promise.then(
        (res)=>{ setTimeout(()=>console.log(res),1500)}, 
        (rej)=>{console.log(rej)},
        );

    ////// AWAIT //////

    // Chamando a Promise com await
    const result2 = await promise;
    console.log(result2);
    // forma mais compacta:
    console.log(await promise);

     // Saída da Promise e Tratamento de erro
     try{
        const res = await promise;
        setTimeout(()=>{console.log(res)},1500)
     }catch(rej){console.log(rej)}

};
//thenVSawait();


//////////////////////////////////////////////////////////////////////////////////////////
///// SITUAÇÃO: você tem uma promise com 50% de chance de resiltar em True ou False. Se for True, essa será a saída da Promise. Se der False, a Promise é rejeitada. MAS você não quer rejeitar a Promise quando der False, você quer que ela seja aceita e retorne o resultado False. 
///// SOLUÇÃO: ao utilizar o .catch() transformamos a Promise vdd_false em outra Promise que agora retornará um resultado especifico quando a Promise vdd_false falhar.

var vdd_false = new Promise((resolve, reject) => 
                                        Math.random()>0.5? resolve(true) : reject(false))

async function problem(){
    const v_f = await vdd_false.catch(erro =>"false")
    console.log(v_f);
}
//problem();

//////////////////////////////////////////////////////////////////////////////////////////
///// Encadeamento do resultado de Promises com async-await

async function encad(){ 
    const resposta = await vdd_false
                            .then(result => 'O resultado é:  '+ result)
                            .then(text => "O texto é:  "+text)
                            .catch(erro =>"false");

    console.log(resposta);
}
encad();


