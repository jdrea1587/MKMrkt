import React from "react";
import "../index.css"
import Card from "../components/Card";
import shellImg from '../assets/spinyshell.jpeg'

function Home() {
    return (

        <div className="container">
            <div className="row">
                <Card
                    name="Spiny Shell"
                    description="Although the Spiny Shell has taken on many different forms and variations throughout the series, its main objective has always remained the same: to utterly obliterate the front runner in the race."
                    images={shellImg}
                    price="5,999"
                    available={true}
                />

                <Card
                    name="Spiny Shell"
                    description="Although the Spiny Shell has taken on many different forms and variations throughout the series, its main objective has always remained the same: to utterly obliterate the front runner in the race."
                    images={shellImg}
                    price="5,999"
                    available={true}
                />

                <Card
                    name="Spiny Shell"
                    description="Although the Spiny Shell has taken on many different forms and variations throughout the series, its main objective has always remained the same: to utterly obliterate the front runner in the race."
                    images={shellImg}
                    price="5,999"
                    available={true}
                />

                <Card
                    name="Spiny Shell"
                    description="Although the Spiny Shell has taken on many different forms and variations throughout the series, its main objective has always remained the same: to utterly obliterate the front runner in the race."
                    images={shellImg}
                    price="5,999"
                    available={true}
                />
            </div>
        </div>
    );
}

export default Home;