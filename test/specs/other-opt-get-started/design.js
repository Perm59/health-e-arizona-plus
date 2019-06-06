import { assert } from 'chai';
import sel from '../../selectors/other-opt-get-started';
import exp from '../../expected/other-opt-get-started';

describe('Other Options Get Started Design ', function () {
  browser.url('/');

  it('subsections width', function () {
    sel.allSubSectionsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('width').value, exp.subSectionWidth);
    })
  });

  it('subsections padding-right', function () {
    sel.allSubSectionsArray.forEach((el, index) => {
      if (index < 2) {
        assert.equal($(el).getCSSProperty('padding-right').value, exp.subSectionPaddingRight)
      } else {
        assert.equal($(el).getCSSProperty('padding-right').value, '0px');
      }
    })
  });

  it('subsection titles font-size', function () {
    sel.allTitlesArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-size').value, exp.titleFontSize);
    })
  });

  it('subsection titles font-weight', function () {
    sel.allTitlesArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-weight').value, exp.titleFontWeight);
    })
  });

  it('subsection titles font-color', function () {
    sel.allTitlesArray.forEach(el => {
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.titleFontColor);
    })
  });

  it('subsection titles text-transform', function () {
    sel.allTitlesArray.forEach(el => {
      assert.equal($(el).getCSSProperty('text-transform').value, exp.titleTextTransform);
    })
  });

  it('subsection text font-size', function () {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-size').value, exp.textFontSize);

    })
  });

  it('subsection text font-weight', function () {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-weight').value, exp.textFontWeight);
    })
  });

  it('subsection titles font-color', function () {
    sel.allTextsArray.forEach(el => {
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.textFontColor);
    })
  });

  it('subsection links font-size', function () {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-size').value, exp.linkFontSize);

    })
  });

  it('subsection links font-weight', function () {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('font-weight').value, exp.linkFontWeight);
    })
  });

  it('subsection links font-color', function () {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('color').parsed.hex, exp.linkFontColor);
    })
  });

  it('subsection links text-transform', function () {
    sel.allLinksArray.forEach(el => {
      assert.equal($(el).getCSSProperty('text-transform').value, exp.linkTextTransform);
    })
  });

  it('subsection links underlined hover state', function () {
    sel.allLinksArray.forEach(el => {
      if (browser.capabilities.browserName === 'chrome') {
        $(el).scrollIntoView();
        $(el).moveTo();
        browser.pause(300);
        assert.equal($(el).getCSSProperty('text-decoration-line').value, exp.linkTextDecorationLine)
      }
    });
  });

  it('subsection links focus outline width', function () {
    sel.allLinksArray.forEach(el => {
      $(el).scrollIntoView();

      browser.execute((selector) => {
        document.querySelector(selector).focus();
      }, el);

      if (browser.options.capabilities.browserName === 'chrome') {
        assert.equal($(el).getCSSProperty('outline-width').value, exp.outlineWidthLinksChrome);
      }
    })
  });

  it('subsection images size', function (){
    sel.allImagesArrayEng.forEach(el => {
      let width = $(el).getCSSProperty('width').parsed.value;
      let height = $(el).getCSSProperty('height').parsed.value;
      let size = `${width}x${height}px`;
      assert.equal(size, exp.subsectionImgSize);
    })
  });
});


