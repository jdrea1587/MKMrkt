import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadProductBySlug } from '../store/actions/ProductAction'
import styled from 'styled-components'



const mapStateToProps = ({ productState }) => {
    return { productState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(LoadProductBySlug(id)),
    }
}

function ProductView({ fetchProduct, productState }) {

    useEffect(() => {
        fetchProduct(id)
    }, [])
    const { id } = useParams()
    const { name, description, image } = productState.product

    

    return (

        <div>

            <div style={{ color: '#000' }}>
                <h2>{name}</h2>
                <div>
                    <img alt="item"
                        className="photo"
                        src={image}
                    />
                </div>
                <div>
                    {description}
                </div>
            </div>
           
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)