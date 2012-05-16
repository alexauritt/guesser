class RandomNumbersController < ApplicationController
  def show
    @number = rand(100) + 1
  end
end
