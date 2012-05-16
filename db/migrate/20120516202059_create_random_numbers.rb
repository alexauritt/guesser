class CreateRandomNumbers < ActiveRecord::Migration
  def change
    create_table :random_numbers do |t|
      t.integer :value
      t.timestamps
    end
  end
end
