import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service'
import { Category } from 'src/utils/products';
import { Products } from './products.entity'
import { CreateProductDto, UpdateProductDto } from './dto/products.dto'

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

    @Patch()
    updateProduct(@Body() updatedProduct: UpdateProductDto) {
        return this.productsService.updateProduct(updatedProduct.id, updatedProduct)
    }

    @Delete(":id")
    deleteProductById(@Param("id", ParseIntPipe) id: number) {
        return this.productsService.deleteProductById(id)
    }

    @Get("hello")
    getHello(): string {
        return "Hello products!"
    }
}
