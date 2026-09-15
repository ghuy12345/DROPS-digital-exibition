(function(){
  "use strict";
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

  /* ------------------------------------------------------------
     Deck A, the guide. Every line below is from the final exhibition
     copy document; nothing is added, summarised or invented.
     ------------------------------------------------------------ */
  /* Drop the photographs into images/guide/ using exactly these filenames and
     they appear automatically. Until a file exists the slide shows a neutral
     placeholder naming the file it wants, so nothing breaks while the picture
     research is still open. */
  var GUIDE = [
    {short:"Introduction", loc:"", title:"Exhibition Guide",
     img:"images/guide/introduction.jpg",
     body:["<em class='lead'>Where Justice Lives</em> is an act of memory, defiance, and solidarity with the women and girls of Afghanistan.",
            "It brings the record of the People’s Tribunal for the Women of Afghanistan into a public space of encounter: a place to listen, to look closely, and to remain with what has been witnessed.",
            "Since returning to power in August 2021, the Taliban have imposed an increasingly systematic regime of restrictions on women and girls. More than 150 decrees and laws now reach into nearly every part of daily life: education, work, movement, healthcare, dress, voice, and public participation.",
            "The People’s Tribunal has described these conditions as a crime against humanity—specifically, gender persecution under the Rome Statute.",
            "<b>What does this mean?</b>",
            "Gender persecution is the intentional and severe denial of fundamental rights because of a person’s gender. When girls are barred from education beyond Grade 6; when women cannot work, travel freely, access healthcare without a male guardian, or raise their voices in public—these are not isolated restrictions. They form a system of exclusion.",
            "For Afghan women and girls, this system has shaped life for the past five years.",
            "But this is not only a story of what has been taken away. It is also a story of what remains: women who testify, protest, organize, create, document, care for one another, and refuse to disappear.",
            "Through art, images, sound, documents, research, and the words of women inside Afghanistan, <em>Where Justice Lives</em> carries the Tribunal’s record beyond the hearing room. It places legal evidence beside lived experience, and memory beside action.",
            "The exhibition asks us not only to see the scale of this injustice, but to consider what it means to witness it—and what responsibility witnessing carries.",
            "<pull>The suffering and success of women in every corner of the world concerns us all. Solidarity knows no borders.”"],
     by:"— An activist living Afghanistan"},

    {short:"The Struggle in Six Words", loc:"", title:"The Struggle in Six Words",
     img:"images/guide/six-words.jpg",
     body:["The book “Where Justice Lives” holds moments from the People’s Tribunal for the Women of Afghanistan: grief, courage, testimony, and the difficult work of healing.",
            "Its images remind us that accountability is not only a legal process. It is also a public and human one. The Tribunal established a vital evidentiary and legal record, but its force depends on what follows the judgment: how its findings travel, resonate, and shape public conversation, policy, and collective action.",
            "<em>The book</em> carries this record through the accordion book beyond the courtroom and into shared public space — inviting visitors to encounter each image, and through it, the continuing questions of justice, gender persecution, and accountability.",
            "The cover of the book is a painting by Leeda Totakhail using contemporary Islamic art that blends Arabic calligraphy, traditional motifs, and modern visual storytelling to evoke Afghan women’s struggle for justice, freedom, equality, women’s rights, bodily autonomy, and the right to work.",
            "Taken from the Tribunal’s judgment, these six words are woven into the calligraphy — transforming its language of accountability into a visual call for women’s enduring resistance."],
     by:"Cover by <b>Leeda Totakhail</b>, an artist in Afghanistan · Photographs by <b>Meha Desai</b>"},

    {short:"Erasure Rendered Visible", loc:"Main Gallery, left and right walls",
     title:"Erasure Rendered Visible",
     img:"images/guide/erasure-rendered-visible.jpg",
     body:["Two bodies of photographs place the gender persecution of Afghan women and girls in historical context.",
            "Five photographs by Mariam Alimi recall the years of Afghanistan’s democratic period, from 2001 to 2021, when women and girls inhabited public, professional, educational, and everyday life with greater freedom. Across from them, four photographs by Kiana Hayeri document life under Taliban rule since their return to power in 2021, revealing the profound restrictions now imposed on women and girls.",
            "Together, these images are not simple before-and-afters. They hold two realities side by side: what was possible, what has been taken away, and what Afghan women are fighting for under the Taliban."],
     by:"Photographs by <b>Mariam Alimi</b> and <b>Kiana Hayeri</b>."},

    {short:"The Power in Bearing Witness", loc:"Main Gallery, centre", title:"The Power in Bearing Witness",
     img:"images/guide/bearing-witness.jpg",
     body:["This photographic scroll traces the public hearings of the People’s Tribunal for the Women of Afghanistan, held in Madrid in October 2025, and the delivery of its final judgment in The Hague that December. The Tribunal affirmed what Afghan human-rights defenders had long made clear: that the Taliban’s crimes against women and girls constitute gender persecution under the Rome Statute.",
            "These images follow more than the proceedings. They reveal the work that makes justice possible: gathering testimony, documenting evidence, and creating space for truth, recognition, and healing.",
            "Together, they show how Afghan civil society through strength, determination, and collective labor brought the experiences of women and girls before an international tribunal. They trace a process in which testimony becomes evidence, evidence becomes a record, and that record becomes a public demand for justice.",
            "The Tribunal’s judgment now stands as a powerful resource for Afghan civil society to strengthen its advocacy and sustain the call for accountability."],
     by:"Photographs by <b>Meha Desai</b>"},

    {short:"In Their Own Words", loc:"Main Gallery",
     title:"In Their Own Words: Messages from Afghanistan",
     img:"images/guide/in-their-own-words.jpg",
     body:["Placed among the photographs, nine messages from women across Afghanistan speak directly to the world.",
            "They emerge from within a system of gender persecution that reaches into every part of life: the right to learn, to work and earn an income, to move freely without a male guardian, to speak in public, and to take part in decisions that shape their country.",
            "But these voices are not only records of what has been taken away. They are acts of resistance. Afghan women continue to organize, speak out, and insist on their place in public life despite every effort to erase them.",
            "Their message is also a call for solidarity. They ask the world not to look away, but to listen, remain engaged, and stand with Afghan women as they reclaim their rights, freedoms, and dignity."]},

    {short:"Entering the Conversation", loc:"Graffiti Room", title:"Entering the Conversation",
     img:"images/guide/entering-the-conversation.jpg",
     body:["Before you leave, we invite you to pause.",
            "What did you see? What did you feel? What will you carry with you from <em>Where Justice Lives</em>?",
            "Write a thought, a question, or a reflection. We invite you to leave a message of solidarity for the women and girls of Afghanistan. Make a commitment to listen, to speak, to support their movement or share an idea for how we might widen the space in which justice lives."]},

    {short:"Echoes of Erasure", loc:"Basement", title:"Echoes of Erasure",
     img:"images/guide/echoes-of-erasure.jpg",
     audio:"audio/sounds-from-kabul.mp3",
     body:["Under Taliban laws, women are no longer equal to men. Girls are barred from education beyond Grade 6. Child marriage is allowed. And, domestic abuse is permissible.",
            "Since August 2021, the Taliban have issued more than 150 decrees, policies, and laws reaching into every part of women’s lives — public and private.",
            "Each hanging strip in this installation carries one of these measures. Read together, they form a cumulative record of gender persecution: not a series of separate prohibitions, but an interlocking system of subordination, control, and exclusion.",
            "Alongside the installation is a soundscape built from recordings made by DROPS on the streets of Kabul in July 2026. It holds the rhythms of public life: traffic, footsteps, commerce, movement, conversation. But listen closely. Across the recording, a woman’s voice is heard only once!",
            "Together, the suspended laws and the sound of the street make oppression both visible and audible — showing how exclusion moves from the written word into everyday life."],
     after:{2:"edicts", 3:"player"},
     by:"Field recordings: <b>DROPS Country Team</b> · Sound design: <b>Designers of Record</b>"}
  ];

  /* ------------------------------------------------------------
     Deck B, photograph captions, verbatim from Side B, plus the
     credits block exactly as listed.
     ------------------------------------------------------------ */
  var CAPTIONS = [
    {n:"01", place:"Kabul Afghanistan, 2013, Esteqlal High School",
     text:"A young woman performing at a concert at Esteqlal High School in Kabul. Taliban laws now prohibit women from singing in public while restricting their voices from being heard outside the home.",
     by:"Mariam Alimi"},
    {n:"02", place:"Ghor, 2015",
     text:"A young girl reads to her class in Ghor province. Today, Afghanistan is the only country in the world where girls are barred from both secondary and higher education. Girls may attend school only through Grade 6. Since 2021, more than 2.6 million girls have been denied the chance to continue their education.",
     by:"Mariam Alimi"},
    {n:"03", place:"Kabul, April 2011",
     text:"A boxing coach trains with his student in Kabul. From 2001 to 2021, Afghan women and girls claimed new space in sport — on cricket pitches, football fields, boxing rings, volleyball courts, and martial-arts mats. Since returning to power, the Taliban have barred all national women’s teams, closing down arenas where women had built skill, community, confidence, and public presence.",
     by:"Mariam Alimi"},
    {n:"04", place:"Kabul, 2013",
     text:"A Loya Jirga, or grand national assembly, convenes in Kabul. Rooted in Afghan cultural and political tradition, a Loya Jirga brings together representatives from communities across the country to deliberate questions of profound national importance. It is a space of collective counsel, where different voices meet to consider the future they share.",
     by:"Mariam Alimi"},
    {n:"05", place:"Kabul, July 2021",
     text:"Dr. Soheila Siddiq conducts patient checkups in Kabul. Since the Taliban’s return to power in August 2021, women’s access to healthcare has narrowed with alarming speed. Restrictions on movement, the exclusion of women from medical education, and deepening poverty have made it increasingly difficult for women and girls to seek care. At the same time, Afghanistan faces a growing shortage of female health professionals—leaving many women without safe, accessible, and dignified medical support.",
     by:"Mariam Alimi"},
    {n:"06", place:"Kabul, 28 February 2024",
     text:"Rahila, 20, Yalda, 18, and Zeinab, 14, work in a sewing workshop in western Kabul. Zeinab was about to enter Grade 7 when girls were barred from secondary school. She now sews school uniforms for younger girls who are still permitted to attend.",
     by:"Kiana Hayeri"},
    {n:"07", place:"Kabul, 17 February 2024",
     text:"At a private institute in western Kabul, around 700 teenage girls study an American curriculum in English. The school operates with local Taliban acquiescence, but students cannot receive an official Afghan education certificate or continue to university. Girls remain barred from secondary school and women from university.",
     by:"Kiana Hayeri"},
    {n:"08", place:"Jalalabad, Nangarhar, 12 February 2024",
     text:"Muska, 14, had recently returned from Pakistan, where she attended school. In Afghanistan, she could no longer continue her education. Facing severe economic hardship, her family accepted a marriage offer from their landlord’s son in exchange for a well and solar panels.",
     quote:"I’d rather live in Pakistan, where I could at least pursue my education.", by:"Kiana Hayeri"},
    {n:"09", place:"Kabul, 6 February 2024",
     text:"Wedding-dress mannequins stand with their heads covered. Under Taliban restrictions, shopkeepers are forbidden from displaying the faces of female mannequins. Images of women have also been erased or covered across advertisements and other public displays.",
     by:"Kiana Hayeri"},
    {kind:"credits", short:"Credits"}
  ];

  function kicker(c){ return "Photograph " + c.n; }

  /* Which room each photograph hangs in: photographs 01-09 are the
     Hayeri and Alimi walls of entry 2, Erasure Rendered Visible.
     Indices point into GUIDE. */
  var ROOM_OF = {"01":2,"02":2,"03":2,"04":2,"05":2,"06":2,"07":2,"08":2,"09":2};

  /* Photographs live in images/photographs/ named by plate number,
     01.jpg through 09.jpg. Same fallback as the guide slides. */
  CAPTIONS.forEach(function(c){
    if(c.n) c.img = "images/photographs/"+c.n+".jpg";
  });

  var CAPTION_INDEX = {};
  CAPTIONS.forEach(function(c,k){ if(c.n) CAPTION_INDEX[c.n] = k; });

  function platesIn(guideIndex){
    return CAPTIONS.filter(function(c){ return c.n && ROOM_OF[c.n]===guideIndex; });
  }

  /* ---------------- builders ---------------- */
  function figHTML(num, caption, img, alt){
    return '<div class="fig">'+
      (img ? '<img src="'+esc(img)+'" alt="'+esc(alt||"")+'" loading="lazy">' : '')+
      '<div class="slot">'+
        (num ? '<b>'+esc(num)+'</b>' : '')+
        (caption ? '<span>'+esc(caption)+'</span>' : '')+
        (img ? '<code>'+esc(img)+'</code>' : '')+
      '</div></div>';
  }
  function edictsHTML(){
    var c=""; for(var i=0;i<150;i++) c+="<i></i>";
    return '<div class="grid100" aria-hidden="true">'+c+'</div>';
  }
  function playerHTML(src){
    return '<div class="player is-empty">'+
      '<audio preload="metadata" src="'+esc(src)+'"></audio>'+
      '<div class="player-row">'+
        '<button class="player-play" type="button" aria-label="Play" disabled>&#9654;</button>'+
        '<div class="player-bar"><div class="player-fill"></div></div>'+
        '<span class="player-time">0:00</span>'+
      '</div>'+
      '<span class="player-note">Waiting for <code>'+esc(src)+'</code></span>'+
    '</div>';
  }

  function quickrefHTML(guideIndex){
    var plates = platesIn(guideIndex);
    if(!plates.length) return "";
    return '<div class="quickref">'+
      '<span class="quickref-lab">Captions for this room</span>'+
      '<div class="quickref-row">'+ plates.map(function(c){
        return '<button data-deck="b" data-jump="'+CAPTION_INDEX[c.n]+'" '+
          'aria-label="'+esc(kicker(c))+', '+esc(c.place)+'">'+esc(c.n)+'</button>';
      }).join("") +'</div></div>';
  }

  function guideSpread(s, gi){
    var paras = s.body.map(function(p,idx){
      var cls = "";
      if(p.indexOf("<em class='lead'>")===0) cls = ' class="lead"';
      else if(p.indexOf("<pull>")===0){ cls = ' class="pull"'; p = p.slice(6); }
      else if(s.notes && s.notes[idx]) cls = ' class="note"';
      var html = '<p'+cls+'>'+p+'</p>';
      var af = s.after && s.after[idx];
      if(af==="edicts") html += edictsHTML();
      else if(af==="player" && s.audio) html += playerHTML(s.audio);
      return html;
    }).join("");
    return '<section class="spread">'+
      figHTML("", s.slot, s.img, s.title)+
      '<div class="txt"><div class="txt-inner">'+
        (s.loc ? '<span class="eyebrow loc">'+esc(s.loc)+'</span>' : '')+
        '<h2>'+esc(s.title)+'</h2><div class="rule"></div>'+
        paras +
        (s.by ? '<div class="byline">'+s.by+'</div>' : '')+
        quickrefHTML(gi)+
      '</div></div></section>';
  }

  function captionSpread(c){
    if(c.kind==="credits"){
      return '<section class="spread solo"><div class="creditwrap"><div class="creditgrid">'+
        '<section><h4>Exhibition</h4><p><b>Where Justice Lives</b></p></section>'+
        '<section><h4>Venue</h4><p>Atelier Jolie, New York</p></section>'+
        '<section><h4>Dates</h4><p>15 September–2 October 2026</p></section>'+
        '<section><h4>Presented by</h4><p>Organization for Policy Research and Development Studies (DROPS)<br>ConneXUS Collaborative</p></section>'+
        '<section><h4>Made possible by</h4><p>ODI Global’s partnership with Fondation CHANEL<br>Open Society Foundations</p></section>'+
        '<section><h4>Exhibition Design and Curation</h4><p>Mariam Safi, Rina Amiri, Meha Desai</p></section>'+
        '<section><h4>Exhibition production</h4><p>It’s Handled by H</p></section>'+
        '<section><h4>Digital Experience</h4><p>Seba Agency</p></section>'+
        '<section><h4>Design of Where Justice Lives book</h4><p>OHSOBOHO</p></section>'+
        '<section><h4>Sound Design</h4><p>Designers of Record</p></section>'+
        '<section><h4>Photography</h4><p>Mariam Alimi<br>Meha Desai<br>Kiana Hayeri / Fondation Carmignac</p></section>'+
      '</div></div></section>';
    }
    return '<section class="spread">'+
      figHTML(c.n, "", c.img, c.place)+
      '<div class="txt"><div class="txt-inner">'+
        '<span class="eyebrow loc">'+esc(kicker(c))+'</span>'+
        '<p class="plate-meta">'+esc(c.place)+'</p>'+
        '<div class="rule"></div>'+
        '<p>'+esc(c.text)+'</p>'+
        (c.quote ? '<p class="pull">'+esc(c.quote)+'”</p>' : '')+
        '<div class="byline"><b>'+esc(c.by)+'</b></div>'+
        roomHTML(c)+
      '</div></div></section>';
  }

  function roomHTML(c){
    var gi = ROOM_OF[c.n];
    if(gi==null || !GUIDE[gi]) return "";
    return '<div class="roomlink"><button data-deck="a" data-jump="'+gi+'">'+
      esc(GUIDE[gi].loc)+'</button></div>';
  }

  /* ---------------- state ---------------- */
  var entry=document.getElementById("entry"), reader=document.getElementById("reader"),
      track=document.getElementById("track"), pips=document.getElementById("pips"),
      cur=document.getElementById("cur"), tot=document.getElementById("tot"),
      prev=document.getElementById("prev"), next=document.getElementById("next"),
      dA=document.getElementById("deck-a"), dB=document.getElementById("deck-b"),
      infoBtn=document.getElementById("info"), home=document.getElementById("home"),
      creditsBtn=document.getElementById("credits");
  var CREDITS_AT = CAPTIONS.length - 1;
  var deck="a", i=0, len=0, sheetEls=null;

  function pad(n){ return (n<10?"0":"")+n; }
  function items(){ return deck==="a" ? GUIDE : CAPTIONS; }
  function label(item, idx){
    return item.short || (item.n ? kicker(item) : "Spread "+(idx+1));
  }

  /* A missing picture file removes its <img>, leaving the placeholder visible. */
  function wireImages(){
    Array.prototype.forEach.call(track.querySelectorAll(".fig img"), function(im){
      im.addEventListener("error", function(){ im.remove(); });
    });
  }

  function fmtTime(s){
    if(!isFinite(s) || s<0) return "0:00";
    var m = Math.floor(s/60), r = Math.floor(s%60);
    return m+":"+(r<10?"0":"")+r;
  }

  /* The sound work. Stays disabled and labelled until a real file loads,
     so the control never pretends to play something that is not there. */
  function wirePlayer(){
    var wrap = track.querySelector(".player");
    if(!wrap) return;
    var audio = wrap.querySelector("audio"),
        play  = wrap.querySelector(".player-play"),
        bar   = wrap.querySelector(".player-bar"),
        fill  = wrap.querySelector(".player-fill"),
        time  = wrap.querySelector(".player-time"),
        note  = wrap.querySelector(".player-note"),
        src   = audio.getAttribute("src");

    function setPlaying(on){
      play.innerHTML = on ? "&#10074;&#10074;" : "&#9654;";
      play.setAttribute("aria-label", on ? "Pause" : "Play");
    }

    audio.addEventListener("loadedmetadata", function(){
      wrap.classList.remove("is-empty");
      play.disabled = false;
      note.textContent = "";
      time.textContent = fmtTime(audio.duration);
    });
    audio.addEventListener("error", function(){
      wrap.classList.add("is-empty");
      play.disabled = true;
      note.innerHTML = "Waiting for <code>"+esc(src)+"</code>";
    });
    audio.addEventListener("timeupdate", function(){
      if(audio.duration) fill.style.width = (audio.currentTime/audio.duration*100)+"%";
      time.textContent = fmtTime(audio.currentTime);
    });
    audio.addEventListener("play",  function(){ setPlaying(true); });
    audio.addEventListener("pause", function(){ setPlaying(false); });
    audio.addEventListener("ended", function(){
      setPlaying(false); fill.style.width = "0%";
      time.textContent = fmtTime(audio.duration);
    });

    play.addEventListener("click", function(){
      if(audio.paused) audio.play(); else audio.pause();
    });
    bar.addEventListener("click", function(e){
      if(!audio.duration) return;
      var r = bar.getBoundingClientRect();
      audio.currentTime = Math.min(Math.max((e.clientX-r.left)/r.width,0),1) * audio.duration;
    });
  }

  function stopAudio(){
    var a = track.querySelector(".player audio");
    if(a && !a.paused) a.pause();
  }

  function render(){
    track.innerHTML = deck==="a" ? GUIDE.map(guideSpread).join("") : CAPTIONS.map(captionSpread).join("");
    wireImages();
    wirePlayer();
    len = items().length;
    pips.innerHTML = items().map(function(it,k){
      return '<button role="tab" aria-label="'+esc(label(it,k))+'" data-i="'+k+'"></button>';
    }).join("");
    tot.textContent = pad(len);
  }

  function go(n, instant){
    if(n !== i) stopAudio();
    i = Math.max(0, Math.min(len-1, n));
    if(instant) track.style.transition="none";
    track.style.transform = "translate3d("+(-i*100)+"%,0,0)";
    if(instant) requestAnimationFrame(function(){ track.style.transition=""; });
    cur.textContent = pad(i+1);
    Array.prototype.forEach.call(pips.children, function(b,k){
      b.setAttribute("aria-current", k===i ? "true":"false");
    });
    prev.disabled = i===0;
    next.disabled = i===len-1;
    creditsBtn.setAttribute("aria-current",
      (deck==="b" && i===CREDITS_AT) ? "true" : "false");
    var t = track.children[i];
    if(t){
      var s = t.querySelector(".txt") || t.querySelector(".creditwrap");
      if(s) s.scrollTop = 0;
    }
  }

  function setDeck(d, at){
    deck = d;
    dA.setAttribute("aria-pressed", d==="a"?"true":"false");
    dB.setAttribute("aria-pressed", d==="b"?"true":"false");
    render();
    go(at||0, true);
  }

  function openReader(d){
    entry.hidden = true;
    reader.hidden = false;
    setDeck(d, 0);
  }
  function openEntry(){
    closeSheet();
    stopAudio();
    reader.hidden = true;
    entry.hidden = false;
    entry.scrollTop = 0;
  }

  document.querySelectorAll(".choice").forEach(function(b){
    b.addEventListener("click", function(){ openReader(b.dataset.go); });
  });
  home.addEventListener("click", openEntry);
  dA.addEventListener("click", function(){ setDeck("a"); });
  dB.addEventListener("click", function(){ setDeck("b"); });
  prev.addEventListener("click", function(){ go(i-1); });
  next.addEventListener("click", function(){ go(i+1); });
  pips.addEventListener("click", function(e){
    var b = e.target.closest("button"); if(b) go(+b.dataset.i);
  });
  creditsBtn.addEventListener("click", function(){
    if(deck!=="b") setDeck("b", CREDITS_AT); else go(CREDITS_AT);
  });

  /* cross-reference jumps inside a spread */
  track.addEventListener("click", function(e){
    var b = e.target.closest("button[data-jump]"); if(!b) return;
    var d = b.dataset.deck, n = +b.dataset.jump;
    if(d!==deck) setDeck(d, n); else go(n);
  });

  /* ---------------- info sheet ---------------- */
  function jumpList(list, d){
    return '<ul class="jumps">'+ list.map(function(it,k){
      return '<li><button data-deck="'+d+'" data-i="'+k+'">'+
        '<i>'+(it.n || pad(k+1))+'</i><span>'+esc(label(it,k))+'</span></button></li>';
    }).join("") +'</ul>';
  }

  function openSheet(){
    if(sheetEls) return;
    var scrim = document.createElement("button");
    scrim.className = "scrim";
    scrim.setAttribute("aria-label","Close");

    var sheet = document.createElement("div");
    sheet.className = "sheet";
    sheet.setAttribute("role","dialog");
    sheet.setAttribute("aria-modal","true");
    sheet.setAttribute("aria-label","How to use this guide");
    sheet.innerHTML =
      '<div class="grab" aria-hidden="true"></div>'+
      '<h3>Using this guide</h3>'+
      '<p class="sub">Two decks. The Guide walks the rooms in order; Captions lets you look up a photograph by its number.</p>'+
      '<div class="sheet-sec"><h4>Moving through</h4>'+
        '<ul class="howto">'+
          '<li><b>Swipe</b><span>Left or right anywhere on the spread.</span></li>'+
          '<li><b>Arrows</b><span>The ← → buttons, or the arrow keys on a keyboard.</span></li>'+
          '<li><b>Progress bar</b><span>Tap any segment along the bottom to jump straight there.</span></li>'+
          '<li><b>Title</b><span>Tap “Where Justice Lives” to come back to the opening screen.</span></li>'+
        '</ul></div>'+
      '<div class="sheet-sec"><h4>The Guide · 7 entries</h4>'+ jumpList(GUIDE,"a") +'</div>'+
      '<div class="sheet-sec"><h4>Captions · 9 photographs</h4>'+ jumpList(CAPTIONS,"b") +'</div>'+
      '<div class="sheet-actions">'+
        '<button class="btn-ghost" data-act="home">Opening screen</button>'+
        '<button class="btn-solid" data-act="close">Close</button>'+
      '</div>';

    document.body.appendChild(scrim);
    document.body.appendChild(sheet);
    sheetEls = {scrim:scrim, sheet:sheet};
    infoBtn.setAttribute("aria-expanded","true");

    scrim.addEventListener("click", closeSheet);
    sheet.addEventListener("click", function(e){
      var b = e.target.closest("button"); if(!b) return;
      if(b.dataset.act==="close"){ closeSheet(); return; }
      if(b.dataset.act==="home"){ openEntry(); return; }
      if(b.dataset.deck){
        var d = b.dataset.deck, n = +b.dataset.i;
        if(d!==deck) setDeck(d, n); else go(n);
        closeSheet();
      }
    });
    (sheet.querySelector(".btn-solid")||sheet).focus();
  }

  function closeSheet(){
    if(!sheetEls) return;
    sheetEls.scrim.remove();
    sheetEls.sheet.remove();
    sheetEls = null;
    infoBtn.setAttribute("aria-expanded","false");
  }

  infoBtn.addEventListener("click", function(){
    sheetEls ? closeSheet() : openSheet();
  });

  /* ---------------- keyboard ---------------- */
  document.addEventListener("keydown", function(e){
    if(e.metaKey||e.ctrlKey||e.altKey) return;
    if(e.key==="Escape"){
      if(sheetEls){ e.preventDefault(); closeSheet(); }
      else if(!reader.hidden){ e.preventDefault(); openEntry(); }
      return;
    }
    if(sheetEls || reader.hidden) return;
    if(e.key==="ArrowRight"){ e.preventDefault(); go(i+1); }
    else if(e.key==="ArrowLeft"){ e.preventDefault(); go(i-1); }
    else if(e.key==="Home"){ e.preventDefault(); go(0); }
    else if(e.key==="End"){ e.preventDefault(); go(len-1); }
  });

  /* ---------------- swipe ---------------- */
  var x0=null, y0=null, t0=0;
  track.addEventListener("touchstart", function(e){
    x0=e.touches[0].clientX; y0=e.touches[0].clientY; t0=Date.now();
  }, {passive:true});
  track.addEventListener("touchend", function(e){
    if(x0===null) return;
    var dx=e.changedTouches[0].clientX-x0,
        dy=e.changedTouches[0].clientY-y0,
        dt=Date.now()-t0;
    var far = Math.abs(dx) > 44;
    var flick = Math.abs(dx) > 18 && dt < 260;
    if((far||flick) && Math.abs(dx) > Math.abs(dy)*1.4) go(dx<0 ? i+1 : i-1);
    x0=y0=null;
  }, {passive:true});

  render();
})();
