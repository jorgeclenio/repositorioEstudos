/* para retornar data completa

var d = new Date()
alert(d)
*/

/* condicional - if else */
var google = "https://google.com/"
var idade = prompt("Qual a sua idade? ")

if (idade >= 18) {
    alert("Maior de idade! Você pode acessar este conteúdo.")
} else {
    alert("Menor de idade! Você não pode acessar este conteúdo.")
    window.location.href = google
}

/*laço de repetição - while
var count = 0

while (count <= 5) {
    console.log(count)
    count = count + 1
}
*/

/*laço de repetição - for
var count

for (count = 0; count <= 10; count++) {
    console.log(count)
}
*/
