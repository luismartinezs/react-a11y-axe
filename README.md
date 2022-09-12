# React a11y

Sample React project for testing a11y

A11y-related dependencies:

- [axe-core](https://github.com/dequelabs/axe-core)
- [cypress-axe](https://github.com/component-driven/cypress-axe)
- [@axe-core/react](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md)
- [@storybook/addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y)

Some of the storybook stories are taken from this repo: https://github.com/bolonio/a11y-storybook

This blogpost is worth reading to understand how the storybook a11y addon works: https://www.adrianbolonio.com/blog/accessibility-with-storybook

## Run this project

- `npm i`
- Run project locally `npm run dev`
- In another shell, run cypress: `npm run cy:open`
- In another shell, run storybook: `npm run storybook`