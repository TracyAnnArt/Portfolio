(function(){
    function startLoop(){
        var img = document.getElementById('coffeeGif');
        if(!img) return false;
        var reloadInterval = 3000; // adjust if needed
        setInterval(function(){
            img.src = img.src.split('?')[0] + '?t=' + Date.now();
        }, reloadInterval);
        return true;
    }

    function waitForImgAndStart(){
        if(startLoop()) return;
        var tries = 0;
        var checker = setInterval(function(){
            if(startLoop() || ++tries > 20){
                clearInterval(checker);
            }
        }, 250);
    }

    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', waitForImgAndStart);
    } else {
        waitForImgAndStart();
    }
})();