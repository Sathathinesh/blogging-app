const userService = require('../services/userService');

const followUser = async (req, res) => {
    try {
        await userService.followUser(req.user.id, req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFollowers = async (req, res) => {
    try {
        const followers = await userService.getFollowers(req.params.email);
        res.json({ success: true, followers, count: followers.length });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const blockUser = async (req, res) => {
    try {
        await userService.blockUser(req.user.id, req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { followUser, getFollowers, blockUser };
