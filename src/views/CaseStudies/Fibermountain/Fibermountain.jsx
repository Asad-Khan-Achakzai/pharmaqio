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

// Bootstrap Imports
import  {Row, Col, Container} from 'react-bootstrap';

// Service imports
import animationService from "../../../services/AnimationService";

// Carousel Imports
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Smooth Scroll Imports
import { Element } from "react-scroll";

// Style Imports
import './Fibermountain.scss';
import './responsive.scss';

// Constants Imports
import constants from '../../../constants/constants';

// Components Imports
import CaseStudyHeader from '../../../components/CaseStudy/CaseStudyHeader/CaseStudyHeader';
import ComponentDesign1 from '../../../components/ComponentDesign1/ComponentDesign1';
import ComponentDesign2 from '../../../components/ComponentDesign2/ComponentDesign2';
import SliderComponent from '../../../components/SliderComponent/SliderComponent';
import GetInTouchComponent from '../../../components/GetInTouchComponent/GetInTouchComponent';
import CaseStudyFooter from '../../../components/CaseStudyFooter/CaseStudyFooter';
import DocumentDesign from '../../../components/DocumentDesign/DocumentDesign';
import VideoComponent from '../../../components/VideoComponent/VideoComponent';
import Loader from '../../../components/Loader/Loader';
import MainNavbar from '../../../components/Navbar/MainNavbar';
import ContactUsComponent from '../../../components/ContactUs/ContactUsComponent';
import CaseStudyMenu from '../../../components/Navbar/SubMenu/CaseStudyMenu';
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";

class Fibermountain extends React.Component {
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
            if (id) {
                const yOffset = -40;
                const element = document.getElementById(id);
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }, 2000);

        // Todo: SetTimeOut will be removed
        setTimeout(() => {

            // Changes Header Logo
            animationService.changesNavbarLogo("#fm-menu-main-wrapper");

            // TODO: Remove later
            // Animate menu on Text zoom in animation
            animationService.transformYBlock(
                "#fm-menu-main-wrapper",
                "#fm-menu-main-wrapper .navbar-main-wrapper",
                200,
                0,
                "nav--top"
            );
            animationService.transformYBlock(
                "#fm-section-2-main-wrapper",
                "#fm-submenu-main-wrapper .submenu-casestudy-wrapper",
                -50,
                0,
                "subnav--default"
            );
            animationService.transformYBlock(
                "#fm-section-16-main-wrapper",
                "#fm-submenu-main-wrapper",
                50,
                0,
                "subnav-top-wrapper"
            );

            // Animates Component 1 Elements
            animationService.animatesComponent1Elements();

            // Animates Next Section Indicator
            animationService.animateNextPortfolioIndicator();

            // Animates Component 2 Elements
            animationService.transformYBlock(
                "#fm-section-5-main-wrapper #component-design-2-main-wrapper .content-wrapper-flex-bordered-items",
                "#fm-section-5-main-wrapper #component-design-2-main-wrapper .services-elements-trigger",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fm-section-5-main-wrapper #component-design-2-main-wrapper .design-details-0",
                "#fm-section-5-main-wrapper #component-design-2-main-wrapper .design-details-0 .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            // Animates Social Media Section
            animationService.transformYBlock(
                "#fm-section-5-main-wrapper .animation-trigger-indicator",
                "#fm-section-5-main-wrapper .animation-trigger-indicator .initial-opacity-transform-block",
                50,
                0.9,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fm-section-5-main-wrapper .animation-trigger-indicator",
                "#fm-section-5-main-wrapper .animation-trigger-indicator .animates-section-content",
                300,
                0.95,
                "start-anim-transform-up"
            );

            // Animates Print Media Design
            animationService.transformYBlock(
                "#fm-section-6-main-wrapper",
                "#fm-section-6-main-wrapper .initial-opacity-transform-block",
                50,
                0.7,
                "start-anim-transform-up"
            );

            // Animates Technical Writer Section
            animationService.transformYBlock(
                "#fm-section-9-main-wrapper #component-design-2-main-wrapper .content-wrapper-flex-bordered-items",
                "#fm-section-9-main-wrapper #component-design-2-main-wrapper .services-elements-trigger",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fm-section-9-main-wrapper #component-design-2-main-wrapper .design-details-0",
                "#fm-section-9-main-wrapper #component-design-2-main-wrapper .design-details-0 .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fm-section-9-main-wrapper #component-design-2-main-wrapper .component2-img-wrapper",
                "#fm-section-9-main-wrapper #component-design-2-main-wrapper .component2-img-wrapper .initial-opacity-transform-block",
                0,
                0.9,
                "start-anim-transform-up"
            );

            // Animates Web Dev Section
            animationService.transformYBlock(
                "#fm-section-13-main-wrapper #component-design-2-main-wrapper .content-wrapper-flex-bordered-items",
                "#fm-section-13-main-wrapper #component-design-2-main-wrapper .services-elements-trigger",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fm-section-13-main-wrapper #component-design-2-main-wrapper .design-details-0",
                "#fm-section-13-main-wrapper #component-design-2-main-wrapper .design-details-0 .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fm-section-13-main-wrapper #component-design-2-main-wrapper .component2-img-wrapper",
                "#fm-section-13-main-wrapper #component-design-2-main-wrapper .component2-img-wrapper .initial-opacity-transform-block",
                0,
                0.9,
                "start-anim-transform-up"
            );

            // Animates Documentation Content
            animationService.transformYBlock(
                "#fm-section-11-main-wrapper .document-component-main-wrapper",
                "#fm-section-11-main-wrapper .document-component-main-wrapper .doc-content-animation-trigger",
                0,
                0.8,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fm-section-11-main-wrapper .document-component-main-wrapper",
                "#fm-section-11-main-wrapper .document-component-main-wrapper .doc-img-animation-trigger",
                500,
                0.9,
                "start-anim-transform-up"
            );

            // Animates PRD Content
            animationService.transformYBlock(
                "#fm-section-12-main-wrapper",
                "#fm-section-12-main-wrapper .initial-opacity-transform-block",
                50,
                0.7,
                "start-anim-transform-up"
            );

            // Animation Web Doc Portal
            animationService.transformYBlock(
                "#fm-section-14-main-wrapper .trigger-section-animation",
                "#fm-section-14-main-wrapper .trigger-section-animation .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            // Animates FMU Section
            animationService.transformYBlock(
                "#fm-section-15-main-wrapper .trigger-section-animation",
                "#fm-section-15-main-wrapper .trigger-section-animation .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fmu-ipad-section .fmu-trigger-section-animation-0",
                "#fmu-ipad-section .fmu-trigger-section-animation-0 .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#fmu-ipad-section .fmu-trigger-section-animation-1",
                "#fmu-ipad-section .fmu-trigger-section-animation-1 .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            // Animates Header Elements
            animationService.caseStudyHeaderAnimate('#fm-section-1-main-wrapper', '#fm-menu-main-wrapper');

            // Animates Footer Elements
            animationService.footerElementTransform();

            // Animates Video Section
            animationService.animatesVideoSectionfm("desktop-fm-video");
            animationService.animatesVideoSectionfm("mobile-fm-video");

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

    // Todo: Will update this in coming commits
    callBackImgCheck = (childData) => {
        let getImageCheck = this.state.isImgLoaded;
        getImageCheck = childData
        this.setState({ isImgLoaded: getImageCheck });
    }
    render() {
        let engagementDetails = {
            title: 'Rethinking the Fiber Mountain brand for the modern digital audience',
            customerDetails: ['Fiber Mountain', 'Connecticut | California', '2018 - On going'],
            service: [
                {
                    name: 'UI/UX Design',
                    anchor: 'fm-ux-design',
                },
                {
                    name: 'Brand & Design',
                    anchor: 'fm-brand-&-design'
                },
                {
                    name: 'Technical Writing',
                    anchor: 'fm-technical-writer'
                },
                {
                    name: 'Web Development',
                    anchor: 'fm-web-development'
                }
            ]
        };
        let designContent = {
            title: '2. Brand & Design',
            services: ['Social Media', 'Print Media Designs', 'Videos'],
            heading: 'Engage your prospects and clients with extraordinary visual appeal',
            description: 'Fiber Mountain was looking forward to modernizing its brand image and turning around its branding strategy 180 degrees. We started with website redesign and revamped Fiber Mountain completely, adding a greater visual appeal, aesthetically pleasing color palette and also introduced a character which became the signature mascot of Fiber Mountain.'
        };
        let technicalWriterContent = {
            title: '3. Technical Writing',
            services: ['Quick Guides', 'Product Documentation', 'PRDs'],
            heading: 'Educating customers with technical documentation delivered across multiple platforms',
            description: 'Where Fiber Mountain took pride in solving the complex real world problems, it was important to educate their customers on how to use their product in its full capacity. We collaborated with the Fiber Mountain team, captured  various use cases, and did our magic to make it presentable and easy to understand for each target segment.'
        };
        let webDevContent = {
            title: '4. Website Development',
            services: ['Website', 'Documentation Portal', 'Fiber Mountain University'],
            heading: 'Impactful digital presence that highlights the key product offerings',
            description: 'Fiber Mountain Inc., one of the fastest growing brands working with the industry big fishes, wanted to restrategize the way they portray their brand and planned to refresh their web presence. Team X-96 was honored with the responsibility of redesigning their web outlook in the required manner. Our team built FMI’s website using the best of WordPress, sprinkled with some level of customization to highlight their key features. With the right mix of illustrations, animations and transitions, we made sure that most valuable product offerings get the due attention. We also added a 360 degree view of FMI’s prime devices for better product visualization. Despite the add-ons on the website in the form of high resolution pictures, plugins and third party tools, the team made sure that the website is lightweight and tested the website for various web performance metrics.',
            description2: 'As a part of its ongoing maintenance, it was constantly optimized and the website health was constantly monitored. Our team also integrated the website security best practices during its development and ran various scans to make sure that it is secure and free from any anomalies.'
        };
        let secondSectionContent = [
            {
                name: 'The challenge',
                title: 'Quest for much needed application redesign to improve customer adaptability',
                description: 'No matter how relevant your application is, the right balance of the user experience and creativity is the key to having a product that sells for itself. Fiber Mountain had a promising B2B application but there was a need to reduce UX friction lurking in their product and address the pain points reported by their customers. X-96 took up the responsibility of reconstructing the application features and making it more usable for the users.'
            },
            {
                name: 'The solution',
                title: 'UX centric design built for scalability and longevity',
                description: 'Using the principles of modern UI design, we employed the best design practices and revamped Fiber Mountain’s application by playing around with usability design, colors, contrast and other typography elements to refine the visuals and redefine the workflows. The newer version not only stood out with better aesthetics but is also simpler to use, interactive and has a cleaner look, resulting in increased customer engagement.'
            },
        ];
        let secondSectionblurb = ['Wireframing', 'Low-fid mockups', 'High-fid mockups']
        let footerContent = {
            title: ['Reconceptualizing Procon application & Introducing iPad application'],
            logoImage: constants.ui.images.usisLogo,
            customerDetails: ['USIS', 'New York', '2019'],
            services: ['Wireframing', 'UI/UX Design', 'Technical Writing']
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
        let documentationSectionContent = {
            heading: 'Product Documentation',
            description: 'Our knowledge architects have published various HTML-based product manuals for Fiber Mountain’s enterprise grade applications. These manuals walk the user through each step of the software application usage from initial deployment to integration with hardware components, and enabling them to consume NBAPIs. These documents include, but are not limited to, user guide, installation guide, architecture document, device manuals, release notes, API guide etc.'
        }
        let highFidImages = [
            constants.ui.images.fmCaseStudy.fmHighFid1,
            constants.ui.images.fmCaseStudy.fmHighFid2,
            constants.ui.images.fmCaseStudy.fmHighFid3,
            constants.ui.images.fmCaseStudy.fmHighFid4,
            constants.ui.images.fmCaseStudy.fmHighFid5
        ]
        let printMediaImages = [
            constants.ui.images.fmCaseStudy.fmMediaDesign1,
            constants.ui.images.fmCaseStudy.fmMediaDesign2,
            constants.ui.images.fmCaseStudy.fmMediaDesign3,
            constants.ui.images.fmCaseStudy.fmMediaDesign4,
            constants.ui.images.fmCaseStudy.fmMediaDesign5
        ]
        if (this.state.showLoader) return <Loader logo={constants.ui.images.fibermountainLogo} heading='Brand &amp; Design' blurb='UI/UX + Website + Social Media' backgroundColor='bg-fm-red' />;
        return (
           <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Case Study - Fiber Mountain</title>
                </Helmet>
               <div id='fm-menu-main-wrapper'>
                   <MainNavbar lastSection='form-footer-main-wrapper' scrollNavbar={this.state.visible} />
               </div>
               <div id='fm-submenu-main-wrapper'>
                    <CaseStudyMenu title={engagementDetails.title} navList={engagementDetails.service} bgColor='bg-fm-red' />
               </div>
                <section id='fm-section-1-main-wrapper' className='bg-fm-red fm-section-1-main-wrapper-responsive'>
                    <CaseStudyHeader websiteUrl="https://www.fibermountain.com/" leftLogoUrl={constants.ui.images.fibermountainLogo} title={engagementDetails.title} customerEngagement={engagementDetails} />
                </section>
                <Element id='fm-ux-design'>
                    <div id="fibermountainDesignStudio"></div>
                    <section id='fm-section-2-main-wrapper' className='fm-section-2-main-wrapper-responsive'>
                        <ComponentDesign1 heading='1. UI/UX' blurb={secondSectionblurb} mainImage={constants.ui.images.fmPorfolio} content={secondSectionContent}  />
                    </section>
                    <section id='fm-section-3-main-wrapper' className='bg-white'>
                        <div className='py-5'>
                            <div>
                                <h4 className='text-center font-eina-semi-bold mb-5 py-lg-5'>
                                    Wireframing/Low-fid mockups
                                </h4>
                            </div>
                            <img className='w-100' src={constants.ui.images.fmCaseStudy.fmWireFrames} alt='Fibermountain Wireframes' />
                        </div>
                    </section>
                    <section id='fm-section-4-main-wrapper'>
                        <div>
                            <div>
                                <h4 className='text-center font-eina-semi-bold text-white'>
                                    High-fid Mockups
                                </h4>
                            </div>
                            <div className='overflow-hidden'>
                                <SliderComponent imgUrls={highFidImages} />
                            </div>
                        </div>
                    </section>
                </Element>
                <Element id='fm-brand-&-design'>
                    <section id='fm-section-5-main-wrapper' className='fm-section-5-main-wrapper-responsive'>
                        <div id="fibermountainDigitalMarketing"></div>
                        <div className='bg-fm-red'>
                            <ComponentDesign2 content={designContent} />
                        </div>
                        <div className='bg-color-mirage animation-trigger-indicator'>
                            <Container>
                                <Row>
                                    <Col md={8}>
                                        <div className='img-wrapper text-center initial-opacity-transform-block'>
                                            <img className='w-75' src={constants.ui.images.fmCaseStudy.fmSocialMedia} alt='Social Media' />
                                        </div>
                                    </Col>
                                    <Col md={4} className='d-flex align-items-center'>
                                        <div className='initial-opacity-transform-block animates-section-content mobile-styles-social-media-wrapper'>
                                            <h4 className='text-white mb-4 mb-lg-2'>Social Media Marketing</h4>
                                            <p className='color-cream-white'>
                                                We enhanced the social media presence of Fiber Mountain by restyling and reworking its social media strategy. Our team brought great excellence to its visuals and event campaigns by incorporating new brand elements to the posts and added a streak of diverse content to increase its reach, engagement and visibility.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
                    <section id='fm-section-6-main-wrapper' className='bg-color-mirage'>
                        <div className='container-880 text-center px-3 px-lg-0 pt-5 pb-3 initial-opacity-transform-block'>
                            <h4 className='text-white pb-3'>Print Media Designs</h4>
                            <p className='color-cream-white'>
                                Fiber Mountain has always had an impactful event based presence and to get highlighted as a leading Glass Core Company at trade shows, expos and events, captivating print media design was a must-have.  Hence we designed user-friendly brochures, flyers, banners, swag and standees which helped them showcase their USPs.
                            </p>
                        </div>
                        <div className='img-main-wrapper overflow-hidden pt-5'>
                            <img className='w-100' src={constants.ui.images.fmCaseStudy.fmPrintMediaCollage} alt="Fibermountain's Print Media Collage" />
                        </div>
                    </section>
                    <div id='trigger-video-element'></div>

                    <section id='fm-section-7-main-wrapper' className='position-relative desktop-fm-video d-none d-lg-block' id="desktopFMVideo">
                        <VideoComponent videowebm={constants.ui.videos.fmVideoDesktopWebm}
                                        videomp4={constants.ui.videos.fmVideo} heading='Videos' description='To showcase Fiber Mountain’s products and solutions efficiently to the world, our team extended our video production expertise and captured a wide range of engaging cinematics for Fiber Mountain’s business offerings. This includes teasers, application walkthroughs, product overviews, demos, hardware catalogues and explainer videos for various social media platforms with a storyline that captivates the viewers.' />
                    </section>
                    <section id='fm-section-7-main-wrapper' className='position-relative mobile-fm-video d-block d-lg-none'>
                        <VideoComponent videowebm={constants.ui.videos.fmVideoWebmMobile}
                                        videomp4={constants.ui.videos.fmVideoMp4Mobile} heading='Videos' description='To showcase Fiber Mountain’s products and solutions efficiently to the world, our team extended our video production expertise and captured a wide range of engaging cinematics for Fiber Mountain’s business offerings. This includes teasers, application walkthroughs, product overviews, demos, hardware catalogues and explainer videos for various social media platforms with a storyline that captivates the viewers.' />
                    </section>

                </Element>
                <Element id='fm-technical-writer'>
                    <section id='fm-section-9-main-wrapper' className='fm-section-9-main-wrapper-responsive'>
                        <div id="fibermountainTechnicalWriting"></div>
                        <div className='bg-fm-red'>
                            <ComponentDesign2 content={technicalWriterContent} imageUrl={constants.ui.images.fmCaseStudy.fmDocPortfolio} />
                        </div>
                    </section>
                    <section id='fm-section-11-main-wrapper' className='bg-color-mirage fm-section-11-main-wrapper-responsive'>
                        <DocumentDesign content={documentationSectionContent} docImage={constants.ui.images.fmCaseStudy.fmProductDocs} />
                    </section>
                    <section id='fm-section-12-main-wrapper' className='bg-color-mirage fm-section-12-main-wrapper-responsive'>
                        <Container>
                            <Row>
                                <Col md={8} className='position-relative mb-5 mb-lg-0'>
                                    <div className='position-absolute left-0 prd-shape-1'>
                                        <img className='shapes-vert-move' width='200' src={constants.ui.images.ellipseShape} alt='Ellipse Shape' />
                                    </div>
                                    <div className='position-absolute right-0 prd-shape-2'>
                                        <svg className='spin-object' width="250" height="250" viewBox="0 0 361 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g style={{mixBlendMode: Screen}}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M92.3725 91.539L171.362 359.726L360.378 183.632L92.3725 91.539Z" fill="#F54EA2"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='position-absolute bottom-0 left-0 prd-shape-3'>
                                        <svg className='spin-object' width="106" height="106" viewBox="0 0 151 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g style={{mixBlendMode: Screen}}>
                                            <rect x="0.32959" y="72.4248" width="106.582" height="106.582" transform="rotate(-42.2251 0.32959 72.4248)" fill="#17F0C9"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='position-absolute bottom-0 right-0 prd-shape-4'>
                                        <svg className='shapes-vert-move' width="203" height="133" viewBox="0 0 203 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g style={{mixBlendMode: Screen}}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.0324 0H203L112.968 133H0L90.0324 0Z" fill="#83B7FF"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='position-relative'>
                                        <img className='w-100' src={constants.ui.images.featuredPdr} alt='Featured' />
                                    </div>
                                </Col>
                                <Col md={4} className='initial-opacity-transform-block prd-mobile-styles'>
                                    <div className='d-lg-flex color-cream-white mt-4 mb-5 mb-lg-4 text-center text-lg-left'>
                                        <h4 className='text-white mr-2'>
                                            Product Requirement Documents
                                        </h4>
                                    </div>
                                    <div>
                                        <p className='color-cream-white'>
                                            Deeply involved in the product development lifecycle, our team of expert writers were involved in capturing  feature requirements for Fiber Mountain’s product releases. These requirements are tied with all the essential information required by engineering to begin the development efforts and enclosed in the form of product requirements document, user stories, and feature spec sheets.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Element>
                <Element id='fm-web-development'>
                    <div id="fibermountainWebDevelopment"></div>
                    <section id='fm-section-13-main-wrapper' className='fm-section-13-main-wrapper-responsive'>
                        <ComponentDesign2 content={webDevContent} imageUrl={constants.ui.images.fmCaseStudy.fmWebDevPortfolio} />
                    </section>
                    <section id='fm-section-14-main-wrapper' className='bg-color-mirage fm-section-14-main-wrapper-responsive'>
                        <Container>
                            <Row className="mobile-flex-column-reverse">
                                <Col md={6} className='mw-md-720'>
                                    <div className='position-absolute img-wrapper'>
                                        <img className='w-110' src={constants.ui.images.fmCaseStudy.fmDocPortal} alt='Documentation Portal' />
                                    </div>
                                </Col>
                                <Col md={6} className='mw-md-720'>
                                    <div className='trigger-section-animation'>
                                        <div className='text-left text-lg-right initial-opacity-transform-block'>
                                            <p className='color-cream-white mb-4'>Documentation Portal</p>
                                            <h4 className='text-white mb-4'>
                                                Specialized documentation portal delivering HTML based dynamic docs
                                            </h4>
                                            <p className='color-cream-white'>
                                                A dedicated documentation portal serves as an essential platform for sharing all the product related information needed. We assisted the Fiber Mountain team in meeting this requirement by crafting a solid foundation for hosting their documents privately. This was achieved by building a customized docs portal. The user management module was associated with the portal for better access control. The portal served as a unique platform for their customers and provided easy and quick access to all the latest official guides and manuals.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section id='fm-section-15-main-wrapper' className='bg-color-mirage position-relative fm-section-15-main-wrapper-responsive'>
                        <div className='container-880 trigger-section-animation px-3 px-lg-0 mw-md-720'>
                            <div className='text-lg-center initial-opacity-transform-block'>
                                <div className='text-lg-center pb-3'>
                                    <svg width="150" height="153" viewBox="0 0 155 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M124.073 152.7H0.199219V30.4279C0.199219 13.6125 13.8117 0 30.6271 0H124.073C140.888 0 154.501 13.6125 154.501 30.4279V122.272C154.501 139.088 140.888 152.7 124.073 152.7Z" fill="#E21936"/>
                                        <path d="M48.0833 34.2715H84.4366V46.2825H62.5765V55.9714H82.8351V66.8614H62.5765V82.9561H48.0833V34.2715Z" fill="white"/>
                                        <path d="M92.1235 34.2715H108.218L116.546 51.247L124.713 34.2715H140.968V82.9561H124.153V59.8149L116.546 77.1108H116.306L108.699 59.8149V82.9561H92.1235V34.2715Z" fill="white"/>
                                        <path d="M92.2036 115.866V89.5215H108.939V115.625C108.939 121.551 112.142 124.113 116.546 124.113C120.95 124.113 124.153 121.791 124.153 116.026V89.5215H140.888V115.545C140.888 131.88 131.119 138.286 116.386 138.286C101.652 138.286 92.2036 131.72 92.2036 115.866Z" fill="white"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M118.468 102.254L121.11 107.539C121.43 108.179 121.991 108.58 122.712 108.74L128.557 109.621C130.319 109.861 131.039 112.023 129.758 113.224L125.514 117.308C125.034 117.788 124.794 118.509 124.874 119.229L125.834 125.075C126.155 126.836 124.313 128.118 122.712 127.317L117.507 124.594C116.866 124.274 116.146 124.274 115.505 124.594L110.3 127.317C108.699 128.118 106.937 126.836 107.177 125.075L108.138 119.229C108.218 118.509 108.058 117.868 107.498 117.308L103.254 113.224C101.973 112.023 102.693 109.861 104.455 109.621L110.3 108.74C111.021 108.66 111.581 108.179 111.902 107.539L114.544 102.254C115.425 100.652 117.747 100.652 118.468 102.254Z" fill="#E21936"/>
                                    </svg>
                                </div>
                                <p className='font-eina-bold mb-4 color-cream-white'>Fiber Mountain University (FMU)</p>
                                <h4 className='mb-4 text-white'>
                                    Building smarter LMS through<br /> pure E-Learning modules
                                </h4>
                                <p className='color-cream-white'>
                                    A smart learning management system (LMS) makes the onerous task handling smoother by easing up tracking and reporting. Fiber Mountain has always been a forerunner in embracing new technologies and X-96 was their trusted choice for implementation of this idea. We integrated the solution on Thinkific with dynamic e-learning modules to train and upskill their employees. These online training sessions helped in quick onboarding of their workers by providing hands-on learning exercises of their solutions. The must-include quiz feature acted as a course-builder and allowed the users to measure their performance.
                                </p>
                            </div>
                        </div>
                        <Container>
                            <div id='fmu-ipad-section' className='fmu-ipad-section'>
                                <Row>
                                    <Col md={7}>
                                        <div className='fmu-ipad-img-wrapper'>
                                            <img src={constants.ui.images.fmCaseStudy.fmuIpadView} alt='FMU iPad View' />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className='d-flex flex-column justify-content-center h-100 pl-lg-4'>
                                            <div className='fmu-trigger-section-animation-0'>
                                                <div className='pb-3 pt-2 initial-opacity-transform-block'>
                                                    <div className='mb-4'>
                                                        <img src={constants.ui.images.fmCaseStudy.fmuIcon1} alt='FMU Training' />
                                                    </div>
                                                    <p className='text-white font-weight-bold line-height-0 mb-4 fmu-text-font-size'>Fiber Mountain University (FMU)</p>
                                                    <h4 className='mb-4 text-white fmu-heading-font-size'>
                                                        Streamline the training process through coherent automation
                                                    </h4>
                                                    <p className='color-cream-white fmu-text-font-size'>To leverage an all-in-one e-learning program, X-96 helped FMU share knowledge at a manageable pace to grow their audience, and scale up their business. The LMS portal with optimized web and mobile solutions, bought an amazing teaching experience for the trainers to produce learning material with the click of a button.</p>
                                                </div>
                                            </div>
                                            <div className='fmu-trigger-section-animation-1'>
                                                <div className='pb-4 initial-opacity-transform-block'>
                                                    <div className='mb-4'>
                                                        <img src={constants.ui.images.fmCaseStudy.fmuIcon2} alt='FMU Learning' />
                                                    </div>
                                                    <p className='text-white font-weight-bold mb-4 line-height-0 fmu-text-font-size'>Fiber Mountain University (FMU)</p>
                                                    <h4 className='mb-4 text-white fmu-heading-font-size'>
                                                        Engrave yourself into a rich learning experience
                                                    </h4>
                                                    <p className='color-cream-white fmu-text-font-size'>With the growing popularity of e-learning, FMU provides an agile feature-rich portal to change the landscape of training with all checkpoints and follow-up exercises to fulfil the purpose. Personalized emails, professional certifications and progress reminders helped in active learning and brought satisfied learners for FMU.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </section>
                </Element>
                <section id='fm-section-16-main-wrapper'>
                    <GetInTouchComponent />
                </section>
                <section id='fm-section-17-main-wrapper' className='bg-usis-grey'>
                    <CaseStudyFooter nextPortfolioUrl='casestudy-usis' content={footerContent} imgUrl={constants.ui.images.usisPortfolio} />
                </section>
                <ContactUsComponent />
                <ScrollToTop />
           </Fragment>
        );
    }
}
 
export default Fibermountain;

