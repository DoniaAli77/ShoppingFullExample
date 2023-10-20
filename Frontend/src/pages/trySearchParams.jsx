import { useParams } from "react-router-dom";
import AppNavBar from "../components/navbar";

export default function TryParams() {
  const searchParams = useParams();
  
  return (
    <>
      <AppNavBar />
      <h1>hi {searchParams.id}</h1>
    </>
  );
}