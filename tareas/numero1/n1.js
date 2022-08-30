let vidaGoku = 100
let vidaVegeta = 100

const MIN_POWER = 5
const MAX_POWER = 12

//arrow function
const ambosSiguenVivos = () => vidaGoku > 0 && vidaVegeta > 0

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + 	MIN_POWER) 

const gokuSigueVivo = () => vidaGoku > 0
let round = 0

while (ambosSiguenVivos()) {

	round++
	console.log(`Round ${round}`)

	const golpeGoku = calcularGolpe()
	const golpeVegeta = calcularGolpe()

	if(golpeGoku > golpeVegeta){
		//ataca Goku
		console.log(`Goku ataca a Vegeta con un golpe de ${golpeGoku}`)
		vidaVegeta = vidaVegeta - golpeGoku
		console.log(`Vegeta queda en ${vidaVegeta} de vida`)
	}else{
		//ataca Vegeta
		console.log(`Vegeta ataca a Goku con un golpe de ${golpeVegeta}`)
		vidaGoku = vidaGoku - vidaVegeta
		console.log(`Goku queda en ${vidaGoku} de vida`)
	}

}

if(gokuSigueVivo()){
	console.log(`Goku ganó la pelea. Suvida es de: ${vidaGoku}`)
}else{
	console.log(`Vegeta ganó la pelea. Su vida es de: ${vidaVegeta}`)
}