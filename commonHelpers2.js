import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const l={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},m={...l,title:"OK",color:"#59a10d",iconUrl:"ok-icon.svg"},f={...l,title:"Error",color:"#ef4040",iconUrl:"error-icon.svg"},g={...l,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},u=document.querySelector("button"),n=document.querySelector('input[name="delay"]');let o=n.value;n.addEventListener("change",()=>{o=n.value});const d=document.querySelectorAll('input[name="state"]'),p=document.querySelector(".form"),h=r=>{r.preventDefault();let t="";d.forEach(i=>{i.checked&&(t=i.value)}),t&&o?(new Promise((e,a)=>{const c=o;setTimeout(()=>{t==="fulfilled"?e(`✅ Fulfilled promise in ${c} ms`):a(`❌ Rejected promise in ${c} ms`)},o)}).then(e=>{s.success({...m,message:`${e.slice(1)}`}),console.log(e)},e=>{s.error({...f,message:`${e.slice(1)}`}),console.log(e)}),p.reset()):s.warning({...g,message:"Please fill in all fields."})};u.addEventListener("click",h);
//# sourceMappingURL=commonHelpers2.js.map
