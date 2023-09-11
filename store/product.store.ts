import axios from 'axios'

export type TProduct = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
}

export const useProductStore = defineStore('product', {
    state: (): {
        products: TProduct[]
    } => ({
        products: []
    }),
    actions: {
        async fetchProducts(): Promise<void> {
            try {
                const response = await axios.get('https://dummyjson.com/products/')
                this.products = response.data.products
            } catch (error) {
                console.error(error)
            }
        }
    }
})
