const { google } = require("googleapis");

const createEvent = async (req, res) => {
  const { accessToken } = req.user;
  const { summary, startDateTime, endDateTime } = req.body;

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: "v3", auth });

  const event = {
    summary,
    start: { dateTime: startDateTime },
    end: { dateTime: endDateTime },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
