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
import { Link } from "react-router-dom";

// Bootstrap Imports
import { Container } from 'react-bootstrap';

// Style Imports
import './CaseStudyFooter.scss';
import './responsive.scss';

// Constants Imports
import constants from '../../constants/constants';

const CaseStudyFooter = (props) => {
    return (
        <div id='case-study-footer'>
            <div className='container-880'>
                <div className='content-wrapper'>
                    <div className='mx-3 mx-lg-5'>
                        <div className='case-study-anchor'>
                            <div className='d-flex flex-column align-items-lg-start mb-5 initial-opacity-tradnsform-block mobile-styles-next-case-study'>
                                <Link className='d-flex align-items-center align-items-lg-start' to={props.nextPortfolioUrl ? props.nextPortfolioUrl: '#'}>
                                    <div className='mr-3'>
                                            <img src={constants.ui.images.arrowNextBtn} alt='Arrow Button' />
                                    </div>
                                    <div>
                                        <h4 className='text-white font-eina-semi-bold pt-1 mb-0'>
                                            Visit next case study
                                        </h4>
                                    </div>
                                </Link>
                                { props.content.logoImage && <img src={props.content.logoImage} className="d-block d-lg-none footer-case-study-logo" alt="Logo"/> }
                            </div>
                        </div>
                        <div className='trigger-section-heading-animation'>
                            { props.content.title ?
                            <h2 className='text-white font-eina-semi-bold initial-opacity-transform-block'>
                                {props.content.title}
                            </h2>
                            : null }
                        </div>
                        <div className='trigger-section-items-animation'>
                            <div className='project-details initial-opacity-transform-block'>
                                <div className='d-flex align-items-center first-row-sm-casestudy-footer'>
                                    {
                                        props.content.customerDetails.map(data => (
                                            <Fragment key={data}>
                                                <div>
                                                    <p className='text-white'>{data}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='services-details initial-opacity-transform-block'>
                                <div className='d-flex align-items-center second-row-sm-casestudy-footer'>
                                    {
                                        props.content.services.map(data => (
                                            <Fragment key={data}>
                                                <div>
                                                    <p className='text-white'>{data}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='trigger-section-img-animation'>
                <Container className='px-3 px-lg-5 initial-opacity-transform-block'>
                    <img className='w-100' src={props.imgUrl} alt='Usis' />
                </Container>
            </div>
        </div>
    )
}

export default CaseStudyFooter;
