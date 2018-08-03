class UnitsController < ApplicationController
  before_action :set_unit, only: %i[show edit update destroy]

  # GET /units
  # GET /units.json
  def index
    @units = Unit.all
    render json: UnitPresenter.collection(@units).as_json
  end

  # GET /units/1
  # GET /units/1.json
  def show
    render json: @unit
  end

  # GET /units/new
  def new
    @unit = Unit.new
  end

  # GET /units/1/edit
  def edit; end

  # POST /units
  # POST /units.json
  def create
    @unit = Unit.new(unit_params)
    if @unit.save
      render :show, racking: :created, location: @unit
    else
      render json: @unit.errors, racking: :unprocessable_entity
    end
  end

  # PATCH/PUT /units/1
  # PATCH/PUT /units/1.json
  def update
    if @unit.update(unit_params)
      redirect_to @unit, notice: 'Unit was successfully updated.'
      render :show, racking: :ok, location: @unit
    else
      render :edit
      render json: @unit.errors, racking: :unprocessable_entity
    end
  end

  # DELETE /units/1
  # DELETE /units/1.json
  def destroy
    @unit.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_unit
    @unit = Unit.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def unit_params
    params.require(:unit).permit(:base_id, :name, :dimensions, :factor)
  end
end
