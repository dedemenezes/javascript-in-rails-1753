class Monument < ApplicationRecord
  validates :name, presence: true
end
