import { assert } from 'chai';
import sel from '../selectors/languages';
import help from '../helpers';
import exp from '../expected/languages';
import dictionary from "../dictionary/languages";

describe('Languages', () => {

  describe('General', function () {
    browser.url('/');

    it('Location: questions -> languages -> warning', function () {
      assert.isTrue(help.vertLocationCheck3Elemets(sel.questionsSection, sel.languagesSection, sel.warningSection));
    });

    it('section width', function () {
      let width = $(sel.languagesSection).getCSSProperty('width').parsed.value;
      assert.equal(Math.floor(width), exp.languagesSectionWidth);
    });

    it('section background-color', function () {
      assert.equal($(sel.languagesSection).getCSSProperty('background-color').parsed.hex, exp.sectionBackGroundColor);
    });
  });

  describe('English-Spanish Translation', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`title exists - ${lang}`, function () {
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
          assert.equal(title.getText(), dictionary.languages.links.title[language]);
        });
      });
    });
  });

  describe('Design', function () {

    it('all languages link font-size', function () {
      sel.languagesArray.forEach(el => {
        $(el).scrollIntoView();
        assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);
      })
    });

    it('all languages link font-weight', function () {
      sel.languagesArray.forEach(el => {
        $(el).scrollIntoView();
        assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
      })
    });

    it('all languages link font-color', function () {
      sel.languagesArray.forEach(el => {
        $(el).scrollIntoView();
        assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
      })
    });

    it('info message font-size', function () {
      $(sel.languagesArray[0]).scrollIntoView();
      $(sel.languagesArray[0]).click();
      $(sel.message).scrollIntoView();
      $(sel.message).waitForDisplayed(3000);
      assert.equal($(sel.message).getCSSProperty('font-size').value, exp.infMessageFontSize);
    });

    it('info message font-color', function () {
      $(sel.languagesArray[0]).scrollIntoView();
      $(sel.languagesArray[0]).click();
      $(sel.message).scrollIntoView();
      $(sel.message).waitForDisplayed(3000);
      assert.equal($(sel.message).getCSSProperty('color').parsed.hex, exp.infMessageFontColor);
    });

    it('info message font-family', function () {
      $(sel.languagesArray[0]).scrollIntoView();
      $(sel.languagesArray[0]).click();
      $(sel.message).scrollIntoView();
      $(sel.message).waitForDisplayed(3000);
      assert.equal($(sel.message).getCSSProperty('font-family').value, exp.infMessageFontFamily);
    });

    it('info message background-color ', function () {
      $(sel.languagesArray[0]).scrollIntoView();
      $(sel.languagesArray[0]).click();
      $(sel.message).scrollIntoView();
      $(sel.message).waitForDisplayed(3000);
      assert.equal($(sel.message).getCSSProperty('background-color').parsed.hex, exp.infMessageBackgroundColor);
    });

    it('title font-size', function () {
      assert.equal($(sel.title).getCSSProperty('font-size').value, exp.titleFontSize);
    });

    it('title font-weight', function () {
      assert.equal($(sel.title).getCSSProperty('font-weight').value, exp.titleFontWeight);
    });

    it('title font-color', function () {
      assert.equal($(sel.title).getCSSProperty('color').parsed.hex, exp.titleFontColor);
    });

    it('title text-align', function () {
      assert.equal($(sel.title).getCSSProperty('text-align').value, exp.titleTextAlign);
    });
  });

  describe('Functionality', function () {

    it('info message pop-up - all languages', function () {
      sel.languagesArray.forEach((el, index) => {
        $(el).waitForDisplayed(3000);
        $(el).scrollIntoView();
        $(el).click();
        $(sel.message).scrollIntoView();
        $(sel.message).waitForDisplayed(3000);
        assert.equal($(sel.message).getText(), exp.messagesArray[index]);
      })
    });
  });
});