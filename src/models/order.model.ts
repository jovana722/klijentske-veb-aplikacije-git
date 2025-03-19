import { CinemaModel } from "./cinema.model"

export interface OrderModel {
    id: number
    movieId: number
    cinema: CinemaModel
    title: string
    count: number
    pricePerItem: number
    status: 'ordered' | 'paid' | 'canceled',
    rating: null | boolean
}