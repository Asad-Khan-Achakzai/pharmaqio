/**
 Copyright (c) 2022, Xgrid Inc, https://xgrid.co

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

// Bootstrap Imports
import  {Row, Col, Button} from 'react-bootstrap';

// Constants Imports
import constants from '../../constants/constants';
import { Link, animateScroll as scroll } from "react-scroll";

// Styles Imports
import './GetInTouchComponent.scss'
import './responsiveness.scss'
import Modal from "react-bootstrap/Modal";
import HubspotForm from "react-hubspot-form";
import ContactUsComponent from '../ContactUs/ContactUsComponent';
import {Routes, Route, useNavigate} from 'react-router-dom';

const GetInTouchComponent = (props) => {
    return (
        <div id='get-in-touch'>
            <div className='container'>
                <Row>
                    <Col md={5} className='d-flex flex-column justify-content-end connect-content-wrapper'>
                        <h4 className='font-eina-semi-bold text-white'>
                            Let’s Make Your Brand the Next Sensation
                        </h4>
                        <p className='text-white'>
                            We have the strategy, tools, and team spirit to make it happen.
                        </p>
                        <Link
                            to={'form-footer-main-wrapper'}
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            className='w-25 btn-linear-gradient'
                            >
                                Talk to Us Now
                            </Link>
                    </Col>
                    <Col md={7} className='d-flex justify-content-center'>
                        <div className='position-absolute git-shape-1'>
                            <img className='shapes-vert-move' width='230' src={constants.ui.images.ellipseShape} alt='Ellipse Shape' />
                        </div>
                        <div className='position-absolute git-shape-3'>
                            <svg className='spin-object' width="151" height="151" viewBox="0 0 151 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g style={{mixBlendMode: Screen}}>
                                    <rect x="0.32959" y="72.4248" width="106.582" height="106.582" transform="rotate(-42.2251 0.32959 72.4248)" fill="#17F0C9"/>
                                </g>
                            </svg>
                        </div>
                        <div className='position-relative git-shape-2'>
                            <svg width="379" height="367" viewBox="0 0 529 529" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g style={{mixBlendMode: 'difference'}}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M134.615 133.621L250.802 528.104L528.831 269.084L134.615 133.621Z" fill="#F54EA2"/>
                                </g>
                            </svg>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default GetInTouchComponent;
