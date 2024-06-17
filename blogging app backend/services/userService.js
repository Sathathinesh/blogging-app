const User = require('../models/User');

const followUser = async (userId, targetId) => {
    const user = await User.findById(userId);
    user.followers.push(targetId);
    await user.save();
};

const getFollowers = async (email) => {
    const user = await User.findOne({ email }).populate('followers', 'email');
    return user.followers.map(follower => follower.email);
};

const blockUser = async (userId, targetId) => {
    const user = await User.findById(userId);
    user.blockedUsers.push(targetId);
    await user.save();
};

module.exports = { followUser, getFollowers, blockUser };
