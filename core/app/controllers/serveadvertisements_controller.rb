class ServeadvertisementsController < ApplicationController

	 def process_request
	 	render :json => { newAdvertisement: get_advertisement }
	 end

	 def get_advertisement
	 	return url = 'https://www.elcorteingles.es/sgfm/SGFM/contents/images/uploads/2015/06/556c7139e5dd8e3226b25687.jpg'
	 end

end
