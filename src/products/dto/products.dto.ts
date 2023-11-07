import { Category } from '../../utils/products'

export class CreateProductDto {
    name: string
    description: string
    category: Category
    price: number
    stock: number
}