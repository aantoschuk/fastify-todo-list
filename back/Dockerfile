# base image is LTS node
FROM node:22-alpine AS build

# add group and user with BuildKit to use build secrets

# Define BuildKit secrets
# The secrets will be provided during the build
RUN --mount=type=secret,id=build-secrets.txt \
    USER_ID=$(grep USER_ID /run/secrets/build-secrets.txt | cut -d '=' -f2) && \
    GROUP_ID=$(grep GROUP_ID /run/secrets/build-secrets.txt | cut -d '=' -f2) && \
    USERNAME=$(grep USERNAME /run/secrets/build-secrets.txt | cut -d '=' -f2) && \
    GROUPNAME=$(grep GROUPNAME /run/secrets/build-secrets.txt | cut -d '=' -f2) && \
    addgroup -g ${GROUP_ID} -S ${GROUPNAME} && \
    adduser -u ${USER_ID} -G ${GROUPNAME} -S -s /bin/sh ${USERNAME}



## working directory
WORKDIR /home/apiuser

# copy dependencies files
COPY package.json pnpm-lock.yaml ./

## install pnpm globally as my preferenced package manager
RUN npm install -g pnpm@latest-10

# switch to newly created user
USER apiuser

# install dependencies
RUN pnpm install

# copy what's left of source files
COPY . .

CMD ["pnpm", "dev"]
