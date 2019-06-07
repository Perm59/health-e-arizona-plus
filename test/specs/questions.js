import { assert } from 'chai';
import sel from '../selectors/questions';
import help from '../helpers';
import exp from '../expected/questions';
import dictionary from "../dictionary/questions";

describe('Questions', () => {

  describe('General', function () {
    browser.url('/');

    it('other options get started -> questions -> languages', function () {
      assert.isTrue(help.vertLocationCheck3Elemets(sel.otherOptionsSection, sel.questionsSection, sel.languagesSection));
    });

    it('section width', function () {
      let width = $(sel.questionsSection).getCSSProperty('width').parsed.value;
      assert.equal(width, exp.questionsSectionWidth);
    });
  });

  describe('English-Sapnish Translation', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`elements exist - ${lang}`, function () {
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

  describe('Design', function () {

    it('all texts font-size', function () {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);
      })
    });

    it('all text font-weight', function () {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
      })
    });

    it('all text font-color', function () {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
      })
    });

    it('all links font-size', function () {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);

      })
    });

    it('all links font-weight', function () {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
      })
    });

    it('all links font-color', function () {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
      })
    });

    it('all links underlined hover state', function () {
      sel.allLinksArray.forEach(el => {
        if (browser.capabilities.browserName === 'chrome') {
          $(el).scrollIntoView();
          $(el).moveTo();
          browser.pause(300);
          assert.equal($(el).getCSSProperty('text-decoration-line').value, exp.linkTextDecorationLine)
        }
      })
    });
  });

  describe('Functionality', function () {

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
});
