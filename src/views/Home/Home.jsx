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
import {Helmet} from "react-helmet";
import { HashLink } from 'react-router-hash-link';

// Service imports
import animationService from "../../services/AnimationService";

// Style Imports
import "./Home.scss";
import "./responsive.scss"

// Components Imports
import MainNavbar from "../../components/Navbar/MainNavbar";
import ContactUsComponent from "../../components/ContactUs/ContactUsComponent";
import Testimonials from "../../components/TestimonialsComponent/Testimonials";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

// Constants Imports
import constants from "../../constants/constants";

import { Element } from 'react-scroll'
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
      ]
    };
  }

  componentDidMount() {
    animationService.transformTextY(
      "#trigger-service-text",
      "#trigger-service-text .section-text-animation",
      "-=700"
    );

    // Animates Testimonials
    animationService.animateTestimonials("#clientsTestimonials", "#testimonial1", "AfterEnter");
    animationService.animateTestimonials("#clientsTestimonials", "#testimonial2", 0);
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
      'start-anim-transform-up'
    );
    animationService.transformYBlock(
      "#usis-case-study-block-wrapper",
      "#usis-case-study-block-wrapper .initial-opacity-transform-block",
      50,
      0.7,
      'start-anim-transform-up'
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
    let innerHeight=window.innerHeight;
    let textZoomIn_tween = TweenMax.from(
      "#homepage-section-1-2-main-wrapper .animated-heading",
      0.5,
      { scale: 1 }
    );
    let rectangleBannerFigure;
    let circleBannerFigure;
    let rectangleLeftBannerFigure;
    if (innerWidth > 1435 && innerWidth < 1690) {
      circleBannerFigure = TweenMax.to(
        ".circle-banner-figure",
        0.5,
        {scale: 0.15, y: 210, x: 260}
      )

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        {scale: 0.1, y: 380, x: 455, skew: 70}
      )

      rectangleBannerFigure = TweenMax.to(
        ".rectangle-banner-figure",
        0.5,
        {scale: 0.15, y: 300, x: -255}
      )

    }
    else if (innerWidth > 2000) {
      circleBannerFigure = TweenMax.to(
        ".circle-banner-figure",
        0.5,
        {scale: 0.15, y: 325, x: 360}
      )

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        {scale: 0.1, y: 600, x: 908, skew: 70}
      )

      rectangleBannerFigure = TweenMax.to(
        ".rectangle-banner-figure",
        0.5,
        {scale: 0.15, y: 500, x: -580}
      )

    }
    else if(innerHeight<=650){
      circleBannerFigure = TweenMax.to(
        ".circle-banner-figure",
        0.5,
        {scale: 0.15, y: 305, x: 350}
      )

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        {scale: 0.1, y: 400, x: 608, skew: 70}
      )

      rectangleBannerFigure = TweenMax.to(
        ".rectangle-banner-figure",
        0.15,
        {scale: 0.15, y: 380, x: -265}
      )

    }
    else {
      circleBannerFigure = TweenMax.to(
        ".circle-banner-figure",
        0.5,
          {scale: innerWidth > 320 && innerWidth < 600 ? 0.15: 0.15,
          y: innerWidth > 320 && innerWidth < 600 ? 400: 375,
          x: innerWidth > 320 && innerWidth < 600 ? 150: 350 }
      )

      rectangleLeftBannerFigure = TweenMax.to(
        ".rectangle-left-banner-figure",
        0.5,
        {scale: 0.1,
          y: innerWidth > 320 && innerWidth < 600 ? 450: 500,
          x: innerWidth > 320 && innerWidth < 600 ? 350: 608,
          skew: 70}
      )

      rectangleBannerFigure = TweenMax.to(
        ".rectangle-banner-figure",
        0.5,
        {scale: 0.15,
          y: 464,
          x: -265}
      )

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
        <section id="homepage-section-1-main-wrapper" className="vh-100 bg-home-banner-default">
          <div
            id="homepage-section-1-container"
            className="container h-100"
          >
            <div
              id="section1-first-content-wrapper"
              className="d-flex align-content-center justify-content-center flex-column h-100"
            >
              <div className="text-center heading-wrapper mb-lg-4">
                <h1 className="text-white line-height-1">
                  Xperience
                  <span className='d-none d-md-inline'><br /></span> the Xtraordinary
                </h1>
              </div>
              <div className="text-center blurb-wrapper d-flex flex-column justify-content-center">
                <div className='d-flex justify-content-center'>
                  <p className="text-white w-75">
                    From the house of passionate designers, creative writers, ingenious developers & marketing professionals
                  </p>
                </div>
                <div className='position-absolute left-0 d-none d-lg-block'>
                  <img src={constants.ui.images.greenSignals} alt='Green Signal' />
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
        <div className='text-center position-relative'>
            <div className='position-absolute circle-banner-figure'>
                <img src={constants.ui.images.circleBanner} alt='Circle Banner' />
            </div>
        </div>
        <div className='text-center position-relative'>
          <div className='position-absolute rectangle-banner-figure right-0 bottom-0'>
            <img src={constants.ui.images.rectangleBanner} alt='Rectangle Banner' />
          </div>
        </div>
        <div className='text-center position-relative'>
          <div className='position-absolute rectangle-left-banner-figure'>
            <img src={constants.ui.images.rectangleLeftBanner} alt='Rectangle Left Banner' />
          </div>
        </div>
        <section id="homepage-section-2-main-wrapper" className="vh-100 bg-home-banner-default">
                    <div
            id="homepage-section-1-2-main-wrapper"
            className="h-100 overflow-hidden"
          >
            <div className="container h-100">
              <div className="d-flex align-content-center justify-content-center flex-column h-100">
                <div className="d-flex justify-content-center text-center heading-wrapper mb-lg-2">
                  <div className="line-height-1 animated-heading">Discover</div>
                  {/* <div>
                  <svg width="1052" height="205" viewBox="0 0 1052 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.1514 201.281H0.881714V13.9815H68.1514C99.2801 13.9815 123.462 22.5991 140.697 39.8342C158.108 57.0693 166.814 79.6684 166.814 107.631C166.814 135.595 158.108 158.194 140.697 175.429C123.462 192.664 99.2801 201.281 68.1514 201.281ZM111.415 150.631C121.264 140.255 126.188 125.922 126.188 107.631C126.188 89.3411 121.264 75.0958 111.415 64.8954C101.742 54.5192 86.9693 49.3311 67.0962 49.3311H39.3969V165.932H67.0962C86.9693 165.932 101.742 160.832 111.415 150.631Z" fill="#181B23"/>
<path d="M226.627 38.779C222.406 42.9998 216.954 45.1102 210.271 45.1102C203.588 45.1102 198.136 42.9998 193.915 38.779C189.694 34.5581 187.584 29.1941 187.584 22.687C187.584 16.1799 189.694 10.8159 193.915 6.59506C198.136 2.19835 203.588 0 210.271 0C216.954 0 222.406 2.19835 226.627 6.59506C230.847 10.8159 232.958 16.1799 232.958 22.687C232.958 29.1941 230.847 34.5581 226.627 38.779ZM191.541 201.281V63.0488H229.001V201.281H191.541Z" fill="#181B23"/>
<path d="M308.96 204.447C271.324 204.447 251.363 188.443 249.076 156.435H287.064C287.416 161.535 289.438 165.844 293.131 169.361C297.001 172.703 302.628 174.374 310.015 174.374C317.05 174.374 322.414 173.23 326.107 170.944C329.8 168.658 331.647 165.58 331.647 161.711C331.647 157.49 329.009 154.412 323.733 152.478C318.456 150.367 312.037 148.697 304.475 147.466C297.088 146.235 289.614 144.564 282.052 142.453C274.489 140.343 268.07 136.21 262.794 130.055C257.518 123.899 254.88 115.721 254.88 105.521C254.88 92.6827 259.98 81.8667 270.181 73.0733C280.381 64.2799 293.747 59.8832 310.279 59.8832C329.097 59.8832 343.078 64.6316 352.223 74.1285C361.368 83.6254 366.293 94.4413 366.996 106.576H330.855C330.503 101.828 328.481 97.8708 324.788 94.7051C321.27 91.5395 316.346 89.9567 310.015 89.9567C304.035 89.9567 299.375 91.2757 296.033 93.9137C292.692 96.3759 291.021 99.5415 291.021 103.411C291.021 107.631 293.659 110.709 298.935 112.644C304.211 114.578 310.542 116.161 317.929 117.392C325.491 118.447 332.966 120.03 340.352 122.141C347.914 124.251 354.334 128.472 359.61 134.803C364.886 141.134 367.524 149.576 367.524 160.128C367.524 172.967 362.248 183.607 351.696 192.048C341.319 200.314 327.074 204.447 308.96 204.447Z" fill="#181B23"/>
<path d="M399.343 183.87C386.328 169.977 379.821 152.742 379.821 132.165C379.821 111.589 386.328 94.4413 399.343 80.7236C412.533 66.83 429.152 59.8832 449.201 59.8832C468.899 59.8832 484.375 65.4231 495.631 76.5028C507.062 87.5825 513.569 99.9812 515.152 113.699H476.637C475.23 107.719 471.976 102.795 466.876 98.926C461.776 95.0569 455.797 93.1223 448.938 93.1223C439.089 93.1223 431.351 96.7276 425.723 103.938C420.095 110.973 417.281 120.382 417.281 132.165C417.281 143.948 420.095 153.445 425.723 160.656C431.351 167.691 439.089 171.208 448.938 171.208C455.797 171.208 461.776 169.273 466.876 165.404C471.976 161.535 475.23 156.611 476.637 150.631H515.152C513.569 164.349 507.062 176.748 495.631 187.827C484.375 198.907 468.899 204.447 449.201 204.447C429.152 204.447 412.533 197.588 399.343 183.87Z" fill="#181B23"/>
<path d="M648.698 183.607C635.332 197.5 617.833 204.447 596.201 204.447C574.569 204.447 557.07 197.5 543.704 183.607C530.338 169.537 523.655 152.39 523.655 132.165C523.655 111.94 530.338 94.881 543.704 80.9874C557.07 66.9179 574.569 59.8832 596.201 59.8832C617.833 59.8832 635.332 66.9179 648.698 80.9874C662.064 94.881 668.747 111.94 668.747 132.165C668.747 152.39 662.064 169.537 648.698 183.607ZM570.876 103.411C564.369 110.445 561.115 120.03 561.115 132.165C561.115 144.3 564.369 153.885 570.876 160.92C577.559 167.954 586.001 171.472 596.201 171.472C606.401 171.472 614.755 167.954 621.262 160.92C627.945 153.885 631.287 144.3 631.287 132.165C631.287 120.03 627.945 110.445 621.262 103.411C614.755 96.3759 606.401 92.8585 596.201 92.8585C586.001 92.8585 577.559 96.3759 570.876 103.411Z" fill="#181B23"/>
<path d="M742.684 156.171L776.45 63.0488H815.229L759.831 201.281H725.009L669.61 63.0488H709.181L742.684 156.171Z" fill="#181B23"/>
<path d="M951.599 142.981H851.354C852.585 152.478 856.102 159.776 861.906 164.877C867.709 169.801 875.36 172.263 884.857 172.263C890.836 172.263 896.2 171.032 900.948 168.57C905.873 165.932 909.39 162.151 911.501 157.226H949.224C945.179 171.296 937.177 182.727 925.218 191.521C913.435 200.138 899.629 204.447 883.801 204.447C863.401 204.447 846.693 197.676 833.679 184.134C820.665 170.592 814.157 153.181 814.157 131.901C814.157 111.325 820.665 94.1775 833.679 80.4598C846.693 66.7421 863.313 59.8832 883.538 59.8832C903.762 59.8832 920.206 66.7421 932.869 80.4598C945.707 94.0017 952.126 111.149 952.126 131.901L951.599 142.981ZM883.274 89.9567C874.832 89.9567 867.885 92.3309 862.433 97.0794C856.981 101.652 853.464 107.983 851.881 116.073H914.666C913.259 108.159 909.83 101.828 904.378 97.0794C898.926 92.3309 891.891 89.9567 883.274 89.9567Z" fill="#181B23"/>
<path d="M1052 61.9936V97.0794C1049.36 96.5518 1046.9 96.288 1044.61 96.288C1033.53 96.288 1025.18 99.1898 1019.55 104.993C1014.1 110.797 1011.37 119.942 1011.37 132.429V201.281H973.91V63.0488H1008.47V80.9874C1016.38 68.149 1029.4 61.7298 1047.51 61.7298L1052 61.9936Z" fill="#181B23"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1052" height="205">
<path d="M68.1514 201.281H0.881714V13.9815H68.1514C99.2801 13.9815 123.462 22.5991 140.697 39.8342C158.108 57.0693 166.814 79.6684 166.814 107.631C166.814 135.595 158.108 158.194 140.697 175.429C123.462 192.664 99.2801 201.281 68.1514 201.281ZM111.415 150.631C121.264 140.255 126.188 125.922 126.188 107.631C126.188 89.3411 121.264 75.0958 111.415 64.8954C101.742 54.5192 86.9693 49.3311 67.0962 49.3311H39.3969V165.932H67.0962C86.9693 165.932 101.742 160.832 111.415 150.631Z" fill="#181B23"/>
<path d="M226.627 38.779C222.406 42.9998 216.954 45.1102 210.271 45.1102C203.588 45.1102 198.136 42.9998 193.915 38.779C189.694 34.5581 187.584 29.1941 187.584 22.687C187.584 16.1799 189.694 10.8159 193.915 6.59506C198.136 2.19835 203.588 0 210.271 0C216.954 0 222.406 2.19835 226.627 6.59506C230.847 10.8159 232.958 16.1799 232.958 22.687C232.958 29.1941 230.847 34.5581 226.627 38.779ZM191.541 201.281V63.0488H229.001V201.281H191.541Z" fill="#181B23"/>
<path d="M308.96 204.447C271.324 204.447 251.363 188.443 249.076 156.435H287.064C287.416 161.535 289.438 165.844 293.131 169.361C297.001 172.703 302.628 174.374 310.015 174.374C317.05 174.374 322.414 173.23 326.107 170.944C329.8 168.658 331.647 165.58 331.647 161.711C331.647 157.49 329.009 154.412 323.733 152.478C318.456 150.367 312.037 148.697 304.475 147.466C297.088 146.235 289.614 144.564 282.052 142.453C274.489 140.343 268.07 136.21 262.794 130.055C257.518 123.899 254.88 115.721 254.88 105.521C254.88 92.6827 259.98 81.8667 270.181 73.0733C280.381 64.2799 293.747 59.8832 310.279 59.8832C329.097 59.8832 343.078 64.6316 352.223 74.1285C361.368 83.6254 366.293 94.4413 366.996 106.576H330.855C330.503 101.828 328.481 97.8708 324.788 94.7051C321.27 91.5395 316.346 89.9567 310.015 89.9567C304.035 89.9567 299.375 91.2757 296.033 93.9137C292.692 96.3759 291.021 99.5415 291.021 103.411C291.021 107.631 293.659 110.709 298.935 112.644C304.211 114.578 310.542 116.161 317.929 117.392C325.491 118.447 332.966 120.03 340.352 122.141C347.914 124.251 354.334 128.472 359.61 134.803C364.886 141.134 367.524 149.576 367.524 160.128C367.524 172.967 362.248 183.607 351.696 192.048C341.319 200.314 327.074 204.447 308.96 204.447Z" fill="#181B23"/>
<path d="M399.343 183.87C386.328 169.977 379.821 152.742 379.821 132.165C379.821 111.589 386.328 94.4413 399.343 80.7236C412.533 66.83 429.152 59.8832 449.201 59.8832C468.899 59.8832 484.375 65.4231 495.631 76.5028C507.062 87.5825 513.569 99.9812 515.152 113.699H476.637C475.23 107.719 471.976 102.795 466.876 98.926C461.776 95.0569 455.797 93.1223 448.938 93.1223C439.089 93.1223 431.351 96.7276 425.723 103.938C420.095 110.973 417.281 120.382 417.281 132.165C417.281 143.948 420.095 153.445 425.723 160.656C431.351 167.691 439.089 171.208 448.938 171.208C455.797 171.208 461.776 169.273 466.876 165.404C471.976 161.535 475.23 156.611 476.637 150.631H515.152C513.569 164.349 507.062 176.748 495.631 187.827C484.375 198.907 468.899 204.447 449.201 204.447C429.152 204.447 412.533 197.588 399.343 183.87Z" fill="#181B23"/>
<path d="M648.698 183.607C635.332 197.5 617.833 204.447 596.201 204.447C574.569 204.447 557.07 197.5 543.704 183.607C530.338 169.537 523.655 152.39 523.655 132.165C523.655 111.94 530.338 94.881 543.704 80.9874C557.07 66.9179 574.569 59.8832 596.201 59.8832C617.833 59.8832 635.332 66.9179 648.698 80.9874C662.064 94.881 668.747 111.94 668.747 132.165C668.747 152.39 662.064 169.537 648.698 183.607ZM570.876 103.411C564.369 110.445 561.115 120.03 561.115 132.165C561.115 144.3 564.369 153.885 570.876 160.92C577.559 167.954 586.001 171.472 596.201 171.472C606.401 171.472 614.755 167.954 621.262 160.92C627.945 153.885 631.287 144.3 631.287 132.165C631.287 120.03 627.945 110.445 621.262 103.411C614.755 96.3759 606.401 92.8585 596.201 92.8585C586.001 92.8585 577.559 96.3759 570.876 103.411Z" fill="#181B23"/>
<path d="M742.684 156.171L776.45 63.0488H815.229L759.831 201.281H725.009L669.61 63.0488H709.181L742.684 156.171Z" fill="#181B23"/>
<path d="M951.599 142.981H851.354C852.585 152.478 856.102 159.776 861.906 164.877C867.709 169.801 875.36 172.263 884.857 172.263C890.836 172.263 896.2 171.032 900.948 168.57C905.873 165.932 909.39 162.151 911.501 157.226H949.224C945.179 171.296 937.177 182.727 925.218 191.521C913.435 200.138 899.629 204.447 883.801 204.447C863.401 204.447 846.693 197.676 833.679 184.134C820.665 170.592 814.157 153.181 814.157 131.901C814.157 111.325 820.665 94.1775 833.679 80.4598C846.693 66.7421 863.313 59.8832 883.538 59.8832C903.762 59.8832 920.206 66.7421 932.869 80.4598C945.707 94.0017 952.126 111.149 952.126 131.901L951.599 142.981ZM883.274 89.9567C874.832 89.9567 867.885 92.3309 862.433 97.0794C856.981 101.652 853.464 107.983 851.881 116.073H914.666C913.259 108.159 909.83 101.828 904.378 97.0794C898.926 92.3309 891.891 89.9567 883.274 89.9567Z" fill="#181B23"/>
<path d="M1052 61.9936V97.0794C1049.36 96.5518 1046.9 96.288 1044.61 96.288C1033.53 96.288 1025.18 99.1898 1019.55 104.993C1014.1 110.797 1011.37 119.942 1011.37 132.429V201.281H973.91V63.0488H1008.47V80.9874C1016.38 68.149 1029.4 61.7298 1047.51 61.7298L1052 61.9936Z" fill="#181B23"/>
</mask>
<g mask="url(#mask0)">
<path d="M924.166 -283.222L465.701 -261.361L209 24L686.806 121.422L924.166 -283.222Z" fill="url(#paint0_linear)"/>
<g filter="url(#filter0_d)">
<circle cx="-34.9874" cy="108.013" r="127.013" fill="url(#paint1_linear)"/>
</g>
<path d="M875.188 227.608C869.046 220.137 870.238 209.079 877.831 203.089L980.637 121.992C987.767 116.367 998.035 117.228 1004.13 123.961L1097.59 227.225C1103.99 234.295 1103.44 245.212 1096.37 251.61L994.293 344C986.986 350.614 975.633 349.777 969.373 342.164L875.188 227.608Z" fill="url(#paint2_linear)"/>
<circle cx="810.653" cy="104.275" r="33.7878" fill="url(#paint3_linear)"/>
</g>
<defs>
<filter id="filter0_d" x="-168.204" y="-27.6856" width="266.433" height="266.433" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="-2.4816"/>
<feGaussianBlur stdDeviation="3.10199"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0832605 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="913.569" y1="-230.678" x2="215.981" y2="9.29353" gradientUnits="userSpaceOnUse">
<stop stop-color="#4692FF"/>
<stop offset="1" stop-color="#0069FF"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="-191.924" y1="-3.3101" x2="-14.5174" y2="226.927" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDF00"/>
<stop offset="1" stop-color="#F56514"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="1108.72" y1="414.463" x2="852.437" y2="229.833" gradientUnits="userSpaceOnUse">
<stop stop-color="#5158FF"/>
<stop offset="1" stop-color="#41FF8D"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="836.608" y1="85.6555" x2="771.86" y2="74.9774" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF5175"/>
<stop offset="1" stop-color="#FF6441"/>
</linearGradient>
</defs>
</svg>

                  </div> */}
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
          </div>
        </section>
        <section id="homepage-section-3-main-wrapper">
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
        </section>
        <ContactUsComponent />
        <ScrollToTop />
      </Fragment>
    );
  }
}

export default Home;
