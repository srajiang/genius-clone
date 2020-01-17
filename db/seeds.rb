# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
 
  User.destroy_all
  Song.destroy_all
  Referent.destroy_all
  Annotation.destroy_all

  # Songs

  # 0
  user = User.create!( email: "therealbjork@bjork.com", username: "therealbjork", password: "itsohsoquiet")
  user2 = User.create!( email: "olsen@olsenson.com", username: "notSigurRos", password: "itsohsoquiet")
  user3 = User.create!( email: "aurora@Aksnes.com", username: "sn0wyMood", password: "itsohsoquiet")
  user4 = User.create!( email: "robyn@swedish.io", username: "THErobyn", password: "itsohsoquiet" )



  #0

  lyrics = ["[Verse 1]","Somebody said you got a new friend","Does she love you better than I can?", "It's a big black sky over my town", "I know where you at, I bet she's around", "[Refrain]", "Yeah, I know it's stupid, I just gotta see it for myself", "[Chorus]", "I'm in the corner, watching you kiss her, oh", "I'm right over here, why can't you see me? Oh", "I'm giving it my all", "But I'm not the girl you're taking home, ooh", "I keep dancing on my own", "(I keep dancing on my own)", "[Verse 2]", "I'm just gonna dance all night", "I'm all messed up, I'm so outta line", "Stilettos and broken bottles", "I'm spinning around in circles", "[Chorus]", "I'm in the corner, watching you kiss her, ohh", "I'm right over here, why can't you see me, ohh", "I'm giving it my all", "But I'm not the girl you're taking home, ooh", "I keep dancing on my own", "I keep dancing on my own", "[Bridge]", "So far away, but still so near", "(The lights go on, the music dies)", "But you don't see me standing here", "(I just came to say goodbye)", "[Chorus]", "I'm in the corner, watching you kiss her, ohh", "I'm right over here, why can't you see me, ohh", "I'm giving it my all", "But I'm not the girl you're taking home, ooo", "I keep dancing on my own", "I keep dancing on my own", "I'm in the corner, watching you kiss her, ohh", "I'm right over here, why can't you see me, ohh", "I'm giving it my all", "But I'm not the girl you're taking home, ooo", "I keep dancing on my own", "I keep dancing on my own", "[Outro]", "I keep dancing on my own"]
  about = "“Dancing On My Own” is about dancing alone in the club while watching your ex—who’s with another woman. When writing the song, Robyn took inspiration from classic sad-and-lonely disco anthems by Ultravox, Sylvester, and Donna Summer. The song comes from Robyn’s critically-acclaimed 2010 album Body Talk—her big comeback after 2005’s Robyn. Back in 2010, Robyn told Pitchfork: “The whole album is about being really lonely. “Dancing On My Own” was nominated for the Grammy for Best Dance Recording in 2011, but Rihanna got the win.”"
  song6 = Song.create!(
      title: "Dancing on My Own", 
      album: 'Body Talk, Pt.1 - EP',
      artist: "Robyn",
      body: lyrics,
      genre: "Pop",
      about: about 
  )
  
  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/robyn.jpeg");
  song6.photo.attach(io: file, filename: 'robyn.jpeg')

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

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/quiet.jpg");
  song3.photo.attach(io: file, filename: 'quiet.jpg')

  
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
  
  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/black_lake.jpg");
  song2.photo.attach(io: file, filename: 'black_lake.jpg')
  
  
  # 1

  lyrics = ["[Verse 1]","Pedalling through","The dark currents", "I find an accurate copy", "A blueprint of the pleasure in me", "[Chorus 1]", "(Swirling black lilies totally ripe)", "A secret code carved", "A secret code carved", "(Swirling black lilies totally ripe)", "[Verse 2]", "He offers a handshake", "Crooked five fingers", "They form a pattern", "Yet to be matched", "[Chorus 2]", "On the surface simplicity", "(Swirling black lilies totally ripe)", "But the darkest pit in me","And it's pagan poetry", "(Swirling black lilies totally ripe)", "Pagan poetry"]
  about = "Pagan Poetry was the second single from singer Björk’s album Vespertine. The single peaked at number 38 in the UK and number 12 in Canada. It was written and produced by Björk with additional production by Marius de Vries and mixed by Mark “Spike” Stent. The music box adaptation, featured in the song, was done by Jack Perron and the full version was later featured as a B-side song on the “Cocoon” single."
  
  song1 = Song.create!(
      title: "Pagan Poetry", 
      album: 'Vespertine',
      artist: "Björk",
      body: lyrics,
      genre: "Hip Hop",
      about: about 
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/pagan_poetry.jpg");
  song1.photo.attach(io: file, filename: 'pagan_poetry.jpg')

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

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/alright.jpg");
  song4.photo.attach(io: file, filename: 'alright.jpg')

  # 5 

  lyrics5 = ['[Verse 1]','Walking in my sleep','Like the naked trees','Will they wake up again?','Do they sleep, do they dream?', "[Verse 2]", 'Feel it as the wind strokes my skin', 'I am moved by the chill', 'Hear the winter bird sing', "Ah-ah-ah-ah-ah-ah-ah-ah", "Ah-ah-ah-ah-ah-ah-ah-ah", "[Chorus]", "My tears are always frozen", "I can see the air I breathe", "Got my fingers painting pictures", "On the glass in front of me", "Lay me by the frozen river", "Where the boats have passed me by", "All I need is to remember", "How it was to feel alive", "[Verse 3]", "Silent days, violent shades", "We are dancing again","In a dream, by the lake", "Ah-ah-ah-ah-ah-ah-ah-ah", "Ah-ah-ah-ah-ah-ah-ah", "[Chorus]", "My tears are always frozen", "I can see the air I breathe", "Got my fingers painting pictures", "On the glass in front of me", "Lay me by the frozen river", "Where the boats have passed me by", "All I need is to remember", "How it was to feel alive", "[Bridge]", "Rest against my pillow like the ageing winter sun", "Only wake each morning to remember that you're gone", "So I drift away again", "To winter I belong", "Ah-ah-ah-ah-ah-ah-ah-ah", "Ah-ah-ah-ah-ah-ah-ah", 'Ah-ah-ah-ah-ah-ah-ah-ah', 'Ah-ah-ah-ah-ah-ah-ah','Ah-ah-ah-ah-ah-ah-ah-ah', 'Ah-ah-ah-ah-ah-ah-ah', "[Chorus]", "My tears are always frozen", "I can see the air I breathe", "Got my fingers painting pictures", "On the glass in front of me", "Lay me by the frozen river", "Where the boats have passed me by", "All I need is to remember", "How it was to feel alive", "[Post-Chorus]", "My tears are always frozen", 'My tears are always frozen', "My tears are always frozen", "[Outro]", "All I need is to remember", "How it was to feel alive", "I need to remember", "How it was to feel alive"]
  about5 = "This song draws parallels between nature and the soul – suggesting that our view of the world around us is influenced by our emotions and our history."
  
  song5 = Song.create!(
    title: "Winter Bird", 
    album: "All My Demons Greeting Me as a Friend",
    artist: "AURORA",
    body: lyrics5, 
    genre: "Pop",
    about: about5
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/winter.png");
  song5.photo.attach(io: file, filename: 'winter.png')

  #7 

  lyrics7 = ['[Verse 1]', "My one heart hurt another", "So only one life can't be enough", "Can you give me just another", "For that one who got away?", "[Pre-Chorus]", "Lonely I, I'm so alone now", "[Chorus]", "There'll be no rest for the wicked", "There's no song for the choir", "There's no hope for the weary", "If you let them win without a fight","[Verse 2]", "If one heart can mend another", "Only then can we begin", "So won't you hold on a little longer?", "Don't let them get away", "[Pre-Chorus]", "Lonely I, I'm so alone now", "[Chorus 2]", "There'll be no rest for the wicked", "There's no song for the choir", "There's no hope for the weary", "If you let them win without a fight", "I let my good one down", "I let my true love die", "I had his heart, but I broke it every time", "[Pre-Chorus]", "Lonely I, I'm so alone now", "[Chorus 2]", "There'll be no rest for the wicked", "There's no song for the choir", "There's no hope for the weary", "If you let them win without a fight", "I let my good one down", "I let my true love die", "I had his heart, but I broke it every time"]
  about7 = "A beautifully tragic tale of intimacy and separation, “No Rest For The Wicked” evokes the harsh emotional subject matter of the new album, which Li wrote after a breakup. Li sampled Daniel Johnston’s “Some Things Last A Long Time,” prevalent through the piano notes that run throughout the song."

  song7 = Song.create!(
    title: "No Rest For The Wicked", 
    album: "I Never Learn",
    artist: "Lykke Li",
    body: lyrics7, 
    genre: "Pop",
    about: about7
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/norest.jpg");
  song7.photo.attach(io: file, filename: 'norest.jpg')

  #8 

  lyrics8 = ['[Intro]', '(D-D-Dub!)', 'Yeah', '[Chorus]', 'Do you tell your friends that you miss me?', 'Could you ever love me like you used to?', 'Do you feel good when youre with me?', 'I know I feel better when Im with you', 'Do you tell your friends that you miss me?', 'Could you ever love me like you used to?','Do you feel good when youre with me?', 'I know I feel better when Im with you, ah yeah', '[Verse 1]', 'Sick of arguing all the time', 'We argue all the time', 'Like, its all the time', 'I dont bother, nah', 'Ive been a waste of my talent', 'Searching through pics on your timeline', 'All of your girls on your timeline', 'I need some space, tryna find her', 'Waking up, pull up on you, I just something for you', 'I know you wanna talk like a nigga aint been there for you', 'Pull up on you in the morning real quick', 'How bout I dont hit you with some real shit', 'Emotions running wild and you dont feel shit', 'Baby girl, I know you gon\' feel this', 'You aint heard the boy in a little while', 'You aint heard the boy in a little while', 'Your homie talking still, that\'s for sure', 'Tell that broke boy better calm down', 'I got something for you and it\'s still lit', 'Even though we\'re in the club with the dim lights', 'I know it\'s only been about six months', 'But ten summer\'s what it feel like', '[Chorus]', 'Do you tell your friends that you miss me?', 'Could you ever love me like you used to?', 'Do you feel good when youre with me?', 'I know I feel better when Im with you', 'Do you tell your friends that you miss me?', 'Could you ever love me like you used to?','Do you feel good when youre with me?', 'I know I feel better when Im with you, ah yeah']
  about8 = "November 18th, 2016, Danish artist Noah Carter released his official debut single ‘Do You’ produced by Hennedub, after serving several years of jail time. Hennedub and Noah were having a freestyle studio session, and as soon as Hennedub put this beat on, Noah came up with the hook. The cover art for the single contains a balloon in the form of the letter A, which is a reference to Carter’s girlfriend, Alba Grant."

  song8 = Song.create!(
    title: "Do You", 
    album: "Debut Single",
    artist: "Noah Carter",
    body: lyrics8, 
    genre: "Hip Hop",
    about: about8
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/doyou.jpg");
  song8.photo.attach(io: file, filename: 'doyou.jpg')


  #9

  lyrics9 = ['[Intro]', 'Yeah', '[Verse 1]', 'There comes Fenrirs\' twin, his jaws are open wide', 'The serpent rises from the waves','Jormungandr twists and turns, mighty in his wrath','The eyes are full of primal hate', '[Chorus]', 'Thor! Odin\'s son, protector of mankind', 'Ride to meet your fate, your destiny awaits', 'Thor! Hlödyn\'s son, protector of mankind', 'Ride to meet your fate, Ragnarök awaits', '[Verse 2]', "Vingtor rise to face the snake with hammer high", "At the edge of the world", "Bolts of lightning fills the air as Mjölnir does its work", "The dreadfull serpent roars in pain", "[Chorus]", "Thor! Odin's son, protector of mankind", "Ride to meet your fate, your destiny awaits", "Thor! Hlödyn's son, protector of mankind", "Ride to meet your fate, Ragnarök awaits", "[Bridge]", "Mighty Thor grips the snake firmly by its tongue", "Lifts his hammer high to strike soon his work is done", "Vingtor sends the giant snake bleeding to the depth", "Twilight of the thunder god, Ragnarök awaits", "Twilight of the thunder god, Ragnarök awaits", "Twilight of the thunder god, Ragnarök awaits", "Twilight of the thunder god, Ragnarök awaits", "Twilight of the thunder god, Ragnarök awaits", "[Guitar Solo]", "Thor! Odin's son, protector of mankind", "Ride to meet your fate, your destiny awaits","Thor! Hlödyn's son, protector of mankind", "Ride to meet your fate, Ragnarök awaits"]
  about9 = "The song tells the story of the mythical battle between Thor, the god of thunder, and Jörmungandr, the Midgard serpent."

  song9 = Song.create!(
    title: "Twilight of the Thunder God", 
    album: "Twilight of the Thunder God",
    artist: "Amon Amarth",
    body: lyrics9, 
    genre: "Death Metal",
    about: about9
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/twilight.jpg");
  song9.photo.attach(io: file, filename: 'twilight.jpg')

  #10

  lyrics10 = ["[Verse 1]","When all is said and done", "I think I'll be one", "I've got a bucket of blood in my hand", "And I just don't care", "[Verse 2]", "I wear my thorns for you", "They cut all the way through", "This is how I do it", "It takes a lot to it, for you", "I'm dying here I am", "I'm dying here I am", "I'm drying, I'm lying here I am", "[Verse 3]","Here I sing my song", "But it won't be very long", "Come and shelter me here from hell", "This ain't no fun", "[Verse 4]", "I've swallowed the last of my pride", "Oh no longer will I hide", "Cut away without a blink of an eye", "Or I just might die"]
  about10 = "Not only the most famous heavy metal band in Iceland, but one of the best known bands in the country generally, Sólstafir have evolved considerably since their 90s black metal beginnings. Today their music straddles numerous genres, with atmospheric post rock elements surfacing regularly despite definite metal leanings, with compositions bearing a melancholy and haunting touch that has won them fans from across the world."

  song10 = Song.create!(
    title: "Goddess of the Ages", 
    album: "Köld",
    artist: "Sólstafir",
    body: lyrics10, 
    genre: "Death Metal",
    about: about10
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/ages.gif");
  song10.photo.attach(io: file, filename: 'ages.gif')


  #11

  lyrics11 = ["[Verse 1]","We are crowned by our errors","And we're lost in the lone","Dare not look in the mirror", "We've crowned a king with no soul", "We have lost this to silence", "There's no one left to fault", "Dare not look in the mirror", "'Cause it's full of holes", "[Chorus]", "They call us kings", "Then watch us fall down broken", "Lost right to the throne", "Then crown the king of errors", "[Verse 2]", "We have lost this to silence", "There's no one left to fault", "Dare not reach out and falter", "When no one's left to call", "[Bridge]", "Dare not reach out I falter", "Cannot stand all your laughter", "Reach out and touch me", "You'll need to scream loud to reach me", "[Chorus]", "They call us kings", "Then watch us fall down broken", "Lost right to the throne", "Then crown the king of errors", "[Chorus]", "They call us kings", "Then watch us fall down broken", "Lost right to the throne", "Then crown the king of errors"]
  about11 = "Evergrey are the great unsung heroes of Swedish metal. Widely regarded as a progressive metal band, they are in fact entirely unique, with a sound that is as contemporary and crushing as anything out there, but with the unique addition of leader and frontman Tom S. Englund’s extraordinarily soulful voice and lyrics. Evergrey write big, epic and wildly distinctive heavy metal songs that exert colossal emotional power. Quite how they’ve avoided becoming insanely huge is anyone’s guess, but it’s never too late to dive into their immaculate catalogue of wonders."

  song11 = Song.create!(
    title: "King of Errors", 
    album: "Hymns for the Broken",
    artist: "Evergrey",
    body: lyrics11, 
    genre: "Death Metal",
    about: about11
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/errors.jpg");
  song11.photo.attach(io: file, filename: 'errors.jpg')


  #12

  lyrics12 = ["[Verse 1]", "Although I mourn that place", "I would sacrifice the thought", "Just to get near", "[Verse 2]", "1000 Miles above the ground", "I somehow felt so tuned", "My private mind faced mesmeration", "No such prair I've come across", "Such despair, I moved yet still in my steps", "[Verse 3]","Although the time has fled away", "I just wanted it to be so malicious", "I injected it so deep, like dimensional", "Drug in veins", "I can't resist it", "[Verse 4]", "I see it here now", "But still I'm nowhere near", "I inhale it as my awe", "I crave it beyond the shore"]
  about12 = "Not only the most famous heavy metal band in Iceland, but one of the best known bands in the country generally, Sólstafir have evolved considerably since their 90s black metal beginnings. Today their music straddles numerous genres, with atmospheric post rock elements surfacing regularly despite definite metal leanings, with compositions bearing a melancholy and haunting touch that has won them fans from across the world."

  song12 = Song.create!(
    title: "Nature Strutter", 
    album: "Masterpiece of Bitterness",
    artist: "Sólstafir",
    body: lyrics12, 
    genre: "Death Metal",
    about: about12
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/nature.png");
  song12.photo.attach(io: file, filename: 'nature.png')

  #13

  lyrics13 = ["[Verse 1]", "Make a space","For my body", "Dig a hole", "Push the sides apart", "This is what", "I'm controlling", "It's a mold", "The inside that I carve", "[Chorus 1]", "This will be my monument", "This will be a beacon when", "I'm gone", "Gone, gone", "When I'm gone", "Gone, gone", "When I'm gone", "So that when the moment comes", "I can say I did it all with love", "Love, love", "All with love", "Love, love", "All with love", "[Verse 2]", "Make a cast", "Of my body", "Pull back out", "So that I can see", "Let go of how you knew me", "Let go of what I used to be", "[Chorus 2]", "I will let this monument", "Represent a moment of my life", "Life, life", "Of my life", "Life, life", "Of my life", "I will let this monument", "Represent a moment of my life", "Life, life", "Of my life","Life, life", "Of my life", "[Instrumental Chorus]", "[Verse 2]", "Make a cast", "Of my body", "Pull back out", "So that I can see", "Let go of how you knew me", "Let go of what I used to be"]
  about13 = "Robyn describes it as being 'about death', 'defining who you are' and 'a physical sensation of an emotion', inspired by the Juliana Cerqueira Leite clay sculptures she saw at London's Saatchi Gallery."

  song13 = Song.create!(
    title: "Monument", 
    album: "Do It Again",
    artist: "Robyn",
    body: lyrics13, 
    genre: "Pop",
    about: about13
  )

  file = open("https://snillingur-seed.s3-us-west-1.amazonaws.com/monument.jpg");
  song13.photo.attach(io: file, filename: 'monument.jpg')





  # Referents

  ref1 = Referent.create!(
    fragment_range_start: 1,
    fragment_range_end: 3,
    song_id: song5.id
  )

  ref2 = Referent.create!(
    fragment_range_start: 3,
    fragment_range_end: 5,
    song_id: song5.id
  )

  ref3 = Referent.create!(
    fragment_range_start: 12,
    fragment_range_end: 14,
    song_id: song5.id
  )
 
  ref4 = Referent.create!(
    fragment_range_start: 14,
    fragment_range_end: 16,
    song_id: song5.id
  )

  ref5 = Referent.create!(
    fragment_range_start: 3,
    fragment_range_end: 4,
    song_id: song6.id
  )

  ref6 = Referent.create!(
    fragment_range_start: 6,
    fragment_range_end: 7,
    song_id: song6.id
  )

  ref7 = Referent.create!(
    fragment_range_start: 8,
    fragment_range_end: 10,
    song_id: song6.id
  )

  ref8 = Referent.create!(
    fragment_range_start: 17,
    fragment_range_end: 19,
    song_id: song6.id
  )

  ref9 = Referent.create(
    fragment_range_start: 1,
    fragment_range_end: 2,
    song_id: song7.id
  )

  ref10 = Referent.create(
    fragment_range_start: 2,
    fragment_range_end: 5,
    song_id: song7.id
  )

  ref11 = Referent.create(
    fragment_range_start: 8,
    fragment_range_end: 9,
    song_id: song7.id
  )

  ref12 = Referent.create(
    fragment_range_start: 1,
    fragment_range_end: 2,
    song_id: song8.id
  )

  ref13 = Referent.create(
    fragment_range_start: 3,
    fragment_range_end: 5,
    song_id: song9.id
  )

  ref14 = Referent.create(
    fragment_range_start: 5,
    fragment_range_end: 7,
    song_id: song9.id
  )

  ref15 = Referent.create(
    fragment_range_start: 9,
    fragment_range_end: 11,
    song_id: song9.id
  )

  ref16 = Referent.create(
    fragment_range_start: 23,
    fragment_range_end: 25,
    song_id: song9.id
  )


# # Annotations

  annot1 = Annotation.create!(

    body: "Aurora sets the tone for delving into a fantasy world. Asleep, she cannot be sure whether what she is seeing and feeling is real or a projection of her mind. Just like in her song “Conqueror” , the validity of Aurora’s own thoughts are brought into question.",
    referent_id: ref1.id,
    annotator_id: user.id 
  )

  annot2 = Annotation.create!(

    body: "Aurora’s use of natural and mystical imagery sets a bleak and chilling tone that pervades the song.She goes on to demand whether the people she has lost are merely sleeping, or dead and never-to-return. Compare her earlier song “Under Stars” where she chants “they have only fallen asleep, they have only fallen asleep…”, comparing dreams to death in a similar way.",
    referent_id: ref2.id,
    annotator_id: user3.id 
  )

  annot3 = Annotation.create!(

    body: "Aurora uses vibrant nature imagery to describe herself as she walks through an icy forest on a cold day. Her tears freeze as soon as they escape her eyes, and her breath forms mist as she exhales.",
    referent_id: ref3.id,
    annotator_id: user.id 
  )

  annot4 = Annotation.create!(

    body: "The cold temperatures have frozen the glass of her window, allowing her to draw pictures on them. These lines have a clever, if subtle, double-meaning as Aurora seems to reference the iconic hand movements she makes as she performs – ‘painting pictures’.",
    referent_id: ref4.id,
    annotator_id: user2.id 
  )

  annot5 = Annotation.create!(

    body: "Dark skies are, of course, representative of chaos and storms. Serving as a metaphor for Robyn’s internal emotions, she’s experiencing a great deal of emotional angst over her ex’s new girl. It’s interesting Robyn indicates that it’s just her town specifically that’s affected by the storm, perhaps demonstrating she’s alone in the misery in a crowd of elated people.",
    referent_id: ref5.id,
    annotator_id: user2.id 
  )

  annot6 = Annotation.create!(

    body: "She feels foolish for following him around but she needs to see him with the woman that’s replacing her and taking him away. Perhaps for closure, or just to see her competition.",
    referent_id: ref6.id,
    annotator_id: user.id 
  )

   annot7 = Annotation.create!(

    body: "“I’m in the corner” doesn’t necessarily have to be used in a literal sense, but it could refer to the expression (backed into a corner). It means to be forced into a difficult situation which you have (or you think you have) little control over. Robyn feels like helpless when she watches her lover kissing another in which she doesn’t have any control over. The image of Robyn in the corner also accentuates the fact that she feels “on her own.” She’s isolated from where she wants to be, on the outside looking in.",
    referent_id: ref7.id,
    annotator_id: user3.id 

  )

    annot8 = Annotation.create!(

    body: "The longer you stay in a club, the more broken pieces of glass are on the dancefloor, because drunken people don’t care or realize if their empty bottle is accidentally slipping out of their hands.",
    referent_id: ref8.id,
    annotator_id: user2.id 
    
  )

  annot9 = Annotation.create!(

    body: "Lykke Li has consistently written songs about disappointing relationships. She is bitter from past experiences from old scars that have not healed yet. She noted in an interview how this track was written right after exiting a tumultuous relationship, which resulted in an overflow of guilt and emotion for her actions and the breakup itself.",
    referent_id: ref9.id,
    annotator_id: user4.id 

  )


  annot10 = Annotation.create!(

    body: "She feels incomplete without him. It’s as if her hurt is playing a cruel joke: scare my lover away and leave me dying of loneliness.",
    referent_id: ref10.id,
    annotator_id: user.id 

  )

  annot11 = Annotation.create!(

    body: "Originating from The Book of Isaiah, “No Rest for the Wicked” refers to the inhospitable nature of life without God. We use it today when talking about the fight against moral evil, but Lykke has turned the phrase by grouping it with things we sympathize with. Her character has committed evil, but deserves redemption.",
    referent_id: ref11.id,
    annotator_id: user.id 

  )

  annot12 = Annotation.create!(

    body: "“D-D-Dub!” Is the producer tag, of the Danish music producer Hennedub. Hennedub is an established producer on the Danish hip hop scene who frequently work with various different artists like KESI, Lukas Graham, Brandon Beal, and more.",
    referent_id: ref12.id,
    annotator_id: user4.id 
  )

   annot13 = Annotation.create!(

    body: "Jormungandr, the Titanic and awful Midgard Serpent, who is the wolf Fenris' brother, Loki’s son by the vile Hel. Norse legend states that during Ragnarök, the final battle, he will face Thor in a monarchy that results in the death of both. Actually, Loki’s the father of three monstrous offspring. Fenrir (Fenris) the wolf, The Midgard Serpent, and Hel. Hel is a woman who is half of normal appearance and half blue like a corpse. She rules over the realm that bears her name. The mother of these three monsters was the giantess Angarboda.",
    referent_id: ref13.id,
    annotator_id: user4.id 
  )

   annot14 = Annotation.create!(

    body: "Jörmungandr is only able to twist and turn, for he is so long he is biting onto his own tail. When he lets go, supposedly Ragnarök will come and the world will end.",
    referent_id: ref14.id,
    annotator_id: user.id 
  )

   annot15 = Annotation.create!(

    body: "Thor is the son of Odin. Hlödyn is another name for the jötunn (and goddess of the earth) Jörð, Thor’s mother.",
    referent_id: ref15.id,
    annotator_id: user.id 
  )

   annot16 = Annotation.create!(

    body: "The snake in question is Jormungand (Old Norse: Jörmungandr) and is a particular enemy of Thor. In the Eddas Thor battles the Midgard Serpent when Ragnarok arrives and their destiny is to slay each other. He drew the serpent up on board, staring straight at it. The serpent glared back, belching poison. The giant Hymir turned pale with fear when he saw the serpent and the sea trembling in and out of the vessel too. At the very moment that Thor gripped his hammer and raised it aloft, the giant fumbled for his bait knife and cut Thor’s line off at the gunwale.",
    referent_id: ref16.id,
    annotator_id: user2.id 
  )



end


