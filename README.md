Event Service Booking Interface
This is a web application for browsing and booking various event services like DJs, Photographers, and Caterers. This project showcases a responsive user interface built with React, focusing on clean code, a great user experience, and modern front-end practices.

Features
Service Listing: Browse a list of event services displayed in a clean, card-based layout.

Search Functionality: Find specific services instantly using the search bar. The search is optimized to be fast and efficient.

Filters: Easily narrow down the service list by category (e.g., "DJ," "Photographer"), price, and rating.

Responsive Design: The application looks and works great on any device, from a large desktop screen to a small mobile phone.

Loading States: A clear loading indicator is shown while the data is being fetched, so you always know the application is working.

How to Run the Project
To get this project running on your local machine, follow these simple steps.

1. Clone the repository
Open your terminal or command prompt and run the following command to download the project files:

Bash

git clone [repository-url]

2. Navigate to the project folder
Change your current directory to the project folder:

Bash

cd [project-folder-name]

3. Install dependencies
This command installs all the necessary libraries and packages needed for the project to run:

Bash

npm install
or
yarn install

4. Start the development server
This command will start the application on your computer, usually at http://localhost:3000 in your web browser.

Bash

npm start
or
npm run dev



# Technical Details
This project was built using the following technologies:

React: The core JavaScript library for building the user interface.

React Hooks (useState, useEffect): Used to manage component state, handle side effects like data fetching, and keep the code organized.

Mock API: A simple function that simulates fetching data from a server, allowing us to build the front end independently.

Debouncing: A performance optimization technique used for the search bar to prevent unnecessary re-renders as you type. I used a custom hook for this.

Modular Component Structure: The project is organized into reusable components (ServiceCard, SearchBar, etc.) to keep the code clean and maintainable.
