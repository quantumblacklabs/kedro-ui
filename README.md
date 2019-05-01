# Carbon UI Components

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/%40quantumblack%2Fcarbon-ui-components.svg)](https://badge.fury.io/js/%40quantumblack%2Fcarbon-ui-components) [![CircleCI](https://circleci.com/gh/quantumblack/asset-carbon-ui-components/tree/develop.svg?style=svg&circle-token=9323ba08d86af5e46928c330cb52b39a0e7dde50)](https://circleci.com/gh/quantumblack/asset-carbon-ui-components/tree/develop)

This repo represents a set of UI components that we use in our internal products and applications. It allows us to move at speed i.e. not rewrite the wheel on every new endeavour.

## 👀 Getting Started
---

To install Carbon UI Components into your project, run the following in your project directory:

```
npm i --save @quantumblack/carbon-ui-components
```

Once you have installed the library you can use the components in your project e.g.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@quantumblack/carbon-ui-components';

const MyComponent = () => (
  <Button theme='light' size='small' mode='secondary'>Hello world!</Button>
);

ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## 📚 Documentation

We use styleguidist to document our comments and their usage. To try them out head over [here](http://carbon-ui-components.qb.com).

## 👋 Contact

This project needs your help! If you have any questions email: frontend@quantumblack.com
