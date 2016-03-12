class AddPropertyIdToMeasurement < ActiveRecord::Migration
  def change
    add_column :measurements, :property_id, :integer
  end
end
