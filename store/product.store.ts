import axios from 'axios'
import { TProduct } from '~/types/types'

export const useProductStore = defineStore('product', {
    state: (): {
        products: TProduct[]
        product: TProduct;
        cart: TProduct[];
    } => ({
        products: [],
        product: {} as TProduct,
        cart: []
    }),
    actions: {
        async fetchProducts(): Promise<void> {
            try {
                const response = await axios.get(`https://dummyjson.com/products/`)
                this.products = response.data.products
            } catch (error) {
                console.error(error)
            }
        },
        async getProductDetail(id: number): Promise<void> {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`)
                this.product = response.data
            } catch (error) {
                console.error(error)
            }
        },
        async searchProducts(query: string): Promise<void> {
            try {
                const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
                this.products = response.data.products
            } catch (error) {

            }
        }
    }
})
