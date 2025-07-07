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
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BuRWdKYjZla3BaOU5URjc5WHhyWnFIS1pFNG4zYmtGQ1RFdTBxVWhHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1lhbjdsTnB6aVdkMmJ3OFVKV1FjdDFZTy9RNHk3TitUUHNtejFNRi9Xcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTVN6cjd6RDJVS2R3NmxaMjZrU0U1blVXMU85ODVtN0luNFNNMURpNDJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRbSsyV1YvN3F5Y2Y2VUhtN2pKOHBqOTJQNHgvZWUwUFdOUE5QRkZsWHlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JMlF6NFhWYzFyb2M4VERScWtjQnRXOTNndmorajdKQ3ZoQ296NTBTMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFbkt0SkdPWHZhV0Q1b0hJMG1NNngvWVR0NkFjM1l5R2pjS1lpbXEzQlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FRY2pMd1FFdGNFSSs3UWNMSXc3dmtmSElSWXgzQ3EydHNKbWhLUWFtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGpjYlNwZ1NNdGpqaTRpMFVyZ1dodW52a09CNEgvcE93NWJnaHIyL09YTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMxMkFHSElBdWdXaTlFQko4UDBnZTlwOEJPQWsyYTFKVnVYMmgzREw2aEwwRVZoaTRQYTRCZ3NydTJGU3hCL1JTNDZQRSsrcGNhWUxQNWVvaHhta2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiI0aW95aVhxV0JaTFdnSHlWbmJUMGw1R2xkdzNITkFHenhUS0I2QlpURjIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA0MTAyOTEyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTY3OUZCRDMwQ0ZEMEExMjk5NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxOTAxMDE1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDIwNDEwMjkxMjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EwRkZDNDczRkY2MTI2ODE4QkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTkwMTAyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQUFYSjNLNzMiLCJtZSI6eyJpZCI6IjI0MjA0MTAyOTEyMjozNUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg5NzY5ODUwMDYwOTk6MzVAbGlkIiwibmFtZSI6IuKalSDwnZmy8J2anvCdmpvwnZqc8J2akvCdmqEg4pqhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQemhsTjRJRUxiR3I4TUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1OXNuekpkRWtkQjZCdE5BeURJK0lINm9rZlAzdi8zOCtROVZoRm5vb21jPSIsImFjY291bnRTaWduYXR1cmUiOiJHczZGZFJOWENha0ltalJtMHdaMUpkQWdVczUvbnh5MFNCUWh3ejU1UXArQlpVWGhxaXZtd2ZNR3ppQnhVeXNqK1YrcEJQMjhPYjAxMDMwdDhaMU5nQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia1ZEUGtzOUdLT1IxOVBXcGMvRElpbGtKMjhUdVU2UFRua1kvdkYrWHV4cXFCNnNkZzUrNzNjL3VUUlVSUGdvbkJkQTAxRkZiM3JpeFpZQ3U1SDF4aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNDEwMjkxMjI6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWZiSjh5WFJKSFFlZ2JUUU1neVBpQitxSkh6OTcvOS9Qa1BWWVJaNktKbiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVRQXhBQSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE5MDA5OTYsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBNFoifQ==',
    timezone: 'Africa/Nairobi',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
