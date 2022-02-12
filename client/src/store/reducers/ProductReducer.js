const { PRODUCT_LOADING_TYPE, GET_PRODUCTS, GET_PRODUCT_BY_SLUG, UPDATE_PRODUCT, NEW_PRODUCT, DELETE_PRODUCT } = require('../types')

const iState = {
    product: {},
    products: [],
    productsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}

const ProductReducer = (state = iState, action) => {
    switch (action.type) {
        case PRODUCT_LOADING_TYPE:
            return { ...state, productsLoading: action.payload }
        case GET_PRODUCTS:
            return { ...state, products: action.payload }
        case GET_PRODUCT_BY_SLUG:
            return { ...state, product: action.payload }
        case NEW_PRODUCT:
            return { ...state, products: [...state.products, action.payload] }
        case UPDATE_PRODUCT:
            const updatedProducts = state.products.map((product) => {
                return action.payload._id === product._id ? action.payload : product
            })
            return { ...state, products: updatedProducts, product: action.payload }
        case DELETE_PRODUCT:
            const filteredProducts = state.products.filter((product) =>
                product.id !== action.payload)
            return { ...state, products: filteredProducts }
        default:
            return { ...state }
    }
}

export default ProductReducer