FROM node:10.22.1

WORKDIR /root/app

ENV TZ=Australia/Melbourne
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
  && apt-get install -y jq \
  rm -rf /var/lib/apt/lists/*

RUN npm i -g npm@latest

COPY package.json package-lock.json ./

RUN npm ci --quiet --no-optional && \
  rm -f ~/.npmrc && \
  npm cache clean --force

COPY .babelrc .eslintrc.js .npmignore rn-swipeable-panel.gif rn-swipeable-panel.png index.js ./
COPY .git ./.git