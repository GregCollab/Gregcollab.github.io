const valueLookup = document.getElementById("myRange")
const parent = d3.select('#T');
const { width, height } = parent.node().getBoundingClientRect();
console.log(`Found parent of size: ${width}x${height}`);
const SVG = parent.append('svg')
    .attr("width", width)
    .attr("height", height);
console.log('Added SVG to parent');
function RandomGrootte() {
    valueLookup.value = Math.floor(Math.random() * 75); 
    console.log("New value is", valueLookup.value);
    RandomXD()
}
function RandomXD() {
    SVG.append("text")
        .attr("x", d3.randomInt(600))
        .attr("y", d3.randomInt(300))
        .attr("fill", "blue")
        .text('X')
        .style("font-size",valueLookup.value +"px")
}
var Value2 = document.getElementById("howmany")
var textr = document.getElementById("Val")
textr.innerHTML = Value2.value;
Value2.oninput = function() {
    textr.innerHTML = this.value;
}
console.log(Value2.value);  

function TikTok(){
    var Nett = setInterval(RandomGrootte, 50)
    setTimeout(function(){clearInterval(Nett); },Value2.value*50+0.05);
}
var el = document.getElementById('T');
if(el){
el.addEventListener('mousemove', cb);
el.addEventListener('mousedown', cb2);
el.addEventListener('mouseup',cb3)

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(100)
k = "blue"
function cb(){
    SVG.append("text")
        .attr("x", event.clientX-10)
        .attr("y", event.clientY-75)
        .attr("fill", k)
        .text('X')
        .style("font-size",valueLookup.value +"px");
                    }
function cb2(){
    k = "red"
}
function cb3(){
    k = "blue"
}

