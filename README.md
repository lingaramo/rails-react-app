# README

* Ruby version

* System dependencies

* Configuration

  Config PostgreSQL Database

  https://gorails.com/setup/osx/10.13-high-sierra

* Database creation

  `rails db:create`

* Database initialization

  `rails db:migrate`

* How to run

  `foreman start -f Procfile.dev -p 3000`

  http://localhost:3000/app/

* Create user

  Users created from sign up form will be commond users automatically (role: 'user')

  Admin users must be created from console (role: ['manager', 'admin'])

  `rails console`

  `User.create!(email:"user@user.com", password: "12345678" role: 'user')`

  `User.create!(email:"manager@manager.com", password: "12345678", role: 'manager')`

  `User.create!(email:"admin@admin.com", password: "12345678", role: 'admin')`

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
