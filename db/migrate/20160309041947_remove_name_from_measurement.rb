class RemoveNameFromMeasurement < ActiveRecord::Migration
  def change
    remove_column :measurements, :name
  end
end
