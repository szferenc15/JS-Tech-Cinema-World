const Datastore = require('nedb');

const User = require('./user');

class UserStore {

  constructor() {
    this.userdb = new Datastore({
      filename: '/db/users',
      autoload: true,
    });
    //this.users = [];
  }

  getUserByName(username, callback) {
    this.userdb.findOne({ username }, (err, found) =>{
      if (found) {
        const user = new User(found.username, found.passwordHash);
        user.setFriends(user.friends);
        user.setPosts(user.posts);
        callback(null, user);
      } else {
        callback(null, false);
      }
    });
    /*
    const user = this.users.find(user => user.getUserName() === username);
    if (user) {
      callback(null, user);
    } else {
      callback(null, false);
    }
    */
  }

  addUser(userObj, callback) {
    this.getUserByName(userObj.username, (err, found) => {
        if (err) {
          callback(err)
        } else if (found) {
          callback(null, false);
        } else if (!found) {
          this.userdb.insert(userObj, (err, userFromDb) => {
            callback(null, userFromDb);
          });
        }
    });
    /*
    this.getUserByName(
      userObj.username, 
      (err, userExists) => {
        if (err) {
          callback(err)
        } else if (userExists) {
          callback(null, false);
        } else if (!userExists) {
          const user = new User(userObj);
          this.users.push(user);
          callback(null, user);
        }
      }
    );
    */
  }

}

module.exports = new UserStore();
