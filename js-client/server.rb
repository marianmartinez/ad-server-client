require "pry"
require "sinatra"
#require "sinatra/reloader" if development?

enable :sessions

get '/' do
  erb :adserver
end