Rails.application.routes.draw do
  namespace :api do
    resources :categories
    resources :favorites

    resources :categories do
      resources :favorites
    end
  end
end
