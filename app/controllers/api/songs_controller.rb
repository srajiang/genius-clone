class Api::SongsController < ApplicationController
  before_action :set_song, only: [:show, :update]
  
  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  # def create
  #   @song = Song.new(song_params)
    
  #   if @song.save
  #     render :show
  #   else
  #     render json: @song.errors.full_messages, status: 422
  #   end
  # end

  # def update
  #   if @song.update(song_params)
  #     render :show
  #   else
  #     render :json @song.errors.full_messages, status: 422
  #   end
  # end

  private

  # def song_params

  #   params.require(:song.permit(:title, :body, :album, :artist, :genre)
  # end

  
end
