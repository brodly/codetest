- Frontend
  - Views
  - Routes

- Backend
  - Server
    [ ] Setup express server
    [ ] API - /card endpoint
      [ ] Create - post
      [ ] Read - get - :name
      [ ] Read all - get
      [ ] Update - patch - :name
      [ ] Delete  - delete - :name
    [ ] Serve static files

  - Database
    [ ] Setup table database with user, card, user_card tables
    [ ] Setup knex
    [ ] Build dataset (csv or generation tool)
    [ ] Design Models
      [ ] User {
            id: pri, auto_inc, int
            name: str
          }
      [ ] Card {
            id; pri, auto_inc,
            name: str,
            desc: str,
            fact: str
          }
      [ ] user_card join table {
            user_id: foreign,
            card_id: foreign
          }
    [ ] Build controller
      [ ] createCard(name, desc, fact)
      [ ] getCard(name) -> card object
      [ ] getAllCards -> array of all card objs in db
      [ ] updateCard(name, { name, desc, fact }) -> updated card object
      [ ] deleteCard(name)