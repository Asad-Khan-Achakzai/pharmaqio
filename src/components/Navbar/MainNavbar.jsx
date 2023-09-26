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
import React, {Fragment, useState} from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

// Bootstrap Imports
import { Navbar, Nav, Button } from 'react-bootstrap';

// Smooth Scroll Imports
import { Link, animateScroll as scroll } from "react-scroll";


// Hubspot imports
import HubspotForm from 'react-hubspot-form';

// Style imports
import './MainNavbar.scss'
import './MainNavbarResponsive.scss';
import Modal from "react-bootstrap/Modal";

const MainNavbar = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [expanded, setExpanded] = useState(false);

    return (
        <Fragment>
            <Navbar expand="lg" variant="dark" className='navbar-main-wrapper nav--default' expanded={expanded}>
                <Navbar.Brand className='navbar-brand-logo'>
                    <NavLink to="/" onClick={(e) => window.scrollTo(0, 0)}>
                    <div id='navbar-logo-wrapper' className='d-block-white-logo'>
                        <svg className='' width="100" height="40" viewBox="0 0 133 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.0895615H25.4225L38.0696 16.6182L34.5679 21.3607L22.7546 6.13598H11.8903L29.4501 28.8644L10.5564 55.236H3.47603L22.3826 29.2351L0 0.0895615Z" fill="white"/>
                            <path d="M50.3189 0.0895615H57.0273L38.249 26.4356L60.6829 55.236H35.068L22.1387 39.0781L25.8071 33.9776L37.7616 49.6498H48.7284L30.8095 26.4356L50.3189 0.0895615Z" fill="white"/>
                            <path d="M66.8013 27.1898H54.7827V31.0886H66.8013V27.1898Z" fill="white"/>
                            <path d="M110.04 17.6279C110.04 20.5553 109.527 23.2142 108.501 25.6046C107.475 27.9951 106.154 30.4239 104.525 32.891L92.5832 50.6596H78.3969L90.7105 33.658L90.8516 33.4535C90.3385 33.6452 89.7742 33.773 89.1457 33.8753C88.5172 33.9648 87.9271 34.0159 87.3627 34.0159C85.1822 34.0159 83.1043 33.6324 81.1546 32.8654C79.205 32.0984 77.4734 31.0119 75.9855 29.593C74.4976 28.174 73.3047 26.4867 72.4325 24.5053C71.5474 22.5367 71.1113 20.338 71.1113 17.922C71.1113 15.1352 71.6244 12.6297 72.6505 10.3927C73.6767 8.16842 75.0748 6.27652 76.832 4.75533C78.5893 3.23413 80.6672 2.0453 83.0402 1.23996C85.4131 0.40906 87.9143 0 90.5694 0C93.263 0 95.8027 0.40906 98.1757 1.2144C100.549 2.03252 102.601 3.19578 104.345 4.72976C106.09 6.26374 107.475 8.11729 108.501 10.3032C109.527 12.4891 110.04 14.9307 110.04 17.6279ZM98.3681 17.4873C98.3681 15.3525 97.6754 13.5118 96.2901 11.9522C94.9048 10.3927 93.0193 9.61292 90.6336 9.61292C88.2478 9.61292 86.3366 10.3416 84.9129 11.8116C83.4891 13.2689 82.7708 15.1864 82.7708 17.564C82.7708 19.7883 83.4763 21.6418 84.8744 23.0991C86.2853 24.5564 88.1452 25.2978 90.4925 25.2978C92.8269 25.2978 94.7253 24.582 96.1747 23.1375C97.6369 21.693 98.3681 19.8139 98.3681 17.4873Z" fill="white"/>
                            <path d="M133 39.0908C133 41.8775 132.487 44.383 131.461 46.6201C130.435 48.8571 129.037 50.7362 127.279 52.2574C125.509 53.7914 123.444 54.9674 121.071 55.7728C118.698 56.5909 116.184 56.9872 113.542 56.9872C110.848 56.9872 108.322 56.5781 105.974 55.7728C103.627 54.9547 101.562 53.7914 99.8047 52.2574C98.0346 50.7234 96.6365 48.8699 95.6232 46.684C94.5971 44.4981 94.084 42.0693 94.084 39.372C94.084 36.4447 94.5971 33.7858 95.6232 31.3953C96.6493 29.0049 97.9705 26.5761 99.5995 24.109L111.541 6.3404H125.702L113.529 23.2014L113.324 23.5465C113.786 23.3675 114.35 23.2269 115.004 23.1247C115.658 23.0352 116.261 22.984 116.813 22.984C118.955 22.984 121.007 23.3675 122.983 24.1345C124.958 24.9015 126.677 25.9881 128.152 27.407C129.614 28.8259 130.794 30.5133 131.679 32.4947C132.551 34.4889 133 36.6748 133 39.0908ZM121.328 39.372C121.328 37.1478 120.622 35.2942 119.224 33.8369C117.813 32.3796 115.953 31.6382 113.606 31.6382C111.259 31.6382 109.373 32.3541 107.924 33.7986C106.475 35.2431 105.743 37.1222 105.743 39.4359C105.743 41.5707 106.449 43.4115 107.847 44.9455C109.258 46.4794 111.143 47.2464 113.529 47.2464C115.864 47.2464 117.749 46.5306 119.186 45.0861C120.61 43.6416 121.328 41.7369 121.328 39.372Z" fill="white"/>
                        </svg>
                        {/* <svg className='x96-logo-colored' width="100" height="40" viewBox="0 0 133 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.0895996H25.4225L38.0696 16.6182L34.5679 21.3607L22.7546 6.13602H11.8903L29.4501 28.8644L10.5564 55.236H3.47603L22.3826 29.2351L0 0.0895996Z" fill="url(#paint0_linear)"/>
                            <path d="M50.3191 0.0895996H57.0275L38.2492 26.4356L60.6831 55.236H35.0682L22.1389 39.0782L25.8073 33.9777L37.7618 49.6498H48.7286L30.8097 26.4356L50.3191 0.0895996Z" fill="url(#paint1_linear)"/>
                            <path d="M66.8014 27.1897H54.7828V31.0886H66.8014V27.1897Z" fill="url(#paint2_linear)"/>
                            <path d="M110.04 17.6279C110.04 20.5553 109.527 23.2142 108.501 25.6046C107.475 27.9951 106.154 30.4239 104.525 32.891L92.5832 50.6596H78.3968L90.7105 33.658L90.8515 33.4535C90.3385 33.6452 89.7741 33.773 89.1456 33.8753C88.5171 33.9648 87.9271 34.0159 87.3627 34.0159C85.1821 34.0159 83.1042 33.6324 81.1546 32.8654C79.2049 32.0984 77.4733 31.0119 75.9854 29.593C74.4975 28.174 73.3046 26.4867 72.4324 24.5053C71.5474 22.5367 71.1113 20.338 71.1113 17.922C71.1113 15.1352 71.6243 12.6297 72.6505 10.3927C73.6766 8.16842 75.0747 6.27652 76.832 4.75533C78.5892 3.23413 80.6672 2.0453 83.0401 1.23996C85.413 0.40906 87.9142 0 90.5694 0C93.263 0 95.8027 0.40906 98.1756 1.2144C100.549 2.03252 102.601 3.19578 104.345 4.72976C106.09 6.26374 107.475 8.11729 108.501 10.3032C109.527 12.4891 110.04 14.9307 110.04 17.6279ZM98.368 17.4873C98.368 15.3525 97.6754 13.5118 96.2901 11.9522C94.9048 10.3927 93.0193 9.61292 90.6335 9.61292C88.2477 9.61292 86.3366 10.3416 84.9128 11.8116C83.489 13.2689 82.7707 15.1864 82.7707 17.564C82.7707 19.7883 83.4762 21.6418 84.8743 23.0991C86.2852 24.5564 88.1451 25.2978 90.4924 25.2978C92.8269 25.2978 94.7252 24.582 96.1746 23.1375C97.6369 21.693 98.368 19.8139 98.368 17.4873Z" fill="url(#paint3_linear)"/>
                            <path d="M133 39.0907C133 41.8774 132.487 44.3829 131.461 46.62C130.435 48.857 129.037 50.7362 127.279 52.2574C125.509 53.7913 123.444 54.9674 121.071 55.7727C118.698 56.5908 116.184 56.9871 113.542 56.9871C110.848 56.9871 108.321 56.5781 105.974 55.7727C103.627 54.9546 101.562 53.7913 99.8045 52.2574C98.0344 50.7234 96.6363 48.8698 95.623 46.6839C94.5969 44.498 94.0838 42.0692 94.0838 39.372C94.0838 36.4446 94.5969 33.7857 95.623 31.3953C96.6492 29.0048 97.9703 26.576 99.5993 24.1089L111.541 6.34033H125.702L113.529 23.2013L113.324 23.5464C113.786 23.3675 114.35 23.2269 115.004 23.1246C115.658 23.0351 116.261 22.984 116.813 22.984C118.955 22.984 121.007 23.3675 122.982 24.1345C124.958 24.9014 126.676 25.988 128.152 27.4069C129.614 28.8259 130.794 30.5132 131.679 32.4946C132.551 34.4888 133 36.6747 133 39.0907ZM121.328 39.372C121.328 37.1477 120.622 35.2941 119.224 33.8369C117.813 32.3796 115.953 31.6382 113.606 31.6382C111.259 31.6382 109.373 32.354 107.924 33.7985C106.474 35.243 105.743 37.1221 105.743 39.4359C105.743 41.5707 106.449 43.4114 107.847 44.9454C109.258 46.4794 111.143 47.2464 113.529 47.2464C115.864 47.2464 117.749 46.5305 119.186 45.086C120.609 43.6415 121.328 41.7368 121.328 39.372Z" fill="url(#paint4_linear)"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="19.0373" y1="-0.224687" x2="19.0373" y2="67.1832" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF55A5"/>
                                    <stop offset="0.1522" stop-color="#E96E00"/>
                                    <stop offset="0.4187" stop-color="#D40047"/>
                                    <stop offset="0.6603" stop-color="#0086AA"/>
                                    <stop offset="0.8433" stop-color="#00FFDE"/>
                                    <stop offset="1" stop-color="#00DEFF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="41.4149" y1="-0.224687" x2="41.4149" y2="67.1832" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFFF00"/>
                                    <stop offset="1" stop-color="#FF892A"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="54.7885" y1="29.1426" x2="66.813" y2="29.1426" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF55A5"/>
                                    <stop offset="1" stop-color="#E96E00"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear" x1="73.6038" y1="7.57664" x2="103.269" y2="41.2212" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFFF00"/>
                                    <stop offset="1" stop-color="#FF892A"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear" x1="113.529" y1="0.138479" x2="113.529" y2="70.7332" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF55A5"/>
                                    <stop offset="0.1558" stop-color="#E96E00"/>
                                    <stop offset="0.3852" stop-color="#D40047"/>
                                    <stop offset="0.585" stop-color="#0086AA"/>
                                    <stop offset="0.863" stop-color="#00FFDE"/>
                                    <stop offset="1" stop-color="#00DEFF"/>
                                </linearGradient>
                            </defs>
                        </svg> */}
                    </div>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-left mt-1">
                        <NavLink
                            to="/"
                            className='nav-link text-white cursor-pointer font-eina-regular'
                            onClick={(e) => window.scrollTo(0, 0)}
                            >
                            Services
                        </NavLink>
                        {
                            props.secondSection ?
                                <Link
                                activeClass="active"
                                to={props.secondSection}
                                spy={true}
                                smooth={true}
                                offset={-30}
                                onClick={() => setExpanded(false)}
                                duration={1500}
                                className='nav-link text-white cursor-pointer font-eina-regular'
                                >
                                    Portfolio
                                </Link>:
                                <HashLink
                                to="/#our-portfolio"
                                elementId="homepage-section-4-main-wrapper"
                                className='nav-link text-white cursor-pointer font-eina-regular'
                                > Portfolio
                                </HashLink>
                        }
                        {
                            props.thirdSection ?
                                <Link
                                activeClass="active"
                                to={props.thirdSection}
                                spy={true}
                                smooth={true}
                                offset={-30}
                                onClick={() => setExpanded(false)}
                                duration={1500}
                                className='nav-link text-white cursor-pointer font-eina-regular'
                                >
                                    Testimonials
                                </Link>:
                                <HashLink
                                to='/#testimonials'
                                elementId="home-testimonial-section"
                                className='nav-link text-white cursor-pointer font-eina-regular'
                                >
                                    Testimonials
                                </HashLink>
                        }
                        <Link
                            activeClass="active"
                            to={props.lastSection}
                            spy={true}
                            smooth={true}
                            offset={-5}
                            onClick={() => setExpanded(false)}
                            duration={1500}
                            className='nav-link text-white cursor-pointer font-eina-regular'
                        >
                            Contact Us
                        </Link>
                    </Nav>
                    <Nav className="ml-auto nav-right d-block d-lg-flex align-items-center">
                        {/* <a
                            href='https://www.xgrid.co/'
                            target='_blank' rel='noopener noreferrer'
                            className='nav-link text-white cursor-pointer font-eina-bold mt-1'
                            >
                            Xgrid
                            <svg className='mx-2 mb-1' width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4492 1.45312C19.2305 0.246094 17.5664 0 15.4219 0H6.42188C4.30078 0 2.63672 0.246094 1.42969 1.45312C0.222656 2.64844 0 4.30078 0 6.42188V15.3516C0 17.5078 0.222656 19.1602 1.42969 20.3555C2.63672 21.5625 4.30078 21.7969 6.44531 21.7969H15.4219C17.5664 21.7969 19.2422 21.5625 20.4492 20.3555C21.6445 19.1484 21.8672 17.5078 21.8672 15.3516V6.45703C21.8672 4.30078 21.6445 2.64844 20.4492 1.45312ZM19.5352 6.12891V15.6797C19.5352 16.8984 19.3828 18 18.7383 18.6445C18.082 19.3008 16.9688 19.4648 15.75 19.4648H6.12891C4.91016 19.4648 3.78516 19.2891 3.14062 18.6445C2.49609 18 2.33203 16.8984 2.33203 15.6797V6.15234C2.33203 4.91016 2.49609 3.79688 3.14062 3.15234C3.78516 2.50781 4.91016 2.34375 6.15234 2.34375H15.75C16.9688 2.34375 18.082 2.50781 18.7383 3.15234C19.3828 3.80859 19.5352 4.91016 19.5352 6.12891ZM14.6016 13.957C15.1875 13.957 15.5625 13.5234 15.5625 12.8906V7.44141C15.5625 6.62109 15.1055 6.25781 14.3672 6.25781H8.89453C8.25 6.25781 7.83984 6.63281 7.83984 7.21875C7.83984 7.81641 8.26172 8.19141 8.90625 8.19141H10.875L12.4688 8.00391L10.7461 9.58594L6.64453 13.6875C6.44531 13.8867 6.30469 14.1562 6.30469 14.4375C6.30469 15.0703 6.75 15.4805 7.34766 15.4805C7.66406 15.4805 7.92188 15.3633 8.14453 15.1523L12.2344 11.0625L13.793 9.36328L13.6289 11.0391V12.9023C13.6289 13.5469 14.0039 13.957 14.6016 13.957Z" fill="white"/>
                            </svg>
                        </a> */}
                        <Button className='navbar-request-demo'  variant="outline-light">Place order</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* TODO: Create component for this */}
            <Modal show={show}>
                <svg onClick={handleClose} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17" fill="white" stroke="white"/>
                    <rect x="12.662" y="11" width="16.8411" height="2.35035" rx="1.17518" transform="rotate(45 12.662 11)" fill="#161822"/>
                    <rect width="16.8411" height="2.35035" rx="1.17518" transform="matrix(-0.707107 0.707107 0.707107 0.707107 22.9084 11)" fill="#161822"/>
                </svg>
                <h2 className="mb-3">Let’s make your brand <br/> the next sensation!</h2>
                <div className="px-5">
                    <HubspotForm
                      portalId='4404057'
                      formId='3a6680fc-dedd-4a5b-837a-51ad89bc3b84'
                      loading={<div>Loading...</div>}
                    />
                </div>
            </Modal>
        </Fragment>
    );
}
 
export default MainNavbar;
