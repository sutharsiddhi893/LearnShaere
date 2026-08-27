/* =========================================================
   BCA • SEM 3 • Web Application Development - III
   UNIT 2 — DOM, Events and Forms
========================================================= */

import {
  createTopic,
  heading,
  text,
  list,
  code,
  table,
  note,
  definition,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — The DOM and Selecting Elements
========================================================= */

const domBasics = createTopic(
    "dom-and-selectors",
    "The DOM and Selecting Elements",

    [
        definition(
            "DOM (Document Object Model)",
            "A tree-shaped representation of the HTML page that JavaScript can read and change. Every tag becomes a node that can be selected, updated or removed."
        ),

        heading("Selecting elements"),

        table(
            ["Method", "Returns", "Example"],
            [
                ["getElementById", "One element or null", `document.getElementById("title")`],
                ["querySelector", "First match or null", `document.querySelector(".card")`],
                ["querySelectorAll", "Static NodeList", `document.querySelectorAll("li")`],
                ["getElementsByClassName", "Live HTMLCollection", `document.getElementsByClassName("item")`],
                ["getElementsByTagName", "Live HTMLCollection", `document.getElementsByTagName("p")`],
            ]
        ),

        code(
            `const title = document.getElementById("title");
const firstBtn = document.querySelector("button.primary");
const items = document.querySelectorAll("#list li");

items.forEach((li) => {
  console.log(li.textContent);
});`,
            "javascript",
            "Modern selectors"
        ),

        heading("Reading and changing content"),

        table(
            ["Property / method", "Use"],
            [
                ["textContent", "Plain text; safe; no HTML parsed"],
                ["innerText", "Visible text only (respects CSS)"],
                ["innerHTML", "HTML string; can be unsafe with user input"],
                ["value", "Value of input, textarea, select"],
                ["setAttribute / getAttribute", "Any HTML attribute"],
                ["classList.add/remove/toggle/contains", "CSS classes"],
                ["style.color", "Inline style (prefer classes)"],
            ]
        ),

        code(
            `title.textContent = "Dashboard";
title.classList.add("highlight");
document.querySelector("#email").value = "";
document.querySelector("img").src = "photo.jpg";`,
            "javascript",
            "Updating the page"
        ),

        note(
            "Never assign unsanitised user input to innerHTML. That is a common XSS hole. Prefer textContent.",
            "warning",
            "Security"
        ),

        keyPoints([
            "The DOM is a live tree of the page that JS can change.",
            "querySelector / querySelectorAll are the default modern APIs.",
            "textContent is safer than innerHTML for untrusted text.",
            "classList is the correct way to change CSS classes.",
        ]),
    ],

    {
        summary:
            "Select DOM nodes and update text, attributes, classes and form values safely.",
        minutes: 11,
        tags: ["dom", "selectors", "javascript", "important"],

        mcqs: [
            mcq(
                "querySelectorAll returns:",
                ["One element", "A live HTMLCollection", "A NodeList of all matches", "A string"],
                2,
                "It returns a static NodeList of every matching element."
            ),
            mcq(
                "Which property is safer for showing user-typed text?",
                ["innerHTML", "outerHTML", "textContent", "document.write"],
                2,
                "textContent does not parse HTML, so it avoids XSS from tags."
            ),
            mcq(
                "document.getElementById(\"x\") returns null when:",
                ["The id exists twice", "The element is hidden", "No element has that id", "The script uses defer"],
                2,
                "Missing ids produce null."
            ),
        ],

        questions: [
            qa(
                "What is the DOM? How do you select and change an element?",
                "The DOM is the browser's tree model of the HTML document. Select a node with getElementById or querySelector, then change textContent, value, src, or classList. For example: document.querySelector(\"#title\").textContent = \"Home\";",
                4
            ),
            qa(
                "Why is innerHTML risky? What should you use instead for plain text?",
                "innerHTML parses a string as HTML. If that string contains a script or event handler from the user, the browser may run it (XSS). For plain text use textContent, which treats the string as text only.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Creating, Traversing and Removing Nodes
========================================================= */

const domCreate = createTopic(
    "creating-and-removing-nodes",
    "Creating, Traversing and Removing Nodes",

    [
        heading("Create and insert"),

        code(
            `const ul = document.querySelector("#todo");
const li = document.createElement("li");
li.textContent = "Submit assignment";
li.className = "item";
ul.append(li);          // add at end

const first = ul.querySelector("li");
ul.prepend(document.createElement("li"),; // add at start
first.remove();`,
            "javascript",
            "createElement, append, remove"
        ),

        heading("Traversal"),

        table(
            ["Property", "Meaning"],
            [
                ["parentElement", "Parent node"],
                ["children", "Element children only"],
                ["firstElementChild / lastElementChild", "First / last element child"],
                ["nextElementSibling / previousElementSibling", "Neighbour elements"],
                ["closest(selector)", "Nearest ancestor that matches"],
            ]
        ),

        heading("A tiny todo add/remove example"),

        code(
            `const form = document.querySelector("#add-form");
const input = document.querySelector("#task");
const list = document.querySelector("#todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = ""; // keep empty; use text nodes
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", () => li.remove(),;

  li.append(" ", del);
  list.append(li);
  input.value = "";
  input.focus();
});`,
            "javascript",
            "Build list items in JS"
        ),

        keyPoints([
            "createElement + append is the safe way to build UI.",
            "remove() deletes a node from the tree.",
            "closest() is useful in event delegation.",
            "Trim input and ignore empty strings before adding nodes.",
        ]),
    ],

    {
        summary:
            "Create, insert, traverse and remove DOM nodes; build a small dynamic list.",
        minutes: 10,
        tags: ["dom", "createElement", "javascript"],

        mcqs: [
            mcq(
                "Which method creates a new element that is not yet on the page?",
                ["querySelector", "createElement", "append", "write"],
                1,
                "createElement builds a detached element; append puts it in the tree."
            ),
            mcq(
                "element.remove() does what?",
                ["Hides the element with CSS", "Deletes the node from the DOM", "Clears only text", "Reloads the page"],
                1,
                "The node is taken out of the document."
            ),
        ],

        questions: [
            qa(
                "Write the steps to add a new list item from a text box using JavaScript.",
                "Select the form, input and ul. On submit, call preventDefault, read and trim the input. If empty, stop. createElement(\"li\"), set textContent, optionally add a delete button, append the li to the ul, then clear and focus the input.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Events and Event Flow
========================================================= */

const events = createTopic(
    "events-and-event-flow",
    "Events and Event Flow",

    [
        definition(
            "Event",
            "A signal that something happened in the page: a click, key press, submit, input, load, etc. JavaScript listens and runs a callback."
        ),

        heading("addEventListener"),

        code(
            `const btn = document.querySelector("#save");

function onSave(e) {
  console.log("clicked", e.target);
}

btn.addEventListener("click", onSave);
// later: btn.removeEventListener("click", onSave);`,
            "javascript",
            "Add and remove a listener"
        ),

        heading("Useful events"),

        table(
            ["Event", "Typical use"],
            [
                ["click", "Buttons, links, cards"],
                ["submit", "Forms (always preventDefault to stay on the page)"],
                ["input", "Live search / character count"],
                ["change", "Select, checkbox, file input"],
                ["keydown / keyup", "Shortcuts, Enter to submit"],
                ["mouseover / mouseout", "Hover effects (prefer CSS when possible)"],
                ["DOMContentLoaded", "DOM is ready; scripts can run"],
            ]
        ),

        heading("The event object"),

        list([
            "e.target — the actual element that was clicked / typed in",
            "e.currentTarget — the element that has the listener",
            "e.preventDefault() — stop the browser default (form submit, link navigation)",
            "e.stopPropagation() — stop the event from bubbling further",
        ]),

        heading("Bubbling and delegation"),

        text(
            "Most events start at the target and bubble up to the document. Instead of putting a listener on every list item, put one listener on the parent and check e.target."
        ),

        code(
            `document.querySelector("#todo").addEventListener("click", (e) => {
  if (e.target.matches("button.delete"), {
    e.target.closest("li").remove();
  }
});`,
            "javascript",
            "Event delegation"
        ),

        note(
            "Delegation works for items added later. Individual listeners on each new li also work but use more memory.",
            "tip",
            "Why delegation"
        ),

        keyPoints([
            "Use addEventListener, not inline onclick, in real code.",
            "Always preventDefault on form submit if you handle it in JS.",
            "Events bubble; one parent listener can handle many children.",
            "e.target is the source; e.currentTarget is the listener element.",
        ]),
    ],

    {
        summary:
            "Attach listeners, use the event object, prevent defaults, and apply event delegation.",
        minutes: 12,
        tags: ["events", "delegation", "javascript", "important"],

        mcqs: [
            mcq(
                "Which method registers a click handler the modern way?",
                ["btn.onclick = ... only", "btn.addEventListener(\"click\", fn)", "btn.click = fn", "window.on(\"click\")"],
                1,
                "addEventListener is the standard API and allows multiple handlers."
            ),
            mcq(
                "preventDefault() on a form submit:",
                ["Deletes the form", "Stops the page from reloading / navigating", "Clears inputs", "Removes listeners"],
                1,
                "It cancels the browser's default submit behaviour."
            ),
            mcq(
                "Event delegation means:",
                [
                    "Putting a listener on every child",
                    "Listening on a parent and checking e.target",
                    "Removing all events",
                    "Using inline HTML attributes only",
                ],
                1,
                "One parent listener handles current and future children."
            ),
        ],

        questions: [
            qa(
                "Explain event bubbling and event delegation with an example.",
                "After an event runs on the target, it travels up through ancestors (bubbling). Delegation uses that: put one click listener on a ul. When any delete button inside is clicked, e.target is the button. If it matches button.delete, remove the closest li. New items added later are handled automatically because they still bubble to the ul.",
                5
            ),
            qa(
                "Why must you call preventDefault in a submit handler written in JavaScript?",
                "The browser's default action for submit is to send the form and reload or navigate. That wipes in-memory state and restarts the page. preventDefault keeps the user on the same page so your script can validate, call an API, or update the DOM instead.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Forms and Client-Side Validation
========================================================= */

const formsValidation = createTopic(
    "forms-and-validation",
    "Forms and Client-Side Validation",

    [
        text(
            "Client-side validation gives fast feedback. It is not a security control. The server (or a later backend paper) must still validate. In this paper we validate in the browser with HTML attributes and JavaScript."
        ),

        heading("Useful input attributes"),

        table(
            ["Attribute", "Role"],
            [
                ["required", "Must not be empty"],
                ["type=\"email\" / number / url", "Built-in format check"],
                ["minlength / maxlength", "Length limits"],
                ["min / max / step", "Numeric range"],
                ["pattern", "Custom regular expression"],
            ]
        ),

        heading("Constraint Validation API"),

        code(
            `const form = document.querySelector("#register");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "";

  if (!form.checkValidity(), {
    form.reportValidity();
    return;
  }

  if (password.value.length < 8) {
    password.setCustomValidity("Password must be at least 8 characters");
    password.reportValidity();
    password.setCustomValidity("");
    return;
  }

  msg.textContent = "Form looks valid. Ready to send.";
});`,
            "javascript",
            "checkValidity and custom messages"
        ),

        heading("Manual checks (exam-friendly)"),

        code(
            `function isValidEmail(value) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

function validate(data) {
  const errors = {};
  if (!data.name.trim(), errors.name = "Name is required";
  if (!isValidEmail(data.email), errors.email = "Enter a valid email";
  if (data.password.length < 8) errors.password = "Min 8 characters";
  return errors;
}`,
            "javascript",
            "Simple validation helpers"
        ),

        heading("Reading a form into an object"),

        code(
            `const data = Object.fromEntries(new FormData(form),;
// { name: "...", email: "...", password: "..." }`,
            "javascript",
            "FormData"
        ),

        keyPoints([
            "HTML required/type/pattern cover many cases.",
            "checkValidity / reportValidity talk to the browser UI.",
            "Custom JS checks handle rules the browser cannot express.",
            "Client-side validation improves UX; it does not replace server checks.",
        ]),
    ],

    {
        summary:
            "Validate forms with HTML attributes, the Constraint Validation API and custom JavaScript rules.",
        minutes: 11,
        tags: ["forms", "validation", "javascript", "important"],

        mcqs: [
            mcq(
                "FormData(form) is used to:",
                ["Style the form", "Collect named field values", "Delete cookies", "Compile JavaScript"],
                1,
                "It reads the current values of named controls."
            ),
            mcq(
                "Client-side validation alone is:",
                ["Enough for security", "A UX help, not a security boundary", "Faster than the network so always trusted", "Required by HTTP"],
                1,
                "Users can disable JS; the server must still validate."
            ),
        ],

        questions: [
            qa(
                "How do you validate a registration form in JavaScript? List the steps.",
                "Listen for submit and call preventDefault. Trim values. Check required fields, email format and password length. Either use form.checkValidity() plus setCustomValidity, or build an errors object and show messages next to fields. If there are no errors, proceed (for example call fetch). Remember this does not replace server-side validation.",
                5
            ),
        ],
    }
);

export const unit2Topics = [
    domBasics,
    domCreate,
    events,
    formsValidation,
];
