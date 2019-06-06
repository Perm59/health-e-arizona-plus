import help from "../../helpers";
import sel from "../../selectors/questions";
import {assert} from "chai";
import dictionary from "../../dictionary/questions";
import exp from '../../expected/questions';

describe('Questions Functionality', function () {

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

      it('first section link -> Individual or Family Benefit Quick Screener', function () {
        $(sel.firstSectionLink).scrollIntoView();
        $(sel.firstSectionLink).click();
        let quickScreener = $(sel.quickScreener);
        quickScreener.waitForDisplayed(2000);
        assert.isTrue(quickScreener.isDisplayed());
        assert.equal(quickScreener.getText(), dictionary.questions.links.quickScreener[language]);
      });

      it('second section link1 -> Help Center', function () {
        $(sel.secondSectionLink1).scrollIntoView();
        $(sel.secondSectionLink1).click();
        let helpCenter = $(sel.helpCenter);
        helpCenter.waitForDisplayed(2000);
        assert.isTrue(helpCenter.isDisplayed());
        assert.equal(helpCenter.getText(), dictionary.questions.links.helpCenter[language]);
      });

      it('third section link -> Health-e-Arizona PLUS', function () {
        $(sel.thirdSectionLink).scrollIntoView();
        $(sel.thirdSectionLink).click();
        let details = $(sel.details);
        details.waitForDisplayed(2000);
        assert.isTrue(details.isDisplayed());
        assert.equal(details.getText(), dictionary.questions.links.details[language]);
      });

      it('second section link2 -> CMS.gov', function () {
        $(sel.secondSectionLink2).scrollIntoView();
        $(sel.secondSectionLink2).click();
        let actualUrl = browser.getUrl();
        assert.equal(actualUrl, exp.cmsUrl);
      });
    });
  });
});
