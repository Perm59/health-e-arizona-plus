import help from "../../helpers";
import sel from "../../selectors/header";
import {assert} from "chai";
import dictionary from "../../dictionary/header";

describe('Header Eng-Esp Elements Exist', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`header links - elements exist - ${lang}`, function () {
      const language = lang;
      browser.url('/');

      before(() => {
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });


      it('create account link', function () {
        let createAccountLink = $(sel.createAccountLink);
        assert.isTrue(createAccountLink.isDisplayed());
        assert.equal(createAccountLink.getText(), dictionary.header.links.createAccountLink[language]);
      });

      it('returning user link', function () {
        let returningUserLogInLink = $(sel.returningUserLogInLink);
        assert.isTrue(returningUserLogInLink.isDisplayed());
        assert.equal(returningUserLogInLink.getText(), dictionary.header.links.returningUserLogInLink[language]);
      });

      it('help link', function () {
        let helpLink = $(sel.helpLink);
        assert.isTrue(helpLink.isDisplayed());
        assert.equal(helpLink.getText(), dictionary.header.links.helpLink[language]);
      });

      it('FAQs link', function () {
        let faqsLink = $(sel.faqsLink);
        assert.isTrue(faqsLink.isDisplayed());
        assert.equal(faqsLink.getText(), dictionary.header.links.faqsLink[language]);
      });

      it('English link', function () {
        let englishLink = $(sel.englishLink);
        assert.isTrue(englishLink.isDisplayed());
        assert.equal(englishLink.getText(), dictionary.header.links.englishLink[language]);
      });

      it('Spanish link', function () {
        let spanishLink = $(sel.spanishLink);
        assert.isTrue(spanishLink.isDisplayed());
        assert.equal(spanishLink.getText(), dictionary.header.links.spanishLink[language]);
      });
    });
  });
});