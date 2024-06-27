import React from "react";
import Button from "./component/Button";
import Navbar from "./component/Navbar";
import Main from "./component/Mian";

import Heading from "./component/Heading";
import Travel from "./component/Travel";
import Footer from "./component/Footer";
import { Carddata, Logo } from "./component/Card";

let App = () => {
  let data = [
    {
      img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-38.jpg",
      title: "On the Shores of a Vanishing Island in India ",
    },
    {
      img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-39.jpg",
      title: "The real Netherlands: q&a with Cleo Wachter ",
    },
    {
      img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-40.jpg",
      title: "22 Things to know before you go to Kazakhstan",
    },
    {
      img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-41.jpg",
      title: "21 Thing to know before your trip to Kolkota  ",
    },
    {
      img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-42.jpg",
      title: "Pingvellir, Iceland’s oldest National Park ",
    },
    {
      img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-43.jpg",
      title: "Munich – City that deserve more than a stopover ",
    },
  ];

  let list = [
    {
      logo: <i class="fa-solid fa-van-shuttle"></i>,
      title: "adventure",
    },
    {
      logo: <i class="fa-solid fa-map-location"></i>,
      title: "beaches",
    },
    {
      logo: <i class="fa-solid fa-fire"></i>,
      title: "camping",
    },
    {
      logo: <i class="fa-solid fa-igloo"></i>,
      title: "friendly",
    },
    {
      logo:<i class="fa-solid fa-briefcase"></i>,
      title: "low-budget",
    },
    {
      logo: <i class="fa-solid fa-signs-post"></i>,
      title: "popular",
    },
  ]
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="banner-data">
                <h1>Camping Guides for your next Adventure</h1>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Navbar />

      <section className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Main />
            </div>
            <div className="col-lg-6">
              <div className="main-info">
                <div className="main-img">
                  <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h5-img-01.jpg" alt="banner image" />
                </div>
                <div className="side-box">
                  <span className="fs-5">Blogger</span>
                  <h2 className="fs-3 fw-bold">Ellena smith</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <Heading title={"featured blog"} subtitle={"post"} />
          <div className="blog-card">
            <div className="row">
              {data.map((val) => {
                return (
                  <div className="col-lg-4">
                    <Carddata img={val.img} title={val.title} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="blog-logo">
            <div className="row">
              {
                list.map((val) => {
                  return (
                    <div className="col-lg-2">
                      <Logo logo={val.logo} title={val.title} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className="travel">
        <div className="container">
          <Heading title={"travel essentians"} subtitle={"tips"} />
          <div className="travel-time">
            <div className="row">
              <div className="col-lg-6">
                <div className="travel-info position-relative">
                  <div className="travel-img">
                    <img src={"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg"} alt="travel image" />
                  </div>
                  <div className="card-tol position-absolute">
                    <span className="d-inline-block"><i class="fa-solid fa-pen me-2"></i>vacation</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <Travel date={"October 8, 2019"} title={"Moving trough: the everyday urban jungle of your city"} />
              </div>
            </div>
          </div>
          <div className="travel-time">
            <div className="row">
              <div className="col-lg-6">
                <Travel date={"October 10, 2019"} title={"Top Hiking Trails in the Peruvian Amazon Rain Forest"} />
              </div>
              <div className="col-lg-6">
                <div className="travel-info position-relative">
                  <div className="travel-img">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-02.jpg" alt="travel image" />
                  </div>
                  <div className="card-tol position-absolute">
                    <span className="d-inline-block"><i class="fa-solid fa-pen me-2"></i>vacation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}
export default App;
