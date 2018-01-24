#!/usr/bin/env node

const fs = require('fs-extra');
const version = Math.floor(Date.now()/1000000);


fs.remove('./release')
.then(()=>
  fs.copy('./public', `./release/v/${version}`)
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
