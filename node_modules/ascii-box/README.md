# ascii-box

Utility to print boxes in the console.

---

## Tech stack

* cli-boxes@1.0.0
* colors@1.2.1

## Setup

```sh
npm install ascii-box --save
```

## Method

**box(message[, options])**

**Parameters**

* `msg` **string**
* `opts` **Object**
  * `opts.border` **string** single, double, code, round, dotted, retro, single-double, double-single
  * `opts.color` **string** green, red, blue, cyan, magenta, gray, black, white
  * `opts.padding` **number**
  * `opts.minWidth` **number**
  * `opts.maxWidth` **number**

---

## Usage examples

Example:

```javascript
const box = require('ascii-box').box;

// Default
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend molestie urna a dictum. Duis suscipit ipsum eget viverra tincidunt. In hac habitasse platea dictumst.`
  )
);
```

```sh
+--------------------------------------------------------------------+
|                                                                    |
|  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabit  |
|  ur eleifend molestie urna a dictum. Duis suscipit ipsum eget viv  |
|  erra tincidunt. In hac habitasse platea dictumst.                 |
|                                                                    |
+--------------------------------------------------------------------+
```

Example:

```javascript
const box = require('ascii-box').box;

// Code box
console.log(
  box(`Hello`, {
    border: 'code',
    color: 'green'
  })
);
```

```sh
**************************
*                        *
*  Hello                 *
*                        *
**************************
```

Example:

```javascript
const box = require('ascii-box').box;

// Dotted box
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend molestie urna a dictum. Duis suscipit ipsum eget viverra tincidunt. In hac habitasse platea dictumst.`,
    {
      border: 'dotted'
    }
  )
);
```

```sh
......................................................................
:                                                                    :
:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabit  :
:  ur eleifend molestie urna a dictum. Duis suscipit ipsum eget viv  :
:  erra tincidunt. In hac habitasse platea dictumst.                 :
:                                                                    :
......................................................................
```

Example:

```javascript
const box = require('ascii-box').box;

// Retro box
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend molestie urna a dictum. Duis suscipit ipsum eget viverra tincidunt. In hac habitasse platea dictumst.`,
    {
      border: 'retro'
    }
  )
);
```

```sh
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░                                                                ░
░  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur  ░
░  abitur eleifend molestie urna a dictum. Duis suscipit ipsum   ░
░  eget viverra tincidunt. In hac habitasse platea dictumst.     ░
░                                                                ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

Example:

```javascript
const box = require('ascii-box').box;

// single box
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur eleifend molestie urna a dictum.`,
    {
      border: 'single',
      color: 'green'
    }
  )
);
```

```sh
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Lorem ipsum dolor sit amet, consectetur adipiscing elit.      │
│      Curabitur eleifend molestie urna a dictum.                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

Example:

```javascript
const box = require('ascii-box').box;

// double-single box
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur eleifend molestie urna a dictum.`,
    {
      border: 'double',
      color: 'cyan'
    }
  )
);
```

```sh
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  Lorem ipsum dolor sit amet, consectetur adipiscing elit.      ║
║      Curabitur eleifend molestie urna a dictum.                ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

Example:

```javascript
const box = require('ascii-box').box;

// double-single box
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Curabitur eleifend molestie urna a dictum.`,
    {
      border: 'double-single',
      color: 'magenta'
    }
  )
);
```

```sh
╒════════════════════════════════════════════════════════════════╕
│                                                                │
│  Lorem ipsum dolor sit amet, consectetur adipiscing elit.      │
│      Curabitur eleifend molestie urna a dictum.                │
│                                                                │
╘════════════════════════════════════════════════════════════════╛
```

Example:

```javascript
const box = require('ascii-box').box;

// round box
console.log(
  box(
    `Lorems:
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Ut vitae sollicitudin nulla. Duis et lorem commodo, faucibus mauris varius, dignissim risus.

2. Vivamus porta sodales ligula, et interdum ante dictum sed. Morbi finibus scelerisque egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

3. Duis a fermentum lectus. Nam accumsan feugiat purus id cursus. Aliquam auctor consequat volutpat. Suspendisse quis feugiat neque, commodo blandit erat.`,
    {
      border: 'round',
      color: 'blue',
      maxWidth: 60
    }
  )
);
```

```sh
╭────────────────────────────────────────────────────────╮
│                                                        │
│  Lorems:                                               │
│  1. Lorem ipsum dolor sit amet, consectetur adipiscin  │
│  g elit. In hac habitasse platea dictumst. Ut vitae s  │
│  ollicitudin nulla. Duis et lorem commodo, faucibus m  │
│  auris varius, dignissim risus.                        │
│                                                        │
│  2. Vivamus porta sodales ligula, et interdum ante di  │
│  ctum sed. Morbi finibus scelerisque egestas. Orci va  │
│  rius natoque penatibus et magnis dis parturient mont  │
│  es, nascetur ridiculus mus.                           │
│                                                        │
│  3. Duis a fermentum lectus. Nam accumsan feugiat pur  │
│  us id cursus. Aliquam auctor consequat volutpat. Sus  │
│  pendisse quis feugiat neque, commodo blandit erat.    │
│                                                        │
╰────────────────────────────────────────────────────────╯
```

---

## License

This project is licensed under the MIT License.

## Contributing

1.  Fork it (<https://github.com/yourname/yourproject/fork>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request
