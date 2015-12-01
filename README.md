templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/marko-js/marko) | HTML | ✔ | ✔ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[swig](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✖ | ✔

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Run Benchmarks](#run-benchmarks)
- [Current Results](#current-results)
	- [Performance](#performance)
	- [Compiled Size](#compiled-size)
- [Client-side Runtime Sizes](#client-side-runtime-sizes)
	- [Marko](#marko)
	- [Dust](#dust)
- [Contribute](#contribute)
	- [Adding a New Comparison Group](#adding-a-new-comparison-group)
	- [Adding a New Template Engine](#adding-a-new-template-engine)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Current Results

The following results were collected with the following setup:

- Node.js v4.1.1
- MacBook Pro (Retina, 15-inch, Mid 2014)
- Processor: 2.8 GHz Intel Core i7
- Memory: 16 GB 1600 MHz DDR3

## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    2,785 op/s (fastest)
                    ✗ dust »      616 op/s (77.88% slower)

                      if-expression
                   ✓ marko »  207,256 op/s (fastest)
                    ✗ dust »   23,739 op/s (88.55% slower)

                      projects-escaped
                   ✓ marko »   50,036 op/s (fastest)
      ✗ marko (native-for) »   49,600 op/s (0.87% slower)
              ✗ handlebars »   33,160 op/s (33.73% slower)
                    ✗ dust »   29,947 op/s (40.15% slower)

                      projects-unescaped
                   ✓ marko »  216,655 op/s (fastest)
      ✗ marko (native-for) »  208,348 op/s (3.83% slower)
              ✗ handlebars »   86,382 op/s (60.13% slower)
                    ✗ dust »   57,332 op/s (73.54% slower)

                      reverse-helper
                   ✓ marko »  296,529 op/s (fastest)
                    ✗ dust »  197,303 op/s (33.46% slower)

                      search-results
      ✓ marko (native-for) »   24,830 op/s (fastest)
                   ✗ marko »   23,852 op/s (3.94% slower)
                    ✗ dust »    9,538 op/s (61.59% slower)
                     ✗ ktl »    4,003 op/s (83.88% slower)

                      simple-1
                     ✓ dot »  132,695 op/s (fastest)
      ✗ marko (native-for) »  114,624 op/s (13.62% slower)
                   ✗ marko »  112,522 op/s (15.20% slower)
                    ✗ dust »   58,848 op/s (55.65% slower)
              ✗ handlebars »   41,740 op/s (68.54% slower)
                     ✗ ktl »   36,091 op/s (72.80% slower)
                    ✗ swig »   34,814 op/s (73.76% slower)
                    ✗ jade »   27,976 op/s (78.92% slower)
                ✗ nunjucks »   19,502 op/s (85.30% slower)
                  ✗ plates »    5,293 op/s (96.01% slower)

                      simple-2
                   ✓ marko »  146,523 op/s (fastest)
                    ✗ dust »   69,467 op/s (52.59% slower)
                     ✗ ktl »   44,435 op/s (69.67% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   472 bytes gzipped     915 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   489 bytes gzipped    1387 bytes uncompressed
                                    3.48% larger              34.03% larger

                      if-expression
                   ✓ marko »   285 bytes gzipped     476 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   392 bytes gzipped    1043 bytes uncompressed
                                   27.30% larger              54.36% larger

                      projects-escaped
                   ✓ marko »   247 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    5.73% larger              32.68% larger
      ✗ marko (native-for) »   269 bytes gzipped     406 bytes uncompressed
                                    8.18% larger               6.65% larger
              ✗ handlebars »   548 bytes gzipped    1540 bytes uncompressed
                                   54.93% larger              75.39% larger

                      projects-unescaped
                   ✓ marko »   249 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    7.09% larger              36.30% larger
      ✗ marko (native-for) »   273 bytes gzipped     406 bytes uncompressed
                                    8.79% larger               6.65% larger
              ✗ handlebars »   521 bytes gzipped    1556 bytes uncompressed
                                   52.21% larger              75.64% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              23.05% larger
                   ✗ marko »   169 bytes gzipped     247 bytes uncompressed
                                   10.65% larger                 (smallest)

                      search-results
                   ✓ marko »   536 bytes gzipped    1189 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    1.65% larger              21.93% larger
      ✗ marko (native-for) »   575 bytes gzipped    1242 bytes uncompressed
                                    6.78% larger               4.27% larger
                     ✗ ktl »   655 bytes gzipped    2648 bytes uncompressed
                                   18.17% larger              55.10% larger

                      simple-1
                   ✓ marko »   216 bytes gzipped     293 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   237 bytes gzipped     320 bytes uncompressed
                                    8.86% larger               8.44% larger
                    ✗ dust »   249 bytes gzipped     462 bytes uncompressed
                                   13.25% larger              36.58% larger
                     ✗ ktl »   265 bytes gzipped     496 bytes uncompressed
                                   18.49% larger              40.93% larger
                    ✗ jade »   337 bytes gzipped     664 bytes uncompressed
                                   35.91% larger              55.87% larger
                     ✗ dot »   353 bytes gzipped     523 bytes uncompressed
                                   38.81% larger              43.98% larger
              ✗ handlebars »   418 bytes gzipped     818 bytes uncompressed
                                   48.33% larger              64.18% larger
                ✗ nunjucks »   448 bytes gzipped     910 bytes uncompressed
                                   51.79% larger              67.80% larger
                    ✗ swig »   544 bytes gzipped    2557 bytes uncompressed
                                   60.29% larger              88.54% larger

                      simple-2
                   ✓ marko »   255 bytes gzipped     484 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    4.85% larger              25.31% larger
                     ✗ ktl »   295 bytes gzipped     785 bytes uncompressed
                                   13.56% larger              38.34% larger
```
<!-- </size> -->

# Client-side Runtime Sizes

Below are the approximate runtime sizes for each engine (lower numbers are better):

## Marko

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `marko` | ~1.2KB gzipped (2.7KB uncompressed) |
| `marko` +<br>`async-writer` + <br>`raptor-xml/util` | ~2.33KB gzipped (6.3KB uncompressed) |

_NOTE:_ Sizes are approximate because overhead associated with the CommonJS module loader varies. Size based on code as of April 7, 2014.

## Dust

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `dust-core` | 3.41KB gzipped (10.07KB uncompressed) |
| `dust-core` +<br>`dust-helpers` | 4.7KB gzipped (14.2KB uncompressed) |

_NOTE:_ Size based on code as of April 7, 2014.

# Contribute

## Adding a New Comparison Group

Each comparison group should contain a data file (either `data.json` or `data.js`) and a set of templates to compare. The file extension of the template will be used to determine which engine should be used. If the data file has the `.js` extension then it should be a JavaScript module that exports the data. A sample directory structure is shown below:

```
templates
    ├── group1
    │   ├── data.js
    │   ├── template.dust
    │   └── template.marko
    ├── group2
    │   ├── data.json
    │   ├── template.dust
    │   └── template.marko
    ├── group3
    │   ├── data.json
    │   ├── template.dust
    │   ├── template.native-for.marko
    │   └── template.marko
    └── group4
        ├── data.json
        ├── template.dust
        └── template.marko
```

## Adding a New Template Engine

To register a new templating engine, simply create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
