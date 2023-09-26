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
import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import { Link, animateScroll as scroll } from "react-scroll";


// React bootstrap imports
import {Container, Row, Col} from "react-bootstrap";

// Style Imports
import './Services.scss';

// Component imports
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import ContactUsComponent from "../../components/ContactUs/ContactUsComponent";
import MainNavbar from '../../components/Navbar/MainNavbar';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

// Constants import
import constants from "../../constants/constants";
import ShapesComponent from "../../components/ShapesComponent/ShapesComponent";
import Testimonials from "../../components/TestimonialsComponent/Testimonials";

// Service imports
import animationService from "../../services/AnimationService";

// Scrollmagic and Tweenmax imports
import * as ScrollMagic from "scrollmagic";
import {TweenMax, TimelineMax, Linear, gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
import GetInTouchComponent from "../../components/GetInTouchComponent/GetInTouchComponent";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// Registering gsap plugins
gsap.registerPlugin(ScrollTrigger);

class XGServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      designStudio: {
        containerBgClass: 'orange-linear-gradient',
        title: 'Design Studio',
        count: '01',
        sectionShapes: [
          {
            shapeClasses: "circle-shape position-absolute shape-animation1 shape-responsive-styles",
            // TODO: Add this to class later
            additionalProps: {
              width: '18rem',
              height: '18rem',
              background: 'linear-gradient(337.41deg, #0069FF 23.13%, #83B7FF 107.01%)',
              boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
              bottom: '-1.5rem',
              left: '-6rem',
              zIndex: '2'
            }
          },
          {
            shapeClasses: "circle-shape position-absolute shape-animation2 shape-responsive-styles",
            // TODO: Add this to class later
            additionalProps: {
              width: '3.2rem',
              height: '3.2rem',
              background: 'linear-gradient(141.7deg, #FFDF00 9.27%, #FFA441 67.96%)',
              boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
              bottom: '18rem',
              left: '12rem',
              zIndex: '1'
            }
          }
        ],
        caseStudies: [
          {
            img: constants.ui.images.usisCaseStudy.designStudioSlideUsis,
            linkTo: '/casestudy-usis/#usisDesignStudio',
            caseStudyName: 'USIS Procon case study slide image',
            shortDescription: 'Revolutionary application designs & digital media for our happy customers. Check them out!'
          },
          {
            img: constants.ui.images.fmCaseStudy.designStudioSlideFm,
            linkTo: '/casestudy-fibermountain/#fibermountainDesignStudio',
            caseStudyName: 'Fiber Mountain case study slide image'
          },
          {
            img: constants.ui.images.alkiraCaseStudy.designStudioSlideAlkira,
            linkTo: '/casestudy-alkira/#alkiraDesignStudio',
            caseStudyName: 'Alkira case study slide image'
          },
          {
            img: constants.ui.images.pelCaseStudy.designStudioSlidePel,
            linkTo: '/casestudy-pel/#pelDesignStudio',
            caseStudyName: 'PEL case study slide image'
          }
        ],
        paragraphs: [
          'We believe that the modern era of technology is as much about creativity on-screen as its about technical capability off-screen. The term “User First” has been coined for a reason, and it’s not just about software interfaces anymore, it’s about human interface design overall.',
          'At X-96, our design process involves extensive in-person and online sessions with the key stakeholders that help us present & highlight critical factors which may otherwise go unnoticed. We believe in revolutionary designs that speak to your audiences, be it Information Design for an app, a Persona-focused User Experience design for an industry-grade application or Social Media Campaigns for general public consumption, every design aspect here at X-96 begins with your “user” and ties it to your core brand values.'
        ],
        listTitle: 'Our specialities include:',
        list: {
          listStyleColors: {
            svgFill1: '#FF9900',
            svgFill2: '#FFA800',
          },
          listItems: [
            'Creating and rethinking brand identities for up-and-coming or existing businesses and solutions',
            'User-focused design including Information Architecture, Data Visualization and Communication frameworks',
            'Data-driven UX redesigns for established products, in both commercial and corporate solutions',
            'Visually appealing motion graphics for use in both apps and social platforms',
            'Collateral design for all your presentation and conference needs, so that you can present your product in visual harmony with your brand'
          ]
        }
      },
      digitalMarketing: {
        containerBgClass: 'cyan-blue-linear-gradient2',
        title: 'Digital Marketing',
        count: '02',
        sectionShapes: [
          {
            shapeClasses: "inset-shape position-absolute shape-animation2",
            // TODO: Add this to class later
            additionalProps: {
              width: '20rem',
              height: '20rem',
              transform: 'rotate(-13deg)',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #BDF2FE 100%)',
              bottom: '-2.8rem',
              left: '1rem'
            }
          },
          {
            shapeClasses: "inset-shape position-absolute shape-animation1",
            // TODO: Add this to class later
            additionalProps: {
              width: '24rem',
              height: '24rem',
              transform: 'rotate(31deg)',
              background: 'linear-gradient(24.9deg, rgb(255, 52, 178) 21.52%, rgb(255, 100, 65) 73.98%)',
              bottom: '-9rem',
              left: '-7.4rem'
            }
          }
        ],
        caseStudies: [
          {
            img: constants.ui.images.fmCaseStudy.digitalMarketingSlideFm,
            linkTo: '/casestudy-fibermountain/#fibermountainDigitalMarketing',
            caseStudyName: 'Fiber Mountain case study slide image',
            shortDescription: 'The best marketing doesn’t feel like marketing. See for yourself!'
          },
          {
            img: constants.ui.images.alkiraCaseStudy.digitalMarketingSlideAlkira,
            linkTo: '/casestudy-alkira/#alkiraDigitalMarketing',
            caseStudyName: 'Alkira case study slide image'
          },
          {
            img: constants.ui.images.pelCaseStudy.digitalMarketingSlidePel,
            linkTo: '/casestudy-pel/#pelDigitalMarketing',
            caseStudyName: 'PEL case study slide image'
          }
        ],
        paragraphs: [
          'With the exponential rise in use of the internet over the years, businesses have transformed to the digital world. Customers spend most of their time online, which means there are endless possibilities for the brands to market themselves and leave an online impression. Digital marketing in itself, is a vast term with its services ranging from shaping website interaction to putting on the right branding assets, engaging the audience on online platforms, catering for digital advertisement, email and content marketing, social media marketing, online brochures and the list goes on.',
          'Boring will put you out of business. Our focus is to amplify your brand, strategize with concise messaging, integrate with the relevant stack all while providing a custom solution to your marketing needs.'
        ],
        listTitle: 'We specialize in:',
        list: {
          listStyleColors: {
            svgFill1: '#90FCE2',
            svgFill2: '#4DDBB9',
          },
          listItems: [
            'Building your brand from the ground up and increasing your brand awareness with marketing plans well suited for your business',
            'Leveraging the power of digital channels such as social media, search engines and email to stay ahead of the game',
            'Fostering lasting customer relationships with community management strategies by efficiently managing a network for the audience to connect, share and grow',
            'Mastering the art of storytelling and finding the best way to convey your brand message to leave a lasting impact on the audience',
            'Integration of end to end marketing tech stack which dove-tails right into digital campaigns, lead generation, management and performance based marketing'
          ]
        }
      },
      technicalWriting: {
        containerBgClass: 'bg-usis-blue',
        title: 'Technical Writing',
        count: '03',
        sectionShapes: [
          {
            shapeClasses: "inset-shape shape-roundness position-absolute shape-animation",
            // TODO: Add this to class later
            additionalProps: {
              width: '20rem',
              height: '19rem',
              background: 'linear-gradient(180deg, #FF6441 0%, #FF9C28 100%)',
              boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
              bottom: '-3.5rem',
              left: '-2.5rem'
            }
          },
          {
            shapeClasses: "inset-shape shape-roundness position-absolute shape-animation1",
            // TODO: Add this to class later
            additionalProps: {
              width: '18.5rem',
              height: '16.5rem',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #BDF2FE 100%)',
              bottom: '-4.3rem',
              left: '-4rem'
            }
          }
        ],
        caseStudies: [
          {
            img: constants.ui.images.usisCaseStudy.techWritingSlideUsis,
            linkTo: '/casestudy-usis/#usisTechnicalWriting',
            caseStudyName: 'USIS Procon case study slide image',
            shortDescription: 'Strategic use of brand messages and technical documentation that connects with the user. Have a look!'
          },
          {
            img: constants.ui.images.fmCaseStudy.techWritingSlideFm,
            linkTo: '/casestudy-fibermountain/#fibermountainTechnicalWriting',
            caseStudyName: 'Fiber Mountain case study slide image'
          },
          {
            img: constants.ui.images.alkiraCaseStudy.techWritingSlideAlkira,
            linkTo: '/casestudy-alkira/#alkiraTechnicalWriting',
            caseStudyName: 'Alkira case study slide image'
          }
        ],
        paragraphs: [
          'What is it that can better educate your customers about your product? Your digital marketing resources such as blogs, white papers, case studies, online documentation etc is the first stop the customer takes to know more about your solution’s capabilities and business offerings. The brand message that these digital assets convey goes a long way.',
          'At X-96, we realize the significance of putting together well articulated content right from capturing feature requirements, that serve as a guiding star for development of the software application to information intensive product manuals. Our expert writers work closely with the development and management teams to compile the necessary product information and document it to walk the user through various functionalities associated with your software application.'
        ],
        listTitle: 'We deal with all sorts of:',
        list: {
          listStyleColors: {
            svgFill1: '#C3DCFF',
            svgFill2: '#5E9DF6',
          },
          listItems: [
            'Product documentation including the installation manuals, user guides, API documents, architecture guides, feature requirement documents etc.',
            'Impactful blogs to market your business offerings, gain online visibility and increase your reach',
            'Newsletters, infographics, and other marketing collaterals to get the word out and promote your business',
            'Well composed technical white papers, feature guides, customer case studies and solution briefs',
            'Product and API documentation built on custom themed HTML or PDF stacks'
          ]
        }
      },
      webDev: {
        containerBgClass: 'bg-doc-pink',
        title: 'Web Development',
        count: '04',
        sectionShapes: [
          {
            shapeClasses: "inset-shape position-absolute shape-animation",
            // TODO: Add this to class later
            additionalProps: {
              width: '20rem',
              height: '20rem',
              transform: 'rotate(70deg)',
              background: 'linear-gradient(132.99deg, #3FC1C9 12.01%, #1986A9 79.74%)',
              bottom: '-8rem',
              left: '-1.5rem'
            }
          },
          {
            shapeClasses: "circle-shape position-absolute shape-animation1",
            // TODO: Add this to class later
            additionalProps: {
              width: '16rem',
              height: '16rem',
              background: 'linear-gradient(141.7deg, #FFDF00 9.27%, #FFA441 67.96%)',
              boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
              bottom: '-2rem',
              left: '-3rem',
              zIndex: '2'
            }
          }
        ],
        caseStudies: [
          {
            img: constants.ui.images.fmCaseStudy.webDevSlideFm,
            linkTo: '/casestudy-fibermountain/#fibermountainWebDevelopment',
            caseStudyName: 'Fiber Mountain case study slide image',
            shortDescription: 'User-friendly & engaging websites that captivate users and generate mind-share. Take a tour!'
          },
          {
            img: constants.ui.images.alkiraCaseStudy.webDevSlideAlkira,
            linkTo: '/casestudy-alkira/#alkiraWebDevelopment',
            caseStudyName: 'Alkira case study slide image'
          },
          {
            img: constants.ui.images.pelCaseStudy.webDevSlidePel,
            linkTo: '/casestudy-pel/#pelWebDevelopment',
            caseStudyName: 'PEL case study slide image'
          }
        ],
        paragraphs: [
          'In today’s digital landscape, millions of consumers are turning to the internet to address their pain points on a daily basis. This essentially means that businesses with a strong digital presence and brand reputation stand a good chance to win customers and lift their pursuit. Everything boils down to having a professional website that does justice in selling your business offerings to your target audience. Captivating your visitor right there is what the future of your company is all about.',
          'A fully functional website not only helps to establish credibility as a business but also increases the potential size of a business. It portrays the who, what and why of your brand in a shot. Whether you want to build a new website from scratch, revamp the current version or need maintenance of the existing website, at X-96, we got you covered. Your website deserves the best; after all it\'s the digital board for you and your company.'
        ],
        listTitle: 'We are a leading website development company specializing in:',
        list: {
          listStyleColors: {
            svgFill1: '#FFD1D9',
            svgFill2: '#FA96A7',
          },
          listItems: [
            'Building safe, reliable, scalable, secure, responsive, super fast websites',
            'Developing user-centric website accessible across all platforms and device types',
            'Constructing a CMS-based website for unmatched customization of theme, animations, illustrations, site navigation and much more',
            'Creating an Ecommerce website to boost your sales and meet your lead generation goals',
            'SEO optimized websites that talk directly to search engines and result in well-qualified network traffic'
          ]
        }
      },
      //  TESTIMONIALS
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
    // For Menu's Scroll Effect
    window.addEventListener("scroll", this.handleMenuScroll);
    let pathSVG = document.getElementById("path");
    let processDefineSVG = document.getElementById("path2");
    let processTestSVG = document.getElementById("path3");

    animationService.drawSvgPath(pathSVG, processDefineSVG, processTestSVG);

    animationService.animationHeader();

    animationService.textAnimation('#designStudio .text-animation', 30, 0, 1);
    animationService.textAnimation('#digitalMarketing .text-animation', 30, 0, 1.1);
    animationService.textAnimation('#technicalWriting .text-animation', 30, 0, 1.2);
    animationService.textAnimation('#webDevelopment .text-animation', 30, 0, 1.3);

    animationService.shapeMovementAnimation("#designStudio .shape-animation", "#designStudio", 0, 10);
    animationService.shapeMovementAnimation("#designStudio .shape-animation1", "#designStudio", 0, -30);
    animationService.shapeMovementAnimation("#designStudio .shape-animation2", "#designStudio", 0, -70);
    animationService.shapeMovementAnimation("#digitalMarketing .shape-animation", "#digitalMarketing", 0, 30);
    animationService.shapeMovementAnimation("#digitalMarketing .shape-animation1", "#digitalMarketing", 0, 50);
    animationService.shapeMovementAnimation("#technicalWriting .shape-animation", "#technicalWriting", 0, 20);
    animationService.shapeMovementAnimation("#technicalWriting .shape-animation1", "#technicalWriting", 0, 20);
    animationService.shapeMovementAnimation("#technicalWriting .shape-animation2", "#technicalWriting", 0, 50);
    animationService.shapeMovementAnimation("#webDevelopment .shape-animation", "#webDevelopment", 0, 80);
    animationService.shapeMovementAnimation("#webDevelopment .shape-animation1", "#webDevelopment", 0, -30);
    animationService.shapeMovementAnimation("#webDevelopment .shape-animation2", "#webDevelopment", 0, 40);

    animationService.shapeMovementAnimation("#designStudioService .shape-animation1", "#designStudioService", "top", -60);
    animationService.shapeMovementAnimation("#designStudioService .shape-animation2", "#designStudioService", "top", -70);

    animationService.shapeMovementAnimation("#digitalMarketingService .shape-animation1", "#digitalMarketingService", "top", -110);
    animationService.shapeMovementAnimation("#digitalMarketingService .shape-animation2", "#digitalMarketingService", "top", -60);

    animationService.shapeMovementAnimation("#technicalWritingService .shape-animation", "#technicalWritingService", "top", -60);
    animationService.shapeMovementAnimation("#technicalWritingService .shape-animation1", "#technicalWritingService", "top", -100);

    animationService.shapeMovementAnimation("#webDevService .shape-animation", "#webDevService", "top", -60);
    animationService.shapeMovementAnimation("#webDevService .shape-animation1", "#webDevService", "top", -60);

    animationService.transformTextY('#animationTrigger', '.section-text-animation', '-=50%',);
    animationService.transformTextY('#designStudioService', '#designStudioService .initial-opacity-transform', '-=300',);
    animationService.transformTextY('#digitalMarketingService', '#digitalMarketingService .initial-opacity-transform', '-=300', '-=200%');
    animationService.transformTextY('#technicalWritingService', '#technicalWritingService .initial-opacity-transform', '-=300', '-=200%');
    animationService.transformTextY('#webDevService', '#webDevService .initial-opacity-transform', '-=300', '-=200%');

    // Changes Navbar Logo
    animationService.changesNavbarLogo('#animationTrigger .section-text-animation');

    // Animates Testimonials
    animationService.animateTestimonials("#clientsTestimonials", "#testimonial1", "AfterEnter");
    animationService.animateTestimonials("#clientsTestimonials", "#testimonial2", 0);
    animationService.animateTestimonials("#testimonial2", "#testimonial3", 0.4);

    animationService.transformTextY(
      "#trigger-testimonial-text",
      "#trigger-testimonial-text .section-text-animation",
      "-=700"
    );

    // Animates Footer Elements
    animationService.footerElementTransform();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleMenuScroll);
  }

  // Hide or show the menu.
  handleMenuScroll = () => {
    const {prevScrollpos} = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
              <title>Services</title>
        </Helmet>
        <MainNavbar firstSection='' thirdSection='clientsTestimonials' lastSection='form-footer-main-wrapper' scrollNavbar={this.state.visible} />
        <Container fluid className="services-header-wrapper">
          {/* Services navigation */}
          <Row className="h-100 text-white">
            <Col lg={3}
                 id="designStudio"
                 className="orange-linear-gradient responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center">
              <Link
                activeClass="active"
                to="designStudioService"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1500}
                className="responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center clickableServices"
                >
              <ShapesComponent
                shapeClassWithProps="circle-shape position-absolute shape-animation1 shape-responsive-styles"
                additionalProperties={{
                  width: '16rem',
                  height: '16rem',
                  background: 'linear-gradient(141.7deg, #0069FF 9.27%, #83B7FF 67.96%)',
                  boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
                  bottom: '-1.5rem',
                  left: '-6rem',
                  zIndex: '2'
                }}/>

              <ShapesComponent
                shapeClassWithProps="circle-shape position-absolute shape-animation2 shape-responsive-styles"
                additionalProperties={{
                  width: '3rem',
                  height: '3rem',
                  background: 'linear-gradient(141.7deg, #FFDF00 9.27%, #FFA441 67.96%)',
                  boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
                  bottom: '13rem',
                  left: '6rem',
                  zIndex: '1'
                }}/>
              <span className="mb-4 font-2 text-animation font-weight-bold">01.</span>
              <h1 className="text-animation mb-lg-5 z-index-10">
                Design <br/>
                Studio
              </h1>
              </Link>
            </Col>
            <Col lg={3}
                 id="digitalMarketing"
                 className="cyan-blue-linear-gradient responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center">
                <Link
                  activeClass="active"
                  to="digitalMarketingService"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={1500}
                  className="responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center clickableServices"
                  >
              <ShapesComponent shapeClassWithProps="polygon-shape position-absolute shape-animation"
                               additionalProperties={{
                                 width: '7.6rem',
                                 height: '7.6rem',
                                 transform: 'rotate(15deg)',
                                 background: 'linear-gradient(180deg, #FFFFFF 0%, #BDF2FE 100%)',
                                 top: '-6rem',
                                 left: '-4.4rem',
                                 zIndex: '2'
                               }}/>
              <ShapesComponent shapeClassWithProps="inset-shape position-absolute shape-animation2"
                               additionalProperties={{
                                 width: '15rem',
                                 height: '15rem',
                                 transform: 'rotate(15deg)',
                                 background: 'linear-gradient(180deg, #FFFFFF 0%, #BDF2FE 100%)',
                                 bottom: '-2rem',
                                 right: '-5.5rem'
                               }
                               }/>
              <ShapesComponent shapeClassWithProps="inset-shape position-absolute shape-animation1"
                               additionalProperties={{
                                 width: '20rem',
                                 height: '25rem',
                                 transform: 'rotate(48deg)',
                                 background: 'linear-gradient(4.9deg, rgb(255, 52, 178) 21.52%, rgb(255, 100, 65) 51.98%)',
                                 bottom: '-3rem',
                                 right: '-12.4rem'
                               }
                               }/>
              <span className="mb-4 font-2 text-animation font-weight-bold">02.</span>
              <h1 className="text-animation mb-lg-5 z-index-10">
                Digital <br/>
                Marketing
              </h1>
              </Link>
            </Col>
            <Col lg={3}
                 id="technicalWriting"
                 className="bg-usis-blue responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center">
                  <Link
                    activeClass="active"
                    to="technicalWritingService"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1500}
                    className="responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center clickableServices"
                  >
              <ShapesComponent shapeClassWithProps="inset-shape shape-roundness position-absolute shape-animation"
                               additionalProperties={{
                                 width: '13rem',
                                 height: '15rem',
                                 background: 'linear-gradient(180deg, #FF6441 0%, #FF9C28 100%)',
                                 boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
                                 top: '-3rem',
                                 right: '-4.4rem'
                               }
                               }/>
              <ShapesComponent shapeClassWithProps="inset-shape shape-roundness position-absolute shape-animation1"
                               additionalProperties={{
                                 width: '10rem',
                                 height: '14rem',
                                 background: 'linear-gradient(180deg, #FFFFFF 0%, #BDF2FE 100%)',
                                 top: '0rem',
                                 right: '-4.4rem'
                               }
                               }/>
              <span className="mb-4 font-2 text-animation font-weight-bold">03.</span>
              <h1 className="text-animation mb-lg-5 z-index-10">
                Technical <br/>
                Writing
              </h1>
              </Link>
            </Col>
            <Col lg={3}
                 id="webDevelopment"
                 className="bg-doc-pink responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center">
                  <Link
                    activeClass="active"
                    to="webDevService"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1500}
                    className="responsive-custom-height d-lg-flex flex-lg-column justify-content-lg-center clickableServices"
                  >
              <ShapesComponent shapeClassWithProps="inset-shape position-absolute shape-animation"
                               additionalProperties={{
                                 width: '7rem',
                                 height: '7rem',
                                 transform: 'rotate(70deg)',
                                 background: 'linear-gradient(132.99deg, #3FC1C9 12.01%, #1986A9 79.74%)',
                                 bottom: '13rem',
                                 right: '-2.5rem'
                               }
                               }/>
              <ShapesComponent shapeClassWithProps="circle-shape position-absolute shape-animation1"
                               additionalProperties={{
                                 width: '16rem',
                                 height: '16rem',
                                 background: 'linear-gradient(141.7deg, #FFDF00 9.27%, #FFA441 67.96%)',
                                 boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.0832605)',
                                 bottom: '-1.5rem',
                                 right: '-6rem',
                                 zIndex: '2'
                               }}/>
              <ShapesComponent shapeClassWithProps="circle-shape position-absolute shape-animation2 d-none d-lg-block"
                               additionalProperties={{
                                 width: '8.6rem',
                                 height: '8.6rem',
                                 background: 'linear-gradient(132.99deg, #3FC1C9 12.01%, #1986A9 79.74%)',
                                 bottom: '-2.6rem',
                                 left: '-4rem',
                                 zIndex: '2'
                               }}/>
              <span className="mb-4 font-2 text-animation font-weight-bold">04.</span>
              <h1 className="text-animation mb-lg-5 z-index-10">
                Website <br/>
                Development
              </h1>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg-color-mirage pt-5rem pb-5rem" id="animationTrigger">
          {/* Our process */}
          <Row className=" bg-color-mirage mb-5rem">
            <Col lg={8} className="text-center mx-auto text-white section-text-animation initial-opacity-transform">
              <h2 className="mb-3">Our process</h2>
              <p className="width-large-displays">
                Taking pride in being different, we use our deep-rooted understanding of the market to carve out a thorough and complete user first solution for your brand.
              </p>
            </Col>
          </Row>
          <Container>
            <Row className="change-order-mobile-view">
              <Col lg={6} className="position-relative">
                <svg className="position-absolute ideate-svg d-none d-lg-block"
                     width="527"
                     height="85"
                     viewBox="0 0 527 85"
                     fill="none">
                  <mask id="ideateMask">
                    <path id="path"
                          d="M1 62.3567C17.9776 68.7565 59.4328 81.9562 89.4328 83.5561C126.933 85.5561 147.642 80.3562 154.358 76.7563C161.075 73.1564 234.396 37.1573 244.47 35.5574C254.545 33.9574 302.119 12.7579 323.948 9.95801C345.776 7.15808 326.187 4.75814 403.425 1.15824C465.216 -1.72169 510.888 35.424 526 54.3569"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-dasharray="9 9"
                    />
                  </mask>
                  <g id="ideateSvgMask"
                     mask="url(#ideateMask)">
                    <path id="path"
                          fill="none"
                          stroke="#464444"
                          stroke-linecap="square"
                          linejoin="mitter-clip"
                          stroke-miterlimit="10"
                          stroke-width="2px"
                          stroke-dasharray="10, 10"
                          d="M1 62.3567C17.9776 68.7565 59.4328 81.9562 89.4328 83.5561C126.933 85.5561 147.642 80.3562 154.358 76.7563C161.075 73.1564 234.396 37.1573 244.47 35.5574C254.545 33.9574 302.119 12.7579 323.948 9.95801C345.776 7.15808 326.187 4.75814 403.425 1.15824C465.216 -1.72169 510.888 35.424 526 54.3569"/>
                  </g>
                </svg>
                <div className="our-process-wrapper d-flex" id="processIdeate">
                  <div className="process-icon mr-3">
                    <svg className="icon-svg"
                         viewBox="0 0 155 194"
                         fill="none">
                      <path className="icon-dot"
                            d="M77.5 15.573C75.9553 15.573 74.6743 14.2848 74.6743 12.7312V2.8418C74.6743 1.28828 75.9553 0 77.5 0C79.0448 0 80.3258 1.28828 80.3258 2.8418V12.7312C80.3258 14.3227 79.0448 15.573 77.5 15.573Z"
                            fill="#FF5370"/>
                      <path className="icon-dot"
                            d="M29.6511 33.8363L22.681 26.8645C21.5884 25.7656 21.5884 23.9469 22.681 22.848C23.7736 21.7492 25.5821 21.7492 26.6747 22.848L33.6448 29.8578C34.7374 30.9566 34.8128 32.8133 33.6448 33.8742C32.0624 35.3141 30.2163 34.4047 29.6511 33.8363Z"
                            fill="#FF5370"/>
                      <path className="icon-dot"
                            d="M128.288 133.034L121.318 126.062C120.225 124.963 120.225 123.145 121.318 122.046C122.41 120.947 124.219 120.947 125.311 122.046L132.281 129.055C133.374 130.154 133.374 131.973 132.281 133.072C130.812 134.512 128.853 133.602 128.288 133.034Z"
                            fill="#FF5370"/>
                      <path className="icon-dot"
                            d="M12.6592 80.7828H2.82572C1.28099 80.7828 0 79.4946 0 77.941C0 76.3875 1.28099 75.0992 2.82572 75.0992H12.6592C14.2039 75.0992 15.4849 76.3875 15.4849 77.941C15.4849 79.4946 14.2416 80.7828 12.6592 80.7828Z"
                            fill="#FF5370"/>
                      <path className="icon-dot"
                            d="M152.174 80.7828H142.341C140.796 80.7828 139.515 79.4946 139.515 77.941C139.515 76.3875 140.796 75.0992 142.341 75.0992H152.174C153.719 75.0992 155 76.3875 155 77.941C155 79.4946 153.719 80.7828 152.174 80.7828Z"
                            fill="#FF5370"/>
                      <path className="icon-dot"
                            d="M22.6811 133.034C21.5131 132.011 21.5885 130.116 22.6811 129.018L29.6512 122.008C30.7438 120.909 32.5522 120.909 33.6449 122.008C34.7375 123.107 34.7375 124.925 33.6449 126.024L26.6748 133.034C25.5445 134.247 24.0751 134.247 22.6811 133.034Z"
                            fill="#FF5370"/>
                      <path className="icon-dot"
                            d="M121.318 33.8364C120.187 32.7375 120.225 30.9188 121.318 29.82L128.288 22.8102C129.38 21.7114 131.189 21.7114 132.281 22.8102C133.374 23.909 133.374 25.7278 132.281 26.8266L125.311 33.8364C124.784 34.4047 122.825 35.3141 121.318 33.8364Z"
                            fill="#FF5370"/>
                      <path className="path-icon-ideate"
                            d="M132.093 62.1027C131.641 60.5871 130.096 59.7156 128.589 60.1703C127.082 60.625 126.215 62.1785 126.667 63.6941C127.986 68.3168 128.664 73.1289 128.664 77.9789C128.664 93.3246 121.92 107.761 110.203 117.575C102.931 123.637 98.1842 133.148 97.393 142.848H87.8609V87.2242C89.2926 87.9441 90.875 88.3609 92.5704 88.3609C98.2972 88.3609 102.931 83.7004 102.931 77.941C102.931 72.1816 98.2972 67.5211 92.5704 67.5211C86.8437 67.5211 82.2095 72.1816 82.2095 77.941V142.848H72.7904V117.234C72.7904 115.68 71.5094 114.392 69.9647 114.392C68.42 114.392 67.139 115.68 67.139 117.234V142.848H57.6069C56.8157 133.11 52.1062 123.675 44.91 117.65C33.0043 107.761 26.2226 93.173 26.3356 77.6758C26.4863 49.6367 50.2977 26.1824 78.1404 26.5234C96.225 26.7508 112.463 36.2613 121.619 51.948C122.41 53.3121 124.143 53.7668 125.499 52.9711C126.856 52.1754 127.308 50.4324 126.517 49.0684C121.656 40.7324 114.686 33.7227 106.435 28.7969C97.9205 23.7195 88.1623 20.8398 78.2158 20.8398C44.684 20.8398 20.8349 46.4918 20.6465 77.6758C20.5335 94.8781 28.0687 111.057 41.2554 122.046C47.8864 127.578 52.0308 136.634 52.0308 145.689V172.213C52.0308 175.888 55.0072 178.844 58.6242 178.844H65.2175V188.506C65.2175 191.537 67.6665 194 70.6806 194H84.244C87.2581 194 89.707 191.537 89.707 188.506V178.844H96.3004C99.955 178.844 102.894 175.85 102.894 172.213V145.689C102.894 136.671 107.076 127.578 113.782 121.932C126.818 111.02 134.278 94.9918 134.278 77.9789C134.316 72.5605 133.562 67.2559 132.093 62.1027ZM92.5704 73.2047C95.1701 73.2047 97.28 75.3266 97.28 77.941C97.28 80.5555 95.1701 82.6773 92.5704 82.6773C89.9708 82.6773 87.8609 80.5555 87.8609 77.941C87.8609 75.3266 89.9708 73.2047 92.5704 73.2047ZM84.0933 188.316H70.9066V178.844H84.0933V188.316ZM97.28 172.213C97.28 172.743 96.8655 173.16 96.3381 173.16H58.6618C58.1344 173.16 57.7199 172.743 57.7199 172.213V163.688H78.894C80.4387 163.688 81.7197 162.399 81.7197 160.846C81.7197 159.292 80.4387 158.004 78.894 158.004H57.7199V148.531H97.28V158.004H91.1764C89.6317 158.004 88.3507 159.292 88.3507 160.846C88.3507 162.399 89.6317 163.688 91.1764 163.688H97.28V172.213Z"
                            fill="#464444"/>
                      <path className="icon-bulb-center"
                            d="M69.9647 107.647C71.5094 107.647 72.7904 106.359 72.7904 104.805V77.941C72.7904 72.1817 68.1562 67.5211 62.4294 67.5211C56.7027 67.5211 52.0685 72.1817 52.0685 77.941C52.0685 83.7004 56.7027 88.361 62.4294 88.361C64.1249 88.361 65.745 87.9442 67.139 87.2242V104.805C67.139 106.397 68.3823 107.647 69.9647 107.647ZM62.4294 82.6774C59.8298 82.6774 57.7199 80.5555 57.7199 77.941C57.7199 75.3266 59.8298 73.2047 62.4294 73.2047C65.0291 73.2047 67.139 75.3266 67.139 77.941C67.139 80.5555 65.0291 82.6774 62.4294 82.6774Z"
                            fill="#FF5370"/>
                      <path className="icon-bulb-center"
                            d="M84.8636 107C83.2982 107 82 105.716 82 104.167V77.3872C82 71.6459 86.6964 67 92.5 67C98.3036 67 103 71.6459 103 77.3872C103 83.1284 98.3036 87.7743 92.5 87.7743C90.7818 87.7743 89.14 87.3588 87.7273 86.6412V104.167C87.7273 105.754 86.4673 107 84.8636 107ZM92.5 82.1086C95.1345 82.1086 97.2727 79.9934 97.2727 77.3872C97.2727 74.7809 95.1345 72.6657 92.5 72.6657C89.8655 72.6657 87.7273 74.7809 87.7273 77.3872C87.7273 79.9934 89.8655 82.1086 92.5 82.1086Z"
                            fill="#FF5370"/>
                    </svg>
                  </div>
                  <div className="process-inner-structure">
                    <div className="text-white d-flex">
                      <div className="process-counter pr-3">
                        <h2>
                          01.
                        </h2>
                        <h2 className="text-uppercase text-white process-title">ideate</h2>
                      </div>
                    </div>
                    <div className="process-separator bg-doc-pink mb-3"></div>
                    <div className="process-description">
                      <p className="m-0">
                        Develop a clear understanding of the problem. Explore a wide range of fresh ideas and unique solutions to solve user flows.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="position-relative">
                <svg className="position-absolute define-svg d-none d-lg-block" width="387" height="711" viewBox="0 0 387 711"
                     fill="none">
                  <mask id="defineMask">
                    <path id="path2"
                          d="M1 19.9998C12.3333 10.9998 44.1 -4.90021 80.5 3.49979C126 13.9998 103 5 155 31.5C196.6 52.7 243 129.333 261 165C293.5 231.333 361.1 375.2 371.5 420C384.5 476 396 542 371.5 582.5C347 623 319 641 281 652C250.6 660.8 198 641.667 175.5 631C159.833 620.5 126.6 594.2 119 573C109.5 546.5 113.5 507.5 126.5 486.5C139.5 465.5 150.5 453 175.5 447.5C200.5 442 237.5 468.5 243.5 479C249.5 489.5 274.5 550.5 264.5 582.5C254.5 614.5 226.5 690.5 199.5 710"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-dasharray="9 9"
                    />
                  </mask>
                  <g id="defineSvgMask"
                     mask="url(#defineMask)">
                    <path id="path2"
                          fill="none"
                          stroke="#464444"
                          stroke-linecap="square"
                          linejoin="mitter-clip"
                          stroke-miterlimit="10"
                          stroke-width="4px"
                          stroke-dasharray="12, 12"
                          d="M1 19.9998C12.3333 10.9998 44.1 -4.90021 80.5 3.49979C126 13.9998 103 5 155 31.5C196.6 52.7 243 129.333 261 165C293.5 231.333 361.1 375.2 371.5 420C384.5 476 396 542 371.5 582.5C347 623 319 641 281 652C250.6 660.8 198 641.667 175.5 631C159.833 620.5 126.6 594.2 119 573C109.5 546.5 113.5 507.5 126.5 486.5C139.5 465.5 150.5 453 175.5 447.5C200.5 442 237.5 468.5 243.5 479C249.5 489.5 274.5 550.5 264.5 582.5C254.5 614.5 226.5 690.5 199.5 710"/>
                  </g>
                </svg>
                <div className="our-process-wrapper d-flex" id="processDefine">
                  <div className="process-icon mr-3">
                    <svg viewBox="0 0 130 162"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M103.547 68.5385H25.8867V74.7692H103.547V68.5385Z" fill="#FF6441"/>
                      <path d="M103.547 87.2308H25.8867V93.4616H103.547V87.2308Z" fill="#FF6441"/>
                      <path d="M103.547 105.923H25.8867V112.154H103.547V105.923Z" fill="#FF6441"/>
                      <path d="M64.7166 124.615H25.8867V130.846H64.7166V124.615Z" fill="#FF6441"/>
                      <path
                        d="M64.7971 23.3653C67.4777 23.3653 69.6508 21.2731 69.6508 18.6922C69.6508 16.1114 67.4777 14.0192 64.7971 14.0192C62.1165 14.0192 59.9434 16.1114 59.9434 18.6922C59.9434 21.2731 62.1165 23.3653 64.7971 23.3653Z"
                        fill="#464444"/>
                      <path className="path-icon-define"
                            d="M129.433 37.3846C129.433 30.4918 123.649 24.9231 116.49 24.9231H98.5309C96.1444 22.3529 93.0704 20.4058 89.511 19.4322C86.5179 18.6144 84.2528 16.3947 83.3629 13.513C81.0574 5.72452 73.5746 0 64.7165 0C55.8584 0 48.3756 5.72452 46.0701 13.513C45.2206 16.3947 42.9151 18.5755 39.922 19.4322C36.403 20.4058 33.329 22.3529 30.9021 24.9231H12.9433C5.78404 24.9231 0 30.4918 0 37.3846V149.538C0 156.431 5.78404 162 12.9433 162C42.6724 162 79.1968 162 116.49 162C123.649 162 129.433 156.431 129.433 149.538C129.433 114.14 129.433 80.2601 129.433 37.3846ZM32.3582 37.2678C32.3987 31.7769 36.2412 26.9091 41.7017 25.3904C46.8386 23.9495 50.8024 20.1721 52.2586 15.2264C53.8765 9.93029 58.9729 6.23077 64.7165 6.23077C70.4601 6.23077 75.5565 9.93029 77.1744 15.2264C78.671 20.1721 82.5944 23.9885 87.7313 25.3904C93.2322 26.9481 97.0747 31.8548 97.0747 37.3846V43.6154H32.3582V37.2678ZM116.49 155.769C81.9068 155.769 47.4048 155.769 12.9433 155.769C9.38389 155.769 6.47165 152.965 6.47165 149.538V37.3846C6.47165 33.9577 9.38389 31.1538 12.9433 31.1538H26.9787C26.2911 33.062 25.8866 35.087 25.8866 37.2288V49.8462H103.546V37.3846C103.546 35.2038 103.142 33.101 102.414 31.1538H116.49C120.049 31.1538 122.961 33.9577 122.961 37.3846C122.961 55.1813 122.961 138.751 122.961 149.538C122.961 152.965 120.049 155.769 116.49 155.769Z"
                            fill="#464444"/>
                    </svg>
                  </div>
                  <div className="process-inner-structure">
                    <div className="text-white d-flex">
                      <div className="process-counter pr-3">
                        <h2>
                          02.
                        </h2>
                        <h2 className="text-uppercase text-white process-title">define</h2>
                      </div>
                    </div>
                    <div className="process-separator bg-color-orange mb-3"></div>
                    <div className="process-description">
                      <p className="m-0">
                        Bring clarity to the ideas with a well-defined and action-oriented approach. Connect the dots to synthesize information and set things in motion.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="position-relative change-order-mobile">
                <svg className="position-absolute test-svg d-none d-lg-block" width="523" height="87" viewBox="0 0 523 87" fill="none">
                  <mask id="testMask">
                    <path id="path3"
                          d="M522 28.4997C503.833 17.8331 455.2 -2.30027 406 2.49973C344.5 8.49973 301.5 29.5 281 37.5C260.5 45.5 227 59.5 217 61.5C207 63.5 176.5 76 156 78C135.5 80 128 86 90.5 85.5C60.5 85.1 18.3333 65.3333 1 55.5"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-dasharray="9 9"
                    />
                  </mask>
                  <g id="testSvgMask"
                     mask="url(#testMask)">
                    <path id="path3"
                          fill="none"
                          stroke="#464444"
                          stroke-linecap="square"
                          linejoin="mitter-clip"
                          stroke-miterlimit="10"
                          stroke-width="2px"
                          stroke-dasharray="10, 10"
                          d="M522 28.4997C503.833 17.8331 455.2 -2.30027 406 2.49973C344.5 8.49973 301.5 29.5 281 37.5C260.5 45.5 227 59.5 217 61.5C207 63.5 176.5 76 156 78C135.5 80 128 86 90.5 85.5C60.5 85.1 18.3333 65.3333 1 55.5"/>
                  </g>
                </svg>

                <div className="our-process-wrapper d-flex" id="processTest">
                  <div className="process-icon mr-3">
                    <svg viewBox="0 0 147 176"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path className="path-icon-test"
                            d="M82.3021 20.5219H94.0497V44C94.0497 48.8469 98.0115 52.8 102.869 52.8H126.399V149.6C126.399 151.216 125.09 152.522 123.47 152.522H26.458C24.8388 152.522 23.5297 151.216 23.5297 149.6V85.0782C23.5297 83.4625 22.2206 82.1563 20.6014 82.1563C18.9822 82.1563 17.6731 83.4625 17.6731 85.0782V149.6C17.6731 154.447 21.6349 158.4 26.4924 158.4H32.3834V167.2C32.3834 169.538 33.3136 171.772 34.9672 173.422C36.6208 175.072 38.8601 176 41.2027 176H138.215C143.073 176 147.034 172.047 147.034 167.2V41.0782C147.034 36.2313 143.073 32.2782 138.215 32.2782H115.926L99.1484 15.5375C98.5972 14.9875 97.8392 14.6782 97.0813 14.6782H82.371C80.7518 14.6782 79.4427 15.9844 79.4427 17.6C79.4427 19.2157 80.6829 20.5219 82.3021 20.5219ZM99.9407 44V24.6813L122.23 46.9219H102.869C101.284 46.9219 99.9407 45.6157 99.9407 44ZM138.181 38.1219C139.8 38.1219 141.109 39.4282 141.109 41.0438V167.166C141.109 168.781 139.8 170.088 138.181 170.088H41.1683C39.5491 170.088 38.24 168.781 38.24 167.166V158.366H123.505C128.362 158.366 132.324 154.413 132.324 149.566V49.8782C132.324 49.0875 132.014 48.3657 131.463 47.8157L121.782 38.1563L138.181 38.1219Z"
                            fill="#464444"/>
                      <path
                        d="M35.2772 117.322H82.302C83.9212 117.322 85.2303 116.016 85.2303 114.4C85.2303 112.784 83.9212 111.478 82.302 111.478H35.2772C33.658 111.478 32.3489 112.784 32.3489 114.4C32.3489 116.016 33.658 117.322 35.2772 117.322Z"
                        fill="#F2C94C"/>
                      <path
                        d="M35.2772 140.8H61.7351C63.3543 140.8 64.6634 139.494 64.6634 137.878C64.6634 136.262 63.3543 134.956 61.7351 134.956H35.2772C33.658 134.956 32.3489 136.262 32.3489 137.878C32.3489 139.494 33.658 140.8 35.2772 140.8Z"
                        fill="#F2C94C"/>
                      <path
                        d="M101.25 96.3187C102.421 97.1094 103.971 96.9375 104.97 95.9406L119.681 81.2625C120.783 80.1281 120.783 78.2719 119.646 77.1375C118.509 76.0031 116.684 76.0031 115.512 77.1031L102.524 90.0625L95.7032 85.525C94.842 84.9406 93.7051 84.8719 92.7749 85.3187C91.8448 85.8 91.2247 86.7281 91.1558 87.7594C91.0869 88.7906 91.5692 89.8219 92.4649 90.4062L101.25 96.3187Z"
                        fill="#F2C94C"/>
                      <path
                        d="M92.4305 113.919L101.25 119.797C102.421 120.587 103.971 120.416 104.97 119.419L119.681 104.741C120.783 103.606 120.783 101.75 119.646 100.616C118.51 99.4813 116.684 99.4812 115.512 100.581L102.525 113.541L95.7033 109.003C94.3597 108.109 92.5339 108.453 91.6382 109.828C90.7425 111.203 91.087 113.025 92.4305 113.919Z"
                        fill="#F2C94C"/>
                      <path
                        d="M92.4305 137.362L101.25 143.241C102.421 144.031 103.971 143.859 104.97 142.862L119.681 128.184C120.783 127.05 120.783 125.194 119.646 124.059C118.51 122.925 116.684 122.925 115.512 124.025L102.525 136.984L95.7033 132.447C94.3597 131.553 92.5339 131.897 91.6382 133.272C90.7425 134.647 91.087 136.469 92.4305 137.362Z"
                        fill="#F2C94C"/>
                      <path
                        d="M17.4664 53.7968L22.1172 41.0437H36.6897L41.3406 53.7968C41.8918 55.3093 43.5798 56.1 45.0957 55.55C46.6115 55 47.4038 53.3156 46.8526 51.8031L36.1041 22.3093C35.0706 19.4906 32.3834 17.6343 29.3863 17.6343C26.3891 17.6343 23.7019 19.525 22.6684 22.3093L11.9199 51.8031C11.3687 53.3156 12.161 55 13.6769 55.55C15.2271 56.1 16.9152 55.3093 17.4664 53.7968ZM28.2149 24.3031C28.4216 23.8562 28.904 23.5812 29.3863 23.5812C29.8686 23.5812 30.3509 23.8562 30.5576 24.3031L34.5538 35.2H24.2531L28.2149 24.3031Z"
                        fill="#464444"/>
                      <path
                        d="M39.6869 79.2C61.5974 79.2 79.3738 61.4625 79.3738 39.6C79.3738 17.7375 61.5974 0 39.6869 0C17.7764 0 0 17.7375 0 39.6C0.0344504 61.4625 17.7764 79.1656 39.6869 79.2ZM39.6869 5.87813C58.359 5.87813 73.4828 20.9687 73.4828 39.6C73.4828 58.2313 58.359 73.3219 39.6869 73.3219C21.0148 73.3219 5.89103 58.2313 5.89103 39.6C5.89103 20.9687 21.0148 5.87813 39.6869 5.87813Z"
                        fill="#464444"/>
                      <path
                        d="M49.9875 38.1218H55.8785V44C55.8785 45.6156 57.1877 46.9218 58.8068 46.9218C60.426 46.9218 61.7351 45.6156 61.7351 44V38.1218H67.6261C69.2453 38.1218 70.5544 36.8156 70.5544 35.2C70.5544 33.5843 69.2453 32.2781 67.6261 32.2781H61.7351V26.4C61.7351 24.7843 60.426 23.4781 58.8068 23.4781C57.1877 23.4781 55.8785 24.7843 55.8785 26.4V32.2781H49.9875C48.3684 32.2781 47.0592 33.5843 47.0592 35.2C47.0248 36.8156 48.3684 38.1218 49.9875 38.1218Z"
                        fill="#464444"/>
                      <path
                        d="M82.302 134.922H73.4827C71.8636 134.922 70.5544 136.228 70.5544 137.844C70.5544 139.459 71.8636 140.766 73.4827 140.766H82.302C83.9212 140.766 85.2303 139.459 85.2303 137.844C85.2303 136.228 83.9212 134.922 82.302 134.922Z"
                        fill="#F2C94C"/>
                      <path
                        d="M82.3021 93.8781C83.9213 93.8781 85.2304 92.5718 85.2304 90.9562C85.2304 89.3406 83.9213 88.0343 82.3021 88.0343H55.8442C54.225 88.0343 52.9159 89.3406 52.9159 90.9562C52.9159 92.5718 54.225 93.8781 55.8442 93.8781H82.3021Z"
                        fill="#F2C94C"/>
                      <path
                        d="M35.2772 93.8781H44.0965C45.7156 93.8781 47.0248 92.5718 47.0248 90.9562C47.0248 89.3406 45.7156 88.0343 44.0965 88.0343H35.2772C33.658 88.0343 32.3489 89.3406 32.3489 90.9562C32.3489 92.5718 33.658 93.8781 35.2772 93.8781Z"
                        fill="#F2C94C"/>
                    </svg>
                  </div>
                  <div className="process-inner-structure">
                    <div className="text-white d-flex">
                      <div className="process-counter pr-3">
                        <h2>
                          04.
                        </h2>
                        <h2 className="text-uppercase text-white process-title">test</h2>
                      </div>
                    </div>
                    <div className="process-separator bg-cream-can mb-3"></div>
                    <div className="process-description">
                      <p className="m-0">
                        End-to-end usability testing to ensure high quality and performance of the proposed solution before revealing it to the wider audience.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="our-process-wrapper d-flex" id="processPrototype">
                  <div className="process-icon mr-3">
                    <svg viewBox="0 0 168 168"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)" filter="url(#filter0_d)">
                        <path className="path-icon-prototype"
                              d="M144.943 0H23.0572C12.569 0 4.04463 8.52679 4.04463 19.0625V45.7143H4C4.04463 45.8929 4.04463 46.0268 4.04463 46.25V55.1786C4.04463 55.2679 4.04463 55.4018 4.04463 55.4911V110.536C4.04463 121.071 12.569 129.554 23.1018 129.598H61.1716V137.232H57.378C51.0851 137.232 45.9526 142.366 45.9526 148.661V156.295C45.9526 158.393 47.6485 160.089 49.7462 160.089H118.298C120.396 160.089 122.092 158.393 122.092 156.295V148.661C122.092 142.366 116.96 137.232 110.667 137.232H106.873V129.598H141.149H148.558C148.603 129.554 148.692 129.509 148.736 129.509V129.196C157.618 127.366 163.955 119.598 163.955 110.536V19.0625C163.955 8.52679 155.476 0 144.943 0ZM110.667 144.777C112.764 144.777 114.46 146.473 114.46 148.571V152.366H53.5397V148.571C53.5397 146.473 55.2357 144.777 57.3333 144.777H110.667ZM68.7587 137.143V129.509H99.2413V137.143H68.7587ZM156.368 110.491C156.368 116.786 151.236 121.92 144.943 121.92H23.0572C16.7643 121.92 11.6318 116.786 11.6318 110.491V106.696H156.368V110.491ZM156.368 99.0625H11.6318V19.0625C11.6318 12.7679 16.7643 7.63393 23.0572 7.63393H144.943C151.236 7.63393 156.368 12.7679 156.368 19.0625V99.0625Z"
                              fill="#464444"/>
                        <path
                          d="M26.8955 57.1429H49.7462C53.9415 57.1429 57.378 53.75 57.378 49.5089V34.2857C57.378 30.0893 53.9861 26.6518 49.7462 26.6518H26.8955C22.7002 26.6518 19.2637 30.0447 19.2637 34.2857V49.5089C19.2637 53.75 22.6556 57.1429 26.8955 57.1429ZM26.8955 34.2857H49.7462V49.5089H26.8955V34.2857Z"
                          fill="#2B75FF"/>
                        <path
                          d="M23.0573 72.366H26.8508C28.9485 72.366 30.6444 70.6696 30.6444 68.5714C30.6444 66.4732 28.9485 64.7767 26.8508 64.7767H23.0573C20.9596 64.7767 19.2637 66.4732 19.2637 68.5714C19.2637 70.6696 20.9596 72.366 23.0573 72.366Z"
                          fill="#464444"/>
                        <path
                          d="M42.1144 64.7767C40.0168 64.7767 38.3208 66.4732 38.3208 68.5714C38.3208 70.6696 40.0168 72.366 42.1144 72.366H53.5398C55.6374 72.366 57.3334 70.6696 57.3334 68.5714C57.3334 66.4732 55.6374 64.7767 53.5398 64.7767H42.1144Z"
                          fill="#464444"/>
                        <path
                          d="M23.0573 87.6339H53.5398C55.6375 87.6339 57.3334 85.9375 57.3334 83.8393C57.3334 81.741 55.6375 80.0446 53.5398 80.0446H23.0573C20.9596 80.0446 19.2637 81.741 19.2637 83.8393C19.2637 85.8928 20.9596 87.6339 23.0573 87.6339Z"
                          fill="#2B75FF"/>
                        <path
                          d="M72.5969 57.1429H95.4477C99.6429 57.1429 103.079 53.75 103.079 49.5089V34.2857C103.079 30.0893 99.6875 26.6518 95.4477 26.6518H72.5969C68.4016 26.6518 64.9651 30.0447 64.9651 34.2857V49.5089C64.9651 53.75 68.357 57.1429 72.5969 57.1429ZM72.5969 34.2857H95.4477V49.5089H72.5969V34.2857Z"
                          fill="#2B75FF"/>
                        <path
                          d="M68.7587 72.366H72.5523C74.6499 72.366 76.3458 70.6696 76.3458 68.5714C76.3458 66.4732 74.6499 64.7767 72.5523 64.7767H68.7587C66.661 64.7767 64.9651 66.4732 64.9651 68.5714C64.9651 70.6696 66.661 72.366 68.7587 72.366Z"
                          fill="#464444"/>
                        <path
                          d="M87.8158 64.7767C85.7182 64.7767 84.0222 66.4732 84.0222 68.5714C84.0222 70.6696 85.7182 72.366 87.8158 72.366H99.2412C101.339 72.366 103.035 70.6696 103.035 68.5714C103.035 66.4732 101.339 64.7767 99.2412 64.7767H87.8158Z"
                          fill="#464444"/>
                        <path
                          d="M68.7587 87.6339H99.2412C101.339 87.6339 103.035 85.9375 103.035 83.8393C103.035 81.741 101.339 80.0446 99.2412 80.0446H68.7587C66.661 80.0446 64.9651 81.741 64.9651 83.8393C64.9651 85.8928 66.661 87.6339 68.7587 87.6339Z"
                          fill="#464444"/>
                        <path
                          d="M118.299 57.1429H141.149C145.345 57.1429 148.781 53.75 148.781 49.5089V34.2857C148.781 30.0893 145.389 26.6518 141.149 26.6518H118.299C114.103 26.6518 110.667 30.0447 110.667 34.2857V49.5089C110.667 53.75 114.103 57.1429 118.299 57.1429ZM118.299 34.2857H141.149V49.5089H118.299V34.2857Z"
                          fill="#2B75FF"/>
                        <path
                          d="M114.46 72.366H118.254C120.352 72.366 122.048 70.6696 122.048 68.5714C122.048 66.4732 120.352 64.7767 118.254 64.7767H114.46C112.363 64.7767 110.667 66.4732 110.667 68.5714C110.667 70.6696 112.363 72.366 114.46 72.366Z"
                          fill="#464444"/>
                        <path
                          d="M133.517 64.7767C131.42 64.7767 129.724 66.4732 129.724 68.5714C129.724 70.6696 131.42 72.366 133.517 72.366H144.943C147.04 72.366 148.736 70.6696 148.736 68.5714C148.736 66.4732 147.04 64.7767 144.943 64.7767H133.517Z"
                          fill="#464444"/>
                        <path
                          d="M114.46 87.6339H144.943C147.041 87.6339 148.736 85.9375 148.736 83.8393C148.736 81.741 147.041 80.0446 144.943 80.0446H114.46C112.363 80.0446 110.667 81.741 110.667 83.8393C110.667 85.8928 112.363 87.6339 114.46 87.6339Z"
                          fill="#2B75FF"/>
                      </g>
                      <defs>
                        <filter id="filter0_d" x="0" y="0" width="168" height="168" filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <clipPath id="clip0">
                          <rect width="160" height="160" fill="white" transform="translate(4)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="process-inner-structure">
                    <div className="text-white d-flex">
                      <div className="process-counter pr-3">
                        <h2>
                          03.
                        </h2>
                        <h2 className="text-uppercase text-white process-title">prototype</h2>
                      </div>
                    </div>
                    <div className="process-separator bg-usis-blue mb-3"></div>
                    <div className="process-description">
                      <p className="m-0">
                        Transform ideas to reality. Develop a simulation-based solution to share with the key stakeholders that they can interact within a test environment.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="h-100 responsive-styles-services bg-color-mirage">
          {/* Services components */}
          <ServiceComponent serviceId="designStudioService" x96ServiceData={this.state.designStudio}/>
          <ServiceComponent serviceId="digitalMarketingService" x96ServiceData={this.state.digitalMarketing}/>
          <ServiceComponent serviceId="technicalWritingService" x96ServiceData={this.state.technicalWriting}/>
          <ServiceComponent serviceId="webDevService" x96ServiceData={this.state.webDev}/>
          {/* Testimonials */}
          <section id="home-testimonial-section" className="bg-color-mirage">
              <Testimonials content={this.state.testimonials} />
          </section>
        </Container>
        <section id='fm-section-16-main-wrapper'>
          <GetInTouchComponent />
        </section>
        <ContactUsComponent/>
        <ScrollToTop />
      </Fragment>
    );
  }
}

export default XGServices;
