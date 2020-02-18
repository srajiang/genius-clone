class Api::SearchesController < ApplicationController
  
  def index

    p "params" + params[:input]
    query = params[:input].downcase
    p query

    @songs_by_title = Song.where("lower(title) LIKE ?", "%#{query}%")
    @songs_by_lyric = Song.where('lower(body) LIKE ?', "%#{query}%")

    p @songs_by_title
    p @songs_by_lyric

    render :index
  end

end
