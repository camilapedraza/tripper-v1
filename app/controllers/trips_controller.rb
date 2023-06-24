class TripsController < ApplicationController
  def index
    @trips = Trip.all
  end

  def show
    @trip = Trip.find(params[:id])
    @trippers = group_trippers(@trip)
  end

  private

  def group_trippers(trip)
    trippers = []
    trippers << trip.user
    trip.collaborators.each { |collaborator| trippers << collaborator.user }
    trippers
  end

end
