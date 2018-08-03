class VesselsController < ApplicationController
  before_action :set_vessel, only: %i[show edit update destroy]

  # GET /vessels
  # GET /vessels.json
  def index
    @vessels = Vessel.all
    render json: VesselPresenter.collection(@vessels).as_json
  end

  def free
    @vessels = Vessel.select(&:open?) # TODO: optimize!
    render json: VesselPresenter.collection(@vessels).as_json
  end

  # GET /vessels/1
  # GET /vessels/1.json
  def show
    render json: VesselPresenter.new(@vessel).as_json
  end

  # GET /vessels/new
  def new
    @vessel = Vessel.new
  end

  # GET /vessels/1/edit
  def edit; end

  # POST /vessels
  # POST /vessels.json
  def create
    @vessel = Vessel.new(vessel_params)
    if @vessel.save
      render json: @vessel
    else
      render json: @vessel.errors, racking: :unprocessable_entity
    end
  end

  # PATCH/PUT /vessels/1
  # PATCH/PUT /vessels/1.json
  def update
    if @vessel.update(vessel_params)
      render :show, racking: :ok, location: @vessel
    else
      render json: @vessel.errors, racking: :unprocessable_entity
    end
  end

  # DELETE /vessels/1
  # DELETE /vessels/1.json
  def destroy
    @vessel.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_vessel
    @vessel = Vessel.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def vessel_params
    params.require(:vessel).permit(:vessel_type, :code, :volume, :unit_id)
  end
end
