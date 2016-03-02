class HomeController < ApplicationController
  skip_before_filter :require_login
  def index
    @states = State.front_page
  end
end
