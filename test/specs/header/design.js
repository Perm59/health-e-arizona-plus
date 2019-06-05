import { assert } from 'chai';
import sel from '../../selectors/header';
import help from '../../helpers';
import exp from '../../expected/header';

describe('Links', function () {
    browser.url('/');

    it('font color - links 1st row', function () {
      help.getFirstRowElements().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('color').parsed.hex, exp.fontColorLinks);
      });
    });

    it('font color - links 2nd row', function () {
      help.getSecondRowElements().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('color').parsed.hex, exp.fontColorLinks);
      });
    });

    it('font family - links 1st row', function () {
      help.getFirstRowElements().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-family').value, exp.fontFamilyLinks)
      });
    });

    it('font family - links 2nd row', function () {
      help.getSecondRowElements().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-family').value, exp.fontFamilyLinks)
      });
    });

    it('font size - links 1st row', function () {
      help.getFirstRowElements().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-size').value, exp.fontSizeLinks)
     });
    });

    it('font size - links 2nd row', function () {
      help.getSecondRowElements().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-size').value, exp.fontSizeLinks)
      });
    });

    it('font weight - links 1st row', function () {
      help.getFirstRowElements().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-weight').value, exp.fontWeightLinks)
      });
    });

    it('font weight - links 2nd row', function () {
      help.getSecondRowElements().forEach(el => {
       assert.equal(el.$('a').getCSSProperty('font-weight').value, exp.fontWeightLinks)
      });
    });

    it('underlined hover state  - links 1st row', function () {
      help.getFirstRowElements().forEach(el => {
        el.moveTo();
        browser.pause(300);
        assert.equal(el.$('a').getCSSProperty('text-decoration-line').value, exp.textDecorationLine)
      });
    });

    it('underlined hover state - links 2nd row', function () {
      help.getSecondRowElements().forEach(el => {
        el.moveTo();
        browser.pause(300);
        assert.equal(el.$('a').getCSSProperty('text-decoration-line').value, exp.textDecorationLine)
      });
    });
describe('Links - focus outline width', function () {

   it('create account', function () {
     browser.execute((selector) => {
       document.querySelector(selector).focus();
     }, sel.createAccountLink);

     if (browser.options.capabilities.browserName === 'chrome') {
       assert.equal($(sel.createAccountLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
     }
     if (browser.options.capabilities.browserName === 'firefox') {
       assert.equal($(sel.createAccountLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
     }
   });

   it('returning user log in', function () {
     browser.execute((selector) => {
       document.querySelector(selector).focus();
     }, sel.returningUserLogInLink);

     if (browser.options.capabilities.browserName === 'chrome') {
       assert.equal($(sel.returningUserLogInLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
     }
     if (browser.options.capabilities.browserName === 'firefox') {
       assert.equal($(sel.returningUserLogInLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
     }
   });

   it('help', function () {
     browser.execute((selector) => {
       document.querySelector(selector).focus();
     }, sel.helpLink);

     if (browser.options.capabilities.browserName === 'chrome') {
       assert.equal($(sel.helpLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
     }
     if (browser.options.capabilities.browserName === 'firefox') {
       assert.equal($(sel.helpLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
     }
   });

   it('FAQs', function () {
     browser.execute((selector) => {
       document.querySelector(selector).focus();
     }, sel.faqsLink);

     if (browser.options.capabilities.browserName === 'chrome') {
       assert.equal($(sel.faqsLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
     }
     if (browser.options.capabilities.browserName === 'firefox') {
       assert.equal($(sel.faqsLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
     }
   });

   it('English', function () {
     browser.execute((selector) => {
       document.querySelector(selector).focus();
     }, sel.englishLink);

     if (browser.options.capabilities.browserName === 'chrome') {
       assert.equal($(sel.englishLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
     }
     if (browser.options.capabilities.browserName === 'firefox') {
       assert.equal($(sel.englishLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
     }
   });

   it('Spanish', function () {
     browser.execute((selector) => {
       document.querySelector(selector).focus();
     }, sel.spanishLink);

     if (browser.options.capabilities.browserName === 'chrome') {
       assert.equal($(sel.spanishLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
     }
     if (browser.options.capabilities.browserName === 'firefox') {
       assert.equal($(sel.spanishLink).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
     }
   });
 });
});

