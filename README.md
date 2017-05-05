# Loading Easy

A feedback library for users with a beautiful experience.

#Demo
[a link](https://mateusmirandaalmeida.github.io/loading-easy/)

## Installation
```html

bower install loading-easy --save
or
npm install loading-easy --save
```

## Add dependencies to the <head> section of your main html:
```html
<script src="bower_components/loading-easy/dist/loading-easy.min.js"></script>
or
<script src="node_modules/loading-easy/dist/loading-easy.min.js"></script>
```

## Basic usage
```javascript
LoadingEasy.init('Your text here');
```

## Finish Loading
```javascript
LoadingEasy.finish();
```

## Customization
```javascript
var config = {
  textColor: '#FFFFFF', // Color that will be defined in the text
  iconColor: '#00E5FF', // Color that will be defined in the icon
  background: 'rgba(0, 0, 0, 0.80)' //Color that will be defined in the background
  animated: false // Active or inactive text animation
};
LoadingEasy.init('Your text here', config);
```

## Installation of dependencies for use or development
```
npm install
```
## Tasks
Run the task 'npm run dev' for the development.
Run the task 'npm run prod' generating the minified file.
