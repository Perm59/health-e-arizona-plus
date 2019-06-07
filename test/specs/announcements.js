import { assert } from 'chai';
import sel from '../selectors/announcements';
import help from '../helpers';
import exp from '../expected/announcements';
import dictionary from "../dictionary/announcements";

describe('Announcements', () => {

  describe('General', function () {
    browser.url('/');

    it('Location: warning -> announcements -> logo', function () {
      $(sel.announcementSection).scrollIntoView();
      assert.isTrue(help.vertLocationCheck3Elemets(sel.warningSection, sel.announcementSection, sel.logo));
    });

    it('section width', function () {
      let width = $(sel.announcementSection).getCSSProperty('width').parsed.value;
      assert.equal(width, exp.announcementSectionWidth);
    });
    it('section background-color', function () {
      assert.equal($(sel.announcementSection).getCSSProperty('background-color').parsed.hex, exp.sectionBackgroundColor);
    });
  });

  describe('English-Spanish Translation', function () {

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

  describe('Design', function () {

    it('all text/link font-size', function () {
      sel.allTextLinkArray.forEach(el => {
        $(el).scrollIntoView();
        assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);
      })
    });

    it('all text/link font-family', function () {
      sel.allTextLinkArray.forEach(el => {
        $(el).scrollIntoView();
        assert.equal($(el).getCSSProperty('font-family').value, exp.textFontFamily);
      })
    });

    it('all text/link font-weight', function () {
      sel.allTextLinkArray.forEach(el => {
        $(el).scrollIntoView();
        assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
      })
    });

    it('all text/link font-color', function () {
      sel.allTextLinkArray.forEach((el, index) => {
        $(el).scrollIntoView();
        if (index < 2) {
          assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
        } else {
          assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
        }
      })
    });

    it('title font-color', function () {
      $(sel.title).scrollIntoView();
      assert.equal($(sel.title).getCSSProperty('color').parsed.hex, exp.titleFontColor);
    });

    it('title font-family', function () {
      $(sel.title).scrollIntoView();
      assert.equal($(sel.title).getCSSProperty('font-family').value, exp.titleFontFamily)
    });

    it('title font-weight', function () {
      $(sel.title).scrollIntoView();
      assert.equal($(sel.title).getCSSProperty('font-weight').value, exp.titleFontWeight)
    });

    it('title font-size', function () {
      $(sel.title).scrollIntoView();
      assert.equal($(sel.title).getCSSProperty('font-size').value, exp.titleFontSize)
    });

    it('title text-transform', function () {
      $(sel.title).scrollIntoView();
      assert.equal($(sel.title).getCSSProperty('text-transform').value, exp.titleTextTransform);
    });
  });

  describe('Functionality', () => {

    it('link redirect', () => {
      $(sel.link).scrollIntoView();
      $(sel.link).click();
      let actualUrl = browser.getUrl();
      assert(actualUrl, exp.redirectUrl)
    });
  });
});
