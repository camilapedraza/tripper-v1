class Trip < ApplicationRecord
  belongs_to :user
  has_many :collaborators
  has_many :events, dependent: :destroy
  has_many :tasks, through: :events

  validates :name, presence: true
end
