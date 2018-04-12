---
title: "What I Learned from React for Beginners"
slug: "react-for-beginners"
date: "2017-10-03T22:48:34-04:00"
description: "My notes from going through the ReactForBeginners course by Wes Bos."
image: "./facebook-share.png"
draft: true
categories:
  - "Coding"
tags:
  - "React"
  - "JavaScript"
---

## Creating Components

### The Most Basic Component

* A basic component has a render method that returns a single JSX element.

* Most attributes are the same, but a few have changed from HTML including the `class` attribute changing to `className`.

```js
import React from 'react';

class ComponentName extends React.Component({
    render() {
        return (
            <div className="container">
                <h2>Component Name</h2>
                <button>Press Me</button>
            </div>
        );
    }
});

export default ComponentName;
```

### Stateless Functional Component

* If a component does not depend on the state of the app, it can be written as a function of its props rather than a class.

```js
import React from "react";

const Header = props => {
  return (
    <header>
      <img className="logo" src={props.logo.src} alt={props.logo.alt} />
      <h1 className="title">{props.title}</h1>
    </header>
  );
};

export default Header;
```

### Nested Components

* A capitalized JSX tag refers to a React component.
* Pass date down from parent containers to child via props

```js
import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component({
    render() {
        return (
            <div className="container">
                <h2>Parent Component</h2>
                <ChildComponent tagline="Some example text" />
            </div>
        );
    }
});

export default ParentComponent;
```

```js
import React from 'react';

class ChildComponent extends React.Component({
    render() {
        return (
            <div className="container">
                <h2>{this.props.tagline}</h2>
                <button>Press Me</button>
            </div>
        );
    }
});

export default ChildComponent;
```

## State Handling

### Set Initial State

### Update State

## Event Handling

### Click Event

### Form Submission
