import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  let [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      console.log("You are now connected to the network.");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", (event) => {
      console.log("You are not connected to the network.");
      setOnlineStatus(false);
    });
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  //check if online
  return onlineStatus;
};
export default useOnlineStatus;
