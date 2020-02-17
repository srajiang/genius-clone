class Api::ReferentsController < ApplicationController
  def index
    song = Song.find_by(id: params[:songId])
    if !song.nil?
      @referents = song.referents
      render :index
    else
      render json: ['Invalid song id entered', params[:songId]], status: 400
    end
  end

  def create
    @referent = Referent.new(referent_params)
    
    if @referent.save
      render :show
    else
      render json: @referent.errors.full_messages, status: 422
    end
  end

  def destroy
    @referent = Referent.find_by(id: params[:id])
    
    if !@referent.nil?
      @referent.destroy
      render json: ['null']
    else
      render json: ['No referent by that id found', params[:id]], status: 422
    end
  
  end

  private
  def referent_params
    params.require(:referent).permit(:fragment_range_start, :fragment_range_end, :song_id)
  end.
end
