import axios from 'axios'

const phonesUrl = 'http://localhost:4000/phones'

const fetchPhones = id => {
  let url = phonesUrl
  if (id) url = `${phonesUrl}/${id}`
  return axios.get(url)
}

export { fetchPhones }