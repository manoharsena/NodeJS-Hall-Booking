import express from "express";
import hallRouter from "./Routers/hallBooking.Router.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200)
    .send(`<div style="text-align: center; background-color:lightblue;  padding: 10px;"><h1>Welcome to: The Leela Palace, Chennai - Hall Booking</h1></div>
    <div>
    <ul>
    <li>
    <h3><mark>Get:</mark> End Piont <mark>/hallapi/allroomdetails</mark> to get the all room details.</h3>
    </li>
    <li>
    <h3><mark>Post:</mark> End Piont <mark>/hallapi/createroom</mark> to create a new room.</h3>
    </li>
    <li>
    <h3><mark>Get:</mark> End Piont <mark>/hallapi/bookingroom</mark> to book a new room.</h3>
    </li>
    <li>
    <h3><mark>Get:</mark> End Piont <mark>/hallapi/bookedroomdata</mark> to get booked room data.</h3>
    </li>
    <li>
    <h3><mark>Get:</mark> End Piont <mark>/hallapi/customersbookeddata</mark> to get booked customers and rooms details.</h3>
    </li>
    <li>
    <h3><mark>Get:</mark> End Piont: <mark>/hallapi/customerbookingcount</mark> to get booking counts and room data for booked customers.</h3>
    </li>
    </ul> 
    </div>`);
});
app.use("/hallapi", hallRouter);

app.listen(PORT, () => {
  console.log(`App Listening in ${PORT}`);
});
