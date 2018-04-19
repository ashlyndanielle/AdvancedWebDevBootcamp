__GOALS__
  1. Build our own json API
  2. Build a SPA with that API

      ***Single Page Apps***

__back end__             __front end__
- Express ( node )       - Vanilla JS
- Rails ( ruby )         - jQuery
- Django ( python )      - React
- Flas ( python )        - Angular


***__API Structure__***

*Field*         *Type*
name            string
completed       boolean
createdDate     date

***__enpoints__***

*verb*      *route*               *description*
GET         /api/todos            list all todos
POST        /api/todos            create new todo
GET         /api/todos/:todoId    retrieve a todo
PUT         /api/todos/:todoId    update a todo
DELETE      /api/todos/:todoId    delete a todo

