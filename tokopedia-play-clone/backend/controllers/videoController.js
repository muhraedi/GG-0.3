import Video from '../models/videoModel.js';

const getVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        res.json(video);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const saveVideo = async (req, res) => {
    const video = new Video(req.body);
    try {
        const videoToSave = await video.save();
        res.status(201).json(videoToSave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateVideo = async (req, res) => {
    try {
        const videoToUpdate = await Video.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(videoToUpdate);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const deleteVideo = async (req, res) => {
    try {
        const videoToDelete = await Video.deleteOne({_id:req.params.id});
        res.status(200).json(videoToDelete);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export {
    getVideos,
    getVideoById,
    saveVideo,
    updateVideo,
    deleteVideo,
}