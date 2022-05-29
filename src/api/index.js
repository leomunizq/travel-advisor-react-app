import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359'
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'edc02aaa9emsh185d154bcafc360p1522bcjsn65e24dc3ff3a'
  }
}

export const getPlacesData = async (bounds, sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat
      },
      headers: {
        'x-rapidapi-key': 'edc02aaa9emsh185d154bcafc360p1522bcjsn65e24dc3ff3a',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
