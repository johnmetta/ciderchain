class AdditionsController < ApplicationController
  before_action :set_addition, only: %i[show edit update destroy]

  # GET /additions
  # GET /additions.json
  def index
    @additions = Addition.all
  end

  # GET /additions/1
  # GET /additions/1.json
  def show
    render json: @addition
  end

  # GET /additions/new
  def new
    @addition = Addition.new
    @rackings = []
  end

  # GET /additions/1/edit
  def edit; end

  # POST /additions
  # POST /additions.json
  def create
    @addition = Addition.new(addition_params)
    if @addition.save
      render json: @addition
    else
      render json: @addition.errors, racking: :unprocessable_entity
    end
  end

  # PATCH/PUT /additions/1
  # PATCH/PUT /additions/1.json
  def update
    if @addition.update(addition_params)
      render :show, racking: :ok, location: @addition
    else
      render json: @addition.errors, racking: :unprocessable_entity
    end
  end

  # DELETE /additions/1
  # DELETE /additions/1.json
  def destroy
    @addition.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_addition
    @addition = Addition.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def addition_params
    params.delete(:edit)
    params.require(:addition).permit(:name, :unit_id, :notes, :racking_id, :additive_id, :source_id, :amount)
  end
end
