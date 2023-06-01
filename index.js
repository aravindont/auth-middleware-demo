const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8080;

// Middleware to check if user is authenticated
const checkAuthMiddleware = (req, res, next) => {
  // Check if user is authenticated
  const isAuthenticated = /* Check user authentication, e.g., req.session.isAuthenticated */ false;

  if (isAuthenticated) {
    // Retrieve post data
    const postData =
      /* Retrieve post data, e.g., by making a database query */ {
        title: "Sample Post",
        content: "Lorem ipsum dolor sit amet.",
      };

    // Attach post data to request object
    req.postData = postData;

    // Continue to next middleware or route handler
    next();
  } else {
    // Handle unauthenticated user
    res.status(401).json({ error: "Unauthorized" });
  }
};
app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`);
});
