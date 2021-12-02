import React from 'react'

const FeaturedCategories = () => {
    return (
        <section className="full-height three-items flex-vertical">
            <br />
            <h2>Featured Plant Families</h2>
            <div className="flex-horizontal item-list">
                <div className="flex-vertical hover-box-shadow image-container">
                    <img className="image-darken" loading="lazy" src="https://www.bryo.cz/sites/Image/bryo/anthoceros_agrestis/1105_Anthoceros_agrestis_2010_08_20_7326.jpg" alt="Anthocerotaceae"></img>
                    <span className="image-label font-one-point-five">Anthocerotaceae</span>
                </div>
                <div className="flex-vertical hover-box-shadow image-container">
                    <img className="image-darken" loading="lazy" src="https://nyc.books.plantsofsuburbia.com/wp-content/uploads/2015/04/Dactylis-glomerata.commons.wikipedia.org_.jpg" alt="Poaceae"></img>
                    <span className="image-label font-one-point-five">Poaceae</span>
                </div>
                <div className="flex-vertical hover-box-shadow image-container">
                    <img className="image-darken" src="https://farm9.staticflickr.com/8384/8451190233_c0bc5cbc27_z.jpg" alt="Campanulaceae"></img>
                    <span className="image-label font-one-point-five">Campanulaceae</span>
                </div>
            </div>
            <br />
        </section>
    )
}

export default FeaturedCategories
