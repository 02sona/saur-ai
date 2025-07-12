import React from 'react'
import image from "../assets/images/marque-icon.png";

function Autoslider2() {
    return (
        <div className="marquee-wrapper">
            <div className="marquee">
                <div className="marquee-content">
                    {Array(2).fill(
                        <span>
                            AI is here to redefine the Meme landscape. Be a part of the Revolution — Join Now!
                            <span className="star-icon">
                                <img
                                    src={image}
                                    alt=""
                                    className="mar-img"
                                    draggable="false"
                                    style={{ userSelect: "none" }}
                                />
                            </span>
                            AI is here to redefine the Meme landscape. Be a part of the Revolution — Join Now!
                          </span>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Autoslider2;