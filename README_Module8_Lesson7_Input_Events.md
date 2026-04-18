# 🧠 Module 8 --- Lesson 07: Input Events

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Module](https://img.shields.io/badge/Module-08%20Events-blue)
![Lesson](https://img.shields.io/badge/Lesson-07%20Input%20Events-green)
![Level](https://img.shields.io/badge/Level-Intermediate-informational)

------------------------------------------------------------------------

## 📌 Overview

This lesson introduces **Input Events**, a critical concept for handling
real-time user input in web applications.

You learned how to: - Track changes in input fields - Validate user
input dynamically - Provide real-time feedback - Build interactive
form-like systems

------------------------------------------------------------------------

## 🧠 Core Concept

Input events fire when the **value of an input field changes**.

``` javascript
input.addEventListener('input', (e) => {
  console.log(e.target.value);
});
```

👉 This captures: - Typing - Deleting - Pasting - Autocomplete

------------------------------------------------------------------------

## ⚖️ input vs keydown

  Event       Purpose
  ----------- ----------------------
  `keydown`   Detects key press
  `input`     Detects value change

👉 Always use `input` when working with user-entered data.

------------------------------------------------------------------------

## ⚖️ input vs change

  Event      Behaviour
  ---------- -----------------------------------
  `input`    Fires on every change
  `change`   Fires after user finishes editing

------------------------------------------------------------------------

## 🧪 Exercises Completed

### ✅ Character Counter

-   Tracks input length in real time
-   Updates dynamically

------------------------------------------------------------------------

### ✅ Live Input Validation

-   Validates username length
-   Handles empty input
-   Provides real-time feedback

------------------------------------------------------------------------

### ✅ Password Strength Checker

-   Checks length, letters, numbers
-   Outputs weak / medium / strong

------------------------------------------------------------------------

### ✅ Password Strength Meter

-   Visual bar representation
-   Dynamic width and color

------------------------------------------------------------------------

### ✅ Confirm Password Validator

-   Compares two inputs
-   Updates message in real time

------------------------------------------------------------------------

## 🧠 Key Concepts Applied

### Event Handling

``` javascript
input.addEventListener('input', ...)
```

### Event Object

-   `e.target.value`

### Validation Logic

-   Length checks
-   Regex (`test()`)

### State vs Derived Data

-   Prefer using `value.length` over storing variables

### UI Updates

-   `textContent`
-   Dynamic styles

------------------------------------------------------------------------

## ⚠️ Common Mistakes

-   Using `keydown` instead of `input`
-   Forgetting `.value`
-   Not handling empty input
-   Storing unnecessary state
-   Mixing logic and UI too tightly

------------------------------------------------------------------------

## ✅ Best Practices

-   Use `input` for real-time updates
-   Use `trim()` to clean input
-   Keep validation logic separate from UI rendering
-   Use functions for reusable logic
-   Prefer CSS classes over inline styles (for scalability)

------------------------------------------------------------------------

## 🧠 Key Takeaways

-   Input events reflect **actual value changes**
-   They are essential for forms and validation
-   Real-time feedback improves UX
-   Clean logic leads to scalable code

------------------------------------------------------------------------

## 🚀 Next Step

➡️ **Form Submission & FormData Object**

------------------------------------------------------------------------

## 💬 Final Note

This lesson marks your transition into:

👉 Building real, interactive user input systems

You are no longer just reacting to events ---\
You are now **interpreting and validating user behaviour**.

That is a core skill in modern front-end development.
