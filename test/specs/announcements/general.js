import { assert } from 'chai';
import sel from '../../selectors/announcements';
import help from '../../helpers';
import exp from '../../expected/announcements';

describe(' Section General', function () {
  browser.url('/');

  it('Location: warning -> announcements -> logo', function () {
    $(sel.announcementSection).scrollIntoView();
    assert.isTrue(help.vertLocationCheck3Elemets(sel.warningSection, sel.announcementSection, sel.logo));
  });

  it('section width', function () {
    let width = $(sel.announcementSection).getCSSProperty('width').parsed.value;
    assert.equal(width, exp.announcementSectionWidth);
  });
  it('section background-color', function () {
    assert.equal($(sel.announcementSection).getCSSProperty('background-color').parsed.hex, exp.sectionBackgroundColor);
  });
});