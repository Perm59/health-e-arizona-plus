import { assert } from 'chai';
import sel from '../../selectors/header';
import exp from '../../expected/header';

describe('Logo', function () {

  it('Size', function () {
    browser.url('/Default/images/health-e-arizona-plus-logo.png');
    let logoImage = $(sel.logoImage);
    let width = logoImage.getCSSProperty('width').parsed.value;
    let height = logoImage.getCSSProperty('height').parsed.value;
    let size = `${width}x${height}`;
    assert.equal(size, exp.logoSize);
  });

  it('URL', function () {
    browser.url('/Default/images/health-e-arizona-plus-logo.png');
    assert.isTrue($(sel.logoImage).isDisplayed());
  });
});
