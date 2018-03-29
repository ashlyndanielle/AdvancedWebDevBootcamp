*** CONTAINER PROPERTIES ***

*flex-direction:*
  defines the main access direction
  row, row-reverse, column, column-reverse
*justify-content:*
  how things are distributed in the space along the *MAIN AXIS*
  center, flex-start, flex-end, space-around, space-between
*flex-wrap*:
  whether things should wrap to the next "line" if they run out of room
  no-wrap, wrap, wrap-reverse
*align-items*
  how items are distriubted in the space along the *CROSS AXIS*
  flex-start, flex-end, center, stretch, baseline
  baseline: aligns items off of the baseline of the text
*align-content*
  defines how space is distributed between rows along the *CROSS AXIS*
  need to have multiple rows for this to apply
  stretch, flex-start, flex-end, space-between

*REMEMBER*
  if you pay attention to the main axis and the cross axis then
  you will be able to position things "easily"



*** FLEX ITEM PROPERTIES ***

*order*
  specifies the order used to lay out items in their flex container
  particularly useful for responsive layouts
  by default, everything has an order of 0
*flex*
  shorthand for flex-grow, flex-shrink, and flex-basis
*flex-grow*
  Dictates how the unused space should be spread amongst flex items
  Works as a ratio, dividing up the remaining empty space accordingly
  This means ^^ that a ratio of 1:4 does not necessarily make one item
    four times bigger.  It will take up 3/4's of the remaining space and
    the other item will take the other 1/4
  Default value is 0
*flex-shrink*
  Dectates how items should shrink when there isn't enough space in the container
  Space is distributed differently than with flex-grow
  Also works as a raio; default is flex-shrink: 1
*flex-basis*
  sets the initial, ideal width for rows or height for columns
*align-self*
  allows you to override align-items on individual flex items along the cross axis
  flex-start, flex-end, center, baseline, stretch