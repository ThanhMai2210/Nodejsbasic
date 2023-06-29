import pool from "../configs/connectDB";

const getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", { dataUser: rows });
};

const getDetailpage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute(`SELECT * FROM users where id=?`, [userId]);
  return res.send(JSON.stringify(user));
};

const createNewUser = async (req, res) => {
  console.log(req.body);
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    `INSERT INTO users(firstName, lastName, email, address) values(?,?,?,?)`,
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

const deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute(`DELETE FROM users where id=?`, [userId]);
  return res.redirect("/");
};

const getEditUser = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`SELECT * FROM users where id=?`, [id]);
  return res.render("update.ejs", { dataUser: user[0] });
};

const postUpdateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    `UPDATE users SET firstName =?, lastName =?, email =?, address =? where id=?`,
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

module.exports = {
  getHomepage,
  getDetailpage,
  createNewUser,
  deleteUser,
  getEditUser,
  postUpdateUser,
};
