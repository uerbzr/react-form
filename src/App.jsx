import { useState } from "react";
import Vehicles from "./components/Vehicles";
import "./App.css";

function App() {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      make: "KTM",
      model: "390 Adventure",
      likes: 20,
      img: "ktm_390_adventure.jpg",
      email: "nigel@ktm.com",
    },
    {
      id: 2,
      make: "Yamaha",
      model: "XT660Z Tenere",
      likes: 10,
      img: "xt_660z_tenere.jpg",
    },
    {
      id: 3,
      make: "BMW",
      model: "F650",
      likes: 0,
      img: "bmw_f650.jpg",
      email: "nigel@bmw.com",
    },
    {
      id: 4,
      make: "Mini",
      model: "Clubman",
      likes: 100,
      img: "mini_clubman.jpg",
      email: "nigel@mini.com",
    },
    {
      id: 5,
      make: "Mini",
      model: "One",
      img: "mini_one.jpg",
      email: "nigel@mini.com",
      likes: 22,
    },
    {
      id: 6,
      make: "Smart",
      model: "ForTwo",
      likes: 12,
      img: "smart_for2.jpg",
      email: "nigel@smart.com",
    },
    {
      id: 7,
      make: "Boeing",
      model: "747",
      likes: 120,
      img: "boeing_747.jpg",
      email: "nigel@747.com",
    },
  ]);

  return (
    <>
      <Vehicles
        title={"Vehicle Voting"}
        vehicles={vehicles}
        setVehicles={setVehicles}
      />
    </>
  );
}

export default App;
