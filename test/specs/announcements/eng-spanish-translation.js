import help from "../../helpers";
import sel from "../../selectors/announcements";
import {assert} from "chai";
import dictionary from "../../dictionary/announcements";

describe('Announcements elements exit eng-esp', function () {

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

      it('title', function () {
        let title = $(sel.title);
        assert.isTrue(title.isDisplayed());
        assert.equal(title.getText(), dictionary.announcements.links.title[language]);
      });

      it('text #1', function () {
        let text1 = $(sel.text1);
        assert.isTrue(text1.isDisplayed());
        assert.equal(text1.getText(), dictionary.announcements.links.text1[language]);
      });

      it('text #2', function () {
        let text2 = $(sel.text2);
        assert.isTrue(text2.isDisplayed());
        assert.equal(text2.getText(), dictionary.announcements.links.text2[language]);
      });

      it('link', function () {
        let link = $(sel.link);
        assert.isTrue(link.isDisplayed());
        assert.equal(link.getText(), dictionary.announcements.links.link[language]);
      });
    });
  });
});
