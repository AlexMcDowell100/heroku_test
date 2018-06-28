Rails.application.routes.draw do
  devise_for :users
  resources :posts
  root 'ginlovers#index'
  get 'age_verification' => 'age_verification#new'
  get 'forum' => 'posts#index'
end
