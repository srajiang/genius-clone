class Api::SongsController < ApplicationController
  before_action :set_report, only: [:show, :update]
  
  def index
    @songs = Song.all
  end

  def show
  end

  def create
    @song = Song.new(song_params)
    
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @song.update(song_params)
      render :show
    else
      render :json @song.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def song_params
  end

  def set_report
    @song = Song.find(params[:id])
  rescue
    render json: ['Song not found'], status: :not_found
  end
  
end
