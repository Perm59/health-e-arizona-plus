import { assert } from 'chai';
import sel from '../../selectors/header';
import help from '../../helpers';
import exp from '../../expected/header';

describe('Links', function () {
    browser.url('/');

    it('font color - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('color').parsed.hex, exp.fontColorLinks);
      });
    });

    it('font color - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('color').parsed.hex, exp.fontColorLinks);
      });
    });

    it('font family - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-family').value, exp.fontFamilyLinks)
      });
    });

    it('font family - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-family').value, exp.fontFamilyLinks)
      });
    });

    it('font size - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-size').value, exp.fontSizeLinks)
     });
    });

    it('font size - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-size').value, exp.fontSizeLinks)
      });
    });

    it('font weight - links 1st row', function () {
      help.getFirstRowElementsHeader().forEach(el => {
        assert.equal(el.$('a').getCSSProperty('font-weight').value, exp.fontWeightLinks)
      });
    });

    it('font weight - links 2nd row', function () {
      help.getSecondRowElementsHeader().forEach(el => {
       assert.equal(el.$('a').getCSSProperty('font-weight').value, exp.fontWeightLinks)
      });
    });

    it('all links - focus outline width', function () {
        sel.allLinksArray.forEach( el => {
        browser.execute((selector) => {
        document.querySelector(selector).focus();
        }, el);

        if (browser.options.capabilities.browserName === 'chrome') {
          assert.equal($(el).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
        }
        if (browser.options.capabilities.browserName === 'firefox') {
          assert.equal($(el).getCSSProperty('outline-width').value, exp.outlineWidthLinksFirefox)
      }
    })
  });
});

