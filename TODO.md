- Frontend
  - Views
    [X] Main App
    [X] Card
    [X] Buttons
      [X] Edit
      [X] Next
      [X] Delete
      [X] Create
    [ ] Create New Card Modal
    [ ] Edit Card Display
      [ ] Cancel edit button
      [ ] Confirm Edit Button
      [ ] Edit Fields Clean Display
    [ ] Default Card View when no cards exist in DB
  - Routes
    [X] Get
    [X] GetAll
    [X] Update
    [X] Create
    [X] Delete

- Backend
  - Server
    [x] Setup express server
    [X] API - /card endpoint
      [x] Create - post
      [x] Read - get - :name
      [x] Read all - get
      [X] Update - patch - :name
      [X] Delete  - delete - :name
    [x] Serve static files

  - Database
    [x] Setup table database with user, card, user_card tables
    [x] Setup knex
    [ ] Build dataset (csv or generation tool)
    [x] Design Models
      [x] User {
            id: pri, auto_inc, int
            name: str
          }
      [x] Card {
            id; pri, auto_inc,
            name: str,
            desc: str,
            fact: str
          }
      [x] user_card join table {
            user_id: foreign,
            card_id: foreign
          }
    [x] Build controller
      [x] createCard(name, desc, fact)
      [x] getCard(name) -> card object
      [x] getAllCards -> array of all card objs in db
      [X] updateCard(name, { name, desc, fact }) -> updated card object
      [X] deleteCard(name)
      [ ] Error handling