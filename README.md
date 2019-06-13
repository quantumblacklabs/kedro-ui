# Kedro UI

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/%40quantumblack%2Fkedro-ui.svg)](https://badge.fury.io/js/%40quantumblack%2Fkedro-ui) [![CircleCI](https://circleci.com/gh/quantumblacklabs/kedro-ui/tree/develop.svg?style=svg&circle-token=9323ba08d86af5e46928c330cb52b39a0e7dde50)](https://circleci.com/gh/quantumblacklabs/kedro-ui/tree/develop)

This repo represents a set of UI components that we use in our internal products and applications. It allows us to move at speed i.e. not rewrite the wheel on every new endeavour.

## 👀 Getting Started

### Installation
To install Kedro UI into your project, run the following in your project directory:
```
npm install @quantumblack/kedro-ui
```

### Usage
The **recommended** way to import Kedro UI components is to import each component and the core CSS separately:
```JavaScript
// Core CSS (import once)
import '@quantumblack/kedro-ui/lib/styles/app.css';
// Single component (import in each file you use it)
import Button from '@quantumblack/kedro-ui/lib/components/input';
```
However the quickest way to import Kedro UI components is with a destructured import:
```JavaScript
import { Button } from '@quantumblack/kedro-ui';
```
Doing this [will import the entire library](https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark), which will increase your bundle size and affect your page load time, so we don't recommend using this method unless you are using [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) or you don't care about bundle size.

Once you have installed the library and imported a component, you can use it in your project:
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import '@quantumblack/kedro-ui/lib/styles/app.css';
import Button from '@quantumblack/kedro-ui/lib/components/input';

const MyComponent = () => (
  <Button theme='light' size='small' mode='secondary'>Hello world!</Button>
);

ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## 📚 Documentation

We use styleguidist to document our comments and their usage. To try them out head over [here](http://kedro-ui.quantumblack.com).

## 👋 Contact

This project needs your help! If you have any questions email: opensource@quantumblack.com
