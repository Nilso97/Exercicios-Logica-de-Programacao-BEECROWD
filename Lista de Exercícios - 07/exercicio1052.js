/* Exercício 1052
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.
Entrada

A entrada contém um único valor inteiro.
Saída

Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.
*/

function mesesDoAno(mes) {
    switch (mes) {
        case 01:
            console.log("Janeiro");
            break;
        case 02:
            console.log("Fevereiro");
            break;
        case 03:
            console.log("Março");
            break;
        case 04:
            console.log("Abril");
            break;
        case 05:
            console.log("Maio");
            break;
        case 06:
            console.log("Junho");
            break;
        case 07:
            console.log("Julho");
            break;
        case 08:
            console.log("Agosto");
            break;
        case 09:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("Mês inválido!");
    }
}

mesesDoAno(8);
