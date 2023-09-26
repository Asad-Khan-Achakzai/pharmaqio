/**
 Copyright (c) 2020, Xgrid Inc, http://xgrid.co

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

// Import constants
import constants from "./constants/constants";

// Import views
import Home from "./views/Home/Home";
import XGServices from "./views/Services/Services";
import AlkiraPortfolio from "./views/CaseStudies/Alkira/Alkira";
import UsisPortfolio from "./views/CaseStudies/Usis/Usis";
import FibermountainPortfolio from "./views/CaseStudies/Fibermountain/Fibermountain";
import PelPortfolio from "./views/CaseStudies/Pel/Pel";
import PageThankYou from "./views/PageThankYou/PageThankYou";
import Page404 from "./views/Page404/Page404";
const routes = [
  {
    path: `${constants.ui.urls.home}`,
    component: Home,
    name: 'Home',
  },
  {
    path: `${constants.ui.urls.services}`,
    component: XGServices,
    name: 'Services'
  },
  {
    path: `${constants.ui.urls.caseStudies.alkira}`,
    component: AlkiraPortfolio,
    name: 'Alkira Case study'
  },
  {
    path: `${constants.ui.urls.caseStudies.usis}`,
    component: UsisPortfolio,
    name: 'Usis Case study'
  },
  {
    path: `${constants.ui.urls.caseStudies.fibermountain}`,
    component: FibermountainPortfolio,
    name: 'Fibermountain Case study'
  },
  {
    path: `${constants.ui.urls.caseStudies.pel}`,
    component: PelPortfolio,
    name: 'Pel Case study'
  },
  {
    path: `${constants.ui.urls.thankYou}`,
    component: PageThankYou,
    name: 'Thank You page'
  },
  {
    component: Page404,
    name: '404 page'
  }
];

export default routes;
