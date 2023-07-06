class TripsController < ApplicationController
  before_action :set_trip, only: %i[show edit update]

  def index
    @trips = Trip.all
    @trip = Trip.new
  end

  def show
    @trip = Trip.find(params[:id])
    @trippers = group_trippers(@trip)
    @chron_events = @trip.events.order(start_date: :asc)
  end

  def new
    @trip = Trip.new
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.user = current_user
    if @trip.save
      redirect_to trip_path(@trip)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @trip.update(trip_params)
    redirect_to trip_path(@trip)
  end

  private

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:name)
  end

  def group_trippers(trip)
    trippers = []
    trippers << trip.user
    trip.collaborators.each { |collaborator| trippers << collaborator.user }
    trippers
  end
end
