class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def login(user)
        session[:session_token] = user.reset_token!
    end

    def logout
        render :json ['Must be logged in to log out'], status: 404 if current_user == nil
        current_user.reset_token!
        session[:session_token] = nil
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in
        render :json ['Must be logged in to access'], status: 400 unless logged_in?
    end
end