import { Router, Request, Response } from "express";
import { Mahasiswa, mhsData } from "../models/mhs";

export const getAllMhs = (req: Request, res: Response) => {
  return res.json({
    status: "sukses",
    data: mhsData,
  });
};

export const getMhsbyNIM = (req: Request, res: Response) => {
  const { nim } = req.params;

  const mahasiswa = mhsData.find((mhs) => mhs.nim === nim);
  if (!mahasiswa) {
    return res.status(404).json({
      status: "error",
      message: ` mhs dgn nim ${nim} tidak ditemukan.`,
    });
  }

  return res.json({
    status: "sukses",
    data: mahasiswa,
  });
};
