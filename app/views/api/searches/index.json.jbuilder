json.songs_by_title do

  @songs_by_title.each do |song|

    json.set! song.id do
      json.partial! 'api/songs/song', song: song
      json.image_url url_for(song.photo)

    end
  end
  
end


def parse_song_body(body) 

  lyrics = []

  body.each_with_index do |lyric, idx|

    if lyric.downcase.include?(@query) && !lyrics.include?(lyric)

      lyrics << body[idx -1] if body && (idx - 1 > 0) && !body[idx -1].include?('[')
      lyrics << lyric 
      
      if body && (idx + 1 <= (body.length() - 1)) && !body[idx + 1].include?('[')
        lyrics << body[idx + 1] 
      end

      break
    
    end

  end  

  lyrics

end


json.songs_by_lyric do
  
  @songs_by_lyric.each do |song|

    lyrics = parse_song_body(song.body)

    json.set! song.id do
      json.partial! 'api/songs/song', song: song
      json.image_url url_for(song.photo)
      json.lyrics lyrics
    end

  end
end