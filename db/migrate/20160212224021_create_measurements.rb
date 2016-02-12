class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.string :name
      t.float :value
      t.integer :state_id

      t.timestamps null: false
    end
  end
end
