import express from "express";
import cors from "cors";
import connection from "./db.js";
import { google } from "googleapis";

const app = express();
let port = 8080;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running on port " + port);
});

app.post("/create-event", async (req, res) => {
  const { credential, summary, startDateTime, endDateTime } = req.body;

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: credential });

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
});

app.post("/list-events", async (req, res) => {
  const { credential } = req.body;
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: credential });

  const calendar = google.calendar({ version: "v3", auth });

  try {
    const response = await calendar.events.list({
      calendarId: "primary",
      maxResults: 100,
      singleEvents: true,
      orderBy: "startTime",
    });
    res.status(200).json(response.data.items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  connection();
  console.log("Listening on port " + port, `http://localhost:${port}`);
});
