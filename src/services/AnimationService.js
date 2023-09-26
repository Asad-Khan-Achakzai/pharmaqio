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

// Scrollmagic and Tweenmax imports
import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, TimelineLite, Linear, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// Registering gsap plugins
gsap.registerPlugin(ScrollTrigger);

// init controller
let controller = new ScrollMagic.Controller();
let tl = new TimelineLite();

/**
 * Function for animating text after trigger the triggerElement, this function is expecting:
 * @param triggerElement
 * @param toggleReference
 * @param start
 * @param end
 */
function transformTextY(triggerElement, toggleReference, start, end) {
  gsap.from(triggerElement, {
    scrollTrigger: {
      trigger: triggerElement,
      start: start,
      scrub: true,
      toggleClass: {
        targets: toggleReference,
        className: 'start-anim-transform-up',
      },
    },
  });
}

/**
 * Function for animating block after trigger the triggerElement, this function is expecting:
 * @param triggerElement
 * @param toggleReference
 * @param offSet
 * @param triggerHook
 */
function transformYBlock(
  triggerElement,
  toggleReference,
  offSet,
  triggerHook,
  toggleClass
) {
  new ScrollMagic.Scene({
    triggerElement: triggerElement,
    offset: offSet,
    triggerHook: triggerHook,
  })
    .setClassToggle(toggleReference, toggleClass)
    .addTo(controller);
}

/**
 * Function is used to animate element in the footer
 */
function footerElementTransform() {
  // Transforming Heading
  transformYBlock(
    '#footer-heading-wrapper',
    '#footer-heading-wrapper .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );

  // Transforming footer elements
  [1, 2, 3, 4].forEach(function (id) {
    transformYBlock(
      `#footer-content-sec-${id}`,
      `#footer-content-sec-${id} .initial-opacity-transform-block`,
      50,
      0.9,
      'start-anim-transform-up'
    );
  });
}

/**
 * Function for creating animations, this function is expecting:
 * @param targetElement
 * @param scrollTriggerVars
 */
function animateTestimonials(
  triggerElement,
  toggleClassReference,
  triggerHook
) {
  new ScrollMagic.Scene({
    triggerElement: triggerElement,
    offset: 0,
    triggerHook: triggerHook,
  })
    .setClassToggle(toggleClassReference, 'testimonials-animation')
    .addTo(controller);
}

/**
 * Function for increasing strokeDasharray and strokeDashoffset
 * @param $el
 * */
function pathPrepare($el) {
  let lineLength = $el.getTotalLength();
  $el.style.strokeDasharray = lineLength;
  $el.style.strokeDashoffset = lineLength;
}

/**
 * Function for moving shapes while scrolling
 * @param className
 * @param trigger
 * @param start
 * @param y
 */
function shapeMovementAnimation(className, triggerElement, start, y) {
  gsap.from(className, {
    scrollTrigger: {
      trigger: triggerElement,
      start: start,
      end: '40%',
      scrub: true,
    },
    y: y,
  });
  gsap.from(className, {
    opacity: 0,
    delay: 1,
  });
}

/**
 * Function for draw SVG path on scroll, also trigger animation from #animationTrigger id
 * @param pathSVG
 * @param processDefineSVG
 * @param processTestSVG
 */
// TODO: Make this function more optimized
function drawSvgPath(pathSVG, processDefineSVG, processTestSVG) {
  let innerWidth = window.innerWidth;
  pathPrepare(pathSVG);
  pathPrepare(processDefineSVG);
  pathPrepare(processTestSVG);

  let scene = new ScrollMagic.Scene({
    triggerElement: '#animationTrigger',
    duration: 200,
    tweenChanges: true,
  })
    .addIndicators()
    .addTo(controller);

  // First process (Process Ideate) Animation
  gsap.from('#processIdeate', {
    scrollTrigger: {
      trigger: '#processIdeate',
      start: '-=190%',
      end: '+=6%',
      scrub: true,
      toggleClass: {
        targets: '.path-icon-ideate',
        className: 'active-animation',
      },
    },
    opacity: 0,
    duration: 3,
  });

  // After first process (Ideate) creating SVG Animation
  gsap.to(pathSVG, {
    scrollTrigger: {
      trigger: '#animationTrigger',
      start: 'top 40%',
      end: '+=200',
      scrub: true,
    },
    duration: 3,
    strokeDashoffset: 0,
    ease: Linear.easeNone,
  });

  ScrollTrigger.create({
    trigger: '#animationTrigger',
    start: 'top top',
    end: '+=400',
    // pin: true,s
  });

  // Second process (Define) Animation
  gsap.from('#processDefine', {
    scrollTrigger: {
      trigger: '#processDefine',
      start: innerWidth > 1020 && innerWidth < 1290 ? '-=300' : '-=110%',
      end: '+=100',
      scrub: true,
      toggleClass: {
        targets: '.path-icon-define',
        className: 'active-animation',
      },
    },
    opacity: 0,
    duration: 3,
  });

  // After second process (Ideate) creating SVG Animation
  gsap.to(processDefineSVG, {
    scrollTrigger: {
      trigger: '#animationTrigger',
      start: '-=5%',
      end: '+=13%',
      scrub: true,
    },
    duration: 3,
    strokeDashoffset: 0,
    ease: Linear.easeNone,
  });

  // 3rd process (prototype) Animation
  gsap.from('#processPrototype', {
    scrollTrigger: {
      trigger: '#processPrototype',
      start: innerWidth > 1020 && innerWidth < 1290 ? '-=170%' : '-=180%',
      end: '+=100',
      scrub: true,
      toggleClass: {
        targets: '.path-icon-prototype',
        className: 'active-animation',
      },
    },
    opacity: 0,
    duration: 3,
  });

  // After 3rd process (prototype) creating SVG Animation
  gsap.to(processTestSVG, {
    scrollTrigger: {
      trigger: '#animationTrigger',
      start: innerWidth > 1430 && innerWidth < 1490 ? '+=5%' : '+=60',
      end: '+=100',
      scrub: true,
    },
    duration: 3,
    strokeDashoffset: 0,
    ease: Linear.easeNone,
  });

  // 4th process (Test) Animation
  gsap.from('#processTest', {
    scrollTrigger: {
      trigger: '#processTest',
      start: innerWidth > 1020 && innerWidth < 1290 ? '-=140%' : '-=140%',
      end: '+=100',
      scrub: true,
      toggleClass: {
        targets: '.path-icon-test',
        className: 'active-animation',
      },
    },
    opacity: 0,
    duration: 3,
  });
}

/**
 * Function for animating text, it's accepting class, y-axis, opacity and delay
 * @param className
 */
function textAnimation(className, y, opacity, delay) {
  gsap.from(className, {
    y: y,
    opacity: opacity,
    delay: delay,
  });
}

/**
 * Function for animating header sections, Design studio, Digital Marketing, Tech writing and web dev
 * Adding delay and animating y
 */
function animationHeader() {
  let animationProps = [
    {
      id: '#designStudio',
      delay: 0.2,
      y: '100%',
    },
    {
      id: '#digitalMarketing',
      delay: 0.3,
      y: '100%',
    },
    {
      id: '#technicalWriting',
      delay: 0.5,
      y: '100%',
    },
    {
      id: '#webDevelopment',
      delay: 0.6,
      y: '100%',
    },
  ];
  animationProps.map((res) => {
    gsap.from(res.id, {
      y: res.y,
      delay: res.delay,
    });
  });
}

/**
 * Animates CaseStudy Header
 * @param {Header's Wrapper ID} sectionWrapperId
 * @param {Main Menu Wrapper ID} mainMenuId
 */
function caseStudyHeaderAnimate(sectionWrapperId, mainMenuId) {
  let animatioCaseStudyHeaderProps = [
    {
      id: '#casestudy-header-content-animate',
      y: '-40%',
      delay: 0,
      duration: 0.8,
      opacity: 0,
    },
    {
      id: sectionWrapperId,
      height: '100vh',
      delay: 0,
      duration: 1,
    },
    {
      id: '#casestudy-main-image-wrapper',
      y: '15%',
      delay: 1.2,
      duration: 0.8,
      opacity: 0,
    },
    {
      id: mainMenuId,
      delay: 2,
      opacity: 0,
      duration: 0.5,
    },
  ];
  animatioCaseStudyHeaderProps.map((res) => {
    gsap.from(res.id, {
      y: res.y,
      delay: res.delay,
      opacity: res.opacity,
      duration: res.duration,
      ease: Linear.easeNone,
      height: res.height,
    });
  });
}

/**
 * Function for changing logo in menu
 * @param triggerElement
 */
function changesNavbarLogo(triggerElement) {
  new ScrollMagic.Scene({
    triggerElement: triggerElement,
  })
    .setClassToggle('#navbar-logo-wrapper', 'd-block-colored-logo')
    .addTo(controller);
}

/**
 * Updates Next CaseStudy section
 */
function animateNextPortfolioIndicator() {
  this.transformYBlock(
    '#case-study-footer',
    '#case-study-footer .case-study-anchor .initial-opacity-transform-block',
    50,
    0.85,
    'start-anim-transform-up'
  );
  this.transformYBlock(
    '#case-study-footer .trigger-section-heading-animation',
    '#case-study-footer .trigger-section-heading-animation .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );
  this.transformYBlock(
    '#case-study-footer .trigger-section-items-animation',
    '#case-study-footer .trigger-section-items-animation .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );
  this.transformYBlock(
    '#case-study-footer .trigger-section-img-animation',
    '#case-study-footer .trigger-section-img-animation .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );
}

/**
 * Animates Component Design 1 Elements
 */
function animatesComponent1Elements() {
  this.transformYBlock(
    '#component-design-1-main-wrapper .content-wrapper-flex-bordered-items',
    '#component-design-1-main-wrapper .services-elements-trigger',
    50,
    0.85,
    'start-anim-transform-up'
  );
  this.transformYBlock(
    '#component-design-1-main-wrapper .design-details-0',
    '#component-design-1-main-wrapper .design-details-0 .initial-opacity-transform-block',
    50,
    0.85,
    'start-anim-transform-up'
  );
  this.transformYBlock(
    '#component-design-1-main-wrapper .design-details-1',
    '#component-design-1-main-wrapper .design-details-1 .initial-opacity-transform-block',
    50,
    0.85,
    'start-anim-transform-up'
  );
}

/**
 * Animates Homepage Portfolio Cards on Hover
 * @param {Element ID} getElementId
 */
function animatesPortfolioCardOnHover(getElementId) {
  tl.to(getElementId, 0, { scale: 0.95 });
  tl.to(`${getElementId} .portfolio-img-wrapper`, 0, { scale: 1.1 });
}

function fadeServicesCardOnHover(cardClass) {
  tl.to('.services-card-wrapper', 0, { opacity: 0.55 });
  tl.to(cardClass, 0, { opacity: 1 });
}

function fadeServicesCardOnHoverOut(getElementId) {
  tl.to('.services-card-wrapper', 0, { opacity: 1 });
}

/**
 * Animates Homepage Portfolio Cards on HoverOut
 * @param {Element ID} getElementId
 */
function animatesPortfolioCardOnHoverOut(getElementId) {
  tl.to(getElementId, 0, { scale: 1 });
  tl.to(`${getElementId} .portfolio-img-wrapper`, 0, { scaleX: 1, scaleY: 1 });
}

/**
 *  Animates Homepage Portfolio Cards onClick
 * @param {Element Event} e
 * @param {Element ID} getElementId
 */
function animatesPortfolioCardOnClick(e, getElementId) {
  gsap.fromTo(
    getElementId,
    { scale: 0.8, duration: 1 },
    { scale: 3, autoAlpha: 0, duration: 0.5 }
  );
  gsap.fromTo(
    `${getElementId} .portfolio-img-wrapper`,
    { scale: 1, duration: 0 },
    { scale: 0.9, autoAlpha: 0, duration: 0 }
  );
  gsap.to(`${getElementId} .portfolio-logo-align-left`, {
    opacity: 0,
    duration: 0,
  });
  gsap.to(`${getElementId} .portfolio-logo-align-right`, {
    opacity: 0,
    duration: 0,
  });
}

// TODO : Will update later
function animatesVideoSectionfm(parentID) {
  new ScrollMagic.Scene({
    triggerElement: '.' + parentID + ' ' + '#video-component-wrapper',
    duration: 800, // scroll distance
    triggerHook: 0,
  })
    .setPin(
      '.' +
        parentID +
        ' ' +
        '#video-component-wrapper .video-section-inner-wrapper'
    )
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '.' + parentID + ' ' + '#video-component-wrapper',
    offset: 400, // start this scene after scrolling for 50px
    duration: 500, // scroll distance
    triggerHook: 0.3,
  })
    .setTween(
      '.' + parentID + ' ' + '#video-component-wrapper .overlay-black',
      {
        opacity: 1,
      }
    )
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '.' + parentID + ' ' + '#video-component-wrapper',
    duration: 150, // scroll distance
    offset: 400, // start this scene after scrolling for 50px
    triggerHook: 0.7,
  })
    .setTween(
      '.' + parentID + ' ' + '#video-component-wrapper .video-content-wrapper',
      {
        opacity: 1,
        y: 0,
      }
    )
    .addTo(controller);
}

/**
 * Animates Video Section
 */
function animatesVideoSection(parentID) {
  console.log(
    'animate',
    '#' + parentID + ' ' + '#video-component-wrapper .video-content-wrapper'
  );
  new ScrollMagic.Scene({
    triggerElement: '#' + parentID + ' ' + '#video-component-wrapper',
    duration: 800, // scroll distance
    triggerHook: 0,
  })
    .setPin(
      '#' +
        parentID +
        ' ' +
        '#video-component-wrapper .video-section-inner-wrapper'
    )
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '#' + parentID + ' ' + '#video-component-wrapper',
    offset: 400, // start this scene after scrolling for 50px
    duration: 500, // scroll distance
    triggerHook: 0.3,
  })
    .setTween(
      '#' + parentID + ' ' + '#video-component-wrapper .overlay-black',
      {
        opacity: 1,
      }
    )
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '#' + parentID + ' ' + '#video-component-wrapper',
    duration: 100, // scroll distance
    offset: 400, // start this scene after scrolling for 50px
    triggerHook: 0.7,
  })
    .setTween(
      '#' + parentID + ' ' + '#video-component-wrapper .video-content-wrapper',
      {
        opacity: 1,
        y: 0,
      }
    )
    .addTo(controller);
}

const animations = {
  changesNavbarLogo,
  transformTextY,
  transformYBlock,
  animateTestimonials,
  shapeMovementAnimation,
  drawSvgPath,
  textAnimation,
  animationHeader,
  footerElementTransform,
  caseStudyHeaderAnimate,
  animateNextPortfolioIndicator,
  animatesComponent1Elements,
  animatesPortfolioCardOnHover,
  animatesPortfolioCardOnHoverOut,
  animatesPortfolioCardOnClick,
  animatesVideoSection,
  animatesVideoSectionfm,
  fadeServicesCardOnHover,
  fadeServicesCardOnHoverOut,
};
export default animations;
