const CarritoCompra = require("../index");

describe('crearCarritoCompra', function(){
    it("inicializa el carrito como un array vacio constructor()", () => {
        const carritoCompra = new CarritoCompra();
        expect(carritoCompra).toBeInstanceOf(CarritoCompra);
        expect(carritoCompra.productos).toEqual([]);
        ///// opcion B
        // expect(Array.isArray(carrito.productos)).toBe(true);
        // expect(carrito.productos.length).toBe(0);
    });

    it("recibe un objeto producto y lo agrega al carrito agregarProducto(producto)", () => {
        const carritoCompra = new CarritoCompra();
        const newproducto = {name: "producto A", price: 10, quantity: 3};
        carritoCompra.agregarProducto(newproducto);
        expect(carritoCompra.productos).toEqual([newproducto]);
        /// opicion B
        //carrito.agregarProducto({name: "producto A", price: 10, quantity: 3});
        //expect(carrito.agregarProducto.length).toBe(1);
    });

    it("calcula el total de la compra sumando los precios de todos los productos en el carrito calcularTotal()", () => {
        const carritoCompra = new CarritoCompra();
        carritoCompra.productos = [
            {name:"Producto A", price: 10, quantity:2},
            {name:"Producto B", price: 20, quantity:3},
            {name:"Producto C", price: 30, quantity:4}
        ];
        expect(carritoCompra.calcularTotal()).toEqual(200);
    });

    it("Aplica un descuento al total de la compra según el porcentaje especificado aplicarDescuento(porcentaje)", () => {
        const carritoCompra = new CarritoCompra();
        carritoCompra.productos = [
            {name:"Producto A", price: 10, quantity:2},
            {name:"Producto B", price: 20, quantity:3},
            {name:"Producto C", price: 30, quantity:4}
        ];
        const porcentajeDes = 0.5; 
        expect(carritoCompra.aplicarDescuento(porcentajeDes)).toBe(100);
    });

});