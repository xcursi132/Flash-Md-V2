require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : ['.'],

    NUMBER: process.env.YOUR_NUMBER || '242041029122',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'false',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNPbEk4cFdGR252cndmb3JwZ3lBYWJ1TEEzajZEMjNjT0xrdGE3TUIxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXI0eTk5S3FWRU5PZzNET0IyakJKanJ4YUtKWnhKTWxoQTVMK0ZXK0xFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ0s3aitJTXhJcDY2WG9RNDJmK1RwdjdVMmgrN0JlU0dvVGh5WkdPZDFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTTNiOUgybjkzcUg3UUdCc2o2WThsMFVFVzZDak9LTnlsYTdaVzc5SkI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NZ2tDTEpCRmRLcW5kYmJ0UWNWblBRQWl5STJ5N0YxRGYzVjEwcXlPMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNLb0hlU0czNjV0L29Ub0NpYWYzS0w3MlJEN1ZHTnh0KzB5d0xmVW45QUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VwWjVyOXN6Vmx1OUROZzl1aEhLbk41Z2Zib254N3c4OXBaOU10VFhsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3lLSmJZdFg5UCtmelZrU29PRmpkd05uWm5pd2JLYjZyQ3ZoVmFhOHF3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl5VlNZTGJBUm1DeDd5RlRONWJheWduL29jMk1YWG84MmY5WlQrU3FCRTZJTnp4bGVwK0xrVGsvdnhmZVRscXFTTWwzdnZ6WEtCSGhzME1UeFFhT0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJZTHBzNEFHNTdjOTZtbUIzQ2taWDdPY1Fja0IzUFJPT2Qyd3dlVHJKOHhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA0MTAyOTEyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUFDQjI1OEI0NDg2Q0E1RUI4QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxODIxMDA0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDIwNDEwMjkxMjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0ExMTg5QzM4REFCREFEMjY0NjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTgyMTAxMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRVczQ0tRSFgiLCJtZSI6eyJpZCI6IjI0MjA0MTAyOTEyMjozNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg5NzY5ODUwMDYwOTk6MzRAbGlkIiwibmFtZSI6IuKalSDwnZmy8J2anvCdmpvwnZqc8J2akvCdmqEg4pqhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQemhsTjRJRUpmVnFzTUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1OXNuekpkRWtkQjZCdE5BeURJK0lINm9rZlAzdi8zOCtROVZoRm5vb21jPSIsImFjY291bnRTaWduYXR1cmUiOiJjRGo5V2J1cnFQL3RlMXRsWk44UUNxUzZQaytnVzNld25XcjN5azV6K3cwQktlL2hkakJQbS9Zbzc3R3N5RjBYM25uRFdHYmowMWZ0Y2xoUzlsR01oQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia2VWOEkyVU9zcjY4SzRQaWk5YkJSeVJvYUkzWmVRQmxrb1drQTRnNTFHZU1za3ozSncrUEJyZHpxWm5aOUZXM3JZeUJhaVJwNlcwZUZNWlc1R21vQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNDEwMjkxMjI6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWZiSjh5WFJKSFFlZ2JUUU1neVBpQitxSkh6OTcvOS9Qa1BWWVJaNktKbiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVRQXhBQSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE4MjA5NjYsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBNFAifQ==',
    timezone: 'Africa/Nairobi',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
