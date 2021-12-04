import React from 'react'
import { plantData } from '../data'

const Brands = () => {
    const data = plantData.filter(product => { return product.most_popular === true })

    return (
        <section className="six-items flex-vertical">
            <br />
            <h2>Our Most Popular Plants</h2>
            <div className="flex-horizontal">

                {data.slice(0, 6).map((product) => {
                    return (

                        <div className="image-container hover-box-shadow height-one-seventy-five">
                            <img className="image-darken" loading="lazy" src={product.image} alt={product.most_popular}></img>
                            <span className="image-label font-one-point-two-five">{product.item_name}</span>
                        </div>

                    )
                })
                }

            </div>
            <br />
        </section>
    )
}

export default Brands
