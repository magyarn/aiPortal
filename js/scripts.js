// *************** Homepage Course Toggling **********************

const inProgress = document.querySelector('button.in-progress');
const saved = document.querySelector('button.saved');
const achievements = document.querySelector('button.achievements');

inProgress.addEventListener("click", function() {
  const activeButton = document.querySelector('.active');
  activeButton.classList.remove('active');
  inProgress.classList.add('active');

  const allSections = document.querySelectorAll('section.course-category');
  const inProgressSection = document.querySelector('section.in-progress');
  const relatedCourses = document.querySelector('section.related-courses');

  for (let section = 0; section < allSections.length; section++) {
    allSections[section].classList.add('hide')
  }

  inProgressSection.classList.remove('hide');
  relatedCourses.classList.remove('hide');
})

saved.addEventListener("click", function() {
  const activeButton = document.querySelector('.active');
  activeButton.classList.remove('active');
  saved.classList.add('active');

  const allSections = document.querySelectorAll('section.course-category');
  const savedSection = document.querySelector('section.saved');
  const relatedCourses = document.querySelector('section.related-courses');

  for (let section = 0; section < allSections.length; section++) {
    allSections[section].classList.add('hide')
  }

  savedSection.classList.remove('hide');
  relatedCourses.classList.remove('hide');
});

achievements.addEventListener("click", function() {
  const activeButton = document.querySelector('.active');
  activeButton.classList.remove('active');
  achievements.classList.add('active');

  const allSections = document.querySelectorAll('section.course-category');
  const achievementsSection = document.querySelector('section.achievements');
  const relatedCourses = document.querySelector('section.related-courses');

  for (let section = 0; section < allSections.length; section++) {
    allSections[section].classList.add('hide')
  }

  achievementsSection.classList.remove('hide');
});

// browse.addEventListener("click", function() {
//   const activeButton = document.querySelector('.active');
//   activeButton.classList.remove('active');
//   browse.classList.add('active');
//
//   const allSections = document.querySelectorAll('section.course-category');
//   const newSection = document.querySelector('section.new');
//   const popularSection = document.querySelector('section.popular');
//   const subjectsSection = document.querySelector('section.subjects');
//   const relatedCourses = document.querySelector('section.related-courses');
//
//   for (let section = 0; section < allSections.length; section++) {
//     allSections[section].classList.add('hide')
//   }
//
//   newSection.classList.remove('hide');
//   popularSection.classList.remove('hide');
//   subjectsSection.classList.remove('hide');
// });

// ***************** Particleground on Portal Page *************** //

particleground(document.querySelector('.hero'), {
  dotColor: 'rgba(255,255,255,.2)',
  lineColor: 'rgba(255,255,255,.1)',
  proximity: 200,
  density: 15000,
});

// ***************** Course Page Filters *********************** //

$('option').click(()=> {
  console.log('Option clicked');
})
