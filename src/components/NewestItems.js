import React from 'react'
import { Link } from 'gatsby'
import { plantData } from '../data'

const NewestItems = () => {
    const data = plantData
    console.log(data)

    return (
        <section className="full-height four-items flex-vertical">
            <br />
            <h2 className="text-center">Newest Plants</h2>
            <div className="flex-horizontal item-list">

                {data.slice(0, 8).map((product) => {
                    return (
                        <div className="card-four-columns" key={product.id}>
                            <img loading="lazy" src={product.image} alt={product.item_name} />
                            <h3 className="margin-bottom-remove">{product.item_name}</h3>
                            <p className="margin-remove">{product.item_category} family</p>
                            <p className="margin-top-min"><strong>{product.price}</strong></p>
                        </div>
                    )
                })
                }

            </div>
            <p><Link className="cta-button" to="/">See all</Link></p>
            <br />
        </section>
    )
}

export default NewestItems
