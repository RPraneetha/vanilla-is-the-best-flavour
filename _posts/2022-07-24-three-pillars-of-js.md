---
title: Three Pillars of JS
author: Ramya Praneetha
date: 2022-07-24
category: JS
layout: post
---
# Types/Coercion

## Primitive Types
- undefined
- string
- number
- boolean
- object
- symbol
- null? Quirky
- function? Sub-type of object type

In JavaScript, variables don't have types, values do

```js
var x;
typeof x    // undefined

x = 1
typeof x    // number

x = "1"
typeof x     // string

x = true
typeof x    // boolean

x = {}
typeof x    // object

x = Symbol()
typeof x    // symbol

typeof y    // undefined

x = null
typeof x    // object

x = function(){}
typeof x    // function

x = [ 1, 1, 1]
typeof x    // object
```

`undefined` is both when a value has been decalred and not defined, and also when it hasn't been declare

## `NaN`

```js
var name = "Hello world"

var broken = name / 2

broken  //NaN
Number.isNaN(broken)    // true
Number.isNaN(name)      // false
```

## `new`

`new` used for:
- Object()
- Array()
- Function()
- Date()
- RegExp()
- Error()

NOT used for:
- String()
- Number()
- Boolean()

- Borrowed from Java/C++

```js
var today = new Date("July 25, 2022")
today.toUTCString()         // "Mon, 25 Jul 2022 22:15:12 GMT"

var temperature = String(42)    // "42"
```

## Coercion (Type Conversion)

String conversion (from number to string) uses the overloaded + operator

Values from DOM are always strings, so mathematical operations need to be performed after explicitly typing input to Number()

Comparisons coerce to Nmber if at least one of the values is a Number

## Booleans

Falsy
- ""
- 0, -0
- NaN
- false
- undefined

Truthy is everything else

Takeaway: "MAKE YOUR TYPES OBVIOUS"

## Equality

== vs ===

== allows coercion (types different)
=== disallows coercion (types same)

Coercive equality vs non-coercive equality

null == undefined true
null === undefined false

# Scope/Closures

# `this`/Prototypes

## `this`

`this` references the execution contenxt for the function called, based on how it was called
- Dynamic context, the execution contect can change each time it's called

```js

var library = {
    greeting: "Hey,",
    ask(question) {
        console.log(this.greeting, question)
    }
}

library.ask("Who turned off the lights") //Hey, Who turned off the lights
```

Functions can be called with the `call` keyword, which allows to also pass the context for `this`.

```js

function ask(question) {
    console.log(this.greeting, question)
}

function someClass() {
    var library = {
        greeting: "Hey,",
    };
    ask.call(library, "Who turned off the lights") // We're passing along library as the `this` context, so `ask` now has access to library through the `this` keyword
}

someClass()
```

## Prototypes

Defines methods (usually) for a class outside of the class definition

### `class`



# Sources
- [Getting started with JavaScript v2 by Kyle Simpson - Frontend Masters](https://www.youtube.com/watch?v=VIJxU2NYG-Y&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)
- [You Don't Know JS Yet - 2nd Edition by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS)
