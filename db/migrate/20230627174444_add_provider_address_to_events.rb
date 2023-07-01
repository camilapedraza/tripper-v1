class AddProviderAddressToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :provider_address, :string
  end
end
