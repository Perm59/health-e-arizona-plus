import { assert } from 'chai';
import sel from '../../selectors/footer';
import help from '../../helpers';
import dictionary from "../../dictionary/footer";

describe('Footer Functionality', function () {

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
