class ProductManager {
    constructor() {
        this.products = []
        this.nextId= 1
    }

    addProduct(product) {

        const approved =

            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock;

        const validate = this.products.some((item) => item.code === product.code);

        if (approved) {
            if (validate) {
                console.log("Ya existe un producto con este codigo")
            } else {
                product.id = this.nextId++;
                this.products.push(product);
                console.log("Producto agregado correctamente")
            }
        } else {
            console.log("Porfavor completar todo los campos pedidos")
        }
    }

    getProducts (){
        return this.products
    }

    getProductByid(id){
        const product = this.products.find((i) => i.id === id);
        return product ? product : (console.log("Not found product"), null)
    }

}


const manager = new ProductManager()

manager.addProduct({title:"Hidrolavadora Electrica Femmto HLT203 1400W Alta presion 1600 Psi", description:"Transforma tu rutina de limpieza con nuestra hidrolavadora multifuncional y versátil. Gracias a la tecnología AutoStop, no sólo es segura, sino también fácil de manejar. Es la herramienta perfecta para todo, desde autos hasta muebles de jardín.", price:
94999, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_925447-MLU75407070577_032024-O.webp", code: "P001", stock:66})
manager.addProduct({title:"Sierra Circular Skil 5200 5/8'' 1200w 5000 Rpm 220v", description:"La Sierra Circular Skil 5200 es una herramienta con 1200 Watts de potencia, diseñada para realizar cortes en maderas y materiales derivados.", price: 
71.239, thumbnail: "https://http2.mlstatic.com/D_NQ_NP_749929-MLU72560251653_102023-O.webp", code: "P002", stock:13})


console.log(manager.getProducts())
console.log(manager.getProductByid(2))