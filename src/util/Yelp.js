const apiKey = 'xGLS-m1kTronArY4JSbSxLpterjMghu0SxhwIsjiRxuWnf7B5siOroIJy1VT_peQaVtKLOPPKvDPfnF3lxkO9BSokxK9mTmxDVV5liAsGV9FaP-7RmOdCmAJd9gIX3Yx';
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {
            Authorization: `Bearer ${apiKey}`
        }}).then(response=>{
            return response.json();
            
        }).then(jsonResponse=>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>({
                    
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    
                }));
            }
        });

    }
};

export default Yelp;