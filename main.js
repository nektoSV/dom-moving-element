!function(){"use strict";function t(t,e){return Math.floor(Math.random()*(e-t+1))+t}const e=new class{constructor(){this.boardSize=4,this.container=null,this.boardEl=null,this.cells=[]}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}drawUi(){for(let t=0;t<this.boardSize**2;t+=1){const t=document.createElement("div");t.classList.add("cell","board-theme"),this.container.appendChild(t)}this.cells=Array.from(this.container.children)}drawGoblin(t=0){document.querySelector(".goblin")&&document.querySelector(".goblin").remove();const e=document.querySelectorAll(".cell"),i=document.createElement("div");i.classList.add("goblin"),e[t].appendChild(i)}};e.bindToDOM(document.querySelector("#game-board"));const i=new class{constructor(t){this.gamePlay=t,this.position=null}init(){this.gamePlay.drawUi(),this.gamePlay.drawGoblin(),this.changesGoblinPosition()}changesGoblinPosition(){setInterval((()=>{this.position=this.createPosition(0,this.gamePlay.boardSize-1,this.gamePlay.boardSize,this.position),this.gamePlay.drawGoblin(this.position)}),5e3)}createPosition(e,i,o,n){let s,r=0;for(;(!s||n===s)&&r<1e3;)s=t(e,i)*o+t(e,i),r+=1;return s}}(e);i.init()}();