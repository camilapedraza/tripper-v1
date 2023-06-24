Rails.application.routes.draw do
  get 'trips/index'

  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :trips, only: %i[index show new create edit update] do
    resources :events, only: %i[index show new create]
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
