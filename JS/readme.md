#JS

Var, Let, Const

Variáveis

var
let

var pode ser declarada mais de uma vez, e let não:

´´´js
	var a = 20
	let b = 40
 
	var a = 30
	b = 50
´´´


String

Regex <!-- aprender -->

Template String

const name = 'Rômulo'
const template = `Olá ${name}`
const calculo = `1 + 1 = ${1 + 1}`
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)