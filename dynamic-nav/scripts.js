// The plan is to create a nav which:
//  1. Creates a new menu item when a new
//      section is added to the page.
//  2. Link text dymanically updates when
//      section title changes.

// ========================================
// Part one
// Hard code to get basic mechanics working
// ========================================

//  1. Grab the section title
var sectionTitle = document.querySelector('h2.module__header').innerHTML;
// console.log(sectionTitle);

// 2. Create an id from the section title
var newId = sectionTitle
  .toLowerCase()
  .split(' ')
  .join('-');
// console.log(newId);

// 3. Add ID to section
section = document.querySelector('.module')
section.setAttribute('id', newId);
// console.log(section);

// 4. Create ancor link from new ID
var link = document.createElement('a');
link.classList.add('nav__link');
link.innerHTML = sectionTitle;
link.href = '#' + newId;
// console.log(link);

// 5. Create list item and add link
var navItem = document.createElement('li');
navItem.classList.add("nav__item");
navItem.appendChild(link);
// console.log(navItem);

// 6. Add list item to nav ul
var nav = document.querySelector('.nav__list');
nav.appendChild(navItem);
// console.log(nav);


// ========================================
// Part two
// Refactor for multiple items
//
// - Loops & Re-usable functions
// - If sections order changes, update
//   links order to match
// ========================================

// 1. ?

// 2. ?

// 3. ?

// ...


// =====================================
// Part three
// Enhancement - vanilla smooth scroll
// =====================================

// function scrollToSection(e) {
//   e.preventDefault();
//   document.querySelector(?).scrollIntoView({
//   behavior: 'smooth'
// });
// }

// link.addEventListener('click', scrollToSection, false);