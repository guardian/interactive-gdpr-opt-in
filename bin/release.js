#!/usr/bin/env node

const fs = require('fs-extra');
const version = Math.floor(Date.now()/1000000);


fs.remove('./release')
.then(()=>
  fs.copy('./public', `./release/v/${version}`)
)
.then(()=>
  fs.readFile(`./release/v/${version}/main.html`, 'utf8').then(data =>
    data.replace(/\/public\/assets\//g, `https://interactive.guim.co.uk/atoms/2018/02/gdpr-opt-in/v/${version}/assets/`)
  )
  .then(data =>
    fs.writeFile(`./release/v/${version}/main.html`, data, 'utf8')
  )
)
.then(()=>
  Promise.all([
    fs.writeFile('./release/live',`v/${version}`),
    fs.writeFile('./release/preview',`v/${version}`),
  ])
)
.then(()=>{
  process.exit(0)
})
.catch(err=>{
  console.error(err);
  process.exit(1)
})
