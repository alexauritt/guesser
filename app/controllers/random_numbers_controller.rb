class RandomNumbersController < ApplicationController
  
  def show
    @number = rand(100) + 1
    respond_to do |format|
      format.html
      format.json { render :json => @number }
    end
  end
end
