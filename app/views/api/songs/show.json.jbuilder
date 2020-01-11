  json.partial! 'song', song: @song
  json.image_url url_for(@song.photo)

