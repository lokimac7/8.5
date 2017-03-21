var a = 2,
	b = 5,
	value = (a * a) + (2 * a * b) - (b * b);

 
console.log('Wynik działania to: '+ value); 

if (value > 0) {
	console.log("Wynik dodatni");
} else if (value < 0) {
	console.log("Wynik ujemny");
} else {
	console.log("Wynik jest równy 0");
}