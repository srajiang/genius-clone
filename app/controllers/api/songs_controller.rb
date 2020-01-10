class Api::SongsController < ApplicationController
  
  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find_by(id: params[:id])
    if !@song.nil?
      render :show
    else
      render json: ["Song not found"], status: 422
    end
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def update

    @song = Song.find_by(id: params[:id])

    if !@song.nil?

      if @song.update(song_params)
        render :show
      else
        render json: @song.errors.full_messages, status: 422
      end

    else 
      render json: ["Song not found"], status: 422
    end 

  end

  def destroy

    @song = Song.find_by(id: params[:id])
    if !@song.nil?
      @song.destroy
    end

    render json: ["null"] 
  end

  private

  def song_params
    params.require(:song).permit(:title, :album, :artist, :genre, :about, :body => [])
  end
  
end
