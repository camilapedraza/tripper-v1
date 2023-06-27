Rails.application.routes.draw do
  get 'trips/index'
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :trips, only: :index
  get '/components', to: 'pages#components'

  resources :trips, only: %i[index show new create edit update]
  # Defines the root path route ("/")
  # root "articles#index"
end
