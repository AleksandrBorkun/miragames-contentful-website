const SPACE_ID = process.env.SPACE_ID;
const API_KEY = process.env.API_KEY;
const LOCAL_ENV = process.env.LOCAL_ENV;

const contentful = require("contentful");
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: API_KEY,
  host: LOCAL_ENV ? 'preview.contentful.com' : 'cdn.contentful.com'
});

export const getEntries = async (params) => {
    const entries = await client.getEntries({
        include: 4, 
        limit: 10,
        ...params
    })
    if(entries.items) return entries
}