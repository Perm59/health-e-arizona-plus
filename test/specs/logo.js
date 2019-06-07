import {assert} from "chai";
import exp from "../expected/logo";
import sel from "../selectors/logo"
import help from "../helpers";

describe('Logo general', () => {
  browser.url('/');

  it('logo size', () => {
    $(sel.logo).scrollIntoView();
    let width = $(sel.logo).getCSSProperty('width').parsed.value;
    let height = $(sel.logo).getCSSProperty('height').parsed.value;
    let size = `${width}x${height}px`;
    assert.equal(size, exp.logoSize);
  });

  it('Location: announcements -> logo -> footer', function () {
    assert.isTrue(help.vertLocationCheck3Elemets(sel.announcementSection, sel.logo, sel.footerSection));
  });

  it('source URL', function () {
    browser.url('/Default/images/Arizona-StateSeal.png');
    assert.isTrue($(sel.logoImg).isDisplayed());
  });
});