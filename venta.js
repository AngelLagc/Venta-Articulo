let articulo = {
    nombre: "Calcetines",
    descripcion: "Para el frio",
    precio: 50,
    cantidad: 2,
    fotografia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9HQQXnhQHStazg_OFNPWLprOooHi_ibP3BJfte0caaAhwLRQdqnSzrFcCQ0sqdXgvXM&usqp=CAU"
}
console.log(articulo);

let venta = {
    productos: {
        prenda: "calcetines"
},
    total: articulo.cantidad * articulo.precio,
    idCliente: "763",
    email: "ejemplo@gmail.com"
}
console.log("Adquirio " + articulo.cantidad + " "+ articulo.nombre + " Vendido al cliente "+ venta.idCliente + " total "+ venta.total);

//SUBIR AL REPOSITORIO