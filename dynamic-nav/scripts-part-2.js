var sections = `[{
  "sectionTitle": "Section One",
  "content": "Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
}, {
  "sectionTitle": "Section Two",
  "content": "Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
}, {
  "sectionTitle": "Section Three",
  "content": "Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
}, {
  "sectionTitle": "Section Four",
  "content": "Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
}]`;

// ========================================
// Part two
// Refactor for multiple items
// ========================================

// Create array of objects to serve as data
sections = JSON.parse(sections);

// create markup for the navigation
var nav = document.createElement('nav');
nav.setAttribute('role', 'navigation');
nav.classList.add('nav');
ul = document.createElement('ul');
ul.classList.add('nav__list');
nav.appendChild(ul);

// For each item...
for (let section of sections) {

  // grab title and content
  var title = section.sectionTitle;
  var copy = section.content;

  // Create an ID from each title
  var newId = createID(title);

  // create <section> & add content to it
  var content = document.createElement('section');
  content.classList.add('module');
  content.id = newId;
  content.innerHTML = createContent(title, copy);

  // create li for each block
  var li = document.createElement('li');
  li.classList.add('nav__item');

  // add ancor link to each li
  li.appendChild(createAncorLink(title, newId, 'nav__link'));
  ul.appendChild(li);

  // add content and nav to the page
  document.getElementById('main').appendChild(content);
  document.getElementById('header').appendChild(nav);
}

// create a function to create and ID from a string
function createID(string) {
  var newId = string
    .toLowerCase()
    .split(' ')
    .join('-');
  return newId;
}

// create a function to add an href to ancor link
function createAncorLink(linkText, href, className = 0) {
  var link = document.createElement('a');
  if (className != 0) {
    link.classList.add(className);
  }
  link.innerHTML = linkText;
  link.href = '#' + href;
  return link;
}

// Create funtion to create all the content blocks
function createContent(header, paragraph) {
  var content = `
  <h2 class="module__header">${header}</h2>
  <p class="module__copy">${paragraph}</p>
`;
  return (content);
}

// =====================================
// Part three
// Enhancement - vanilla smooth scroll
// =====================================

// var thing = document.querySelector('#section-four');
// console.log(thing);

// function scrollToSection(e) {
//   e.preventDefault();
//   document.querySelector('#section-four').scrollIntoView({
//     behavior: 'smooth'
//   });
// }

// var menuItem = document.querySelector('.nav__link');
// menuItem.addEventListener('click', scrollToSection, false);