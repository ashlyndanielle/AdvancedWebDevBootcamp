*** CALLBACKS ***

*What are they used for?*
  advanced array methods
  browser events
  AJAX requests
  React development

*findIndex*
  Returns the index of the first element in the array for which
  the callback returns a truthy value.  Returns -1 if the callback
  never returns a truthy value
  function findIndex(array, callback) {}
  function callback(currElement, currIndex, array) {}
  make sure to *return* something in your callback