/**
 * Here you implement your functions you want to use everywhere in your application.
 * See this functions as an example.
 */


const DEBUG = true;

/////////////////////
/// devices helper //
/////////////////////

// < IE9
const isOldBrowser = !(('querySelector' in document) && ('localStorage' in window) && ('addEventListener' in window)),
  // includes tables and smartphones
  isMobile = !isUndefined(window.orientation),
  // smartphone detection (android,iphone,blackberry,windows phone)
  isSmartphone = /android.*mobile|mobile.*android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  // device depending click event
  clickEvent = isMobile ? 'touchstart' : 'click';



///////////////////////
/// helper functions //
///////////////////////

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function isNumeric(number) {
  if(isUndefined(number)){
    return false;
  }

  return !isNaN(number) && isFinite(number);
}

function numberFormat(number) {

  if (!isNumeric(number)) {
    return false;
  }

  return number.toLocaleString('de-DE');
}

// add some classes to the html element
function addHelperClasses() {
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

function log(){
  if(!DEBUG) {
    return false;
  }

  let args = Array.prototype.slice.call(arguments);

  if(args.length === 1){
    args = args[0];
  }

  console.log(args);
}

export default {
  isMobile,
  isSmartphone,
  isOldBrowser,
  clickEvent,
  isUndefined,
  isNumeric,
  numberFormat,
  addHelperClasses,
  log
};
