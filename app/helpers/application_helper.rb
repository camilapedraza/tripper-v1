module ApplicationHelper
  def push_navbar?
    !(params[:action] == 'show' && params[:controller] == 'trips')
  end
end
