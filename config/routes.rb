Rails.application.routes.draw do

  get 'home/index'

  resources :sessions
  get 'login' => 'sessions#new', as: :login
  match 'logout' => 'sessions#destroy', as: :logout, via: :all

  resources :batches
  resources :states
  resources :vessels
  resources :measurements
  resources :additions
  resources :units
  resources :rackings
  resources :users
  resources :additives
  resources :sources

  root to: 'home#index'
end
