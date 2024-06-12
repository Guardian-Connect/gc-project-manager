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
  getEmailByGp,
  getTicketing,
  getProjectCount,
  getBfr,
  getSitesGvr,
  getSitesAddress,
  findCusInfo,
  ticketsLeft,
  ticketsDone,
  getEodTicketing,
  sendEmailTickets,
  runAtSpecificTimeOfDay,
  getTicketingSearchGp,
  getTicketingSearchGvr,
  troubledCreate,
} = require("./index");

async function createSiteDisp(
  gvr_id,
  gp_cust,
  cus_name,
  site_address,
  contract,
  totaldisp
) {
  try {
    console.log("dispdb", gvr_id, gp_cust, cus_name, site_address, contract);
    const result = await client.query(
      `
      INSERT INTO dispinfo(gvr_id, gp_cust, cus_name, site_address, contract, totaldisp)
      VALUES ($1, $2, $3, $4, $5, $6);
    `,
      [gvr_id, gp_cust, cus_name, site_address, contract, totaldisp]
    );

    return result;
  } catch (error) {
    throw error;
  }
}
async function createTables() {
  try {
    await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar UNIQUE NOT NULL,
          password varchar NOT NULL
        );

      `);
  } catch (error) {
    throw error;
  }
}

//         CREATE TABLE dispinfo (
//   id SERIAL PRIMARY KEY,
//   gp_cust varchar,
//   s_name varchar,
//   cus_name varchar,
//   onboarding boolean,
//   gvr_id varchar UNIQUE,
//   annual varchar,
//   contract varchar,
//   warranty_date date,
//   activation_date date,
//   renewal date,
//   site_address varchar,
//   totaldisp varchar,
//   notes varchar,
//   posvn varchar,
//   posmain varchar,
//   posreg1 varchar,
//   posreg2 varchar,
//   posreg3 varchar,
//   atgmodel varchar,
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

// CREATE TABLE allsites (
//    id SERIAL PRIMARY KEY,
//    gvr_id varchar NOT NULL,
//    gp_cust varchar NOT NULL,
//    cus_name varchar,
//    site_address varchar
// );
//  CREATE TABLE customeremail (
//     id SERIAL PRIMARY KEY,
//     cust_gp varchar NOT NULL,
//     cus_name varchar NOT NULL,
//     rrs varchar,
//     cus_email1 varchar NOT NULL,
//     cus_email2 varchar,
//     cus_email3 varchar,
//    cus_email4 varchar,
//    cus_email5 varchar,
//    cus_email6 varchar
// );
// CREATE TABLE gctracker (
//    id SERIAL PRIMARY KEY,
//    date date,
//    gvr_id varchar NOT NULL,
//    gp varchar,
//    dispatch_type varchar,
//    fm_ticket varchar,
//    location varchar,
//    address varchar,
//    grade varchar,
//    fp varchar,
//    sb varchar,
//    gp_ticket varchar,
//    atl_po varchar,
//    warranty_status varchar,
//    notes varchar
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
    // runAtSpecificTimeOfDay(12, 1, () => {
    //   console.log(new Date());
    // });
    let count2 = await troubledCreate(71);
    console.log(count2);
    // await dropTables();
    // await createTables();
    // await createInitialUsers();
    // await createSiteDisp(
    //   gvr_id,
    //   gp_cust,
    //   cus_name,
    //   site_address,
    //   contract,
    //   totaldisp
    // );
    // const tickets = await getTicketing();
    // console.log(typeof tickets);
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
