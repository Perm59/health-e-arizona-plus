import { assert } from 'chai';
import sel from '../../selectors/warning';
import help from '../../helpers';
import exp from '../../expected/warning';

describe('Warning Section General', function () {
  browser.url('/');

  it('Location: languages -> warning -> announcements', function () {
    assert.isTrue(help.vertLocationCheck3Elemets(sel.languagesSection, sel.warningSection, sel.announcementSection));
  });

  it('section width', function () {
    let width = $(sel.warningSection).getCSSProperty('width').parsed.value;
    assert.equal(Math.floor(width), exp.warningSectionWidth);
  });
});


