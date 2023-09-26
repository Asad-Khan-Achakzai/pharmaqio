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
import { Container, Row, Col } from "react-bootstrap";

// Import styles
import "./Testimonials.scss";

const Testimonials = (props) => {
  return (
    <Container>
      {/* Testimonials */}
      <Row className="bg-color-mirage pt-5rem" id="clientsTestimonials">
        <Col lg={6} className="mx-auto">
          <div id="trigger-testimonial-text">
            <h2 className="text-white text-center mb-5rem section-text-animation initial-opacity-transform">
              Hear from Our Happy Clients
            </h2>
          </div>
          {props.content.map((tst, index) => {
            return (
              <div
                className="pl-5 mb-5rem position-relative services-testimonial"
                id={tst.id}
                key={index}
              >
                <span className={`testimonial-border ${tst.lineBg}`}></span>
                <p className="text-white">{tst.testimonial}</p>
                <div className="d-flex flex-row client-img-bio-wrapper">
                  <div className="client-avatar">
                    <img
                      src={tst.clientImage}
                      width="110"
                      alt={tst.clientImageAlternative}
                    />
                  </div>
                  <div className="client-bio ml-4 d-flex justify-content-center flex-column">
                    <span className="text-white font-weight-bold">
                      {tst.name}
                    </span>
                    <span className="designation">
                      {tst.designation} - {tst.company}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
