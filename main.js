var cel = document.getElementById('cel');
var kel = document.getElementById('kel');

cel.addEventListener('input', function(){
    let c = this.value;
    let k = Number(c) + 273;
    kel.value=k;
});

kel.addEventListener('input', function(){
    let k = this.value;
    let c= Number(k)-273;
    cel.value=c;
})