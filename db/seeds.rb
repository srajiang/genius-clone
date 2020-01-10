# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
 
  Song.destroy_all

  # 1

  lyrics = ["[Verse 1]","Pedalling through","The dark currents", "I find an accurate copy", "A blueprint of the pleasure in me", "[Chorus 1]", "(Swirling black lilies totally ripe)", "A secret code carved", "A secret code carved", "(Swirling black lilies totally ripe)", "[Verse 2]", "He offers a handshake", "Crooked five fingers", "They form a pattern", "Yet to be matched", "[Chorus 2]", "On the surface simplicity", "(Swirling black lilies totally ripe)", "But the darkest pit in me","And it's pagan poetry", "(Swirling black lilies totally ripe)", "Pagan poetry"]
  about = "Pagan Poetry was the second single from singer Björk’s album Vespertine. The single peaked at number 38 in the UK and number 12 in Canada. It was written and produced by Björk with additional production by Marius de Vries and mixed by Mark “Spike” Stent. The music box adaptation, featured in the song, was done by Jack Perron and the full version was later featured as a B-side song on the “Cocoon” single."
  
  song1 = Song.create!(
      title: "Pagan Poetry", 
      album: 'Vespertine',
      artist: "Björk",
      body: lyrics,
      genre: "Rap",
      about: about 
  )

  file = open('https://snillingur-seed.s3-us-west-1.amazonaws.com/pagan_poetry.jpg');
  song1.photo.attach(io: file, filename: 'pagan_poetry.jpg')

  # 2

  lyrics2 = ["[Verse 1]","Our love was my womb", "But our bond has broken", "My shield is gone", "My protection is taken","I am one wound", "My pulsating body", "Suffering being", "[Verse 2]", "My heart is enormous lake", "Black with potion", "I am blind","Drowning in this ocean", "[Verse 3]", "My soul torn apart", "My spirit is broken", "Into the fabric of all", "He is woven", "[Verse 4]", "[Verse 4]","I am bored of your apocalyptic obsessions","Did I love you too much?", "Devotion bent me broken", "So I rebelled","Destroyed the icon", "[Verse 5]", "I did it for love", "I honoured my feelings", "You betrayed your won heart", "Corrupted that organ", "[Verse 6]","Family was always", "Our sacred mutual mission", "Which you abandoned", "[Verse 7]", "You have nothing to give", "Your heart is hollow", "I'm drowned in sorrows", "No hope in sight of ever recover", "Eternal pain and horrors", "[Verse 8]", "I am a glowing shiny rocket", "Returning home", "As I enter the atmosphere", "I burn off layer by layer"]
  about2 = "In the album booklet, the sub-title for this song is “2 months after”, signifying that this song was written 2 months after the breakup of the relationship between Björk and Matthew Barney. Described as “a 10-minute song in which she works up the nerve to throw darts at Barney and release the fluid fury of a woman scorned. It is a Björk diss track”."
    
  song2 = Song.create!(
      title: "Black Lake", 
      album: 'Vulnicura',
      artist: "Björk",
      body: lyrics2,
      genre: "Pop",
      about: about2 
  )

  file = open('https://snillingur-seed.s3-us-west-1.amazonaws.com/black_lake.jpg');
  song2.photo.attach(io: file, filename: 'black_lake.jpg')

  # 3

  lyrics3 = ["[Verse 1]", "Sssh, sssh", "It's, oh, so quiet", "Sssh, sssh", "It's oh, so still", "Sssh, sssh", "You're all alone", "Sssh, sssh", "And so peaceful until", "[Chorus 1]", "You fall in love", "Zing boom", "The sky up above", "Zing boom", "Is caving in", "Wow bam", "[Post-Chorus 1]", "You've never been so nuts about a guy", "You want to laugh, you wanna cry", "You cross your heart and hope to die", "[Verse 2]", "Til it's over, and then", "Sssh, sssh", "It's nice and quiet", "Sssh, sssh", "Starts another big riot", "[Chorus 2]", "You blow a fuse", "Zing boom", "The devil cuts loose", "Zing boom", "So what's the use", "Wow bam", "Of falling in love?", "[Verse 3]", "It's, oh, so quiet", "It's oh, so still", "You're all alone", "And so peaceful until", "[Chorus 3]", "You ring the bell", "Bim bam", "You shout and you yell", "Hi ho ho", "You broke the spell", "[Post-Chorus 2]", "Gee, this is swell, you almost have a fit", "This guy is 'gorge' and I got hit", "There's no mistake, this is it", "[Verse 4]", "'Till it's over and then", "It's nice and quiet", "Sssh, sssh", "But soon again", "Sssh, sssh", "Starts another bit riot"]
  about3 = "“It’s Oh So Quiet” features on Björk’s third studio album, Post, and was released as the album’s third single. It is a cover of Betty Hutton’s 1951 song of the same title (which was in turn a cover of the German song “Und jetzt ist es still”) and is Björk’s biggest mainstream hit."

  song3 = Song.create!(
      title: "Its Oh So Quiet", 
      album: 'Post',
      artist: "Björk",
      body: lyrics3,
      genre: "Pop",
      about: about3 
  )

  file = open('https://snillingur-seed.s3-us-west-1.amazonaws.com/quiet.jpg');
  song3.photo.attach(io: file, filename: 'quiet.jpg')


  # 4

  lyrics4 = ["[Verse 1]", "I want him to know", "What I have done", "I want him to know", "It's bad", "[Verse 2]", "I want him to know", "What I have done", "Right now", "[Verse 3]", "Maybe it's time tomorrow", "Or maybe today", "It is not right", "Now it's better", "Now we'll know", "Now he'll know", "What I am telling", "[Verse 4]", "I'm sitting with you", "Sitting in silence", "Let's sing into the years, like one", "Singing in tune, together", "A psalm for no one", "Let's sing in tune", "But now it's home", "[Verse 5]", "You sing into the night now", "Just sing on for me", "You sing into the night now", "You sing", "[Hopelandic]", "You...", "You stay to be alright"]
  about4 = "“All Alright” is the first Sigur Rós song to be sung (mostly) in English."

  song4 = Song.create!(
    title: "All Alright",
    album: "Með suð í eyrum við spilum endalaust",
    artist: "Sigur Rós",
    body: lyrics4,
    genre: "Rock", 
    about: about4
  )

  file = open('https://snillingur-seed.s3-us-west-1.amazonaws.com/alright.jpg');
  song4.photo.attach(io: file, filename: 'alright.jpg')

  # 5 

  lyrics5 = ['[Verse 1]','Walking in my sleep','Like the naked trees','Will they wake up again?','Do they sleep, do they dream?', "[Verse 2]", 'Feel it as the wind strokes my skin', 'I am moved by the chill', 'Hear the winter bird sing']
  about5 = "This song draws parallels between nature and the soul – suggesting that our view of the world around us is influenced by our emotions and our history."
  
  song5 = Song.create!(
    title: "Winter Bird", 
    album: "All My Demons Greeting Me as a Friend",
    artist: "AURORA",
    body: ['[Verse 1]','Walking in my sleep','Like the naked trees','Will they wake up again?','Do they sleep, do they dream?', "[Verse 2]", 'Feel it as the wind strokes my skin', 'I am moved by the chill', 'Hear the winter bird sing'], 
    genre: "R&B",
    about: "This song draws parallels between nature and the soul – suggesting that our view of the world around us is influenced by our emotions and our history."
  )

  file = open('https://snillingur-seed.s3-us-west-1.amazonaws.com/winter.png');
  song5.photo.attach(io: file, filename: 'winter.png')
  
end


