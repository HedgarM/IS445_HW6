const styleParagraphs = () => {
  const paragraphs = document.getElementsByTagName('p')

  Array.from(paragraphs).forEach(paragraph => {
      paragraph.style.fontWeight = 'bold';
      paragraph.style.backgroundColor = 'yellow';
  });
}

styleParagraphs();