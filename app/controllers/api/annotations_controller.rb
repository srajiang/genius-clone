class Api::AnnotationsController < ApplicationController
  
  def index
    @annotations = Song.find_by(id: params[:songId]).annotations
    render :index
  end

  def create
    @annotation = Annotation.new(annotation_params)

    if @annotation.save
      render :show
    else
      render @annotation.errors.full_messages, status: 422
    end

  end

  def destroy
    @annotation = Annotation.find_by(id: params[:id])
    if !@annotation.nil?
      @annotation.destroy
    end

    render json: ["null"]
  end

  def annotation_params
    params.require(:annotation).permit(:body, :referent_id, :annotator_id)
  end

end
