precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function Suma() {
  cantidad = document.querySelector(".cantidad");
  aumentar = Number(cantidad.innerHTML);
  aumentar = aumentar + 1;
  cantidad.innerHTML = aumentar;
}

function Resta() {
  cantidad = document.querySelector(".cantidad");
  disminuir = Number(cantidad.innerHTML);
  disminuir = disminuir - 1;
  cantidad.innerHTML = disminuir;
}
