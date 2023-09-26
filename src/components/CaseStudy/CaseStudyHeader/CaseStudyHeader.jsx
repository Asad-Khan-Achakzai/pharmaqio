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

import React, { Fragment } from 'react';

// Bootstrap Imports
import { Container } from 'react-bootstrap';

// Constants Imports
import constants from '../../../constants/constants';

// Style Imports
import './CaseStudyHeader.scss';
import './responsive.scss';

const CaseStudyHeader = (props) => {
    return (
        <Fragment>
            <div className='casestudy-header-wrapper'>
                <Container fluid>
                    <div className='d-flex justify-content-center justify-content-lg-between p-lg-5 responsive-styles-case-study-header' id='casestudy-header-content-animate'>
                        <div>
                            {
                                props.leftLogoUrl ? <img src={props.leftLogoUrl} width={props.logoSize ? props.logoSize: '150'} alt='Logo' />: null
                            }
                        </div>
                        <div>
                            {
                                props.rightLogoUrl ? <img src={props.rightLogoUrl} width={props.rightLogoSize ? props.rightLogoSize: '150'} alt='Logo' />: null
                            }
                        </div>
                    </div>
                </Container>
                <div className='container-880'>
                    <div id='casestudy-header-content-animate' className='container-inner-wrapper'>
                        <div className='content-wrapper'>
                            <div>
                                <h1 className='text-white font-eina-semi-bold'>
                                    {props.title}
                                </h1>
                            </div>
                            <div className='project-details'>
                                <div className='d-flex align-items-center'>
                                    {
                                        props.customerEngagement ? props.customerEngagement.customerDetails.map(data => (
                                            <Fragment key={data}>
                                                <div>
                                                <p className='text-white'>{data}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        )): null
                                    }
                                </div>
                            </div>
                            <div className='services-details'>
                                <div className='d-flex align-items-center case-study-engagements-mobile'>
                                    {
                                        props.customerEngagement? props.customerEngagement.service.map(data => (
                                            <Fragment key={data.name}>
                                                <div>
                                                <p className='text-white'>{data.name}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        )): null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default CaseStudyHeader;
