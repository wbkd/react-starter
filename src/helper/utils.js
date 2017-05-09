/**
 * Here you implement your functions you want to use everywhere in your application.
 * See this functions as an example.
 */
export const DEBUG = true;

export function log(...args) {
  if (!DEBUG) {
    return false;
  }

  return console.log(args);
}

export function isUndefined(obj) {
  return typeof obj === 'undefined';
}

export function isNumeric(number) {
  if (isUndefined(number)) {
    return false;
  }

  return !isNaN(number) && isFinite(number);
}

/**
 * [numberFormat format number to loacle string]
 * @param  {[type]} number
 * @param  {String} [countyCode='de-De']
 * @param  {Object} [options={}]         [https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString]
 * @return {String}
 */
export function numberFormat(number, countyCode = 'de-De', options = {}) {
  if (!isNumeric(number) || isUndefined(Number.toLocaleString())) {
    return false;
  }

  return number.toLocaleString(countyCode, options);
}

// device helper
// smartphone detection (android,iphone,blackberry,windows phone)
export const isSmartphone = /android.*mobile|mobile.*android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
export const isTablet = !isUndefined(window.orientation) && window.innerWidth === 786;
export const isTouch = !isUndefined(window.orientation);
export const isDesktop = window.innerWidth > 786;


// device depending click event
export const clickEvent = isTouch ? 'touchstart' : 'click';

// ie helper
function detectIE() {
  const ua = window.navigator.userAgent;
  const msIE = ua.indexOf('MSIE ');
  if (msIE > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msIE + 5, ua.indexOf('.', msIE)), 10);
  }

  const trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  const edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  // other browser


  return false;
}

const version = detectIE();
export const isOldIE = version && version < 12;

export default {
  log,
  isUndefined,
  isNumeric,
  numberFormat,
  isSmartphone,
  isTablet,
  isDesktop,
  isTouch,
  clickEvent,
  isOldIE
};
