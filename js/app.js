function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 9)
    : cb();
};

ready(function(){


    var App = {
        init: function() {
            let xhr = new XMLHttpRequest;
            let JSONApi = "https://api.github.com/repos/brendero/enterprise/stats/all";
            this.getJSON(xhr,JSONApi);
        },
        getJSON: function(xhr, JSONApi) {
            xhr.open("GET", JSONApi, true);
            xhr.onload = function() {
                if(xhr.status == 200) {
                    var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
                    console.log(data);
                } else {
                    console.log(status);
                }
            }
            xhr.onerror = function() {
                console.log(Error('Network Error!'));
            }
            xhr.send();

        }
    }
    
App.init();
});