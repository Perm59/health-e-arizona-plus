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
}

export default Helpers;