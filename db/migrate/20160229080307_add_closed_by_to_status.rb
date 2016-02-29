class AddClosedByToStatus < ActiveRecord::Migration
  def change
    add_column :statuses, :closed_by_id, :integer
  end
end
