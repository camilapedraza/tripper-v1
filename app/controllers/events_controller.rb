class EventsController < ApplicationController
  before_action :set_trip, only: %i[show new create edit update]

  def index
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.trip = @trip
    if @event.save
      redirect_to trip_event_path(@trip, @event)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def event_params
    params.require(:events).permit(:name, :start_date, :end_date, :start_location, :end_location)
  end
end
