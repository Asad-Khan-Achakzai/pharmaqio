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
// Bootstrap Imports
import {Row, Col, Container, Button} from 'react-bootstrap';
// Constants Imports
import constants from '../../constants/constants';
// Style Imports
import './PageThankYou.scss';
// Component Imports
import MainNavbar from '../../components/Navbar/MainNavbar';
import ContactUsComponent from "../../components/ContactUs/ContactUsComponent";

import animationService from "../../services/AnimationService";

class PageThankYou extends React.Component {
    constructor() {
        super();
        this.state = {
            showLoader: false,
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }

    componentDidMount() {
        // Animates Footer Elements
        animationService.footerElementTransform();
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Thank you</title>
                </Helmet>
                <div className='thankYou-main-wrapper'>
                    <div id='thankYou-menu-main-wrapper'>
                        <MainNavbar lastSection='form-footer-main-wrapper' scrollNavbar={this.state.visible}/>
                    </div>
                    <div className='thankYou-wrapper container d-flex align-items-center vh-100'>
                        <div>
                            <div class='thankYou-image-wrapper'>
                                <img src={constants.ui.images.thankYou}/>
                            </div>
                            <div class='thankYou-content-wrapper'>
                                <h2 className='text-white'>We will be in touch shortly</h2>
                                <Button className='w-25 btn-linear-gradient mt-4' variant="primary">
                                    <a className='text-white' href="/">
                                        Back to Home
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactUsComponent/>
            </Fragment>
        );
    }
}

export default PageThankYou;
