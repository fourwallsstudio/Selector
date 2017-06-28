Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update]
    resources :shows, except: [:new, :edit]
    resources :comments, only: [:create, :show, :destroy]
    resources :queue_items, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
