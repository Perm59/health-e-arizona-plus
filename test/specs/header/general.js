import { assert } from 'chai';
import sel from '../../selectors/header';
import help from '../../helpers';
import exp from '../../expected/header';

describe('Header General', function () {
  browser.url('/');

  it('Header is on Top of Home Page', function () {
    let headerVerticalLoc = $(sel.header).getLocation('y');
    assert.equal(headerVerticalLoc, exp.headerVerticalLoc);
  });

  it('Header width', function () {
    let headerWidth = $(sel.header).getCSSProperty('width').value;
    assert.equal(headerWidth, exp.headerWidth);
  });

  it('Logo->first row links->second row links - horizontal location from left to right', function () {
    let logoLoc = $(sel.logo).getLocation('x');
    let firstRowLoc = $$(sel.firstRowAllLinksTag)[0].getLocation('x');
    let secondRowLoc = $$(sel.secondRowAllLinksTag)[1].getLocation('x');
    assert.isTrue(logoLoc < firstRowLoc && firstRowLoc < secondRowLoc);
  });

  it('First Row Links are aligned horizontally', function () {
    let location;

    help.getFirstRowElements().forEach(li => {
      if (location === undefined) {
        location = li.getLocation('y');
      } else {
        assert.isTrue(location === li.getLocation('y'))
      }
    });
  });

  it('First row links are separated by pipe-separator(each (except for last) link has a border on right side)', function () {

    help.getFirstRowElements().forEach((li, index) => {
      if (index < help.getFirstRowElements().length - 1) {
        assert.equal(li.getCSSProperty('border-right-width').value, exp.pipeSeparatorWidth)
      } else {
        assert.equal(li.getCSSProperty('border-right-width').value, '0px')
      }
    });
  });

  it('Second Row Links are aligned horizontally', function () {
    let location;

    help.getFirstRowElements().forEach(li => {
      if (location === undefined) {
        location = li.getLocation('y');
      } else {
        assert.isTrue(location === li.getLocation('y'))
      }
    });
  });

  it('Second row links are separated by pipe-separator(each (except for last) link has a border on right side)', function () {

    help.getSecondRowElements().forEach((li, index) => {
      if (index < help.getSecondRowElements().length - 1) {
        assert.equal(li.getCSSProperty('border-right-width').value, exp.pipeSeparatorWidth)
      } else {
        assert.equal(li.getCSSProperty('border-right-width').value, '0px')
      }
    });
  });

});
