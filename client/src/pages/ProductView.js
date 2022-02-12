import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadProductBySlug } from '../store/actions/ProductAction'
import styled from 'styled-components'

const StyledRoot = styled.div`
    padding: 50px 12px;
`
const StyledContainer = styled.div`
    max-width: 550px;
    width: 100%;
    margin: auto;
    padding: 20px;
    border: 2px solid black;
    box-shadow: 5px;
`
const StyledName = styled.h1`
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
    @media (max-width: 500px) {
        font-size: 1rem;
`
const StyledPhoto = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
    border: 3px solid black;
    @media (max-width: 500px) {
        font-size: 1rem;
`
const StyledDescription = styled.h2`
    color: #000;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 1rem;
}   
`
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
    const { name, description, image, price } = productState.product

    return (

        <StyledRoot>
            <StyledContainer>
                <StyledName>
                    {name}
                </StyledName>
                <StyledPhoto alt="item"
                    className="photo"
                    src={image}
                />
                <StyledDescription>
                    {description}
                </StyledDescription>
                <div>
                    {price}
                </div>
            </StyledContainer>
        </StyledRoot>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)