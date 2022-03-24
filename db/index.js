const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "equipment";

const client = new Client(
  process.env.DATABASE_URL ||
    `postgressql://postgres:postgres@localhost:5432/${DB_NAME}`
);

// Turn on when uploading to heroku //

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

async function getRecordByDate(start, end, gp) {
  try {
    console.log(start, end, "gp", gp);
    const { rows } = await client.query(
      ` select gp, company, gvrid, annual, contract, activation, renewal 
        from dispinfo
        where activation BETWEEN '${start}' and '${end}' and gp='${gp}';
`
    );
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createUser({ username, password, email }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, email)
      VALUES ($1, $2, $3);
    `,
      [username, password, email]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    console.log("Firing User by Username");
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
  console.log("running");
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
  console.log("GAS log");
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    ORDER BY gvrid;
  `
  );

  return rows;
}

async function getAllSitesNotes() {
  console.log("GAS log");
  const { rows } = await client.query(
    `SELECT *
    FROM dispinfo
    WHERE notes IS NOT NULL
    AND totaldisp IS NULL
  `
  );

  return rows;
}

async function getAllSitesOpen() {
  console.log("GAS log");
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
  console.log(id, "back", typeof id);
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
    console.log("user", user);
    return user;
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
};
