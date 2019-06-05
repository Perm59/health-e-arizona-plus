import { assert } from 'chai';
import sel from '../../selectors/get-started-default-banner';
import dictionary from '../../dictionary/get-started-default-banner';
import help from '../../helpers';

describe('Get Started Default Banner - Eng-Esp Elements Exist', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`ind-fam-get-started - elements exist - ${lang}`, function () {
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
        assert.equal(title.getText(), dictionary.getStartedDefaultBanner.links.title[language]);
      });

      it('text', function () {
        let text = $(sel.text);
        assert.isTrue(text.isDisplayed());
        assert.equal(text.getText(), dictionary.getStartedDefaultBanner.links.text[language]);
      });
    });
  });
});