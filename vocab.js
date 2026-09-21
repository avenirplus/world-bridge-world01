// Vocabulary bridge layer for WORLD 01
const vocabBridgeWords = [
  {word:'convenient',img:'hero.png',icon:'👍',context:'Plastic is convenient.',choices:['便利な','危険な','高価な'],correct:0,en:'easy and useful for you',ja:'便利な・都合のよい',audio:'audio/vocab-convenient.mp3'},
  {word:'waste',img:'story.png',icon:'🗑️',context:'Some plastic becomes waste.',choices:['ごみ・廃棄物','海流','商品'],correct:0,en:'things that are no longer wanted and are thrown away',ja:'ごみ・廃棄物',audio:'audio/vocab-waste.mp3'},
  {word:'properly',img:'story.png',icon:'✅',context:'Plastic is not collected properly.',choices:['正しく・適切に','急に','たくさん'],correct:0,en:'in the right or correct way',ja:'正しく・適切に',audio:'audio/vocab-properly.mp3'},
  {word:'eventually',img:'story.png',icon:'➡️',context:'It eventually reaches the ocean.',choices:['最終的には','すぐに','たぶん'],correct:0,en:'in the end, after some time',ja:'最終的には・やがて',audio:'audio/vocab-eventually.mp3'},
  {word:'mistake A for B',img:'environment.png',icon:'🤔',context:'Animals may mistake plastic for food.',choices:['AをBと間違える','AをBから守る','AをBに運ぶ'],correct:0,en:'to wrongly think that A is B',ja:'AをBと間違える',audio:'audio/vocab-mistake.mp3'},
  {word:'harm',img:'environment.png',icon:'⚠️',context:'Plastic can harm sea animals.',choices:['傷つける・害を与える','集める','再利用する'],correct:0,en:'to hurt or damage someone or something',ja:'傷つける・害を与える',audio:'audio/vocab-harm.mp3'},
  {word:'reduce',img:'government.png',icon:'↘️',context:'We need to reduce plastic waste.',choices:['減らす','増やす','運ぶ'],correct:0,en:'to make something smaller or less',ja:'減らす',audio:'audio/vocab-reduce.mp3'},
  {word:'reusable',img:'hero.png',icon:'🔁',context:'People can choose reusable bags.',choices:['何度も使える','一度しか使えない','自然に消える'],correct:0,en:'able to be used again',ja:'再利用できる・何度も使える',audio:'audio/vocab-reusable.mp3'},
  {word:'separate',img:'government.png',icon:'♻️',context:'People separate waste at home.',choices:['分ける','混ぜる','捨てない'],correct:0,en:'to divide things into different groups',ja:'分ける・分別する',audio:'audio/vocab-separate.mp3'},
  {word:'citizen',img:'government.png',icon:'👥',context:'Citizens also need to act.',choices:['市民・国民','会社','動物'],correct:0,en:'a person who belongs to a country or community',ja:'市民・国民',audio:'audio/vocab-citizen.mp3'}
];
let vocabBridgeIndex = 0;

oral.splice(0, oral.length,
  {img:'hero.png',label:'USE',text:'Plastic is convenient. People use it every day.',audio:'audio/oral-v2-01.mp3'},
  {img:'story.png',label:'WASTE',text:'Some plastic becomes waste and is not collected properly.',audio:'audio/oral-v2-02.mp3'},
  {img:'story.png',label:'RIVER → OCEAN',text:'It eventually reaches rivers and the ocean.',audio:'audio/oral-v2-03.mp3'},
  {img:'environment.png',label:'ANIMALS',text:'Animals may mistake plastic for food. It can harm them.',audio:'audio/oral-v2-04.mp3'},
  {img:'government.png',label:'SOLUTIONS',text:'Governments and citizens can reduce waste by using reusable items and separating trash.',audio:'audio/oral-v2-05.mp3'}
);

const oralIndex = screens.findIndex(function(s){return s.oralIntro;});
if(oralIndex >= 0 && !screens.some(function(s){return s.vocabLab;})){
  screens[oralIndex].title='First, see the whole story.';
  screens[oralIndex].jp='まず絵とやさしい英語で全体をつかみます。難しい語はここでは「意味を予想」するだけでOK。';
  screens.splice(oralIndex+1,0,
    {label:'Word Lab',ey:'VOCABULARY BRIDGE',title:'Guess → Check → Learn',jp:'オーラルイントロで出会った語を、絵と文脈から予想してから意味を確定します。',vocabLab:true},
    {label:'Word Check',ey:'VOCABULARY RETRIEVAL',title:'Can you remember the words?',jp:'英英定義や日本語から、今覚えた語を取り出します。',vocabCheck:true}
  );
}

function vocabBridgeFind(word){
  return vocabBridgeWords.find(function(v){return v.word===word;});
}

function vocabBridgeLabHtml(){
  const v=vocabBridgeWords[vocabBridgeIndex];
  return '<div class="vocab-progress">'+(vocabBridgeIndex+1)+' / '+vocabBridgeWords.length+'</div>'+
    '<div class="vocab-card">'+
      '<img class="vocab-art" src="'+v.img+'" alt="">'+
      '<div class="vocab-icon">'+v.icon+'</div>'+
      '<div class="vocab-word">'+v.word+'</div>'+
      '<div class="vocab-context">'+v.context+'</div>'+
      '<div class="small">絵と文から、まず意味を予想</div>'+
      '<div class="choices">'+shuffledChoices(v.choices,v.correct).map(function(o){return '<button class="choice" onclick="vocabBridgeGuess(this,'+o.ok+')">'+o.text+'</button>';}).join('')+'</div>'+
      '<div class="vocab-reveal" id="vocabReveal" hidden>'+
        '<div class="def-label">Easy English</div><div class="def-en">'+v.en+'</div>'+
        '<div class="def-label">日本語</div><div class="def-ja">'+v.ja+'</div>'+
        '<button class="listen" onclick="playOne(\''+v.audio+'\',\'vocab\',0.88)">🔊 '+v.word+'</button>'+
      '</div>'+
    '</div>'+
    '<div class="vocab-nav">'+
      '<button class="nav secondary" onclick="vocabBridgeMove(-1)" '+(vocabBridgeIndex===0?'disabled':'')+'>← 前の語</button>'+
      '<button class="nav" onclick="vocabBridgeMove(1)">'+(vocabBridgeIndex===vocabBridgeWords.length-1?'最初から':'次の語 →')+'</button>'+
    '</div>';
}

function vocabBridgeGuess(el,ok){
  el.parentElement.querySelectorAll('.choice').forEach(function(x){x.classList.remove('correct','wrong');});
  el.classList.add(ok?'correct':'wrong');
  const r=document.getElementById('vocabReveal');
  if(r)r.hidden=false;
}

function vocabBridgeMove(n){
  if(n>0 && vocabBridgeIndex===vocabBridgeWords.length-1)vocabBridgeIndex=0;
  else vocabBridgeIndex=Math.max(0,Math.min(vocabBridgeWords.length-1,vocabBridgeIndex+n));
  render();
}

function vocabBridgeCheckHtml(){
  const checks=[
    {q:'to make something smaller or less',a:'reduce',opts:['reduce','harm','separate']},
    {q:'able to be used again',a:'reusable',opts:['properly','reusable','eventually']},
    {q:'AをBと間違える',a:'mistake A for B',opts:['mistake A for B','separate','reduce']},
    {q:'in the end, after some time',a:'eventually',opts:['citizen','eventually','waste']},
    {q:'市民・国民',a:'citizen',opts:['harm','waste','citizen']}
  ];
  return '<div class="vocab-check-note">定義 → 単語を思い出す。本文へ進む前の最終確認です。</div>'+checks.map(function(q){
    return '<div class="qcard"><div class="qtext">'+q.q+'</div><div class="choices">'+shuffleArray(q.opts).map(function(x){
      const safeX=x.replace(/'/g,"\\'");
      const safeA=q.a.replace(/'/g,"\\'");
      return '<button class="choice" onclick="vocabBridgeRecall(this,\''+safeX+'\',\''+safeA+'\')">'+x+'</button>';
    }).join('')+'</div></div>';
  }).join('');
}

function vocabBridgeRecall(el,ans,correct){
  el.parentElement.querySelectorAll('.choice').forEach(function(x){x.classList.remove('correct','wrong');});
  el.classList.add(ans===correct?'correct':'wrong');
}

function vocabBridgeDecorate(text){
  let out=text;
  const pairs=[
    ['mistake plastic for food','mistake A for B'],
    ['eventually','eventually'],['properly','properly'],['reusable','reusable'],
    ['separate','separate'],['citizens','citizen'],['citizen','citizen'],
    ['reduce','reduce'],['waste','waste'],['harm','harm']
  ];
  pairs.forEach(function(p){
    const needle=p[0];
    const word=p[1];
    out=out.split(needle).join('<button class="vocab-inline" onclick="vocabBridgeTip(\''+word+'\')">'+needle+'</button>');
  });
  return out;
}

function vocabBridgeTip(word){
  const v=vocabBridgeFind(word);
  if(!v)return;
  let box=document.getElementById('vocabTip');
  if(!box){box=document.createElement('div');box.id='vocabTip';box.className='vocab-tip';document.body.appendChild(box);}
  box.innerHTML='<button class="tip-close" onclick="this.parentElement.remove()">×</button>'+
    '<img class="tip-art" src="'+v.img+'" alt=""><div class="tip-icon">'+v.icon+'</div><b>'+v.word+'</b>'+
    '<div class="tip-en">'+v.en+'</div><div class="tip-ja">'+v.ja+'</div>'+
    '<button class="line-audio" onclick="playOne(\''+v.audio+'\',\'tip\',0.9)">🔊</button>';
}

const vocabBridgeOldBodyHtml=bodyHtml;
bodyHtml=function(s){
  if(s.vocabLab)return vocabBridgeLabHtml();
  if(s.vocabCheck)return vocabBridgeCheckHtml();
  return vocabBridgeOldBodyHtml(s);
};

trackedLinesHtml=function(lines,prefix,note){
  return '<div class="track-list">'+lines.map(function(x,i){return '<div class="track-line" data-track="'+prefix+i+'"><button class="line-audio" onclick="playOne(\''+x.audio+'\',\''+prefix+i+'\',0.92)">🔊</button><span>'+vocabBridgeDecorate(x.text)+'</span></div>';}).join('')+'</div>'+
    '<div class="track-controls"><button class="listen" onclick="playSequence(screens[page].trackLines,\''+prefix+'\',0.82)">▶ ゆっくり聞く</button><button class="listen secondary-listen" onclick="playSequence(screens[page].trackLines,\''+prefix+'\',1)">▶ 標準で聞く</button></div>'+
    (note?'<p class="bridge-note">'+note+'</p>':'');
};

fullReadingHtml=function(){
  return '<div class="reading-help">音声に合わせて、今読まれている文がハイライトされます。色付き語はタップで意味を再確認できます。</div>'+
    '<div class="track-controls"><button class="listen" onclick="playSequence(reading,\'read\',0.8)">▶ 0.8× 追い読み</button><button class="listen secondary-listen" onclick="playSequence(reading,\'read\',1)">▶ 1.0× 標準</button></div>'+
    '<div class="full-reading">'+reading.map(function(x,i){return '<div class="track-line reading-line" data-track="read'+i+'"><button class="line-audio" onclick="playOne(\''+x.audio+'\',\'read'+i+'\',0.9)">🔊</button><span>'+vocabBridgeDecorate(x.text)+'</span></div>';}).join('')+'</div>';
};

render();