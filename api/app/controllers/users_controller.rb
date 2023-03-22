class UsersController < ApplicationController
    def register
        # pp(user_params)
        user = User.create(user_params)
        if user.valid?
            app_response(message: 'Reegistration was successfull', status: :created, data: user)

            # render json: { message: 'Registration was successfull', data: user}, status::created
        else
            app_response(message:'Something went wrong during registration', status: :unprocessable_entity, data: user.errors)

            # render json: { message: 'Something went wrong during registration'}, status::unprocessable_entity
            end
        end    
    private

    def user_params
        params.permit(:Username, :email, :password)
    end

end
