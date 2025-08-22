import React, { useState } from 'react';
import './filterSection.css'; // Assume filterSection.css exists

const FilterSection = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    rating: 0,
    priceRange: 'all',
  });

  // Handles updates to filter inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); // Pass filters to parent component
  };

  return (
    <div className="filter-section">
      <h3>Filters</h3>
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleInputChange}
        >
          <option value="">All Categories</option>
          <option value="DJ">DJ</option>
          <option value="Photographer">Photographer</option>
          <option value="Caterer">Caterer</option>
          <option value="Decorator">Decorator</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="rating">Min. Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={filters.rating}
          onChange={handleInputChange}
          min="0"
          max="5"
          step="0.1"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="priceRange">Price Range:</label>
        <select
          id="priceRange"
          name="priceRange"
          value={filters.priceRange}
          onChange={handleInputChange}
        >
          <option value="all">Any Price</option>
          <option value="low">Less than $500</option>
          <option value="medium">$500 - $1000</option>
          <option value="high">More than $1000</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;