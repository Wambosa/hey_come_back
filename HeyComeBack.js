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