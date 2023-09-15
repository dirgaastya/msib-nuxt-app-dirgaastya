import axios from 'axios'
import { TCart, TLocalCart } from '~/types/types'


export const useCartStore = defineStore('cart', {
    state: (): {
        cart: TCart,
        localCart: TLocalCart[]
    } => ({
        cart: {} as TCart,
        localCart: []
    }),
    getters: {
        cartCount: (state) => state.cart.products.length
    },
    actions: {
        async fetchCart(): Promise<void> {
            try {
                const response = await axios.get(`https://dummyjson.com/carts/1`)
                this.cart = response.data
            } catch (error) {
                console.error(error)
            }
        },
        async addItem(id: number, quantity: number): Promise<void> {
            try {
                const index = this.localCart.findIndex(item => item.id === id)
                if (index !== -1) {
                    this.localCart[index].quantity += quantity
                } else {
                    this.localCart.push({ id, quantity })
                }

                const requestData = {
                    merge: true,
                    products: this.localCart
                };

                const response = await axios.put('https://dummyjson.com/carts/1', requestData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                this.cart = response.data
            } catch (error) { console.error(error) }
        },
        async removeItem(id: number): Promise<void> {
            try {
                const product = this.cart.products.filter(product => product.id !== id)
                const requestData = {
                    products: product
                };

                const response = await axios.put('https://dummyjson.com/carts/1', requestData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                this.cart = response.data
            } catch (error) { console.error(error) }
        },
    }
})
