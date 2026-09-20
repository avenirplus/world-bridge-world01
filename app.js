
const reading = [
  {text:"Plastic waste is a serious problem in many cities around the world.",audio:"audio/read-01.mp3"},
  {text:"People use plastic bags, bottles, and food containers every day because they are light, cheap, and convenient.",audio:"audio/read-02.mp3"},
  {text:"However, some of these items are used only once and then thrown away.",audio:"audio/read-03.mp3"},
  {text:"When plastic is not collected properly, it can enter rivers and eventually reach the ocean.",audio:"audio/read-04.mp3"},
  {text:"Sea animals may mistake small pieces of plastic for food, and this can harm them.",audio:"audio/read-05.mp3"},
  {text:"Many governments are trying to reduce this problem.",audio:"audio/read-06.mp3"},
  {text:"Some cities charge people for plastic bags, while others ask stores to use paper or reusable materials.",audio:"audio/read-07.mp3"},
  {text:"Governments can also improve waste collection systems and teach people how to recycle correctly.",audio:"audio/read-08.mp3"},
  {text:"However, rules alone are not enough.",audio:"audio/read-09.mp3"},
  {text:"Businesses can design products that use less plastic, and customers can choose reusable bottles or shopping bags.",audio:"audio/read-10.mp3"},
  {text:"People can also pick up litter in their neighborhoods and separate waste at home.",audio:"audio/read-11.mp3"},
  {text:"To protect rivers, oceans, and animals, governments, businesses, and citizens need to work together.",audio:"audio/read-12.mp3"}
];

const oral = [
  {img:"hero.png",label:"PEOPLE",text:"People use plastic every day.",audio:"audio/oral-01.mp3"},
  {img:"story.png",label:"RIVER → OCEAN",text:"Some plastic goes into rivers and reaches the ocean.",audio:"audio/oral-02.mp3"},
  {img:"environment.png",label:"ANIMALS",text:"Sea animals can be hurt by plastic waste.",audio:"audio/oral-03.mp3"},
  {img:"government.png",label:"SOLUTIONS",text:"Governments, businesses, and people can work together to reduce the problem.",audio:"audio/oral-04.mp3"}
];

const screens = [
  {label:"Entry",img:"hero.png",ey:"WORLD 01",title:"Where Does<br>Our Plastic Go?",jp:"すてたプラスチックは、どこへ行く？",audio:"audio/01-entry.mp3",help:"今日は、とてもいい天気。",helpAudio:"audio/01-help-ja.mp3"},
  {label:"Discover",img:"hero.png",ey:"DISCOVER",title:"Something is flying...<br>Look!",jp:"何かが飛んでいます。見てみよう。",audio:"audio/02-discover.mp3",help:"見て！",helpAudio:"audio/02-help-ja.mp3"},
  {label:"Prediction",img:"hero.png",ey:"WHAT DO YOU THINK?",title:"Where will it go?",jp:"どこへ行くと思う？",choices:["川へ","海へ","どこかで消える"],correct:0},
  {label:"Story — River",img:"story.png",ey:"FOLLOW THE PLASTIC",title:"Some plastic goes<br>into rivers.",jp:"プラスチックごみの中には、川に入ってしまうものもあります。",audio:"audio/04-river.mp3",help:"川に入ってしまうものもあります。",helpAudio:"audio/04-help-ja.mp3"},
  {label:"Story — Ocean",img:"story.png",ey:"FOLLOW THE WATER",title:"Rivers carry it<br>to the ocean.",jp:"川はそれを海まで運んでいきます。",audio:"audio/05-ocean.mp3",help:"川はごみを海まで運びます。",helpAudio:"audio/05-help-ja.mp3"},
  {label:"Story — Animals",img:"environment.png",ey:"WHY?",title:"This can be a problem<br>for animals.",jp:"これは動物たちにとって問題です。",choices:["食べ物だと思うかもしれない","眠くなるから","わからない"],correct:0},
  {label:"plastic waste",img:"story.png",ey:"NEW IDEA",title:"plastic waste",jp:"使い終わって捨てられたプラスチックなどのこと。",english:"plastic + waste",audio:"audio/07-plastic-waste.mp3"},
  {label:"environment",img:"environment.png",ey:"LOOK AT THE WHOLE WORLD",title:"environment",jp:"人や動物、植物、水、空気、町など、私たちを取りまく世界。",choices:["海だけ","森だけ","みんなを取りまく世界全部"],correct:2},
  {label:"Same Idea. New English.",ey:"SAME IDEA. NEW ENGLISH.",title:"Same idea.<br>New English.",jp:"同じ意味を、少しずつ英検2級の英語へ橋渡しします。",english:"People use a lot of plastic.<br>↓<br>People produce a lot of plastic waste.",audio:"audio/09-new-english.mp3"},
  {label:"government",img:"government.png",ey:"WHO CAN HELP?",title:"government",jp:"みんなが暮らす社会のために、ルールを作ったり公共の仕事をしたりするしくみ。",tags:["roads","schools","parks","waste collection","public transport","rules"]},

  {label:"Oral Introduction",ey:"PRESENTATION",title:"First, see the whole story.",jp:"まず長文を読ませません。4枚の絵で「文章全体の世界」をつかみます。",oralIntro:true},
  {label:"Bridge 1",ey:"BRIDGE 1 — KNOWN → NEW",title:"You already know<br>most of this.",jp:"前に読めた文から、少しだけ長くします。",trackLines:[
    {text:"Some plastic goes into rivers.",audio:"audio/04-river.mp3"},
    {text:"Rivers carry it to the ocean.",audio:"audio/05-ocean.mp3"},
    {text:"Sea animals may mistake small pieces of plastic for food, and this can harm them.",audio:"audio/read-05.mp3"}
  ],note:"3文をつなぐだけ。まだ全文には行きません。"},
  {label:"Bridge 2",ey:"BRIDGE 2 — ADD ONE IDEA",title:"Who can solve<br>the problem?",jp:"今度は government から、businesses / people へ世界を広げます。",trackLines:[
    {text:"Many governments are trying to reduce this problem.",audio:"audio/read-06.mp3"},
    {text:"Governments can also improve waste collection systems and teach people how to recycle correctly.",audio:"audio/read-08.mp3"},
    {text:"However, rules alone are not enough.",audio:"audio/read-09.mp3"},
    {text:"Businesses can design products that use less plastic, and customers can choose reusable bottles or shopping bags.",audio:"audio/read-10.mp3"},
    {text:"People can also pick up litter in their neighborhoods and separate waste at home.",audio:"audio/read-11.mp3"}
  ],note:"government だけではなく、会社や一人ひとりにも役割がある。"},
  {label:"Full Reading",ey:"UNDERSTAND",title:"Now read the whole passage.",jp:"ここで初めて全文へ。音声中は、読んでいる文の色が変わります。",fullReading:true},

  {label:"Comprehension 1",ey:"COMPREHENSION — FIND IT",title:"Find the answer<br>in the text.",jp:"まずは「どこに書いてあるか」を探す問題。ヒントも根拠も見られます。",guidedQuestions:[
    {q:"1. Why can plastic waste harm sea animals?",choices:["They may mistake it for food.","It makes the ocean colder.","It stops rivers from moving."],correct:0,hint:"第1段落の最後の文を見よう。",evidence:"Sea animals may mistake small pieces of plastic for food, and this can harm them.",explain:"「食べ物と間違える → harm them」という原因と結果です。"},
    {q:"2. What can governments do?",choices:["Improve waste collection and teach recycling.","Ask animals to leave the ocean.","Stop all people from using bottles."],correct:0,hint:"第2段落の Governments can also ... を探そう。",evidence:"Governments can also improve waste collection systems and teach people how to recycle correctly.",explain:"政府の対策が2つ並んでいます。"}
  ]},
  {label:"Comprehension 2",ey:"COMPREHENSION — THINK",title:"Now connect<br>the ideas.",jp:"次は「なぜ？」と「文章全体の中心」を考えます。",guidedQuestions:[
    {q:"3. Why does the writer say, “rules alone are not enough”?",choices:["Businesses and citizens also need to act.","Rules always make plastic cheaper.","Governments do not care about recycling."],correct:0,hint:"その次の2文に注目。主語が Businesses / People に変わります。",evidence:"Businesses can ... / People can also ...",explain:"「政府だけ」から「企業・市民も」へ話が広がる合図です。"},
    {q:"4. Which is the best main idea?",choices:["Everyone has a role in reducing plastic waste.","Plastic bags are the only environmental problem.","Cities should stop using rivers."],correct:0,hint:"最終文と各段落の役割をつなげよう。",evidence:"Governments, businesses, and citizens need to work together.",explain:"細部ではなく、文章全体を一文で包む内容を選びます。"}
  ]},

  {label:"Read Aloud Practice",ey:"PRACTICE — SOUND",title:"Listen → Pause → Read aloud.",jp:"聞くだけで終わりません。短いまとまりを3回ずつ音読します。",practice:true},
  {label:"Japanese Reading Skill",ey:"PRACTICE — 国語力",title:"文章の骨組みを<br>つかむ。",jp:"英語でも国語でも、長文は「段落の役割」をつかむと読みやすくなります。",logic:true},
  {label:"Summary Bridge",ey:"BRIDGE TO SUMMARY",title:"Do not write yet.",jp:"いきなり45〜55語を書きません。まず「要約に残す3本柱」を選びます。",summaryPrep:true},
  {label:"Summary Writing",ey:"PRODUCTION — SUMMARY",title:"Now write<br>45–55 words.",jp:"問題 → 政府の対策 → 企業・市民の役割、の順にまとめます。",summaryTask:true},
  {label:"Your Idea",img:"hero.png",ey:"PRODUCTION — YOUR IDEA",title:"What can we do<br>to reduce plastic waste?",jp:"最後に自分の考え。本文を読んだあとだから、理由もつけられます。",idea:true},
  {label:"WORLD 01 COMPLETE",img:"complete.png",ey:"WORLD 01 COMPLETE",title:"You can read<br>this world now.",jp:"絵で全体をつかみ、読み、聞き、音読し、考え、要約し、自分の意見までつなげました。",tags:["plastic waste","environment","reduce","protect","government"],complete:true}
];

let page=0;
let player=null;
let sequenceToken=0;
const app=document.getElementById("app");

const ideaTextMap={
  "use fewer plastic bags":"I think we should use fewer plastic bags because they can reduce plastic waste.",
  "use a reusable bottle":"I think we should use a reusable bottle because it can reduce plastic waste.",
  "pick up litter":"I think we should pick up litter because it can protect the environment."
};
const ideaAudioMap={
  "use fewer plastic bags":"audio/13-fewer-bags.mp3",
  "use a reusable bottle":"audio/13-reusable-bottle.mp3",
  "pick up litter":"audio/13-pick-up-litter.mp3"
};

function stop(){
  sequenceToken++;
  if(player){
    player.pause();
    player.currentTime=0;
  }
  player=null;
  document.querySelectorAll(".active-read").forEach(function(x){x.classList.remove("active-read");});
}

function activate(key,on){
  const el=document.querySelector('[data-track="'+key+'"]');
  if(el) el.classList.toggle("active-read",!!on);
}

function playOne(src,key,rate){
  stop();
  const token=sequenceToken;
  activate(key,true);
  player=new Audio(src);
  player.preload="auto";
  player.playbackRate=rate||1;
  player.preservesPitch=true;
  player.onended=function(){
    if(token!==sequenceToken)return;
    activate(key,false);
  };
  player.play().catch(function(){alert("音声を再生できませんでした。もう一度押してください。");});
}

function playSequence(items,prefix,rate){
  stop();
  const token=sequenceToken;
  let i=0;
  function next(){
    if(token!==sequenceToken)return;
    document.querySelectorAll(".active-read").forEach(function(x){x.classList.remove("active-read");});
    if(i>=items.length)return;
    const key=prefix+i;
    activate(key,true);
    player=new Audio(items[i].audio);
    player.preload="auto";
    player.playbackRate=rate||1;
    player.preservesPitch=true;
    player.onended=function(){
      if(token!==sequenceToken)return;
      activate(key,false);
      i++;
      next();
    };
    player.play().catch(function(){alert("音声を再生できませんでした。");});
  }
  next();
}

function htmlChoices(s){
  if(!s.choices)return "";
  return '<div class="choices">'+s.choices.map(function(x,i){
    return '<button class="choice" onclick="answerSimple(this,'+i+','+s.correct+')">'+x+'</button>';
  }).join("")+'</div>';
}

function answerSimple(el,i,correct){
  const box=el.parentElement;
  box.querySelectorAll(".choice").forEach(function(x){x.classList.remove("selected","correct","wrong");});
  el.classList.add("selected");
  el.classList.add(i===correct?"correct":"wrong");
}

function storyboardHtml(){
  return '<div class="storyboard">'+oral.map(function(x,i){
    return '<div class="story-panel" data-track="oral'+i+'">'+
      '<img src="'+x.img+'" alt="">'+
      '<div class="story-cap"><b>'+x.label+'</b><span>'+x.text+'</span></div>'+
      '<button class="mini-audio" onclick="playOne(\''+x.audio+'\',\'oral'+i+'\',1)">🔊</button>'+
    '</div>';
  }).join("")+'</div>'+
  '<div class="track-controls"><button class="listen" onclick="playSequence(oral,\'oral\',0.92)">▶ Listen & Watch</button></div>'+
  '<p class="bridge-note">長文の前に、まず「人が使う → 川・海 → 動物 → みんなで解決」の全体像をつかむ。</p>';
}

function trackedLinesHtml(lines,prefix,note){
  return '<div class="track-list">'+lines.map(function(x,i){
    return '<div class="track-line" data-track="'+prefix+i+'">'+
      '<button class="line-audio" onclick="playOne(\''+x.audio+'\',\''+prefix+i+'\',0.92)">🔊</button>'+
      '<span>'+x.text+'</span>'+
    '</div>';
  }).join("")+'</div>'+
  '<div class="track-controls">'+
    '<button class="listen" onclick="playSequence(screens[page].trackLines,\''+prefix+'\',0.82)">▶ ゆっくり聞く</button>'+
    '<button class="listen secondary-listen" onclick="playSequence(screens[page].trackLines,\''+prefix+'\',1)">▶ 標準で聞く</button>'+
  '</div>'+(note?'<p class="bridge-note">'+note+'</p>':"");
}

function fullReadingHtml(){
  return '<div class="reading-help">音声に合わせて、今読まれている文がハイライトされます。</div>'+
    '<div class="track-controls">'+
      '<button class="listen" onclick="playSequence(reading,\'read\',0.8)">▶ 0.8× 追い読み</button>'+
      '<button class="listen secondary-listen" onclick="playSequence(reading,\'read\',1)">▶ 1.0× 標準</button>'+
    '</div>'+
    '<div class="full-reading">'+reading.map(function(x,i){
      return '<div class="track-line reading-line" data-track="read'+i+'">'+
        '<button class="line-audio" onclick="playOne(\''+x.audio+'\',\'read'+i+'\',0.9)">🔊</button>'+
        '<span>'+x.text+'</span>'+
      '</div>';
    }).join("")+'</div>';
}

function guidedQuestionsHtml(qs){
  return qs.map(function(q,qi){
    return '<div class="qcard">'+
      '<div class="qtext">'+q.q+'</div>'+
      '<button class="hint-btn" onclick="toggleHint('+qi+')">ヒントを見る</button>'+
      '<div class="hint" id="hint'+qi+'" hidden>'+q.hint+'</div>'+
      '<div class="choices">'+q.choices.map(function(x,i){
        return '<button class="choice" onclick="answerGuided(this,'+qi+','+i+','+q.correct+')">'+x+'</button>';
      }).join("")+'</div>'+
      '<div class="feedback" id="feedback'+qi+'" hidden></div>'+
    '</div>';
  }).join("");
}

function toggleHint(qi){
  const h=document.getElementById("hint"+qi);
  if(h)h.hidden=!h.hidden;
}

function answerGuided(el,qi,i,correct){
  const box=el.closest(".qcard");
  box.querySelectorAll(".choice").forEach(function(x){x.classList.remove("correct","wrong");});
  el.classList.add(i===correct?"correct":"wrong");
  const q=screens[page].guidedQuestions[qi];
  const f=document.getElementById("feedback"+qi);
  f.hidden=false;
  f.innerHTML=(i===correct?'<b>正解。</b> ':'<b>もう一度。</b> ')+
    q.explain+'<div class="evidence"><span>根拠</span>'+q.evidence+'</div>';
}

const practiceLines=[
  {audio:"audio/read-04.mp3",html:"When plastic is not collected properly, / it can enter rivers / and eventually reach the ocean."},
  {audio:"audio/read-05.mp3",html:"Sea animals may mistake / small pieces of plastic for food, / and this can harm them."},
  {audio:"audio/read-08.mp3",html:"Governments can also improve / waste collection systems / and teach people / how to recycle correctly."},
  {audio:"audio/read-12.mp3",html:"To protect rivers, oceans, and animals, / governments, businesses, and citizens / need to work together."}
];

function practiceHtml(){
  return '<div class="practice-guide"><b>1 聞く</b> → <b>2 / で区切る</b> → <b>3 まねして3回読む</b></div>'+
    practiceLines.map(function(x,i){
      return '<div class="practice-row">'+
        '<div class="practice-text">'+x.html.replaceAll(" / "," <span class=\"slash\">/</span> ")+'</div>'+
        '<div class="practice-actions">'+
          '<button class="line-audio" onclick="playOne(\''+x.audio+'\',\'practice'+i+'\',0.86)">🔊 聞く</button>'+
          '<button class="rep" data-count="0" onclick="practiceRep(this)">音読 0/3</button>'+
        '</div>'+
      '</div>';
    }).join("");
}

function practiceRep(btn){
  let n=Number(btn.dataset.count||0);
  n=Math.min(3,n+1);
  btn.dataset.count=n;
  btn.textContent="音読 "+n+"/3";
  btn.classList.toggle("done",n===3);
}

function logicHtml(){
  return '<div class="logic-intro">長文は「全部を同じ重さ」で読みません。段落ごとの役割を見ます。</div>'+
    '<div class="logic-grid">'+
      '<div class="logic-box"><b>① 問題</b><span>Plastic waste reaches rivers/oceans and can harm animals.</span></div>'+
      '<div class="logic-arrow">↓</div>'+
      '<div class="logic-box"><b>② 対策</b><span>Governments make rules, improve collection, and teach recycling.</span></div>'+
      '<div class="logic-arrow">↓</div>'+
      '<div class="logic-box"><b>③ 広がり</b><span>However, rules alone are not enough. Businesses and people also act.</span></div>'+
      '<div class="logic-arrow">↓</div>'+
      '<div class="logic-box"><b>④ 結論</b><span>Everyone needs to work together.</span></div>'+
    '</div>'+
    '<div class="language-skill"><b>国語の読み方</b><p><strong>However</strong> は「話の向きが変わる」サイン。<br>最後の文は、文章全体をまとめる結論になりやすい。</p></div>'+
    '<div class="qcard"><div class="qtext">第2段落の主な役割は？</div><div class="choices">'+
      '<button class="choice" onclick="answerLogic(this,false)">新しい問題を出す</button>'+
      '<button class="choice" onclick="answerLogic(this,true)">政府の対策を説明する</button>'+
      '<button class="choice" onclick="answerLogic(this,false)">海の動物の種類を説明する</button>'+
    '</div><div class="feedback" id="logicFeedback" hidden></div></div>';
}

function answerLogic(el,ok){
  el.parentElement.querySelectorAll(".choice").forEach(function(x){x.classList.remove("correct","wrong");});
  el.classList.add(ok?"correct":"wrong");
  const f=document.getElementById("logicFeedback");
  f.hidden=false;
  f.innerHTML=ok?"正解。段落の役割を一言で言えると、要旨・要約が作りやすくなります。":"細部ではなく、その段落が文章全体で何をしているか考えよう。";
}

function summaryPrepHtml(){
  const points=[
    {t:"Plastic waste can reach the ocean and harm animals.",ok:true},
    {t:"Plastic is light and cheap.",ok:false},
    {t:"Governments are trying to reduce the problem.",ok:true},
    {t:"Some cities have many stores.",ok:false},
    {t:"Businesses and citizens also need to act.",ok:true},
    {t:"Rivers are longer than roads.",ok:false}
  ];
  return '<div class="summary-step"><b>STEP 1</b> 要約に残す「大事な3つ」を選ぶ。</div>'+
    '<div class="main-points">'+points.map(function(p){
      return '<button class="main-point" onclick="pickMain(this,'+p.ok+')">'+p.t+'</button>';
    }).join("")+'</div>'+
    '<div class="summary-step"><b>STEP 2</b> 3本柱を順番にする。</div>'+
    '<div class="skeleton"><span>問題</span> → <span>政府の対策</span> → <span>企業・市民の役割</span></div>'+
    '<div class="summary-step"><b>STEP 3</b> 英語の出だしを使ってよい。</div>'+
    '<div class="starter">Plastic waste can ...</div>'+
    '<div class="starter">Governments are trying to ...</div>'+
    '<div class="starter">However, businesses and citizens ...</div>';
}

function pickMain(el,ok){
  el.classList.remove("point-good","point-bad");
  el.classList.add(ok?"point-good":"point-bad");
}

function summaryWritingHtml(){
  return '<div class="skeleton compact"><span>問題</span> → <span>政府</span> → <span>企業・市民</span></div>'+
    '<textarea id="summaryInput" class="summarybox" placeholder="Write 45–55 words here..." oninput="countWords()"></textarea>'+
    '<div class="wordcount" id="wordcount">0 words</div>'+
    '<details class="model"><summary>どうしても困ったらモデルを見る</summary><p>Plastic waste can reach the ocean and harm sea animals. Governments are trying to reduce the problem through rules, better waste collection, and recycling education. However, businesses and citizens must also help by using less plastic, choosing reusable items, picking up litter, and separating waste at home.</p></details>';
}

function countWords(){
  const el=document.getElementById("summaryInput");
  const out=document.getElementById("wordcount");
  if(!el||!out)return;
  const n=el.value.trim()?el.value.trim().split(/\s+/).length:0;
  out.textContent=n+" words"+(n>=45&&n<=55?" ✓":"");
  out.classList.toggle("good-count",n>=45&&n<=55);
}

function ideaHtml(){
  return '<div class="small">STEP 1　行動を選ぶ</div>'+
    '<select class="input" id="act" onchange="updateIdea()">'+
      '<option>use fewer plastic bags</option>'+
      '<option>use a reusable bottle</option>'+
      '<option>pick up litter</option>'+
    '</select>'+
    '<div class="small">STEP 2　because の理由まで読む</div>'+
    '<div class="english" id="idea">'+ideaTextMap["use fewer plastic bags"]+'</div>'+
    '<button class="listen" onclick="playIdea()">🔊 Listen</button>';
}

function updateIdea(){
  const act=document.getElementById("act");
  const idea=document.getElementById("idea");
  if(act&&idea)idea.textContent=ideaTextMap[act.value]||"";
}
function playIdea(){
  const act=document.getElementById("act");
  if(act)playOne(ideaAudioMap[act.value],"idea",0.92);
}

function bodyHtml(s){
  let h="";
  if(s.oralIntro)h+=storyboardHtml();
  if(s.trackLines)h+=trackedLinesHtml(s.trackLines,"bridge",s.note);
  if(s.fullReading)h+=fullReadingHtml();
  if(s.english)h+='<div class="english">'+s.english+"</div>";
  if(s.tags)h+='<div class="tags">'+s.tags.map(function(x){return '<span class="tag">'+x+"</span>";}).join("")+"</div>";
  h+=htmlChoices(s);
  if(s.guidedQuestions)h+=guidedQuestionsHtml(s.guidedQuestions);
  if(s.practice)h+=practiceHtml();
  if(s.logic)h+=logicHtml();
  if(s.summaryPrep)h+=summaryPrepHtml();
  if(s.summaryTask)h+=summaryWritingHtml();
  if(s.idea)h+=ideaHtml();
  if(s.audio)h+='<button class="listen" onclick="playOne(\''+s.audio+'\',\'single\',0.92)">🔊 Listen</button>';
  if(s.help)h+='<details class="helper"><summary>▱ 日本語HELP</summary><div>'+s.help+'</div>'+(s.helpAudio?'<button class="listen" onclick="playOne(\''+s.helpAudio+'\',\'help\',1)">🔊 日本語を聞く</button>':"")+"</details>";
  return h;
}

function render(){
  stop();
  const s=screens[page];
  const total=screens.length;
  const pct=(page+1)/total*100;
  let html='<header class="top"><div class="topline">'+
    '<button class="back" onclick="go(-1)" '+(page===0?"disabled":"")+'>‹</button>'+
    '<span>WORLD BRIDGE</span><span>'+(page+1)+"/"+total+'</span></div>'+
    '<div class="progress"><i style="width:'+pct+'%"></i></div></header>';
  html+='<section class="screen '+(s.complete?"complete ":"")+(page===0?"center":"")+'">';
  if(s.img)html+='<div class="visual"><img src="'+s.img+'" alt=""></div>';
  html+='<div class="card"><div class="eyebrow">'+s.ey+'</div><h1 class="title">'+s.title+'</h1>';
  if(s.jp)html+='<p class="jp">'+s.jp+"</p>";
  html+=bodyHtml(s);
  html+="</div>";
  html+='<div class="bottom">';
  if(page>0)html+='<button class="nav secondary" onclick="go(-1)">戻る</button>';
  if(page===0)html+='<button class="nav" onclick="go(1)">はじめる →</button>';
  else if(page===total-1)html+='<button class="nav" onclick="page=0;render()">もう一度見る</button>';
  else html+='<button class="nav" onclick="go(1)">次へ →</button>';
  html+="</div></section>";
  app.innerHTML=html;
}

function go(n){
  page=Math.max(0,Math.min(screens.length-1,page+n));
  render();
  window.scrollTo(0,0);
}

render();
