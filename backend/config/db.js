import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not defined in environment variables');
      process.exit(1);
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    
    // Provide helpful error messages
    if (error.message.includes('IP')) {
      console.error('\n💡 Tip: Make sure your IP is whitelisted in MongoDB Atlas:');
      console.error('   1. Go to MongoDB Atlas → Network Access');
      console.error('   2. Add IP Address: 0.0.0.0/0 (for development)');
      console.error('   3. Wait 2-3 minutes for changes to propagate\n');
    } else if (error.message.includes('authentication')) {
      console.error('\n💡 Tip: Check your MongoDB username and password in MONGODB_URI\n');
    }
    
    process.exit(1);
  }
};

export default connectDB;

