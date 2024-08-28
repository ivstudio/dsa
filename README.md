# JavaScript Data Structures and Algorithms Test Environment

## Overview

This repository provides a test environment and documentation for JavaScript data structures and algorithms. It includes code implementations, test cases, and utilities to make it easier to write and test solutions effectively.

### Table of Contents

- Algorithms
  - [Array Operations](/src/algorithms/arraysOperations/)
  - [Capitalize](/src/algorithms/capitalize/)
  - [FizzBuzz](/src/algorithms/fizzBuzz/)
  - [Sorting](/src/algorithms/sorting/)
  - [String Operations](/src/algorithms/stringOperations/)
  - [Two Sum](/src/algorithms/twoSum)

- Data Structures
  - [Queue](/src/dataStructures/queue/)

### Testing

I’m using [Jest](https://jestjs.io/) to test the solutions.

- To run all the tests: `npm run test`
- To run a single test file: `npm run test name_of_test_file`

### Folder Structure

This ever-growing project continues to expand and evolve over time. It’s organized by algorithms and data structures, and within those categories, it's sorted by type. All implementations have unit tests associated with the exercise.

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
│       ├── queue/q
│       │   ├── queue.ts
│       │   ├── queue.test.js
│       │   └── ...
│       └── .../
├── package.json
└── jest.config.js
```