# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

#documentation of nodejs routes

Here is a summary of the routes for itemlist with their URLs, sample requests, and responses:

1. Post Item List
URL: /setitemlist
Method: POST
Middleware: fetchUser
Sample Request Body:

json
Copy code
{
  "acc_no": "12345",
  "type_of_account": "Savings",
  "group": "Group A",
  "section": "Section 1"
}
Sample Response:

json
Copy code
{
  "_id": "item_id",
  "acc_no": "12345",
  "type_of_account": "Savings",
  "group": "Group A",
  "userId": "user_id",
  "masterId": "master_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Master section not found"
}
2. Get Item List
URL: /getitemlist
Method: GET
Middleware: fetchUser
Sample Response:

json
Copy code
[
  {
    "_id": "item_id",
    "acc_no": "12345",
    "type_of_account": "Savings",
    "group": "Group A",
    "userId": {
      "_id": "user_id",
      "name": "User Name"
    },
    "masterId": {
      "_id": "master_id",
      "section": "Section 1"
    },
    "__v": 0
  }
]
Error Response:

json
Copy code
{
  "message": "Error message"
}
3. Update Item List
URL: /updateitemlist/:id
Method: PUT
Middleware: fetchUser
Sample Request Body:

json
Copy code
{
  "acc_no": "12345",
  "type_of_account": "Savings",
  "group": "Group B",
  "section": "Section 2"
}
Sample Response:

json
Copy code
{
  "_id": "item_id",
  "acc_no": "12345",
  "type_of_account": "Savings",
  "group": "Group B",
  "userId": "user_id",
  "masterId": "master_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Item not found"
}
4. Delete Item List
URL: /deleteitemlist/:id
Method: DELETE
Middleware: fetchUser
Sample Response:

json
Copy code
{
  "message": "Item deleted successfully"
}
Error Response:

json
Copy code
{
  "message": "Item not found"
}

Here is a summary of the routes for master with their URLs, sample requests, and responses:

1. Add Master
URL: /addmaster
Method: POST
Middleware: fetchuser
Sample Request Body:

json
Copy code
{
  "section": "Section 1"
}
Sample Response:

json
Copy code
{
  "_id": "master_id",
  "section": "Section 1",
  "userId": "user_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Server Error"
}
2. Get Masters
URL: /getMasters
Method: GET
Middleware: fetchuser
Sample Response:

json
Copy code
[
  {
    "_id": "master_id",
    "section": "Section 1",
    "userId": {
      "_id": "user_id",
      "name": "User Name"
    },
    "__v": 0
  }
]
Error Response:

json
Copy code
{
  "message": "Server Error"
}

#vocher entry routes- 
Here is a summary of the routes with their URLs, sample requests, and responses:

1. Set Opening Balance
URL: /setopeningbalance
Method: POST
Middleware: fetchUser
Sample Request Body:

json
Copy code
{
  "cash": 1000,
  "section": "Section 1"
}
Sample Response:

json
Copy code
{
  "_id": "openingbalance_id",
  "cash": 1000,
  "userId": "user_id",
  "masterId": "master_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Master section not found"
}
2. Get Opening Balances
URL: /getopeningbalances
Method: GET
Middleware: fetchUser
Sample Response:

json
Copy code
[
  {
    "_id": "openingbalance_id",
    "cash": 1000,
    "userId": {
      "_id": "user_id",
      "name": "User Name"
    },
    "masterId": {
      "_id": "master_id",
      "section": "Section 1"
    },
    "__v": 0
  }
]
Error Response:

json
Copy code
{
  "message": "Error message"
}
3. Make New Voucher
URL: /makenewvocher
Method: POST
Middleware: fetchUser
Sample Request Body:

json
Copy code
{
  "entryDate": "2023-07-13",
  "section": "Section 1"
}
Sample Response:

json
Copy code
{
  "_id": "voucher_id",
  "openingBalance": "openingbalance_id",
  "entryDate": "2023-07-13",
  "creditTable": null,
  "debitTable": null,
  "userId": "user_id",
  "masterId": "master_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Please set opening balance first before making new voucher"
}
4. Get Voucher
URL: /getvocher
Method: GET
Middleware: fetchUser
Sample Request Body:

json
Copy code
{
  "section": "Section 1"
}
Sample Response:

json
Copy code
{
  "_id": "voucher_id",
  "openingBalance": "openingbalance_id",
  "entryDate": "2023-07-13",
  "creditTable": [],
  "debitTable": [],
  "userId": "user_id",
  "masterId": "master_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Voucher entry not found"
}
5. Update Credit Data
URL: /updatecreditdata
Method: PUT
Middleware: fetchUser
Sample Request Body:

json
Copy code
{
  "creditTable": [
    {
      "openingBalance": 5000,
      "reciptNumber": 12345,
      "AccNumber": 67890,
      "typeOfAcc": "Cash",
      "narration": "Payment for services",
      "group": "Income",
      "amount": 2000
    }
  ],
  "section": "Section 1"
}
Sample Response:

json
Copy code
{
  "_id": "voucher_id",
  "openingBalance": "openingbalance_id",
  "entryDate": "2023-07-13",
  "creditTable": [
    {
      "openingBalance": 5000,
      "reciptNumber": 12345,
      "AccNumber": 67890,
      "typeOfAcc": "Cash",
      "narration": "Payment for services",
      "group": "Income",
      "amount": 2000
    }
  ],
  "debitTable": [],
  "userId": "user_id",
  "masterId": "master_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Voucher entry not found"
}
6. Update Debit Data
URL: /updatedebitdata
Method: PUT
Middleware: fetchUser
Sample Request Body:

json
Copy code
{
  "debitTable": [
    {
      "openingBalance": 3000,
      "reciptNumber": 54321,
      "AccNumber": 98765,
      "typeOfAcc": "Cash",
      "narration": "Payment for goods",
      "group": "Expense",
      "amount": 1500
    }
  ],
  "section": "Section 1"
}
Sample Response:

json
Copy code
{
  "_id": "voucher_id",
  "openingBalance": "openingbalance_id",
  "entryDate": "2023-07-13",
  "creditTable": [],
  "debitTable": [
    {
      "openingBalance": 3000,
      "reciptNumber": 54321,
      "AccNumber": 98765,
      "typeOfAcc": "Cash",
      "narration": "Payment for goods",
      "group": "Expense",
      "amount": 1500
    }
  ],
  "userId": "user_id",
  "masterId": "master_id",
  "__v": 0
}
Error Response:

json
Copy code
{
  "message": "Voucher entry not found"
}







