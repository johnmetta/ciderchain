class AddPackagedToRackings < ActiveRecord::Migration
  def change
    add_column :rackings, :packaged, :boolean, default: false
  end
end
