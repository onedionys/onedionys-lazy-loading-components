<h1 align="center">Welcome to One Dionys - Lazy Loading Components! 👋 </h1>

<p align="center">Functions to incrementally load application components when needed. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-lazy-loading-components?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-lazy-loading-components?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-lazy-loading-components?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-lazy-loading-components?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-lazy-loading-components.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-lazy-loading-components?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-lazy-loading-components?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const lazyLoadComponent = require('lazy-loading-components');

lazyLoadComponent('path/to/component.js')
.then(() => {
    // Component loaded successfully, you can now use it
})
.catch((error) => {
    // Handle error if component failed to load
});
```

#### Explanation

* This package provides a function `lazyLoadComponent` that allows you to dynamically load components in your web application. The function accepts the path to the component file as a parameter and returns a promise that resolves when the component is successfully loaded.

#### Return Value

* The `lazyLoadComponent` function returns a promise. If the component is loaded successfully, the promise resolves. If there is an error while loading the component, the promise rejects with an error object.

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 14 March 2024
* v4.0.2 : 18 March 2024
* v5.0.0 : 31 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Lazy Loading Components is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Lazy Loading Components? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
