import { 
  addUser, getUser, addCar, getCar, getCarsByOwner, 
  addBooking, getBooking, getBookingsByUser, getBookingsByCar, 
  addReview, getReview, getReviewsByUser, getReviewsByCar, 
  addMessage, getMessage, getMessagesBySender, getMessagesByReceiver, getMessagesByCar 
} from '../data/database-schema.js';

document.addEventListener('DOMContentLoaded', () => {
  const request = indexedDB.open("CarRentalSystemDB", 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    const usersStore = db.createObjectStore("users", { keyPath: "user_id" });
    usersStore.createIndex("email", "email", { unique: true });

    const carsStore = db.createObjectStore("cars", { keyPath: "car_id" });
    carsStore.createIndex("owner_id", "owner_id", { unique: false });

    const bookingsStore = db.createObjectStore("bookings", { keyPath: "id" });
    bookingsStore.createIndex("user_id", "user_id", { unique: false });
    bookingsStore.createIndex("car_id", "car_id", { unique: false });

    const reviewsStore = db.createObjectStore("reviews", { keyPath: "id" });
    reviewsStore.createIndex("user_id", "user_id", { unique: false });
    reviewsStore.createIndex("car_id", "car_id", { unique: false });

    const messagesStore = db.createObjectStore("messages", { keyPath: "id" });
    messagesStore.createIndex("sender_id", "sender_id", { unique: false });
    messagesStore.createIndex("receiver_id", "receiver_id", { unique: false });
    messagesStore.createIndex("car_id", "car_id", { unique: false });

    const imagesStore = db.createObjectStore("images", { keyPath: "id" });
    imagesStore.createIndex("car_id", "car_id", { unique: false });
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    console.log("Database opened successfully");
  };

  request.onerror = (event) => {
    console.error("Error opening database:", event.target.error);
  };
});