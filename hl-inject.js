setTimeout(()=>{
    // script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.onload = function() {};
    // script.src = 'https://code.jquery.com/jquery-2.2.4.min.js';
    // document.getElementsByTagName('head')[0].appendChild(script);

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {};
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.3.11/seedrandom.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {};
    script.src = 'https://www.dropbox.com/s/ams94m4qqps3ydr/merge.js?dl=1';
    document.getElementsByTagName('head')[0].appendChild(script);
},10000)
