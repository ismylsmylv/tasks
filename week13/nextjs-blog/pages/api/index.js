export default function handler(req, res) {
    res.status(200)
    res.send(req.body);
}