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
import React, {Fragment} from "react";

/**
 * Functional component for creating list
 * @param props
 * @returns {*}
 * @constructor
 */
function ListComponent(props) {
  const svgFill1 = props.listData['listStyleColors'].svgFill1;
  const svgFill2 = props.listData['listStyleColors'].svgFill2;
  return (
    <Fragment>
      <div className="font-weight-bold w-lg-80">
        {props.listData['listItems'].map((list, index) => {
          return (
            <div className="d-flex flex-row"
                 key={index}>
              <div>
                <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.9987 10.5969L12.8481 5.38531L1.57397 16.8218C-0.51489 18.9354 -0.51489 22.323 1.57397 24.4365C2.60409 25.4789 3.97758 26 5.35107 26C6.72457 26 8.06945 25.4789 9.12818 24.4365L18.0559 15.4031C18.6568 14.7951 19.0288 13.9265 19.0288 13C19.0002 12.0735 18.6282 11.2049 17.9987 10.5969Z"
                    fill={svgFill1}/>
                  <path
                    d="M17.9985 10.5969L9.0994 1.56346C7.01054 -0.550125 3.66265 -0.550125 1.5738 1.56346C0.51506 2.63473 0 3.99553 0 5.38529C0 6.77504 0.51506 8.13584 1.54518 9.20711L12.8479 20.6436L17.9985 15.4321C18.5994 14.824 18.9714 13.9554 18.9714 13.0289C19 12.0735 18.628 11.2049 17.9985 10.5969Z"
                    fill={svgFill2}/>
                  <path opacity="0.4" d="M12.8478 20.6147L12.6189 20.8753L2.5752 15.7795L5.32218 13L12.8478 20.6147Z"
                        fill="#050505"/>
                </svg>
              </div>
              <div className="mb-4 ml-2">{list}</div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

export default ListComponent;
