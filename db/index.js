const { Client } = require("pg");
const bcrypt = require("bcrypt");
const { red } = require("@mui/material/colors");
const DB_NAME = "equipment";
const nodemailer = require("nodemailer");
const moment = require("moment");
const dotenv = require("dotenv");
dotenv.config();

// const client = new Client(
//   process.env.DATABASE_URL ||
//     `postgressql://postgres:postgres@localhost:5432/${DB_NAME}`
// );

// Turn on when uploading to heroku //
// console.log(process.env.REACT_APP_DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true, // true for 465, false for other ports
  service: "yahoo",
  auth: {
    user: "jgale2263130@yahoo.com", // your email address
    pass: process.env.email_password, // your email password
  },
});

// // create a function that sends an email
async function sendEmail(
  gvrId,
  gpCust,
  address,
  activationDate,
  warrantyDate,
  quote,
  notes
) {
  let mailOptions = {
    from: {
      name: "GC Activations",
      address: "jgale2263130@yahoo.com",
    },
    // to: "jgale@guardianfueltech.com",
    to: "guardianconnect@guardianfueltech.com",
    subject: `New Activation - ${gpCust}`,
    text: `New Activation for ${gpCust}, GVR ID - ${gvrId},  Address - ${address},  Activation Date - ${activationDate},  Warranty Expiration - ${warrantyDate},  Status - ${quote}, Notes (X means no notes) - ${notes} `,
  };

  //   // send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

async function sendEmailTickets() {
  let answer = await getEodTicketing();
  let mailOptions = {
    from: {
      name: "Daily Tickets",
      address: "jgale2263130@yahoo.com",
    },
    // to: "jgale@guardianfueltech.com",
    to: "guardianconnect@guardianfueltech.com",
    subject: `Ticketing Report`,
    text: `${answer}`,
  };

  //   // send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return "Email sent: " + info.response;
    }
  });
}

async function sendEmailStatic(
  gvrId,
  gpCust,
  address,
  activationDate,
  warrantyDate,
  quote,
  notes
) {
  let mailOptions = {
    from: {
      name: "GC Activations",
      address: "jgale2263130@yahoo.com",
    },
    // to: "jgale@guardianfueltech.com",
    to: "guardianconnect@guardianfueltech.com",
    subject: `New Activation STATIC SITE - ${gpCust}`,
    text: `New Activation for ${gpCust}, GVR ID - ${gvrId},  Address - ${address},  Activation Date - ${activationDate},  Warranty Expiration - ${warrantyDate},  Status - ${quote}, Notes (X means no notes) - ${notes} `,
  };

  // send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

async function sendEmailSpecialCustomers(
  results,
  problemType,
  gvr_id,
  issue,
  notes,
  date,
  time,
  user
) {
  let mailOptions = {
    from: {
      name: "Customer Alert",
      address: "jgale2263130@yahoo.com",
    },
    // to: "jgale@guardianfueltech.com",
    to: "guardianconnect@guardianfueltech.com",
    subject: `Customer Alert for GVR ID ${gvr_id}`,
    text: `A call was completed at a high profile customer account - ${results}. The problem type
    is ${problemType},here are the notes taken by ${user} : ${notes}. The
    call came in on ${date} at ${time}`,
  };

  // send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

async function getRecordByDate(start, end, gp) {
  try {
    const { rows } = await client.query(
      ` select gp, company, address, gvrid, annual, contract, activation, renewal 
        from dispinfo
        where activation BETWEEN '${start}' and '${end}' and gp LIKE '%${gp}%'
        order by gp;
`
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

// async function getBfr() {
//   try {
//     const { rows } = await client.query(
//       `select ribbon_count, gvr_id, s_name, cus_name, gp_cust, dispinfo.add_id, warranty, site_address, site_city, site_state, site_zip, dashboard_status, gpmaster.* from dispinfo
// INNER JOIN gpmaster ON
// dispinfo.add_id = gpmaster.add_id
// `
//     );
//     // console.log("INC BFR", rows);
//     return rows;
//   } catch (error) {
//     throw error;
//   }
// }

// async function getEodTicketing() {
//   try {
//     console.log("runnin EoD");
//     const left = (await ticketsComplete()).pop();
//     const done = (await ticketsDone()).pop();
//     const billed = (await ticketsDoneWarranty()).pop();
//     console.log(left.count, done.count, "TESTING");
//     const answer =
//       "Left-" +
//       left.count +
//       " " +
//       "Completed-" +
//       done.count +
//       " " +
//       "Warranty Tickets-" +
//       billed.count;
//     return answer;
//   } catch (error) {
//     throw error;
//   }
// }

//ADDING IN NEW FUNCTION TO HELP WITH TICKETING AUTOMATION.
async function getEodTicketing() {
  try {
    const { rows } = await client.query(
      `select ribbon_count, gvr_id, s_name, cus_name, gp_cust, dispinfo.add_id, warranty, site_address, site_city, site_state, site_zip, dashboard_status, gpmaster.* from dispinfo
INNER JOIN gpmaster ON
dispinfo.add_id = gpmaster.add_id
`
    );
  } catch (error) {
    throw error;
  }
}

async function ticketsDoneWarranty() {
  try {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let dated = date_ob.getDate().toString();
    let date = "0" + dated;
    let monthTest = (date_ob.getMonth() + 1).toString();
    let month = "0" + monthTest;
    let year = date_ob.getFullYear().toString().slice(-2);

    let ticketStamp = year + month.slice(-2) + date.slice(-2);
    const { rows } = await client.query(
      ` SELECT COUNT(*) from ticketing
       WHERE gp_ticket LIKE '${ticketStamp}%' and sr_number IS NOT NULL
`
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function ticketsDone() {
  try {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let dated = date_ob.getDate().toString();
    let date = "0" + dated;
    let monthTest = (date_ob.getMonth() + 1).toString();
    let month = "0" + monthTest;
    let year = date_ob.getFullYear().toString().slice(-2);

    let ticketStamp = year + month.slice(-2) + date.slice(-2);
    console.log(ticketStamp, "stamped");
    const { rows } = await client.query(
      ` SELECT COUNT(*) from ticketing
       WHERE gp_ticket LIKE '${ticketStamp}%'
`
    );
    console.log("done", rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function ticketsComplete() {
  try {
    const { rows } = await client.query(
      ` SELECT COUNT(*) from ticketing
        WHERE gp_ticket IS NULL;
`
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createUser({ username, password }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password)
      VALUES ($1, $2);
    `,
      [username, password]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

// NEED TO ADD IN RRS MATRIX ENTRIES.
async function createSite(
  gvrid,
  gp_cust,
  cus_name,
  site_address,
  site_city,
  site_state,
  site_zip,
  contract,
  cus_email1,
  cus_email2,
  rrs,
  custAddId,
  contractor
) {
  let gvr_id = gvrid;
  try {
    console.log(
      "site creation",
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      site_city,
      site_state,
      site_zip,
      contract,
      cus_email1,
      cus_email2,
      rrs,
      custAddId,
      contractor
    );

    if (gvr_id === 0) {
      gvr_id = Math.floor(Math.random() * 50000000);
    }
    const check = await getSiteGvr(gvr_id);
    if (check && check.length > 0) {
      console.log("check", check.length);
      return { message: "Site Exists" };
    } else {
      console.log(check.length, "check");
      let add_id = custAddId;
      let dashboard_status = "Provisioned";
      await createSiteModels(gvr_id);
      await createSiteGrades(gvr_id);
      await createSiteSerials(gvr_id);
      const siteCreate = await createSiteDisp(
        gvr_id,
        add_id,
        gp_cust,
        cus_name,
        site_address,
        site_city,
        site_state,
        site_zip,
        contract,
        cus_email1,
        cus_email2,
        rrs,
        contractor,
        dashboard_status
      );
      //NEED TO ADD GVR IDs into other 3 databases as well. (dispserials, dispmodel, dispgrades)
      //   const result = await client.query(
      //     `
      //   INSERT INTO allsites(gvr_id, gp_cust, cus_name, site_address, site_city, site_state, site_zip)
      //   VALUES ($1, $2, $3, $4, $5, $6, $7);
      // `,
      //     [
      //       gvr_id,
      //       gp_cust,
      //       cus_name,
      //       site_address,
      //       site_city,
      //       site_state,
      //       site_zip,
      //     ]
      //   );
      // console.log("allsite", result);
      return { message: "Site Created" };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function checkEmail(
  gvr_id,
  issue,
  gcIssue,
  notes,
  date,
  time,
  user,
  problemType
) {
  console.log("email", gvr_id);
  try {
    const result = await client.query(
      `
      select gp_cust from dispinfo
       where gvr_id = $1
      
    `,
      [gvr_id]
    );

    const update = result.rows[0];
    console.log(typeof update, "results row", update);

    if (update === undefined) {
      return;
    } else if (update.gp_cust != "#N/A") {
      const results = result.rows[0].gp_cust;
      const alerts = await checkCustAlerts(results);
      console.log("alerts", alerts);
      if (alerts) {
        sendEmailSpecialCustomers(
          results,
          problemType,
          gvr_id,
          issue,
          notes,
          date,
          time,
          user
        );
      } else {
        console.log("nope");
      }
    } else {
      console.log("Not Found");
    }
  } catch (error) {
    throw error;
  }
}

async function checkCustAlerts(results) {
  try {
    const result = await client.query(
      `
      SELECT * FROM customer_alerts
      WHERE gp_cust = $1
    `,
      [results]
    );
    console.log(result.rows.length, "results");
    if (result.rows.length != 0) {
      let resultz = result.rows[0].gp_cust;
      let answer = resultz === results;
      return {
        answer,
        result,
      };
    } else {
      return;
    }
  } catch (error) {
    throw error;
  }
}

async function createSiteModels(gvr_id) {
  try {
    const result = await client.query(
      `
      INSERT INTO dispmodels(gvr_id)
      VALUES ($1);
    `,
      [gvr_id]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function createSiteSerials(gvr_id) {
  try {
    const result = await client.query(
      `
      INSERT INTO dispserials(gvr_id)
      VALUES ($1);
    `,
      [gvr_id]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function createSiteGrades(gvr_id) {
  try {
    const result = await client.query(
      `
      INSERT INTO dispgrades(gvr_id)
      VALUES ($1);
    `,
      [gvr_id]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function createSiteDisp(
  gvr_id,
  add_id,
  gp_cust,
  cus_name,
  site_address,
  site_city,
  site_state,
  site_zip,
  contract,
  cus_email1,
  cus_email2,
  rrs,
  contractor,
  dashboard_status
) {
  let quote = "X";
  let totaldisp = "0";
  let notes = "X";
  let phase = "0";
  let contract_status = "1-PENDING";
  try {
    console.log(
      "site creation",
      gvr_id,
      add_id,
      gp_cust,
      cus_name,
      site_address,
      site_city,
      site_state,
      site_zip,
      contract,
      cus_email1,
      cus_email2,
      rrs,
      quote,
      totaldisp,
      notes,
      phase,
      contractor,
      dashboard_status
    );
    const result = await client.query(
      `
      INSERT INTO dispinfo(gvr_id, add_id, gp_cust, cus_name, site_address, site_city, site_state, site_zip, contract, cus_email1, cus_email2, rrs, quote, totaldisp, notes, phase, contractor, contract_status, dashboard_status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);
    `,
      [
        gvr_id,
        add_id,
        gp_cust,
        cus_name,
        site_address,
        site_city,
        site_state,
        site_zip,
        contract,
        cus_email1,
        cus_email2,
        rrs,
        quote,
        totaldisp,
        notes,
        phase,
        contractor,
        contract_status,
        dashboard_status,
      ]
    );
    console.log("dispinfo", result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createEmailList(
  cust_gp,
  cus_name,
  rrs,
  cus_email1,
  cus_email2,
  cus_email3,
  cus_email4,
  cus_email5,
  cus_email6
) {
  try {
    const result = await client.query(
      `
      INSERT INTO customeremail(cust_gp, cus_name, rrs, cus_email1, cus_email2, cus_email3, cus_email4, cus_email5, cus_email6)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `,
      [
        cust_gp,
        cus_name,
        rrs,
        cus_email1,
        cus_email2,
        cus_email3,
        cus_email4,
        cus_email5,
        cus_email6,
      ]
    );
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

async function createInbound(
  sb,
  gvr_id,
  notes,
  name,
  number,
  issue,
  gp,
  problemType,
  gcIssue,
  dispNumber,
  totalDispNumer,
  totalFuelingPositions,
  totalCommercialDisp,
  user
) {
  try {
    let date_ob = new Date();
    let date2 = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hourz = date_ob.getHours();
    let hours = (hourz < 10 ? "0" : "") + hourz;
    let minutes = (date_ob.getMinutes() < 10 ? "0" : "") + date_ob.getMinutes();
    let date = year + "-" + month + "-" + date2;
    let time = hours + ":" + minutes;
    if (sb != "CIK") {
      const special = checkEmail(
        gvr_id,
        issue,
        gcIssue,
        notes,
        date,
        time,
        user,
        problemType
      );
      console.log(
        sb,
        gvr_id,
        notes,
        name,
        number,
        issue,
        gp,
        problemType,
        gcIssue,
        date,
        time,
        dispNumber,
        totalDispNumer,
        totalFuelingPositions,
        totalCommercialDisp,
        user,
        "indexdb"
      );
    }
    const result = await client.query(
      `
      INSERT INTO inbound(sb, gvr_id, notes, name, number, issue, gp, problem_type, gc_issue, date, time, disp_number, total_disp_number, total_number_fueling_positions, total_commercial_dispensers, userid)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);
    `,
      [
        sb,
        gvr_id,
        notes,
        name,
        number,
        issue,
        gp,
        problemType,
        gcIssue,
        date,
        time,
        dispNumber,
        totalDispNumer,
        totalFuelingPositions,
        totalCommercialDisp,
        user,
      ]
    );
    console.log("ticket done");
    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [userName]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const matchingPassword = await bcrypt.compareSync(password, user.password);
    if (!matchingPassword) return;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT username, email
    FROM users;
  `
  );

  return rows;
}

async function getAllInbound() {
  const { rows } = await client.query(
    `SELECT *
    FROM inbound
	WHERE date::date > now() - interval '30 day'
    ORDER BY id DESC;
  `
  );

  return rows;
}

async function getAllByAddressInbound(id) {
  const { rows } = await client.query(
    `SELECT * FROM inbound
    WHERE address LIKE '%${id}%'
   ORDER BY id DESC;
  `
  );
  console.log(rows);
  return rows;
}

async function getAllByGvrIdInbound(id) {
  const { rows } = await client.query(
    `SELECT * FROM inbound
    WHERE gvr_id::text LIKE '%${id}%'
    ORDER BY id DESC;
  `
  );
  console.log(rows);
  return rows;
}

async function getAllSites() {
  console.log("getting all sites!");
  const { rows } = await client.query(
    `SELECT * FROM dispinfo
    INNER JOIN dispserials ON dispserials.gvr_id = dispinfo.gvr_id
    INNER JOIN dispgrades ON dispgrades.gvr_id = dispinfo.gvr_id
    INNER JOIN dispmodels ON dispmodels.gvr_id = dispinfo.gvr_id
    ORDER BY dispinfo.gvr_id ASC;
  `
  );

  return rows;
}

async function getAllByGvrId(id) {
  console.log("getting GVR ID");
  let gvr_id = parseInt(id);
  console.log(gvr_id);
  const { rows } = await client.query(
    `SELECT * FROM dispinfo
    INNER JOIN dispserials ON dispserials.gvr_id = dispinfo.gvr_id
    INNER JOIN dispgrades ON dispgrades.gvr_id = dispinfo.gvr_id
    INNER JOIN dispmodels ON dispmodels.gvr_id = dispinfo.gvr_id
    WHERE dispinfo.gvr_id::text LIKE '%${gvr_id}%'
    ORDER BY dispinfo.gvr_id ASC;
  `
  );

  return rows;
}

async function getAllByAddress(id) {
  const { rows } = await client.query(
    `SELECT * FROM dispinfo
    INNER JOIN dispserials ON dispserials.gvr_id = dispinfo.gvr_id
    INNER JOIN dispgrades ON dispgrades.gvr_id = dispinfo.gvr_id
    INNER JOIN dispmodels ON dispmodels.gvr_id = dispinfo.gvr_id
    WHERE site_address LIKE '%${id}%'
    ORDER BY dispinfo.gvr_id ASC;
  `
  );
  console.log(rows);
  return rows;
}

//GC TRACKER QUERY
async function getAllByGvrIdGcTracker(id) {
  console.log("getting GVR ID");
  let gvr_id = parseInt(id);
  console.log(gvr_id);
  const { rows } = await client.query(
    `SELECT *
      FROM gctracker
      WHERE gvr_id::text LIKE '%${gvr_id}%'
      ORDER BY date DESC;
  `
  );

  return rows;
}

async function getAllByAddressGcTracker(id) {
  const { rows } = await client.query(
    `SELECT *
    FROM gctracker
    WHERE address LIKE '%${id}%'
    ORDER BY date DESC;
  `
  );
  console.log(rows);
  return rows;
}

async function getAllGcTracker() {
  const { rows } = await client.query(
    `	SELECT *
    FROM gctracker
	WHERE date::date > now() - interval '30 day'
    ORDER BY date DESC;
    
  `
  );

  return rows;
}

async function closeInstallTicket(notes, gvr_id) {
  console.log(typeof notes);
  const { rows } = await client.query(
    `UPDATE gctracker
    SET status = 'Closed',
        update_notes=$1
    WHERE gvr_id::integer=$2 AND dispatch_type = 'Install - Repair'
    
  `,
    [notes, gvr_id]
  );

  return rows;
}

async function closeStaticTicket(notes, gvr_id) {
  console.log(typeof notes);
  const { rows } = await client.query(
    `UPDATE gctracker
    SET status = 'Static',
        update_notes=$1
    WHERE gvr_id::integer=$2 AND dispatch_type = 'Install - Repair'
    
  `,
    [notes, gvr_id]
  );

  return rows;
}

async function getRrsMatrix() {
  const { rows } = await client.query(
    `SELECT *
    FROM rrsmatrix
   ORDER BY gp_cust ASC;
  `
  );

  return rows;
}

async function troubledCreate(id) {
  console.log(id, "running troubled");
  const { rows } = await client.query(
    `INSERT INTO troubled
SELECT id, s_name, gvr_id, warr, add_id, address, city, ticket_number, date, fueling_position, component_name, cause, status, duration, contract_status, warr_gvr_id, rrs, gp_cust FROM ticketing
WHERE id=$1
  `,
    [id]
  );
  const { rowstwo } = await troubledDelete(id);
  console.log(rows, rowstwo);
  return rows;
}

async function troubledDelete(id) {
  console.log(id, "running troubled delete");
  const { rows } = await client.query(
    `
DELETE from ticketing
WHERE id=$1;
  `,
    [id]
  );
  console.log(rows, "delete");
  return rows;
}

async function setTroubledStatus(id) {
  console.log("Starting to set status", id);
  const { rows } = await client.query(
    `UPDATE troubled
       SET troubled_status = 'Open',
      WHERE id=$1    
  `,
    [id]
  );
}
async function getAllManagers() {
  const { rows } = await client.query(
    `SELECT *
    FROM managers
   ORDER BY branch ASC;
  `
  );

  return rows;
}

async function getAllSitesNotes() {
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    WHERE notes IS NOT NULL
    AND totaldisp IS NULL
  `
  );

  return rows;
}

async function getSpecificSiteInfoIncom(gp) {
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    WHERE gp_cust=$1
    AND totaldisp IS NULL
    ORDER BY gvr_id;
  `,
    [gp]
  );
  return rows;
}

async function getSpecificSiteInfoComplete(gp) {
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    WHERE gp_cust=$1
    AND totaldisp IS NOT NULL
    ORDER BY gvr_id;
  `,
    [gp]
  );

  return rows;
}

//   `SELECT *
//   FROM dispinfo
//   WHERE notes IS NOT NULL
//   AND totaldisp IS NULL
// `;

async function getAllSitesOpen() {
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    WHERE notes IS NULL
    AND totaldisp IS NULL
  `
  );

  return rows;
}

async function getSites(id) {
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    WHERE gp=$1
    ORDER BY gvrid;
  `,
    [id]
  );

  return rows;
}

async function getSitesGvr(id) {
  let gvr_id = id;
  const { rows } = await client.query(
    `SELECT *
    FROM provision
    WHERE gvr_id LIKE '%${gvr_id}%'
    ORDER BY gvr_id;
  `
  );
  let response = [];
  let error = { gvr_id: "Nothing Found, Please Try Again" };
  console.log(rows.length, "site gvr id");
  if (rows.length === 0) {
    response.push(error);
    return response;
  } else {
    return rows;
  }
}

async function getSitesAddress(id) {
  let site_address = id;
  console.log(site_address, "site address index");

  const { rows } = await client.query(
    `SELECT *
    FROM provision
    WHERE site_address LIKE '%${site_address}%'
    ORDER BY gvr_id;
  `
  );
  let response = [];
  let error = { gvr_id: "Nothing Found, Please Try Again" };
  console.log(rows.length, "site address");
  if (rows.length === 0) {
    response.push(error);
    return response;
  } else {
    return rows;
  }
}

async function searchPartsNumber(partNumber) {
  try {
    console.log("Getting Part #", partNumber);
    const { rows } = await client.query(`
    SELECT *
    FROM parts
    WHERE number LIKE '%${partNumber}%'
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getSiteGvr(gvr_id) {
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    WHERE gvr_id=$1
  `,
    [gvr_id]
  );
  return rows;
}

async function getTracker(id) {
  const { rows } = await client.query(
    `SELECT *
    FROM gctracker
    WHERE id=$1
    ORDER BY gp_ticket DESC;
  `,
    [id]
  );

  return rows;
}

async function updateDisp(id, fields = {}) {
  try {
    console.log(id, "typeof");
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(setString);
    try {
      const { rows } = await client.query(
        `
      UPDATE dispinfo
      SET ${setString}
      WHERE gvr_id=${id}
      RETURNING *;
    `,
        Object.values(fields)
      );
      // console.log(rows, "put send email function here");
      let gvrId = fields.gvr_id;
      let gpCust = fields.gp_cust;
      let address = fields.site_address;
      let activationDate = fields.activation;
      let warrantyDate = fields.warranty;
      let quote = fields.contract_status;
      let notes = fields.notes;
      console.log(
        gvrId,
        quote,
        gpCust,
        address,
        "activation date =",
        activationDate,
        "warranty expiration =",
        warrantyDate,
        "email fields"
      );
      if (quote === "2-MONITORING") {
        sendEmail(
          gvrId,
          gpCust,
          address,
          activationDate,
          warrantyDate,
          quote,
          notes
        );
      } else if (quote === "3-STATIC") {
        sendEmailStatic(
          gvrId,
          gpCust,
          address,
          activationDate,
          warrantyDate,
          quote,
          notes
        );
      } else {
        console.log("Just updating");
      }
      return { message: "Update Successful" };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function updateSerials(id, fields = {}) {
  try {
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(setString);
    try {
      const { rows } = await client.query(
        `
      UPDATE dispserials
      SET ${setString}
      WHERE gvr_id=${id}
      RETURNING *;
    `,
        Object.values(fields)
      );
      console.log(rows, "rows");
      return { message: "Update Successful" };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function updateTroubledDispensers(id, fields = {}) {
  try {
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(setString);
    try {
      const { rows } = await client.query(
        `
      UPDATE troubled
      SET ${setString}
      WHERE id=${id}
      RETURNING *;
    `,
        Object.values(fields)
      );
      console.log(rows, "rows");
      return { message: "Update Successful" };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function updateModels(id, fields = {}) {
  try {
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(setString);
    try {
      const { rows } = await client.query(
        `
      UPDATE dispmodels
      SET ${setString}
      WHERE gvr_id=${id}
      RETURNING *;
    `,
        Object.values(fields)
      );
      console.log(rows, "rows");
      return { message: "Update Successful" };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function updateGrades(id, fields = {}) {
  try {
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(setString);
    try {
      const { rows } = await client.query(
        `
      UPDATE dispgrades
      SET ${setString}
     WHERE gvr_id=${id}
      RETURNING *;
    `,
        Object.values(fields)
      );
      console.log(rows, "rows");
      return { message: "Update Successful" };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function updateAllSitesGvr({ gvr_id, site_address }) {
  console.log(typeof gvr_id, typeof site_address);
  try {
    const result = await client.query(
      `
      UPDATE allsites
      SET gvr_id=$1
      WHERE site_address=$2
      RETURNING *;
    `,
      [gvr_id, site_address]
    );

    return { message: "Update Successful" };
  } catch (error) {
    throw error;
  }
}
async function updateTracker(id, fields = {}) {
  try {
    console.log(fields, "fields");
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(id, setString);
    console.log(Object.values(fields));
    try {
      const { rows } = await client.query(
        `
      UPDATE gctracker
      SET ${setString}
      WHERE id=${id}
      RETURNING *;
    `,
        Object.values(fields)
      );
      console.log(rows);
      return { message: "Update Successful" };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function updateAlertTickets(id, fields = {}) {
  try {
    console.log(fields, "fields");
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(id, setString);
    // console.log(Object.values(fields));
    console.log(fields.confirmation_number != null);
    if (fields.confirmation_number != null) {
      const noteUpdate = await updateAlertTicketNotes(id, fields);
    }
    try {
      const { rows } = await client.query(
        `
      UPDATE ticketing
      SET ${setString}
      WHERE id=${id}
      RETURNING *;
    `,
        Object.values(fields)
      );
      console.log(rows);
      return { message: "Update Successful" };
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function updateAlertTicketNotes(id, fields = {}) {
  try {
    console.log("updating alert ticket notes.");
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    const { rows } = await client.query(
      `
update ticketing
set notes = '*GUARDIAN CONNECT*, GC-REMOTE FIX, #'|| fueling_position || ' ' || component_name || ' ' || 'WARM START
				PLEASE BILL TO GILBARCO PER INSITE360 CONTRACT
                LABOR = 0.80 HOURS
                NO TRAVEL
                NO MILEAGE
                TOTAL = $75.20
                ASC #${fields.asc_number}'
    WHERE id=${id};
    `
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUsersByID(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE id=$1;
    `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getEmailByGvr(id) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM allsites
    INNER JOIN customeremail on gp_cust = cust_gp
    WHERE gvr_id=$1;
    `,
      [id]
    );
    if (rows.length === 0) {
      return [
        {
          gvr_id:
            "No Contact Info Found, Please Check the GVR ID and Try Again.",
        },
      ];
    } else {
      return rows;
    }
  } catch (error) {
    throw error;
  }
}

async function getEmailByGp(id) {
  try {
    let correctId = id.toUpperCase();
    const { rows } = await client.query(
      `
    SELECT *
    FROM allsites
    INNER JOIN allsitesemails on gp_cust = cust_gp
    WHERE gp_cust LIKE '${correctId}%'
    `
    );
    if (rows.length === 0) {
      return [
        {
          gvr_id:
            "No Contact Info Found, Please Check the GVR ID and Try Again.",
        },
      ];
    } else {
      return rows;
    }
  } catch (error) {
    throw error;
  }
}

async function findCusInfo(gvr_id) {
  console.log("running lookup");
  try {
    const { rows } = await client.query(
      `
    select gvr_id, gp_cust, s_name, site_address, warranty from dispinfo
    WHERE gvr_id=$1;
    `,
      [gvr_id]
    );
    return rows[0];
  } catch (error) {
    throw error;
  }
}

async function createGctracker(
  date,
  gvr_id,
  dispatch,
  fm_ticket,
  grade,
  fp,
  sb,
  gp_ticket,
  atl_po,
  warranty_status,
  notes,
  status,
  email,
  checked,
  checkedTwo
) {
  console.log(
    "gctracker starting",
    date,
    gvr_id,
    dispatch,
    fm_ticket,
    grade,
    fp,
    sb,
    gp_ticket,
    atl_po,
    warranty_status,
    notes,
    status,
    email,
    checked,
    checkedTwo
  );
  console.log("date starting");
  let date_ob = new Date();
  let date2 = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hourz = date_ob.getHours() - 4;
  let hours = (hourz < 10 ? "0" : "") + hourz;
  let minutes = (date_ob.getMinutes() < 10 ? "0" : "") + date_ob.getMinutes();
  let create_date = year + "-" + month + "-" + date2;
  let create_time = hours + ":" + minutes;
  console.log("date finished");
  try {
    console.log("new ticket");

    const test = await findCusInfo(gvr_id);
    let gp = test.gp_cust;
    let location = test.cus_name;
    let address = test.site_address;
    let date_fix = handleDate(test.warranty);
    let warranty_status;
    function handleDate(d) {
      console.log(d);
      if (d === null) {
        let date = "";
        return date;
      } else {
        let date = moment.utc(d).format("yyyy-MM-DD");
        return date;
      }
    }
    console.log("starting warranty check", create_date, date_fix);
    if (create_date >= date_fix) {
      warranty_status = "Out of Warranty";
    } else {
      warranty_status = "In Warranty";
    }
    console.log("warranty check done", warranty_status);
    const result = await client.query(
      `
      INSERT INTO gctracker(date, gvr_id, gp, dispatch_type, fm_ticket, location, address, grade, fp, sb, gp_ticket, atl_po, warranty_status, notes, status, create_date, create_time, email, checked)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);
    `,
      [
        date,
        gvr_id,
        gp,
        dispatch,
        fm_ticket,
        location,
        address,
        grade,
        fp,
        sb,
        gp_ticket,
        atl_po,
        warranty_status,
        notes,
        status,
        create_date,
        create_time,
        email,
        checked,
      ]
    );
    console.log(result);
    return { message: "Ticket Created Successfully" };
  } catch (error) {
    throw error;
  }
}

// SELECT allsites.gp_cust, ticketing.* FROM ticketing
//  INNER JOIN allsites on allsites.gvr_id = ticketing.gvr_id
//  ORDER BY gp_ticket DESC, date ASC;

async function getTicketing() {
  try {
    const tickets = await client.query(
      `
select * from ticketing
WHERE gp_ticket IS NULL AND process != '4'
ORDER BY gp_ticket DESC, date ASC, sr_number ASC, warr ASC;
      `
    );
    return tickets;
  } catch (error) {
    thrown(error);
  }
}

async function getAllByAddressTicketing(id) {
  const { rows } = await client.query(
    `SELECT * FROM ticketing
    WHERE address LIKE '%${id}%'
    ORDER BY gp_ticket DESC, date ASC, sr_number ASC, warr ASC;
  `
  );
  console.log(rows);
  return rows;
}

async function getAllByGvrIdTicketing(id) {
  const { rows } = await client.query(
    `SELECT * FROM ticketing
    WHERE gvr_id::text LIKE '%${id}%'
    ORDER BY gp_ticket DESC, date ASC, sr_number ASC, warr ASC;
  `
  );
  console.log(rows);
  return rows;
}

async function getTroubled() {
  try {
    const tickets = await client.query(
      `
select * from troubled
WHERE troubled_status IS NULL
ORDER BY next_date ASC;

      `
    );
    return tickets;
  } catch (error) {
    thrown(error);
  }
}

async function getAllByAddressTroubled(id) {
  const { rows } = await client.query(
    `SELECT * FROM troubled
    WHERE address LIKE '%${id}%' and date is NOT NULL
   ORDER BY date DESC;
  `
  );
  console.log(rows);
  return rows;
}

async function getAllByGvrIdTroubled(id) {
  const { rows } = await client.query(
    `SELECT * FROM troubled
    WHERE gvr_id::text LIKE '%${id}%' and date is NOT NULL
   ORDER BY date DESC;
  `
  );
  console.log(rows);
  return rows;
}

async function getEmailCust() {
  try {
    const tickets = await client.query(
      `
select * from customer_alerts
ORDER BY id DESC;

      `
    );
    return tickets;
  } catch (error) {
    thrown(error);
  }
}

async function getTicketingSearchGvr(gvr_id) {
  try {
    const tickets = await client.query(
      `
select * from ticketing
WHERE gvr_id=$1
ORDER BY date DESC;
`,
      [gvr_id]
    );

    console.log(tickets.rows);
    return tickets.rows;
  } catch (error) {
    thrown(error);
  }
}

async function getTicketingSearchGp(gp_cust) {
  console.log("GP Cust Running");
  try {
    const tickets = await client.query(
      `
select * from ticketing
WHERE gp_cust=$1
ORDER BY date DESC;
`,
      [gp_cust]
    );
    console.log(tickets.rows, "GP Cust Tickets");
    return tickets.rows;
  } catch (error) {
    thrown(error);
  }
}

async function deleteAlertTicket(id) {
  try {
    const tickets = await client.query(
      `
      DELETE FROM ticketing
      WHERE id=$1
      `,
      [id]
    );
    return tickets;
  } catch (error) {
    thrown(error);
  }
}

async function deleteTroubledTicket(id) {
  try {
    const tickets = await client.query(
      `
      DELETE FROM troubled
      WHERE id=$1
      `,
      [id]
    );
    return tickets;
  } catch (error) {
    thrown(error);
  }
}

async function getProjectCount(gp) {
  try {
    const { rows } = await client.query(
      `
  SELECT COUNT(quote) as value, quote as title FROM dispinfo
  WHERE gp_cust=$1
  GROUP BY quote
      `,
      [gp]
    );

    // #ff0000 - RED
    // #66d3ee - light blue
    // #eac736 - Gold
    // #c39797 - brown

    return rows;
  } catch (error) {
    thrown(error);
  }
}

function runAtSpecificTimeOfDay(hour, minutes, func) {
  const twentyFourHours = 86400000;
  const now = new Date();
  let eta_ms =
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minutes,
      0,
      0
    ).getTime() - now;
  if (eta_ms < 0) {
    eta_ms += twentyFourHours;
  }
  setTimeout(function () {
    //run once
    func();
    // run every 24 hours from now on
    setInterval(func, twentyFourHours);
  }, eta_ms);
}

module.exports = {
  client,
  getAllUsers,
  createUser,
  getUsersByID,
  getUserByUsername,
  getUser,
  getAllSites,
  getSites,
  getAllSitesNotes,
  getAllSitesOpen,
  getRecordByDate,
  getSpecificSiteInfoIncom,
  getSpecificSiteInfoComplete,
  getEmailByGvr,
  getEmailByGp,
  createSite,
  createEmailList,
  createGctracker,
  createSiteDisp,
  updateDisp,
  getAllGcTracker,
  getTracker,
  updateTracker,
  getTicketing,
  updateAlertTickets,
  deleteAlertTicket,
  createInbound,
  getAllInbound,
  getRrsMatrix,
  getProjectCount,
  updateSerials,
  updateModels,
  updateGrades,
  // getBfr,
  getSitesGvr,
  getSitesAddress,
  findCusInfo,
  ticketsComplete,
  ticketsDone,
  getEodTicketing,
  // sendEmailTickets,
  closeInstallTicket,
  closeStaticTicket,
  runAtSpecificTimeOfDay,
  getAllManagers,
  getTicketingSearchGvr,
  getTicketingSearchGp,
  troubledCreate,
  getTroubled,
  updateTroubledDispensers,
  deleteTroubledTicket,
  getEmailCust,
  getAllByGvrId,
  getAllByAddress,
  getAllByAddressGcTracker,
  getAllByGvrIdGcTracker,
  getAllByGvrIdTicketing,
  getAllByAddressTicketing,
  getAllByGvrIdTroubled,
  getAllByAddressTroubled,
  getAllByGvrIdInbound,
  getAllByAddressInbound,
};
