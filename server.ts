import { ethers } from "ethers";
import express, { Request, Response } from "express";
import { capacityPoolABI } from "./abis/capacityPool";
import {
  AcceptOfferRequest,
  AddOfferRequest,
  GetOffersRequest,
  RemoveOfferRequest,
} from "./types";

const app = express();
app.use(express.json());

const capacityPoolContractAddress =
  "0xA6005b21977d677231A5fC3F5D193D7F612919CC";
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.sepolia.org"
);
const capacityPoolContract = new ethers.Contract(
  capacityPoolContractAddress,
  capacityPoolABI,
  provider
);

app.get("/getOffers", async (req: Request, res: Response) => {
  const { privateKey }: GetOffersRequest = req.body;
  try {
    const wallet = new ethers.Wallet(privateKey, provider);
    const contractWithSigner = await capacityPoolContract.connect(wallet);
    const offers = await contractWithSigner.getOffers();
    res.json({ offers });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/addOffer", async (req: Request, res: Response) => {
  const { id, privateKey, price, expiryTimestamp }: AddOfferRequest = req.body;
  try {
    const wallet = new ethers.Wallet(privateKey, provider);
    const contractWithSigner = capacityPoolContract.connect(wallet);
    const tx = await contractWithSigner.addOffer(id, price, expiryTimestamp);
    await tx.wait();
    res.json({ success: true });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/acceptOffer", async (req: Request, res: Response) => {
  const { id, privateKey }: AcceptOfferRequest = req.body;
  try {
    const wallet = new ethers.Wallet(privateKey, provider);
    const contractWithSigner = capacityPoolContract.connect(wallet);
    const tx = await contractWithSigner.acceptOffer(id);
    await tx.wait();
    res.json({ success: true });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/removeOffer", async (req: Request, res: Response) => {
  const { id, privateKey }: RemoveOfferRequest = req.body;
  try {
    const wallet = new ethers.Wallet(privateKey, provider);
    const contractWithSigner = capacityPoolContract.connect(wallet);
    const tx = await contractWithSigner.removeOffer(id);
    await tx.wait();
    res.json({ success: true });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
