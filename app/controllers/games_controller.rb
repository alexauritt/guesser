class GamesController < ApplicationController
  respond_to :json, :html
  def create
    respond_with Game.create params[:game]
  end

  def index
  end

  def show
    respond_with Game.find params[:id]
  end
end
