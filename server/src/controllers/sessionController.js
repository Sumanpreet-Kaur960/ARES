const Session = require("../models/Session");

// START SESSION
exports.startSession = async (req, res) => {
  try {
    const { userId } = req.body;

    const session = new Session({
      userId,
      status: "ACTIVE",
      lastActivity: new Date(),
    });

    await session.save();

    res.status(201).json({
      message: "Session started",
      session,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
exports.updateActivity = async (req, res) => {
  try {
    const { sessionId } = req.body;

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // update last activity
    session.lastActivity = new Date();

    // if it was idle or hibernated → bring back to ACTIVE
    if (session.status !== "ACTIVE") {
      session.status = "ACTIVE";
    }

    await session.save();

    res.json({
      message: "Activity updated",
      session,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};