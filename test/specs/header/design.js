import { assert } from 'chai';
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
  });


