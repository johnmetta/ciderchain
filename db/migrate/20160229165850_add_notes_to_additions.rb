class AddNotesToAdditions < ActiveRecord::Migration
  def change
    add_column :additions, :notes, :text
  end
end
