class Productos {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listarAll() {
        return this.productos.length? this.productos : {error : 'No hay productos cargados.'}
    }

    listar(id) {
        let produc = this.productos.find(produc => produc.id == id)
        return produc || {error : 'Producto no encontrado.'}
    }

    agregar(produc) {
        produc.id = ++this.id
        this.productos.push(produc)
    } 

    actualizar(produc, id) {
        produc.id = Number(id)
        let index = this.productos.findIndex( produc => produc.id == id)
        this.productos.splice( index, 1, produc )
    }

    eliminar (id) {
        let index = this.productos.findIndex( produc => produc.id == id)
        return this.productos.splice( index, 1 )
    }


}

export default Productos