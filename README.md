# Game API

This is an HTTP API built on Node.js and TypeScript to interact with a ScamCoin Ethereum smart contract.

## Prerequisites

- Node.js
- Yarn package manager

## Installation

1. Install the dependencies:

```bash
yarn install
```

## Running the API Server

To start the API server on port 3000, run:

```bash
yarn start
```

## API Endpoints

### `GET /getOffers`

Get all offers for a manufacturer.

**Parameters:**

- `privateKey`: The private key for interacting with the smart contract.

**Example Request:**

``bash
curl -X GET -H "Content-Type: application/json" -d '{"privateKey": "YOUR_PRIVATE_KEY"}' http://localhost:3000/getOffers
``

### `POST /acceptOffer`

Accept a direct offer.

**Parameters:**

- `id`: The ID of the offer.
- `privateKey`: The private key for interacting with the smart contract.

**Example Request:**

``bash
curl -X POST -H "Content-Type: application/json" -d '{"id": "OFFER_ID", "privateKey": "YOUR_PRIVATE_KEY"}' http://localhost:3000/acceptOffer
``

### `POST /addOffer`

Add an offer to the pool.

**Parameters:**

- `id`: The ID of the offer.
- `price`: The price.
- `expiryTimestamp`: The end date for the offer.
- `privateKey`: The private key for interacting with the smart contract.

**Example Request:**

``bash
curl -X POST -H "Content-Type: application/json" -d '{"id": "OFFER_ID", "price": 10, "expiryTimestamp": "END_DATE", "privateKey": "YOUR_PRIVATE_KEY"}' http://localhost:3000/addOffer
``

### `POST /removeOffer`

Remove a specific offer.

**Parameters:**

- `id`: The ID of the offer.
- `privateKey`: The private key for interacting with the smart contract.

**Example Request:**

``bash
curl -X POST -H "Content-Type: application/json" -d '{"id": "OFFER_ID", "privateKey": "YOUR_PRIVATE_KEY"}' http://localhost:3000/removeOffer
``
