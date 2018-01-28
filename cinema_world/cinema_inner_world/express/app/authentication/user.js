module.exports = class User {
  constructor({username, passwordHash}) {
    this._username = username;
    this._passwordHash = passwordHash;
    this._friends = [];
    this._posts = [];
  }
  
  setFriends(friends) {
    if (friends) {
      this._friends = friends;
    }
  }

  setPosts(posts) {
    if (posts) {
      this._posts = posts;
    }
  }

  addPost({message}) {
    const postNumber = this._posts.length;
    const postObject = {
      message,
      postId: `${this._username}-${postNumber}`,
      postTime: Date.now(),
    };
    this._posts.push(postObject);
  }

  getPosts() {
    return this._posts;
  }

  getPostById(requestedPostId) {
    return this._posts.find(
      ({postId}) => postId === requestedPostId
    );
  }

  addFriend(username) {
    this._friends.push(username);
  }

  getFriends() {
    return this._friends;
  }

  getUserName() {
    return this._username;
  }

  authenticate(trialHash) {
    return this._passwordHash === trialHash;
  }

}