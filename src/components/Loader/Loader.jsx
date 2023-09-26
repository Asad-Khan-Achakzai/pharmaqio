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
import  { Container } from 'react-bootstrap';

// Styles Imports
import './Loader.scss';

const Loader = (props) => {
    return (
            <div id='loader-main-wrapper'>
                <div className='position-relative vh-100'>
                    <div className='content-wrapper w-100 h-100'>
                        <Container fluid className='position-absolute'>
                            <div className='d-flex justify-content-center align-items-center p-5'>
                                <div>
                                    <img src={props.logo} width={props.logoSize ? props.logoSize: '150'} alt='Logo' />
                                </div>
                            </div>
                        </Container>
                        <div className='d-flex justify-content-center h-100 align-items-center'>
                            <h5 class="text-white text-center line-height-1">{props.heading}, <br />{props.blurb}</h5>
                        </div>
                    </div>
                    <div className={'loader-animation ' + props.backgroundColor}></div>
                </div>
            </div>
    );
}

export default Loader;
