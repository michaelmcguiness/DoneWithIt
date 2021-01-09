import client from './client'
import { Listing } from '../types'

const endpoint = '/listings'

type listingResponse = {
  data?: Listing[]
  ok: boolean
}

const getListings = (): Promise<listingResponse> => client.get(endpoint)

export default {
  getListings,
}
