import {
    GetProducts, GetProductBySlug, NewProduct, UpdateProduct, DeleteProduct
} from '../../services/ProductService'
import { GET_PRODUCTS, GET_PRODUCT_BY_SLUG, NEW_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../types'

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

export const LoadProductBySlug = (id) => {
    return async (dispatch) => {
        try {
            const productBySlug = await GetProductBySlug(id)
            dispatch({
                type: GET_PRODUCT_BY_SLUG,
                payload: productBySlug
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