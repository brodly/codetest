- Frontend
  - Views
  - Routes

- Backend
  - Server
    [x] Setup express server
    [ ] API - /card endpoint
      [x] Create - post
      [x] Read - get - :name
      [x] Read all - get
      [ ] Update - patch - :name
      [ ] Delete  - delete - :name
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
      [ ] updateCard(name, { name, desc, fact }) -> updated card object
      [ ] deleteCard(name)
      [ ] Error handling