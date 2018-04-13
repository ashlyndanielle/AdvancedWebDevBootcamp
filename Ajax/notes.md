
*** AJAX ***
  A_asynchronous
  J_javaScript
  A_and
  X_XML

  * AJAX is an approach to web development
  * a concept/way of building websites

  * With AJAX websites can send and request data from a server *in the background*
  * without disturbing the current page
  * this lead to single page apps and frameworks

*** XML and JSON ***
  formats used to send data through API's

  *XML* extended markup language
    sytactically similar to HTML
  *JSON* JavaScript Object Notation
    looks (almost) exactly like a javaScript object

*** MAKING REQUESTS WITH JAVASCRIPT ***

  1. XMLHTTP Request ( XHR )
  2. Fetch API
  3. 3rd Party Libraries:
      - jQuery
      - Axios

  *XHR Request Issues*
    ugly, bulky syntax
    16 years old
    no streaming support

  *FETCH API*
    replacement/update to XHR
    *cleaner* and allows more functionality

  *jQUERY*
    The "write more, do less library"
    How to include jQuery:
      1. download/install it 
      2. go to code.jquery.com and include a cdn script at the top
    There is really good documentation on the jQuery site with great examples

      jQuery ajax methods:
        1. $.ajax
        2. $.get
        3. $.post
        4. $.getJSON
      Ajax call comes back already parsed but you can override this by
      passing in a dataType

  *Axios*
    lightweight library