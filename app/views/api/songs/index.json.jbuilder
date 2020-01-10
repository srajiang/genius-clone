@songs.each do |song|
  json.set! song.id do
    
    json.partial! 'song', song: song
    json.image_url url_for(song.photo)

  end
end