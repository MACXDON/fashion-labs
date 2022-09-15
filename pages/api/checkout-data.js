export default function (req, res) {
    const dataList = req.body;
    res.status(200).json(dataList);
}