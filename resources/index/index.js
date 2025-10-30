const projectCardArea = document.getElementById("project-card-area");

const projectCards = [
  {
    classes: ("cardContainer", "col-md-6", "col-xl-4"),
    src: "resources/index/index-images/personalBio.JPG",
    alt: "Bio Page Preview - An orange oval with Ashton's about info on display",
    h4Inner: "Personal Bio Page",
    pInner: "Week 2 project<br><br>",
    href: "web-tree/fullstack-bootcamp/Projects/0-Bio-page/personal-bio.html",
  },
  {
    classes: ("cardContainer", "col-md-6", "col-xl-4"),
    src: "resources/index/index-images/styledLandingPage.JPG",
    alt: "Styled Landing Page Preview - Core Features cards on display",
    h4Inner: "Styled Landing Page",
    pInner: "Week 3 project<br><br>",
    href: "web-tree/fullstack-bootcamp/Projects/1-styled-landing-page/Project-Landing-Page.html",
  },
  {
    classes: ("cardContainer", "col-md-6", "col-xl-4"),
    src: "resources/index/index-images/calculator.JPG",
    alt: "Interactive Calculator Preview - a purple calculator with yellow buttons in a neutral void",
    h4Inner: "Interactive Calculator",
    pInner:
      'Week 6 project<br><strong class="card-inner">(First JavaScript Project!)</strong>',
    href: "web-tree/fullstack-bootcamp/Projects/2-Calculator/index.html",
  },
  {
    classes: ("cardContainer", "col-md-6"),
    src: "resources/index/index-images/TodoList.JPG",
    alt: "Todo List App Preview with placeholder todos",
    h4Inner: "Todo List App",
    pInner: "Week 8 project<br><br>",
    href: "web-tree/fullstack-bootcamp/Projects/4-todo-list/index.html",
  },
  {
    classes: ("cardContainer", "col-xl-6"),
    src: "https://placehold.co/1900x900",
    alt: "Stock Lookup App Preview (currently placeholder)",
    h4Inner: "Stock Lookup App",
    pInner:
      'Week 10 project<br><strong class="card-inner">(Incomplete)</strong>',
    href: "web-tree/fullstack-bootcamp/Projects/5-stock-lookup/stonks.html",
  },
];

function createProjectCards() {
  projectCards.forEach((card) => {
    const cardContainer = document.createElement("div");
    //   .classList.add(` ${card.containerCols}`);
    // card.classes.forEach((item) => cardContainer.classList.add(item));
    cardContainer.classList.add(card.classes)
    const content = `
            <div class="card">
                <img src='${card.src}' class="card-img-top" alt="${card.alt}">
                <div class="card-body">
                    <h4 class="card-inner">${card.h4Inner}</h4>
                    <p class="card-inner">${card.pInner}</p>
                    <a class="btn btn-primary" href="${card.href}">
                        Check it out!</a>
                </div>
            </div>
        `;
    cardContainer.innerHTML = content;
    projectCardArea.appendChild(cardContainer);
  });
}

createProjectCards();

const practiceAccordion = document.getElementById("guidedPractice");

const accordionSections = [
  //   {
  //     id: "",
  //     expanded: "false",
  //     heading: "",
  //     show: false,
  //     li: [
  //       {
  //         href: "",
  //         title: "",
  //         description: "",
  //       },
  //     ],
  //   },
  {
    id: "collapseOne",
    heading: "Week 1 - HTML Basics",
    show: true,
    li: [
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week1/Session1/business-card.html",
        title: "Business Card",
        description: "-Practice putting words on a webpage",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week1/Session1/news-article.html",
        title: "News Article",
        description: "-Practice making lists",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week1/Session2/student-directory.html",
        title: "Student Directory",
        description: "-Practice making a table",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week1/Session2/tutorial-page.html",
        title: "HTML Tutorial Page",
        description: "-Practice text formatting and links",
      },
    ],
  },
  {
    id: "collapseTwo",
    heading: "Week 2 -CSS Basics",
    show: false,
    li: [
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week2/quickbite-survey/quickbite-survey.html",
        title: "Quickbite Customer Survey",
        description: "-Practice creating forms",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week2/Css-land/css-land-start.html",
        title: "Css Land",
        description: "-Practicing CSS Basics",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week2/marios-pizza/index.html",
        title: "Mario's Pizza",
        description:
          "-Practicing box model, typography, colors, and dispaly position",
      },
    ],
  },
  {
    id: "collapseThree",
    heading: "Week 3 -CSS Layouts",
    show: false,
    li: [
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week3/Css-detective/chrome-dev-tools-start.html",
        title: "CSS Detective Agency",
        description: "-Practice with Chrome Dev Tools",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week3/flexbox-photo-gallery/photo-gallery.html",
        title: "Flexbox Photo Gallery",
        description: "-Practicing with flex box layout",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week3/dashboard/dashboard-layout.html",
        title: "Dashboard",
        description: "-Practicing with grid layout",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week3/adaptive-eats/index.html",
        title: "Adaptive Eats",
        description: "-Practicing with adaptive/reactive pages",
      },
    ],
  },
  {
    id: "collapseFour",
    heading: "Week 4 -Animations and Frameworks",
    show: false,
    li: [
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week4/loading-animation/animation-practice.html",
        title: "Loading Animation",
        description: "-Practicing animating",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week4/bootstrap/bootstrap-practice.html",
        title: "Bio Page (Bootstrap version)",
        description: "-Practicing with Bootstrap <strong>(Incomplete)</strong>",
      },
      //   {
      //     href: "web-tree/fullstack-bootcamp/Practice/Week4/tailwind/tailwind-practice.html",
      //     title: "Bio Page (Tailwind version)",
      //     description: "-Practicing with Tailwind <strong>(Incomplete)</strong>",
      //   },
    ],
  },
  {
    id: "collapseSix",
    heading: "Week 6 -Markdown and Javascript Basics",
    show: false,
    li: [
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week6/todo-list/readme.html",
        title: "Todo List",
        description: "-Practicing with Markdown",
      },
    ],
  },
  {
    id: "collapseSeven",
    heading: "Week 7 -DOM selection and manipulation",
    show: false,
    li: [
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week7/cat-mood-tracker/cat-mood-tracker-start.html",
        title: "Cat Mood Tracker",
        description:
          "-Practicing adding interactivity to web pages by linking JavaScript to HTML documents",
      },
    ],
  },
  {
    id: "collapseEight",
    heading: "Week 8 -Event handling, forms processing, and LocalStorage",
    show: false,
    li: [
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week8/event-handling/events-demo-start.html",
        title: "Event Handling and Bubbling Demo",
        description: "",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week8/forms-processing/forms-demo-start.html",
        title: "Forms Processing Demo",
        description: "",
      },
      {
        href: "web-tree/fullstack-bootcamp/Practice/Week8/localStorage/localstorage-demo-start.html",
        title: "LocalStorage Demo",
        description: "",
      },
    ],
  },
];

function createAccordion() {
  accordionSections.forEach((accordion) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");
    let content = `
            <h4 class="accordion-header">
            <button class="accordion-button${
              accordion.show ? "" : " collapsed"
            }" type="button" data-bs-toggle="collapse" data-bs-target="#${
      accordion.id
    }" aria-expanded="${accordion.show}" aria-controls="${accordion.id}">
                <strong>${accordion.heading}</strong></button>
            </h4>
            <div id="${accordion.id}" class="accordion-collapse collapse${
      accordion.show ? " show" : ""
    }" data-bs-parent="#guidedPractice">
                <ul class="accordion-body">
        `;

    accordion.li.forEach((item) => {
      content += `
                <li>
                     <a href="${item.href}">
                     ${item.title}</a> ${item.description}
                </li>
            `;
    });

    content += `
                </ul>
            </div>
        `;

    accordionItem.innerHTML = content;
    practiceAccordion.appendChild(accordionItem);
  });
}

createAccordion();
