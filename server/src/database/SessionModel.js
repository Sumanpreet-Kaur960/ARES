const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String
  },
  state: {
    type: String,
    enum: ["ACTIVE", "IDLE", "WARNING", "HIBERNATED", "RESTORING"],
    default: "ACTIVE"
  },
  lastActivity: {
    type: Number,
    default: Date.now
  },
  createdAt: {
    type: Number,
    default: Date.now
  },
  updatedAt: {
    type: Number,
    default: Date.now
  },
  metadata: {
    tabId: String,
    device: String,
    browser: String
  }
});

module.exports = mongoose.model("Session", SessionSchema);