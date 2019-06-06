import help from "../../helpers";
import sel from "../../selectors/languages";
import {assert} from "chai";
import dictionary from "../../dictionary/languages";

describe('Languages Title', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`title exists - ${lang}`, function () {
      const language = lang;
      browser.url('/');

      before(() => {
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });


      it('title', function () {
        let title = $(sel.title);
        assert.isTrue(title.isDisplayed());
        assert.equal(title.getText(), dictionary.languages.links.title[language]);
      });
    });
  });
});
