import React from "react";

let Travel = ({date,title}) => {
    return (
        <>
            <div className="travel-data">
                <span className=" me-4 d-inline-block"> <i class="fa-regular fa-calendar me-1"></i>{date}</span>
                <span><i class="fa-solid fa-pen me-2 mb-2"></i> by Alisa Michaels</span>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam</p>
                <button>read more <i class="fa-solid fa-arrow-right ms-2"></i></button>
            </div>
        </>
    )
}
export default Travel;