class GamesController < ApplicationController
  respond_to :json
  def create
    render :text => "I'ma tell you when I'm ready. When I'm ready, I'ma tell you."
  end
end
