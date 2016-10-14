const replaceLinks = (answer, links = {}) => {
  let processed = answer;
  Object.entries(links).forEach(([key, val]) => {
    processed = processed.replace(`($${key})`, `(${val})`);
  });
  return processed;
};

export function parseQuestions(yaml) {
  if (!yaml) {
    return;
  }
  return Object.entries(yaml).map(([id, {
    question,
    answer,
    links,
    isEndTag
  }]) => ({
      id,
      question,
      isEndTag,
      answer: replaceLinks(answer, links)
    })
  );
}

export function parseLinks(yaml) {
  if (!yaml) {
    return;
  }
  return Object.entries(yaml).map(([source, { quote, link }]) => ({
    source,
    quote,
    link
  }));
}
