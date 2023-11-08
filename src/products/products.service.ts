import { Injectable } from '@nestjs/common';
import { Category, products as dbProducts } from '../utils/products'
import { Products } from './products.entity'
import { UpdateProductDto } from './dto/products.dto'

@Injectable()
export class ProductsService {

    private products: Products[] = dbProducts

    getAllProductos() {
        return this.products
    }

    createProduct(
        id: number,
        name: string,
        description: string,
        category: Category,
        price: number,
        stock: number
    ) {
        this.products.push({ id, name, description, category, price, stock })
        return this.products
    }

    updateProduct(id: number, updatedFields: UpdateProductDto): Products | {} {
        let indexUpdated: number = this.products.findIndex((e) => e.id === id)
        if (indexUpdated >= 0) {
            let updatedProduct = { ...this.products[indexUpdated], ...updatedFields }
            this.products[indexUpdated] = updatedProduct
            return this.products[indexUpdated]
        }
        else {
            return {}
        }
    }

    deleteProductById(id: number): Products | {} {
        let indexDeleted: number = this.products.findIndex((e) => e.id === id)
        if (indexDeleted >= 0) {
            return this.products.splice(indexDeleted, 1)[0]
        }
        else {
            return {}
        }
    }
}
