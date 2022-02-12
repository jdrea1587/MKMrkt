import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadProductBySlug } from '../store/actions/ProductAction'
import { Link, useNavigate } from 'react-router-dom'


const mapStateToProps = ({ productState }) => {
    return { productState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(LoadProductBySlug(id)),
    }
}
function ProductView({fetchProduct, productState}) {


    const { id } = useParams()
    console.log(id)
    fetchProduct(id)
    console.log(productState)
    return (
        <div>ProductView</div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)