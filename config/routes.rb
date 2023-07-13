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
  get '/eventstype', to: 'pages#eventstype'
  get '/trips/:id/events/:event_id/add_file', to: 'events#add_file', as: 'add_file'

  resources :trips, only: %i[index show new create edit update] do
    resources :events, only: %i[index show new create edit update destroy]
  end

  # MISSING: Delete trip
  # MISSING: Update event
  # MISSING: Delete event

  resources :events do
    resources :tasks, only: %i[index new create]
  end

  resources :tasks, only: %i[update destroy]
end
