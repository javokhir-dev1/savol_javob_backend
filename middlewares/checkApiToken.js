import dotenv from "dotenv";
dotenv.config();

const TRUSTED_ORIGIN = "http://127.0.0.1:5500";

export default function checkApiToken(req, res, next) {
    const token = req.headers["x-api-key"];
    const origin = req.headers.origin;
    const referer = req.headers.referer;

    console.log(origin)

    if (
        origin === TRUSTED_ORIGIN ||
        (referer && referer.startsWith(TRUSTED_ORIGIN)) ||
        origin === "https://ai-forcipate-alejandra.ngrok-free.dev"
    ) {
        return next();
    }

    if (!token) {
        return res.status(400).json({ message: "Token kerak" });
    }

    if (token !== process.env.API_TOKEN) {
        return res.status(400).json({ message: "Token noto'g'ri" });
    }

    next();
}
