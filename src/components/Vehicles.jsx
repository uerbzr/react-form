import React, { useState } from "react";
import Vehicle from "./Vehicle";

function Vehicles({ title, vehicles, setVehicles }) {
  {
    /* 
    we could manage the forms state with seperate STATE 
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

      const validateForm = () => {
    const formErrors = {
      nameError: [],
      passwordError: [],
      hasErrors: false,
    };

    
    */
  }

  {
    /* better to manage it with an object */
  }

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    email: "",
    img: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const handleDeleteVehicle = (id) => {
    let _vehicles = [...vehicles];
    _vehicles = _vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(_vehicles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //spread the original vehicles and add the new one
    setVehicles([
      ...vehicles,
      {
        id: Math.max(...vehicles.map((o) => o.id + 1)),
        make: formData.make,
        model: formData.model,
        email: formData.email,
        likes: 0,
        img: formData.img,
      },
    ]);
    setFormData({ make: "", model: "", email: "", img: "" });
  };
  const handleLikes = (id, amount) => {
    let _vehicles = [...vehicles];
    let _vehicle = _vehicles.find((f) => f.id == id);
    _vehicle.likes += amount;
    setVehicles(_vehicles);
  };

  return (
    <>
      <h1>{title ? title : "Vehicles"}</h1>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="card col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="class-header text-primary">Add a Vehicle</div>
            <div className="class-body">
              <input
                id="make"
                className="form-control"
                type="text"
                placeholder="make of vehicle"
                value={formData.make}
                onChange={handleInputChange}
                required
              />
              <div class="invalid-feedback">Please provide a valid make.</div>
              <input
                id="model"
                className="form-control"
                type="text"
                placeholder="model of vehicle"
                value={formData.model}
                onChange={handleInputChange}
              />
              <input
                id="email"
                className="form-control"
                type="text"
                placeholder="your email"
                value={formData.email}
                onChange={handleInputChange}
              />{" "}
              <input
                id="img"
                className="form-control"
                type="text"
                placeholder="img url"
                value={formData.img}
                onChange={handleInputChange}
              />
            </div>
            <div className="class-footer pull-right">
              <button
                type="submit"
                className="btn btn-primary btn-sm pull-right"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
        {vehicles.map((v, i) => (
          <Vehicle
            key={i}
            vehicle={v}
            handleDeleteVehicle={handleDeleteVehicle}
            handleLikes={handleLikes}
          />
        ))}
      </div>
    </>
  );
}

export default Vehicles;
