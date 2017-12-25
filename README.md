#Markdown editor app

##markdown editor using Reactjs and live server

For using the app, make sure you have npm, yarn and node.js installed, then enter those commands
```
npm install -g live-server
live-server -v
live-server public 
```

Commands for installing Babel (will create a package.json file) :
```
npm install -g babel-cli 
npm init 
```

Commands for installing presets (will create node-modules folder and yarn.lock)
```
yarn add babel-preset-react babel-preset-env 
```

Then, run this last command :
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

##Used those techno :
*Reactjs
*Live server
*Marked (plugins) https://github.com/chjj/marked
*HTML
*CSS