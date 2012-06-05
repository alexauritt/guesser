class GamesController < ApplicationController
  respond_to :json
  def create
    # respond_with(Game.new(params[:game])
    render :text => 'asdf'
  end
end
