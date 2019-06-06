import help from "../../helpers";
import sel from "../../selectors/warning";
import {assert} from "chai";
import dictionary from "../../dictionary/warning";


describe('Warning - Eng-Esp Elements Exist', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`text - elements exist - ${lang}`, function () {
      const language = lang;
      browser.url('/');

      before(() => {
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });

      it('text', function () {
        let text = $(sel.text);
        assert.isTrue(text.isDisplayed());
        assert.equal(text.getText(), dictionary.warning.links.text[language]);
      });
    });
  });
});