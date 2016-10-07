# hey_come_back
a fun way to get vistors attention when they tab out of my page ❤

## Description
This just changes the tab title dynamically when the user switches tabs.
It is very minimal.

## Include Instructions
**Production**: Using the _tag_ (or commit hash), it is easy to reference an exact version.
```HTML
    <script type="text/javascript" src="https://cdn.rawgit.com/wambosa/hey_come_back/f0c684f/HeyComeBack.js"></script>
    <!--                                                                             ^^^^^^^ this is the tag/hash  -->
```
**Development**: always updated can also be used with the same CDN service.
```HTML
    <script type="text/javascript" src="https://cdn.rawgit.com/wambosa/hey_come_back/master/HeyComeBack.js"></script>
```

## Usage
- be sure to use this _after_ the **window** is loaded
- nothing happens unless you switch tabs
- include the ```HeyComeBack_auto.js``` as show in Example.html instead for automatic random messages
```javascript
window.addEventListener('load', function(){
    
    var myOptions = {
        hello: "the user re opens your tab and sees this text",
        helloSeconds: 1.5,
        goodbye: "the user switches tabs and sees this text",
        goodbyeSeconds: 8
    };

    HeyComeBack(myOptions);
});
```

## Example.html
```HTML
<head>
    <title>Demo Page</title>
</head>

<body>
    <script src="https://cdn.rawgit.com/Wambosa/hey_come_back/master/HeyComeBack_auto.js"></script>
</body>
```