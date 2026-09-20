
// Paragraph-by-paragraph bridge for WORLD 01
const paragraphUnits = [
  {
    n:1,
    title:"What happens to plastic?",
    img:"environment.png",
    vocab:["waste","properly","eventually","mistake A for B","harm"],
    from:0,to:5,
    q:[
      {q:"Why can plastic become a problem for sea animals?",choices:["They may mistake it for food.","It makes the ocean colder.","It stops rivers from moving."],correct:0,hint:"最後の文を見よう。",evidence:"Sea animals may mistake small pieces of plastic for food, and this can harm them.",explain:"原因 → 結果をつかむ問題です。"},
      {q:"What happens when plastic is not collected properly?",choices:["It can enter rivers and reach the ocean.","It becomes food immediately.","It always disappears."],correct:0,hint:"When plastic is not collected properly ... を探そう。",evidence:"When plastic is not collected properly, it can enter rivers and eventually reach the ocean.",explain:"条件と結果をつなげます。"}
    ],
    practice:[3,4]
  },
  {
    n:2,
    title:"What can governments do?",
    img:"government.png",
    vocab:["reduce","reusable","properly"],
    from:5,to:9,
    q:[
      {q:"What are governments trying to do?",choices:["Reduce the problem.","Make more plastic waste.","Move animals to cities."],correct:0,hint:"第1文の reduce に注目。",evidence:"Many governments are trying to reduce this problem.",explain:"段落の中心になる文です。"},
      {q:"Which action is mentioned?",choices:["Improve waste collection and teach recycling.","Build more airports.","Stop all shopping."],correct:0,hint:"Governments can also ... を探そう。",evidence:"Governments can also improve waste collection systems and teach people how to recycle correctly.",explain:"具体例を本文から探す問題です。"}
    ],
    practice:[5,7]
  },
  {
    n:3,
    title:"Who else needs to act?",
    img:"hero.png",
    vocab:["reusable","separate","citizen"],
    from:9,to:12,
    q:[
      {q:"Who also needs to act?",choices:["Businesses and citizens.","Only sea animals.","Only tourists."],correct:0,hint:"主語に注目しよう。",evidence:"Businesses can ... / People can also ...",explain:"政府から企業・市民へ話が広がっています。"},
      {q:"What is the writer's conclusion?",choices:["Everyone needs to work together.","Only governments matter.","Plastic is always useful."],correct:0,hint:"最後の文を見よう。",evidence:"Governments, businesses, and citizens need to work together.",explain:"段落だけでなく、文章全体の結論につながる文です。"}
    ],
    practice:[9,11]
  }
];

(function rebuildParagraphFlow(){
  const vocabCheckIndex=screens.findIndex(function(s){return s.vocabCheck;});
  const fullIndex=screens.findIndex(function(s){return s.fullReading;});
  if(vocabCheckIndex<0||fullIndex<0)return;

  // Remove the old bridge/comprehension/practice sequence between Word Check and Full Reading.
  screens.splice(vocabCheckIndex+1, fullIndex-(vocabCheckIndex+1));

  const fresh=[];
  paragraphUnits.forEach(function(u){
    fresh.push(
      {label:"Paragraph "+u.n+" Preview",ey:"BRIDGE — PARAGRAPH "+u.n,title:u.title,jp:"まず絵と、さっき覚えた単語で段落の内容を予想します。",paraPreview:u},
      {label:"Paragraph "+u.n+" Reading",ey:"LISTEN & READ",title:"Read only this paragraph.",jp:"今はこの段落だけ。読んでいる文が色で追えます。",paraRead:u},
      {label:"Paragraph "+u.n+" Check",ey:"COMPREHENSION",title:"Find the answer in this paragraph.",jp:"ヒント → 本文の根拠 → 解説の順で確認できます。",paraComp:u},
      {label:"Paragraph "+u.n+" Practice",ey:"READ ALOUD",title:"Listen → Chunk → Read ×3",jp:"意味のまとまりで区切って、音読を3回。",paraPractice:u}
    );
  });
  screens.splice.apply(screens,[vocabCheckIndex+1,0].concat(fresh));

  const full=screens.find(function(s){return s.fullReading;});
  if(full){
    full.title="Now connect all 3 paragraphs.";
    full.jp="3つの段落を練習したあとで、初めて全文を通して読みます。";
  }
})();

function paraWordsHtml(words){
  return '<div class="para-vocab">'+words.map(function(w){
    const v=vocabBridgeFind(w);
    if(!v)return "";
    return '<button class="para-word" onclick="vocabBridgeTip(\''+w.replace(/'/g,"\\'")+'\')">'+
      '<span>'+v.icon+'</span><b>'+v.word+'</b><small>'+v.ja+'</small></button>';
  }).join("")+'</div>';
}

function paraPreviewHtml(u){
  return '<div class="para-scene">'+
    '<img src="'+u.img+'" alt="">'+
    '<div class="para-scene-copy"><b>Think first</b><span>'+u.title+'</span></div>'+
  '</div>'+
  '<p class="bridge-note">この段落で出てくる語を確認。意味を忘れたらタップ。</p>'+
  paraWordsHtml(u.vocab)+
  '<div class="prediction-box"><b>予想してみよう</b><p>'+(
    u.n===1 ? "プラスチックは、どこへ行って何が起こりそう？" :
    u.n===2 ? "政府は、この問題に何ができそう？" :
    "政府だけで十分？ ほかに誰ができる？"
  )+'</p></div>';
}

function paraReadHtml(u){
  const items=reading.slice(u.from,u.to);
  return '<div class="track-controls">'+
    '<button class="listen" onclick="playSequence(reading.slice('+u.from+','+u.to+'),\'p'+u.n+'\',0.8)">▶ 0.8×</button>'+
    '<button class="listen secondary-listen" onclick="playSequence(reading.slice('+u.from+','+u.to+'),\'p'+u.n+'\',1)">▶ 1.0×</button>'+
  '</div>'+
  '<div class="track-list">'+items.map(function(x,i){
    return '<div class="track-line reading-line" data-track="p'+u.n+i+'">'+
      '<button class="line-audio" onclick="playOne(\''+x.audio+'\',\'p'+u.n+i+'\',0.9)">🔊</button>'+
      '<span>'+vocabBridgeDecorate(x.text)+'</span></div>';
  }).join("")+'</div>'+
  '<p class="bridge-note">わからない単語は色付き部分をタップ。今は「全部訳す」より、話の流れをつかむ。</p>';
}

function paraCompHtml(u){
  return u.q.map(function(q,qi){
    return '<div class="qcard">'+
      '<div class="qtext">'+q.q+'</div>'+
      '<button class="hint-btn" onclick="paraHint(this)">ヒントを見る</button>'+
      '<div class="hint" hidden>'+q.hint+'</div>'+
      '<div class="choices">'+q.choices.map(function(x,i){
        return '<button class="choice" onclick="paraAnswer(this,'+i+','+q.correct+','+JSON.stringify(q.evidence)+','+JSON.stringify(q.explain)+')">'+x+'</button>';
      }).join("")+'</div>'+
      '<div class="feedback" hidden></div>'+
    '</div>';
  }).join("");
}

function paraHint(btn){
  const h=btn.nextElementSibling;
  if(h)h.hidden=!h.hidden;
}
function paraAnswer(el,i,correct,evidence,explain){
  const box=el.closest(".qcard");
  box.querySelectorAll(".choice").forEach(function(x){x.classList.remove("correct","wrong");});
  el.classList.add(i===correct?"correct":"wrong");
  const f=box.querySelector(".feedback");
  f.hidden=false;
  f.innerHTML=(i===correct?"<b>正解。</b> ":"<b>もう一度本文へ。</b> ")+explain+
    '<div class="evidence"><span>本文の根拠</span>'+evidence+'</div>';
}

function chunkText(text){
  return text
    .replace(", "," / ")
    .replace(" and "," / and ")
    .replace(" because "," / because ")
    .replace(" when "," / when ");
}
function paraPracticeHtml(u){
  return '<div class="practice-guide"><b>1 聞く</b> → <b>2 / で区切る</b> → <b>3 まねして3回</b></div>'+
    u.practice.map(function(idx,pi){
      const x=reading[idx];
      return '<div class="practice-row" data-track="pp'+u.n+pi+'">'+
        '<div class="practice-text">'+chunkText(x.text).replaceAll(" / "," <span class=\\"slash\\">/</span> ")+'</div>'+
        '<div class="practice-actions">'+
          '<button class="line-audio" onclick="playOne(\''+x.audio+'\',\'pp'+u.n+pi+'\',0.86)">🔊 聞く</button>'+
          '<button class="rep" data-count="0" onclick="practiceRep(this)">音読 0/3</button>'+
        '</div></div>';
    }).join("");
}

const paragraphOldBodyHtml=bodyHtml;
bodyHtml=function(s){
  if(s.paraPreview)return paraPreviewHtml(s.paraPreview);
  if(s.paraRead)return paraReadHtml(s.paraRead);
  if(s.paraComp)return paraCompHtml(s.paraComp);
  if(s.paraPractice)return paraPracticeHtml(s.paraPractice);
  return paragraphOldBodyHtml(s);
};

render();
