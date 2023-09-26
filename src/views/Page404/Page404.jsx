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
import './Page404.scss';
// Component Imports
import MainNavbar from '../../components/Navbar/MainNavbar';
import ContactUsComponent from "../../components/ContactUs/ContactUsComponent";

// Animation service
import animationService from "../../services/AnimationService";

class Page404 extends React.Component {
    constructor() {
        super();
        this.state = {
            showLoader: false,
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }

    componentDidMount() {
        animationService.footerElementTransform();
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Page Not Found</title>
                </Helmet>
                <div id='page404-menu-main-wrapper'>
                    <MainNavbar lastSection='form-footer-main-wrapper' scrollNavbar={this.state.visible}/>
                </div>
                <div className='page404-main-wrapper'>
                    <div className='page404-wrapper container d-flex align-items-center vh-100'>
                        <div>
                            <div class='page404-image-wrapper'>
                                <img src={constants.ui.images.image404}/>
                            </div>
                            <div class='page404-content-wrapper'>
                                <h2 className='text-white'>Oh No! This page does not exist</h2>
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
export default Page404;
