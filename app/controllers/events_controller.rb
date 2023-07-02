class EventsController < ApplicationController
  before_action :set_trip, only: %i[show new create edit update]

  def index
  end

  def show
    @event = Event.find(params[:id])
    @tasks = @event.tasks
    @task = Task.new
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.trip = @trip
    if @event.save
      # redirect_to trip_event_path(@trip, @event)
      redirect_to trip_path(@trip)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def event_params
    params.require(:event).permit(:name, :event_type, :start_date, :end_date, :start_location, :end_location)
  end
end
