class EventsController < ApplicationController
  before_action :set_trip, only: %i[show new create edit update]
  before_action :set_event, only: %i[show new create edit update destroy]

  def index
  end

  def show
    @task = Task.new
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.trip = @trip
    if @event.save!
      # redirect_to trip_event_path(@trip, @event)
      redirect_to trip_path(@trip)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @event.update(event_params)
    # No need for app/views/restaurants/update.html.erb
    redirect_to restaurant_path(@restaurant)
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def set_event
    @event = Event.find(params[:trip_id])
  end

  def event_params
    params.require(:event).permit(:name,
                                  :event_type,
                                  :start_date,
                                  :end_date,
                                  :start_location,
                                  :end_location,
                                  :provider,
                                  :reservation_number,
                                  :seat_number,
                                  :notes,
                                  :provider_phone,
                                  :provider_email)
  end
end
