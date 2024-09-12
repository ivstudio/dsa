# JavaScript Data Structures and Algorithms (DSA)

## Overview

This repository is a study and exercise guide for data structures and algorithms (DSA). It features TypeScript code implementations, test cases, and utilities to streamline the process of writing and testing solutions effectively.

### Table of Contents

- Algorithms
  - [Array Operations](/src/algorithms/arraysOperations/)
    - [Merge Sorted Array](/src/algorithms/arraysOperations/mergeSortedArray/)
    - [Remove Duplicate Objects](/src/algorithms/arraysOperations/removeDuplicateObjects/)
  - [Anagram](/src/algorithms/anagram)
  - [Capitalize](/src/algorithms/capitalize/)
  - [Fibonacci](/src/algorithms/fibonacci)
  - [FizzBuzz](/src/algorithms/fizzBuzz/)
  - [Longest Substring](/src/algorithms/longestSubstring)
  - [Sorting](/src/algorithms/sorting/)
  - [String Operations](/src/algorithms/stringOperations/)
  - [Two Sum](/src/algorithms/twoSum)
  - [Palindrome](/src/algorithms/palindrome)
  - [Longest Substring](/src/algorithms/longestSubstring)

- Data Structures
  - [Linked List](/src/dataStructures/linkedList)
    - [Add Two Numbers LL](/src/dataStructures/linkedList/addTwoNumbers/)
    - [Merge Two Sorted LL](/src/dataStructures/linkedList//mergeTwoSortedLinkedLists/)
  - [Queue](/src/dataStructures/queue/)

- Exercises
  - [Promise Time Limit](/src/exercises/promiseTimeLimit)  

### Testing

I’m using [Jest](https://jestjs.io/) to test the solutions.

- To run all the tests: `npm run test`

### Folder Structure

This project will continue to grow and evolve. It is organized by algorithms, data structures, and exercises. Each implementation includes unit tests.

```bash
root/
│
├── src/
│   ├── algorithms/
│   │   ├── sorting/
│   │   │   ├── bubbleSort.ts
│   │   │   ├── bubbleSort.test.js
│   │   │   └── ...
│   │   └── .../
│   ├── dataStructures/
│   │    ├── queue/
│   │    │   ├── queue.ts
│   │    │   ├── queue.test.js
│   │    └── ...
│   ├── exercises/
│   │    ├── debouce
│   │    │   ├── debounce.ts
│   │    │   ├── debounce.test.js
│   │    └── ...
├── package.json
└── jest.config.js
```