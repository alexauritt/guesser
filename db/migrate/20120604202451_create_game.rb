class CreateGame < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :player_name
      t.integer :floor
      t.integer :ceiling
      t.integer :secret_number
      t.timestamps
    end
    
    create_table :guesses do |t|
      t.integer :game_id
      t.integer :number
      t.string :result
      
      t.timestamp
    end
  end
end
