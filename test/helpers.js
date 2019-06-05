import sel from './selectors/header';

class Helpers {
  static getToggleElement(lang) {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    const id = `#lnk_${capitalize(lang)}`;
    return $(id);
  }

  static getFirstRowElements() {
    return $$(sel.firstRowAllLinksTag)[0].$$(sel.firstRowLinkTag);
  }

  static getSecondRowElements() {
    return $$(sel.secondRowAllLinksTag)[1].$$(sel.secondRowLinkTag);
  }

  //to check if one element (TopEl) is higher vertically than another (BottomEl):
  static vertLocationCheck2Elemets(selectorTopEl, selectorBottomEl){
    const emailLocation = $(selectorTopEl).getLocation('y');
    const errorLocation = $(selectorBottomEl).getLocation('y');
    return (emailLocation < errorLocation);
  }

//to check the vertical order of 3 elements (Top, Middle, Bottom):
  static vertLocationCheck3Elemets(selectorTopEl, selectorMiddleEl, selectorBottomEl){
    const topElLocation = $(selectorTopEl).getLocation('y');
    const middleElLocation = $(selectorMiddleEl).getLocation('y');
    const bottomElLocation = $(selectorBottomEl).getLocation('y');
    return (topElLocation < middleElLocation && middleElLocation < bottomElLocation);
  }
  //to check the horizontal order of 3 elements (Top, Middle, Bottom):
  static horizLocationCheck3Elemets(selectorLeftEl, selectorMiddleEl, selectorRightEl){
    const leftElLocation = $(selectorLeftEl).getLocation('x');
    const middleElLocation = $(selectorMiddleEl).getLocation('x');
    const rightElLocation = $(selectorRightEl).getLocation('x');
    return (leftElLocation < middleElLocation && middleElLocation < rightElLocation);
  }
}

export default Helpers;