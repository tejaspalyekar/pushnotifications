const express = require("express");
const router = express.Router();
const pushNotificationController = require("../controllers/push-notification.controllers");

router.get("/SendNotification", pushNotificationController.SendNotification);
router.post("/SendNotification", pushNotificationController.SendNotification); // Handle POST requests

router.post("/SendNotificationToDevice", pushNotificationController.SendNotificationToDevice);

module.exports = router;