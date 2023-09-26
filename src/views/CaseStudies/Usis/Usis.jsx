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
import React, { Fragment } from 'react';
import {Helmet} from "react-helmet";


// Carousel Imports
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Bootstrap Imports
import  {Row, Col, Container} from 'react-bootstrap';

// Smooth Scroll Imports
import { Element } from "react-scroll";

// Service imports
import animationService from "../../../services/AnimationService";

// Constants Imports
import constants from '../../../constants/constants';

// Style Imports
import './Usis.scss';

// Component Imports
import CaseStudyHeader from '../../../components/CaseStudy/CaseStudyHeader/CaseStudyHeader';
import ComponentDesign1 from '../../../components/ComponentDesign1/ComponentDesign1';
import SliderComponent from '../../../components/SliderComponent/SliderComponent';
import GetInTouchComponent from '../../../components/GetInTouchComponent/GetInTouchComponent';
import CaseStudyFooter from '../../../components/CaseStudyFooter/CaseStudyFooter';
import Loader from '../../../components/Loader/Loader';
import VideoComponent from '../../../components/VideoComponent/VideoComponent';
import MainNavbar from '../../../components/Navbar/MainNavbar';
import ContactUsComponent from '../../../components/ContactUs/ContactUsComponent';
import CaseStudyMenu from '../../../components/Navbar/SubMenu/CaseStudyMenu';
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import ComponentDesign2 from "../../../components/ComponentDesign2/ComponentDesign2";

class UsisPortfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            showLoader: true,
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }
    componentDidMount() {
        // For Menu's Scroll Effect
        window.addEventListener("scroll", this.handleMenuScroll);

        // Todo: Will be removed in the future
        setTimeout(() => this.setState({ showLoader: false }), 1500);

        setTimeout(() => {
            const id = window.location.hash.split('#')[1];
            if(id) {
                const yOffset = -90;
                const element = document.getElementById(id);
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }, 2000);

                // Todo: SetTimeOut will be removed
        setTimeout(() => {
            // Changes Header Logo
            animationService.changesNavbarLogo("#usis-menu-main-wrapper");

            // TODO: Remove later
            // Animate menu on Text zoom in animation
            animationService.transformYBlock(
                "#usis-menu-main-wrapper",
                "#usis-menu-main-wrapper .navbar-main-wrapper",
                200,
                0,
                "nav--top"
            );
            animationService.transformYBlock(
                "#usis-section-2-main-wrapper",
                "#usis-submenu-main-wrapper .submenu-casestudy-wrapper",
                -50,
                0,
                "subnav--default"
            );
            animationService.transformYBlock(
                "#usis-section-8-main-wrapper",
                "#usis-submenu-main-wrapper",
                50,
                0,
                "subnav-top-wrapper"
            );

            // Animates Header Elements
            animationService.caseStudyHeaderAnimate('#usis-section-1-main-wrapper', '#usis-menu-main-wrapper');

            // Animates Sections Element
            animationService.transformYBlock(
                "#usis-section-4-main-wrapper",
                "#usis-section-4-main-wrapper .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#usis-section-5-main-wrapper",
                "#usis-section-5-main-wrapper .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#usis-section-7-main-wrapper",
                "#usis-section-7-main-wrapper .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            // Animates Next Section Indicator
            animationService.animateNextPortfolioIndicator();

            // Animates Component 1 Elements
            animationService.animatesComponent1Elements()

            // Animates Footer Elements
            animationService.footerElementTransform();
        }, 1500);
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
         visible
         });
    };

    render() {
        let SectionContent = (props) => {
            return (
                <div className='content-wrapper'>
                    <div className='flex-colum-spaced pt-0'>
                        <div className='d-flex mt-4 justify-content-between'>
                            <div className='title'>
                                <h3 className='text-white font-eina-semi-bold d-flex'>
                                    <span className='d-block w-50'>{props.name}</span>
                                </h3>
                            </div>
                            <div className='details'>
                                <h4 className='text-white font-eina-regular'>
                                    {props.heading}
                                </h4>
                                <p>
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        let engagementDetails = {
            title: 'Reconceptualizing Procon application & Introducing iPad application',
            customerDetails: ['USIS', 'New York', '2019'],
            service: [
                {
                    name: 'UI/UX Design',
                    anchor: 'ux/ux-design'
                },
                {
                    name: 'Technical Writing',
                    anchor: 'usis-technical-writer'
                },
            ]
        };
        let secondSectionContent = [
            {
                name: 'The challenge',
                title: 'Rebuilding a feature rich interactive application with UX centric UI',
                description: 'The initial application was developed using outdated tools and rendered slowly. The cumbrous UI lacked the concept of a minimalist approach and consisted of unnecessary design elements all over the place. It not only resulted in complex navigation but also affected responsiveness of the application. The main challenge was to reinvent the application with intuitive design and user friendly features for the task management of fieldworkers on the construction site. '
            },
            {
                name: 'The solution',
                title: 'Designed a multi-platform application with visual consistency and cohesive user experience',
                description: 'Our team nailed down the game plan with successful software revamp from design to implementation. The newer version was robust and provided a smooth user flow across multiple application views. We employed a user centric approach to create a clean and sleek interface resulting in an aesthetically pleasing and simple to use application.'
            }
        ];
        let desktopSectionContent = {
            name: 'Desktop Application',
            title: 'Optimized workflows for simple navigation and fast render',
            description: 'Based on the golden principles of modern design, we came up with a revamped version for desktop application. The improved application was a blend of innovative UI patterns which not only created a visual base for interaction but also allowed the administrator to view the real time analytics on the application dashboard and assign tasks on the go. The user friendly application design acted as a guide that assisted the managers in carrying out the desired actions based upon the job needs.'
        }
        let iPadSectionContent = {
            name: 'iPad Application',
            title: 'Customized and feature-packed applications accessible on your favorite device type',
            description: 'With the ultimate aim of delivering highly engaging mobile applications with user friendly features and unique design, our team of experts coupled the desktop version of the software with an iPad application. This provided the on-field workers with great support to perform their day-to-day tasks, request for the required logistics and optimize their job management functions.'
        }
        let techWriterSectionContent = {
            name: 'iPad Application',
            title: 'Customized and feature-packed applications accessible on your favorite device type',
            description: 'With the ultimate aim of delivering highly engaging mobile applications with user friendly features and unique design, our team of experts coupled the desktop version of the software with an iPad application. This provided the on-field workers with great support to perform their day-to-day tasks, request for the required logistics and optimize their job management functions.'
        }
        let servicesSectionContent = [
            {
                name: 'Desktop Application',
                heading: 'Optimized workflows for simple, intuitive navigation',
                description: 'Based on the golden principles of modern design, we performed a detailed design audit of the entire desktop application and came up with a new interface design that accounted for the legacy issues. The improved version was a blend of innovative UI patterns which not only created a visual base for interaction but also allowed the administrator to view real time analytics on the application dashboard and assign tasks on the go. User friendly designs were pivotal due to the complex workflows that connected various components of the application. '
            },
            {
                order: 3,
                name: 'iPad Application',
                heading: 'Customized and feature-packed iOS application',
                description: 'With the ultimate aim of delivering highly engaging mobile applications with user friendly features and unique design, our team of experts coupled the desktop version of the software with an iPad application for remote users. This provided the on-field workers with great support to perform their day-to-day tasks, request for the required logistics and optimize their job management functions.'
            },
            {
                order: 4,
                name: 'Technical Writing',
                heading: 'Quick Transition to the new application design with product Documentation',
                description: 'The USIS ProCon application offers custom views based upon the user type. The documentation team at X-96 recorded all the workflows and multiple use cases associated with each type of user such as admins, field workers, etc. to quickly onboard them on the various portal features. A separate document for both the desktop and iPad application was created that entailed all the resources required by the USIS team to get started and make the best use of the ProCon application. Drafted while keeping the end users in mind, the user manuals were clear, had concise information and included all the visual aids that further led to a rapid company-wide adoption of the application.'
            }
        ]
        let footerContent = {
            title: ['Amplifying PEL’s Business with our Unmatched Digital Services'],
            customerDetails: ['PEL', 'Pakistan', '2019'],
            services: ['Visual Design', 'Web Development', 'Community Management'],
            logoImage: constants.ui.images.pelLogo
        }
        let responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 1920 },
              items: 2,
              partialVisibilityGutter: 200
            },
            desktop: {
              breakpoint: { max: 1920, min: 1024 },
              items: 2,
              partialVisibilityGutter: 180
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
        };
        let highFidImages = [
            constants.ui.images.usisCaseStudy.highFdSlider1,
            constants.ui.images.usisCaseStudy.highFdSlider2,
            constants.ui.images.usisCaseStudy.highFdSlider3,
            constants.ui.images.usisCaseStudy.highFdSlider4
        ];
        let ipadImages = [
            constants.ui.images.usisCaseStudy.iPadDesignSlider1,
            constants.ui.images.usisCaseStudy.iPadDesignSlider2,
            constants.ui.images.usisCaseStudy.iPadDesignSlider3,
            constants.ui.images.usisCaseStudy.iPadDesignSlider4
        ];
        let designContent = {
            title: '2. Brand & Design',
            services: ['Social Media', 'Print Media Design', 'Videos'],
            heading: 'Hook up your prospects and clients with extraordinary visual appeal',
            description: 'Fiber Mountain was looking forward to modernizing its brand image and turn around its branding strategy 180 degrees. We started with website redesign and revamped Fiber Mountain completely, adding a greater visual appeal, aesthetically pleasing color palette and also introduced a character which became the signature mascot of Fiber Mountain.'
        };
        let secondSectionblurb = ['Wireframing/Low-fid mockups', 'Desktop Application', 'iPad Application'];
        if (this.state.showLoader) return <Loader logoSize="100" logo={constants.ui.images.usisLogo} heading='UI/UX Design' blurb='Desktop + Mobile' backgroundColor='bg-usis-grey' />;
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Case Study - USIS</title>
                </Helmet>
                <div id='usis-menu-main-wrapper'>
                   <MainNavbar lastSection='form-footer-main-wrapper' scrollNavbar={this.state.visible} />
               </div>
               <div id='usis-submenu-main-wrapper'>
                    <CaseStudyMenu title={engagementDetails.title} navList={engagementDetails.service} bgColor='bg-usis-grey' />
               </div>
                <section id='usis-section-1-main-wrapper'>
                    <CaseStudyHeader websiteUrl="http://www.usis.net/" rightLogoSize="130" logoSize="100" leftLogoUrl={constants.ui.images.usisLogo} title={engagementDetails.title} customerEngagement={engagementDetails} />
                </section>
                <Element id='ux/ux-design'>
                    <div id="usisDesignStudio"></div>
                    <section id='usis-section-2-main-wrapper' className='component-design-1-sm-wrapper-usis'>
                        <ComponentDesign1 heading='1. UI/UX Design' blurb={secondSectionblurb} mainImage={constants.ui.images.usisPortfolio} content={secondSectionContent}  />
                    </section>
                    <section id='usis-section-3-main-wrapper'>
                        <div className='py-5'>
                            <div>
                                <h4 className='text-center font-eina-semi-bold pb-5'>
                                    Wireframing / Low Fid Mockups
                                </h4>
                            </div>
                            <img className='w-100 d-sm-hidden' src={constants.ui.images.usisCaseStudy.usisWireframes} alt='Usis Wireframes' />
                            <img className='w-100 d-none d-sm-visible' src={constants.ui.images.usisCaseStudy.usisMobile} alt='Usis Wireframes' />
                        </div>
                    </section>
                    <section id='usis-section-4-main-wrapper'>
                        <div className='initial-opacity-transform-block'>
                            <div className='container-880'>
                                <SectionContent order={servicesSectionContent[0].order} name={servicesSectionContent[0].name} heading={servicesSectionContent[0].heading} description={servicesSectionContent[0].description} />
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <SliderComponent imgUrls={highFidImages} />
                        </div>
                    </section>
                    <section id='usis-section-5-main-wrapper'>
                        <div className='initial-opacity-transform-block'>
                            <div className='container-880'>
                                <SectionContent order={servicesSectionContent[1].order} name={servicesSectionContent[1].name} heading={servicesSectionContent[1].heading} description={servicesSectionContent[1].description} />
                            </div>
                        </div>
                        <div className='carousel-main-wrapper'>
                            <div className='carousel-wrapper mt-5 position-relative'>
                                    <Carousel infinite partialVisible responsive={responsive}>
                                        {
                                            ipadImages ?
                                            ipadImages.map((url, index) => {
                                                return (
                                                    <div key={index} className='carousel-custom-item-wrapper'>
                                                        <img className='w-100' src={url} alt='iPad Slider' />
                                                    </div>
                                                )
                                            })
                                            : null
                                        }
                                    </Carousel>
                            </div>
                        </div>
                    </section>
                    <section id='usis-section-6-main-wrapper' className='bg-color-mirage'>
                        <VideoComponent heading='Video' description='With the aim of providing better understanding to the users, we created several well-explanatory tutorial videos for USIS. The fulfilling content of these videos was developed according to the comfort level of the onsite workers.  It served as a value added service for the smooth onboarding of the workers and to familiarize them with the modules of the app for easy navigation.' />
                    </section>
                </Element>
                <Element id='usis-technical-writer'>
                    <section id='usis-section-7-main-wrapper' className='bg-color-mirage'>
                        <div id="usisTechnicalWriting"></div>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <div className='position-absolute img-wrapper'>
                                        <img src={constants.ui.images.usisCaseStudy.usisTechWritingImg} alt='Featured Technical Writing' />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='initial-opacity-transform-block'>
                                        <div className='content-wrapper'>
                                            <div className='title pt-4'>
                                                <h2 className='text-white font-eina-semi-bold d-flex'>
                                                    2. Technical Writing
                                                </h2>
                                            </div>
                                            <div className='details'>
                                                <h5 className='text-white font-eina-bold pt-4'>
                                                    Quick Transition to the New Application Design with Product Documentation
                                                </h5>
                                                <p className='color-cream-white pt-4'>
                                                    The USIS ProCon application offers custom views based upon the user type. The documentation team at X-96 recorded the various use cases associated with each type of user to quickly onboard the admins and field workers on the various portal features. A separate document for both the desktop and iPad application was created that entailed all the resources required by the USIS team to get started and make the best use of the ProCon application. Drafted while keeping the end users in mind, the user manuals were clear, had concise information and included all the visual aids that further led to a rapid company-wide adoption of the application.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Element>
                <section id='usis-section-8-main-wrapper' className='bg-color-mirage'>
                    <GetInTouchComponent />
                </section>
                <section id='usis-section-9-main-wrapper' className='bg-pel-blue'>
                    <CaseStudyFooter nextPortfolioUrl='casestudy-pel' content={footerContent} imgUrl={constants.ui.images.pelPortfolio} />
                </section>
                <ContactUsComponent />
                <ScrollToTop />
            </Fragment>
        );
    }
}
 
export default UsisPortfolio;
