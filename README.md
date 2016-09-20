#Exit Intent Modal

Exit Intent is a jQuery plugin that is designed to help you increase your landing page conversion rates. Exit Intent enables you to display a modal before a user leaves your website, helping you increase your landing page conversion rates. Exit intent modals have been statistically proven to increase conversion rates by as much as 15% depending on your audience, traffic quality and offer.

![Preview](https://github.com/JMcAmmond/exitintent/blob/master/example/exit-intent.gif?raw=true "Exit Intent Preview")

## Usage
1. Create markup for modal content
2. Select the element with jQuery and call Exit Intent (eg. `$('#myModal').exitintent();`)
3. (Optional) Save the return value to use the public API, allowing you to `fire`, `disable`, or check `isDiabled` on demand.

## Options
- timer
- delay
- sensitivity
- disabled
- closeBtn
- customClose
- animation
- callback

#### timer
By default, the timer is set to `1000`ms as the user my not have entended to be on that page. The timer can be changed by specifying a `timer` option in milliseconds.

*Example*
```
    $('#myModal').exitintent({
        timer: 2000 // 2 second timer
    });
```

#### delay
By default, delay is set to `0`ms. Changing this option will tell Exit Intent in milliseconds how long to wait before showing. If a users mouse reenters before the delay is finished the modal will not appear.

*Example*
```
    $('#myModal').exitintent({
        delay: 2000 // Wait 2 Seconds before firing
    });
```

#### sensitivity
By default, the sensitivity is set to `20`. This value determines how close a users mouse needs to be from the top of the screen to trigger Exit Intent. The higher value, the more sensitive, and the more quickly the event will fire.

*Example*
```
    $('#myModal').exitintent({
        sensitivity: 40 // Fire Exit Intent sooner
    });
```

#### disabled
By default, disabled is set to `false`. If for some reason you do not want Exit Intent to be active on a page you can set `disabled` to `true` and deactive Exit Intent.

*Example*
```
    $('#myModal').exitintent({
        disabled: true // Disable Exit Intent from firing
    });
```

#### closeBtn
By default, closeBtn is set to `true`. When set to `false` the close 'x' button will not appear in the top right corner of the modal. 

*Example*
```
    $('#myModal').exitintent({
        closeBtn: false // Hide close button
    });
```

#### customClose
By default, customClose is set to `null`. This option is used when providing your own close button in the Exit Intent modal window. Option should be set as a jQuery class or ID. 

*Example*
```
    $('#myModal').exitintent({
        customClose: '.my-close-class'
    });
```

#### animation
By default, animation is set to `bounceIn`. These animation are not provided and simply add a class to the Exit Intent modal when shown. Example page is using animation provided by animate css but you can define your own in css aswell.

*Example*
```
    $('#myModal').exitintent({
        animation: 'fadeIn'
    });
```

#### callback
You can add a callback, which is a function that will run once Exit Intent has been triggered, by using the `callback` option.

*Example*
```
    $('#myModal').exitintent({
        callback: function() { console.log('Exit Intent fired') }
    });
```