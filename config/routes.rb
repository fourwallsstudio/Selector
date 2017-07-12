Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update] do
      get :search, on: :collection
    end
    resources :shows, except: [:new, :edit] do
      get :search, on: :collection
    end
    resources :comments, only: [:index, :create, :show, :destroy]
    resources :queue_items, only: [:create, :update, :destroy]
    resources :tags, only: [:index, :create] do
      get :search, on: :collection
    end
    resources :followings, only: [:create, :destroy]
    resources :graph_data, only: [:show]
    resource :session, only: [:create, :destroy]
  end
end
