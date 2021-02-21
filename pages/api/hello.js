import { fetchEntry } from "../../src/contentful.server"

export default async (req, res) => {
    const resp = await fetchEntry(req.query.id)
    res.status(200).json(resp)
  }
  