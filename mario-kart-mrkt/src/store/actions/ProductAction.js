import {
    GetProducts, GetProductsById, NewProduct, UpdateProduct, DeleteProduct
} from '../../services/ProductService'
import { GET_PRODUCTS, GET_PRODUCTS_BY_ID, NEW_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../types'

export const LoadProducts = () => {
    return async (dispatch) => {
        try {
            const products = await GetProducts()
            dispatch({
                type: GET_PRODUCTS,
                payload: products
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadProductsById = (id) => {
    return async (dispatch) => {
        try {
            const productsById = await GetProductsById(id)
            dispatch({
                type: GET_PRODUCTS_BY_ID,
                payload: productsById
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadNewProduct = (product) => {
    return async (dispatch) => {
        try {
            const newProduct = await NewProduct(product)
            dispatch({
                type: NEW_PRODUCT,
                payload: newProduct
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadUpdateProduct = (productToUpdate) => {
    return async (dispatch) => {
        try {
            const updatedProduct = await UpdateProduct(productToUpdate)
            dispatch({
                type: UPDATE_PRODUCT,
                payload: updatedProduct
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadDeleteProduct = (id) => {
    return async (dispatch) => {
        try {
            const deleteProduct = await DeleteProduct(id)
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            })
        } catch (error) {
            throw error
        }
    }
}