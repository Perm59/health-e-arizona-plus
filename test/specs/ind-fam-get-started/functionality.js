import { assert } from 'chai';
import sel from '../../selectors/ind-fam-get-started';
import help from '../../helpers';

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

      it('get started link -> ???', function () {
        $(sel.getStartedButton).click();
        let userAgreement
      ??
        = $(sel.userAgreement);
        userAgreement.waitForDisplayed(2000);
      ????
        assert.isTrue(userAgreement.isDisplayed());
      ??
          assert.equal(userAgreement.getText(), dictionary.header.links.userAgreement[language]);
      });
    });
  });
}):