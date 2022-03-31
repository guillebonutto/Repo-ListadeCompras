let totalCuadrados = 0
let MyText = document.getElementById("mensaje")
let agregar
let posicion = 0
boolean = false
MyText.addEventListener("keyup", (e) => {
	e.preventDefault()
	if (e.keyCode === 13) {
		// agregar.style.paddingLeft = "20px"
		if (MyText.value != "" && !boolean) {
			agregar = document.getElementById("texto")
			agregar.innerHTML += `
                        <section id="cuadrado${totalCuadrados}" class="cuadrado" style="background-color: ${GenerateNewColor()};">
							<article id="close"">
							<article class="X" onclick="eliminar(${posicion})">X</article>
						</article>
            	            <article id="a${posicion}" style="cursor: pointer;width: 7vw;" onclick="cambiarTexto(${posicion})"> ${
				MyText.value
			}</article>
                        </section>`
			MyText.value = ""
			posicion++
			totalCuadrados++
		} else if (MyText.value != "" && boolean) {
			agregar = document.getElementById(`a${posicion}`)
			agregar.innerText = MyText.value
			MyText.value = ""
			posicion = totalCuadrados
			boolean = false
		}
	}
})

function enter() {
	agregar = document.getElementById("texto")
	if (MyText.value != "" && !boolean) {
		agregar.innerHTML += `
                        <section id="cuadrado${totalCuadrados}" class="cuadrado" style="background-color: ${GenerateNewColor()};" onclick="cambiarTexto(${posicion})">
							<article id="close">
								<article class="X" onclick="eliminar(${posicion})">X</article>
							</article>
    	                    <article id="a${posicion}" style="cursor: pointer;width: 7vw;" onclick="cambiarTexto(${posicion})">${
			MyText.value
		}</article>
                        </section>`
		MyText.value = ""
		agregar.style.paddingLeft = "20px"
		posicion++
		totalCuadrados++
	} else if (MyText.value != "" && boolean) {
		agregar = document.getElementById(`a${posicion}`)
		agregar.innerText = MyText.value
		MyText.value = ""
		posicion = totalCuadrados
		boolean = false
	}
	MyText.focus()
}

function cambiarTexto(numero) {
	if (MyText.value != null && boolean) {
		agregar.innerHTML = MyText.value
	}
	agregar = document.getElementById(`a${numero}`)
	boolean = true
	MyText.value = agregar.innerText
	posicion = numero
	agregar.innerHTML = `<b><u>${MyText.value}</u></b>`
	// posicion = numero
	MyText.focus()
}

function eliminar(numeroCuadrado) {
	let cuadrado = document.getElementById(`cuadrado${numeroCuadrado}`)
	cuadrado.remove()
	MyText.focus()
}

const GenerateNewColor = () => {
	const r = Math.floor(Math.random() * (255 - 150) + 150)
	const g = Math.floor(Math.random() * (255 - 150) + 150)
	const b = Math.floor(Math.random() * (255 - 150) + 150)

	const rgbColor = `rgb(${r},${g},${b})`
	return rgbColor
}
