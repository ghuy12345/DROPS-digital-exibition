(function(){
  "use strict";
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

  /* ------------------------------------------------------------
     Deck A, the guide. Every line below is from the exhibition
     copy document; nothing is added, summarised or invented.
     ------------------------------------------------------------ */
  /* Drop the photographs into images/guide/ using exactly these filenames and
     they appear automatically. Until a file exists the slide shows a neutral
     placeholder naming the file it wants, so nothing breaks while the picture
     research is still open. */
  var GUIDE = [
    {short:"Introduction", loc:"", title:"Introduction",
     img:"images/guide/introduction.jpg",
     body:["<em class='lead'>Where Justice Lives</em> begins with the People’s Tribunal for the Women of Afghanistan, a survivor-centred civil society process created in response to the systematic restrictions imposed on women and girls under Taliban rule.",
            "Since returning to power in August 2021, the Taliban have introduced more than 100 decrees and directives affecting almost every part of women’s lives, including education, employment, movement, healthcare, dress and participation in public life. The Tribunal brought Afghan women’s testimony, expert evidence and legal analysis before an international panel of judges to examine these policies and their consequences.",
            "In December 2025, the Tribunal concluded that the Taliban’s policies and practices constitute crimes against humanity, including gender persecution.",
            "<em>Where Justice Lives</em> carries that public record beyond the courtroom through photographs, testimony, documents, sound and words from women inside Afghanistan. Together, these works place legal evidence alongside lived experience, asking what it means to witness, record and respond."]},

    {short:"The Artwork", loc:"", title:"Artwork by Leeda Totakhail",
     slot:"Image of book cover", img:"images/guide/artwork.jpg",
     body:["The artwork draws on contemporary Islamic art, combining Arabic calligraphy, traditional motifs and modern visual storytelling. It depicts the struggle of Afghan women for justice and freedom.",
            "Leeda Totakhail is an Afghan artist."],
     notes:{1:true}},

    {short:"Women’s Lives", loc:"Main Gallery, left and right walls",
     title:"Women’s Lives Across Afghanistan’s Changing Landscape",
     img:"images/guide/womens-lives.jpg",
     body:["Two bodies of photographs place the Tribunal within the wider lives and histories it was convened to address. On one wall, photographs made under Taliban rule document the profound restrictions imposed on women and girls since the Taliban returned to power in August 2021. Opposite them, photographs from the years before the Taliban’s return show women inhabiting public, professional, educational and everyday life during a very different period in Afghanistan’s recent history. Together, the photographs are not a simple before and after. They hold two periods of Afghan life alongside one another, giving context to what has been restricted, erased and fought for."],
     by:"Photographs by <b>Kiana Hayeri</b> and <b>Mariam Alimi</b>"},

    {short:"The Work of Witness", loc:"Main Gallery, centre", title:"The Work of Witness",
     img:"images/guide/work-of-witness.jpg",
     body:["Made during the public hearings of the People’s Tribunal for the Women of Afghanistan in Madrid in October 2025 and the delivery of its judgment in The Hague that December, these photographs move inside and beyond the hearing room.",
            "They follow not only the proceedings, but the work that makes justice possible: registering testimony, preparing, translating, listening, recording, waiting and witnessing.",
            "Together, they trace how testimony becomes evidence, evidence becomes record, and record becomes a public demand for justice."],
     by:"Photographs by <b>Meha Desai</b>"},

    {short:"Messages from Inside", loc:"Graffiti Room",
     title:"Messages from Inside Afghanistan",
     img:"images/guide/messages.jpg",
     body:["These 48 messages come directly from women living across Afghanistan. They are messages from Afghan women to women human rights defenders, activists and feminists around the world, telling them what they most need to hear about their situation.",
            "They speak from within a system of gender persecution that is restricting women’s rights, freedoms and place in public life. The messages make clear that Afghan women continue to resist, organise and speak out, but that they cannot carry this struggle alone. They are also a call for solidarity: to listen, to stay engaged, and to stand alongside Afghan women in defending their rights and freedoms."]},

    {short:"A Space for Response", loc:"Graffiti Room", title:"A Space for Response",
     img:"images/guide/response.jpg",
     body:["Please take a moment to read, reflect and respond to what you have encountered. We invite you to write in the guest book before you leave, whether with a thought, a question, a reflection or a message of solidarity."]},

    {short:"100 Edicts / Sounds", loc:"Basement", title:"100 Edicts / Sounds from Kabul",
     img:"images/guide/edicts-sounds.jpg",
     audio:"audio/sounds-from-kabul.mp3",
     body:["One hundred decrees, directives and laws issued by the Taliban restricting the rights and freedoms of women and girls are presented as a cumulative record of the system imposed since August 2021. Together, they reach into almost every sphere of life, restricting access to education and employment, freedom of movement, public space, healthcare, dress, and participation in public and political life. Read as a body, they reveal not a series of isolated prohibitions, but an interlocking system of exclusion.",
            "Running through this installation is a sound work composed from recordings made on the streets of Kabul in July 2026. The sound of everyday public life, traffic, movement, commerce and conversation, sits alongside the written restrictions. But within this public soundscape, women are almost entirely absent. Across the recording, a woman’s voice is heard only once.",
            "Together, the edicts and sound make visible and audible how exclusion moves from written policy into everyday life."],
     after:{0:"edicts", 1:"player"},
     by:"Field recordings: <b>DROPS Country Team</b> · Sound design: <b>Designers of Record</b>"}
  ];

  /* ------------------------------------------------------------
     Deck B, photograph captions, verbatim from Side B, plus the
     credits block exactly as listed.
     ------------------------------------------------------------ */
  var CAPTIONS = [
    {n:"01", place:"Kabul, 6 February 2024",
     text:"Wedding-dress mannequins stand with their heads covered. Under Taliban restrictions, shopkeepers are forbidden from displaying the faces of female mannequins. Images of women have also been erased or covered across advertisements and other public displays.",
     by:"Kiana Hayeri"},
    {n:"02", place:"Jalalabad, Nangarhar, 12 February 2024",
     text:"Muska, 14, had recently returned from Pakistan, where she attended school. In Afghanistan, she could no longer continue her education. Facing severe economic hardship, her family accepted a marriage offer from their landlord’s son in exchange for a well and solar panels.",
     quote:"I’d rather live in Pakistan, there I could at least pursue my education.", by:"Kiana Hayeri"},
    {n:"03", place:"Kabul, 17 February 2024",
     text:"At a private institute in western Kabul, around 700 teenage girls study an American curriculum in English. The school operates with local Taliban acquiescence, but students cannot receive an official Afghan education certificate or continue to university. Girls remain barred from secondary school and women from university.",
     by:"Kiana Hayeri"},
    {n:"04", place:"Kabul, 28 February 2024",
     text:"Rahila, 20, Yalda, 18, and Zeinab, 14, work in a sewing workshop in western Kabul. Zeinab was about to enter Grade 7 when girls were barred from secondary school. She now sews school uniforms for younger girls who are still permitted to attend.",
     by:"Kiana Hayeri"},
    {n:"05", place:"Kabul, July 2021",
     text:"Dr Soheila Siddiq at her hospital during patient check-ups.", by:"Mariam Alimi"},
    {n:"06", place:"Kabul, 2013", text:"A Loya Jirga, or grand council, in Kabul.", by:"Mariam Alimi"},
    {n:"07", place:"Kabul, April 2011", text:"A boxing coach with his student.", by:"Mariam Alimi"},
    {n:"08", place:"Ghor, 2015", text:"A young girl reads to her class.", by:"Mariam Alimi"},
    {n:"09", place:"Kabul Afghanistan, Esteqlal High school 2013",
     text:"Young women sing a concert", by:"Mariam Alimi"},
    {n:"10", scroll:true, place:"Madrid, October 2025 / The Hague, December 2025",
     text:"Photographs from the Tribunal’s public hearings in Madrid in October 2025 and the delivery of its judgment in The Hague that December, documenting the proceedings and the work surrounding them.",
     by:"Meha Desai"},
    {kind:"credits", short:"Credits"}
  ];

  function kicker(c){ return (c.scroll ? "Photo scroll " : "Photograph ") + c.n; }

  /* Which room each photograph hangs in, taken from the document's own
     attributions: photographs 01-09 are the Hayeri and Alimi walls of
     entry 2, and photo scroll 10 is Desai's Work of Witness, entry 3.
     Indices point into GUIDE. */
  var ROOM_OF = {"01":2,"02":2,"03":2,"04":2,"05":2,"06":2,"07":2,"08":2,"09":2,"10":3};

  /* Photographs live in images/photographs/ named by plate number,
     01.jpg through 10.jpg. Same fallback as the guide slides. */
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
    var c=""; for(var i=0;i<100;i++) c+="<i></i>";
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
        '<section><h4>Dates</h4><p>15 September – 2 October 2026</p></section>'+
        '<section><h4>Presented by</h4><p>Organization for Policy Research and Development Studies (DROPS)<br>ConneXUS Collaborative</p></section>'+
        '<section><h4>Made possible by</h4><p>ODI Global’s partnership with Fondation CHANEL</p></section>'+
        '<section><h4>Curatorial and editorial advisor</h4><p>Meha Desai</p></section>'+
        '<section><h4>Exhibition production</h4><p>It’s Handled by H</p></section>'+
        '<section><h4>Digital experience</h4><p>Joshua Omosebi / Seba Agency</p></section>'+
        '<section><h4>Sound design</h4><p>Designers of Record</p></section>'+
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
      '<div class="sheet-sec"><h4>Captions · 10 photographs</h4>'+ jumpList(CAPTIONS,"b") +'</div>'+
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
