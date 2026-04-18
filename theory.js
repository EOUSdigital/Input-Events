"use strict";

//Title 🟧 Module 8 - Events: Lesson 07. Input Events

//? 1️⃣ What Are Input Events?
//  👉 Input events fire when the value of an input field changes.


//* 🎯 Key Idea
//  Keyboard events = “a key was pressed”
//  Input events = “the value changed”


//* 💻 Basic Example

const input = document.getElementById('inputField');

input.addEventListener('input', (e) => {
    console.log(e.target.value);
});


//* 🔍 What Happens
//  Every time the value changes:
//  • Typing → ✅ fires
//  • Deleting → ✅ fires
//  • Paste → ✅ fires
//  • Autocomplete → ✅ fires

//* 🧠 Why This Is Important
//  👉 It captures real user input, not just key presses

//? 2️⃣ input vs change (CRITICAL)

//* 🔤 input Event
//  👉 Fires immediately on every change

input.addEventListener('input', "...");

//  ✔️ Real-time
//  ✔️ Continuous


//* 🔄 change Event
//  👉 Fires only when user finishes editing

input.addEventListener('change', "...");

//  ✔️ After blur (click outside)
//  ✔️ After Enter (sometimes)


//* 🧠 Comparison
//  | Event    | When it fires            |
//  | -------- | ------------------------ |
//  | `input`  | Every change             |
//  | `change` | When editing is complete |


//* 🎯 Example
//  Type: hello
//  | Event    | When it fires                      |
//  | -------- | ---------------------------------- |
//  | `input`  | h → he → hel → hell → hello        |
//  | `change` | only once (after leaving input)    |


//? 🧩 Guided Practice (Mini Task)

//  🎯 Task: Live Character Counter
//  🧱 HTML is included in index.html


//* 🎯 Goal
//  As user types:
//  Characters: 5

//# 💡 Hint
e.target.value.length;


//* ✅ Success Criteria
//  • Updates in real time
//  • Works with typing, delete, paste

//! ⚠️ Common Mistakes
//  • Using keydown instead of input
//  • Forgetting .value
//  • Not updating UI dynamically

//* 🧠 Mental Model
//  User types
//      ↓
//  Input value changes
//      ↓
//  input event fires
//      ↓
//  You read value
//      ↓
//  You update UI


//# 🤔 Reflection

//  Why is "input" more reliable than "keydown" for tracking text length?
//  Answer: When a user types, deletes, pastes, or autocompletes the input value, it changes while the input event fires. It is more reliable to track the length with input because it will count all characters, whereas the keydown event will count only once when the user types or multiple times when a key is held down.


//! Feedback

//TODO  This is very strong work again — both your reflection and your implementation are solid 👏
//  You are clearly building real understanding now.

//? 🧠 1. Reflection Assessment

//  Your Answer:
//  • “input is more reliable because it handles typing, deleting, pasting, autocomplete…”

//* ✅ What You Got Right
//  ✔️ You identified all key input sources
//  ✔️ You understand that input tracks value changes
//  ✔️ You correctly pointed out keydown limitations

//* 🔧 Small Precision Upgrade
//  This part needs correction:
//  • “keydown will count only once when the user types…”

//  👉 Not correct — remember:
//  • "keydown" fires multiple times when holding a key.
//  • But still does NOT guarantee correct value tracking.

//* 🎯 Stronger Version
//  The input event is more reliable because it fires whenever the value of the field changes, regardless of how the change occurs (typing, deleting, pasting, autocomplete). In contrast, keydown only detects key presses and does not always reflect the actual value of the input.

//# 🧠 Key Insight
//  👉 keydown = action
//  👉 input = result


//? 🧠 2. Code Review

//  Your Code: let count = 0;

//* ✅ What You Did Well
//  ✔️ Correct event → input
//  ✔️ Correct property → .value.length
//  ✔️ Dynamic UI update
//  ✔️ Reset functionality added (nice UX touch)

//# ⚠️ Improvement 1: Unnecessary State Variable

let count = 0;

//  👉 This is not needed

//! ❌ Why?

//  You already have:

e.target.value.length;

//  👉 That is your source of truth

//* ✅ Better Version

input.addEventListener('input', (e) => {
    char.textContent = `Characters: ${e.target.value.length}`;
});

//# ⚠️ Improvement 2: Reset Button (Good, but optional)

const resetBtn = document.getElementById('updateBtn');

//  ✔️ Nice addition
//  ✔️ Shows initiative

//  👉 Just make sure:
//  • The button exists in HTML
//  • The naming matches (updateBtn vs resetBtn)

//# ⚠️ Improvement 3: Minor Naming Clarity

const char = document.getElementById('charCount');

// ✅ Better

const charCount = document.getElementById('charCount');


//? 🧠 What You Demonstrated

//  You correctly used:
//  • ✅ input event
//  • ✅ Real-time updates
//  • ✅ DOM manipulation
//  • ✅ Value tracking
//  👉 This is core frontend behavior

//? 📊 Assessment

//  | Area                  | Score     |
//  | --------------------- | --------- |
//  | Concept Understanding | 9/10      |
//  | Implementation        | 8.5/10    |
//  | Code Quality          | 8/10      |

//  👉 Overall: Strong and improving fast

//# 🤔 Reflection

//  Why is it better to avoid storing "count" in a variable when you can directly use:  e.target.value.length;
//  Answer: Using "e.target.value.length" directly is often preferred over storing the result in a local variable because it reduces code complexity and ensures are working with the most current data.


//TODO 🧠 Exercise: Live Input Validation

//? 🎯 Goal

//  Build a system that:
//  • Watches user input in real time
//  • Validates it
//  • Shows feedback

//? 🧩 What You Are Building

//  👉 A live validation system
//  Like:
//  • Login forms
//  • Signup forms
//  • Search inputs

//? 🧱 HTML Structure

//  Use something like:
```js
<input type="text" id="usernameInput" placeholder="Enter username" />
<p id="validationMessage">Waiting for input...</p>
```

//? 🎯 Validation Rules

//  You must implement:

//* ✅ Rule 1: Minimum Length
//  • Less than 3 characters → ❌ Invalid
//  • 3 or more → ✅ Valid

//  🎯 Expected Output
//  | Input | Output              |
//  | ----- | ------------------- |
//  | `a`   | "Too short ❌"      |
//  | `ab`  | "Too short ❌"      |
//  | `abc` | "Valid username ✅" |

//  🧠 Behavior Requirements
//  • Use input event
//  • Check length in real time
//  • Update message dynamically

//# 💡 Hint

e.target.value.length;

//* ⚠️ Important Thinking

//  You are now doing:
//  • User input → Validation → Feedback
//  👉 This is the foundation of forms


//? 🔥 Optional Enhancements (Recommended)

//  If you want to push yourself:

//* 🎨 1. Add Color Feedback
//  • Invalid → red text
//  • Valid → green text

//* 🚫 2. Empty Input
//  If input is empty:  "Please enter a username"

//* 🔒 3. Trim Input
value.trim();
//  👉 Prevents spaces from cheating validation

//? 🧠 Logic Flow

//  User types
//      ↓
//  input event fires
//      ↓
//  get value
//      ↓
//  trim value
//      ↓
//  check length
//      ↓
//  update UI

//* ✅ Success Criteria
//  • Updates in real time
//  • Handles empty input
//  • Correct validation messages
//  • Clean UI feedback

//# 🤔 Reflection Before Coding

//  Why is value.trim() important in validation?
//  Answer: The value.trim() prevents spaces from "cheating" the validation rules.


//! Feedback

//TODO  This is very solid work — you’ve implemented a proper real-time validation system 👏
//  You are now clearly thinking in terms of UX + logic, not just syntax.

//  Let’s go through it carefully.

//* 🧠 Overall Assessment

//  👉 This is clean, correct, and practical.
//  You implemented:
//  • ✅ input event correctly
//  • ✅ trim() (important!)
//  • ✅ Conditional validation
//  • ✅ Dynamic UI feedback
//  • ✅ Edge case handling (empty input)
//  👉 This is exactly how real forms behave


//* 🔍 Detailed Review

//? 1️⃣ Validation Logic — 🔥 Excellent

const trimmed = e.target.value.trim();
//  ✔️ Prevents " " from passing validation
//  ✔️ Shows strong understanding

if (trimmed.length === 0) {};
//  ✔️ Handles empty input explicitly
//  ✔️ Good UX

if (trimmed.length < 3) {};
//  ✔️ Clear rule
//  ✔️ Correct condition

validationMessage.textContent = 'Valid username ✅';
//  ✔️ Clean success case


//? 2️⃣ Visual Feedback — ✅ Good

validationMessage.style.color = 'red';
//  ✔️ Immediate feedback
//  ✔️ Improves UX

//# 🔧 Small Improvement (Best Practice)

//  Instead of inline styles:
//  👉 Use CSS classes

//* ✅ Better Approach

//  JavaScript: validationMessage.className = 'error';

//  CSS
//  .error { color: red; }
//  .success { color: green; }
//  .neutral { color: black; }

//  👉 Cleaner and scalable


//? 3️⃣ Space Prevention — ⚠️ Needs Rethinking

usernameInput.addEventListener('keydown', (e) => {
    const spaceKeys = [" "];
    if (spaceKeys.includes(e.key)) {
        e.preventDefault();
    }
});

//! ❗ Problem

//  👉 You are blocking spaces entirely
//  That means:
//  • User cannot type "john doe"
//  • This may be too restrictive


//* 🎯 Recommended Approach
//  👉 Remove this block entirely
//  👉 Let trim() handle it

//* 🔥 Why?

"   abc   ".trim() - "abc"

//  👉 You already solved the problem correctly


//? 4️⃣ Code Quality — ✅ Strong
//  ✔️ Clear variable names
//  ✔️ Good structure
//  ✔️ Readable conditions


//? 🧠 What You Demonstrated
//  You combined:
//  • Input events
//  • Validation logic
//  • UI feedback
//  • Edge case handling
//  👉 This is real form logic


//? 📊 Assessment
//  | Area         | Score  |
//  | ------------ | ------ |
//  | Logic        | 9.5/10 |
//  | UX Thinking  | 9/10   |
//  | Code Quality | 8.5/10 |
//  👉 Overall: Strong intermediate level


//# 🤔 Reflection

//  Why is this better:
    const trimmed = value.trim();
//  instead of validating value directly?
//  Answer: 


//? 🧠 Exercise: Password Strength Checker

//* 🎯 Goal
//  Build a system that:
//  • Analyzes a password in real time
//  • Applies multiple validation rules
//  • Gives graded feedback


//* 🧩 What You Are Building
//  👉 A password strength indicator
//  Like you see in:
//  • Signup forms
//  • Banking apps
//  • Security systems

//* 🧱 HTML Structure

```js
<input type="password" id="passwordInput" placeholder="Enter password" />
<p id="passwordMessage">Enter a password</p>
```

//* 🎯 Validation Rules

//  You must check:

//? 🔑 Rule 1: Minimum Length
//  • Less than 6 → ❌ Weak

//? 🔤 Rule 2: Contains Letters
//  • Must include at least one letter

//? 🔢 Rule 3: Contains Numbers
//  • Must include at least one number

//? 🔒 Rule 4: Strong Password
//  • 6+ characters
//  • Includes letters
//  • Includes numbers


//* 🎯 Output Levels
//  |   Condition   |   Message                 |
//  |   ----------  |   ----------------------  |
//  |   Empty       |	"Enter a password"      |
//  |   Weak        |   "Weak password ❌"      |
//  |   Medium      |   "Medium strength ⚠️"    |
//  |   Strong	    |   "Strong password ✅"    |


//* 🧠 Behavior Requirements
//  • Use input event
//  • Validate in real time
//  • Update message dynamically

//# 💡 Hints (Important)

//? 🔤 Check for letters
"/[a-zA-Z]/.test(value)"

//? 🔢 Check for numbers
"/[0-9]/.test(value)"

//? ✂️ Trim input
value.trim();

//? 🧠 Logic Flow
//  User types password
//      ↓
//  input event fires
//      ↓
//  get value
//      ↓
//  trim value
//      ↓
//  check rules:
//      - length
//      - letters
//      - numbers
//      ↓
//  decide strength
//      ↓
//  update UI


//# ⚠️ Common Mistakes
//  • Forgetting .test() for regex
//  • Not handling empty input
//  • Mixing up conditions
//  • Overwriting logic accidentally


//? 🔥 Optional Enhancements

//  If you want to push further:

//* 🎨 Color Feedback
//  • Weak → red
//  • Medium → orange
//  • Strong → green

//* 📊 Strength Meter (Advanced)
//  • Add a progress bar
//  • Increase width based on strength

//* 🔐 Extra Rules (Advanced)
//  • Special characters
//  • Uppercase + lowercase
//  • Minimum length 8+


//# 🤔 Reflection Before Coding

//  Why is this better than:
//  if (value.length > 6) → strong
//  👉 What’s missing?
//  Answer: Simple length check if (value.length > 6) only counts characters—ignores password quality. Length alone = quantity. Regex = quality + diversity. 


//! Feedback

//TODO  This is a very ambitious attempt — and that’s a good thing 👏
//  But I am going to be direct: your logic is overcomplicated and partially broken, and that is holding you back.
//  Let’s fix it properly.

//* 🧠 What You Did Well

//? ✅ You Tried Advanced Validation

const regex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

//  This is not beginner-level
//  👉 You are thinking about real password rules
//  ✔️ That is great initiative


//! ❗ The Core Problem
//  You combined:
//  • Length checks ❌
//  • Regex checks ❌
//  • Strength levels ❌
//  👉 But they conflict with each other

//! 🚨 Example of the Problem

if (passwordLength.length <= 6 && regex.test(passwordLength))

//  👉 Your regex requires:
//  • Exactly 8 characters
//  • Multiple uppercase
//  • Multiple lowercase
//  • Multiple numbers
//  • Special characters

//  👉 So:
//  • A password with length ≤ 6 will NEVER pass the regex
//  ❌ This condition will never run

//? 🧠 The Real Issue

//  You are trying to:
//  • Use ONE complex regex to control ALL strength levels
//  👉 That’s not how this should be done

//* ✅ Correct Approach (Important)
//  👉 Separate your logic:
//  1. Check length
//  2. Check letters
//  3. Check numbers
//  4. Decide strength


//* 🔥 Clean, Correct Structure
//  Here is the thinking, not just code:

//? Step 1: Get Value
const value = e.target.value.trim();

//? Step 2: Check Conditions
//  • Has letters?
//  • Has numbers?

//? Step 3: Decide Strength
//  Empty → "Enter a password"
//  Length < 6 → Weak
//  Has letters OR numbers → Medium
//  Has letters AND numbers → Strong

//* ✅ Your Version

passwordInput.addEventListener('input', (e) => { 
    const passwordLength = e.target.value.trim(); 
    const regex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/; 
    
    if (passwordLength.length === 0) {
        passwordMessage.textContent = "Enter a password"; 
        passwordMessage.style.color = 'black'; 
    } else if (passwordLength.length <= 6 && regex.test(passwordLength)) {
        passwordMessage.textContent = "Weak password ❌";
        passwordMessage.style.color = 'red';
    } else if (passwordLength.length === 7 && regex.test(passwordLength)) {
        passwordMessage.textContent = "Medium strength ⚠️";
        passwordMessage.style.color = 'orange';
    } else if (passwordLength.length >= 8 && regex.test(passwordLength)) {
        passwordMessage.textContent = "Strong password ✅"; passwordMessage.style.color = 'green';
    }
});

//* 🧠 Why The Simple Solution Is Better
//  👉 Clear logic
//  👉 No conflicting conditions
//  👉 Matches real-world behavior
//  👉 Easy to extend later


//# ⚠️ Key Lesson (Very Important)
//  Do not jump to complex regex too early

//* 🔥 Rule of Thumb
//  Simple logic first → THEN optimize

//* 🧠 What You Were Trying to Do
//  You attempted:
//  👉 Enterprise-level validation logic
//  But without:
//  👉 Proper condition separation

//* 📊 Assessment
//  | Area                  | Score  |
//  | --------------------- | ------ |
//  | Initiative            | 10/10  |
//  | Logic correctness     | 6.5/10 |
//  | Complexity management | 6/10   |
//  👉 You are aiming high — now we refine it


//# 🤔 Reflection

//  Why is this dangerous?
if (conditionA && regex.test(value)) {};
//  👉 When the regex already enforces stricter rules.
//  Answer: It is dangerous when that "if" creates a false sense of safety "regex.test(value)" should already be the gatekeeper, so adding "conditionA" can let an invalid value slip through if "conditionA" is wrong, out of sync, or easier to satisfy than the regex. The real risk is "logic drift" — now having two places that can disagree about what counts as valid.


//TODO  🧠 Upgrade: Password Strength Meter (Visual Bar)

//* 🎯 Goal
//  Enhance your current password checker by adding:
//  👉 A visual strength bar that updates in real time

//* 🧩 What You Will Build
//  [ Password Input        ]
//  [ ███████░░░ ]  → Medium

//? 🧱 Step 1: HTML Structure

//  Add a strength bar container: HTML can be found in index.html

//* 💡 Optional Label
//  HTML can be found in index.html

//? 🎨 Step 2: CSS Guidance

//  You will need:
//  Container
//  • Fixed width
//  • Light background
//  • Rounded corners

//  Fill Element
//  • Starts at width: 0%
//  • Expands based on strength
//  • Changes color

//* 🎯 Think:
//  Weak    → 30% width → red  
//  Medium  → 60% width → orange  
//  Strong  → 100% width → green  

//? 🧠 Step 3: JavaScript Logic Upgrade

//  You already have validation logic.

//  Now extend it to control:
//  1️⃣ Width:    strengthFill.style.width = "60%";
//  2️⃣ Color:    strengthFill.style.backgroundColor = "orange";

//* 🎯 Suggested Mapping
//  | Strength | Width | Color       |
//  | -------- | ----- | ----------- |
//  | Empty    | 0%    | transparent |
//  | Weak     | 30%   | red         |
//  | Medium   | 60%   | orange      |
//  | Strong   | 100%  | green       |

//* 🧠 Important Thinking
//  You are now controlling:
//  • State → UI Representation

//# ⚠️ Common Mistakes
//  • Not resetting bar on empty input
//  • Mixing validation logic with UI updates
//  • Hardcoding values everywhere (keep it clean)

//* 🔥 Clean Architecture Hint
//  Think like this:
let strength = "weak"; // or medium / strong

//  Then:
if (strength === "weak") {
  // set width + color
}

//# 🤔 Reflection Before Coding

//  Why is this better UX than just text like:
//  "Strong password"
//  Answer: 

//? ✅ Your Task

//  Upgrade your existing password checker to include:
//  • Strength bar
//  • Dynamic width
//  • Dynamic color


//! Feedback

//TODO  This is excellent work — genuinely one of your strongest implementations so far 👏
//  You have successfully combined logic + UI + state, which is exactly what this lesson is about.

//  Let’s review it properly and refine it just a bit.

//? 🧠 1. What You Did Right (Important)

//* ✅ Clean Separation of Logic and UI

let strength = "";

//  👉 You correctly:
//  • Calculate strength first
//  • Then update the UI
//  ✔️ This follows the exact pattern we discussed

//* ✅ Validation Logic — Solid

const hasLetters = /[a-zA-Z]/.test(value);
const hasNumbers = /[0-9]/.test(value);

//  ✔️ Clear
//  ✔️ Readable
//  ✔️ Maintainable

//* ✅ Strength Mapping — Very Good

if (strength === "weak") {
    strengthFill.style.width = "30%";
}

//  👉 This is exactly how a real strength meter works

//* ✅ Handles Empty State

if (value.length === 0) {};

//  ✔️ Prevents weird UI states
//  ✔️ Good UX thinking

//? ⚠️ 2. Small Improvements (High Impact)

//  I will keep this focused — just a few key upgrades.

//! ❗ Improvement 1: Avoid Repeating Styles

//  Right now:
strengthFill.style.width = "30%";
strengthFill.style.backgroundColor = "red";
//  👉 Repeated multiple times


//# ✅ Better Approach (Cleaner)

//  Create a mapping object:
const strengthStyles = {
    empty: { width: "0%", color: "transparent" },
    weak: { width: "30%", color: "red" },
    medium: { width: "60%", color: "orange" },
    strong: { width: "100%", color: "green" }
};

//! ❗ Improvement 2: Unused Button

```html
<button type="button" id="checkBtn">Check</button>
```
//  👉 You are not using this button

//* 🎯 Recommendation
//  Choose one:
//  • ❌ Remove it (preferred — real-time system doesn’t need it)
//  • ✅ OR use it as a reset button

//! ❗ Improvement 3: Message Default State

```html
<p id="passwordMessage"></p>
```

//  👉 Starts empty

//* ✅ Better UX

```html
<p id="passwordMessage">Enter a password</p>
```

//  👉 Avoids blank UI on load

//? 🧠 3. What You Just Achieved

//  You built a system that:    Input → Validation → State → Visual Feedback

//  👉 This is exactly how:
//  • Signup forms
//  • Password systems
//  • Security checks
//  . . . work in real applications

//* 📊 Final Assessment
//  | Area           | Score  |
//  | -------------- | ------ |
//  | Logic          | 9/10   |
//  | UI Integration | 9/10   |
//  | Code Structure | 8.5/10 |
//  | UX Thinking    | 9/10   |
//  👉 Overall: Very strong intermediate level

//# 🤔 Reflection

//  Why is this better:
let strength = "weak";
//  than directly doing:
if (value.length < 6) {
    strengthFill.style.width = "30%";
}
//  Answer: The 'let strength = "weak";' is better because it separates decision from UI update. The first compute of a state like "weak", "medium", or "strong", then use that state in one place to update the bar, text, colors, and any other feedback. That makes the code easier to extend and maintain than hard-coding "30%" inside each "if" branch.


//TODO  🚀 Next Challenge (As You Requested)

//  Now let’s push your understanding further.

//? 🧩 New Exercise: Confirm Password Validator

//* 🎯 Goal
//  Build a system with:
//  • Password input
//  • Confirm password input

//* 🧠 Behavior
//  | Case         | Output                         |
//  | ------------ | ------------------------------ |
//  | Empty        | "Enter passwords"              |
//  | Not matching | "Passwords do not match ❌"   |
//  | Matching     | "Passwords match ✅"          |

//* 🧱 HTML Idea

//  HTML can be found inside of index.html

//* 🎯 Requirements
//  • Use input event
//  • Compare both values
//  • Update message in real time

//* 🔥 Bonus
//  • Add color feedback
//  • Combine with your strength checker


//! Feedback

//TODO  You are very close here — the core idea is correct, but there’s an important gap in behavior. Let’s go through it carefully.

//* 🧠 What You Did Well

//? ✅ 1. Correct Comparison Logic

const isValid = password.value === confirmPassword.value;

//  ✔️ Clean
//  ✔️ Clear
//  ✔️ Correct

//? ✅ 2. Valid Match Condition

if (isValid && password.value !== '') {};

//  ✔️ Prevents empty matching
//  ✔️ Good thinking

//# ⚠️ The Main Issue

//  👉 You only listen to one input field

password.addEventListener('input', "...")

//! ❗ What This Causes

//  If the user:
//  1. Types password → works
//  2. Types confirm password → ❌ nothing happens
//  👉 Because no event is attached to confirmPassword

//* ✅ Your Approach

password.addEventListener('input', (e) => {
    const isValid = password.value === confirmPassword.value; 
    
    if (isValid && password.value !== '') { 
        matchMessage.textContent = "Passwords match ✅" 
        matchMessage.style.color = "green"; 
    } else { 
        matchMessage.textContent = "Passwords do not match ❌"; 
        matchMessage.style.color = "red"; 
    } 
});

//# ⚠️ Small UX Improvement

//  Right now:
```js
else {
    "Passwords do not match ❌"
}
```
//  👉 This shows even when user just starts typing

//* ✅ Better UX

//  You already handled this well in the fix:

if (password.value === '' && confirmPassword.value === '') {};


//* 📊 Assessment
//  | Area      | Score  |
//  | --------- | ------ |
//  | Logic     | 8.5/10 |
//  | Structure | 7/10   |
//  | UX        | 7.5/10 |
//  👉 After the fix → easily 9/10

//# 🤔 Reflection

//  Why is this better:
function checkMatch() { "..." };
//  instead of writing the same logic twice?
//  Answer: Using one function is better because it keeps the logic in one place, so it only write, read, and update it once. That reduces duplication and makes bugs less likely when the rule changes.

