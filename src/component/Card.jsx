import React from "react";

let Carddata = ({img,title}) => {
    return (
        <>
            <div className="card rounded-0 position-relative border-0">
                <div className="card-img rounded-0">
                    <img src={img} alt="card image" />
                </div>
                <div className="card-data">
                    <span><i class="fa-solid fa-pen me-2"></i> by Alisa Michaels</span>
                    <h2 className="mt-2">{title}</h2>
                </div>
                <div className="card-tol position-absolute">
                    <span><i class="fa-solid fa-pen me-2"></i>vacation</span>
                </div>
            </div>
        </>
    )
}

let Logo=({logo,title})=>{
    return(
        <>
        <div className="logo-data">
            <div className="logo-img">
                <span className="mb-1 d-inline-block">{logo}</span>
                <p className="mb-1">1.destination</p>
                <h2>{title}</h2>
            </div>
        </div>
        </>
    )
}
export {Carddata ,Logo};