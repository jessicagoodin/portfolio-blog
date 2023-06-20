// Add active class to navigation links when clicked
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Smooth scrolling to sections when clicking navigation links
const scrollLinks = document.querySelectorAll('.nav-links a');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const sectionTop = targetSection.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  });
});

// Toggle class on hamburger menu when clicked
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Shuffle projects when clicking shuffle button
const shuffleButton = document.querySelector('.shuffle-button');
const projectsContainer = document.querySelector('.projects-container');

shuffleButton.addEventListener('click', function() {
  const projects = Array.from(projectsContainer.children);
  const shuffledProjects = shuffleArray(projects);

  projectsContainer.innerHTML = '';
  shuffledProjects.forEach(project => {
    projectsContainer.appendChild(project);
  });
});

function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
