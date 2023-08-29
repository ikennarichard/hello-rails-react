Rails.application.routes.draw do
  root 'greetings#index'

  resources :greetings

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :greetings, only: [:index, :show]
    end
  end
end
