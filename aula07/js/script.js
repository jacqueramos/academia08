/* while(condição)
    for(inicio(declaro minha variável dentro do for) ; condiçao ; fim)
*/


/*
-->while

let animes = ['naruto' , 'boku no hero' , 'kokoro connect' , 'btooom' , 'death note'];
let i = 0;

while ( i < animes.length)
{
    console.log(animes[i]);
    i++;
}


//for
let animes = ['naruto' , 'boku no hero' , 'kokoro connect' , 'btooom' , 'death note'];

for (let e= 0; e < animes.length; e++)
{
    console.log(animes[e]);
}*/








/*
    construir uma escada de 5 dregaus no console
    as escadas devem ser #

#
##
###
####
#####

    construir uma escada com material que o usuario quiser e quantos degraus 
    ele quiser

DICAS: Tem que usar laços
for normal é mais facil de usar nesse caso
*/

let escadas = ['#' , '##' , '###' , '####' , '#####'];

for ( let e = 0; e < escadas.length; e++ )
{  
    
    usuario = prompt("Digite seu material");
    quantidade = prompt("Digite a quantidade que deseja");
    console.log(escadas[e]);
}
