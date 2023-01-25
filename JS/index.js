let criptografar = document.getElementById("criptografar")
let descriptografar = document.getElementById("descriptografar")
let resultado = document.getElementById("resultado")
let mensagem = document.getElementById("mensagem")
let secreto = null

criptografar.addEventListener("click",function (){
	console.log(mensagem.value)
	secreto = mensagem.value.replaceAll("e","enter")
	secreto = secreto.replaceAll("i","imes")
	secreto = secreto.replaceAll("a","ai")
	secreto = secreto.replaceAll("o","ober")
	secreto = secreto.replaceAll("u","ufat")
	resultado.innerHTML = `
	<div class="grupo-resultado">
	<p>${secreto}</p>
		<button type="button" onclick="copy()" > Copiar </button>
	</div>
	`
})

descriptografar.addEventListener("click",function (){
	console.log(mensagem.value)
	secreto = mensagem.value.replaceAll("enter","e")
	secreto = secreto.replaceAll("imes","i")
	secreto = secreto.replaceAll("ai","a")
	secreto = secreto.replaceAll("ober","o")
	secreto = secreto.replaceAll("ufat","u")
	resultado.innerHTML = `
	<div class="grupo-resultado">
	<p>${secreto}</p>
		<button type="button" onclick="copy()" > Copiar </button>
	</div>
	`
})
function copy(){
	navigator.clipboard.writeText(resultado.children[0].innerText.replace("Copiar",""))
 console.log(resultado.children)
}