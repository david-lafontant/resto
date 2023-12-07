# RESTO API
This project wiil be an API for a restaurant.
It's building with Next.js and PostgreSQL


## Tech needed

In order to run this app locally you need:
- [Node](https://nodejs.org/en/download)
- [Next](https://nextjs.org/docs)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)





## Getting Started

Once you clone this repository
you need to install the packages
```bash
npm i

```
the you need to create an `.env` file with the following enviroment variable:
`DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/resto?schema=public"``
replace the username `johndoe` and the password `randompassword` with your own local credentials

To run the development server:

```bash
npm run dev

```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## Sted done
- setup repository
- connect with PostgreSQL
- create resto database and user's table

## Next steps
   * create the routes
   * Setup user authetication
   * Implement authoprization for the different kinds of users
   * Deploy


