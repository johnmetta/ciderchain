class BatchesController < ApplicationController
  before_action :set_batch, only: %i[show edit update destroy]

  # GET /batches
  # GET /batches.json
  def index
    @batches = BatchPresenter.collection(Batch.all).as_json
  end

  # GET /batches/1
  # GET /batches/1.json
  def show; end

  # GET /batches/new
  def new
    @batch = Batch.new
  end

  # GET /batches/1/edit
  def edit; end

  # POST /batches
  # POST /batches.json
  def create
    @batch = Batch.new(batch_params.except(:state_id, :vessel_id))
    if batch_params[:state_id] && batch_params[:vessel_id]
      @batch.rackings.build(
        state_id: batch_params[:state_id],
        unit_id: batch_params[:unit_id],
        vessel_id: batch_params[:vessel_id],
        volume: batch_params[:volume]
      )
    end
    if @batch.save
      render json: BatchPresenter.new(@batch).as_json
    else
      render json: @batch.errors, racking: :unprocessable_entity
    end
  end

  # PATCH/PUT /batches/1
  # PATCH/PUT /batches/1.json
  def update
    if @batch.update(batch_params)
      render :show, racking: :ok, location: @batch
    else
      render json: @batch.errors, racking: :unprocessable_entity
    end
  end

  # DELETE /batches/1
  # DELETE /batches/1.json
  def destroy
    @batch.destroy
    head :no_content
  end

  def latest_code
    render json: { code: Batch.new_code }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_batch
    @batch = Batch.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def batch_params
    params.require(:batch).permit(:created_at, :name, :volume, :code, :unit_id, :state_id, :vessel_id)
  end
end
