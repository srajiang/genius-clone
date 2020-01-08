# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
 
  Song.destroy_all

  lyrics = ["[Verse 1]","Pedalling through","The dark currents", "I find an accurate copy", "A blueprint of the pleasure in me", "[Chorus 1]", "(Swirling black lilies totally ripe)", "A secret code carved", "A secret code carved", "(Swirling black lilies totally ripe)", "[Verse 2]", "He offers a handshake", "Crooked five fingers", "They form a pattern", "Yet to be matched", "[Chorus 2]", "On the surface simplicity", "(Swirling black lilies totally ripe)", "But the darkest pit in me","And it's pagan poetry", "(Swirling black lilies totally ripe)", "Pagan poetry"]
  about = "Pagan Poetry was the second single from singer Björk’s album Vespertine. The single peaked at number 38 in the UK and number 12 in Canada. It was written and produced by Björk with additional production by Marius de Vries and mixed by Mark “Spike” Stent. The music box adaptation, featured in the song, was done by Jack Perron and the full version was later featured as a B-side song on the “Cocoon” single."
  
  Song.create!(
      title: "Pagan Poetry", 
      album: 'Vespertine',
      artist: "Bjork",
      body: lyrics,
      genre: "pop",
      about: about 
  )
  
end
