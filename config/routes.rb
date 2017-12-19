Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]

  mount_devise_token_auth_for 'Admin', at: 'admin_auth', skip: [:omniauth_callbacks]

  as :admin do
    # Define routes for Admin within this block.
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
end
