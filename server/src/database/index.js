const mongoose = require("mongoose");
const logger = require("../config/logger.config");

const connectDB = async () => {
  try {
    logger.info('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.DB_URL, {
      autoIndex: false,
      authSource: 'admin',
      serverSelectionTimeoutMS: 5000 // Wait 5 seconds before timing out
    });
    logger.info("✅ MongoDB connection successful!");
  } catch (err) {
    logger.error("❌ MongoDB connection failed:", {
      error: {
        name: err.name,
        message: err.message,
        code: err.code,
        url: process.env.DB_URL?.replace(/:.*@/, ':****@')
      }
    });
    process.exit(1);
  }
};

// Handle connection events for better monitoring
mongoose.connection.on('disconnected', () => {
  logger.warn('🔌 MongoDB disconnected');
});

mongoose.connection.on('reconnected', () => {
  logger.info('🔄 MongoDB reconnected');
});

mongoose.connection.on('error', (err) => {
  logger.error('❌ MongoDB error:', err);
});

connectDB();

module.exports = mongoose.connection;