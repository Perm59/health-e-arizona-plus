import {assert} from "chai";
import help from "../../helpers";
import sel from "../../selectors/questions";
import dictionary from "../../dictionary/questions";

describe('Questions - Eng-Esp Elements Exist', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`questions - elements exist - ${lang}`, function () {
      const language = lang;
      browser.url('/');

      before(() => {
        let langToggle = help.getToggleElement(language);

        langToggle.waitForDisplayed(5000);
        langToggle.click();

        langToggle = help.getToggleElement(language);
        langToggle.waitForDisplayed(5000);
      });

      it('1st Section text', function () {
        let firstSectionText = $(sel.firstSectionText);
        assert.isTrue(firstSectionText.isDisplayed());
        assert.equal(firstSectionText.getText(), dictionary.questions.links.firstSectionText[language]);
      });

      it('1st Section link', function () {
        let firstSectionLink = $(sel.firstSectionLink);
        assert.isTrue(firstSectionLink.isDisplayed());
        assert.equal(firstSectionLink.getText(), dictionary.questions.links.firstSectionLink[language]);
      });

      it('2nd Section text', function () {
        let secondSectionText = $(sel.secondSectionText);
        assert.isTrue(secondSectionText.isDisplayed());
        assert.equal(secondSectionText.getText(), dictionary.questions.links.secondSectionText[language]);
      });

      it('2nd Section link #1', function () {
        let secondSectionLink1 = $(sel.secondSectionLink1);
        assert.isTrue(secondSectionLink1.isDisplayed());
        assert.equal(secondSectionLink1.getText(), dictionary.questions.links.secondSectionLink1[language]);
      });

      it('2nd Section link #2', function () {
        let secondSectionLink2 = $(sel.secondSectionLink2);
        assert.isTrue(secondSectionLink2.isDisplayed());
        assert.equal(secondSectionLink2.getText(), dictionary.questions.links.secondSectionLink2[language]);
      });

      it('3rd Section text #1', function () {
        let thirdSectionText1 = $(sel.thirdSectionText1);
        assert.isTrue(thirdSectionText1.isDisplayed());
        assert.equal(thirdSectionText1.getText(), dictionary.questions.links.thirdSectionText1[language]);
      });

      it('3rd Section text #2', function () {
        let thirdSectionText2 = $(sel.thirdSectionText2);
        assert.isTrue(thirdSectionText2.isDisplayed());
        assert.equal(thirdSectionText2.getText(), dictionary.questions.links.thirdSectionText2[language]);
      });

      it('3rd Section link', function () {
        let thirdSectionLink = $(sel.thirdSectionLink);
        assert.isTrue(thirdSectionLink.isDisplayed());
        assert.equal(thirdSectionLink.getText(), dictionary.questions.links.thirdSectionLink[language]);
      });
    });
  });
});