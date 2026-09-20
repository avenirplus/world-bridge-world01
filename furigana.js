
// Apply ruby furigana to all Japanese text rendered by WORLD BRIDGE.
(function(){
  let scheduled=false;
  const overrides={
    "今日は":"きょうは",
    "入っ":"はいっ",
    "分別":"ぶんべつ",
    "人":"ひと",
    "出だ":"でだ",
    "色付":"いろつ"
  };
  if(window.FURIGANA_TERMS)Object.assign(window.FURIGANA_TERMS,overrides);

  function getEntries(){
    const map=window.FURIGANA_TERMS||{};
    return Object.entries(map).sort(function(a,b){return b[0].length-a[0].length;});
  }

  function rubyizeTextNode(node, entries){
    if(!node || !node.nodeValue || !/[一-龯々〆ヵヶ]/.test(node.nodeValue)) return;
    const parent=node.parentElement;
    if(!parent) return;
    if(parent.closest('ruby,rt,script,style,textarea,input,option')) return;

    const text=node.nodeValue;
    let pos=0, changed=false;
    const frag=document.createDocumentFragment();

    while(pos<text.length){
      let hit=null;
      for(const pair of entries){
        const term=pair[0];
        if(text.startsWith(term,pos)){
          hit=pair;
          break;
        }
      }
      if(hit){
        const ruby=document.createElement('ruby');
        ruby.className='auto-ruby';
        ruby.appendChild(document.createTextNode(hit[0]));
        const rt=document.createElement('rt');
        rt.textContent=hit[1];
        ruby.appendChild(rt);
        frag.appendChild(ruby);
        pos+=hit[0].length;
        changed=true;
      }else{
        frag.appendChild(document.createTextNode(text[pos]));
        pos++;
      }
    }

    if(changed)node.replaceWith(frag);
  }

  function applyFurigana(root){
    const entries=getEntries();
    if(!entries.length)return;
    const walker=document.createTreeWalker(root||document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];
    let n;
    while((n=walker.nextNode()))nodes.push(n);
    nodes.forEach(function(node){rubyizeTextNode(node,entries);});
  }

  function schedule(){
    if(scheduled)return;
    scheduled=true;
    requestAnimationFrame(function(){
      scheduled=false;
      applyFurigana(document.body);
    });
  }

  window.applyFurigana=applyFurigana;

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){
      applyFurigana(document.body);
      new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
    });
  }else{
    applyFurigana(document.body);
    new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
  }
})();