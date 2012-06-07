class Game < ActiveRecord::Base
  has_many :guesses
  accepts_nested_attributes_for :guesses
end
