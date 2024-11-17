# Datanexify-assignment

# README for Calendar Event Management App
Project Overview
This project is a React-based web application that allows users to create and view Google Calendar events. It integrates with the Google Calendar API for authentication and event management. The app supports user authentication via OAuth 2.0 and provides an intuitive interface for managing events directly from the user's browser.

Key Features
User Authentication: Users can sign in using their Google account.
Create Events: Users can create events with specific details like summary, date, and time.
View Events: Users can view a paginated list of their upcoming events.
Responsive Design: The app is designed to be mobile-friendly and responsive.
OAuth 2.0 Integration: Securely authenticate and authorize with Google Calendar API.
Technologies Used
Frontend: React, Axios, CSS for styling
Backend: Node.js, Express, Google APIs
Styling: Custom CSS with responsive design principles
Environment Management: .env for storing sensitive information
Prerequisites
Ensure that you have the following installed:

Node.js (v14+)
npm or yarn
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/akashsaha747/Datanexify-assignment


bash
Copy code
cd client
npm install
cd ../server
npm install
Create an .env file: Inside the client directory, create a .env file to store environment variables:

plaintext
Copy code
REACT_APP_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
REACT_APP_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
REACT_APP_TOKEN_ENDPOINT=https://accounts.google.com/o/oauth2/token
Run the Application: Start the server and client:

bash
Copy code
# In server directory
node app.js

# In client directory
npm start
Access the App: Open your browser and navigate to:

## Folder Structure
calendar-event-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateEvent.js
│   │   │   ├── EventList.js
│   │   │   ├── Signin.js
│   │   ├── CSS/
│   │   │   ├── createEvent.css
│   │   │   ├── eventList.css
│   │   │   ├── signIn.css
│   │   ├── App.js
│   │   └── index.js
│   └── .env
├── server/
│   ├── db.js
│   ├── app.js
│   └── package.json
└── README.md


Acknowledgements
Google Calendar API
Google Oauth
React
Node.js
Express