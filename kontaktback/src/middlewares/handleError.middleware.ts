import {  Response  } from "express";
import AppError from "../errors/AppError";

const handleError = (err: any, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      code: err.statusCode,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    code: 500,
    message: "Internal server error",
  });
};

export default handleError;