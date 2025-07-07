const serverless = require("serverless-http");
const express = require("express");
const path = require("path");
const { storage } = require("../../server/storage");
const { z } = require("zod");
const { insertContactSchema, insertNewsletterSchema } = require("../../shared/schema");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes for Netlify
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    res.json({ message: "Contact form submitted successfully", contact });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(400).json({ 
      message: error instanceof z.ZodError 
        ? "Invalid form data" 
        : "Failed to submit contact form" 
    });
  }
});

app.post("/api/newsletter", async (req, res) => {
  try {
    const validatedData = insertNewsletterSchema.parse(req.body);
    const newsletter = await storage.createNewsletter(validatedData);
    res.json({ message: "Newsletter subscription successful", newsletter });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(400).json({ 
      message: error instanceof z.ZodError 
        ? "Invalid email format" 
        : "Failed to subscribe to newsletter" 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Export the serverless function
module.exports.handler = serverless(app);