Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  root to: "pages#home"

  get '/components', to: 'pages#components'
  get '/uikitt', to: 'pages#uikitt'

  resources :trips, only: %i[index show new create edit update] do
    resources :events, only: %i[index show new create]
  end
end
