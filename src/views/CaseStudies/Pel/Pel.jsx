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
import  {Row, Col} from 'react-bootstrap';

// Carousel Imports
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Service imports
import animationService from "../../../services/AnimationService";

// Smooth Scroll Imports
import { Element } from "react-scroll";

// Constants Imports
import constants from '../../../constants/constants';

// Style Imports
import './Pel.scss';

// Component Imports
import CaseStudyHeader from '../../../components/CaseStudy/CaseStudyHeader/CaseStudyHeader';
import ComponentDesign1 from '../../../components/ComponentDesign1/ComponentDesign1';
import SliderComponent from '../../../components/SliderComponent/SliderComponent';
import GetInTouchComponent from '../../../components/GetInTouchComponent/GetInTouchComponent';
import CaseStudyFooter from '../../../components/CaseStudyFooter/CaseStudyFooter';
import Loader from '../../../components/Loader/Loader';
import MainNavbar from '../../../components/Navbar/MainNavbar';
import ContactUsComponent from '../../../components/ContactUs/ContactUsComponent';
import CaseStudyMenu from '../../../components/Navbar/SubMenu/CaseStudyMenu';
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";

class Pel extends React.Component {
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
                const yOffset = -30;
                const element = document.getElementById(id);
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
            if (id === "pelWebDevelopment") {
                const yOffset = -110;
                const element = document.getElementById(id);
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }, 2000);

                // Todo: SetTimeOut will be removed
        setTimeout(() => {
            //Animates Header Element
            animationService.caseStudyHeaderAnimate('#pel-section-1-main-wrapper', '#pel-menu-main-wrapper');

            // Changes Header Logo
            animationService.changesNavbarLogo("#pel-menu-main-wrapper");

            // Animates Component 1 Elements
            animationService.animatesComponent1Elements();

            // Animates Next Section Indicator
            animationService.animateNextPortfolioIndicator();

            // TODO: Remove later
            // Animate menu on Text zoom in animation
            animationService.transformYBlock(
                "#pel-menu-main-wrapper",
                "#pel-menu-main-wrapper .navbar-main-wrapper",
                200,
                0,
                "nav--top"
            );
            animationService.transformYBlock(
                "#pel-section-2-main-wrapper",
                "#pel-submenu-main-wrapper .submenu-casestudy-wrapper",
                -50,
                0,
                "subnav--default"
            );
            animationService.transformYBlock(
                "#pel-section-13-main-wrapper",
                "#pel-submenu-main-wrapper",
                50,
                0,
                "subnav-top-wrapper"
            );

            // Animates Section Elements
            animationService.transformYBlock(
                "#pel-section-6-main-wrapper",
                "#pel-section-6-main-wrapper .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );
            animationService.transformYBlock(
                "#pel-section-7-main-wrapper",
                "#pel-section-7-main-wrapper .section-first-element-wrapper",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-7-main-wrapper .design-details",
                "#pel-section-7-main-wrapper .design-details .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-8-main-wrapper .design-details",
                "#pel-section-8-main-wrapper .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-9-main-wrapper .design-details",
                "#pel-section-9-main-wrapper .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-10-main-wrapper .design-details",
                "#pel-section-10-main-wrapper .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-11-main-wrapper .content-wrapper-flex-bordered-items",
                "#pel-section-11-main-wrapper .design-details",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-11-main-wrapper .technologies-row-1",
                "#pel-section-11-main-wrapper .technologies-row-1",
                50,
                0.9,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-11-main-wrapper .technologies-row-2",
                "#pel-section-11-main-wrapper .technologies-row-2",
                50,
                0.9,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-12-main-wrapper",
                "#pel-section-12-main-wrapper .content-wrapper",
                50,
                0.9,
                "start-anim-transform-up"
            );

            [1, 2, 3, 4].map((key) => {
                return (
                    animationService.transformYBlock(
                        `#pel-section-12-main-wrapper .chat-trigger-${key}`,
                        `#pel-section-12-main-wrapper .chat-trigger-${key}`,
                        50,
                        0.8,
                        "start-anim-transform-up"
                    )
                )
            })

            animationService.transformYBlock(
                "#pel-section-4-main-wrapper .trigger-section-content",
                "#pel-section-4-main-wrapper .trigger-section-content .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

            animationService.transformYBlock(
                "#pel-section-4-main-wrapper .trigger-second-section-content",
                "#pel-section-4-main-wrapper .trigger-second-section-content .initial-opacity-transform-block",
                50,
                0.85,
                "start-anim-transform-up"
            );

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

    // Todo: Will update this in coming commits
    callBackImgCheck = (childData) => {
        let getImageCheck = this.state.isImgLoaded;
        getImageCheck = childData
        this.setState({ isImgLoaded: getImageCheck });
    }
    
    render() {
        function WebDevSection(props) {
            return (
                <div className='details'>
                    {
                        props.content ?
                            <Fragment>
                                <p className='color-mercury font-eina-bold section-indicator text-uppercase'>{props.content.indicator}</p>
                                <h4 className='text-white font-eina-semi-bold'>
                                    {props.content.heading}
                                </h4>
                                <p className='mt-4 description'>
                                    {props.content.description}
                                </p>
                                {   props.content.description2 ?
                                        <p className='mt-4 description'>
                                            {props.content.description2}
                                        </p>
                                    : null
                                }
                            </Fragment>
                        : null
                    }
                </div>
    
            )
        }
        let ecommercePortal = {
            indicator: 'Ecommerce Portal',
            heading: 'Shaping the future of PEL EShop with smart use of design and technology',
            description: 'In its attempt to excel in its ventures of innovation, PEL expanded its operations in the digital space by introducing its own custom ecommerce platform with the name PEL EShop. We assisted them in making this venture a success by upgrading their existing technology stack with zero downtime, complementing graphics and well thought out product web page designs for their online platform. From page design to development and testing process, we were involved in the end-to-end management of the EShop portal. Built on top of Magento and deployed on AWS, the portal data was made disaster-proof with proper backup management, periodic optimization and regular updates. The talented and highly responsive team of X-96 worked round the clock to offer support and maintenance for PEL’s traffic intensive portal.'
        };
        let crawlerDev = {
            indicator: 'Crawler design & development',
            heading: 'Price comparison tool to get a bigger picture of the market',
            description: 'Imagine looking for a specific product and manually comparing different brands to adjust your market positioning. Sounds exhausting and tedious, doesn’t it? Website crawlers do that for you in just one click of a button. We designed, developed and maintained PEL’s website crawler which facilitated internal stakeholders to perform price comparisons of PEL’s display products with other brands. The crawler was custom-built in Node.js and fetched data from a leading ecommerce platform to show the desired results helping the users to make informed decisions.'
        };
        let awsServices = {
            indicator: 'AWS Cloud Maintenance Services',
            heading: 'Utilizing cloud to unleash the full potential of PEL’s Ecommerce platform',
            description: 'To meet PEL’s ever growing network traffic needs, it was imperative to host their platform on a reliable and scalable infrastructure. Team X-96 was assigned with the task of maintaining its platform on AWS. The migration of the essential workloads to AWS cloud was completed with minimal downtime. Apart from ensuring the platform’s high availability and reliability, the team was also deeply involved in implementing capacity planning strategies.',
            description2: 'To address the unknown existing security loopholes in their system, the team investigated their architecture and fixed the potential vulnerabilities identified by scans or other notification systems. Post migration, our team was solely responsible for the maintenance of their existing production environment deployed on AWS, which included services like EC2 instances, Amazon Relational Database Service, Route 53, etc.'
        }
        let googleAnalytics = {
            indicator: 'Google Analytics',
            heading: 'Continuous improvement of advertising strategies with insightful statistics',
            description: 'Data analytics tools and plugins can turn out to be a valuable ally in understanding customers, the design elements that tick them, and the success of marketing campaigns. Based upon PEL’s use case, Google Analytics was used to record essential data points revolving around customer behavior and the network traffic. It served as a vital tool to gather valuable insights and capture a bigger picture of the overall website metrics.',
            description2: 'The recorded figures and performance indicators acted as a feedback loop as the team experimented with new marketing strategies to boost sales. The campaign stats and custom reports served a great deal to optimize the performance of both platforms and ensure 24/7 system uptime leading to market growth.'
        }
        let engagementDetails = {
            title: 'Amplifying PEL’s Business with our Unmatched Digital Services',
            customerDetails: ['PEL', 'Pakistan', '2019'],
            services: ['Visual Design', 'Web Development', 'Community Management'],
            service: [
                {
                    name: 'Visual Design',
                    anchor: 'pel-visual-design',
                },
                {
                    name: 'Web Development',
                    anchor: 'pel-web-development'
                },
                {
                    name: 'Community Management',
                    anchor: 'pel-community-management'
                }
            ]
        };
        let websiteMaintenance = {
            indicator: 'Website Maintenance',
            heading: 'Regular updates of product pages and key website features',
            description: 'The technology stack on which the web resources are built on, is the beating heart of any web application. In order to enhance functionality of PEL’s existing website, we made the smart use of the latest technologies to make it secure, did some tweaks to further improve the usability of their webpages and added new pages upon their request as PEL’s business expanded.',
            description2: 'Apart from following the efficient and well defined in-house troubleshooting mechanisms whenever required, our team also performed regular testing and maintenance of the existing web pages. Team X-96 has also been at the forefront in implementing the website best practices and making sure that PEL’s online platforms nail the user centric performance metrics such as page load time, response time, etc to name a few and improve its responsiveness across all the device types.'
        }
        let secondSectionContent = [
            {
                name: 'The challenge',
                title: 'Conventional digital look in need of a modern touch',
                description: 'PEL, one of the leading electronic home appliances manufacturer and seller in Pakistan, was struggling to market its product offerings to the modern consumers and increase its sales for PEL EShop. Their conventional design approach lacked visual aesthetics and needed rework to strategically market their selling points in an efficient manner. Also there were some big sales and launches in the pipeline that had to be tactically handled from planning to execution phase.'
            },
            {
                name: 'The solution',
                title: 'Leveraging on the power of design to influence buyer decisions',
                description: 'Taking customer demographics into account, team X-96 incorporated the modern principles of design thinking to leave a touch of sophistication and exclusiveness in the social media posts and website designs for PEL’s consumer products. To make the most out of the multiple sales campaigns spread over the year, our team was deeply involved in the practical implementation of the digital marketing strategies tailored to their products on various social media channels and ecommerce platforms. The boost in sales, lead generation during the promotional period and valuable insights obtained from the monitoring and tracking tools are a testament of the smooth execution by the X-96 team.'
            },
        ];
        let footerContent = {
            title: ["Unleashing Alkira's brand strategy for a powerful kickstart"],
            logoImage: constants.ui.images.alkiraLogo,
            customerDetails: ['Alkira', ' California', '2019 - On going'],
            services: ['Brand & Design', 'UX Design', 'Technical Writing', 'Web Development']
        }
        let secondSectionblurb = ['Social Media Posts', 'Daraz Layout Designs', 'Website Graphics'];
        let darazGraphics = [
            constants.ui.images.pelCaseStudy.pelGraphicsSlideShow1,
            constants.ui.images.pelCaseStudy.pelGraphicsSlideShow2,
            constants.ui.images.pelCaseStudy.pelGraphicsSlideShow3,
            constants.ui.images.pelCaseStudy.pelGraphicsSlideShow4,
        ];
        let websiteGraphics = [
            constants.ui.images.pelCaseStudy.pelWebsiteGraphicsSlideShow1,
            constants.ui.images.pelCaseStudy.pelWebsiteGraphicsSlideShow2,
            constants.ui.images.pelCaseStudy.pelWebsiteGraphicsSlideShow3,
            constants.ui.images.pelCaseStudy.pelWebsiteGraphicsSlideShow4,
        ];
        let crawlerGraphics = [
            constants.ui.images.pelCaseStudy.pelCrawlerPortal1,
            constants.ui.images.pelCaseStudy.pelCrawlerPortal2,
            constants.ui.images.pelCaseStudy.pelCrawlerPortal3,
        ]
        let webDevServices = ['Ecommerce Portal', 'Crawler Design & Development', 'AWS Migration', 'Google Analytics']
        if (this.state.showLoader) return <Loader logo={constants.ui.images.pelLogo} logoSize='80' heading='Brand &amp; Design' blurb='UI/UX + Website + Social Media' backgroundColor='bg-pel-blue' />;
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Case Study - PEL</title>
                </Helmet>
                <div id='pel-menu-main-wrapper'>
                   <MainNavbar lastSection='form-footer-main-wrapper' scrollNavbar={this.state.visible} />
               </div>
               <div id='pel-submenu-main-wrapper'>
                    <CaseStudyMenu title={engagementDetails.title} navList={engagementDetails.service} bgColor='bg-pel-blue' />
               </div>
                <div className='bg-color-mirage overflow-hidden'>
                    <section id='pel-section-1-main-wrapper' className='bg-pel-blue pel-section-1-main-wrapper-responsive'>
                        <CaseStudyHeader websiteUrl="https://pel.com.pk/" leftLogoUrl={constants.ui.images.pelLogo} logoSize='80' title={engagementDetails.title} customerEngagement={engagementDetails} />
                    </section>
                    <Element id='pel-visual-design'>
                        <div id="pelDesignStudio"></div>
                        <div id="pelDigitalMarketing"></div>
                        <section id='pel-section-2-main-wrapper' className='pel-section-2-main-wrapper-responsive'>
                            <ComponentDesign1 heading='1. Visual Design' blurb={secondSectionblurb} mainImage={constants.ui.images.pelPortfolio} content={secondSectionContent}  />
                        </section>
                        <section id='pel-section-3-main-wrapper' className='pel-section-3-main-wrapper-responsive'>
                            <div className='pb-5'>
                                <div>
                                    <p className='color-dust-grap font-eina-bold text-center text-uppercase text-white'>Social Media posts</p>
                                    <h2 className='text-center pt-3 pb-5 text-white'>
                                        Campaign Graphics
                                    </h2>
                                </div>
                                <img className='w-100' src={constants.ui.images.pelCaseStudy.pelPortfolioCollage} alt='Pel Services Collage' />
                            </div>
                        </section>
                        <section id='pel-section-4-main-wrapper' className='bg-white py-5 pel-section-4-main-wrapper-responsive'>
                            <div className='container'>
                                <Row>
                                    <Col md={5} className='trigger-section-content'>
                                        <div className='d-flex flex-column justify-content-center h-100 initial-opacity-transform-block'>
                                            <h2 className='pb-4'>
                                                Daraz<br />Graphics
                                            </h2>
                                            <p>
                                                PEL aimed to boost its sales by extending its presence from a traditional brick and mortar store to going digital through its virtual store on Daraz.pk, the leading ecommerce platform of Pakistan. Though it had an online store presence but it required massive design rework and consequently, complementing development efforts. X-96 addressed design flaws and redefined the whole Daraz theme for PEL using the right balance of visual emphasis, contrast, alignment, proportion and white space. We tactically made use of  PEL’s product graphics on Daraz to give the user the feel of in-store shopping.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={7} className='trigger-second-section-content'>
                                        <div className='img-wrapper initial-opacity-transform-block'>
                                            <img className='img-fluid' src={constants.ui.images.pelCaseStudy.pelDarazGraphics} alt='Pel Daraz Graphics' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                        <section id='pel-section-5-main-wrapper' className='pel-section-5-main-wrapper-responsive'>
                            <div className='overflow-hidden'>
                                <SliderComponent imgUrls={darazGraphics} />
                            </div>
                        </section>
                        <section id='pel-section-6-main-wrapper' className='pel-section-6-main-wrapper-responsive'>
                            <div className='container-880 text-center initial-opacity-transform-block mw-md-720 m-md-auto text-md-left'>
                                <h4 className='text-white pb-4'>
                                    Website Graphics
                                </h4>
                                <p className='color-cream-white'>
                                    A website is not just a set of webpages; it is a tool for convincing your audience and tempting them to buy from your business. We created a stunning spectrum of sleek, minimalist and product-centric designs for PEL. This user-first approach not only enhanced the visual appearance of the website, but also increased the visibility of their signature consumer electronics, led to a better user experience and significantly expanded their business reach.
                                </p>
                            </div>
                            <div className='overflow-hidden'>
                                <SliderComponent imgUrls={websiteGraphics} />
                            </div>
                        </section>
                    </Element>
                    <Element id='pel-web-development'>
                        <section id='pel-section-7-main-wrapper' className='bg-pel-blue pel-section-7-main-wrapper-responsive'>
                            <div className='container position-relative'>
                                <Row className='d-md-block d-lg-flex'>
                                    <Col md={7} className='mw-tablet-100'>
                                        <div className='content-wrapper-flex-bordered-items'>
                                            <div id="pelWebDevelopment"></div>
                                            <div className='section-first-element-wrapper initial-opacity-transform-block'>
                                                <div>
                                                    <h2 className='text-white'>2. Web Development</h2>
                                                </div>
                                                <div className='design-services'>
                                                    <div className='d-flex align-items-center mx-lg-5'>
                                                        {
                                                            webDevServices ?
                                                            webDevServices.map(items => (
                                                                <Fragment key={items}>
                                                                    <div>
                                                                        <p>{items}</p>
                                                                    </div>
                                                                    <span className='mx-3 mx-sm-2'></span>
                                                                </Fragment>
                                                            ))
                                                            : null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='design-details py-3 px-sm-0'>
                                                <div className='initial-opacity-transform-block'>
                                                    <WebDevSection content={ecommercePortal} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={5} className='mw-tablet-100'>
                                        <div className='img-wrapper'>
                                            <img src={constants.ui.images.pelCaseStudy.pelEcommercePortal} className='mw-sm-100' alt='Ecommerce Portal' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                        <section id='pel-section-8-main-wrapper' className='pel-section-8-main-wrapper-responsive'>
                            <div className='container-800 px-md-5'>
                                <div className='content-wrapper-flex-bordered-items pb-0 pt-sm-0'>
                                    <div className='design-details text-center pt-3 pb-0 initial-opacity-transform-block text-sm-left px-sm-2 mw-md-720 m-md-auto'>
                                        <WebDevSection content={crawlerDev} />
                                    </div>
                                </div>
                            </div>
                            <div className='overflow-hidden'>
                                <SliderComponent imgUrls={crawlerGraphics} />
                            </div>
                        </section>
                        <section id='pel-section-9-main-wrapper' className='pel-section-9-main-wrapper-responsive'>
                            <div className='container'>
                                <Row>
                                    <Col md={6} className='px-sm-0'>
                                        <div className='content-wrapper-flex-bordered-items pb-0 pt-sm-0'>
                                            <div className='design-details pt-3 pb-0 initial-opacity-transform-block px-sm-2'>
                                                <WebDevSection content={awsServices} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='d-flex align-items-center h-100 my-5 aws-img mt-sm-0 mb-sm-0'>
                                            <img className='w-100' src={constants.ui.images.pelCaseStudy.PelAwsFlow} alt='PEL AWS Flow' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                        <section id='pel-section-10-main-wrapper' className='pel-section-10-main-wrapper-responsive py-sm-0'>
                            <div className='container'>
                                <Row>
                                    <Col md={6} className='d-block d-lg-none px-sm-0'>
                                        <div className='content-wrapper-flex-bordered-items text-right pb-0 pt-sm-0'>
                                            <div className='design-details pt-3 pb-0 initial-opacity-transform-block px-sm-2'>
                                                <WebDevSection content={googleAnalytics} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='d-flex align-items-center h-100 mt-sm-1'>
                                            <img className='w-100' src={constants.ui.images.pelCaseStudy.PelGA} alt='PEL AWS Flow' />
                                        </div>
                                    </Col>
                                    <Col md={6} className='d-none d-lg-block'>
                                        <div className='content-wrapper-flex-bordered-items text-right pb-0'>
                                            <div className='design-details pt-3 pb-0 initial-opacity-transform-block'>
                                                <WebDevSection content={googleAnalytics} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                        <section id='pel-section-11-main-wrapper' className='pb-lg-5 pel-section-11-main-wrapper-responsive'>
                            <div className='container-880'>
                                <div className='content-wrapper-flex-bordered-items pb-0 pt-sm-0'>
                                    <div className='design-details text-center pt-3 pb-0 initial-opacity-transform-block px-sm-2 text-sm-left'>
                                        <WebDevSection content={websiteMaintenance} />
                                    </div>
                                </div>
                            </div>
                            <div className='container py-5 py-sm-2'>
                                <div className='d-flex justify-content-around py-4 technologies-row-1 initial-opacity-transform-block'>
                                    <div className='px-sm-1 px-md-2'>
                                        <img src={constants.ui.images.pelCaseStudy.awsImage} alt='AWS' className='mw-sm-100 mw-md-100'/>
                                    </div>
                                    <div className='px-sm-1 px-md-2'>
                                        <img src={constants.ui.images.pelCaseStudy.magentoImage} alt='Magento' className='mw-sm-100 mw-md-100'/>
                                    </div>
                                    <div className='px-sm-1 px-md-2'>
                                        <img src={constants.ui.images.pelCaseStudy.gaImage} alt='Google Analytics' className='mw-sm-100 mw-md-100'/>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around w-80 mx-auto py-4 technologies-row-2 initial-opacity-transform-block'>
                                    <div className='px-sm-1 px-md-2'>
                                        <img src={constants.ui.images.pelCaseStudy.wordpressImage} alt='AWS' className='mw-sm-100 mw-md-100'/>
                                    </div>
                                    <div className='px-sm-1 px-md-2'>
                                        <img src={constants.ui.images.pelCaseStudy.facebookPixel} alt='Facebook' className='mw-sm-100 mw-md-100'/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Element>
                    <Element id='pel-community-management'>
                        <section id='pel-section-12-main-wrapper' className='pel-section-12-main-wrapper-responsive pt-4'>
                            <div className='container-880'>
                                <div className='content-wrapper initial-opacity-transform-block px-sm-2 mw-md-720 m-md-auto'>
                                    <h2 className='text-white py-3'>
                                        3. Community Management
                                    </h2>
                                    <h4 className='text-white font-eina-semi-bold'>
                                        Fostering customer engagement with an active off the store online presence
                                    </h4>
                                    <p className='color-cream-white px-sm-0 mt-4'>
                                        While online platforms certainly increase your reach, it comes with an additional responsibility of keeping your social channels alive and providing the support to your target audience they require. Team X-96 took over PEL’s social media and community management handles to connect with PEL’s current and potential customers.
                                    </p>
                                    <p className='color-cream-white px-sm-0 mt-4'>
                                        Our well rounded support experience facilitated the customers with sufficient and adequate answers which further led to an increase in PEL’s brand and product awareness. Being accurately served not only strengthened customers' reach but also led to referral marketing. Through appropriate feedback, we dewelled at each opportunity for improvement to deliver the best customer experience possible for our valuable clients.
                                    </p>
                                </div>
                                <div className='py-5 px-sm-2 mw-md-720 m-md-auto'>
                                    <div className='chat-trigger-1 initial-opacity-transform-block'>
                                        <div>
                                            <img className='img-fluid' src={constants.ui.images.pelCaseStudy.communityManagementChat1} alt='Pel Community Management' />
                                        </div>
                                    </div>
                                    <div className='chat-trigger-2 initial-opacity-transform-block'>
                                        <div className='custom-translate text-right pt-5'>
                                            <img className='w-75' src={constants.ui.images.pelCaseStudy.communityManagementChat2} alt='Pel Community Management' />
                                        </div>
                                    </div>
                                    <div className='chat-trigger-3 initial-opacity-transform-block'>
                                        <div className='custom-translate text-right pt-5'>
                                            <img className='w-75' src={constants.ui.images.pelCaseStudy.communityManagementChat3} alt='Pel Community Management' />
                                        </div>
                                    </div>
                                    <div className='chat-trigger-4 initial-opacity-transform-block'>
                                        <div className='pt-5'>
                                            <img className='w-75' src={constants.ui.images.pelCaseStudy.communityManagementChat4} alt='Pel Community Management' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Element>
                    <section id='pel-section-13-main-wrapper'>
                        <GetInTouchComponent />
                    </section>
                    <section id='pel-section-14-main-wrapper' className='bg-alkira-blue'>
                        <CaseStudyFooter nextPortfolioUrl='casestudy-alkira' content={footerContent} imgUrl={constants.ui.images.alkiraPortfolio} />
                    </section>
            </div>
            <ContactUsComponent />
            <ScrollToTop />
            </Fragment>
        );
    }
}
 
export default Pel;
