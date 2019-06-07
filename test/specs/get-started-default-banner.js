import { assert } from 'chai';
import sel from '../selectors/get-started-default-banner';
import help from '../helpers';
import exp from '../expected/get-started-default-banner';
import dictionary from "../dictionary/get-started-default-banner";


describe('Get Started Default Banner', () => {

  describe('General', function () {
    browser.url('/');

    it('section is under header', function () {
      assert.isTrue(help.vertLocationCheck2Elemets(sel.header, sel.getStartedDefaultBanner));
    });

    it('left side width', function () {
      let leftSideImageWidth = $(sel.leftSide).getCSSProperty('width').parsed.value;
      assert.equal(Math.ceil(leftSideImageWidth), exp.leftSideImageWidth);
    });

    it('right side width', function () {
      let rightSideWidth = $(sel.rightSide).getCSSProperty('width').parsed.value;
      assert.equal(Math.floor(rightSideWidth), exp.rightSideWidth);
    });

    it('left side image source URL', function () {
      browser.url('/Default/images/First_a.jpg');
      assert.isTrue($(sel.leftSideImg).isDisplayed());
    });

    it('get started image source URL - English', function () {
      browser.url('/Default/images/get_started.png');
      assert.isTrue($(sel.getStartedImgEng).isDisplayed());
    });

    it('get started image source URL - Spanish', function () {
      browser.url('/Default/images/get_started_ES.png');
      assert.isTrue($(sel.getStartedImgEs).isDisplayed());
    });

    it('title-> text -> get started button - vertical location from top to bottom', function () {
      browser.url('/');
      assert.isTrue(help.vertLocationCheck3Elemets(sel.title, sel.text, sel.getStartedButtonEng));
    });
  });

  describe('English-Spanish Translation', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`elements exist - ${lang}`, function () {
        const language = lang;

        beforeEach(() => {
          browser.url('/');
          let langToggle = help.getToggleElement(language);

          langToggle.waitForDisplayed(5000);
          langToggle.click();

          langToggle = help.getToggleElement(language);
          langToggle.waitForDisplayed(5000);
        });


        it('title', function () {
          let title = $(sel.title);
          assert.isTrue(title.isDisplayed());
          assert.equal(title.getText(), dictionary.getStartedDefaultBanner.links.title[language]);
        });

        it('text', function () {
          let text = $(sel.text);
          assert.isTrue(text.isDisplayed());
          assert.equal(text.getText(), dictionary.getStartedDefaultBanner.links.text[language]);
        });
      });
    });
  });

// Get Started button eng-spanish text - see in images (screenshots)

  describe('Design', () => {

      it('title text-align', function () {
        assert.equal($(sel.title).getCSSProperty('text-align').value, exp.titleTextAlign);
      });

      it('title font-size', function () {
        assert.equal($(sel.title).getCSSProperty('font-size').value, exp.titleFontSize);
      });

      it('title font-weight', function () {
        assert.equal($(sel.title).getCSSProperty('font-weight').value, exp.titleFontWeight);
      });

      it('title font-family', function () {
        assert.equal($(sel.title).getCSSProperty('font-family').value, exp.titleFontFamily);
      });

      it('title font-color', function () {
        assert.equal($(sel.title).getCSSProperty('color').parsed.hex, exp.titleFontColor);
      });

      it('text text-align', function () {
        assert.equal($(sel.text).getCSSProperty('text-align').value, exp.textTextAlign);
      });

      it('text font-size', function () {
        assert.equal($(sel.text).getCSSProperty('font-size').value, exp.textFontSize);
      });

      it('text font-weight', function () {
        assert.equal($(sel.text).getCSSProperty('font-weight').value, exp.textFontWeight);
      });

      it('text font-family', function () {
        assert.equal($(sel.text).getCSSProperty('font-family').value, exp.textFontFamily);
      });

      it('text font-color', function () {
        assert.equal($(sel.text).getCSSProperty('color').parsed.hex, exp.textFontColor);
      });
    });

  describe('Functionality', function () {

    ['english', 'spanish'].forEach(lang => {

      describe(`link redirect - ${lang}`, function () {
        const language = lang;


        beforeEach(() => {
          browser.url('/');
          let langToggle = help.getToggleElement(language);

          langToggle.waitForDisplayed(5000);
          langToggle.click();

          langToggle = help.getToggleElement(language);
          langToggle.waitForDisplayed(5000);
        });

        it('get started link -> Individual & Family', function () {
          if (language === 'english') {
            $(sel.getStartedButtonEng).click();
          }
          if (language === 'spanish') {
            $(sel.getStartedButtonEs).click();
          }
          let needCoverText = $(sel.needCoverText);
          needCoverText.waitForDisplayed(2000);
          assert.isTrue(needCoverText.isDisplayed());
          assert.equal(needCoverText.getText(), dictionary.getStartedDefaultBanner.links.needCoverText[language]);
        });
      });
    });
  });
});
