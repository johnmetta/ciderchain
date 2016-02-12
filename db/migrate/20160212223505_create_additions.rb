class CreateAdditions < ActiveRecord::Migration
  def change
    create_table :additions do |t|
      t.string :name
      t.float :amount
      t.integer :state_id

      t.timestamps null: false
    end
  end
end
