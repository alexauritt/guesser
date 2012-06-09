class GuessesController < ApplicationController
  respond_to :json
  def create
    respond_with Guess.create params[:guess]
  end
end
