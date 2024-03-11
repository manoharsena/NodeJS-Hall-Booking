# NodeJS Hall Booking Task

## The Leela Palace, Chennai - Hall Booking System

This is an Express.js application for managing booking rooms at The Leela Palace, Chennai.

## Table of Contents

- [Endpoints](#endpoints)
- [Demo](#demo)

## Endpoints

### GET /

- **Description:** Returns a welcome message and instructions on how to use the API.
- 
### GET /hallapi/allroomdetails

- **Description:** Retrieves details of all available rooms.
![All Rooms](/Screenshot/Allrooms1.png)
<br/>

![All Rooms](/Screenshot/Allrooms2.png)


### POST /hallapi/createroom

- **Description:** Creates a new room.
![Create Room](/Screenshot/Createroom.png)


### POST /hallapi/bookingroom

- **Description:** Books a room for a customer.
![Booking](/Screenshot/Bookingroom.png)

### GET /hallapi/bookedroomdata

- **Description:** Retrieves data of all booked rooms.
![Booked](/Screenshot/Bookedroom.png)


### GET /hallapi/customersbookeddata

- **Description:** Retrieves data of all customers with booked room details.
![Customer](/Screenshot/Customerbooked.png)

### GET /hallapi/customerbookingcount

- **Description:** Retrieves booking details for each customer along with booking count.
![Count](/Screenshot/Bookedcount.png)

## Demo
For live demo [Click Here](https://nodejs-hall-booking-cskq.onrender.com).
