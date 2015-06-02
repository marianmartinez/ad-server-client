Rails.application.routes.draw do

get '/advertisements' => 'serveadvertisements_controller#process_request'

end
