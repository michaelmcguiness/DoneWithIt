import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

const useLocation = () => {
  const [location, setLocation] = useState<Object>()

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync()
      if (!granted) return
      const {
        coords: { latitude, longitude },
      } = (await Location.getLastKnownPositionAsync()) || { coords: {} }
      setLocation({ latitude, longitude })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getLocation()
  }, [])

  return location
}

// test comment
export default useLocation
