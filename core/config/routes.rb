Rails.application.routes.draw do

get '/' => 'site#adserver'

get '/advertisements' => 'serveadvertisements#process_request'

end
