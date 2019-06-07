import sel from "../../selectors/footer";
import {assert} from "chai";
import exp from "../../expected/footer";
import help from '../../helpers';


describe('Footer General', () => {
  browser.url('/');

  it('Footer is under logo', function () {
    assert.isTrue(help.vertLocationCheck2Elemets(sel.logo, sel.footerSection));
  });

  it('Location: links -> text', function () {
    assert.isTrue(help.vertLocationCheck2Elemets(sel.allLinks, sel.copyrightsText))
  });

  it('Links are separated by pipe-separator - each (except for last) link has a border on right side)', function () {
    help.getAllLinkElementsFooter().forEach((li, index) => {
      if (index < help.getAllLinkElementsFooter().length - 1) {
        assert.equal(li.getCSSProperty('border-right-width').value, exp.pipeSeparatorWidth)
      } else {
        assert.equal(li.getCSSProperty('border-right-width').value, '0px')
      }
    });
  });


});