import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service'
import { Category } from 'src/utils/products';
import { Products } from './products.entity'
import { CreateProductDto } from './dto/products.dto'

@Controller('products')
export class ProductsController {
    private newProductId: number = 3
    constructor(private productsService: ProductsService) { }

    @Get()
    getAllProducts() {
        return this.productsService.getAllProductos()
    }

    @Post()
    createProduct(@Body() newProduct: CreateProductDto) {
        return this.productsService.createProduct(
            this.newProductId++,
            newProduct.name,
            newProduct.description,
            newProduct.category,
            newProduct.price,
            newProduct.stock
        )
    }

    @Get("hello")
    getHello(): string {
        return "Hello products!"
    }
}
