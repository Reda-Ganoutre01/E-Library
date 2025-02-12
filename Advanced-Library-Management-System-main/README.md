# Advanced Library Management System

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![SonarQube](https://img.shields.io/badge/SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white)

This project is an advanced library management system designed to streamline library operations, including book search, reservations, user management, and more. The backend is built using **Spring Boot**, and the frontend is developed with **React**. Below is an overview of the project structure, features, and setup instructions.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Backend (Spring Boot)](#backend-spring-boot)
5. [Frontend (React)](#frontend-react)
6. [Database](#database)
7. [Setup Instructions](#setup-instructions)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview

The **Advanced Library Management System** is a web application that provides functionalities for both library users and librarians. It allows users to search for books, view details, and reserve books online. Librarians can manage books, users, and track borrowings and returns.

## Features

### User Features
- Search for books by title, author, category, or availability.
- View book details (summary, author, available copies).
- Reserve books online.

### Librarian Features
- Add, update, and delete books in the library.
- Manage users (register, delete).
- Track book borrowings and returns.

### System Features
- Book reservation with time limits.
- Notifications for overdue books.
- Secure authentication and role-based access control.


## Technologies Used

### Backend (Spring Boot)
- **Dependencies**:
  - Spring Security
  - Spring Web
  - Lombok
  - Spring Data JPA
  - MySQL Connector/J
  - Spring DevTools

### Frontend (React)
- **Dependencies**:
  - React Router DOM
  - Redux Toolkit
  - React Redux
  - Axios

### Database
- MySQL


## Backend (Spring Boot)

The backend is built using Spring Boot and provides RESTful APIs for the frontend. Key functionalities include:
- User authentication and authorization using Spring Security.
- CRUD operations for books and users.
- Integration with MySQL for data persistence.


## Frontend (React)

The frontend is a single-page application (SPA) built with React. Key features include:
- Dynamic routing with React Router DOM.
- State management using Redux Toolkit.
- API communication using Axios.
- Responsive and user-friendly UI.



## Database

The application uses a MySQL database to store:
- User information (credentials, roles).
- Book details (title, author, summary, available copies).
- Borrowing and reservation records.



## Setup Instructions

### Prerequisites
- Java Development Kit (JDK) 17 or higher.
- Node.js and npm installed.
- MySQL Server installed and running.

### Backend Setup
1. Clone the repository:
   
   ```bash
   git clone https://github.com/0xSikrox/ALMS.git
   ```
3. Navigate to the backend directory:
   
   ```bash
   cd backend
   ```
5. Update the `application.properties` file with your MySQL credentials:
   
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/library_db
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   ```
7. Run the Spring Boot application:
   
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   
   ```bash
   cd frontend
   ```
3. Install dependencies:
   
   ```bash
   npm install
   ```
5. Start the React development server:
   
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
