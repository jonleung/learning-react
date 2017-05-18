// const root = document.querySelector('#root')
// root.innerHTML = `<p>Hello webpack.</p>`

// does this recompile?

// src/app.js

import codeURL from './code.png'
const img = document.createElement('img')
img.src = codeURL
img.style.backgroundColor = "#2B3A42"
img.style.padding = "20px"
img.width = 32
document.body.appendChild(img)


import {groupBy} from 'lodash/collection'
import people from './people'

import './style.scss'

const managerGroups = groupBy(people, 'manager')

const root = document.querySelector('#root')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
