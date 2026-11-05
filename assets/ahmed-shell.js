/* شريط اختيارات أحمد الموحّد: نسخة واحدة تُنسخ في كل موقع (step / rihla / arabic) */
(function(){
  if(window.__ahs||window.top!==window)return; window.__ahs=1;
  var H=location.hostname;
  var SITES=[
    {h:'ahmedchoices.com',u:'https://ahmedchoices.com/',ar:'الرئيسية',en:'Home'},
    {h:'step.ahmedchoices.com',u:'https://step.ahmedchoices.com/',ar:'منصة ستيب',en:'STEP Platform'},
    {h:'rihla.ahmedchoices.com',u:'https://rihla.ahmedchoices.com/',ar:'رحلة التعلّم الذاتي',en:'Self-Learning Journey'},
    {h:'arabic.ahmedchoices.com',u:'https://arabic.ahmedchoices.com/',ar:'مرافئ العربية',en:'Arabic Harbours'},
    {h:'mrgmdi22-prog.github.io',u:'https://mrgmdi22-prog.github.io/English/',ar:'نادي الإنجليزية',en:'English Club'}
  ];
  function lang(){var d=document.documentElement;var l=(d.getAttribute('data-lang')||d.lang||'ar').toLowerCase();return l.indexOf('ar')===0?'ar':'en'}
  var css='.ahs{font-family:system-ui,"Segoe UI",Tahoma,Arial,sans-serif;background:#fff;border-bottom:1px solid #e8e8e1;position:relative;z-index:9999;direction:ltr}'+
   '.ahs *{box-sizing:border-box}.ahs-in{max-width:1120px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 14px;min-height:48px}'+
   '.ahs a.ahs-b{color:#26313a;text-decoration:none;font-weight:700;font-size:17px;white-space:nowrap}.ahs a.ahs-b b{color:#3e8f86}'+
   '.ahs button{font:inherit;font-size:16px;font-weight:600;color:#26313a;background:#fafaf7;border:1.5px solid #e8e8e1;border-radius:999px;padding:6px 16px;cursor:pointer}'+
   '.ahs-m{position:absolute;top:100%;inset-inline-end:10px;background:#fff;border:1.5px solid #e8e8e1;border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,.12);padding:8px;min-width:230px;display:none}'+
   '.ahs-m.o{display:block}.ahs-m a{display:block;padding:11px 14px;border-radius:12px;color:#26313a;text-decoration:none;font-size:17px;font-weight:500}'+
   '.ahs-m a:hover{background:#fafaf7}.ahs-m a.c{background:#e2f2ef;color:#2c6f67;font-weight:700}';
  function build(){
    var L=lang(),rtl=L==='ar',old=document.querySelector('.ahs');if(old)old.remove();
    var st=document.getElementById('ahs-css');if(!st){st=document.createElement('style');st.id='ahs-css';st.textContent=css;document.head.appendChild(st)}
    var bar=document.createElement('div');bar.className='ahs';bar.dir=rtl?'rtl':'ltr';bar.style.direction=rtl?'rtl':'ltr';
    var items=SITES.map(function(s){var cur=H===s.h||(s.h==='mrgmdi22-prog.github.io'&&H===s.h);return '<a href="'+s.u+'"'+(cur?' class="c"':'')+'>'+(rtl?s.ar:s.en)+'</a>'}).join('');
    bar.innerHTML='<div class="ahs-in"><a class="ahs-b" href="https://ahmedchoices.com/">'+(rtl?'اختيارات <b>أحمد</b>':'Ahmed <b>Choices</b>')+'</a><button type="button" aria-expanded="false">'+(rtl?'مواقعي ▾':'My sites ▾')+'</button></div><div class="ahs-m">'+items+'</div>';
    document.body.insertBefore(bar,document.body.firstChild);
    var btn=bar.querySelector('button'),m=bar.querySelector('.ahs-m');
    btn.onclick=function(e){e.stopPropagation();var o=m.classList.toggle('o');btn.setAttribute('aria-expanded',o)};
    document.addEventListener('click',function(e){if(!bar.contains(e.target))m.classList.remove('o')});
  }
  function go(){build();try{new MutationObserver(function(ms){ms.forEach(function(x){if(x.attributeName==='lang'||x.attributeName==='data-lang')build()})}).observe(document.documentElement,{attributes:true})}catch(e){}}
  if(document.body)go();else document.addEventListener('DOMContentLoaded',go);
})();
