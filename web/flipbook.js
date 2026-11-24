(async()=>{
 const response=await fetch('data/herbs.json');if(!response.ok)throw new Error('Unable to load herb data');const data=await response.json();
 const book=document.querySelector('#book');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const labelFiles={verte:'verte',rouge:'rouge',detour:'detour',bleue:'bleue'};
 const pages=data.botanicals.flatMap(h=>{
  const labels=h.blend_labels.map(l=>`<a class="blend-link" href="${esc(l.ttb_url)}" target="_blank" rel="noopener"><img src="assets/ttb-labels/${labelFiles[l.blend]}.webp" alt=""><span>${esc(l.label_name)}</span></a>`).join('');
  const description=`<article class="flip-page info-page"><div class="info-frame"><h2 class="herb-name">${esc(h.title)}</h2><p class="herb-latin">${esc(h.latin)}</p><h3 class="traditional-heading">TRADITIONAL &amp; HISTORICAL USE</h3><p class="traditional-copy">${esc(h.traditional_use_summary)}</p><p class="caution">Historical descriptions only; not evidence of treatment or a recommendation for use.</p><a class="qr-link" href="${esc(h.organism_url)}" target="_blank" rel="noopener" aria-label="Terpedia organism record for ${esc(h.title)}"><img class="qr" src="assets/qr/${esc(h.slug)}.png" alt="QR code"></a></div></article>`;
  const plate=`<article class="flip-page plate-page"><img class="plate-art" src="${esc(h.image_file)}" alt="${esc(h.title)} botanical illustration"><div class="plate-blends"><div class="blend-links">${labels}</div></div></article>`;
  return [description,plate];
 });
 book.innerHTML=pages.join('');
 const pageFlip=new St.PageFlip(book,{width:640,height:720,size:'stretch',minWidth:320,maxWidth:640,minHeight:360,maxHeight:720,drawShadow:true,flippingTime:1100,usePortrait:false,startPage:0,autoSize:false,maxShadowOpacity:.3,showCover:false,mobileScrollSupport:false,swipeDistance:24,clickEventForward:true,useMouseEvents:true,disableFlipByClick:false});
 pageFlip.loadFromHTML(book.querySelectorAll('.flip-page'));
 const stage=document.querySelector('#stage'),closedCover=document.querySelector('#closedCover');
 closedCover.addEventListener('click',()=>{stage.classList.add('is-open');closedCover.setAttribute('aria-hidden','true');setTimeout(()=>closedCover.setAttribute('hidden',''),1300)});
 window.addEventListener('keydown',event=>{if(['ArrowRight','PageDown'].includes(event.key)){event.preventDefault();pageFlip.flipNext('bottom')}if(['ArrowLeft','PageUp'].includes(event.key)){event.preventDefault();pageFlip.flipPrev('bottom')}});
})();
