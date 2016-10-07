window.addEventListener('load', function(){
    
    var randomOptions = [
        {
            hello:  "Hi! Hi!",
            goodbye: "Hey! Come Back!",
            goodbyeSeconds: 7
        },
        {
            hello: "DOWN + A (uppercut)",
            goodbye: "get over here! -scorpion",
            goodbyeSeconds: 2
        },
        {
            hello: "it doesn't even matter...",
            goodbye: "I won't be ignored! -lincoln park",
            goodbyeSeconds: 4
        },
        {
            hello: "joy",
            goodbye: "you cannot escape me",
            goodbyeSeconds: 10
        },
        {
            hello: "you will be assimilated",
            goodbye: "resistance is futile.",
            goodbyeSeconds: 5
        },
        {
            hello: "mmm hmm",
            goodbye: "get back here!",
            goodbyeSeconds: 1
        },
        {
            hello: "Great Deku Tree, I'm back",
            goodbye: "Hey! Listen! -Navi",
            helloSeconds: 3,
            goodbyeSeconds: 3
        },
        {
            goodbye: "i'm watching you",
            goodbyeSeconds: 8
        },
        {
            hello: "i was so worried!",
        },
        {
            hello: "Nice to see my favorite city state again",
            helloSeconds: 5
        }
    ];
    
    var randomInt = Math.floor(Math.random()*(randomOptions.length-0+1)+0);
    
    HeyComeBack(randomOptions[randomInt]);
    
});

function HeyComeBack(options){
    
    var hello = options.hello;
    var goodbye = options.goodbye;
    var goodbyeSeconds = (options.goodbyeSeconds * 1000) || 5000;
    var helloSeconds = (options.helloSeconds * 1000) || 500
    
    function setTitle(text){
        document.title = text;
    }

    var staticTitle = document.title;
    
    var isBlurred = true;
    
    var isTyping = false;
    
    window.addEventListener('focus', function(){
        isBlurred = false;
        
        if(hello)
            document.title = hello;
        
        window.setTimeout(function(){
            if(!isBlurred)
                setTitle(staticTitle);
        }, helloSeconds);
    });

    if(goodbye){
        window.addEventListener('blur', function(){
            
            isBlurred = true;
        
            var interval = goodbyeSeconds / goodbye.length;
            
            
            if(!isTyping){
                isTyping = true;
                
                for(var i=1; i<= goodbye.length; ++i){
                    
                    let j = i;
                    
                    window.setTimeout(function(){
                        
                        if(j == goodbye.length)
                            isTyping = false;
                        
                        if(isBlurred)
                            setTitle(goodbye.slice(0, j));
                            
                    }, interval*j);
                }
            }
        });
    }
}