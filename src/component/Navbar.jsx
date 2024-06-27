import React from "react";

let Navbar = () => {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href="#"><i class="fa-regular fa-map pe-2 fs-5"></i>Destinations</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active " href="#">home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">pages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Destinations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">blog </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">landing</a>
                                </li>
                            </ul>
                        </div>
                        <a href="javacsript:void(0)" className="search">search <i class="fa-solid fa-magnifying-glass ps-2"></i></a>
                    </div>
                </nav>
                <div className="logo">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h5-logo-img-04.png" alt="logo image" />
                </div>
            </header>
        </>
    )
}
export default Navbar;