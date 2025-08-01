# user-management-system-frontend
# Project Idea: User Management System
Overview:<br/>
Build a simple User Management System that allows users to register, log in, view their profile, and update their details. The system will use JWT for secure authentication, and the frontend will be built in Vue.js, while the backend will be in Spring Boot.

## Key Features:
### User Registration:

The user should be able to create a new account by providing their username, email, and password.<br/>
The frontend will validate the input (e.g., check if the email is unique).<br/>

### User Login:
After registration, the user can log in using their email/username and password.<br/>
The frontend will send the JWT token(which was received from backend on successful login) with every request to protected routes (e.g., user profile, update account).<br/>
If the token is valid, the user can access the protected routes; otherwise, they are denied access.<br/>

### User Profile Page:
After logging in, users should be able to view their profile, including their username, email, and other personal details.<br/>
Users can update their profile, including changing their email or password.<br/>
The user can log out, which will remove the JWT token from the frontend.<br/>

## Security Considerations:
Frontend (Vue.js):<br/>
Vue Router: Manage routes and control navigation between different views like login, registration, profile, and dashboard.<br/>
Vuex Store: Store the JWT token and manage user authentication state.<br/>
Axios: Send HTTP requests to the backend to handle login, registration, and profile data.<br/>
Vue Components: Build reusable components for the login form, registration form, and profile view.<br/>
Form Validation: Use a library like Vuelidate or VeeValidate to validate user input.<br/>
Set up Vue.js frontend with Vue Router and Vuex for state management.<br/>
Create forms for user registration, login, and profile management.<br/>
Connect frontend to backend using Axios for API requests.<br/>
Implement JWT storage and management on the frontend (local storage or cookies).<br/>
Handle protected routes on the frontend by checking if the JWT token exists and is valid before allowing access to certain views.<br/>

## Bonus Features (Optional): To be implemented in future
Password Reset/Email Verification: Implement functionality for users to reset their password via email.<br/>
Role-based Authorization: Use JWT to manage user roles (e.g., Admin, User) and restrict certain actions based on roles.<br/>
Refresh Tokens: Implement refresh tokens to keep users logged in without having to constantly log in after the JWT expires.<br/>
This project will help you practice both frontend and backend development and solidify your understanding of secure authentication mechanisms like JWT.<br/>

## Bonus Features (Add on): To be implemented as main feature of the application
user's will be able to do the live chatting using socket connection
need to write jest test cases and had to use Vuetify 3 library for the main page creation
had to implement husky for the linting and code formatting