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
import products from "./products.json";

import { Element } from "react-scroll";
import { Link } from "react-router-dom";
// Bootstrap Imports
import { Row, Col, Container, Table } from "react-bootstrap";
// import Table from 'react-bootstrap/Table';

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
    animationService.transformTextY(
      "#trigger-service-text-5",
      "#trigger-service-text-5 .section-text-animation",
      "-=700"
    );

    animationService.transformTextY(
      "#trigger-service-text-6",
      "#trigger-service-text-6 .section-text-animation",
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
                    One of the best manufacturers of Finished Pharmaceutical
                    Products, located in Rawalpindi-Pakistan. Founded in 2023.
                    Pharmaqio is committed to providing you with best healthcare
                    solutions manufactured through our dedicated team and
                    state-of-the-art manufacturing facilities ensuring not only
                    a healthier today but also, a healthier tomorrow!
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
                  <div className="line-height-1 animated-heading">Mission</div>
                </div>
                <div className="text-center content-wrapper">
                  <div className="d-flex justify-content-center mb-lg-1">
                    <h3 className="line-height-1">
                      Creative strategies & out of the box ideas
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p>
                      To Improve the Lives of Our Patients and People with
                      Quality Products and to Achieve Our Vision by the Help of
                      Professional & Motivated Staff{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="d-flex align-content-center justify-content-center flex-column h-100">
                <div className="d-flex justify-content-center heading-wrapper mb-lg-2">
                  <div className="line-height-1 animated-heading text-center ">About us</div>
                </div>
                <div className="text-center content-wrapper">
                <div className="d-flex justify-content-center mb-lg-1">
                    <h3 className="line-height-1">
                      Creative strategies & out of the box ideas
                    </h3>
                  </div> 
                  <div className="d-flex justify-content-center">
                    <Row>
                      <Col xs={12} sm={12} md={6}>
                        <p className="d-inline">
                          Pharmaqio structure comprises of a management team
                          with the Managing Director/Chief Executive Officer
                          responsible for running the organization with support
                          from the Executive Committee which has representation
                          from key areas of Pharmaqio, including Human Resource
                          Development, Strategic Planning and Business
                          Development, Marketing and Sales, Plant Operations,
                          Quality Operations, Finance, Information Technology,
                          and Supply Chain. With a sense of responsibility, this
                          team guides and motivates people, builds their
                          efforts, and makes them challenge their own potential,
                          resulting in nothing but the very best they have to
                          offer in the work they are carrying out.
                        </p>
                      </Col>
                      <Col xs={12} sm={12} md={6}>
                        <p className="d-inline">
                          The work culture at Pharmaqio involves a participative
                          approach through effective structures and systems in a
                          sound and stable work environment. Employees are
                          provided guidance, motivation and timely feedback
                          which collectively develops in them a sense of pride.
                          Since they understand the importance of their role in
                          the outcome, they take ownership and become valuable
                          team members in their respective work domains
                          eventually resulting in accomplishing personal as well
                          as organizational objectives.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div> */}
        <section id="home-technology-section" className="bg-color-mirage">
          <Container>
            <div className="technology-stack-wrapper fade-linear-gradient">
              <div className="content-wrapper text-left justify-content-center align-items-center w-100">
                <div className="position-relative z-index-10">
                  <h3 className="text-white line-height-1 mb-4">
                   About us
                  </h3>
                </div>
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <p className="d-inline text-white">
                      Pharmaqio structure comprises of a management team with
                      the Managing Director/Chief Executive Officer responsible
                      for running the organization with support from the
                      Executive Committee which has representation from key
                      areas of Pharmaqio, including Human Resource Development,
                      Strategic Planning and Business Development, Marketing and
                      Sales, Plant Operations, Quality Operations, Finance,
                      Information Technology, and Supply Chain. With a sense of
                      responsibility, this team guides and motivates people,
                      builds their efforts, and makes them challenge their own
                      potential, resulting in nothing but the very best they
                      have to offer in the work they are carrying out.
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <p className="d-inline text-white">
                      The work culture at Pharmaqio involves a participative
                      approach through effective structures and systems in a
                      sound and stable work environment. Employees are provided
                      guidance, motivation and timely feedback which
                      collectively develops in them a sense of pride. Since they
                      understand the importance of their role in the outcome,
                      they take ownership and become valuable team members in
                      their respective work domains eventually resulting in
                      accomplishing personal as well as organizational
                      objectives.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </section>
        <section id="homepage-section-3-main-wrapper">
          <div className="container h-100">
            <div
              id="trigger-service-text"
              className="d-flex align-content-center justify-content-center flex-column h-100"
            >
              <div className="section-text-animation initial-opacity-transform content-wrapper mb-4">
                <div className="mb-3 text-center">
                  <h4 className="text-white">Our Visson</h4>
                </div>
                <div className="text-left">
                  <p>
                    To deliver high quality products aiming to enrich patient’s
                    quality of Life, focusing on un met medical needs and to be
                    the quality landmark in the pharmaceutical industry
                  </p>
                  <p>
                    Pharmaqio is one of the pharmaceutical company in Pakistan,
                    started its operations in 2023. Pharmaqio products are
                    manufactured at its state of the art, cGMP approved
                    pharmaceutical plant at Rawalpindi and tested at its Quality
                    Control Laboratory. The company’s therapeutic segments in
                    Pakistan include the following:
                  </p>
                  <ul className="d-flex row">
                    <li className="col-12 col-sm-6 col-md-3">Analgesic</li>
                    <li className="col-12 col-sm-6 col-md-3">Anti-Asthmatic</li>
                    <li className="col-12 col-sm-6 col-md-3">
                      Anti-convulsant
                    </li>
                    <li className="col-12 col-sm-6 col-md-3">Anti-Diabetic</li>
                    <li className="col-12 col-sm-6 col-md-3">
                      Anti-Fibrinolytic
                    </li>
                    <li className="col-12 col-sm-6 col-md-3">
                      Anti-Hypertensive
                    </li>
                    <li className="col-12 col-sm-6 col-md-3">Anti-Lipidemic</li>
                    <li className="col-12 col-sm-6 col-md-3">Anti-Malarial</li>
                    <li className="col-12 col-sm-6 col-md-3">Anti-Obesity</li>
                    <li className="col-12 col-sm-6 col-md-3">Anti-Rheumatic</li>
                    <li className="col-12 col-sm-6 col-md-3">Anti-Ulcerants</li>
                    <li className="col-12 col-sm-6 col-md-3">Antibiotics</li>
                    <li className="col-12 col-sm-6 col-md-3">Antiallergics</li>
                    <li className="col-12 col-sm-6 col-md-3">
                      Cephalosporin Antibiotics
                    </li>
                    <li className="col-12 col-sm-6 col-md-3">Antidepressant</li>
                    <li className="col-12 col-sm-6 col-md-3">Antiemetics</li>
                    <li className="col-12 col-sm-6 col-md-3">
                      Corticosteroids
                    </li>
                    <li className="col-12 col-sm-6 col-md-3">Antifungal </li>
                    <li className="col-12 col-sm-6 col-md-3">
                      Anti-Histamine &
                    </li>
                    <li className="col-12 col-sm-6 col-md-3">Multivitamins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="homepage-section-4-square-main-wrapper">
          <div className="container h-100">
            <div
              id="trigger-service-text"
              className="d-flex align-content-center justify-content-center flex-column h-100"
            >
              <div className="services-cards-main-wrapper">
                <div id="services-block-first-trigger"></div>
                <Row>
                  <Col md={12}>
                    <HashLink
                      onMouseEnter={() =>
                        animationService.fadeServicesCardOnHover(
                          ".services-card-1"
                        )
                      }
                      onMouseLeave={() =>
                        animationService.fadeServicesCardOnHoverOut()
                      }
                    >
                      <div className="services-card-wrapper home-design-studio services-card-1 position-relative border-radius-10 overflow-hidden">
                        <div className="position-relative z-index-10">
                          <h3 className="text-white line-height-1 mb-4">
                            Build Your Future In A Company That Develops &
                            Empowers You To Grow
                          </h3>
                        </div>
                        <div className="position-relative z-index-10">
                          <p className="text-white">
                            Dedicated to recruiting the best qualified
                            professionals, our people are the driving force
                            behind our success. At Pharmaqio, there is a strong
                            emphasis on individual and professional development
                            of employees through trainings, feedback and the
                            individual’s ability and willingness to take
                            additional responsibility.
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
                </Row>
              </div>
            </div>
          </div>
        </section>
        <section id="homepage-section-5-square-main-wrapper">
          <div className="container h-100">
            <div
              id="trigger-service-text-5"
              className="d-flex align-content-center justify-content-center flex-column h-100"
            >
              <div className="section-text-animation initial-opacity-transform content-wrapper mb-4">
                <div className="mb-3 text-center ">
                  <h4 className="text-white">
                    Corporate Social Responsibility
                  </h4>
                </div>
                <div>
                  <p>
                    At Pharmaqio we are committed to sharing our success with
                    the community at large, particularly with the
                    underprivileged segments.
                  </p>
                  <p>
                    The primary goal of our Corporate Social Responsibility
                    (CSR) model is to successfully integrate corporate
                    responsibility concerns: social, environmental and economic,
                    into the company’s values, culture, operations and business
                    decisions at all levels. This is how we envision our
                    corporate social responsibility: doing business ethically
                    and in an environmentally and socially responsible manner,
                    while safeguarding growth and profits in line with the
                    expectations of our stakeholders.
                  </p>
                  <p>
                    Pharmaqio’s Corporate Social Responsibility (CSR)
                    initiatives are divided into four broad categories:
                  </p>
                  <ul className="">
                    <li>Preservation of our Cultural Heritage</li>
                    <li>
                      Education and Skill building for the Underprivileged
                    </li>
                    <li>Preservation of the Environment</li>
                    <li>Health for the Under privileged</li>
                  </ul>
                  <p>
                    Pharmaqio is proud to contribute to these programs to ensure
                    long-term benefits for the people directly and indirectly
                    impacted by our practices.
                  </p>
                  <p>
                    We believe that our commitment to CSR is essential to our
                    long-term success and will help us to create enduring value
                    for all our stakeholders, while also driving positive social
                    and environmental outcomes worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="homepage-section-6-square-main-wrapper">
          <div className="container h-100">
            <div
              id="trigger-service-text-6"
              className="d-flex align-content-center justify-content-center flex-column h-100"
            >
              <div className="section-text-animation initial-opacity-transform content-wrapper mb-4">
                <div className="mb-3 text-center ">
                  <h4 className="text-white">Products</h4>
                </div>
                <div>
                  <div>
                    {products.map((section, index) => (
                      <>
                        <p>Section {index + 1}</p>
                        <div className="table-container">
                          <Table responsive>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Strength</th>
                                <th>Pack Size</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.map((item) => (
                                <>
                                  <tr>
                                    <td>{item.SNo}</td>
                                    <td>{item.ProductName}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.Strength}</td>
                                    <td>{item.PackSize}</td>
                                  </tr>
                                </>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Element id="our-portfolio" name="our-portfolio"></Element>
        
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
        </section> */}

        <ContactUsComponent />
        <ScrollToTop />
      </Fragment>
    );
  }
}

export default Home;
