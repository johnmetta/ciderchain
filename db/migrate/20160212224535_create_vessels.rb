class CreateVessels < ActiveRecord::Migration
  def change
    create_table :vessels do |t|
      t.integer :type
      t.string :code
      t.integer :volume

      t.timestamps null: false
    end
  end
end
