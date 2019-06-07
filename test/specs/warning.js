import { assert } from 'chai';
import sel from '../selectors/warning';
import help from '../helpers';
import exp from '../expected/warning';
import dictionary from "../dictionary/warning";

describe('Warning', () => {

  describe('General', function () {
    browser.url('/');

    it('Location: languages -> warning -> announcements', function () {
      assert.isTrue(help.vertLocationCheck3Elemets(sel.languagesSection, sel.warningSection, sel.announcementSection));
    });

    it('section width', function () {
      let width = $(sel.warningSection).getCSSProperty('width').parsed.value;
      assert.equal(Math.floor(width), exp.warningSectionWidth);
    });
  });

  describe('English-Spanish Translation', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`text element exist - ${lang}`, function () {
        const language = lang;
        browser.url('/');

        before(() => {
          let langToggle = help.getToggleElement(language);

          langToggle.waitForDisplayed(5000);
          langToggle.click();

          langToggle = help.getToggleElement(language);
          langToggle.waitForDisplayed(5000);
        });

        it('text', function () {
          let text = $(sel.text);
          assert.isTrue(text.isDisplayed());
          assert.equal(text.getText(), dictionary.warning.links.text[language]);
        });
      });
    });
  });

  describe('Design', function () {

    it('text font-size', function () {
      $(sel.text).scrollIntoView();
      assert.equal($(sel.text).getCSSProperty('font-size').value, exp.textFontSize);
    });

    it('text font-color', function () {
      $(sel.text).scrollIntoView();
      assert.equal($(sel.text).getCSSProperty('color').parsed.hex, exp.textFontColor);
    });

    it('text font-family', function () {
      $(sel.text).scrollIntoView();
      assert.equal($(sel.text).getCSSProperty('font-family').value, exp.textFontFamily)
    });

    it('warning background color', function () {
      $(sel.warningSection).scrollIntoView();
      assert.equal($(sel.warningSection).getCSSProperty('background-color').parsed.hex, exp.warningBackgroundColor);
    });
  });
});


