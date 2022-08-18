"use strict";const body=document.getElementsByTagName("body").item(0);body.style.background="#000";const TP=2*Math.PI,CSIZE=400,ctx=(()=>{let b=document.createElement("div");b.style.textAlign="center",body.append(b);let a=document.createElement("canvas");return a.width=800,a.height=800,b.append(a),a.getContext("2d")})();ctx.translate(400,400),ctx.lineCap="round",onresize=()=>{let a=Math.min(window.innerWidth,window.innerHeight)-40;ctx.canvas.style.width=a+"px",ctx.canvas.style.height=a+"px"};const getRandomInt=(a,b,c)=>c?Math.floor(Math.random()*Math.random()*(b-a))+a:Math.floor(Math.random()*(b-a))+a;var Circle=function(a,b,c,d,e,f){this.x=a,this.y=b,this.xp=c,this.yp=d,this.radius=e,this.pc=f,this.c=[],this.drawCircle=a=>{ctx.beginPath(),ctx.moveTo(this.x+this.radius*a,this.y),ctx.arc(this.x,this.y,this.radius*a,0,TP),ctx.fillStyle="hsl("+(hue+5*this.radius)+",90%,50%)",ctx.fill()}},Curve=function(){this.car=[],this.to=-getRandomInt(0,400),this.addCurveCircle=a=>{a.pc&&(this.car.unshift(a.pc),this.addCurveCircle(a.pc))},this.setPath=()=>{this.len=0,this.path=new Path2D,this.path.moveTo(0,0),this.path.lineTo(this.car[1].xp,this.car[1].yp),this.len+=this.car[0].radius;for(let a=1;a<this.car.length-1;a++)this.path.bezierCurveTo(this.car[a].x,this.car[a].y,this.car[a].x,this.car[a].y,this.car[a+1].xp,this.car[a+1].yp),this.len+=2*this.car[a].radius;this.path.lineTo(this.car[this.car.length-1].x,this.car[this.car.length-1].y),this.len+=this.car[this.car.length-1].radius},this.drawCurve=()=>{let a=this.to+t;if(ctx.setLineDash([Math.max(1,a),4e3]),ctx.stroke(this.path),a>this.len+40)return this.car[this.car.length-1].drawCircle(.8),!(a>this.len+120);{if(!(a>this.len))return!0;let b=.8*(a-this.len)/40;return this.car[this.car.length-1].drawCircle(b),!0}}},drawPoint=(b,c,a)=>{ctx.beginPath(),ctx.arc(b,c,5,0,TP),ctx.closePath(),a?ctx.fillStyle=a:ctx.fillStyle="red",ctx.fill()},cval=(b,c,g)=>{if(Math.pow(b*b+c*c,.5)>400-g)return!1;for(let a=0;a<ca.length;a++){let d=g+ca[a].radius,e=ca[a].x-b,f=ca[a].y-c;if(!(Math.abs(e)>d)&& !(Math.abs(f)>d)&&Math.pow(e*e+f*f,.5)+1<d)return!1}return!0},eg=.3>Math.random(),grow=b=>{let a=eg?ca[ca.length-1-getRandomInt(0,ca.length,!0)]:ca[getRandomInt(0,ca.length)],c=TP*Math.random(),d=a.x+(a.radius+b)*Math.cos(c),e=a.y+(a.radius+b)*Math.sin(c);if(cval(d,e,b)){let g=a.x+a.radius*Math.cos(c),h=a.y+a.radius*Math.sin(c),f=new Circle(d,e,g,h,b,a);return a.c.push(f),ca.push(f),!0}return!1};ctx.fillStyle="green",ctx.lineWidth=5;var draw=()=>{ctx.clearRect(-400,-400,800,800);let b=0;for(let a=0;a<curves.length;a++)curves[a].drawCurve()&&b++;return drawPoint(0,0,"silver"),b},stopped=!0,start=()=>{stopped?(stopped=!1,requestAnimationFrame(animate)):stopped=!0};body.addEventListener("click",start,!1);var t=0,inc=3,animate=()=>{stopped||(t+=inc,(!draw()||t<0)&&(3==inc?inc=-8:(ctx.strokeStyle="hsla("+getRandomInt(0,360)+",90%,60%,0.6)",inc=3,t=0,eg=.3>Math.random(),setCircles())),requestAnimationFrame(animate))},hue=getRandomInt(0,360),ca=[new Circle(0,0,0,0,50,0,0)],curves=[],setCircles=()=>{ca=[new Circle(0,0,0,0,50,0,0)];for(let a=0;a<2e3;a++){let b=10;a<20?b=42:a<100?b=34:a<300?b=26:a<1e3&&(b=18),grow(b)}curves=[];for(let c=0;c<ca.length;c++)if(0==ca[c].c.length){var d=new Curve;d.car=[ca[c]],d.addCurveCircle(ca[c]),d.setPath(),curves.push(d)}};onresize(),setCircles(),ctx.strokeStyle="hsla("+getRandomInt(0,360)+",90%,60%,0.6)",start()
