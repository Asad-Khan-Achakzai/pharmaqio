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

// Style Imports
import './ComponentDesign2.scss';

const ComponentDesign2 = (props) => {
    return(
        <div id='component-design-2-main-wrapper' className='component-design-2-main-wrapper overflow-hidden'>
            <div className='bg-fm-red'>
                <div className='container-880'>
                    <div className='content-wrapper-flex-bordered-items'>
                        <div className='services-elements-trigger initial-opacity-transform-block'>
                            <div>
                                {
                                    props.content ?
                                    <h2 className='text-white'>{props.content.title}</h2>
                                    : null
                                }
                            </div>
                            <div className='design-services'>
                                <div className='d-flex align-items-center mx-lg-5 design-types-component-design2'>
                                    {
                                        props.content ?
                                        props.content.services.map(items => (
                                            <Fragment key={items}>
                                                <div>
                                                    <p>{items}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        ))
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='design-details design-details-0'>
                            <div className='d-flex mt-4 justify-content-between initial-opacity-transform-block'>
                                <div className='details'>
                                    {
                                        props.content ?
                                        <Fragment>
                                            <h4 className='text-white font-eina-semi-bold'>
                                                {props.content.heading}
                                            </h4>
                                            <p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                props.imageUrl ?
                <div className='bg-color-mirage component2-img-wrapper'>
                    <div className='d-flex justify-content-center'>
                        <div className='img-wrapper text-center initial-opacity-transform-block'>
                            <img className='w-100' src={props.imageUrl} alt='Xgrid Porfolio' />
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    );
}

export default ComponentDesign2;
