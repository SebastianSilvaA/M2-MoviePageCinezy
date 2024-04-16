const carritoCompra = require("../index")


// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

const carritos = new carritoCompra()

const producto = {
    producto: "leche",
    precio: 10,
    cantidad: 1
}




describe('clase Carrito', () => {
    it("Incializa el carrito como un array vacio", () => {
        expect(carritos.carrito).toEqual([])
    })

    it("recibe un objeto representando un producto y lo agregar al carrito", () => {
         carritos.agregarProducto(producto)
         expect(carritos.carrito).toContain(producto)
    })

    it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
        carritos.carrito = [{
            nombre:"Cereal",
            precio: 5,
            cantidad: 2
        },{
            nombre: "leche",
            precio: 10,
            cantidad: 1
        }, {
            nombre: "camisa",
            precio: 15,
            cantidad: 2
        }]
        expect(carritos.calcularTotal()).toBe(50)
    })
    it("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
        carritos.carrito = [{
            nombre:"Cereal",
            precio: 5,
            cantidad: 2
        },{
            nombre: "leche",
            precio: 10,
            cantidad: 1
        }, {
            nombre: "camisa",
            precio: 15,
            cantidad: 2
        }]
        expect(carritos.aplicarDescuento(50)).toBe(25)
    })
})