import React from "react";

let Heading = (props) => {
    return (
        <>
            <div className="blog-data">
                <div className="head-data">
                    <p className="mb-2">Lorem ipsum dolor</p>
                    <h2>{props.title}<span>{props.subtitle}</span></h2>
                </div>
            </div>
        </>
    )

}
export default Heading;