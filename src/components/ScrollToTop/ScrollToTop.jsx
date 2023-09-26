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
import React, { Component, Fragment } from "react";

// Import styles
import "./ScrollToTop.scss";
export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 700) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
        <Fragment>
            {is_visible && (
                <div className="scroll-to-top d-flex align-items-center justify-content-around" onClick={() => this.scrollToTop()}>
                    <div>
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.91973 0.100586C7.67803 0.100586 7.45566 0.206933 7.27197 0.400293L0.862109 6.81982C0.678417 7.01318 0.591406 7.21621 0.591406 7.44824C0.591406 7.92197 0.939453 8.29902 1.42285 8.29902C1.65488 8.29902 1.88691 8.21201 2.03193 8.05732L4.23623 5.8917L7.2043 2.63359L7.05928 4.97324L7.05928 17.2032C7.05928 17.706 7.41699 18.054 7.91973 18.054C8.42246 18.054 8.78017 17.706 8.78017 17.2032L8.78018 4.97324L8.63516 2.64326L11.6032 5.8917L13.8075 8.05732C13.9622 8.21201 14.1846 8.29902 14.4166 8.29902C14.9 8.29902 15.248 7.92197 15.248 7.44824C15.248 7.21621 15.1707 7.01318 14.958 6.80049L8.56748 0.400293C8.38379 0.206933 8.16143 0.100586 7.91973 0.100586Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            )}
        </Fragment>
    );
  }
}