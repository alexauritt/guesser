object @game
attributes(:id, :player_name, :floor, :ceiling, :secret_number)
child(:guesses) { attributes(:number, :result) }