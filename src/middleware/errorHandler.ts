import { Request, Response, NextFunction } from "express"

export const errorHandler = (
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  console.error("🛑", err)
  res.status(err.statusCode || 500).json({
    msg: err.message || "Ukjent serverfeil",
  })
}
