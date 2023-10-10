import CustomRouter from "./router.js"
import productsController from "../controllers/products.controller.js"

export default class ProductsRouter extends CustomRouter {
    init() {
        this.get("/:id", ["PUBLIC"], productsController.getProduct)

        this.get("/:limit?/:page?/:query?/:sort?", ["PUBLIC"], productsController.getProducts)

        this.put("/:id", ["ADMIN"], productsController.updateProduct)

        this.post("/", ["ADMIN"], productsController.createProduct)

        this.delete("/:id", ["ADMIN"], productsController.deleteProduct)
        
        this.post("/mockingproducts", ["PUBLIC"], productsController.generateProductsMock)
    }
}