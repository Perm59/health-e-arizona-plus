
import sel from '../../selectors/header';

class Helpers {

  getToggleElement (lang) {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    const id = `#lnk_${capitalize(lang)}`;
    return $(id);
  }

  liElementsFirstRowArray = $$(sel.firstRowAllLinksTag)[0].$$(sel.firstRowLinkTag);

  liElementsSecondRowArray = $$(sel.secondRowAllLinksTag)[1].$$(sel.secondRowLinkTag);
}

export default new Helpers()