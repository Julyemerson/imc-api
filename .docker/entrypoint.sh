#!/bin/bash

npm install
npm run build

npm install prisma --save-dev
npx prisma init

npm run start:dev
