precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
let valorTotal = document.querySelector(".valor-total");

function Suma() {
  cantidad = document.querySelector(".cantidad");
  aumentar = Number(cantidad.innerHTML);
  aumentar = aumentar + 1;
  cantidad.innerHTML = aumentar;
  valorTotal.innerHTML = aumentar * precio;
}

function Resta() {
  cantidad = document.querySelector(".cantidad");
  disminuir = Number(cantidad.innerHTML);
  disminuir = disminuir - 1;
  cantidad.innerHTML = disminuir;
  valorTotal.innerHTML = disminuir * precio;
}
