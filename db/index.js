const { Client } = require("pg");
const bcrypt = require("bcrypt");
const { red } = require("@mui/material/colors");
const DB_NAME = "equipment";
const nodemailer = require("nodemailer");

// const client = new Client(
//   process.env.DATABASE_URL ||
//     `postgressql://postgres:postgres@localhost:5432/${DB_NAME}`
// );

// Turn on when uploading to heroku //

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "guardianconnectscrapes@gmail.com", // your email address
    pass: "ujkvrpggoitghxuw", // your email password
  },
});

// create a function that sends an email
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
    from: "Guardian Connect Activations",
    to: "guardianconnect@guardianfueltech.com",
    subject: `New Activation - ${gpCust}`,
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
async function createSite(
  gvrid,
  gp_cust,
  cus_name,
  site_address,
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
      await createSiteModels(gvr_id);
      await createSiteGrades(gvr_id);
      await createSiteSerials(gvr_id);
      const siteCreate = await createSiteDisp(
        gvr_id,
        add_id,
        gp_cust,
        cus_name,
        site_address,
        contract,
        cus_email1,
        cus_email2,
        rrs,
        contractor
      );
      //NEED TO ADD GVR IDs into other 3 databases as well. (dispserials, dispmodel, dispgrades)
      const result = await client.query(
        `
      INSERT INTO allsites(gvr_id, gp_cust, cus_name, site_address)
      VALUES ($1, $2, $3, $4);
    `,
        [gvr_id, gp_cust, cus_name, site_address]
      );
      console.log("allsite", result);
      return { message: "Site Created" };
    }
  } catch (error) {
    console.log(error);
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
  contract,
  cus_email1,
  cus_email2,
  rrs,
  contractor
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
      contract,
      cus_email1,
      cus_email2,
      rrs,
      quote,
      totaldisp,
      notes,
      phase,
      contractor
    );
    const result = await client.query(
      `
      INSERT INTO dispinfo(gvr_id, add_id, gp_cust, cus_name, site_address, contract, cus_email1, cus_email2, rrs, quote, totaldisp, notes, phase, contractor, contract_status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);
    `,
      [
        gvr_id,
        add_id,
        gp_cust,
        cus_name,
        site_address,
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
  gcIssue
) {
  try {
    let date_ob = new Date();
    let date2 = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hourz = date_ob.getHours() - 4;
    let hours = (hourz < 10 ? "0" : "") + hourz;
    let minutes = (date_ob.getMinutes() < 10 ? "0" : "") + date_ob.getMinutes();
    let date = year + "-" + month + "-" + date2;
    let time = hours + ":" + minutes;
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
      time
    );
    const result = await client.query(
      `
      INSERT INTO inbound(sb, gvr_id, notes, name, number, issue, gp, problem_type, gc_issue, date, time)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
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
      ]
    );
    console.log(result);
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
    ORDER BY date DESC, time DESC;
  `
  );

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

async function getAllGcTracker() {
  const { rows } = await client.query(
    `SELECT *
    FROM gctracker
    ORDER BY date DESC;
    
  `
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
      sendEmail(
        gvrId,
        gpCust,
        address,
        activationDate,
        warrantyDate,
        quote,
        notes
      );
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
    console.log(Object.values(fields));
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

async function createGctracker(
  date,
  gvr_id,
  gp,
  dispatch_type,
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
  status
) {
  let date_ob = new Date();
  let date2 = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hourz = date_ob.getHours() - 4;
  let hours = (hourz < 10 ? "0" : "") + hourz;
  let minutes = (date_ob.getMinutes() < 10 ? "0" : "") + date_ob.getMinutes();
  let create_date = year + "-" + month + "-" + date2;
  let create_time = hours + ":" + minutes;
  try {
    console.log(
      "new ticket",
      date,
      gvr_id,
      gp,
      dispatch_type,
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
      create_time
    );
    const result = await client.query(
      `
      INSERT INTO gctracker(date, gvr_id, gp, dispatch_type, fm_ticket, location, address, grade, fp, sb, gp_ticket, atl_po, warranty_status, notes, status, create_date, create_time)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);
    `,
      [
        date,
        gvr_id,
        gp,
        dispatch_type,
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
      ]
    );
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
select ticketing.*, dispinfo.gp_cust from ticketing
INNER JOIN dispinfo ON ticketing.gvr_id::integer = dispinfo.gvr_id
ORDER BY ticketing.gp_ticket DESC, ticketing.date ASC
      `
    );
    return tickets;
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
};
