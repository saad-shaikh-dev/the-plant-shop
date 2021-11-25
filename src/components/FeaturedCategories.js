import React from 'react'

const FeaturedCategories = () => {
    return (
        <section className="full-height three-items flex-vertical">
            <br />
            <h2>Featured Plant Families</h2>
            <div className="flex-horizontal item-list">
                <div className="flex-vertical hover-box-shadow image-container">
                    <img className="image-darken" src="anthocerotaceae.jpg" alt="Anthocerotaceae"></img>
                    <span className="image-label font-one-point-five">Anthocerotaceae</span>
                </div>
                <div className="flex-vertical hover-box-shadow image-container">
                    <img className="image-darken" src="poaceae.jpg" alt="Poaceae"></img>
                    <span className="image-label font-one-point-five">Poaceae</span>
                </div>
                <div className="flex-vertical hover-box-shadow image-container">
                    <img className="image-darken" src="campanulaceae.JPG" alt="Campanulaceae"></img>
                    <span className="image-label font-one-point-five">Campanulaceae</span>
                </div>
            </div>
            <br />
        </section>
    )
}

export default FeaturedCategories
