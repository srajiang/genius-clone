
json.songs_by_title do

  @songs_by_title.each do |song|

    json.set! song.id do

      json.partial! '../songs/song', song: song
      json.image_url url_for(song.phot
    end

  end

end