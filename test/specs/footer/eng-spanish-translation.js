import help from "../../helpers";
import sel from "../../selectors/footer";
import {assert} from "chai";
import dictionary from "../../dictionary/footer";

describe('Footer Eng-Esp Elements Exist', function () {

  ['english', 'spanish'].forEach(lang => {

    describe(`footer elements exists - ${lang}`, function () {
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
        }
        else if (language === 'spanish') {
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
