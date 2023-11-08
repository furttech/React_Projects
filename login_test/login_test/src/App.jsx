import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import BaconList from "./components/baconList";
import EditBacon from "./components/editBacon";
import CreateBacon from "./components/createBacon";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<BaconList />} />
        <Route path="/edit/:id" element={<EditBacon />}/>
        <Route path="/create" element={<CreateBacon />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

