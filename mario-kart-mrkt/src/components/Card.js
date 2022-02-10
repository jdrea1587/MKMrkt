import React from 'react'

export default function Card(props) {
    let newClassName = 'color_bg ${props.alt}'
    let bg_img = '({props.images})'
    let { name, description, price, available } = props
    return (
        <div className="card">
            <div className="wrapper">
                <div className={newClassName}>
                    <div className="card_img" style={{ "backgroundImage": bg_img }}>
                        
                    </div>
                    <div className="heart">
                        {/* svg here */}
                    </div>
                    <div className="cardInfo">
                        <h1>{name}</h1>
                        <h3>{description}</h3>
                        <p className="available">{available}</p>
                        <div className="priceGroup">
                            <p className="price">{price}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
