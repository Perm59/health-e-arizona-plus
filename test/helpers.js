import sel from './selectors/header';

class Helpers {
  static getToggleElement(lang) {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    const id = `#lnk_${capitalize(lang)}`;
    return $(id);
  }

  static getFirstRowElementsHeader() {
    return $$(sel.firstRowAllLinksTag)[0].$$(sel.firstRowLinkTag);
  }

  static getSecondRowElementsHeader() {
    return $$(sel.secondRowAllLinksTag)[1].$$(sel.secondRowLinkTag);
  }

  static getAllLinkElementsFooter() {
    return $$('ul')[2].$$('li');
  }

  //to check if one element (TopEl) is higher vertically than another (BottomEl):
  static vertLocationCheck2Elemets(selectorTopEl, selectorBottomEl){
    const emailLocation = $(selectorTopEl).getLocation('y');
    const errorLocation = $(selectorBottomEl).getLocation('y');
    return (emailLocation < errorLocation);
  }

//to check vertical order of 3 elements (Top, Middle, Bottom):
  static vertLocationCheck3Elemets(selectorTopEl, selectorMiddleEl, selectorBottomEl){
    const topElLocation = $(selectorTopEl).getLocation('y');
    const middleElLocation = $(selectorMiddleEl).getLocation('y');
    const bottomElLocation = $(selectorBottomEl).getLocation('y');
    return (topElLocation < middleElLocation && middleElLocation < bottomElLocation);
  }
}

export default Helpers;