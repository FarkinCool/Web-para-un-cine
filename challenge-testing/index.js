class CarritoCompra {
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    getItems(){
        return this.productos;
    }

    calcularTotal(){
        const items = this.getItems();
        let total= 0;
        for(const item of items) total += item.quantity * item.price;
        return total;
    }

    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();
        return total - (total * porcentaje);
    }

}

module.exports = CarritoCompra;