import {assert} from "chai";
import exp from '../expected/client';
import sel from '../selectors/header';

describe('Client', function () {

  it('Base URL', function () {
    browser.url(exp.baseUrl);
    $(sel.logo).waitForDisplayed(2000);
    assert.isTrue($(sel.logo).isDisplayed());
  });

  it('Get title', function () {
    browser.url('/');
    let title = browser.getTitle();
    assert.equal(title, exp.title);
  });
});