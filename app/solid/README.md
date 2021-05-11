# Storybook for Solid

---

Storybook for framework is a UI development environment for your plain framework snippets.
With it, you can visualize different states of your UI components and develop them interactively.

![Storybook Screenshot](https://github.com/storybookjs/storybook/blob/master/media/storybook-intro.gif)

Storybook runs outside of your app.
So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

# Getting Started

Install Storybook using the CLI tool and pick the HTML type
```
npx sb init --type html
```
Remove the `@storybook/html` package and install `storybook-solid` as a dev dependency
```
npm uninstall @storybook/html
npm install --save-dev storybook-solid --legacy-peer-deps
```
Write your stories as per normal (note the examples installed from the CLI tool will not work) and then start storybook
```
npm run storybook
```
