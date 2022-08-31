let n = prompt('ingrese un numero para saber si es primo')
let j = 0, k

for (let i = n; i >= 1; i--) {
  k = n % i;
  if (k == 0) {
    j++ 
  }
  if (j == 2 && i == 1) {
    alert('el numero ' + n + ' es primo')
    break;
  } else{
    alert ('el numero ' + n + ' es NO primo')
    break;
  }
} 
