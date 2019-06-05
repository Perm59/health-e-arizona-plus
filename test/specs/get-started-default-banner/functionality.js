import { assert } from 'chai';
import sel from '../../selectors/get-started-default-banner';
import help from '../../helpers';
import dictionary from "../../dictionary/get-started-default-banner"

describe('Get Started Default Banner Functionality', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`get started redirect - ${lang}`, function () {
      const language = lang;


      beforeEach(() => {
        browser.url('/');
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });

      it('get started link -> Individual & Family', function () {
        if (language === 'english') {
          $(sel.getStartedButtonEng).click();
        }
        if (language === 'spanish'){
          $(sel.getStartedButtonEs).click();
        }
        let needCoverText = $(sel.needCoverText);
        needCoverText.waitForDisplayed(2000);
        assert.isTrue(needCoverText.isDisplayed());
        assert.equal(needCoverText.getText(), dictionary.getStartedDefaultBanner.links.needCoverText[language]);
      });
    });
  });
});