class Event < ApplicationRecord
  EVENT_TYPES = %w[Journey Flight Train Bus Boat Rental Stay Restaurant Show Visit Other]

  before_save :geocode_endpoints
  belongs_to :trip

  has_many :tasks, dependent: :destroy

  validates :event_type, inclusion: { in: EVENT_TYPES }
  validates :start_date, :end_date, :start_location, :end_location, presence: true
  validates :name, presence: true, if: :other?

  # with_options if: :flight? do
  #   validates :
  # end
  def journey?
    event_type == "Journey"
  end

  def flight?
    event_type == "Flight"
  end

  def train?
    event_type == "Train"
  end

  def bus?
    event_type == "Bus"
  end

  def boat?
    event_type == "Boat"
  end

  def car_bike?
    event_type == "Rental"
  end

  def stay?
    event_type == "Stay"
  end

  def restaurant?
    event_type == "Restaurant"
  end

  def show?
    event_type == "Show"
  end

  def visit?
    event_type == "Visit"
  end

  def other?
    event_type == "Other"
  end

  private

# Method to add coordinates for both location from an event
  def geocode_endpoints
    if start_location_changed?
      geocoded = Geocoder.search(start_location).first
      if geocoded
        self.start_latitude = geocoded.latitude
        self.start_longitude = geocoded.longitude
      end
    end
    if end_location_changed?
      geocoded = Geocoder.search(end_location).first
      if geocoded
        self.end_latitude = geocoded.latitude
        self.end_longitude = geocoded.longitude
      end
    end
  end
end
