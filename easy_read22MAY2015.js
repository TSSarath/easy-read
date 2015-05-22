/**
* Easy_Read makes it easy to read web pages for a long time by making
* them appear dark.
* @Author Rudhin
*/
/**
* Returns true if the element is meant to be turned dark.
*/
function isTextProcessable(tagName) {
  //alert(tagName);
  var elements = [
    'HEADER',
    'CODE',
    'TEXTAREA',
    'SECTION',
    'ARTICLE',
    'LI',
    'DL',
    'DT',
    'DD',
    'SPAN',
    'DIV',
    'P',
    'A',
    'INPUT',
    'PRE',
    'HTML',
    'BODY',
    'OL',
    'UL'
  ];
  var i;
  for (i in elements) {
    if (tagName == elements[i])
    return true;
  }
  return false;
}
function isBgProcessable(tagName) {
  //alert(tagName);
  var elements = [
    'HEADER',
    'CODE',
    'TEXTAREA',
    'SECTION',
    'ARTICLE',
    'LI',
    'DL',
    'DT',
    'DD',
    'SPAN',
    'DIV',
    'P',
    'A',
    'INPUT',
    'PRE',
    'HTML',
    'BODY',
    'OL',
    'UL',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'TH',
    'TD'
  ];
  var i;
  for (i in elements) {
    if (tagName == elements[i])
    return true;
  }
  return false;
}
/**
* Returns true if the element is meant to be turned dark.
*/

function isHeadings(tagName) {
  //alert(tagName);
  var elements = [
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'TH',
    'TD'
  ];
  var i;
  for (i in elements) {
    if (tagName == elements[i])
    return true;
  }
  return false;
}
function anchorConvertor(items) {
  var i;
  for (i = 0; i < items.length; ++i) {
    if (items[i].tagName == 'A') {
      //alert("found" + text[i]);
      items[i].style.color = '#31B404';
    }
  }
}
function headingConvertor(items) {
  var i;
  for (i = 0; i < items.length; ++i) {
    if (isHeadings(items[i].tagName)) {
      //alert("found" + text[i]);
      items[i].style.color = '#F78181';
    }
  }
}
function codeColorConvertor() {
  //alert("YUP");
  var i;
  var keywords = document.getElementsByClassName('kwd');
  //alert(keywords.length);
  for (i = 0; i < keywords.length; ++i) {
    //alert(keywords[i].innerHTML);        
    keywords[i].style.color = '#FAAC58';
  }
  var types = document.getElementsByClassName('typ');
  for (i = 0; i < types.length; ++i) {
    types[i].style.color = '#2ECCFA';
  }
  var puncs = document.getElementsByClassName('pun');
  for (i = 0; i < puncs.length; ++i) {
    puncs[i].style.color = '#AEB404';
  }
  var plains = document.getElementsByClassName('pln');
  for (i = 0; i < plains.length; ++i) {
    plains[i].style.color = '#01DF74';
  }
  var comms = document.getElementsByClassName('com');
  for (i = 0; i < comms.length; ++i) {
    comms[i].style.color = '#A4A4A4';
  }
  var strs = document.getElementsByClassName('str');
  for (i = 0; i < strs.length; ++i) {
    strs[i].style.color = '#F7819F';
  }
  var lits = document.getElementsByClassName('lit');
  for (i = 0; i < lits.length; ++i) {
    lits[i].style.color = '#81BEF7';
  }
}
/**
* All texts appear white in color.
*/

function darkToLightFontConvertor(text) {
  var i;
  for (i = 0; i < text.length; ++i) {
    if (isTextProcessable(text[i].tagName)) {
      //alert("found" + text[i]);
      text[i].style.color = '#BDBDBD';
    }
  }
}
/**
* Turns light background colors to black.
*/

function lightToDarkBgConvertor(items) {
  var i;
  for (i = 0; i < items.length; ++i) {
    if (isBgProcessable(items[i].tagName)) {
      //alert("found" + text[i]);
      items[i].style.background = 'none';
      items[i].style.backgroundColor = 'black';
    }
  }
}
/**
* Color complementing engine.
* All background colors are complemented.
*/

function complementElementBg(divs) {
  var i;
  for (i = 0; i < divs.length; ++i) {
    var t = divs[i].style.backgroundColor;
    var s = String(t);
    var rgb = s.substring(s.indexOf('(') + 1, s.indexOf(')'));
    var srgb = rgb.split(',');
    var x = parseInt(srgb[0]) - 255;
    if (x < 0) {
      x = x * ( - 1);
    }
    var y = parseInt(srgb[1]) - 255;
    if (y < 0) {
      y = y * ( - 1);
    }
    var z = parseInt(srgb[2]) - 255;
    if (z < 0) {
      z = z * ( - 1);
    }
    var crgb = 'rgb(' + x + ',' + y + ',' + z + ')';
    divs[i].style.backgroundColor = crgb;
  }
}
/**
* Main method,
* Everything starts here.
*/

function easyRead() {
  items = document.getElementsByTagName('*');
  darkToLightFontConvertor(items);
  lightToDarkBgConvertor(items);
  headingConvertor(items);
  anchorConvertor(items);
  codeColorConvertor();  
}
// makes the js run once the page is loaded.

window.onload = easyRead();