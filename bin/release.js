#!/usr/bin/env node

const fs = require('fs-extra');
const version = Math.floor(Date.now()/1000000);

const replaceAssetPath = (file) =>
    fs.readFile(`./release/v/${version}/${file}`, 'utf8').then(data =>
        data.replace(
            /\/public\/assets\//g,
            `https://interactive.guim.co.uk/atoms/2018/02/gdpr-opt-in/v/${version}/assets/`
        )
    )
    .then(data =>
        fs.writeFile(`./release/v/${version}/${file}`, data, 'utf8')
    );

fs.remove('./release')
.then(()=>
    fs.copy('./public', `./release/v/${version}`)
)
.then(()=>
    Promise.all(
        ['main.html','main.css'].map(replaceAssetPath)
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
