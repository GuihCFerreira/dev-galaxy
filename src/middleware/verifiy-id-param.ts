import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";

export function verifyIdParam(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: "Invalid ID. ID is required on query" });
    return;
  }

  if (!ObjectId.isValid(id)) {
    res.status(400).json({
      error:
        "Invalid ID. ID must be a valid ObjectId and be 24 hexadecimal characters.",
    });
    return;
  }

  next();
}
