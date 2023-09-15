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

export type TCartProduct = {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedPrice": number
}

export type TCart = {
    "id": number,
    "products": TCartProduct[],
    "total": number,
    "discountedTotal": number,
    "userId": number,
    "totalProducts": number,
    "totalQuantity": number
}

export type TLocalCart = {
    id: number,
    quantity: number
}
