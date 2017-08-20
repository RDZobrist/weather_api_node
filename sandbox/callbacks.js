var getUser = (id, callback) => {
    var user = {
        id: id,
        name, 'Travis'
    }
    callback(user);
};


getUser(11, (userObj) => {
    console.log(userObj);
});