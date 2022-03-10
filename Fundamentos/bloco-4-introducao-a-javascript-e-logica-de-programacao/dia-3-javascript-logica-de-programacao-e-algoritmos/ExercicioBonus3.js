//Agora inverta o lado do triângulo. Por exemplo:
//Copiar
//n = 5

//    *
//   **
//  ***
// ****
//*****

let n = 5
let i = 0
let a = 0
for (i = 0; i < n; i+=1) {
    let aste = ''
    for(a = 0; a < n-i-1; a+=1) {
        aste+=' '
    }
    for(let qt = 0; qt <= i; qt+=1) {
        aste+='*'
    }

    console.log(aste)
}
