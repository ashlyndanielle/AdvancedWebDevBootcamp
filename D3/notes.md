__SELECTORS__

*d3.select()*
*d3.selectAll()*
  __D3 selection methods return a D3 selection, so that methods can be chained together.__
  * selection.style('property', 'value);
  * selection.attr('attribute', 'value');
  * selection.classed(classList, boolean);
  * selection.text('value');
  * selection.html('value');
  <!-- all the above work as "getters" if you don't pass a value -->
  * selection.node() or .nodes() gives you the underlying HTML element - won't   use this most of the time
*selectors and callbacks*
  * ex: d3.selectAll('li').style('font-size', (_, idx) => Math.random() * 40 + 'px')
    - idx is the index of the current element



__EVENT LISTENERS__

*selection.on(eventType, callback)*
  * you can NOT attach multiple listeners of the same type using "on" to the same selection
  * the last listener attached will override any others
  * you can remove with selection.on('click', null)
  * to get access to the event in an event handler callback we use d3.event
  * appending elements returns a d3 selection of that element (so you can chain methods)
  * use selection.remove() to remove elements



__DATA JOINS and UPDATE PATTERNS__
* let the data be the single source of truth and then update the view

* by default, data is joined to elements on the page by INDEX
* we can specify how data is joined by passing a "key function" as a second argument
  into the .data() method
    * the return value of the key function is what is used to join elements and data

* callback structure *
  function (d, i) {
    <!-- d will always refer to the data bound to the current element -->
    <!-- i is index -->
  }
* .enter() selects the nodes that D3 creates on the fly when it needs to bind
  data to elements that don't exist yet
* .exit() selects elements that should be removed from the dom when there isn't any
  data to bind to them

*Selection Types*
* enter: data with no elements
* exit: elements with no data
* update: data WITH elements

*Merging Selections*
* selection.merge(otherSelection)
* can be used to merge together the enter and update selections

*General Update Pattern*
1. grab the update selection, make any changes unique to that selection, and store in a variable (var letters = ...)
2. grab the exit selection and remove any unnecessary elements
3. grab the enter selection and make any changes unique to that selection (letters.enter())
4. merge the enter and update selections and make any changes you want to be shared across both selections (.merge(letters))




__D3 and SVG__

*The SVG Element*
  <!-- <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg"></svg> -->

*Objectives*
  * draw lines
    - x1: starting x
      y1: starting y
      x2: finishing x
      y2: finishing y
    - stroke, stroke-width
  * create groups of svg elements
    - wrap with a g tag and apply certain attributes to this tag
  * draw rectangles, polygons, and circles
    *rectangles*
      - x: upper left corner; 
        y: upper right corner;
        width
        height
      - stroke: border-color;
        stroke-width: border-thickness;
        fill: interior color
      - rx: round corner in x-direction
        ry: round corner in y-direction
    *polygons*
      - points: space-separated list of points representing vertices of the polygon
        ex" "x1,y1 x2,y2 x3,y3 x4,y4 ..."
    *circle*
      - cx: x-coordinate of center
        cy: y-coordinate of center
        radius: how large it is
  * write text on svg
  * draw general paths
  * use D3 to build an svg bar chart
