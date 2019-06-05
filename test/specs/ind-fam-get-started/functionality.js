import { assert } from 'chai';
import sel from '../../selectors/ind-fam-get-started';
import help from '../../helpers';
import dictionary from "../../dictionary/ind-fam-get-started"

describe('Ind-Fam Get Started Functionality', function () {

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
        assert.equal(needCoverText.getText(), dictionary.indFamGetStarted.links.needCoverText[language]);
      });
    });
  });
});