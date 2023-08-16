1. Install nvm https://github.com/nvm-sh/nvm
2. Install node v16.14.2
```bash
nvm install 16.14.2
```
3. check node and npm versions
```bash
node -v && npm -v
```
output
~~~
v16.14.2
8.5.0
~~~

4. install dependencies
```bash
npm i
```

5. update aave-ui-kit follow commands
```bash
cd node_modules/@aave/aave-ui-kit/dist && rm -r *
wget https://github.com/UwU-Lend/app/releases/download/ui-kit/aave-ui-kit-dist.tar.gz
tar -xzf aave-ui-kit-dist.tar.gz && rm aave-ui-kit-dist.tar.gz
```


Run for dev
```bash
npm run start:dev
```

for build
```bash
npm run build
```
