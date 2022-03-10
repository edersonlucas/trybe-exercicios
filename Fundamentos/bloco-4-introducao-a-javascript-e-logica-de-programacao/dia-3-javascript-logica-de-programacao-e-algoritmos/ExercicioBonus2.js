//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
//n = 5

//*
//**
//***
//****
//*****

let n = 5
for (let i = 0; i < n; i+=1) {
    let aste = ''
    for (let a = 0; a <= i; a+=1) {
        aste += '*'
    }
    console.log(aste)
}
