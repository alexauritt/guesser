class GamesController < ApplicationController
  respond_to :json, :html
  def create
    @game = Game.new(params[:game])
    @game.save ? respond_with(@game) : respond_with(@game, :status => :unprocessable_entity)
  end
  def new
  end
  def index
  end
  def show
  end
end
