class CreateBatches < ActiveRecord::Migration
  def change
    create_table :batches do |t|
      t.string :code
      t.integer :volume
      t.string :name

      t.timestamps null: false
    end
  end
end
