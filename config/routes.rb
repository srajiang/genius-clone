Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, except: [:new, :edit]
    resources :referents, only: [:index, :create, :destroy]
    resources :annotations, only: [:index, :create, :destroy, :update, :show]
    
  end

  root to: 'static_pages#root'

end
