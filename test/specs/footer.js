import sel from "../selectors/footer";
import {assert} from "chai";
import exp from "../expected/footer";
import help from '../helpers';
import dictionary from "../dictionary/footer";

describe('Footer', () => {

  describe('General', () => {
    browser.url('/');

    it('Footer is under logo', function () {
      assert.isTrue(help.vertLocationCheck2Elemets(sel.logo, sel.footerSection));
    });

    it('Location: links -> text', function () {
      assert.isTrue(help.vertLocationCheck2Elemets(sel.allLinks, sel.copyrightsText))
    });

    it('Links are separated by pipe-separator - each (except for last) link has a border on right side)', function () {
      help.getAllLinkElementsFooter().forEach((li, index) => {
        if (index < help.getAllLinkElementsFooter().length - 1) {
          assert.equal(li.getCSSProperty('border-right-width').value, exp.pipeSeparatorWidth)
        } else {
          assert.equal(li.getCSSProperty('border-right-width').value, '0px')
        }
      });
    });
  });

  describe('English-Spanish Translation', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`footer elements exist - ${lang}`, function () {
        const language = lang;
        browser.url('/');

        before(() => {
          let langToggle = help.getToggleElement(language);

          langToggle.waitForDisplayed(5000);
          langToggle.click();

          langToggle = help.getToggleElement(language);
          langToggle.waitForDisplayed(5000);
        });

        it('mission statement link', function () {
          let missionStatementLink = $(sel.missionStatementLink);
          assert.isTrue(missionStatementLink.isDisplayed());
          assert.equal(missionStatementLink.getText(), dictionary.footer.links.missionStatementLink[language]);
        });

        it('non discrimination link', function () {
          let nonDiscriminationLink = $(sel.nonDiscriminationLink);
          assert.isTrue(nonDiscriminationLink.isDisplayed());
          assert.equal(nonDiscriminationLink.getText(), dictionary.footer.links.nonDiscriminationLink[language]);
        });

        it('about arizona health link', function () {
          let aboutLink = $(sel.aboutLink);
          assert.isTrue(aboutLink.isDisplayed());
          assert.equal(aboutLink.getText(), dictionary.footer.links.aboutLink[language]);
        });

        it('faqs link', function () {
          let faqsLink = $(sel.faqsLink);
          assert.isTrue(faqsLink.isDisplayed());
          assert.equal(faqsLink.getText(), dictionary.footer.links.faqsLink[language]);
        });

        it('privacy link', function () {
          let privacyLinkEng = $(sel.privacyLinkEng);
          let privacyLinkEsp = $(sel.privacyLinkEsp);
          if (language === 'english') {
            assert.isTrue(privacyLinkEng.isDisplayed());
            assert.equal(privacyLinkEng.getText(), dictionary.footer.links.privacyLink[language]);
          } else if (language === 'spanish') {
            assert.isTrue(privacyLinkEsp.isDisplayed());
            assert.equal(privacyLinkEsp.getText(), dictionary.footer.links.privacyLink[language]);
          }
        });

        it('copyrights text', function () {
          let copyrightsText = $(sel.copyrightsText);
          assert.isTrue(copyrightsText.isDisplayed());
          assert.equal(copyrightsText.getText(), dictionary.footer.links.copyrightsText[language]);
        });
      });
    });
  });

  describe('Design', () => {

    it('all links font-family', () => {
      $(sel.englishLink).click();
      sel.allLinksArray.forEach(el => {
        $(el).scrollIntoView();
        assert.equal($(el).getCSSProperty('font-family').value, exp.linkFontFamily);
      })
    });

    it('all links font-size', () => {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);
      })
    });

    it('all links font-weight', () => {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
      })
    });

    it('all links font-color', () => {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
      })
    });

    it('all links text-transform', () => {
      sel.allLinksArray.forEach(el => {
        assert.equal($(el).getCSSProperty('text-transform').value, exp.linkTextTransform);
      })
    });

    it('all links underlined hover state', () => {
      sel.allLinksArray.forEach(el => {
        if (browser.capabilities.browserName === 'chrome') {
          $(el).scrollIntoView();
          $(el).moveTo();
          assert.equal($(el).getCSSProperty('text-decoration-line').value, exp.textDecorationLine);
        }
      })
    });

    it('all texts font-family', () => {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-family').value, exp.textFontFamily);
      })
    });

    it('all texts font-size', () => {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);
      })
    });

    it('all texts font-weight', () => {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
      })
    });

    it('all text font-color', () => {
      sel.allTextsArray.forEach(el => {
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
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

        it('mission statement -> mission details', function () {
          $(sel.missionStatementLink).scrollIntoView();
          $(sel.missionStatementLink).click();
          $(sel.missionDetails).waitForDisplayed(3000);
          assert.isTrue($(sel.missionDetails).isDisplayed());
          assert.equal($(sel.missionDetails).getText(), dictionary.footer.links.details[language]);
        });

        it('non-discrimination -> non-discrimination policy details', function () {
          $(sel.nonDiscriminationLink).scrollIntoView();
          $(sel.nonDiscriminationLink).click();
          $(sel.nonDiscriminationDetails).waitForDisplayed(3000);
          assert.isTrue($(sel.nonDiscriminationDetails).isDisplayed());
          assert.equal($(sel.nonDiscriminationDetails).getText(), dictionary.footer.links.details[language]);
        });

        it('about health arizona -> health-e-arizona-plus details', function () {
          $(sel.aboutLink).scrollIntoView();
          $(sel.aboutLink).click();
          $(sel.healthArizonaDetails).waitForDisplayed(3000);
          assert.isTrue($(sel.healthArizonaDetails).isDisplayed());
          assert.equal($(sel.healthArizonaDetails).getText(), dictionary.footer.links.details[language]);
        });

        it('faqs -> faqs details', function () {
          $(sel.faqsLink).scrollIntoView();
          $(sel.faqsLink).click();
          $(sel.faqsIFrame).waitForDisplayed(3000);
          assert.isTrue($(sel.faqsIFrame).isDisplayed());
          assert.equal($(sel.faqsIFrame).getText(), dictionary.footer.links.faqsDetails[language]);
        });

        it('privacy -> privacy details', function () {
          let privacyLinkEng = $(sel.privacyLinkEng);
          let privacyLinkEsp = $(sel.privacyLinkEsp);
          if (language === 'english') {
            privacyLinkEng.scrollIntoView();
            privacyLinkEng.click();
            $(sel.privacyDetails).waitForDisplayed(3000);
            assert.isTrue($(sel.privacyDetails).isDisplayed());
            assert.equal($(sel.privacyDetails).getText(), dictionary.footer.links.details[language]);
          } else if (language === 'spanish') {
            privacyLinkEsp.scrollIntoView();
            privacyLinkEsp.click();
            $(sel.privacyDetails).waitForDisplayed(3000);
            assert.isTrue($(sel.privacyDetails).isDisplayed());
            assert.equal($(sel.privacyDetails).getText(), dictionary.footer.links.details[language]);
          }
        });
      });
    });
  });
});
