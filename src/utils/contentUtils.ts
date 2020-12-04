export const processTomatoCitations = (input: string, citationRoot: string) => {
  const citations = input.match(/\[[0-9]*\]/g);
  let output = input;

  // Assumes that citation numbers are unique in an input.
  if (citations) {
    citations.forEach((citation) => {
      const citationNumber = citation.substring(1, citation.length - 1);
      output = output.replace(
        citation,
        `<a href=${citationRoot}${citationNumber}>${citation}</a>`
      );
    });
    return output;
  } else {
    return input;
  }
};
