import { useState, useEffect } from "react"
import { fetchApi } from "../api"

export default function Home() {
  const [details, setDetails] = useState({});
  const ipAddress = "";
  
  useEffect(() => {
    fetchApi(ipAddress).then((data) => {
        setDetails(data);
        console.log(details);
    });
  }, [])

  return (
    <>
        <div className=" align-middle">
            <h1 className=" text-5xl text-white text-center">{details.org}</h1>
            <h1 className=" text-5xl text-white text-center">{details.region}</h1>
            <h1 className=" text-5xl text-white text-center">{details.ip}</h1>
            <h1 className=" text-5xl text-white text-center">{details.city}</h1>
            <h1 className=" text-5xl text-white text-center">{details.postal}</h1>
        </div>
    </>
  )
}
