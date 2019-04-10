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
  * you can NOT attach multiple listeners of the same type using "on" to the     same selection
  * the last listener attached will override any others
  * you can remove with selection.on('click', null)
  * to get access to the event in an event handler callback we use d3.event
  * appending elements returns a d3 selection of that element (so you can        chain methods)
  * use selection.remove() to remove elements