import React from 'react'

export default function Card(props) {
    let newClassName = 'color_bg ${props.alt}'
    let bg_img = 'url(${props.images})'
    let { name, description, images, price } = props
    return (
        <div className="card">
            <div className="wrapper">
                <div className={newClassName}>
                    <div className="card_img" style={{ "backgroundImage": bg_img }}></div>
                    <div className="heart">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
