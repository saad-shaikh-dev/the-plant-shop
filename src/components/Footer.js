import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="flex-horizontal">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
                </a>
            </div>
            <p>This website was designed by <a href="https://saad-shaikh-portfolio.netlify.app/">Saad Shaikh</a></p>
        </footer>
    )
}

export default Footer
