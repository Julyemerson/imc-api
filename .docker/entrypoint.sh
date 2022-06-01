#!/bin/bash

npm install
npm run build

npm install prisma --save-dev
npx prisma migrate dev --name init
npm install @prisma/client

npm run start:dev
