# Meteor-React-Ionic-ES6-kitchensink

A sample project defining a minimal Mobile App using:

* Meteor 1.3.4.1
* reactionic 1.12

for **iOS** and **Android** written is **ES6**


## Usage
1. Make sure you have *Meteor* installed. If not:
	`curl https://install.meteor.com/ | sh`

2. Install dependencies
	`meteor npm install`
	
3. Run project
	`meteor`
4. App should be accessible on `http://localhost:3000`
	
## Override Platform
As with the original *reactionic* kitchensink example, the Platform can be overridden by supplying a *GET* parameter to the url

* iOS: `http://localhost:3000/#/?platformOverride=ios`
* Android: `http://localhost:3000/#/?platformOverride=android`

The app should change the styling according the the selected platform. 

## Why not just the official reactionic-kitchensink
**Available [HERE](https://github.com/reactionic/reactionic-kitchensink)**

I found the official kitchensink app too complicated as a starting point. And it doesn't use ES6 yet.

## Further reading
* [reactionic Guide](https://github.com/reactionic/reactionic/blob/master/GUIDE.md) (READ THIS!)
* [react doc](https://facebook.github.io/react/docs/getting-started.html) (React fundamentals)
* [ionic doc](http://ionicframework.com/docs/) (To see what components are available)
* [meteor docs](https://docs.meteor.com)

