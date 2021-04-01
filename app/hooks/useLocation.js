import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState({});
  const getLocation = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
