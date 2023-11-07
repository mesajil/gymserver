export enum Category {
    pesas = 1,
    bebidas,
}

export type Product = {
    id: number
    name: string
    description: string
    category: Category
    price: number
    stock: number
}

export const products: Product[] = [
    {
        id: 1,
        name: "Powerade",
        description: "Bebida energética",
        category: Category.bebidas,
        price: 1.2,
        stock: 30,
    },
    {
        id: 2,
        name: "Coca cola",
        description: "Bebida",
        category: Category.bebidas,
        price: 1.5,
        stock: 35,
    }
]