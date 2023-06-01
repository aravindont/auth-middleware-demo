const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8080;

// Middleware to check if user is authenticated
const checkAuthMiddleware = (req, res, next) => {
  // Check if user is authenticated
  const isAuthenticated = /* Check user authentication, e.g., req.session.isAuthenticated */ true;

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

// Route handler
app.get("/post", checkAuthMiddleware, (req, res) => {
  // Access post data from request object
  const postData = req.postData;

  // Send post data as response
  res.json(postData);
});

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`);
});
