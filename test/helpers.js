
class Helpers {

  getToggleElement (lang) {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    const id = `#lnk_${capitalize(lang)}`;
    return $(id);
  }
}

export default new Helpers()