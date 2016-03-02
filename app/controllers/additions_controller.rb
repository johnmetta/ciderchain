class AdditionsController < ApplicationController
  before_action :set_addition, only: [:show, :edit, :update, :destroy]

  # GET /additions
  # GET /additions.json
  def index
    @additions = Addition.all
  end

  # GET /additions/1
  # GET /additions/1.json
  def show
  end

  # GET /additions/new
  def new
    @addition = Addition.new
    @statuses = []
  end

  # GET /additions/1/edit
  def edit
  end

  # POST /additions
  # POST /additions.json
  def create
    @addition = Addition.new(addition_params)
    @addition.status = @addition.batch.current_status

    respond_to do |format|
      if @addition.save
        format.html { redirect_to @addition, notice: 'Addition was successfully created.' }
        format.json { render :show, status: :created, location: @addition }
      else
        format.html { render :new }
        format.json { render json: @addition.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /additions/1
  # PATCH/PUT /additions/1.json
  def update
    respond_to do |format|
      if @addition.update(addition_params)
        format.html { redirect_to @addition, notice: 'Addition was successfully updated.' }
        format.json { render :show, status: :ok, location: @addition }
      else
        format.html { render :edit }
        format.json { render json: @addition.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /additions/1
  # DELETE /additions/1.json
  def destroy
    @addition.destroy
    respond_to do |format|
      format.html { redirect_to additions_url, notice: 'Addition was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_addition
    @addition = Addition.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def addition_params
    params.require(:addition).permit(:name, :value, :unit_id, :batch_id, :notes, :status_id)
  end

end
