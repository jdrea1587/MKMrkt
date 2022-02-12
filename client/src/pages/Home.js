import React from "react";
import { useEffect } from 'react';
import { connect } from 'react-redux'
import "../index.css"
import Card from "../components/Card";
import { LoadProducts } from "../store/actions/ProductAction";

const mapStateToProps = ({ productState }) => {
    return { productState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(LoadProducts()),
    }
}

function Home(props) {
    console.log(props)
    useEffect(() => {
        props.fetchProducts()
    }, [])
    return (

        <div className="container">
            <div className="row">
                {
                    props.productState.products.map((product) => (
                            
                        <Card
                            key={product.slug}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            available={product.available}
                        />
                    )
                    )}

            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);