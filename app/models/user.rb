class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: :true
    validates :password, length: { minimum: 8, allow_nil:true}
    validates :username, uniqueness: true
    validates :session_token, uniqueness: true

    before_validation :ensure_token
    attr_reader :password

    def self.find_by_credentials(login, password)
        user = User.find_by(username: login) || User.find_by(email: login)
      
        return nil unless user
        return user if user.is_password?(password)
    end

    def password=(password)
        @password=password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save
        self.session_token
    end

    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
