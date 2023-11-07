import { Injectable } from '@nestjs/common';
import { Category, products as dbProducts, Product } from '../utils/products'
import { Products } from './products.entity'

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

    updateProductName(id: number, name: string,) {

    }
}
