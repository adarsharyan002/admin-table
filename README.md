# Admin Dashboard for Book Records

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)



## Introduction
This project is an admin dashboard for managing and displaying book records fetched from the Open Library API. The dashboard provides features such as pagination, sorting and filter functionalities.It is built using ReactJS with the Shadcn component library for a modern and responsive user interface.

## Features
1. **Data Fetching**: Fetches book records from the Open Library API.
2. **Columns**: Displays the following columns:
   - `author name`
   - `title`
   - `first_publish_year`
   - `subject`
   - `author_birth_date`
   
3. **Pagination**: Supports pagination with options to display 10, 50, or 100 books per page.
4. **Sorting**: Allows sorting in ascending/descending order for all columns.
5. **Search**: Allows searching books by author.
6. **CSV Download**: Enables downloading the current results in a CSV format.
7. **Authentication**: Includes an authentication mechanism for logging into the dashboard.
8. **Hosting**: The dashboard is hosted online for easy access.

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/admin-table.git
   cd admin-table

2. **Install Dependencies:**
   ```sh
   npm install
3. **Set up environment variables:**
   ```sh
   VITE_PUBLIC_API_KEY="Firebase api key"
4. **Run the server:**
   ```sh
   npm run dev

