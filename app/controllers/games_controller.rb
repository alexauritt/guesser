class GamesController < ApplicationController
  respond_to :json, :html
  def create
    respond_with Game.create params[:game]
  end

  def index
  end

  def show
    @game = Game.includes(:guesses).find(params[:id])
    respond_with @game
  end
end
