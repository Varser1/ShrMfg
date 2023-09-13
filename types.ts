export interface AcceptOfferRequest {
  id: string;
  privateKey: string;
}
export interface AddOfferRequest {
  id: string;
  privateKey: string;
  expiryTimestamp: number;
  price: number;
}

export interface GetOffersRequest {
  privateKey: string;
}

export interface RemoveOfferRequest {
  id: string;
  privateKey: string;
}
