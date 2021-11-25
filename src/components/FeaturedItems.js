import React from 'react'
import { plantData } from '../data'

const FeaturedItems = () => {
    const data = plantData.filter(product => { return product.featured === true })

    return (
        <section className="full-height four-items flex-vertical">
            <br />
            <h2 className="text-center">Featured Plants</h2>
            <div className="flex-horizontal item-list">

                {data.slice(0, 4).map((product) => {
                    return (
                        <div className="card-four-columns" key={product.id}>
                            <img src={product.image} alt={product.item_name} />
                            <h3 className="margin-bottom-remove">{product.item_name}</h3>
                            <p className="margin-remove">{product.item_category} family</p>
                            <p className="margin-top-min"><strong>{product.price}</strong></p>
                        </div>
                    )
                })
                }

            </div>
            <br />
        </section>
    )
}

export default FeaturedItems
