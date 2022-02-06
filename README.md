<p align="center"><img src="https://inspirobot.me/website/images/favicon.png" alt="inspirobot" style="vertical-align:top; margin:4px"> </p>

# inspirobot-js - API wrapper for [inspirobot.me](https://inspirobot.me)

### Integrate Inspirobot easily into your application
<br>

##### Importing the package
At first download the package

```shell
npm install inspirobot.js
```
or
```shell
yarn add inspirobot.js
```
<br>

##### Generating an image
```javascript
const inspirobot = require("inspirobot.js")

inspirobot.generateImage().then(image => {
    console.log(image)
}).catch(error => {
    console.error(error)
})
```
<br>

##### Using mindfulnessmode with the inbuilt FlowClient
```javascript
const inspirobot = require("inspirobot.js")

const flowClient = new inspirobot.FlowClient()
flowClient.generateFlow().then(flow => {
    console.log(flow)
}).catch(error => {
    console.error(error)
})
```

## This project is licensed under the MIT License
MIT License (MIT)

Copyright © 2022 Johannes von der Meden

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
