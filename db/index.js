const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "equipment";

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
async function createSite(gvr_id, gp_cust, cus_name, site_address, contract) {
  try {
    console.log(
      "site creation",
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract
    );
    const check = await getSiteGvr(gvr_id);
    if (check && check.length > 0) {
      console.log("check", check.length);
      return { message: "Site Exists" };
    } else {
      console.log(check.length, "check");
      const siteCreate = await createSiteDisp(
        gvr_id,
        gp_cust,
        cus_name,
        site_address,
        contract
      );
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

async function createSiteDisp(
  gvr_id,
  gp_cust,
  cus_name,
  site_address,
  contract
) {
  try {
    console.log(
      "site creation",
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract
    );
    const result = await client.query(
      `
      INSERT INTO dispinfo(gvr_id, gp_cust, cus_name, site_address, contract)
      VALUES ($1, $2, $3, $4, $5);
    `,
      [gvr_id, gp_cust, cus_name, site_address, contract]
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

async function getAllSites() {
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    ORDER BY gvr_id ASC;
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
    console.log(fields, "fields");
    const setString = Object.keys(fields)
      .map((key, index) => `${key}=$${index + 1}`)
      .join(", ");
    console.log(id, setString);
    console.log(Object.values(fields));
    try {
      const { rows } = await client.query(
        `
      UPDATE dispinfo
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
      status
    );
    const result = await client.query(
      `
      INSERT INTO gctracker(date, gvr_id, gp, dispatch_type, fm_ticket, location, address, grade, fp, sb, gp_ticket, atl_po, warranty_status, notes, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);
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
      ]
    );
    return { message: "Ticket Created Successfully" };
  } catch (error) {
    throw error;
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
};
