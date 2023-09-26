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
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// React bootstrap imports
import { Button, Form, Row, Col } from "react-bootstrap";

// Component Styles
import "./ContactUsComponent.scss";
import "./responsive.scss";

// Hubspot imports
import HubspotForm from "react-hubspot-form";

class ContactUsComponent extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "43958324",
          formId: "8ffd1f93-e5c1-4477-b91a-bc95e7ead4e8",
          target: "#contact-us-form",
        });
      }
    });
  }
  render() {
    return (
      <Fragment>
        <footer id="form-footer-main-wrapper">
          <div className="container">
            <Row>
              <Col md={6}>
                <div id="footer-heading-wrapper">
                  <h4 className="text-white initial-opacity-transform-block">
                    Let’s
                    <br />
                    get in touch!
                  </h4>
                </div>
                <div className="py-4 d-block d-lg-none">
                  <HubspotForm
                    portalId="43958324"
                    formId="8ffd1f93-e5c1-4477-b91a-bc95e7ead4e8"
                    loading={<div>Loading...</div>}
                  />
                </div>
                <div
                  id="footer-content-sec-1"
                  className="footer-content-section"
                >
                  <div className="initial-opacity-transform-block">
                    <div className="col-heading">
                      <div>
                        <p className="m-0">Explore Pharmaqio</p>
                      </div>
                      <div className="w-75">
                        <div class="separator">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="footer-col-list">
                      <ul>
                        <li>
                          <Link
                            className="text-white"
                            to="/"
                            onClick={(e) => window.scrollTo(0, 0)}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white"
                            to="/services"
                            onClick={(e) => window.scrollTo(0, 0)}
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <HashLink
                            className="text-white"
                            to="/#our-portfolio"
                            elementId="homepage-section-4-main-wrapper"
                          >
                            Portfolio
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="text-white"
                            to="/#testimonials"
                            elementId="home-testimonial-section"
                          >
                            Testimonials
                          </HashLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  id="footer-content-sec-2"
                  className="footer-content-section"
                >
                  <div className="initial-opacity-transform-block">
                    <div className="col-heading">
                      <div>
                        <p className="m-0">Get in touch</p>
                      </div>
                      <div className="w-75">
                        <div class="separator">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="py-3">
                        <p className="m-0 font-eina-semi-bold text-white">
                          <a
                            className="text-white"
                            target="_blank"
                            href="mailto:x96@xgrid.co"
                          >
                            xyz@pharmaqio.co
                          </a>
                        </p>
                      </div>
                      <div className="company-address">
                        <p className="text-white w-50">
                          M/S Pharmaqio, Rawalpindi
                          <br />
                          Office 10 km, Basali Chowk,
                          <br />
                          Chak eli Road, Rawalpindi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="footer-content-sec-3"
                  className="footer-content-section"
                >
                  <div className="initial-opacity-transform-block">
                    <div className="col-heading">
                      <div>
                        <p className="m-0">Follow us at</p>
                      </div>
                      <div className="w-75">
                        <div class="separator">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="w-35 d-flex justify-content-between mobile-styles-social-footer">
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="12"
                            height="20"
                            viewBox="0 0 12 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.2136 11.2364L11.8359 7.62122H7.94515V5.27524C7.94515 4.2862 8.48866 3.32214 10.2312 3.32214H12V0.244235C12 0.244235 10.3949 0 8.86019 0C5.65604 0 3.56167 1.73149 3.56167 4.86597V7.62122H0V11.2364H3.56167V19.9758H7.94515V11.2364H11.2136Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="22"
                            height="19"
                            viewBox="0 0 22 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.8096 4.83474C19.8231 5.02735 19.8231 5.22001 19.8231 5.41262C19.8231 11.2875 15.4287 18.0567 7.39702 18.0567C4.9226 18.0567 2.62399 17.3274 0.69043 16.0617C1.042 16.103 1.38 16.1167 1.74509 16.1167C3.78678 16.1167 5.66628 15.4151 7.16715 14.2181C5.24712 14.1768 3.63807 12.8972 3.08369 11.1361C3.35414 11.1774 3.62454 11.2049 3.90852 11.2049C4.30063 11.2049 4.69277 11.1499 5.05783 11.0536C3.05668 10.6408 1.55576 8.85223 1.55576 6.69215V6.63714C2.13716 6.96734 2.81328 7.17372 3.52986 7.2012C2.3535 6.40319 1.58281 5.04112 1.58281 3.50016C1.58281 2.67466 1.79911 1.91794 2.17774 1.25753C4.32764 3.95419 7.55926 5.71525 11.1829 5.9079C11.1153 5.5777 11.0748 5.23377 11.0748 4.8898C11.0748 2.44076 13.0219 0.445801 15.4422 0.445801C16.6996 0.445801 17.8354 0.982381 18.6332 1.84917C19.6202 1.65656 20.5667 1.28506 21.4051 0.776007C21.0805 1.80792 20.391 2.6747 19.485 3.22501C20.3639 3.12874 21.2158 2.88103 22 2.53711C21.4052 3.41761 20.6614 4.20182 19.8096 4.83474Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a
                          href="https://www.linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.03331 17.2558H0.382203V6.03262H4.03331V17.2558ZM2.20579 4.50168C1.03829 4.50168 0.0913086 3.57861 0.0913086 2.46417C0.0913086 1.92887 0.314084 1.41549 0.710627 1.03697C1.10717 0.65845 1.645 0.445801 2.20579 0.445801C2.76659 0.445801 3.30442 0.65845 3.70096 1.03697C4.0975 1.41549 4.32028 1.92887 4.32028 2.46417C4.32028 3.57861 3.37291 4.50168 2.20579 4.50168ZM17.6983 17.2558H14.055V11.7924C14.055 10.4904 14.0275 8.8206 12.1567 8.8206C10.2584 8.8206 9.96755 10.2352 9.96755 11.6986V17.2558H6.32037V6.03262H9.8221V7.56357H9.87321C10.3606 6.68178 11.5513 5.7512 13.3278 5.7512C17.0229 5.7512 17.7022 8.07388 17.7022 11.0907V17.2558H17.6983Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.52438 18.9998C8.27013 18.9998 7.00607 19.0096 5.75182 18.9998C2.90035 18.9704 0.695606 17.2057 0.117473 14.4998C0.0292828 14.1076 -0.00011376 13.6861 -0.00011376 13.2841C-0.00011376 10.7547 -0.00991263 8.21547 0.0096851 5.68606C0.0292828 2.76449 1.96946 0.509584 4.85032 0.0487993C5.11489 0.00958359 5.39906 -0.000220337 5.67343 -0.000220337C8.20154 -0.000220337 10.7394 -0.0100243 13.2675 -0.000220337C16.5404 0.00958359 18.9803 2.45076 18.9999 5.73508C19.0097 8.26449 19.0097 10.8037 18.9999 13.3331C18.9901 16.4115 16.7363 18.8135 13.6497 18.9704C12.2779 19.039 10.906 18.9802 9.53418 18.9802C9.52438 18.9802 9.52438 18.99 9.52438 18.9998ZM4.86012 9.51939C4.87972 12.1174 6.97668 14.1664 9.56358 14.137C12.0917 14.1076 14.1494 12.0194 14.1494 9.48998C14.1396 6.93115 12.0035 4.8037 9.45579 4.83311C6.90809 4.85272 4.84053 6.97037 4.86012 9.51939ZM16.462 3.96057C16.462 2.99978 15.6291 2.19586 14.659 2.20566C13.6693 2.21547 12.905 2.99978 12.9148 3.99978C12.9246 4.99978 13.7085 5.76449 14.708 5.74488C15.6977 5.73507 16.4718 4.95076 16.462 3.96057Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a
                          href="https://www.youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="26"
                            height="19"
                            viewBox="0 0 26 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.4628 3.20131C25.1671 2.11668 24.296 1.26246 23.1899 0.972568C21.185 0.445801 13.1456 0.445801 13.1456 0.445801C13.1456 0.445801 5.10632 0.445801 3.10139 0.972568C1.99529 1.26251 1.12414 2.11668 0.828469 3.20131C0.29126 5.16726 0.29126 9.26903 0.29126 9.26903C0.29126 9.26903 0.29126 13.3708 0.828469 15.3368C1.12414 16.4214 1.99529 17.24 3.10139 17.5299C5.10632 18.0567 13.1456 18.0567 13.1456 18.0567C13.1456 18.0567 21.1849 18.0567 23.1899 17.5299C24.296 17.24 25.1671 16.4214 25.4628 15.3368C26 13.3708 26 9.26903 26 9.26903C26 9.26903 26 5.16726 25.4628 3.20131ZM10.5163 12.9931V5.54493L17.2356 9.26912L10.5163 12.9931Z"
                              fill="#FEFEFE"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div id='footer-content-sec-4' className="d-block d-md-none mt-3 footer-copy-right pb-3 text-left">
                                <div className='initial-opacity-transform-block'>
                                    <p className="text-white font-eina-bold mb-0">
                                        X-96. An Xgrid Brand.
                                    </p>
                                    <p className="text-white">
                                        <a className='text-white text-underline' href='https://www.xgrid.co/' target='_blank' rel='noopener noreferrer'>Xgrid</a> © 2021. All rights reserved.
                                    </p>
                                </div>
                        </div> */}
              </Col>
              <Col md={6} className="d-none d-lg-block">
                <div className="d-flex flex-column h-100 justify-content-between">
                  <div>
                    {/* <Form>
                                    <Form.Group controlId="formBasicname">
                                    <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Your Email" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={5} placeholder="Message" />
                                    </Form.Group>
                                    <Button className="w-100 btn-linear-gradient" variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Form> */}
                    <div id="contact-us-form"></div>
                  </div>
                  {/* <div id='footer-content-sec-4' className="footer-copy-right pb-3 text-right">
                                <div className='initial-opacity-transform-block'>
                                    <p className="text-white font-eina-bold mb-0">
                                        X-96. An Xgrid Brand.
                                    </p>
                                    <p className="text-white">
                                        <a className='text-white text-underline' href='https://www.xgrid.co/' target='_blank' rel='noopener noreferrer'>Xgrid</a> © 2021. All rights reserved.
                                    </p>
                                </div>
                            </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default ContactUsComponent;
