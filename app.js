const DAYS = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ Nhật'];
const MORNING = ['Sữa rửa mặt Sulwhasoo','Toner Klairs','Serum HA Histolab (2–3 giọt)','Kem Arencia Vitamin C','Kem chống nắng Heliocare'];
const PRODUCT_ASSETS = {
  'Serum HA Histolab (62%)': { category:'Serum', image:'https://kbeautylabhawaii.com/cdn/shop/files/bd1663_b65c84244f994e22a00be62682c5c69a_mv2.png?v=1748721849', source:'https://kbeautylabhawaii.com/products/histolab-62-hyaluron-complex-ampoule' },
  'Serum B9 VIC (Vàng)': { category:'Serum', image:'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m29atxl0sfcibe', source:'https://shopee.vn/search?keyword=serum+b9+vic+derma' },
  'Serum Estée Lauder ANR': { category:'Serum', image:'https://m.esteelauder.com.mx/media/export/cms/products/640x640/el_sku_PG5001_640x640_0.jpg', source:'https://www.esteelauder.com.mx/product/689/77491/catalogo-de-productos/cuidado-de-la-piel/sueros-reparadores/suero-facial-anti-edad-advanced-night-repair/suero-reparador-de-dia-y-de-noche' },
  'Mặt nạ Wonjin Skin Oasis (Xanh)': { category:'Mặt nạ', image:'https://cdn.hstatic.net/products/200000868185/thiet_ke_chua_co_ten__11__4d6347f5a981408694f1535271248ea0.png', source:'https://lamthaocosmetics.vn/products/mat-na-ho-tro-phuc-hoi-da-wonjin-healance-skin-oasis-mask' },
  'Mặt nạ Wonjin Flash Glow (Vàng)': { category:'Mặt nạ', image:'https://product.hstatic.net/200000117693/product/_____________________37abe93769a640ef8cb579395bf373ba.jpg', source:'https://abbeautyworld.com/products/mat-na-duong-sang-cang-bong-da-wonjin-effect-flash-glow-mask-30g-1' },
  'Mặt nạ Sake Wafood Kasu': { category:'Mặt nạ', image:'https://www.nipponcosme.com/cdn/shop/files/1.jpg?v=1743833681&width=530', source:'https://www.nipponcosme.com/products/japan-pdc-wafood-made-sake-kasu-sake-lees-wash-off-mask-170g' },
  'Nước tẩy trang La Roche-Posay': { category:'Tẩy trang', image:'https://www.laroche-posay.us/on/demandware.static/-/Sites-acd-laroche-posay-master-catalog/default/dwdfd18912/img/micellarwaterultra/la-roche-posay-micellar-water-for-sensitive-skin-3337872411595-1.jpg', source:'https://www.laroche-posay.us/our-products/face/face-wash/micellar-water-ultra-micellarwaterultra.html' },
  'Dầu tẩy trang Attenir': { category:'Tẩy trang', image:'https://www.umall.com.au/cdn/shop/files/1_be54575b-06f6-4ad3-b5a3-cc73d651c7ac.jpg?v=1745823296', source:'https://www.umall.com.au/products/attenir-deep-cleansing-oil-unscented-175ml' },
  'Sữa rửa mặt Sulwhasoo': { category:'Sữa rửa mặt', image:'https://www.dodoskin.com/cdn/shop/files/Sulwhasoo_Gentle_Cleansing_Foam_200ml_-_5.jpg?v=1720753619&width=1200', source:'https://www.dodoskin.com/products/copy-of-sulwhasoo-gentle-cleansing-foam-200ml' },
  'Toner Klairs': { category:'Toner', image:'https://media.ulta.com/i/ulta/2546686?fmt=auto&h=400&w=400', source:'https://www.ulta.com/p/supple-preparation-facial-toner-pimprod2005169' },
  'Kem Arencia Vàng': { category:'Kem dưỡng', image:'https://wcosmetics.com.au/cdn/shop/files/JIETU1782878780485.png?v=1782878811', source:'https://wcosmetics.com.au/products/arencia-vitamin-c-glow-booster-gel-cream-50g' },
  'Kem Retinal Shot Vàng': { category:'Kem dưỡng', image:'https://dabeautyfashionnz.co.nz/cdn/shop/files/AAE20C9A-35E6-48E5-B3AC-C4E10711D104.jpg?v=1766076986&width=416', source:'https://dabeautyfashionnz.co.nz/products/celimax-the-vita-a-retinal-shot-tightening-booster-15ml' },
  'Kem phục hồi Ahohaw': { category:'Kem dưỡng', image:'https://m.ahohwa.com/web/product/big/202508/a7cae26384a36c153630f27762053422.png', source:'https://m.ahohwa.com/product/%EC%9D%B8%ED%85%90%EC%8B%9C%EB%B8%8C-pdrn-%ED%81%AC%EB%A6%BC-200g/626' },
  'Kem chống nắng Heliocare': { category:'Chống nắng', image:'https://images.matas.dk/encode/94068641_20250717105100.jpg', source:'https://www.kicks.se/heliocare-gel-oil-free-spf50-50-ml' }
};
const CATEGORIES = ['Tẩy trang','Sữa rửa mặt','Toner','Serum','Mặt nạ','Kem dưỡng','Chống nắng'];
const seedProducts = [
  ['Serum HA Histolab (62%)','Hyaluronic Acid cấp ẩm đa tầng','Sáng & tối · Hàng ngày sau toner','Thoa trên nền da còn ẩm.'],
  ['Serum B9 VIC (Vàng)','Vitamin B9 (Folic Acid) phục hồi da','Tối · Hàng ngày sau HA','Dùng trước Retinal.'],
  ['Serum Estée Lauder ANR','Serum phục hồi và chống lão hóa','Tối · Hàng ngày','Dùng sau B9 VIC.'],
  ['Mặt nạ Wonjin Skin Oasis (Xanh)','Cấp ẩm, phục hồi dịu da','Tối thứ 4 · 1 lần/tuần','Đắp 15–20 phút rồi vỗ nhẹ.'],
  ['Mặt nạ Wonjin Flash Glow (Vàng)','Niacinamide, Vitamin C dưỡng sáng','Tối thứ 7 · 1 lần/tuần','Đắp 15–20 phút rồi vỗ nhẹ.'],
  ['Mặt nạ Sake Wafood Kasu','Bã rượu Sake, tẩy tế bào chết nhẹ','Tối thứ 2 và thứ 5','Ủ 5–10 phút, rửa sạch trước khi dưỡng.'],
  ['Nước tẩy trang La Roche-Posay','Làm sạch dịu nhẹ','Tối · Khi dùng kem chống nắng nhẹ','Lau nhẹ bằng bông tẩy trang.'],
  ['Dầu tẩy trang Attenir','Làm sạch sâu gốc dầu','Tối · 1–3 lần/tuần khi makeup/KCN dày','Nhũ hóa kỹ với nước trước khi rửa mặt.'],
  ['Sữa rửa mặt Sulwhasoo','Làm sạch dịu nhẹ','Sáng & tối · Hàng ngày','Tạo bọt trên tay trước khi dùng.'],
  ['Toner Klairs','Cấp ẩm, cân bằng pH','Sáng & tối · Hàng ngày','Vỗ lên da còn ẩm.'],
  ['Kem Arencia Vàng','Vitamin C dưỡng sáng','Sáng · Hàng ngày','Bôi sau HA và trước kem chống nắng.'],
  ['Kem Retinal Shot Vàng','Retinal tái tạo da','Tối thứ 3 và thứ 6 · 2 lần/tuần','Chỉ dùng buổi tối, sau serum.'],
  ['Kem phục hồi Ahohaw','Panthenol, PDRN, B5 khóa ẩm','Tối · Hàng ngày','Dùng ở bước cuối.'],
  ['Kem chống nắng Heliocare','Chống nắng phổ rộng','Sáng · Hàng ngày','Bôi đủ lượng trước khi ra ngoài 15–20 phút.']
].map(([name,detail,usage,note])=>({id:crypto.randomUUID(),name,detail,usage,note,owned:true}));
const seedDays = [
  ['Thứ 2',['Tẩy trang (La Roche-Posay/Attenir)','Sữa rửa mặt Sulwhasoo','Mặt nạ Sake (5–10 phút, rửa sạch)','Toner Klairs','Serum HA Histolab','Serum B9 VIC','Serum Estée Lauder','Kem phục hồi Ahohaw'],'Mặt nạ Sake · Làm sạch sâu'],
  ['Thứ 3',['Tẩy trang','Sữa rửa mặt Sulwhasoo','Toner Klairs','Serum HA Histolab','Serum B9 VIC','Serum Estée Lauder','Kem Retinal Shot (lượng hạt đậu)','Kem phục hồi Ahohaw'],'Retinal Shot · Đêm 1'],
  ['Thứ 4',['Tẩy trang','Sữa rửa mặt Sulwhasoo','Toner Klairs','Mặt nạ Wonjin Skin Oasis (15–20 phút)','Serum HA Histolab / B9 VIC','Serum Estée Lauder','Kem phục hồi Ahohaw'],'Wonjin xanh · Cấp ẩm và phục hồi'],
  ['Thứ 5',['Tẩy trang (La Roche-Posay/Attenir)','Sữa rửa mặt Sulwhasoo','Mặt nạ Sake (5–10 phút, rửa sạch)','Toner Klairs','Serum HA Histolab','Serum B9 VIC','Serum Estée Lauder','Kem phục hồi Ahohaw'],'Mặt nạ Sake · Sáng mịn'],
  ['Thứ 6',['Tẩy trang','Sữa rửa mặt Sulwhasoo','Toner Klairs','Serum HA Histolab','Serum B9 VIC','Serum Estée Lauder','Kem Retinal Shot (lượng hạt đậu)','Kem phục hồi Ahohaw'],'Retinal Shot · Đêm 2'],
  ['Thứ 7',['Tẩy trang','Sữa rửa mặt Sulwhasoo','Toner Klairs','Mặt nạ Wonjin Flash Glow (15–20 phút)','Serum HA Histolab / B9 VIC','Serum Estée Lauder','Kem phục hồi Ahohaw'],'Wonjin vàng · Dưỡng sáng'],
  ['Chủ Nhật',['Tẩy trang','Sữa rửa mặt Sulwhasoo','Toner Klairs','Serum HA Histolab','Serum B9 VIC','Serum Estée Lauder','Kem phục hồi Ahohaw'],'Phục hồi thuần túy']
].map(([day,evening,focus])=>({day,morning:[...MORNING],evening,focus}));

const load = (key,fallback) => { try { const value=JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; } };
let products = load('skincare-products-v1',seedProducts);
products = products.map(p=>({...PRODUCT_ASSETS[p.name],...p,category:p.category||PRODUCT_ASSETS[p.name]?.category||'Kem dưỡng'}));
let days = load('skincare-days-v1',seedDays);
let checks = load('skincare-checks-v1',{});
let toastTimeout;
const $ = (id)=>document.getElementById(id);
const escapeHTML = (value='')=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const save = ()=>{ localStorage.setItem('skincare-products-v1',JSON.stringify(products)); localStorage.setItem('skincare-days-v1',JSON.stringify(days)); };
const todayIndex = ()=> (new Date().getDay()+6)%7;
const dateKey = ()=>new Intl.DateTimeFormat('sv-SE').format(new Date());
function showToast(message){const t=$('toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>t.classList.remove('show'),2400);}
function navigate(name){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===`${name}-view`));const nav=name==='today'?'home':name;document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('selected',b.dataset.view===nav));if(name==='home')renderHome();if(name==='today')renderToday();if(name==='products')renderProducts();if(name==='routine')renderDays();window.scrollTo({top:0,behavior:'smooth'});}
function renderHome(){const d=days[todayIndex()];$('home-day').textContent=DAYS[todayIndex()];$('home-focus').textContent=d.focus;$('menu-product-count').textContent=products.filter(p=>p.owned).length;}
function renderToday(){
  const index=todayIndex(), day=days[index];
  $('today-date').textContent=new Intl.DateTimeFormat('vi-VN',{weekday:'long',day:'numeric',month:'long'}).format(new Date()).toLocaleUpperCase('vi-VN');
  $('today-focus-text').textContent=day.focus||'Dành một chút dịu dàng cho làn da';
  if(checks.date!==dateKey())checks={date:dateKey(),done:{}};
  renderCheckList('morning-list',day.morning,'morning');renderCheckList('evening-list',day.evening,'evening');
}
function renderCheckList(id,steps,period){const done=checks.done||{};$(id).innerHTML=steps.length?steps.map((step,i)=>`<label class="check-row"><input type="checkbox" data-check="${period}-${i}" ${done[`${period}-${i}`]?'checked':''}><span>${escapeHTML(step)}</span></label>`).join(''):'<p class="product-detail">Hôm nay mình nghỉ bước này nhé.</p>';const count=steps.filter((_,i)=>done[`${period}-${i}`]).length;$(`${period}-count`).textContent=steps.length?`${count}/${steps.length} bước`:'';$(id).querySelectorAll('[data-check]').forEach(input=>input.addEventListener('change',()=>{checks.done??={};checks.done[input.dataset.check]=input.checked;localStorage.setItem('skincare-checks-v1',JSON.stringify(checks));$(`${period}-count`).textContent=`${steps.filter((_,i)=>checks.done[`${period}-${i}`]).length}/${steps.length} bước`;}));}
function renderProducts(){
  const query=$('search-products').value.trim().toLocaleLowerCase('vi');const shown=products.filter(p=>`${p.name} ${p.detail} ${p.usage}`.toLocaleLowerCase('vi').includes(query));
  $('inventory-summary').textContent=`${products.filter(p=>p.owned).length} món đang có · ${products.length} món trong danh sách`;
  $('menu-product-count').textContent=products.filter(p=>p.owned).length;
  $('product-list').innerHTML=`<div class="cabinet-crown"><span>✿　 CHĂM DA CHO VỢ　 ✿</span><small>tủ đồ bé xinh</small></div><div class="cabinet-inside">${CATEGORIES.map((category,i)=>{const items=shown.filter(p=>p.category===category);return items.length?`<section class="cabinet-shelf"><div class="shelf-label"><span class="shelf-number">0${i+1}</span><span>${escapeHTML(category)}</span><small>${items.length} món</small></div><div class="shelf-items">${items.map(p=>`<article class="shelf-product"><div class="product-photo">${p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy"><span class="photo-fallback">${category==='Mặt nạ'?'🧖🏻‍♀️':'🧴'}</span>`:`<span class="photo-fallback">${category==='Mặt nạ'?'🧖🏻‍♀️':'🧴'}</span>`}</div><button class="product-status ${p.owned?'':'missing'}" data-owned="${escapeHTML(p.id)}">${p.owned?'♡ đang có':'＋ cần mua'}</button><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.detail)}</p><a class="image-credit" href="${escapeHTML(p.source||'#')}" target="_blank" rel="noopener noreferrer">ảnh tham khảo ↗</a><button class="edit-product" data-edit-product="${escapeHTML(p.id)}" aria-label="Sửa ${escapeHTML(p.name)}">⋯</button></article>`).join('')}</div><div class="shelf-rail"></div></section>`:''}).join('')||'<p class="cabinet-empty">Chiếc ngăn này đang chờ món đồ xinh xắn ✿</p>'}</div><div class="cabinet-feet"><span></span><span></span></div>`;
  $('product-list').querySelectorAll('.product-photo img').forEach(img=>{img.addEventListener('load',()=>img.parentElement.classList.add('loaded'));img.addEventListener('error',()=>img.remove());});
  $('product-empty').hidden=shown.length>0;
  $('product-list').querySelectorAll('.shelf-product').forEach(card=>{const id=card.querySelector('[data-edit-product]').dataset.editProduct;card.tabIndex=0;card.setAttribute('aria-label',`Sửa ${card.querySelector('h3').textContent}`);card.onclick=e=>{if(!e.target.closest('button,a'))openProduct(products.find(p=>p.id===id));};card.onkeydown=e=>{if(e.target===card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openProduct(products.find(p=>p.id===id));}};});
  $('product-list').querySelectorAll('[data-edit-product]').forEach(b=>b.onclick=()=>openProduct(products.find(p=>p.id===b.dataset.editProduct)));
  $('product-list').querySelectorAll('[data-owned]').forEach(b=>b.onclick=()=>{const p=products.find(x=>x.id===b.dataset.owned);p.owned=!p.owned;save();renderProducts();});
}
function renderDays(){
  $('week-list').innerHTML=days.map((day,i)=>`<article class="day-card ${i===todayIndex()?'open':''}" data-day-card="${i}"><div class="day-head" data-toggle-day="${i}" role="button" tabindex="0" aria-expanded="${i===todayIndex()}"><span class="day-name">${escapeHTML(day.day)}</span><span class="day-focus">${escapeHTML(day.focus)}</span><span class="day-chevron">⌄</span></div><div class="day-detail"><div class="day-columns"><div><h3>☼ &nbsp;BUỔI SÁNG</h3><ol>${day.morning.map(s=>`<li>${escapeHTML(s)}</li>`).join('')}</ol></div><div><h3>☾ &nbsp;BUỔI TỐI</h3><ol>${day.evening.map(s=>`<li>${escapeHTML(s)}</li>`).join('')}</ol></div></div><button class="edit-routine" data-edit-day="${i}">Chỉnh sửa các bước&nbsp; ↗</button></div></article>`).join('');
  $('week-list').querySelectorAll('[data-toggle-day]').forEach(head=>{const toggle=()=>{const card=head.closest('.day-card');card.classList.toggle('open');head.setAttribute('aria-expanded',card.classList.contains('open'));};head.onclick=toggle;head.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}};});
  $('week-list').querySelectorAll('[data-edit-day]').forEach(b=>b.onclick=()=>openRoutine(Number(b.dataset.editDay)));
}
function openProduct(p){$('product-form').reset();$('product-id').value=p?.id||'';$('product-form-title').textContent=p?'Sửa sản phẩm':'Thêm sản phẩm';$('product-name').value=p?.name||'';$('product-detail').value=p?.detail||'';$('product-usage').value=p?.usage||'';$('product-note').value=p?.note||'';$('product-category').value=p?.category||'Serum';$('product-owned').checked=p?.owned??true;$('delete-product').hidden=!p;$('product-dialog').showModal();}
function openRoutine(index){const d=days[index];$('routine-day-index').value=index;$('routine-form-title').textContent=d.day;$('routine-focus').value=d.focus;$('routine-morning').value=d.morning.join('\n');$('routine-evening').value=d.evening.join('\n');$('routine-dialog').showModal();}
function makeCalendarFile(){
  const morning=$('morning-time').value||'07:00',evening=$('evening-time').value||'21:00';
  const event=(label,time)=>{const [hour,minute]=time.split(':').map(Number);const start=new Date();start.setDate(start.getDate()+((8-start.getDay())%7||7));start.setHours(hour,minute,0,0);const utc=start.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z');const uid=`${crypto.randomUUID()}@skincare`;return ['BEGIN:VEVENT',`UID:${uid}`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z')}`,`DTSTART:${utc}`,`SUMMARY:Skincare — ${label}`,`DESCRIPTION:Đến giờ chăm sóc da ${label.toLocaleLowerCase('vi')}. Mở app để xem lịch trình hôm nay.`,`RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR,SA,SU`,'BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:Đến giờ skincare','TRIGGER:PT0M','END:VALARM','END:VEVENT'].join('\r\n');};
  const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Da diu dang//Skincare//VI','CALSCALE:GREGORIAN','METHOD:PUBLISH',event('buổi sáng',morning),event('buổi tối',evening),'END:VCALENDAR'].join('\r\n');
  const url=URL.createObjectURL(new Blob([ics],{type:'text/calendar;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='nhac-skincare.ics';a.click();URL.revokeObjectURL(url);showToast('Đã tải lịch nhắc. Mở tệp để thêm vào Lịch iPhone.');
}

document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));
$('add-product').onclick=()=>openProduct();$('search-products').addEventListener('input',renderProducts);
$('product-form').addEventListener('submit',e=>{e.preventDefault();const id=$('product-id').value;const p={id:id||crypto.randomUUID(),name:$('product-name').value.trim(),detail:$('product-detail').value.trim(),usage:$('product-usage').value.trim(),note:$('product-note').value.trim(),category:$('product-category').value,owned:$('product-owned').checked};if(id)products=products.map(x=>x.id===id?p:x);else products.unshift(p);save();$('product-dialog').close();renderProducts();showToast(id?'Đã cập nhật sản phẩm.':'Đã thêm vào tủ.');});
$('delete-product').onclick=()=>{const id=$('product-id').value;if(id&&confirm('Xóa sản phẩm này khỏi danh sách?')){products=products.filter(p=>p.id!==id);save();$('product-dialog').close();renderProducts();showToast('Đã xóa sản phẩm.');}};
$('routine-form').addEventListener('submit',e=>{e.preventDefault();const i=Number($('routine-day-index').value);days[i]={...days[i],focus:$('routine-focus').value.trim(),morning:$('routine-morning').value.split('\n').map(s=>s.trim()).filter(Boolean),evening:$('routine-evening').value.split('\n').map(s=>s.trim()).filter(Boolean)};save();$('routine-dialog').close();renderDays();showToast('Đã lưu lịch trình.');});
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$(b.dataset.close).close());
$('export-calendar').onclick=makeCalendarFile;
for(const [id,key,defaultValue] of [['morning-time','skincare-morning-time','07:00'],['evening-time','skincare-evening-time','21:00']]){$(id).value=localStorage.getItem(key)||defaultValue;$(id).addEventListener('change',()=>localStorage.setItem(key,$(id).value));}
renderHome();renderToday();renderProducts();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
let installPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('install-button').hidden=false;});$('install-button').onclick=async()=>{if(installPrompt){installPrompt.prompt();installPrompt=null;}else showToast('Trong Safari, chạm Chia sẻ rồi chọn “Thêm vào màn hình chính”.');};
