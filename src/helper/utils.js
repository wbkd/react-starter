/**
 * Here you implement your functions you want to use everywhere in your application.
 * See this functions as an example.
 */
const DEBUG = true;

/////////////////////
/// devices helper //
/////////////////////

// < IE9
export const isOldBrowser = !(('querySelector' in document) && ('localStorage' in window) && ('addEventListener' in window));
  // includes tables and smartphones
export const isMobile = !isUndefined(window.orientation);
  // smartphone detection (android,iphone,blackberry,windows phone)
export const isSmartphone = /android.*mobile|mobile.*android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  // device depending click event
export const clickEvent = isMobile ? 'touchstart' : 'click';

export const isDesktop= window.innerWidth > 786;


///////////////////////
/// helper functions //
///////////////////////

export function isUndefined(obj) {
  return typeof obj === 'undefined';
}

export function isNumeric(number) {
  if(isUndefined(number)){
    return false;
  }

  return !isNaN(number) && isFinite(number);
}

export function numberFormat(number) {

  if (!isNumeric(number)) {
    return false;
  }

  return number.toLocaleString('de-DE');
}

// add some classes to the html element
export function addHelperClasses() {
  let htmlElement = document.getElementsByTagName('html')[0],
    className = [];

  if (isOldBrowser) {
    className.push('is-oldbrowser');
  }

  if (isMobile) {
    className.push('is-mobile');
  }

  if (isSmartphone) {
    className.push('is-smartphone');
  }

  htmlElement.className = className.join(' ');
}

export function log(){
  if(!DEBUG) {
    return false;
  }

  let args = Array.prototype.slice.call(arguments);

  if(args.length === 1){
    args = args[0];
  }

  console.log(args);
}
