/* Exercícios 1157
Ler um número inteiro N e calcular todos os seus divisores.
Entrada

O arquivo de entrada contém um valor inteiro.
Saída

Escreva todos os divisores positivos de N, um valor por linha.
*/

function readNumber(num: number) {
    for (let n = 0; n <= num; n++) { 
      if (num % n === 0) {
          console.log(n);
      }
    }
}

readNumber(6);
