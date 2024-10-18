const addBusinessLink = () => {

  const newLink = document.createElement('li');

  const anchor = document.createElement('a');
  anchor.href = "https://www.csulb.edu/college-of-business";
  anchor.textContent = "College of Business";

  newLink.appendChild(anchor);

  const linksList = document.getElementById('links');

  const csulbLink = document.getElementById('csulb');

  linksList.insertBefore(newLink, csulbLink.nextSibling);
}

addBusinessLink();