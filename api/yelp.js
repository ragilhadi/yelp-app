import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ro8ZFLDenboEY00x4PR9P4Q4sCvbIOBrdSe7alnqIU3Cp7V-07iHfT-lnEcgUTLc2JuAyetr9hcBQEwtACdYS_cWHDjx9Y0PB2Scp9ikUmtHNJ7FAzhkTIq0FOqFXnYx'
    }
})