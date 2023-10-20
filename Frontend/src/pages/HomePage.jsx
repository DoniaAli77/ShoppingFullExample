import { useEffect, useState } from "react";
import AppNavBar from "../components/navbar";
import axios from "axios";
export default function HomePage() {
  const [userName, setUserName] = useState("");
  // useeffect to fetch username
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/users/651b35f6cb4d3c4f164285a9");
        console.log('response')
        setUserName(response.data.name);
        localStorage.setItem("userId", response.data._id);
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <AppNavBar/>
      <h1>hi {userName}</h1>
    </>
  );
}
