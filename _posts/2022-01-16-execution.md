---
title: How does JavaScript run?
author: Ramya Praneetha
date: 2022-01-15
category: JS
layout: post
---
Synchronous, single-threaded
# Execution Context

## Variable Environment(Memory Context)

## Thread of Execution(Code Context)

## Hoisting

## Call Stack
Starts with Global execution context

- Arrow functions treated as variables, will return undefined if referenced before declaration
- Functions referenced before declaration return normal behaviour values, variables return undefined

## Function executions

## Scope Chain, Lexical environment
- Lexical environment - Local env/memory + memory of its parent; where a function is present in the code wrt its parent; variable environment of child will contain reference to lexical environment of parent

- JS Loosely typed, weakly typed language

## let and const
 let and const not hoisted in global scope, only in block scope

 ## Temporal deadzone(let)
 - Time between memory allocation and value assignment/initialization
 - Variables cannot be accessed

 ## Blocks - Compound statements
 
 - Block scope: Functions and variables accessible inside a block
 - let and const are block scoped
 - Shadowing: Variables with same name point to same memory location(in case of var because global scope)
 - - Illegal shadowing, can't declare same name var after let, but vice versa is possible
 - Block scopes are lexically present
 - global let and const inside script scope

## Closures
- Function along with its lexical scope is called closure
- When functions are returned, functions with its lexical scope are returned(includes parent's scope, parent's parent's scope, and so on...)

setTimeout - takes callback function, and stores it sonewhere, and proceeds. When the timer expires, function goes into call stack

## Functions
- Function statement aka function declaration - "Normal" named function
- Function expression - Function assigned to variable
- Anonymous function - Can't directly uuse in code, needs to be part of function expression
- Named function expression - named function still can't be accessed outside
- Parameters and arguments
- First class functions/citizens - functions as arguments to functions, can pass anonymous functions as argument, ability of functions to be used as values, and be assigned to a variable, or returned from another function


## Callbacks


 # Sources
 [1](https://www.youtube.com/watch?v=VIJxU2NYG-Y&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)