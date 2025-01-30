let db;

const request = indexedDB.open("CarRentalSystemDB", 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;

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
  db = event.target.result;
  console.log("Database opened successfully");
};

request.onerror = (event) => {
  console.error("Error opening database:", event.target.error);
};

function addUser(user) {
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  store.add(user);
}

function getUser(userId) {
  const transaction = db.transaction("users", "readonly");
  const store = transaction.objectStore("users");
  return store.get(userId);
}



function addCar(car) {
  const transaction = db.transaction("cars", "readwrite");
  const store = transaction.objectStore("cars");
  store.add(car);
}

function getCar(carId) {
  const transaction = db.transaction("cars", "readonly");
  const store = transaction.objectStore("cars");
  return store.get(carId);
}

function getCarsByOwner(ownerId) {
  const transaction = db.transaction("cars", "readonly");
  const store = transaction.objectStore("cars");
  const index = store.index("owner_id");
  return index.getAll(ownerId);
}



function addBooking(booking) {
  const transaction = db.transaction("bookings", "readwrite");
  const store = transaction.objectStore("bookings");
  store.add(booking);
}

function getBooking(bookingId) {
  const transaction = db.transaction("bookings", "readonly");
  const store = transaction.objectStore("bookings");
  return store.get(bookingId);
}

function getBookingsByUser(userId) {
  const transaction = db.transaction("bookings", "readonly");
  const store = transaction.objectStore("bookings");
  const index = store.index("user_id");
  return index.getAll(userId);
}

function getBookingsByCar(carId) {
  const transaction = db.transaction("bookings", "readonly");
  const store = transaction.objectStore("bookings");
  const index = store.index("car_id");
  return index.getAll(carId);
}



function addReview(review) {
  const transaction = db.transaction("reviews", "readwrite");
  const store = transaction.objectStore("reviews");
  store.add(review);
}

function getReview(reviewId) {
  const transaction = db.transaction("reviews", "readonly");
  const store = transaction.objectStore("reviews");
  return store.get(reviewId);
}

function getReviewsByUser(userId) {
  const transaction = db.transaction("reviews", "readonly");
  const store = transaction.objectStore("reviews");
  const index = store.index("user_id");
  return index.getAll(userId);
}

function getReviewsByCar(carId) {
  const transaction = db.transaction("reviews", "readonly");
  const store = transaction.objectStore("reviews");
  const index = store.index("car_id");
  return index.getAll(carId);
}



function addMessage(message) {
  const transaction = db.transaction("messages", "readwrite");
  const store = transaction.objectStore("messages");
  store.add(message);
}

function getMessage(messageId) {
  const transaction = db.transaction("messages", "readonly");
  const store = transaction.objectStore("messages");
  return store.get(messageId);
}

function getMessagesBySender(senderId) {
  const transaction = db.transaction("messages", "readonly");
  const store = transaction.objectStore("messages");
  const index = store.index("sender_id");
  return index.getAll(senderId);
}

function getMessagesByReceiver(receiverId) {
  const transaction = db.transaction("messages", "readonly");
  const store = transaction.objectStore("messages");
  const index = store.index("receiver_id");
  return index.getAll(receiverId);
}

function getMessagesByCar(carId) {
  const transaction = db.transaction("messages", "readonly");
  const store = transaction.objectStore("messages");
  const index = store.index("car_id");
  return index.getAll(carId);
}


export {
  addUser,
  getUser,
  addCar,
  getCar,
  getCarsByOwner,
  addBooking,
  getBooking,
  getBookingsByUser,
  getBookingsByCar,
  addReview,
  getReview,
  getReviewsByUser,
  getReviewsByCar,
  addMessage,
  getMessage,
  getMessagesBySender,
  getMessagesByReceiver,
  getMessagesByCar,
};