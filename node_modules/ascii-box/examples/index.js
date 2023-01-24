'use strict';

const box = require('../lib/index').box;

// Default
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend molestie urna a dictum. Duis suscipit ipsum eget viverra tincidunt. In hac habitasse platea dictumst.`
  )
);

// Code
console.log(
  box(`Hello`, {
    border: 'code',
    color: 'green'
  })
);

// Dotted
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend molestie urna a dictum. Duis suscipit ipsum eget viverra tincidunt. In hac habitasse platea dictumst.`,
    {
      border: 'dotted'
    }
  )
);

// Retro
console.log(
  box(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend molestie urna a dictum. Duis suscipit ipsum eget viverra tincidunt. In hac habitasse platea dictumst.`,
    {
      border: 'retro'
    }
  )
);

// single
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

// double-single
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

// double-single
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

// round
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

// Default
console.log(
  box(
    `
ASCII-BOX - 2018
Utility to print boxes in the console
`,
    {
      maxWidth: 60
    }
  )
);
