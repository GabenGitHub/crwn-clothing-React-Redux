# build environment
FROM node:16-alpine as build
WORKDIR /app
COPY package.json ./
# Force is temporary due to react v18 rc version. Remove after final release
RUN npm install --force
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html