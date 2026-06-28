const STORAGE_KEYS = {
  progress: "codelift-progress",
  notes: "codelift-notes",
  code: "codelift-code",
  playground: "codelift-playground",
  theme: "codelift-theme"
};

const courses = [
  {
    id: "web-foundations",
    title: "Web Foundations",
    level: "Beginner",
    duration: "3 lessons",
    image: "assets/course-web.png",
    skills: ["HTML", "CSS", "Responsive design"],
    description: "Build the mental model behind accessible pages, layout systems, and responsive interfaces.",
    lessons: [
      {
        id: "semantic-html",
        title: "Semantic HTML",
        duration: "12 min",
        objective: "Use page structure to make content easier to scan, style, and maintain.",
        body: [
          "Semantic HTML gives meaning to the sections of a page. A browser can render almost anything, but future you and assistive technology benefit when the structure matches the content.",
          "Think in regions first: header, navigation, main content, related content, and footer. Then choose smaller elements like article, section, figure, and button based on the job they perform."
        ],
        takeaways: [
          "Use one main element for the primary content of a page.",
          "Choose button for actions and links for navigation.",
          "Headings should describe the content that follows them."
        ],
        starter: `const page = {
  title: "Student Portfolio",
  sections: ["intro", "projects", "contact"]
};

function buildPageRegions(site) {
  return [
    "header",
    "nav",
    "main",
    "footer"
  ];
}

console.log(buildPageRegions(page));`,
        hint: "Return an array that includes header, nav, main, and footer.",
        success: "Nice structure. This lesson is complete.",
        check(code) {
          return ["header", "nav", "main", "footer"].every((word) => code.toLowerCase().includes(word));
        },
        quiz: {
          question: "Which element should wrap the unique primary content of a page?",
          choices: ["main", "aside", "span", "footer"],
          answer: 0,
          explanation: "main identifies the central content for the page."
        }
      },
      {
        id: "layout-systems",
        title: "Layout Systems",
        duration: "16 min",
        objective: "Plan flexible layouts before writing detailed CSS.",
        body: [
          "A good layout starts with relationships. Ask which items should flow together, which should align, and which should keep stable size.",
          "Flexbox is usually strongest for one-dimensional alignment. Grid is usually strongest when rows and columns both matter."
        ],
        takeaways: [
          "Use flex for toolbars, nav rows, and aligned groups.",
          "Use grid for dashboards, card collections, and two-dimensional page regions.",
          "Set gaps on the parent instead of margins on every child."
        ],
        starter: `const cards = ["HTML", "CSS", "JavaScript", "Projects", "Quiz", "Notes"];

function chooseLayout(itemCount) {
  if (itemCount >= 4) {
    return "grid";
  }

  return "flex";
}

console.log(chooseLayout(cards.length));`,
        hint: "Return grid for four or more items and flex for smaller groups.",
        success: "Layout choice looks good.",
        check(code) {
          return /grid/i.test(code) && /flex/i.test(code) && /(>=|>|itemCount|length)/.test(code);
        },
        quiz: {
          question: "Which CSS feature is usually best for arranging cards in rows and columns?",
          choices: ["Grid", "Text shadow", "Float", "Inline style"],
          answer: 0,
          explanation: "Grid is built for two-dimensional layout."
        }
      },
      {
        id: "responsive-thinking",
        title: "Responsive Thinking",
        duration: "14 min",
        objective: "Create interface rules that adapt to available space.",
        body: [
          "Responsive design is not only about phone sizes. It is about making layout decisions based on available room, content density, and the user's task.",
          "Stable components use constraints: min widths, max widths, aspect ratios, and grid tracks that can shrink without overlapping."
        ],
        takeaways: [
          "Prefer flexible tracks like minmax(0, 1fr) in dense layouts.",
          "Use max-width to protect reading length.",
          "Test the longest labels and narrowest screens."
        ],
        starter: `function columnsForWidth(width) {
  if (width >= 1000) return 3;
  if (width >= 680) return 2;
  return 1;
}

console.log(columnsForWidth(1240));
console.log(columnsForWidth(760));
console.log(columnsForWidth(390));`,
        hint: "The function should return 3, 2, and 1 for wide, medium, and narrow widths.",
        success: "Responsive rule complete.",
        check(code) {
          return /1000|1024|960/.test(code) && /680|700|720|768/.test(code) && /return\s+1/.test(code);
        },
        quiz: {
          question: "What helps prevent content from overflowing in a responsive grid?",
          choices: ["Flexible constraints", "More negative margins", "Fixed desktop widths", "Hidden headings"],
          answer: 0,
          explanation: "Flexible constraints let content adapt without overlap."
        }
      }
    ]
  },
  {
    id: "javascript-core",
    title: "JavaScript Core",
    level: "Beginner",
    duration: "4 lessons",
    image: "assets/course-javascript.png",
    skills: ["Variables", "Functions", "Arrays", "Objects"],
    description: "Practice the core language skills used in projects, interviews, and everyday frontend work.",
    lessons: [
      {
        id: "variables-conditionals",
        title: "Variables and Conditionals",
        duration: "13 min",
        objective: "Store values and branch program behavior.",
        body: [
          "Variables name information your program needs. Conditionals let the program choose a path based on that information.",
          "Use const when a binding should not be reassigned, let when it changes, and clear boolean expressions when a decision matters."
        ],
        takeaways: [
          "Use descriptive names that reveal intent.",
          "Keep conditions readable by extracting repeated checks.",
          "Return values from functions instead of relying only on console output."
        ],
        starter: `function studyStatus(minutesPracticed) {
  if (minutesPracticed >= 30) {
    return "goal met";
  }

  return "keep going";
}

console.log(studyStatus(45));
console.log(studyStatus(12));`,
        hint: "Compare minutesPracticed to a goal and return a message for both paths.",
        success: "The conditional path is working.",
        check(code) {
          return /if\s*\(/.test(code) && /return/.test(code) && /minutesPracticed/.test(code);
        },
        quiz: {
          question: "Which keyword is best for a value that will be reassigned later?",
          choices: ["let", "const", "typeof", "return"],
          answer: 0,
          explanation: "let allows reassignment while keeping the variable block-scoped."
        }
      },
      {
        id: "functions-scope",
        title: "Functions and Scope",
        duration: "18 min",
        objective: "Package repeatable behavior with clear inputs and outputs.",
        body: [
          "Functions are small contracts. Parameters are the inputs, the body is the work, and the return value is the result.",
          "Scope controls where names can be used. Keeping variables close to where they are needed makes code easier to reason about."
        ],
        takeaways: [
          "Give functions one clear purpose.",
          "Prefer returning data over changing outer variables.",
          "Use parameters to make behavior reusable."
        ],
        starter: `function formatBadge(name, points) {
  return name + " earned " + points + " XP";
}

console.log(formatBadge("Maya", 120));`,
        hint: "Create a function that accepts a name and point total, then returns a string.",
        success: "Function practice complete.",
        check(code) {
          return /function\s+\w+\s*\([^)]*,[^)]*\)/.test(code) && /return/.test(code);
        },
        quiz: {
          question: "What does a return statement do?",
          choices: ["Sends a value out of a function", "Creates a CSS rule", "Starts a loop", "Renames a variable"],
          answer: 0,
          explanation: "return provides the function result to the caller."
        }
      },
      {
        id: "arrays-loops",
        title: "Arrays and Loops",
        duration: "20 min",
        objective: "Transform collections of data.",
        body: [
          "Arrays hold ordered data. Loops and array methods let you apply the same idea to every item without repeating yourself.",
          "For many tasks, map transforms, filter selects, and reduce combines."
        ],
        takeaways: [
          "Use map when the output has one item for each input item.",
          "Use filter when only some items should remain.",
          "Use reduce when a list becomes one value."
        ],
        starter: `const scores = [62, 91, 84, 100, 73];

function passingScores(values) {
  return values.filter((score) => score >= 80);
}

console.log(passingScores(scores));`,
        hint: "Use filter to keep scores at or above 80.",
        success: "Array filtering complete.",
        check(code) {
          return /\.filter\s*\(/.test(code) && />=/.test(code);
        },
        quiz: {
          question: "Which array method keeps only items that pass a test?",
          choices: ["filter", "map", "join", "push"],
          answer: 0,
          explanation: "filter returns a new array with matching items."
        }
      },
      {
        id: "objects-data",
        title: "Objects and Data",
        duration: "17 min",
        objective: "Represent related values as structured data.",
        body: [
          "Objects group related properties under one name. They are the foundation of records, settings, API responses, and application state.",
          "Good object design makes later code quieter because each value has an obvious home."
        ],
        takeaways: [
          "Use property names that describe the data clearly.",
          "Read object values with dot notation when the property name is known.",
          "Return new objects when you want predictable updates."
        ],
        starter: `const learner = {
  name: "Aarav",
  completed: 5,
  target: 8
};

function progressLabel(student) {
  const remaining = student.target - student.completed;
  return student.name + " has " + remaining + " lessons left";
}

console.log(progressLabel(learner));`,
        hint: "Read name, completed, and target from the object.",
        success: "Object practice complete.",
        check(code) {
          return /student\.\w+/.test(code) && /remaining|target|completed/.test(code);
        },
        quiz: {
          question: "What is an object property?",
          choices: ["A named value inside an object", "A browser tab", "A loop condition", "A file extension"],
          answer: 0,
          explanation: "Properties store named values on an object."
        }
      }
    ]
  },
  {
    id: "algorithms",
    title: "Algorithms",
    level: "Intermediate",
    duration: "3 lessons",
    image: "assets/course-algorithms.png",
    skills: ["Problem solving", "Search", "Big O"],
    description: "Learn to break problems down, reason about cost, and write clearer solutions.",
    lessons: [
      {
        id: "problem-solving",
        title: "Problem Solving",
        duration: "15 min",
        objective: "Turn a vague problem into small testable steps.",
        body: [
          "Strong problem solving starts before code. Restate the goal, list inputs and outputs, create examples, then write the smallest useful version.",
          "A clear plan lowers the chance that you solve a different problem from the one you were given."
        ],
        takeaways: [
          "Write examples before implementation.",
          "Name the input and expected output.",
          "Solve a small version, then generalize."
        ],
        starter: `function countLongWords(words, minLength) {
  let count = 0;

  for (const word of words) {
    if (word.length >= minLength) {
      count++;
    }
  }

  return count;
}

console.log(countLongWords(["grid", "function", "loop", "component"], 6));`,
        hint: "Loop through the words and count the ones long enough.",
        success: "Problem broken down and solved.",
        check(code) {
          return /for\s*\(|for\s*\(const|for\s*\(let|\.filter/.test(code) && /length/.test(code) && /return/.test(code);
        },
        quiz: {
          question: "What should you define before coding an algorithm?",
          choices: ["Inputs and expected outputs", "A final logo", "A database password", "A browser extension"],
          answer: 0,
          explanation: "Inputs and outputs make the target behavior concrete."
        }
      },
      {
        id: "searching-lists",
        title: "Searching Lists",
        duration: "19 min",
        objective: "Find matching items in a collection.",
        body: [
          "Searching is a common algorithm pattern. A linear search checks items one at a time until it finds a match or reaches the end.",
          "The simplest correct solution is often a loop with an early return."
        ],
        takeaways: [
          "Return as soon as the match is found.",
          "Return a fallback when no item matches.",
          "Use includes, find, or a loop depending on the data shape."
        ],
        starter: `const lessons = ["HTML", "CSS", "JavaScript", "Algorithms"];

function hasLesson(list, target) {
  for (const lesson of list) {
    if (lesson === target) {
      return true;
    }
  }

  return false;
}

console.log(hasLesson(lessons, "JavaScript"));
console.log(hasLesson(lessons, "Databases"));`,
        hint: "Return true when an item equals the target, otherwise false after the loop.",
        success: "Search function complete.",
        check(code) {
          return (/for\s*\(|\.includes\s*\(|\.find\s*\(/.test(code)) && /true/.test(code) && /false/.test(code);
        },
        quiz: {
          question: "In linear search, what is the worst-case path?",
          choices: ["Checking every item", "Checking only the first item", "Skipping the input", "Sorting by color"],
          answer: 0,
          explanation: "The match may be last or absent, so every item can be checked."
        }
      },
      {
        id: "big-o-basics",
        title: "Big O Basics",
        duration: "18 min",
        objective: "Describe how work grows as input grows.",
        body: [
          "Big O notation describes growth. It does not count exact milliseconds. It helps you compare whether work stays flat, grows with the input, or grows much faster.",
          "A single loop over n items is usually O(n). Nested loops over the same list are often O(n^2)."
        ],
        takeaways: [
          "O(1) work stays constant as input grows.",
          "O(n) work grows with the number of items.",
          "O(n^2) often appears when each item is compared with many other items."
        ],
        starter: `function estimateGrowth(pattern) {
  if (pattern === "single-loop") return "O(n)";
  if (pattern === "nested-loop") return "O(n^2)";
  return "O(1)";
}

console.log(estimateGrowth("single-loop"));
console.log(estimateGrowth("nested-loop"));
console.log(estimateGrowth("lookup"));`,
        hint: "Map single-loop to O(n), nested-loop to O(n^2), and lookup to O(1).",
        success: "Complexity labels complete.",
        check(code) {
          return /O\(n\)/.test(code) && /O\(n\^2\)/.test(code) && /O\(1\)/.test(code);
        },
        quiz: {
          question: "What does O(n) usually mean?",
          choices: ["Work grows with the input size", "Work never changes", "Code is invalid", "The page is offline"],
          answer: 0,
          explanation: "O(n) means the work scales linearly with the number of items."
        }
      }
    ]
  }
];

const app = document.querySelector("#app");
const searchInput = document.querySelector("#searchInput");
const sidebarProgressBar = document.querySelector("#sidebarProgressBar");
const sidebarProgressText = document.querySelector("#sidebarProgressText");
const themeGlyph = document.querySelector("#themeGlyph");

let progress = loadJSON(STORAGE_KEYS.progress, {
  completed: [],
  quizAnswers: {},
  lastLesson: null,
  enrolled: []
});
let notes = loadJSON(STORAGE_KEYS.notes, {});
let savedCode = loadJSON(STORAGE_KEYS.code, {});
let searchTerm = "";
let activeWorker = null;

const defaultPlayground = `const topics = ["HTML", "CSS", "JavaScript"];

for (const topic of topics) {
  console.log("Practice " + topic);
}

function addXP(current, earned) {
  return current + earned;
}

console.log("XP:", addXP(120, 35));`;

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function lessonKey(courseId, lessonId) {
  return `${courseId}:${lessonId}`;
}

function allLessons() {
  return courses.flatMap((course) => course.lessons.map((lesson) => ({ course, lesson })));
}

function findCourse(courseId) {
  return courses.find((course) => course.id === courseId) || courses[0];
}

function findLesson(course, lessonId) {
  return course.lessons.find((lesson) => lesson.id === lessonId) || course.lessons[0];
}

function isComplete(courseId, lessonId) {
  return progress.completed.includes(lessonKey(courseId, lessonId));
}

function markComplete(courseId, lessonId) {
  const key = lessonKey(courseId, lessonId);
  if (!progress.completed.includes(key)) {
    progress.completed.push(key);
  }
  progress.lastLesson = { courseId, lessonId };
  if (!progress.enrolled.includes(courseId)) {
    progress.enrolled.push(courseId);
  }
  saveJSON(STORAGE_KEYS.progress, progress);
  updateProgressWidgets();
}

function courseProgress(course) {
  const complete = course.lessons.filter((lesson) => isComplete(course.id, lesson.id)).length;
  return {
    complete,
    total: course.lessons.length,
    percent: Math.round((complete / course.lessons.length) * 100)
  };
}

function overallProgress() {
  const total = allLessons().length;
  const complete = progress.completed.length;
  return {
    complete,
    total,
    percent: total ? Math.round((complete / total) * 100) : 0
  };
}

function routeTo(hash) {
  window.location.hash = hash;
}

function getRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  const [view = "dashboard", courseId, lessonId] = hash.split("/");
  return { view, courseId, lessonId };
}

function setActiveNav(view) {
  const activeView = view === "lesson" ? "courses" : view;
  document.querySelectorAll(".nav-link").forEach((button) => {
    const target = button.dataset.route.replace("#", "");
    button.classList.toggle("is-active", target === activeView);
  });
}

function updateProgressWidgets() {
  const summary = overallProgress();
  sidebarProgressBar.style.width = `${summary.percent}%`;
  sidebarProgressText.textContent = `${summary.percent}%`;
}

function render() {
  const route = getRoute();
  setActiveNav(route.view);
  updateProgressWidgets();

  if (route.view === "courses") {
    renderCourses();
  } else if (route.view === "lesson") {
    renderLesson(route.courseId, route.lessonId);
  } else if (route.view === "playground") {
    renderPlayground();
  } else if (route.view === "notes") {
    renderNotes();
  } else {
    renderDashboard();
  }

  const typingTarget = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
  if (!typingTarget) {
    app.focus({ preventScroll: true });
  }
}

function matchingLessons() {
  const query = searchTerm.trim().toLowerCase();
  if (!query) return [];

  return allLessons().filter(({ course, lesson }) => {
    const haystack = [
      course.title,
      course.description,
      course.skills.join(" "),
      lesson.title,
      lesson.objective,
      lesson.takeaways.join(" ")
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function getContinueTarget() {
  if (progress.lastLesson) {
    const course = findCourse(progress.lastLesson.courseId);
    const lesson = findLesson(course, progress.lastLesson.lessonId);
    return { course, lesson };
  }

  const firstIncomplete = allLessons().find(({ course, lesson }) => !isComplete(course.id, lesson.id));
  return firstIncomplete || allLessons()[0];
}

function renderDashboard() {
  const summary = overallProgress();
  const target = getContinueTarget();
  const matches = matchingLessons();
  const quizCount = Object.entries(progress.quizAnswers)
    .filter(([key, answer]) => {
      const [courseId, lessonId] = key.split(":");
      const course = findCourse(courseId);
      const lesson = findLesson(course, lessonId);
      return lesson.quiz.answer === answer;
    }).length;

  app.innerHTML = `
    <section class="view-header">
      <div>
        <p class="eyebrow">Learning Workspace</p>
        <h1>Keep your coding practice moving.</h1>
        <p>Short sessions, practical challenges, and steady momentum for learning to code.</p>
      </div>
    </section>

    ${matches.length ? renderSearchResults(matches) : `
      <section class="dashboard-grid">
        <div class="stack">
          <article class="spotlight">
            <div class="spotlight-copy">
              <p class="eyebrow">${escapeHTML(target.course.title)}</p>
              <h2>${escapeHTML(target.lesson.title)}</h2>
              <p>${escapeHTML(target.lesson.objective)}</p>
              <div class="actions">
                <button class="primary-button" type="button" data-route="#lesson/${target.course.id}/${target.lesson.id}">
                  Continue
                </button>
                <button class="secondary-button" type="button" data-route="#courses">
                  Browse courses
                </button>
              </div>
            </div>
            <div class="spotlight-art">
              <img src="assets/hero-learning-lab.png" alt="Illustrated coding workspace with lesson cards and code editor">
            </div>
          </article>

          <div class="stats-grid" aria-label="Study stats">
            <div class="stat">
              <strong>${summary.complete}/${summary.total}</strong>
              <span>Lessons complete</span>
            </div>
            <div class="stat">
              <strong>${quizCount}</strong>
              <span>Quizzes passed</span>
            </div>
            <div class="stat">
              <strong>${summary.percent}%</strong>
              <span>Overall progress</span>
            </div>
          </div>

          <section>
            <div class="view-header">
              <div>
                <p class="eyebrow">Courses</p>
                <h2>Active paths</h2>
              </div>
            </div>
            <div class="course-grid">
              ${courses.map(renderCourseCard).join("")}
            </div>
          </section>
        </div>

        <aside class="stack">
          <section class="panel">
            <h2>Recent lessons</h2>
            <div class="activity-list">
              ${renderRecentActivity()}
            </div>
          </section>
          <section class="panel">
            <h2>Quick note</h2>
            <p>${escapeHTML(target.course.title)}: ${escapeHTML(target.lesson.title)}</p>
            <textarea class="quick-note" data-note="quick" rows="8">${escapeHTML(notes.quick || "")}</textarea>
          </section>
        </aside>
      </section>
    `}
  `;
}

function renderRecentActivity() {
  const completed = progress.completed.slice(-5).reverse();
  if (!completed.length) {
    return `<div class="empty-state"><p>No completed lessons yet.</p></div>`;
  }

  return completed.map((key) => {
    const [courseId, lessonId] = key.split(":");
    const course = findCourse(courseId);
    const lesson = findLesson(course, lessonId);
    return `
      <div class="activity-item">
        <div>
          <strong>${escapeHTML(lesson.title)}</strong>
          <span>${escapeHTML(course.title)}</span>
        </div>
        <span>Done</span>
      </div>
    `;
  }).join("");
}

function renderSearchResults(matches) {
  return `
    <section class="panel">
      <p class="eyebrow">Search Results</p>
      <h2>${matches.length} match${matches.length === 1 ? "" : "es"}</h2>
      <div class="search-results">
        ${matches.map(({ course, lesson }) => `
          <button class="result-button" type="button" data-route="#lesson/${course.id}/${lesson.id}">
            <span>
              <strong>${escapeHTML(lesson.title)}</strong>
              <span>${escapeHTML(course.title)} - ${escapeHTML(lesson.objective)}</span>
            </span>
            <span class="status-pill ${isComplete(course.id, lesson.id) ? "is-complete" : ""}">
              ${isComplete(course.id, lesson.id) ? "Complete" : lesson.duration}
            </span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCourses() {
  const matches = matchingLessons();
  app.innerHTML = `
    <section class="view-header">
      <div>
        <p class="eyebrow">Course Library</p>
        <h1>Choose a coding path.</h1>
        <p>Focused paths for web structure, JavaScript fluency, and algorithmic thinking.</p>
      </div>
    </section>

    ${matches.length ? renderSearchResults(matches) : `
      <section class="course-grid">
        ${courses.map(renderCourseCard).join("")}
      </section>
    `}
  `;
}

function renderCourseCard(course) {
  const progressInfo = courseProgress(course);
  const firstOpen = course.lessons.find((lesson) => !isComplete(course.id, lesson.id)) || course.lessons[0];
  return `
    <article class="course-card">
      <img src="${course.image}" alt="${escapeHTML(course.title)} course artwork">
      <div class="course-card-body">
        <div class="tag-row">
          <span class="tag">${escapeHTML(course.level)}</span>
          <span class="tag">${escapeHTML(course.duration)}</span>
        </div>
        <h3>${escapeHTML(course.title)}</h3>
        <p>${escapeHTML(course.description)}</p>
        <div class="course-meta">
          ${course.skills.map((skill) => `<span class="tag">${escapeHTML(skill)}</span>`).join("")}
        </div>
        <div class="course-progress">
          <div class="course-progress-row">
            <span>${progressInfo.complete}/${progressInfo.total} complete</span>
            <strong>${progressInfo.percent}%</strong>
          </div>
          <div class="meter" aria-hidden="true"><span style="width: ${progressInfo.percent}%"></span></div>
        </div>
        <div class="actions">
          <button class="primary-button" type="button" data-route="#lesson/${course.id}/${firstOpen.id}">
            Start
          </button>
          <button class="secondary-button" type="button" data-course-overview="${course.id}">
            Outline
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderCourseOutline(course) {
  return `
    <section class="course-detail panel">
      <p class="eyebrow">${escapeHTML(course.level)} Path</p>
      <h2>${escapeHTML(course.title)}</h2>
      <p>${escapeHTML(course.description)}</p>
      <div class="lesson-list">
        ${course.lessons.map((lesson) => `
          <button class="lesson-link" type="button" data-route="#lesson/${course.id}/${lesson.id}">
            <strong>${escapeHTML(lesson.title)}</strong>
            <small>${escapeHTML(lesson.duration)} - ${isComplete(course.id, lesson.id) ? "Complete" : lesson.objective}</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderLesson(courseId, lessonId) {
  const course = findCourse(courseId);
  const lesson = findLesson(course, lessonId);
  const key = lessonKey(course.id, lesson.id);
  const currentCode = savedCode[key] || lesson.starter;
  const selectedAnswer = progress.quizAnswers[key];
  const courseInfo = courseProgress(course);

  progress.lastLesson = { courseId: course.id, lessonId: lesson.id };
  if (!progress.enrolled.includes(course.id)) {
    progress.enrolled.push(course.id);
  }
  saveJSON(STORAGE_KEYS.progress, progress);

  app.innerHTML = `
    <section class="lesson-layout">
      <aside class="stack">
        <section class="panel">
          <p class="eyebrow">${escapeHTML(course.title)}</p>
          <h2>${courseInfo.percent}% complete</h2>
          <div class="course-progress">
            <div class="meter" aria-hidden="true"><span style="width: ${courseInfo.percent}%"></span></div>
          </div>
        </section>
        <nav class="lesson-list" aria-label="${escapeHTML(course.title)} lessons">
          ${course.lessons.map((item) => `
            <button
              class="lesson-link ${item.id === lesson.id ? "is-active" : ""}"
              type="button"
              data-route="#lesson/${course.id}/${item.id}"
            >
              <strong>${escapeHTML(item.title)}</strong>
              <small>${escapeHTML(item.duration)} - ${isComplete(course.id, item.id) ? "Complete" : "Open"}</small>
            </button>
          `).join("")}
        </nav>
      </aside>

      <div class="lesson-main">
        <article class="lesson-reader">
          <div class="lesson-meta">
            <span class="tag">${escapeHTML(course.level)}</span>
            <span class="tag">${escapeHTML(lesson.duration)}</span>
            <span class="status-pill ${isComplete(course.id, lesson.id) ? "is-complete" : ""}">
              ${isComplete(course.id, lesson.id) ? "Complete" : "In progress"}
            </span>
          </div>
          <h1>${escapeHTML(lesson.title)}</h1>
          <p>${escapeHTML(lesson.objective)}</p>
          ${lesson.body.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
          <ul class="takeaways">
            ${lesson.takeaways.map((takeaway) => `<li>${escapeHTML(takeaway)}</li>`).join("")}
          </ul>
        </article>

        <section class="practice-panel">
          <div class="practice-toolbar">
            <div>
              <p class="eyebrow">Practice</p>
              <h2>Code challenge</h2>
            </div>
            <div class="button-row">
              <button class="secondary-button" type="button" data-reset-code="${key}">Reset</button>
              <button class="secondary-button" type="button" data-check-code="${key}">Check</button>
              <button class="primary-button" type="button" data-run-code="lesson">Run</button>
            </div>
          </div>
          <p>${escapeHTML(lesson.hint)}</p>
          <div class="editor-grid">
            <textarea class="code-editor" spellcheck="false" data-code-editor="${key}">${escapeHTML(currentCode)}</textarea>
            <pre class="output-panel" id="lessonOutput">Output will appear here.</pre>
          </div>
          <p class="challenge-result" id="challengeResult"></p>
        </section>

        <section class="quiz-panel">
          <p class="eyebrow">Quiz</p>
          <h2>${escapeHTML(lesson.quiz.question)}</h2>
          <div class="choice-list">
            ${lesson.quiz.choices.map((choice, index) => {
              const isSelected = selectedAnswer === index;
              const stateClass = !isSelected ? "" : index === lesson.quiz.answer ? "is-correct" : "is-wrong";
              return `
                <button class="choice-button ${stateClass}" type="button" data-quiz-choice="${index}" data-quiz-key="${key}">
                  ${escapeHTML(choice)}
                </button>
              `;
            }).join("")}
          </div>
          ${selectedAnswer === undefined ? "" : `
            <p class="feedback">
              ${selectedAnswer === lesson.quiz.answer ? "Correct. " : "Not quite. "}
              ${escapeHTML(lesson.quiz.explanation)}
            </p>
          `}
        </section>
      </div>
    </section>
  `;
}

function renderPlayground() {
  const code = localStorage.getItem(STORAGE_KEYS.playground) || defaultPlayground;
  app.innerHTML = `
    <section class="view-header">
      <div>
        <p class="eyebrow">JavaScript Playground</p>
        <h1>Try small ideas fast.</h1>
        <p>A quiet space for small JavaScript experiments.</p>
      </div>
    </section>

    <section class="practice-panel">
      <div class="practice-toolbar">
        <div>
          <p class="eyebrow">Sandbox</p>
          <h2>Editor</h2>
        </div>
        <div class="button-row">
          <button class="secondary-button" type="button" data-reset-playground>Reset</button>
          <button class="primary-button" type="button" data-run-code="playground">Run</button>
        </div>
      </div>
      <div class="editor-grid">
        <textarea class="code-editor" spellcheck="false" data-playground-editor>${escapeHTML(code)}</textarea>
        <pre class="output-panel" id="playgroundOutput">Output will appear here.</pre>
      </div>
    </section>
  `;
}

function renderNotes() {
  app.innerHTML = `
    <section class="view-header">
      <div>
        <p class="eyebrow">Study Notes</p>
        <h1>Keep track of what clicks.</h1>
        <p>Patterns, questions, and decisions from each study session.</p>
      </div>
    </section>

    <section class="note-grid">
      <article class="note-card">
        <h2>General</h2>
        <textarea data-note="general">${escapeHTML(notes.general || "")}</textarea>
      </article>
      ${courses.map((course) => `
        <article class="note-card">
          <h2>${escapeHTML(course.title)}</h2>
          <textarea data-note="${course.id}">${escapeHTML(notes[course.id] || "")}</textarea>
        </article>
      `).join("")}
    </section>
  `;
}

function openCourseOutline(courseId) {
  const course = findCourse(courseId);
  app.innerHTML = `
    <section class="view-header">
      <div>
        <p class="eyebrow">Course Outline</p>
        <h1>${escapeHTML(course.title)}</h1>
        <p>${escapeHTML(course.description)}</p>
      </div>
      <button class="secondary-button" type="button" data-route="#courses">Back to courses</button>
    </section>
    ${renderCourseOutline(course)}
  `;
}

function checkLessonCode(key) {
  const [courseId, lessonId] = key.split(":");
  const course = findCourse(courseId);
  const lesson = findLesson(course, lessonId);
  const editor = document.querySelector(`[data-code-editor="${key}"]`);
  const result = document.querySelector("#challengeResult");

  if (!editor || !result) return;

  if (lesson.check(editor.value)) {
    markComplete(courseId, lessonId);
    result.textContent = lesson.success;
    result.className = "challenge-result is-success";
  } else {
    result.textContent = "Keep refining the solution.";
    result.className = "challenge-result is-error";
  }
}

function chooseQuiz(key, answer) {
  const [courseId, lessonId] = key.split(":");
  const course = findCourse(courseId);
  const lesson = findLesson(course, lessonId);
  progress.quizAnswers[key] = answer;

  if (answer === lesson.quiz.answer) {
    markComplete(courseId, lessonId);
  } else {
    saveJSON(STORAGE_KEYS.progress, progress);
  }

  renderLesson(courseId, lessonId);
}

function createRunnerURL() {
  const workerCode = `
    self.onmessage = async (event) => {
      const code = event.data.code;
      const serialize = (value) => {
        if (typeof value === "undefined") return "undefined";
        if (typeof value === "string") return value;
        try {
          return JSON.stringify(value, null, 2);
        } catch (error) {
          return String(value);
        }
      };
      const send = (type, message) => self.postMessage({ type, message });
      const scopedConsole = {
        log: (...args) => send("log", args.map(serialize).join(" ")),
        warn: (...args) => send("warn", args.map(serialize).join(" ")),
        error: (...args) => send("error", args.map(serialize).join(" "))
      };

      try {
        const result = Function("console", '"use strict";\\n' + code)(scopedConsole);
        if (result && typeof result.then === "function") {
          const awaited = await result;
          if (typeof awaited !== "undefined") send("log", "Return: " + serialize(awaited));
        } else if (typeof result !== "undefined") {
          send("log", "Return: " + serialize(result));
        }
        send("done", "");
      } catch (error) {
        send("error", error.name + ": " + error.message);
        send("done", "");
      }
    };
  `;
  return URL.createObjectURL(new Blob([workerCode], { type: "text/javascript" }));
}

const runnerURL = createRunnerURL();

function runCodeFrom(editor, output) {
  if (!editor || !output) return;

  if (activeWorker) {
    activeWorker.terminate();
  }

  const worker = new Worker(runnerURL);
  activeWorker = worker;
  const lines = [];
  output.textContent = "Running...";

  const timer = window.setTimeout(() => {
    worker.terminate();
    if (activeWorker === worker) activeWorker = null;
    lines.push("[stopped] Execution took longer than 2 seconds.");
    output.textContent = lines.join("\\n");
  }, 2000);

  worker.onmessage = (event) => {
    const { type, message } = event.data;
    if (type === "done") {
      window.clearTimeout(timer);
      worker.terminate();
      if (activeWorker === worker) activeWorker = null;
      output.textContent = lines.length ? lines.join("\\n") : "Done.";
      return;
    }

    lines.push(`[${type}] ${message}`);
    output.textContent = lines.join("\\n");
  };

  worker.onerror = (error) => {
    window.clearTimeout(timer);
    worker.terminate();
    if (activeWorker === worker) activeWorker = null;
    output.textContent = `[error] ${error.message}`;
  };

  worker.postMessage({ code: editor.value });
}

function resetProgress() {
  progress = {
    completed: [],
    quizAnswers: {},
    lastLesson: null,
    enrolled: []
  };
  savedCode = {};
  saveJSON(STORAGE_KEYS.progress, progress);
  saveJSON(STORAGE_KEYS.code, savedCode);
  updateProgressWidgets();
  render();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeGlyph.textContent = theme === "dark" ? "Lt" : "Dk";
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    routeTo(routeButton.dataset.route);
    return;
  }

  const outlineButton = event.target.closest("[data-course-overview]");
  if (outlineButton) {
    openCourseOutline(outlineButton.dataset.courseOverview);
    return;
  }

  const runButton = event.target.closest("[data-run-code]");
  if (runButton) {
    const mode = runButton.dataset.runCode;
    const editor = mode === "lesson"
      ? document.querySelector("[data-code-editor]")
      : document.querySelector("[data-playground-editor]");
    const output = mode === "lesson"
      ? document.querySelector("#lessonOutput")
      : document.querySelector("#playgroundOutput");
    runCodeFrom(editor, output);
    return;
  }

  const resetCodeButton = event.target.closest("[data-reset-code]");
  if (resetCodeButton) {
    const key = resetCodeButton.dataset.resetCode;
    const [courseId, lessonId] = key.split(":");
    const course = findCourse(courseId);
    const lesson = findLesson(course, lessonId);
    savedCode[key] = lesson.starter;
    saveJSON(STORAGE_KEYS.code, savedCode);
    renderLesson(courseId, lessonId);
    return;
  }

  const checkButton = event.target.closest("[data-check-code]");
  if (checkButton) {
    checkLessonCode(checkButton.dataset.checkCode);
    return;
  }

  const quizButton = event.target.closest("[data-quiz-choice]");
  if (quizButton) {
    chooseQuiz(quizButton.dataset.quizKey, Number(quizButton.dataset.quizChoice));
    return;
  }

  if (event.target.closest("[data-reset-playground]")) {
    localStorage.setItem(STORAGE_KEYS.playground, defaultPlayground);
    renderPlayground();
    return;
  }
});

document.addEventListener("input", (event) => {
  const codeEditor = event.target.closest("[data-code-editor]");
  if (codeEditor) {
    savedCode[codeEditor.dataset.codeEditor] = codeEditor.value;
    saveJSON(STORAGE_KEYS.code, savedCode);
    return;
  }

  const playgroundEditor = event.target.closest("[data-playground-editor]");
  if (playgroundEditor) {
    localStorage.setItem(STORAGE_KEYS.playground, playgroundEditor.value);
    return;
  }

  const noteEditor = event.target.closest("[data-note]");
  if (noteEditor) {
    notes[noteEditor.dataset.note] = noteEditor.value;
    saveJSON(STORAGE_KEYS.notes, notes);
  }
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  render();
});

document.querySelector("#resetProgress").addEventListener("click", () => {
  if (window.confirm("Reset completed lessons, quiz answers, and saved challenge code?")) {
    resetProgress();
  }
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

window.addEventListener("hashchange", render);

applyTheme(localStorage.getItem(STORAGE_KEYS.theme) || "light");
if (!window.location.hash) {
  window.location.hash = "#dashboard";
}
render();
