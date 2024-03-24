import React from "react";
import debounce from "lodash.debounce";
import "./Filter.css";

const Filter = ({ onFilterChange }) => {
  const handleFilterChange = debounce((e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  }, 300);

  return (
    <div className="filterContainer">
      

      <select
        name="time"
        className="filterDropdown"
        onChange={handleFilterChange}
      >
        <option value="">All Time</option>
        <option value="Day">Day</option>
        <option value="Month">Month</option>
        <option value="Year">Year</option>
      </select>

      <select
        name="domain"
        className="filterDropdown"
        onChange={handleFilterChange}
      >
        <option value="">All Fields</option>
        <option value="Allergy">Allergy</option>
        <option value="Anesthesiology">Anesthesiology</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Neurology">Neurology</option>
        <option value="Psychiatry">Psychiatry</option>
      </select>
      <select
        name="gender"
        className="filterDropdown"
        onChange={handleFilterChange}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Bigender">Bigender</option>
      </select>

      <div className="userSearch">
        <input
          name="search"
          type="text"
          placeholder="Search user name or Id"
          className="searchInput"
          onChange={handleFilterChange}
        />
        <ion-icon className="userSearchIcon" name="search"></ion-icon>
      </div>
    </div>
  );
};

export default Filter;