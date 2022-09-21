const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arreglo2 = [...arreglo, 11];

const arreglo3 = arreglo2.map(function (valor) {
	return valor * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
