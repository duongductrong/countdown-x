!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("countdownX",[],o):"object"==typeof exports?exports.countdownX=o():t.countdownX=o()}(this,(function(){return(()=>{"use strict";var t={607:t=>{var o=function(){function t(){this.now=null}return t.prototype.fromNow=function(){return this.now=new Date,this},t.prototype.countdown=function(t){if(!this.now)throw new Error("There is no definite date for the countdown.");if(!t)throw new Error("Do not enter the date you want to count down.");var o,e,n,r,u,f,i=new Date(t).getTime()-this.now.getTime();if(i<0)throw new Error("The countdown date must be less than the current date");return o=Math.floor(i/1e3),e=Math.floor(o/60),n=Math.floor(e/60),r=Math.floor(n/24),u=Math.floor(r/30),f=Math.floor(u/12),{seconds:(o%=60)<10?"0"+o:o,minutes:(e%=60)<10?"0"+e:e,hours:(n%=24)<10?"0"+n:n,days:r%=30,months:u%=12,years:f%=100}},t}();t.exports=new o}},o={};return function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{}};return t[n](r,r.exports,e),r.exports}(607)})()}));