const db = require('better-sqlite3')('./database/Current.db');
exports.conn = db;

function CreateUsersTable()
{
   const SelectRes = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?").get("Users");
    if(typeof SelectRes == 'undefined')
    {
        db.exec("CREATE TABLE IF NOT EXISTS Users (username TEXT, password TEXT, ipaddress TEXT, somecolumn INTEGER)");  
    }
}

CreateUsersTable();

function CheckIpAddress(ipaddress)
{
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress);
}

function InsertUser(username,password,ipaddress)
{
   if(typeof username == 'undefined' || !Boolean(username))
   {
      throw new Error('Enter the username');
   }
  
   if(typeof password == 'undefined' || !Boolean(password))
   {
      throw new Error('Enter the password');
   }
  
   if(typeof ipaddress == 'undefined' || !Boolean(ipaddress))
   {
      throw new Error('Enter the ipaddress');
   }
  
   if(!CheckIpAddress(ipaddress)
   {
      throw new Error('IP Adress is not valid IPV4');
   }

   const Result = db.prepare("INSERT INTO Users (username,password,ipaddress,somecolumn) VALUES (?,?,?,?)").run(username,password,ipaddress,0);

   if(Result.changes === 1)
   {
      return true;
   }

   return false;
}

//Delete
const Result = db.prepare("DELETE FROM Users WHERE username = ? COLLATE NOCASE").run(username);
const Result2 = db.prepare("DELETE FROM Users WHERE username = ?").run(username);
const Result3 = db.prepare("UPDATE Users SET somecolumn = ? WHERE username = ?").run(123,username);
db.exec("VACUUM;");
