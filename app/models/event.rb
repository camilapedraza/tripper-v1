class Event < ApplicationRecord
  EVENT_TYPES = %w[journey flight train bus boat car_bike stay restaurant show visit other]

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
    event_type == "journey"
  end

  def flight?
    event_type == "flight"
  end

  def train?
    event_type == "train"
  end

  def bus?
    event_type == "bus"
  end

  def boat?
    event_type == "boat"
  end

  def car_bike?
    event_type == "car_bike"
  end

  def stay?
    event_type == "stay"
  end

  def restaurant?
    event_type == "restaurant"
  end

  def show?
    event_type == "show"
  end

  def visit?
    event_type == "visit"
  end

  def other?
    event_type == "other"
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
