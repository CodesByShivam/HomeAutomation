function listDevices(){
    fetch('http://localhost:3000/getDevices')
    .then(res => {
        console.log(res);
        console.log('coming here');
        var a = '<ul>';
        var b = '</ul>';
        var m = [];

        for(var i=0;i<res.length;i++){
            console.log(res[i])
            m[i] = '<li>' + res[i].name + '</li>';
        }

        document.getElementById('devList').innerHTML = a+m+b;
    });
}