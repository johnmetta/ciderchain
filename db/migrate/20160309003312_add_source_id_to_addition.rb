class AddSourceIdToAddition < ActiveRecord::Migration
  def change
    add_column :additions, :source_id, :integer
  end
end
