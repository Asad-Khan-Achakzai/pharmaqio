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

// Bootstrap Imports
import { Navbar, Nav, Container } from 'react-bootstrap';

// Smooth Scroll Imports
import { Link, animateScroll as scroll } from "react-scroll";

// Style imports
import './CaseStudyMenu.scss';

const CaseStudyMenu = (props) => {
    return (
        <Navbar className={`submenu-casestudy-wrapper pt-1 pb-0 d-none d-lg-block nav--top subnav--top ${props.bgColor}`}>
            <div className='position-relative'>
                <Container>
                    <div className='d-flex w-100 justify-content-end align-items-center'>
                        <div className='d-flex submenu-heading-wrapper align-items-center'>
                            <div>
                                <a href='/'>
                                    <svg width="60" height="24" viewBox="0 0 43 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path d="M0 0.0302734H8.21931L12.3082 5.5398L11.1761 7.12065L7.35674 2.04575H3.84425L9.52146 9.62189L3.41296 18.4124H1.12383L7.23647 9.74546L0 0.0302734Z" fill="white"/>
                                        <path d="M16.2686 0.0302734H18.4375L12.3663 8.81229L19.6194 18.4124H11.3379L7.15771 13.0265L8.34375 11.3263L12.2087 16.5503H15.7544L9.96107 8.81229L16.2686 0.0302734Z" fill="white"/>
                                        <path d="M21.5974 9.06348H17.7117V10.3631H21.5974V9.06348Z" fill="white"/>
                                        <path d="M35.577 5.87598C35.577 6.85176 35.4111 7.73806 35.0793 8.53487C34.7476 9.33169 34.3204 10.1413 33.7938 10.9637L29.9329 16.8865H25.3464L29.3275 11.2193L29.3731 11.1512C29.2072 11.2151 29.0248 11.2577 28.8216 11.2918C28.6183 11.3216 28.4276 11.3386 28.2451 11.3386C27.5401 11.3386 26.8683 11.2108 26.238 10.9551C25.6076 10.6995 25.0478 10.3373 24.5668 9.86432C24.0857 9.39134 23.7 8.82889 23.418 8.16842C23.1319 7.51222 22.9909 6.77932 22.9909 5.97398C22.9909 5.04508 23.1568 4.20991 23.4885 3.46423C23.8203 2.72281 24.2723 2.09217 24.8405 1.58511C25.4086 1.07804 26.0804 0.681767 26.8476 0.413321C27.6148 0.136353 28.4234 0 29.2819 0C30.1527 0 30.9738 0.136353 31.741 0.404799C32.5082 0.677506 33.1717 1.06526 33.7357 1.57659C34.2997 2.08791 34.7476 2.70576 35.0793 3.4344C35.4111 4.16304 35.577 4.9769 35.577 5.87598ZM31.8032 5.82911C31.8032 5.11752 31.5793 4.50392 31.1314 3.98408C30.6835 3.46423 30.0739 3.20431 29.3026 3.20431C28.5313 3.20431 27.9134 3.44719 27.453 3.93721C26.9927 4.42296 26.7605 5.06212 26.7605 5.85468C26.7605 6.5961 26.9886 7.21395 27.4406 7.69971C27.8968 8.18547 28.4981 8.43261 29.257 8.43261C30.0117 8.43261 30.6255 8.19399 31.0941 7.71249C31.5668 7.23099 31.8032 6.60462 31.8032 5.82911Z" fill="white"/>
                                        <path d="M43 13.0291C43 13.958 42.8341 14.7932 42.5024 15.5389C42.1706 16.2845 41.7186 16.9109 41.1505 17.418C40.5782 17.9293 39.9105 18.3213 39.1433 18.5898C38.3761 18.8625 37.5633 18.9946 36.7091 18.9946C35.8382 18.9946 35.0212 18.8582 34.2623 18.5898C33.5034 18.3171 32.8358 17.9293 32.2676 17.418C31.6954 16.9067 31.2433 16.2888 30.9157 15.5602C30.584 14.8315 30.4181 14.0219 30.4181 13.1228C30.4181 12.1471 30.584 11.2608 30.9157 10.464C31.2475 9.66714 31.6746 8.85754 32.2013 8.03516L36.0621 2.1123H40.6404L36.7049 7.73262L36.6386 7.84767C36.7878 7.78802 36.9703 7.74114 37.1818 7.70706C37.3933 7.67723 37.5882 7.66019 37.7665 7.66019C38.4591 7.66019 39.1226 7.78802 39.7612 8.04368C40.3999 8.29934 40.9556 8.66153 41.4325 9.13451C41.9052 9.60748 42.2867 10.1699 42.5729 10.8304C42.8549 11.4951 43 12.2238 43 13.0291ZM39.2263 13.1228C39.2263 12.3814 38.9982 11.7636 38.5462 11.2778C38.09 10.7921 37.4887 10.5449 36.7298 10.5449C35.9709 10.5449 35.3613 10.7835 34.8927 11.265C34.4241 11.7465 34.1877 12.3729 34.1877 13.1441C34.1877 13.8557 34.4158 14.4693 34.8678 14.9807C35.324 15.492 35.9336 15.7476 36.7049 15.7476C37.4597 15.7476 38.0693 15.509 38.5337 15.0275C38.994 14.546 39.2263 13.9111 39.2263 13.1228Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="43" height="19" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <p className='mb-0 text-white font-eina-semi-bold'>{props.title}</p>
                            </div>
                        </div>
                        {
                            props.navList ?
                                <div className='submenu-navlist-wrapper font-eina-semi-bold'>
                                <ul className='nav navbar-nav list-inline text-white'>
                                    <li className='cursor-pointer font-eina-semi-bold'>
                                        <Link
                                            activeClass="active"
                                            to={props.navList[0].anchor}
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                            className='nav-link font-eina-semi-bold px-0'
                                        >
                                        {props.navList[0].name}
                                        </Link>
                                    </li>
                                    {
                                        props.navList.slice(1).map((list, index) => (
                                            <Fragment key={index}>
                                                <li className='cursor-pointer font-eina-semi-bold'>
                                                    <Link
                                                            activeClass="active"
                                                            to={list.anchor}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-30}
                                                            duration={500}
                                                            className='nav-link font-eina-semi-bold px-0'
                                                        >
                                                        {list.name}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        ))
                                    }
                                </ul>
                            </div>
                            :
                            null
                        }
                    </div>
                </Container>
            </div>
        </Navbar>
    );
}

export default CaseStudyMenu;
