const { PRODUCT_LOADING_TYPE, GET_PRODUCTS } = require('../types')

const iState = {
    Products: [],
    ProductsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}

const ProductReducer = (state = iState, action) => {
    switch (action.type) {
        case PRODUCT_LOADING_TYPE:
            return { ...state, productsLoading: action.payload }
        case GET_PRODUCTS:
            return { ...state, products: action.payload }
        default:
            return { ...state }
    }
}

export default ProductReducer