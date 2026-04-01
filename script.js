function changeColor(){
const colors=['#00d2ff','#9d50bb','#ff4b2b','#1fddff','#00ff87'];
const randomColor=colors[Math.floor(Math.random()*colors.length)];
const highlight=document.getElementById('name');
highlight.style.color=randomColor;
}
