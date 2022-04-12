function ver(inmueble) {
	var productos = document.getElementById(inmueble)
	
	if(productos.style.display == 'none'){
		productos.style.display = 'block'
	}else{
		productos.style.display = 'none'
	}
}


