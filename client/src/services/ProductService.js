import Client from '.'

export const GetProducts = async () => {
    try {
        const res = await Client.get('/products/')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetProductBySlug = async (id) => {
    try {
        const res = await Client.get(`/products/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const NewProduct = async (newProduct) => {
    try {
        const res = await Client.product(`/products`, newProduct)
        return res.data.products
    } catch (error) {
        throw error
    }
}

export const UpdateProduct = async (updatedProduct) => {
    try {
        const res = await Client.put(`/products/${updatedProduct._id}`, updatedProduct)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteProduct = async (id) => {
    try {
        const res = await Client.delete(`/products/${id}`)
        console.log('delete res', res) 
    } catch (error) {
        throw error
    }
}