[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Password Validator

Recreate a password validator in React. Your final product should function
similarly to [this deployed version](http://excellent-tail.surge.sh) of the
component.

## Prerequisites

- React
- Components, state, and props

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

Take the existing markup rendered from the `Validator` component in
[`src/Validator.js`](src/Validator.js) and change into a fully functioning
component. This means that you only have to add functionality - not markup or
styling - to the existing code!

For this exercise, don't be concerned about the distinction between container
and presentational components.

## Steps

1. Add your form inputs in `Validator.js`. Include inputs for `email`,
   `password`, `passwordConfirm`, and a `submit` button.
2. Add a constructor method and initialize state. Your state should include
   `email`, `password`, `passwordConfirm`, and `valid` properties.

```jsx
this.state = {
  email: "",
  password: "",
  passwordConfirm: "",
  valid: true,
};
```

3. Add methods for handling inputs for password and password confirm, and
   checking that the passwords match. Be sure to update state in these methods
   using `.setState`
4. Bind the methods in the constructor.
5. Display a message if the user's inputs are valid.

## Bonus

For the bonus:

- Make sure validation message doesn't show up until the User presses submit.
- Make sure passwords are at least 7 characters in length.
- Make sure passwords includes a number and a special character. (Check out
  [Regex](http://emailregex.com/))
- Validate the email to make sure it includes an `@` sign.
- Highlight the inputs where the errors occurred.

## Double Mega Bonus

- Include inputs for a date of birth with at least one validator.
- Check out the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)
  and try your hand in validating a credit card number.

## Resources

- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Forms in React](https://facebook.github.io/react/docs/forms.html#controlled-components)
- [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
- [Adding State to a Component](https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
- [Bonus: Email Regex](http://emailregex.com/)

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
