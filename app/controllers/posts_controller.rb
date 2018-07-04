class PostsController < ApplicationController
before_action :find_post, only: [:show, :edit, :update, :destroy]
before_action :authenticate_user!, except: [:index, :show]

# GET / posts
  def index
  	@posts = Post.all.order("created_at DESC")
  end

=begin
	this creates a new post and signs it to an instance varible called @post , 
	the @ symbol means we can use it inside of our view, it is just a varible
=end


 #used to be =Post.new
#GET /posts/new
 	def new
 		@post = current_user.posts.build
	end

=begin
	this is saying if new post with the approved params is saved, redirect to the posts page otherwise render a new form
=end

# POST /posts
def create
	@post = current_user.posts.build(post_params)   # used to be =Post.new(post_params)

	if @post.save
		redirect_to @post
	else
		render 'new'
	end
end


=begin
every post will have a unique id
=end

# GET/posts/1
def show
end

#GET / posts /1/edit
def edit
end

def destroy
	@post.destroy
	redirect_to posts_path
	end


def update

	if @post.update(post_params)
		redirect_to @post
	else
		render 'edit'
	end
end


private

def find_post
	@post = Post.find(params[:id])
end


def post_params
	params.require(:post).permit(:title, :body)
end
end
=begin
ruby has a security measure called strong params, you have to permit the different attributes, 
title and body, to allow them to be written to the database
=end