/* عدّاد زوّار منصة ستيب: يُحتسب الزائر مرة واحدة لكل متصفح، ويُخفى العدّاد إذا تعذّرت الخدمة */
(function(){
  var NS='step-ahmedchoices',KEY='visitors',F='stp.counted',base='https://api.counterapi.dev/v1/'+NS+'/'+KEY+'/';
  var counted=false;try{counted=!!localStorage.getItem(F)}catch(e){}
  var url=counted?base:base+'up';
  var ctl=window.AbortController?new AbortController():null;
  var t=setTimeout(function(){ctl&&ctl.abort()},6000);
  fetch(url,ctl?{signal:ctl.signal}:{}).then(function(r){return r.json()}).then(function(d){
    clearTimeout(t);
    var n=d&&(d.count!=null?d.count:d.value);if(n==null)return;
    if(!counted){try{localStorage.setItem(F,'1')}catch(e){}}
    var f=document.querySelector('footer');if(!f)return;
    var s=document.createElement('div');s.className='visits';
    s.innerHTML='عدد الزوار: <b dir="ltr">'+Number(n).toLocaleString('en-US')+'</b>';
    f.insertBefore(s,f.firstChild);
  }).catch(function(){});
})();
