class SourcesController < ApplicationController
  before_action :set_source, only: %i[show edit update destroy]

  def index
    @sources = Source.all
    render json: SourcePresenter.collection(@sources).as_json
  end

  # GET /units/1
  # GET /units/1.json
  def show
    render json: @source
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_source
    @source = Source.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def source_params
    params.require(:source).permit(:name, :notes)
  end
end
