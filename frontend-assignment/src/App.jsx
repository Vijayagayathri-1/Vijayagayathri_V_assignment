import React, { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import EventCard from './components/EventCard';
import Modal from './components/Modal';
import FilterSection from './components/FilterSection';
import HeroSection from './components/HeroSection'; // <-- NEW
import ReviewSection from './components/ReviewSection';
import ImageCarousel from './components/ImageCarousel';
import { fetchServices } from './services/mockApi';
import { useDebounce } from './hooks/useDebounce';
import { ThemeContext } from './context/ThemeContext';
import BookingForm from './components/BookingForm/BookingForm';
import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    rating: 0,
    priceRange: 'all',
  });
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Fetch data when the component mounts
    setIsLoading(true);
    fetchServices().then(data => {
      setServices(data);
      setFilteredServices(data); // Initially show all services
      setIsLoading(false);
    });
  }, []);

  // Effect to handle filtering based on search query and filters
  useEffect(() => {
    let newFilteredServices = services.filter(service =>
      service.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );

    // Apply filters
    if (filters.category) {
      newFilteredServices = newFilteredServices.filter(
        (service) => service.category === filters.category
      );
    }
    if (filters.rating > 0) {
      newFilteredServices = newFilteredServices.filter(
        (service) => service.rating >= parseFloat(filters.rating)
      );
    }
    if (filters.priceRange !== 'all') {
      newFilteredServices = newFilteredServices.filter((service) => {
        if (filters.priceRange === 'low') return service.price < 500;
        if (filters.priceRange === 'medium') return service.price >= 500 && service.price <= 1000;
        if (filters.priceRange === 'high') return service.price > 1000;
        return true;
      });
    }

    setFilteredServices(newFilteredServices);
  }, [debouncedSearchQuery, services, filters]);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleBookingSubmit = () => {
    // Logic after booking confirmation
    handleCloseModal();
  };

  return (
    <div className={`app ${theme}`}>
      <Header onSearchChange={setSearchQuery} />
      <main className="main-content">
        <HeroSection /> {/* <-- NEW */}
        <FilterSection onFilterChange={setFilters} />
        {isLoading ? (
          <p>Loading services...</p>
        ) : (
          <div id="services-grid" className="services-grid"> {/* <-- UPDATED: ADDED ID */}
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <EventCard
                  key={service.id}
                  service={service}
                  onClick={() => handleCardClick(service)}
                />
              ))
            ) : (
              <p>No services found that match your criteria.</p>
            )}
          </div>
        )}
      </main>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedService && (
          <div className="service-detail">
            <h2 className="detail-title">{selectedService.name}</h2>
            <ImageCarousel images={selectedService.images} />
            <p className="detail-description">{selectedService.description}</p>
            <p className="detail-price">Price: ${selectedService.price}</p>
            <p className="detail-rating">Rating: {selectedService.rating} ⭐</p>
            <ReviewSection reviews={selectedService.reviews} />
            <div className="booking-section">
              <BookingForm service={selectedService} onBookingSubmit={handleBookingSubmit} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;