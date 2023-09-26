/**
 Copyright (c) 2020, Xgrid Inc, https://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// React Imports
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HashLink } from "react-router-hash-link";

// Service imports
import animationService from "../../services/AnimationService";

// Style Imports
import "./Home.scss";
import "./responsive.scss";

// Components Imports
import MainNavbar from "../../components/Navbar/MainNavbar";
import ContactUsComponent from "../../components/ContactUs/ContactUsComponent";
import Testimonials from "../../components/TestimonialsComponent/Testimonials";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

// Constants Imports
import constants from "../../constants/constants";

import { Element } from "react-scroll";
import { Link } from "react-router-dom";
// Bootstrap Imports
import { Row, Col, Container } from "react-bootstrap";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      testimonials: [
        {
          id: "testimonial1",
          name: "Asang",
          company: "Fiber Mountain Inc.",
          designation: "Senior Sales Engineer",
          testimonial:
            "“ Xgrid has been working with us on different project domains for quite some time and the team includes talented and creative individuals who always exceed our expectations. Apart from their out of the box ideas, immaculate execution, frequent demos and updates, they always ensure prompt response and timely delivery of the project modules.“",
          clientImage: constants.ui.images.clients.fmTestimonials,
          clientImageAlternative: "David Brown USIS",
          lineBg: "bg-fm-red",
        },
        {
          id: "testimonial2",
          name: "John R. Lagana",
          company: "US Information Systems",
          designation: "Treasurer",
          testimonial:
            "“ Xgrid has repeatedly demonstrated great professionalism and dedication to not only meet but exceed our expectations specifically their attention to detail and quality in developing intuitive user interfaces.“",
          clientImage: constants.ui.images.clients.usisTestimonials,
          clientImageAlternative: "USIS Logo",
          lineBg: "bg-usis-blue",
        },
        {
          id: "testimonial3",
          name: "Hanan Rasool",
          company: "PEL",
          designation: "Manager E-Commerce and Consumer Insights",
          testimonial:
            "“ A professional set-up with multiple resources for each skill-set, creating dependency, reliability, and a pool of expertise that any organization can leverage. Expertise and services provided are not limited to your dedicated team, but instead the cumulative resource pool of the whole organization, thanks to the organization’s inter-connected structure and leadership.“",
          clientImage: constants.ui.images.clients.pelTestimonials,
          clientImageAlternative: "Jonas Kakaroto Fibermountain",
          lineBg: "bg-pel-blue",
        },
      ],
    };
  }

  componentDidMount() {
    animationService.transformTextY(
      "#trigger-service-text",
      "#trigger-service-text .section-text-animation",
      "-=700"
    );

    // Animates Testimonials
    animationService.animateTestimonials(
      "#clientsTestimonials",
      "#testimonial1",
      "AfterEnter"
    );
    animationService.animateTestimonials(
      "#clientsTestimonials",
      "#testimonial2",
      0
    );
    animationService.animateTestimonials("#testimonial2", "#testimonial3", 0.4);

    animationService.transformTextY(
      "#trigger-testimonial-text",
      "#trigger-testimonial-text .section-text-animation",
      "-=700"
    );
    animationService.transformTextY(
      "#homepage-section-4-main-wrapper",
      "#homepage-section-4-main-wrapper .section-text-animation",
      "-=700"
    );
    animationService.transformYBlock(
      "#fm-case-study-block-wrapper",
      "#fm-case-study-block-wrapper .initial-opacity-transform-block",
      50,
      0.7,
      "start-anim-transform-up"
    );
    animationService.transformYBlock(
      "#usis-case-study-block-wrapper",
      "#usis-case-study-block-wrapper .initial-opacity-transform-block",
      50,
      0.7,
      "start-anim-transform-up"
    );
    animationService.transformYBlock(
      "#pel-case-study-block-wrapper",
      "#pel-case-study-block-wrapper .initial-opacity-transform-block",
      50,
      0.7,
      "start-anim-transform-up"
    );
    animationService.transformYBlock(
      "#alkira-case-study-block-wrapper",
      "#alkira-case-study-block-wrapper .initial-opacity-transform-block",
      50,
      0.7,
      "start-anim-transform-up"
    );

    // Animates Technology Section
    animationService.transformYBlock(
      "#home-technology-section",
      "#home-technology-section .content-wrapper",
      50,
      0.6,
      "translate-content-in"
    );

    // Animates Footer Elements
    animationService.footerElementTransform();

    // Changes Header Logo
    animationService.changesNavbarLogo("#homepage-section-1-2-main-wrapper");

    // For Menu's Scroll Effect
    window.addEventListener("scroll", this.handleMenuScroll);
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    let textZoomIn_tween = TweenMax.from(
      "#homepage-section-1-2-main-wrapper .animated-heading",
      0.5,
      { scale: 1 }
    );
    let rectangleBannerFigure;
    let circleBannerFigure;
    let rectangleLeftBannerFigure;
    if (innerWidth > 1435 && innerWidth < 1690) {
      circleBannerFigure = TweenMax.to(".circle-banner-figure", 0.5, {
        scale: 0.15,
        y: 210,
        x: 260,
      });

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        { scale: 0.1, y: 380, x: 455, skew: 70 }
      );

      rectangleBannerFigure = TweenMax.to(".rectangle-banner-figure", 0.5, {
        scale: 0.15,
        y: 300,
        x: -255,
      });
    } else if (innerWidth > 2000) {
      circleBannerFigure = TweenMax.to(".circle-banner-figure", 0.5, {
        scale: 0.15,
        y: 325,
        x: 360,
      });

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        { scale: 0.1, y: 600, x: 908, skew: 70 }
      );

      rectangleBannerFigure = TweenMax.to(".rectangle-banner-figure", 0.5, {
        scale: 0.15,
        y: 500,
        x: -580,
      });
    } else if (innerHeight <= 650) {
      circleBannerFigure = TweenMax.to(".circle-banner-figure", 0.5, {
        scale: 0.15,
        y: 305,
        x: 350,
      });

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        { scale: 0.1, y: 400, x: 608, skew: 70 }
      );

      rectangleBannerFigure = TweenMax.to(".rectangle-banner-figure", 0.15, {
        scale: 0.15,
        y: 380,
        x: -265,
      });
    } else {
      circleBannerFigure = TweenMax.to(".circle-banner-figure", 0.5, {
        scale: innerWidth > 320 && innerWidth < 600 ? 0.15 : 0.15,
        y: innerWidth > 320 && innerWidth < 600 ? 400 : 375,
        x: innerWidth > 320 && innerWidth < 600 ? 150 : 350,
      });

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        {
          scale: 0.1,
          y: innerWidth > 320 && innerWidth < 600 ? 450 : 500,
          x: innerWidth > 320 && innerWidth < 600 ? 350 : 608,
          skew: 70,
        }
      );

      rectangleBannerFigure = TweenMax.to(".rectangle-banner-figure", 0.5, {
        scale: 0.15,
        y: 464,
        x: -265,
      });
    }
    let fadeIn_tween = TweenMax.fromTo(
      "#homepage-section-1-2-main-wrapper .content-wrapper",
      1,
      { marginBottom: -300, opacity: 0 },
      { marginBottom: 0, opacity: 1 }
    );
    function setTestTween(getClass) {
      let fadeInService1_tween = TweenMax.fromTo(
        getClass,
        0.5,
        { opacity: 0, bottom: "-5rem" },
        { opacity: 1, bottom: "0" },
        5
      );
      return fadeInService1_tween;
    }
    function animateCardsShapes(getClass) {
      let cardsItem = new TimelineMax();
      let bottomUp_tween = TweenMax.fromTo(
        ".services-cards-main-wrapper " + getClass + " .bottom-up",
        0.5,
        { y: 500 },
        { y: 0 },
        6
      );
      let rightToLeft_tween = TweenMax.fromTo(
        ".services-cards-main-wrapper " + getClass + " .right-to-left",
        0.7,
        { x: 300 },
        { x: 0 },
        6
      );
      return cardsItem.add(bottomUp_tween).add(rightToLeft_tween);
    }
    // new ScrollMagic.Scene({
    //   triggerElement: "#home-menu-main-wrapper",
    //   duration: 200, // scroll distance
    //   offset: 0, // start this scene after scrolling for 50px
    //   triggerHook: 0,
    // })
    // .setTween("#section1-first-content-wrapper", {
    //   opacity: 0,
    // })
    // .setPin("#homepage-section-1-main-wrapper") // pins the element for the the scene's duration
    // .setClassToggle("#homepage-section-1-container", "d-block")
    // .addTo(this.controller);
    // new ScrollMagic.Scene({
    //     triggerElement: "#trigger-first-section",
    //     duration: 500, // scroll distance
    //     offset: 200, // start this scene after scrolling for 50px
    //     triggerHook: 0,
    //     })
    //   .setTween(textZoomIn_tween)
    //   .setPin("#homepage-section-1-main-wrapper")
    //   .setClassToggle("#homepage-section-1-main-wrapper", "clip-text-bkpp")
    //   .addTo(this.controller);

    // Animate menu on Text zoom in animation
    new ScrollMagic.Scene({
      triggerElement: "#trigger-first-section",
      duration: 500, // scroll distance
      offset: 200, // start this scene after scrolling for 50px
      triggerHook: 0,
    })
      .setTween(rectangleBannerFigure)
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#trigger-first-section",
      duration: 500, // scroll distance
      offset: 200, // start this scene after scrolling for 50px
      triggerHook: 0,
    })
      .setTween(circleBannerFigure)
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#trigger-first-section",
      duration: 500, // scroll distance
      offset: 200, // start this scene after scrolling for 50px
      triggerHook: 0,
    })
      .setTween(rectangleLeftBannerFigure)
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#trigger-first-section",
      offset: 450, // start this scene after scrolling for 50px
      triggerHook: 0,
    })
      .setClassToggle(".bg-home-banner-default", "bg-home-banner-white")
      .addTo(this.controller);
    // new ScrollMagic.Scene({
    //   triggerElement: "#trigger-first-section",
    //   duration: 200, // scroll distance
    //   offset: 700, // start this scene after scrolling for 50px
    //   triggerHook: 0,
    // })
    //   .setTween(fadeIn_tween)
    //   .setPin("#homepage-section-1-main-wrapper")
    //   .setClassToggle("#homepage-section-1-main-wrapper", "clip-text-bkp")
    //   .addTo(this.controller);
    // new ScrollMagic.Scene({
    //   triggerElement: "#trigger-first-section",
    //   duration: 1500, // scroll distance
    //   offset: 900, // start this scene after scrolling for 50px
    //   triggerHook: 0,
    // })
    //   .setClassToggle("#homepage-section-1-main-wrapper", "-bkp")
    //   .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-first-trigger",
      duration: 100,
      triggerHook: 0.9,
      offset: 0,
    })
      .setTween(setTestTween(".services-card-1"))
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-first-trigger",
      duration: 100,
      triggerHook: 0.8,
      offset: 50,
    })
      .setTween(animateCardsShapes(".services-card-1"))
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-first-trigger",
      duration: 100,
      triggerHook: 0.9,
      offset: 100,
    })
      .setTween(setTestTween(".services-card-2"))
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-first-trigger",
      duration: 100,
      triggerHook: 0.9,
      offset: 150,
    })
      .setTween(animateCardsShapes(".services-card-2"))
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-second-trigger",
      duration: 100,
      triggerHook: 1,
      offset: 600,
    })
      .setTween(setTestTween(".services-card-3"))
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-second-trigger",
      duration: 100,
      triggerHook: 0.85,
      offset: 650,
    })
      .setTween(animateCardsShapes(".services-card-3"))
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-second-trigger",
      duration: 100,
      triggerHook: 1,
      offset: 650,
    })
      .setTween(setTestTween(".services-card-4"))
      .addTo(this.controller);
    new ScrollMagic.Scene({
      triggerElement: "#services-block-second-trigger",
      duration: 100,
      triggerHook: 0.9,
      offset: 700,
    })
      .setTween(animateCardsShapes(".services-card-4"))
      .addTo(this.controller);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleMenuScroll);
  }

  // Hide or show the menu.
  handleMenuScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Xperience the Xtraordinary</title>
        </Helmet>
        <div id="home-menu-main-wrapper">
          <MainNavbar
            firstSection="homepage-section-3-main-wrapper"
            secondSection="homepage-section-4-main-wrapper"
            thirdSection="home-testimonial-section"
            lastSection="form-footer-main-wrapper"
            scrollNavbar={this.state.visible}
          />
        </div>
        <section id="trigger-first-section"></section>
        <section
          id="homepage-section-1-main-wrapper"
          className="vh-100 bg-home-banner-default"
        >
          <div id="homepage-section-1-container" className="container h-100">
            <div
              id="section1-first-content-wrapper"
              className="d-flex align-content-center justify-content-center flex-column h-100"
            >
              <div className="text-center heading-wrapper mb-lg-4">
                <h1 className="text-white line-height-1">
                  Xperience
                  <span className="d-none d-md-inline">
                    <br />
                  </span>{" "}
                  the Xtraordinary
                </h1>
              </div>
              <div className="text-center blurb-wrapper d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                  <p className="text-white w-75">
                    We'll Ensure You Always Get the Best Possible Results
                  </p>
                </div>
                <div className="position-absolute left-0 d-none d-lg-block">
                  <img
                    src={constants.ui.images.greenSignals}
                    alt="Green Signal"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div
            id="homepage-section-1-2-main-wrapper"
            className="h-100 overflow-hidden"
          >
            <div className="container h-100">
              <div className="d-flex align-content-center justify-content-center flex-column h-100">
                <div className="d-flex justify-content-center text-center heading-wrapper mb-lg-2">
                  <h2 className="line-height-1">Xperience</h2>
                    <div className='animated-heading'>
                      <img src={constants.ui.images.experienceAnimate} alt='xperience' />
                    </div>
                </div>
                <div className="text-center content-wrapper">
                  <div className="d-flex justify-content-center mb-lg-1">
                    <h3 className="line-height-1">
                      Creative strategies & out of the box ideas
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p>
                      With a balanced mix of phenomenal designs, compelling messages and well cultivated user experience, we add some secret ingredients to make you stand out from the crowd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        <div className="text-center position-relative">
          <div className="position-absolute circle-banner-figure">
            <img src={constants.ui.images.circleBanner} alt="Circle Banner" />
          </div>
        </div>
        <div className="text-center position-relative">
          <div className="position-absolute rectangle-banner-figure right-0 bottom-0">
            <img
              src={constants.ui.images.rectangleBanner}
              alt="Rectangle Banner"
            />
          </div>
        </div>
        <div className="text-center position-relative">
          <div className="position-absolute rectangle-left-banner-figure">
            <img
              src={constants.ui.images.rectangleLeftBanner}
              alt="Rectangle Left Banner"
            />
          </div>
        </div>
        <section
          id="homepage-section-2-main-wrapper"
          className="vh-100 bg-home-banner-default"
        >
          <div
            id="homepage-section-1-2-main-wrapper"
            className="h-100 overflow-hidden"
          >
            <div className="container h-100">
              <div className="d-flex align-content-center justify-content-center flex-column h-100">
                <div className="d-flex justify-content-center text-center heading-wrapper mb-lg-2">
                  <div className="line-height-1 animated-heading">Discover</div>
                </div>
                <div className="text-center content-wrapper">
                  <div className="d-flex justify-content-center mb-lg-1">
                    <h3 className="line-height-1">
                      Creative strategies & out of the box ideas
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p>
                      We are pioneer in establishing unique drugs like Ginbex
                      (Ginkgo biloba) & Capcidol (Capsaicin). Which help the
                      patient with improved life style.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="homepage-section-3-main-wrapper">
          <div className="container h-100">
            <div
              id="trigger-service-text"
              className="d-flex align-content-center justify-content-center flex-column h-100"
            >
              <div className="section-text-animation initial-opacity-transform text-center content-wrapper mb-4">
                <div className="mb-3">
                  <h4 className="text-white">Our Services</h4>
                </div>
                <div>
                  <p>
                    X-96 is a one-stop-shop to meet all your MarCom & Design needs. From initial concept design to building a strong brand image, we empower enterprises of all sizes to have an impactful digital presence.
                  </p>
                </div>
              </div>
              <div className="services-cards-main-wrapper">
                <div id="services-block-first-trigger"></div>
                <Row>
                  <Col md={6}>
                    <HashLink onMouseEnter={() => animationService.fadeServicesCardOnHover('.services-card-1')} onMouseLeave={() => animationService.fadeServicesCardOnHoverOut()} to='services/#designStudioService'>
                      <div className="services-card-wrapper home-design-studio services-card-1 position-relative border-radius-10 overflow-hidden">
                        <div className='position-relative z-index-10'>
                          <h3 className="text-white line-height-1 mb-4">
                            Design
                            <br />
                            Studio
                          </h3>
                        </div>
                        <div className='position-relative z-index-10'>
                          <p className="text-white">
                            Exciting visuals that instill consumer interest and help you develop a unique brand. Our focus is to build or elevate brands, bespoke to your requirements.
                          </p>
                          <p className='learn-more text-white font-eina-bold'>
                            Learn more
                          </p>
                        </div>
                        <div className="images-wrapper">
                          <div className="text-right right-to-left mr-4">
                            <img
                              src={constants.ui.images.servicesCardEle2}
                              alt=""
                            />
                          </div>
                          <div className="text-right bottom-up">
                            <img
                              width="220"
                              src={constants.ui.images.servicesCardEle1}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </HashLink>
                  </Col>
                  <Col md={6}>
                    <HashLink onMouseEnter={() => animationService.fadeServicesCardOnHover('.services-card-2')} onMouseLeave={() => animationService.fadeServicesCardOnHoverOut()} to='services/#digitalMarketingService'>
                      <div className="services-card-wrapper services-card-2 position-relative border-radius-10 overflow-hidden">
                        <div className='position-relative z-index-10'>
                          <h3 className="text-white line-height-1 mb-4">
                            Digital
                            <br />
                            Marketing
                          </h3>
                        </div>
                        <div className='position-relative z-index-10'>
                          <p className="text-white">
                            Exponential growth in customers and leads as your brand visibility increases through creative marketing and appealing presence on multiple mind-share platforms.
                          </p>
                          <p className='learn-more text-white font-eina-bold'>
                            Learn more
                          </p>
                        </div>
                        <div className="images-wrapper">
                        <div className="text-right right-to-left position-absolute">
                            <img width="280"
                              src={constants.ui.images.servicesCardEle2_1}
                              alt=""
                            />
                          </div>
                          <div className="text-right bottom-up position-absolute">
                            <img
                              width="400"
                              src={constants.ui.images.servicesCardEle2_2}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </HashLink>
                  </Col>
                  <div id="services-block-second-trigger"></div>
                  <Col className="pt-4" md={6}>
                    <HashLink onMouseEnter={() => animationService.fadeServicesCardOnHover('.services-card-3')} onMouseLeave={() => animationService.fadeServicesCardOnHoverOut()} to='services/#technicalWritingService'>
                      <div className="services-card-wrapper services-card-3 position-relative border-radius-10 overflow-hidden">
                      <div className='position-relative z-index-10'>
                          <h3 className="text-white line-height-1 mb-4">
                            Technical
                            <br />
                            Writing
                          </h3>
                        </div>
                        <div className='position-relative z-index-10'>
                          <p className="text-white">
                            Exceptionally well written content that builds a connection with your customers, educates them about your product and converts them into valuable leads.
                          </p>
                          <p className='learn-more text-white font-eina-bold'>
                            Learn more
                          </p>
                        </div>
                        <div className="images-wrapper">
                          <div className="text-right right-to-left position-absolute">
                            <img
                              width="250"
                              src={constants.ui.images.servicesCardEle3_1}
                              alt=""
                            />
                          </div>
                          <div
                            className="text-right bottom-up position-absolute-right-bottom-0"
                          >
                            <img
                              width="180"
                              src={constants.ui.images.servicesCardEle3_2}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </HashLink>
                  </Col>
                  <Col className="pt-4" md={6}>
                    <HashLink onMouseEnter={() => animationService.fadeServicesCardOnHover('.services-card-4')} onMouseLeave={() => animationService.fadeServicesCardOnHoverOut()} to='services/#webDevService'>
                      <div className="services-card-wrapper services-card-4 position-relative border-radius-10 overflow-hidden">
                      <div className='position-relative z-index-10'>
                          <h3 className="text-white line-height-1 mb-4">
                            Website
                            <br />
                            Development
                          </h3>
                        </div>
                        <div className='position-relative z-index-10'>
                          <p className="text-white">
                            Exclusive website development from concept to launch. We work on well known website platforms or build one from the ground up covering all bases.
                          </p>
                          <p className='learn-more text-white font-eina-bold'>
                            Learn more
                          </p>
                        </div>
                        <div className="images-wrapper">
                          <div className="text-right right-to-left position-absolute">
                            <img
                              width="250"
                              src={constants.ui.images.servicesCardEle4_1}
                              alt=""
                            />
                          </div>
                          <div className="text-right bottom-up position-absolute">
                            <img
                              width="350"
                              src={constants.ui.images.servicesCardEle4_2}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </HashLink>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>
        <Element id='our-portfolio' name='our-portfolio'></Element>
        <section
          id="homepage-section-4-main-wrapper"
          className="bg-color-mirage"
        >
          <div className="container">
            <div className="text-center section-text-animation initial-opacity-transform">
              <h4 className="text-white font-size-2rem">Our Portfolio</h4>
            </div>
            <div className="portfolio-container-wrapper">
              <div id="alkira-case-study-block-wrapper" className='portfolio-card-transition mt-5'>
                <Link onClick={(e) => animationService.animatesPortfolioCardOnClick(e, '#alkira-case-study-block-wrapper')} onMouseEnter={() => animationService.animatesPortfolioCardOnHover('#alkira-case-study-block-wrapper')} onMouseLeave={() => animationService.animatesPortfolioCardOnHoverOut('#alkira-case-study-block-wrapper')} to="casestudy-alkira">
                  <div className="position-relative initial-opacity-transform-block">
                    <div className="alkira-portfolio-bg-bottom-right-icon">
                      <img
                        className="shapes-vert-move"
                        src={constants.ui.images.smallRectangle}
                        alt="Rectangle"
                      />
                    </div>
                    <div className="portfolio-inner-wrapper bg-alkira-blue position-relative mb-5">
                      <div className="alkira-portfolio-bg-top-icon">
                        <img
                          className="shapes-vert-move"
                          src={constants.ui.images.ellipseShape}
                          alt="Ellipse"
                        />
                      </div>
                      <div className="alkira-portfolio-bg-bottom-icon">
                        <img
                          className="spin-object"
                          src={constants.ui.images.greenPolygon}
                          alt="Ellipse"
                        />
                      </div>
                      <div className="portfolio-index-right">
                        <img
                          src={constants.ui.images.portfolio1}
                          alt="Portfolio 1"
                          width="140"
                        />
                      </div>
                      <div className="content-wrapper">
                        <div className="text-center position-relative">
                          <h5 className="text-white line-height-1 mb-0">
                            UI/UX, Brand & Design,<br />
                            Technical Writing, Web Dev
                          </h5>
                          <div className="portfolio-logo-align-left">
                            <img
                              width="100"
                              src={constants.ui.images.alkiraLogo}
                              alt="Alkira logo"
                            />
                          </div>
                        </div>
                      </div>
                      <div className='portfolio-img-wrapper text-center'>
                        <img
                          src={constants.ui.images.alkiraPortfolio}
                          alt="Alkira Portfolio"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div id="fm-case-study-block-wrapper" className='portfolio-card-transition'>
                <Link onClick={(e) => animationService.animatesPortfolioCardOnClick(e, '#fm-case-study-block-wrapper')} onMouseEnter={() => animationService.animatesPortfolioCardOnHover('#fm-case-study-block-wrapper')} onMouseLeave={() => animationService.animatesPortfolioCardOnHoverOut('#fm-case-study-block-wrapper')}  to="/casestudy-fibermountain">
                  <div className="position-relative initial-opacity-transform-block">
                    <div className="fm-portfolio-bg-top-icon">
                      <img
                        className="spin-object"
                        src={constants.ui.images.rectangleShape}
                        alt="Rectangle"
                      />
                    </div>
                    <div className="fm-portfolio-bg-bottom-icon">
                      <img
                        className="shapes-vert-move"
                        src={constants.ui.images.ellipseShape}
                        alt="Ellipse"
                      />
                    </div>
                    <div className="portfolio-inner-wrapper bg-fm-red mt-0 position-relative">
                      <div className="portfolio-index-left">
                        <img
                          src={constants.ui.images.portfolio2}
                          alt="Portfolio 2"
                          width="160"
                        />
                      </div>
                      <div className="content-wrapper">
                        <div className="text-center position-relative">
                          <h5 className="text-white line-height-1 mb-0">
                          UI/UX, Brand & Design,<br />
                            Technical Writing, Web Dev
                          </h5>
                          <div className="portfolio-logo-align-right">
                            <img
                              width='150'
                              src={constants.ui.images.fibermountainLogo}
                              alt="FM logo"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-img-wrapper text-center">
                        <img
                          src={constants.ui.images.fmPorfolio}
                          alt="FM Portfolio"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div id="usis-case-study-block-wrapper" className='portfolio-card-transition'>
                <Link onClick={(e) => animationService.animatesPortfolioCardOnClick(e, '#usis-case-study-block-wrapper')} onMouseEnter={() => animationService.animatesPortfolioCardOnHover('#usis-case-study-block-wrapper')} onMouseLeave={() => animationService.animatesPortfolioCardOnHoverOut('#usis-case-study-block-wrapper')} to="/casestudy-usis">
                  <div className="portfolio-inner-wrapper bg-usis-grey position-relative initial-opacity-transform-block">
                    <div className="usis-portfolio-bg-top-icon">
                      <img
                        className="spin-object"
                        src={constants.ui.images.polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="usis-portfolio-bg-bottom-icon">
                      <img
                        className="spin-object"
                        src={constants.ui.images.smallRectangle}
                        alt="Rectangle"
                      />
                    </div>
                    <div className="usis-portfolio-bg-bottom-left-icon">
                      <img
                        className="shapes-vert-move"
                        src={constants.ui.images.smallPolygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="portfolio-index-right">
                      <img
                        src={constants.ui.images.portfolio3}
                        alt="Portfolio 3"
                        width="180"
                      />
                    </div>
                    <div className="content-wrapper">
                      <div className="text-center position-relative">
                        <h5 className="text-white line-height-1 mb-0">
                          Wireframing, Desktop + iPad<br />
                          Application, Technical Writing
                        </h5>
                        <div className="portfolio-logo-align-left">
                          <img
                            width="80"
                            src={constants.ui.images.usisLogo}
                            alt="Usis logo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-img-wrapper text-center">
                      <img
                        src={constants.ui.images.usisPortfolio}
                        alt="Usis Portfolio"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div id="pel-case-study-block-wrapper" className='portfolio-card-transition'>
                <Link onClick={(e) => animationService.animatesPortfolioCardOnClick(e, '#pel-case-study-block-wrapper')} onMouseEnter={() => animationService.animatesPortfolioCardOnHover('#pel-case-study-block-wrapper')} onMouseLeave={() => animationService.animatesPortfolioCardOnHoverOut('#pel-case-study-block-wrapper')} to="/casestudy-pel">
                  <div className="position-relative initial-opacity-transform-block">
                    <div className="pel-portfolio-bg-bottom-left-icon">
                      <img
                        className="shapes-vert-move"
                        src={constants.ui.images.greenRectangle}
                        alt="Rectangle"
                      />
                    </div>
                    <div className="portfolio-inner-wrapper bg-pel-blue position-relative">
                      <div className="pel-portfolio-bg-top-icon">
                        <img
                          className="shapes-vert-move"
                          src={constants.ui.images.orangePolygon}
                          alt="Polygon"
                        />
                      </div>
                      <div className="pel-portfolio-bg-bottom-icon">
                        <img
                          className="spin-object"
                          src={constants.ui.images.greenPolygon}
                          alt="Polygon"
                        />
                      </div>
                      <div className="portfolio-index-left">
                        <img
                          src={constants.ui.images.portfolio4}
                          alt="Portfolio 4"
                          width="180"
                        />
                      </div>
                      <div className="content-wrapper">
                        <div className="text-center position-relative">
                          <h5 className="text-white line-height-1 mb-0">
                          Visual Design,<br />
                          Web Dev, Community Management
                          </h5>
                          <div className="portfolio-logo-align-right">
                            <img
                              width="65"
                              src={constants.ui.images.pelLogo}
                              alt="PEL logo"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-img-wrapper text-center">
                        <img
                          src={constants.ui.images.pelPortfolio}
                          alt="Pel Portfolio"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Element id='testimonials' name='testimonials'></Element>
        <section id="home-testimonial-section" className="bg-color-mirage">
          <Testimonials content={this.state.testimonials} />
        </section>
        <section id='home-technology-section' className='bg-color-mirage'>
          <Container>
              <div className="technology-stack-wrapper fade-linear-gradient">
                <div className="content-wrapper text-center d-flex justify-content-center text-center align-items-center w-100">
                  <h4 className="text-white mb-0 font-eina-bold">
                      We use cutting-edge technologies to bring out the best for
                      you!
                  </h4>
                </div>
              </div>
          </Container>
        </section> */}
        <ContactUsComponent />
        <ScrollToTop />
      </Fragment>
    );
  }
}

export default Home;
