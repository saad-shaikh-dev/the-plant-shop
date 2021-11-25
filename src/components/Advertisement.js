import React from 'react'
import { Link } from "gatsby"
import { plantData } from '../data'

const Advertisement = () => {
    const data = plantData.filter(product => { return product.advertising === true })

    return (
        <section className="full-height two-items flex-vertical">
            <br />
            <h2 className="text-center">Special Offer</h2>

            {data.map((product) => {
                return (
                    <div className="flex-horizontal gap-three column-two" key={product.id}>
                        <div><img src={product.image} alt={product.item_name}></img></div>
                        <div>
                            <h3 className="border-bottom">{product.item_name}</h3>
                            <p className="background-white"><small>{product.item_description}</small></p>
                            <p className="bold italics color-main">Only $ 3.75</p>
                            <br />
                            <p><Link className="cta-button" to="/">Purchase now!</Link></p>
                            <br />
                        </div>
                    </div>
                )
            })
            }
            <br />
        </section>
    )
}

export default Advertisement
