class carritoCompra {
      constructor() {
        this.carrito = [];
      }

      agregarProducto(producto) {
           this.carrito.push(producto)
      }

      calcularTotal() {
        let total = 0;

       for(const producto of this.carrito) {
        total += producto.precio * producto.cantidad
       }
       return total;
      }

      aplicarDescuento(porcentaje) {
       const total = this.calcularTotal();


       const descuento = porcentaje / 100 * total

       const newTotal = total - descuento

       return newTotal


         

     } 
}







module.exports = carritoCompra;


// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.


