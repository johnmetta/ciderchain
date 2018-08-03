class AdditivesController < ApplicationController
  before_action :set_additive, only: %i[show edit update destroy]

  def index
    @additives = Additive.all
    render json: AdditivePresenter.collection(@additives).as_json
  end

  # GET /units/1
  # GET /units/1.json
  def show
    render json: @additive
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_additive
    @additive = Additive.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def additive_params
    params.require(:additive).permit(:name, :notes)
  end
end
