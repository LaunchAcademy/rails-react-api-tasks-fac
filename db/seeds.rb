# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

names = [
  'Get the bread',
  'Get the milk',
  'Hide your kids',
  'Hide your wife'
]

names.each do |name|
  if !Task.find_by(name: name)
    Task.create!({
      name: name,
      description: 'A meme oriented task',
      due_on: Date.today + rand(7).days
    })
  end
end
