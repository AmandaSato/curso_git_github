/////////////////////////////////////////////////////////
/////////////////////// DESCRIÇÃO ///////////////////////
// PARTE 1 - MOCHA: O mocha é uma ferramenta BDD
// PARTE 2 - CHAI : é uma biblioteca de "Asserts" mais funcionais e legíveis
// PARTE 2 - SINON : ferramentas para espionar/observar funções

/////////////////////////////////////////////////////////
//////////////////////// IMPORTS ////////////////////////

/////////////////////// PARTE 1 
// Importar ferramenta de Assert do Node (não existe no mocha)
const assert = require("assert")
// Importar o nosso método que será testado 
const Math = require("../codigo_mocha.js")
// Valor genérico que será usado adiante
var n = 5;

/////////////////////// PARTE 2 
const expect = require("chai").expect;

/////////////////////// PARTE 3
const sinon = require("sinon");

/////////////////////////////////////////////////////////
//////////////////////// TESTES ////////////////////////

/////////////////////// PARTE 1 
describe("Math Class", ()=>{

      // Exemplo simples
      it("Soma",
            ()=> {const math = new Math(); 
                  assert.equal(math.sum(2,2), 4);
      });

      // Exemplo de teste de função assíncrona (delay=1000ms)
      // Se o parametro 'done' não for utilizado, o teste sempre retornará positivo e depois mostrará um erro. Para o teste ser verdadeiro, precisamos esperar a função ser executada!
      // OBS: não é possível usar Arrow Function para isso.
      it("Soma com delay",
      function(done){
            const math = new Math(); 
            math.sum_delayed(2,2, (soma)=>{assert.equal(soma,4); done();});
      })

      // Exemplo de teste de função assíncrona (delay=2500ms)
      // O Mocha tem um Timeout de 2000ms, para realizar um teste numa função com retorno maior que 2s, precisamos alterar essa propriedade dentro do teste.
      // OBS: não é possível usar Arrow Function para isso.
      it("Soma com delay acima do limite",
      function(done){
            const math = new Math();
            this.timeout(3000); 
            math.sum_ULTRA_delayed(2,2, (soma)=>{assert.equal(soma,4); done()});
      })

      // Exemplo de teste de um código que ainda não existe. Resultado: 'Pending'
      it("Código Futuro")

      // Executar APENAS um teste 
      //it.only("Ao rodar o código apenas este teste será executado")

      // PULAR um teste específico
      it.skip("Este teste não será executado :( ")

      //HOOKS
      // Permite manipular os testes
      //  - beforeEach()
      //  - before()
      //  - afterEach()
      //  - after()

      it("Multiplicação 2xn sendo n=0",
            ()=> {const math = new Math(); 
                  assert.equal(math.multiply(n,2), 0);
      });

      // A função beforeEach() irá aplicar certa condição antes de realizar cada um dos testes. Perceba que ela se aplica a todos os testes dentro deste contexto, independente de onde foi declarada.
      beforeEach(()=>{ n = 0;})


/////////////////////// PARTE 2
/////////////////////// Biblioteca CHAINING

      // Reesscrevendo Assert com Expect - Exemplo simples
      it("Soma com a biblioteca Chai",
            ()=> {const math = new Math();
                  expect(math.sum(2,2)).to.equal(4);
      });

      // Utilizando Expect para validar Propriedades de Objetos
      it("Verificando propriedade de Objeto",
            ()=> {const math = new Math();
                  const obj = { pet: "Babi"}
                  expect(obj).to.have.property("pet");
      });

      // Utilizando Expect para validar Valores de propriedades de Objetos
      it("Verificando propriedade de Objeto",
            ()=> {const math = new Math();
                  const obj = { pet: "Babi"}
                  expect(obj).to.have.property("pet").equal("Babi");
      });

      // Utilizando Expect para validar Objetos
      // A comparação direta com 'expect(obj).to.equal(obj2)' será falsa, mesmo se forem objetos idênticos. Pois a referência será comparada. Para ser verdadeiro, as variáveis precisam fazer referência ao mesmo objeto.
      it("Verificando propriedade de Objeto",
            ()=> {const math = new Math();
                  const obj = { pet: "Babi"};
                  const obj2 = obj;
                  expect(obj).to.equal(obj2);
            });
      // Mas também é possível fazer uma comparação dos valores desses objetos
      it("Verificando propriedade de Objeto",
            ()=> {const math = new Math();
                  const obj = { pet: "Babi"};
                  const obj2 = { pet: "Babi"};
                  expect(obj).to.deep.equal(obj2);
            });

/////////////////////// PARTE 3
/////////////////////// Ferramenta Sinon

      // Verificar se o método foi chamado/invocado corretamente
      it("Testar um método indefinido com Sinon",
      ()=> {const math = new Math(); 
            obj = { metodo: sinon.spy() };
            math.metodoIndefinido(obj, 2, 3);
            expect(obj.metodo.calledOnce).to.be.true;
      });

      // Verificar os argumentos que foram passados para a função indefinida
      it("Testar um método indefinido com Sinon",
      ()=> {const math = new Math(); 
            obj = { metodo: sinon.spy() };
            math.metodoIndefinido(obj, 2, 3);
            expect(obj.metodo.args[0][0]).to.equal("Babi");
      });

      // Verificar uma função que foi definida
      it.only("Testar uma função com Sinon",
      ()=> {const math = new Math(); 
            obj = { metodo: ()=>{console.log("Executou!")}  };
            sinon.spy(obj, "metodo");
            math.metodoIndefinido(obj, 2, 3);
            expect(obj.metodo.args[0][0]).to.equal("Babi");
      });

      // Substituindo métodos com Sinon
      it("Testar uma função com Sinon",
      ()=> {const math = new Math(); 
            obj = { metodo: ()=>{console.log("Executou!")}  };
            sinon.stub(obj, "metodo").returns("Saída modificada pelo Sinon!");
            expect( math.metodoIndefinido(obj, 2, 3) ).to.equal("Saída modificada pelo Sinon!");
      });


})