### Application 2: Real-Time Weather Monitoring System

This directory contains both the frontend and backend for the **Real-Time Weather Monitoring System** application.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Frontend Setup (Client)](#frontend-setup-client)
5. [Backend Setup (Server)](#backend-setup-server)
6. [Running the Application](#running-the-application)

---

## Project Overview

This project monitors weather data from the OpenWeatherMap API for multiple cities in real-time. The application provides weather summaries, sends alerts when the temperature exceeds a defined threshold, and displays historical trends through visualizations.

---

## Technology Stack

**Frontend (Client)**:
- **React**
- **TypeScript**
- **TailwindCSS**
- **Chart.js**

**Backend (Server)**:
- **Node.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Axios** (for API requests)

---

## Directory Structure

```
Application2/
│
├── client/             # Frontend application
│   └── src/            # React-based client code
│
└── server/             # Backend server application
    └── prisma/         # Prisma migrations and schema
```

---

## Frontend Setup (Client)

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Steps to Run the Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd Application2/client
    ```

2. **Install dependencies and start the development server**:
    ```bash
    npm run start
    ```

Once the above build command is used from next time onwards you can use the below command to start the server:

3. **Start the development server**:
    ```bash
    npm run dev
    ```

---

## Backend Setup (Server)

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Steps to Run the Backend

1. **Navigate to the backend directory**:
    ```bash
    cd Application2/server
    ```

2. **Start the backend server**:
    To start the backend server:
    ```bash
    npm run start
    ```

---

## Running the Application

To run both the frontend and backend together:

1. **Run the backend server**:
    - Open a terminal and navigate to the backend folder (`Application2/server`).
    - Run the backend server using the steps provided above.

2. **Run the frontend server**:
    - Open another terminal and navigate to the frontend folder (`Application2/client`).
    - Run the frontend development server using the steps above.

3. **Access the application**:
    Once both the frontend and backend servers are running, open your browser and visit `http://localhost:5173` (or the port specified by your frontend setup) to interact with the application.

---
