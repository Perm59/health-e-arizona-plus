import { assert } from 'chai';
import sel from '../../selectors/header';
import help from '../../helpers';
import exp from '../../expected/header';
import dictionary from "../../dictionary/header";

describe('Header Functionality', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`links redirect - ${lang}`, function () {
      const language = lang;


      beforeEach(() => {
        browser.url('/');
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });

      it('create account link -> user agreement', function () {
        $(sel.createAccountLink).click();
        let userAgreement = $(sel.userAgreement);
        userAgreement.waitForDisplayed(2000);
        assert.isTrue(userAgreement.isDisplayed());
        assert.equal(userAgreement.getText(), dictionary.header.links.userAgreement[language]);
      });


      it('returning user log in link -> my account sign in', function () {
        $(sel.returningUserLogInLink).click();
        let userID = $(sel.userID);
        userID.waitForDisplayed(2000);
        assert.isTrue(userID.isDisplayed());
        assert.equal(userID.getText(), dictionary.header.links.userID[language]);
      });

      it('help link -> help center', function () {
        $(sel.helpLink).click();
        let helpCenter = $(sel.helpCenter);
        helpCenter.waitForDisplayed(2000);
        assert.isTrue(helpCenter.isDisplayed());
        assert.equal(helpCenter.getText(), dictionary.header.links.helpCenter[language]);
      });

      it('FAQs link -> FAQs', function () {
        $(sel.faqsLink).click();
        let faqs = $(sel.helpCenter);
        faqs.waitForDisplayed(2000);
        assert.isTrue(faqs.isDisplayed());
        assert.equal(faqs.getText(), dictionary.header.links.faqs[language]);
      });
    });
  });
});