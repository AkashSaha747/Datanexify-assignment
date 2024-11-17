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
git clone https://github.com/username/calendar-event-app.git
cd calendar-event-app
Install dependencies: Navigate to both client and server directories and install the required packages.

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
node server.js

# In client directory
npm start
Access the App: Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
Usage
Sign in with Google: Click the "Authenticate with Google" button to log in.
Create Events: After authentication, use the "Create Calendar Event" button to create an event.
View Events: The list of events will be shown in a table format with pagination controls for easy navigation.
Folder Structure
csharp
Copy code
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
│   ├── server.js
│   └── package.json
└── README.md
Important Notes
Environment Variables: Do not commit the .env file to version control as it contains sensitive information.
OAuth 2.0 Redirect URI: Ensure the redirect URI in the Google Cloud Console matches the one used in the app (http://localhost:3000).
Troubleshooting
If environment variables are not being read, confirm that the .env file is correctly located in the root of the client directory and that REACT_APP_ prefixes are used.
Ensure that the development server (npm start) is restarted after modifying the .env file.
Future Enhancements
Add error handling for network requests.
Implement user notifications for event creation or update statuses.
Add a feature to edit or delete events.
License
This project is licensed under the MIT License. See LICENSE for more details.

Acknowledgements
Google Calendar API
React
Node.js
Express
Feel free to reach out for any questions or further clarifications regarding the project!