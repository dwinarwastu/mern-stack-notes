import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("my-limit-key");

    if (!success) {
      return res
        .status(429)
        .json({ message: "too many requests, please try again later" });
    }

    next();
  } catch (error) {
    console.log("rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
