const toggleButton = document.querySelector('.toggle-btn');
const toggleButtonLine = document.querySelectorAll('.toggle-btn__line');
const navbar = document.querySelector('.navbar-area');
const navBarMenu = document.querySelector('.navbar-menu');
const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const accordions = document.querySelectorAll('.accordion');
const section = document.querySelectorAll('section');
const navbarItems = document.querySelectorAll('.navbar-list__item');
console.log(navbarItems);
const resetTabs = (idTab) => {
  tabs.forEach((tab) => {
    if (tab.dataset.value !== idTab) tab.classList.remove('active');
    else tab.classList.add('active');
  });
};
const activeNavItem = (idTab) => {
  navbarItems.forEach((item) => {
    if (item.id !== idTab) item.classList.remove('active');
    else item.classList.add('active');
  });
};
const resetTabContents = (idContent) => {
  tabContents.forEach((tabContent) => {
    if (tabContent.id !== idContent) tabContent.style.display = 'none';
    else tabContent.style.display = 'flex';
  });
};
resetTabs('introduction');
resetTabContents('introduction');
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();

  toggleButtonLine[0].classList.toggle('toggle-btn__line-1');
  toggleButtonLine[1].classList.toggle('toggle-btn__line-2');
  toggleButtonLine[2].classList.toggle('toggle-btn__line-3');
  navBarMenu.classList.toggle('show');
});
window.addEventListener('scroll', function (event) {
  let top = this.scrollY;

  if (top > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    resetTabs(tab.dataset.value);
    resetTabContents(tab.dataset.value);
  });
});

accordions.forEach((acc) =>
  acc.addEventListener('click', () => {
    acc.classList.toggle('active');
    const panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  })
);
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      console.log(id);
      activeNavItem(id);
    }
  });
};
