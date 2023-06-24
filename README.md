# FE Assessment - Format Phone Input
Given the following HTML file:
```
<html>
  <head>
      <script src="index.js" type="module" defer></script>
      <link rel="stylesheet" href="style.css" />
  </head>
  <body>
      <div class="container text-center">
          <input type="tel" id="phone" maxlength="16" placeholder="mobile number" autocomplete="off" />
          <div><label for="phone">(123) 456-7890</label></div>
      </div>
  </body>
</html>
```

And following `style.css` file:
```
input {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
```

Write a JavaScript script that adds a dynamic phone number formatting to an HTML form. This form includes an `input` field for mobile numbers. When a user types into this field, your script should automatically format the input to match the phone number pattern `(123) 456-7890`.

The input should reflect the formatting even when fewer than 10 digits are entered. Only digits from `0-9` are allowed in the input.

For example, if a user inputs "123456", the input field should automatically update to show "(123) 456". If the user continues typing "7890", the input field should update to "(123) 456-7890".

### Instructions:
For each question, submit separate solutions as online playground links. Ensure tests are runnable; if not, include execution instructions.

### Question 1:
The implementation must be done in two versions:
1. Vanilla JavaScript, including fully executable unit tests.
2. ReactJS, including fully executable unit tests.

### Question 2:
Consider the scenario where a user removes some digits from the middle of the formatted number. Address the issue of the caret jumping to the end, and write tests to verify your solution for both Vanilla JS & ReactJS versions.
