---
layout: post
title: Flex justify content equally distanced items
category: [CSS/SASS]
tags: [css,flex]
---

I want to share a hack (or a trick if you prefer) my colleague Marko showed me today.

What is the problem? If you want your flex items to be equally distanced between each other and from the parent's edge, `space-around` nor `space-between` won't work.

You can see what we are trying to achieve in the first row, and how these flex properties are behaving.

![Flex justify content examples](/public/img/flex-justify-content.png)

<!--more-->

Trick is really simple, use `space-between` and add empty pseudo elements (`::before` and `::after`) to the parent element. Pseudo elements have no width, but they are still "pushing" real elements from themselves.

```scss
.wrapper {
  display: flex;
  justify-content: space-between;
}

.wrapper::before,
.wrapper::after {
  content: '';
}
```

This hack works with dynamic number of elements and dynamic widths, which is really nifty. You can see in the action below:

<iframe
height='400px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/XPzmqg/?height=400&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/XPzmqg/'>Flex items equally distanced from each other, as well from the parent's edge</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Please note that this trick will work for any flex direction.