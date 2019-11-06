/*Defina um login e senha
Peça ao usuario para inserir login e senha
Use condições para verificar se o login e a 
senha inseridos pelo usuario são iguais aos
que voçê declarou

Colocar uma verificação de tentativas
utilizando o while */


let login = "jacque";
let senha = "12345";


let nome = prompt("Digite seu login");
let senha1 = prompt("Digite sua senha");

if( nome == login && senha == senha1)
{
    alert("Cadastro concluido");
}
else
{
    alert("Cadastro não concluido");
}

let tentativas = 1;

while(tentativas <= 3)
{
    /* O que colocar aqui? */
    tentativas++
}