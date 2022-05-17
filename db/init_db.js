const { CropLandscapeOutlined } = require("@mui/icons-material");
const bcrypt = require("bcrypt");
const moment = require("moment");
const SALT_COUNT = 10;

const {
  client,
  getAllUsers,
  createUser,
  getUsersByID,
  getUserByUsername,
  getAllSites,
  getRecordByDate,
  getSpecificSiteInfoIncom,
  getEmailByGvr,
} = require("./index");

let start = new Date("2022-3-10");
let end = new Date("2022-3-15");
let startDate = start.toISOString();
let useStartDate = startDate.split("T")[0];
let endDate = end.toISOString();
let useEndDate = endDate.split("T")[0];
let gp = "MAJ0001";
async function createTables() {
  try {
    await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar UNIQUE NOT NULL,
          password varchar NOT NULL,
          email varchar NOT NULL
        );
      `);
  } catch (error) {
    throw error;
  }
}

// CREATE TABLE allsites (
//   id SERIAL PRIMARY KEY,
//   gvr_id varchar NOT NULL,
//   gp_cust varchar NOT NULL,
//   cus_name varchar
// );
// CREATE TABLE allsitesemails (
//   id SERIAL PRIMARY KEY,
//   cust_gp varchar NOT NULL,
//   cus_name varchar NOT NULL,
//   cus_email varchar NOT NULL
//   );
// CREATE TABLE dispinfo (
//   id SERIAL PRIMARY KEY,
//   gp varchar NOT NULL,
//   gvrid varchar UNIQUE NOT NULL,
//   address varchar NOT NULL,
//   city varchar NOT NULL,
//   state varchar NOT NULL,
//   totaldisp varchar NOT NULL,
//   disp1 varchar,
//   grades1 varchar,
//   disp2 varchar,
//   grades2 varchar,
//   disp3 varchar,
//   grades3 varchar,
//   disp4 varchar,
//   grades4 varchar,
//   disp5 varchar,
//   grades5 varchar,
//   disp6 varchar,
//   grades6 varchar,
//   disp7 varchar,
//   grades7 varchar,
//   disp8 varchar,
//   grades8 varchar,
//   disp9 varchar,
//   grades9 varchar,
//   disp10 varchar,
//   grades10 varchar,
//   disp11 varchar,
//   grades11 varchar,
//   disp12 varchar,
//   grades12 varchar,
//   disp13 varchar,
//   grades13 varchar,
//   disp14 varchar,
//   grades14 varchar,
//   disp15 varchar,
//   grades15 varchar,
//   disp16 varchar,
//   grades16 varchar,
//   disp17 varchar,
//   grades17 varchar,
//   disp18 varchar,
//   grades18 varchar,
//   disp19 varchar,
//   grades19 varchar,
//   disp20 varchar,
//   grades20 varchar,
//   disp21 varchar,
//   grades21 varchar
// );

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS users;
      `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    await new Promise((resolve, reject) => {
      console.log("First User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const arman = await createUser({
          username: "nels",
          password: hashedPassword,
          email: "test1@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });

    await new Promise((resolve, reject) => {
      console.log("Second User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const james = await createUser({
          username: "james",
          password: hashedPassword,
          email: "test2@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });

    await new Promise((resolve, reject) => {
      console.log("Third User");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const robin = await createUser({
          username: "josh",
          password: hashedPassword,
          email: "test3@yahoo.com",
        });
        resolve();
        console.log("Completed");
      });
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    // console.log;
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    // const userArman = await getUserByUsername("arman");
    // const userJames = await getUserByUsername("james");
    // const userRobin = await getUserByUsername("robin");
    // const users = await getAllUsers();
    // const user1 = await getUsersByID(1);
    // const dispinfo = await getAllSites();
    const testing = await getEmailByGvr(168919);
    // console.log(useStartDate, useEndDate, "dates")
    // const dateRange = await getRecordByDate(start, end, gp)
    // console.log("username", userArman, userJames, userRobin);
    // console.log("All users", users);
    // console.log("User #1", user1);
    // console.log("Dispenser", dispinfo);
    // console.log("range", dateRange);
    // console.log("allsites", dispinfo)
    console.log("test", testing);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
