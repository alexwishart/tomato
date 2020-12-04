import { processTomatoCitations } from './contentUtils';

const testRoot = 'http://test.com/cite-';

describe('The processTomatoCitations function', () => {
  it('should not change a string with no citations', () => {
    const testString = 'This is content with no citations';

    expect(processTomatoCitations(testString, testRoot)).toEqual(testString);
  });

  it('should add a link when a string has one citataion', () => {
    const testStringStart = 'This is content with a citation';
    const citation = 3;
    const citationString = `[${citation}]`;
    const testStringEnd = '. This is the rest of the content.';

    const citationAndLink = `<a href=${testRoot}${citation}>${citationString}</a>`;

    expect(
      processTomatoCitations(
        testStringStart + citationString + testStringEnd,
        testRoot
      )
    ).toEqual(testStringStart + citationAndLink + testStringEnd);
  });

  it('should add a link when a string has two different citataion', () => {
    const testStringStart = 'This is content with a citation';
    const citation = 10;
    const citationString = `[${citation}]`;
    const testStringEnd = '. This is the rest of the content.';
    const citationString2 = `[${citation + 1}]`;

    const citationAndLink = `<a href=${testRoot}${citation}>${citationString}</a>`;
    const citationAndLink2 = `<a href=${testRoot}${
      citation + 1
    }>${citationString2}</a>`;

    expect(
      processTomatoCitations(
        testStringStart + citationString + testStringEnd + citationString2,
        testRoot
      )
    ).toEqual(
      testStringStart + citationAndLink + testStringEnd + citationAndLink2
    );
  });
});
