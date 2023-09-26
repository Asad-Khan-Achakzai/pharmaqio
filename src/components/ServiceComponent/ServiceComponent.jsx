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

// React imports
import React, { Fragment } from "react";

// React Bootstrap imports
import { Row, Col } from "react-bootstrap";

// Component imports
import ListComponent from "../ListComponent/ListComponent";
import CarouselComponent from "../Carousel/Carousel";
import ShapesComponent from "../ShapesComponent/ShapesComponent";

// Import styles
import "./ServiceComponent.scss";

function ServiceComponent(props) {
  return (
    <Fragment>
      <Row id={props.serviceId}
           className={`pt-5rem pb-5rem position-relative overflow-hidden ${props.x96ServiceData['containerBgClass']}`}>
        <Col lg={6} className="text-white services-title-and-count pr-lg-4 position-relative">
          <div className="mb-3 d-flex justify-content-lg-end">
            <h2 className="font-4 services-title m-0 initial-opacity-transform">
              {props.x96ServiceData['title']}
            </h2>
          </div>
          <h2 className="font-14 opacity-02 service-counter">
            {props.x96ServiceData['count']}
          </h2>
        </Col>
        <Col lg={6} className="text-white px-4">
          {props.x96ServiceData['paragraphs'].map((para, index) => {
            return (
              <p key={index}
                 className="w-lg-80 initial-opacity-transform">
                {para}
              </p>
            )
          })}
          <p className="initial-opacity-transform">
            {props.x96ServiceData['listTitle']}
          </p>
          <div className="initial-opacity-transform">
            <ListComponent listData={props.x96ServiceData['list']}/>
          </div>
        </Col>
        {props.x96ServiceData['sectionShapes'] && props.x96ServiceData['sectionShapes'].map((sectionShapes, index) => {
          return (
            <ShapesComponent
              shapeClassWithProps={sectionShapes.shapeClasses}
              additionalProperties={sectionShapes.additionalProps}/>
          )
        })}
      </Row>
      <Row className="bg-color-mirage pb-5rem">
        <Col lg={5} className="case-study-title-wrapper text-white mb-4 mb-lg-0 pt-3rem">
          <h2 className="mb-3">
            Case Studies
          </h2>
          {props.x96ServiceData['caseStudies'].map((res, index) => {
            return (
              <p>
                {res.shortDescription}
              </p>
            )
          })}
        </Col>
        <Col lg={7} className="pr-lg-0">
          {/* TODO: Update with cards slider */}
          <ShapesComponent shapeClassWithProps="polygon-shape position-absolute"
                           additionalProperties={{
                             width: '4rem',
                             height: '4rem',
                             transform: 'rotate(-40deg)',
                             background: 'linear-gradient(132.01deg, #FCCA35 4.18%, #FF9901 91.58%)',
                             bottom: '-1rem',
                             left: '0',
                           }
                           }/>
          <div className="z-in">
            <CarouselComponent sliderItems={props.x96ServiceData['caseStudies']} />
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ServiceComponent;
