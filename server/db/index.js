const db = require("./db");

async function syncAndSeed() {
    await db.sync({ force: true });
    
    try {
        
        console.log("Seed successful");
    } catch (error) {
        console.error("Seeding failed:", error)
    }
}

module.exports = { db, syncAndSeed };
