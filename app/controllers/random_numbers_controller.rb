class RandomNumbersController < ApplicationController
  respond_to :html, :json
  
  def show
    @number = RandomNumber.create(:value => rand(100) + 1)
    respond_with @number
  end
end
