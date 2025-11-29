
    const products = [
      {
        id: 'bedak-luxcrime',
        name: 'Bedak Luxcrime',
        price: 61700,
        desc: 'Bedak ringan dan ultra-halus ini menyerap minyak berlebih dan mengecilkan pori-pori tanpa terlihat menggumpal.',
        img: 'image/luxcrime_bedak.jpg'
      },
      {
        id: 'time-lipstain',
        name: 'Time Lip Stain',
        price: 58000,
        desc: 'Lip stain ringan dengan hasil natural dan warna tahan lama, cocok untuk daily look.',
        img: 'image/time_lip stain.jpg'
      },
      {
        id: 'sunscreen-skintific',
        name: 'Sunscreen Skintific',
        price: 77520,
        desc: 'Skintific 5X Ceramide Serum Sunscreen hadir sebagai perisai UV tak terlihat yang menjaga kulitmu dari bahaya sinar UVA, UVB, dan Blue Light-tanpa rasa lengket.',
        img: 'image/skin_sunscreen.jpg'
      },
      {
        id: 'pinkflash-lipcream',
        name: 'Pinkflash Lip Cream',
        price: 59500,
        desc: 'Lip cream matte yang creamy dan hadir dengan beragam warna nude.',
        img: 'image/pinkflash_lip cream.jpg'
      },
      {
        id: 'moisturizer-glad2glow',
        name: 'Moisturizer Glad 2 Glow',
        price: 145000,
        desc: 'Pelembap harian yang tidak lengket, memberikan efek glowing natural dan perlindungan kelembapan.',
        img: 'image/g2g_retinol moisturizer.jpg'
      },
      {
        id: 'micellar water-seamakeup',
        name: 'sea makeup micellar water',
        price: 65000,
        desc: 'membantu menghapus makeup secara mudah dan menyeluruh',
        img : 'image/sm_micellar water.jpg'
      },
      {
        id: 'time-cushion',
        name: 'Time Cushion',
        price: 95000,
        desc: 'Cushion dengan hasil akhir satin glow yang tahan lama dan ringan di kulit.',
        img: 'image/time_cushion.jpg'
      },
      {
        id: 'contour-luxcrime',
        name: 'Contour Luxcrime',
        price: 88590,
        desc: 'Sangat mudah dibaurkan dan dibentuk, meluncur tanpa bobot, sehingga mudah diaplikasikan.',
        img: 'image/luxcrime_contour.jpg'
      },
      {
        id: 'prime-mop',
        name: 'primer MOP',
        price: 170000,
        desc: 'primer dengan formula yang dapat melembabkan, mengencangkan, dan meminimalkan tampilan pori-pori di wajah',
        img: 'image/mop_primer.jpg'
      },
      {
        id: 'pinkflash-eyeshadow3',
        name: 'Pinkflash 3 Eyeshadow',
        price: 48000,
        desc: 'Palet eyeshadow mini dengan 3 warna intens dan mudah dibaurkan.',
        img: 'image/pinkflash_3 eyeshadow.jpg'
      },
      {
        id: 'lip-vinyl-luxcrime',
        name: 'Lip Vinyl Luxcrime',
        price: 76820,
        desc: 'Lipstik cair tahan transfer dengan kilau tinggi, tahan lama, dan hasil akhir berkilau sepanjang hari.',
        img: 'image/luxcrime_lip vinyl.jpg'
      },
      {
        id: 'eyeshadow-mop',
        name: 'eyeshadow MOP',
        price: 200000,
        desc: 'eyeshadow dari Mother of Pearl dengan 3 shades hadir dengan kombinasi warna yang cantik',
        img: 'image/mop_eyeshadow.jpg'
      },
      {
        id: 'time-contour',
        name: 'Time Contour',
        price: 72000,
        desc: 'Contour dengan tekstur creamy yang mudah dibaurkan, memberikan dimensi natural pada wajah.',
        img: 'image/time_contour.jpg'
      },
      {
        id: 'moisturizer-skintific',
        name: 'Moisturizer Skintific',
        price: 111112,
        desc: 'Moisturizer dengan tekstur gel yang dikhususkan untuk menenangkan kulit yang kemerahan dan berjerawat.',
        img: 'image/skin_patenol.jpg'
      },
      {
        id: 'foundation-mop',
        name: 'foundation MOP',
        price: 170500,
        desc: 'hybrid matte foundation dengan formula baru dan kemasan airless pump dengan coverage super tinggi',
        img: 'image/mop_foundat.jpg'
      },
      {
        id: 'pinkflash-lipglaze',
        name: 'Pinkflash Lip Glaze',
        price: 56500,
        desc: 'Lip gloss ringan dengan kilau lembut, memberikan hasil glossy tanpa rasa lengket.',
        img: 'image/pinkflash_lip glaze.jpg'
      },
      {
        id: 'lip-serum-skintific',
        name: 'Lip Serum Skintific',
        price: 116000,
        desc: 'Serum bibir pertama dengan 3 manfaat unggulan: Mencerahkan, Menghaluskan, Meratakan. Perawatan untuk bibir gelap, dua warna, dan kering dalam 1 produk.',
        img: 'image/skin_lip serum.jpg'
      },
      {
        id: 'time-lipmatte',
        name: 'Time Lip Matte',
        price: 63000,
        desc: 'Lip matte lembut dengan warna intens dan hasil akhir velvet yang tidak membuat bibir kering.',
        img: 'image/time_lip matte.jpg'
      },
      {
        id: 'lip cream-mop',
        name: 'lip cream MOP',
        price: 59500,
        desc: 'lip cream matte yang creamy dan hadir dengan beragam warna nude',
        img: 'image/mop_lip cream.jpg'
      },
      {
        id: 'bedak-skintific',
        name: 'Bedak Skintific',
        price: 149000,
        desc: 'Bedak Tabur Invisiblur All Day dengan hasil akhir matte instan, sempurna, dan bebas kilap. Dengan teknologi polimer soft-focus, tampil percaya diri dari siang hingga malam dengan riasan tahan lama 12 jam.',
        img: 'image/skin_bedak.jpg'
      },
      {
        id: 'pinkflash-bundlingmaskara',
        name: 'Pinkflash Bundling Maskara',
        price: 78000,
        desc: 'Paket bundling maskara waterproof untuk tampilan bulu mata lebih tebal dan lentik.',
        img: 'image/pinkflash_bundling maskara.jpg'
      },
      {
        id: 'wipes-luxcrime',
        name: 'Wipes Luxcrime',
        price: 47500,
        desc: 'Tisu pembersih siap pakai yang dengan lembut dan efektif menghapus riasan tanpa membuat kulit kering atau membutuhkan air.',
        img: 'image/luxcrime_wipes.jpg'
      },
      {
        id: 'loose powder-mop',
        name: 'loose powder MOP',
        price: 150000,
        desc: 'microblur translucent loose powder untuk kunci makeup dan samarkan pori-pori',
        img: 'image/mop_loose powder.jpg'
      },
      {
        id: 'time-stellardust',
        name: 'Time Stellar Dust Lip Stain',
        price: 64000,
        desc: 'Lip stain berkilau dengan efek shimmering lembut, memberikan kesan elegan dan mempesona.',
        img: 'image/time_stellar dust lip stain.jpg'
      },
      {
        id: 'cushion-skintific',
        name: 'Cushion Skintific',
        price: 169000,
        desc: 'Cushion dengan finish velvet matte, menjadikan tampilan akhir flawless and looks like a healthy skin. Coverage tinggi yang dapat menutup noda hitam, mata panda, dan skin imperfections dalam 1 kali tap.',
        img: 'image/skin_cushion.jpg'
      },
      {
        id: 'sunscreen-luxcrime',
        name: 'Sunscreen Luxcrime',
        price: 68500,
        desc: 'Tabir surya ultra-halus dan ringan dengan SPF50+ untuk menyegarkan penampilan Anda dan mengaplikasikan kembali perlindungan UV Anda sepanjang hari.',
        img: 'image/luxcrime_sunscreen.jpg'
      },
      {
        id: 'lip balm-seamakeup',
        name: 'sea makeup lip balm',
        price: 53800,
        desc: 'tinted lip balm dengan warna yang vibrant dan strong glossy effect',
        img: 'image/sm_lipbalm.jpg'
      },
      {
        id: 'pinkflash-eyeshadow',
        name: 'Pinkflash Eyeshadow',
        price: 50500,
        desc: 'Eyeshadow palette dengan pilihan warna nude dan shimmer, mudah diaplikasikan untuk daily look.',
        img: 'image/pinkflash_eyeshadow.jpg'
      },
      {
        id: 'loose powder-seamakeup',
        name: 'sea makeup loose powder',
        price: 78000,
        desc: 'dilengkapi dengan puff yang lembut, dapat menyamarkan pori-pori dan awet sepanjang hari',
        img: 'image/sm_loose powder.jpg'
      },
      {
        id: 'skin tint-luxcrime',
        name: 'Skin Tint Luxcrime',
        price: 125150,
        desc: 'Skin Tint yang ringan dengan coverage yang dapat dibangun yang memberikan cahaya dan warna kulit yang lebih merata dan tampak sehat, sekaligus menghidrasi dan melindungi kulit dari sinar matahari.',
        img: 'image/luxcrime_skin tint.jpg'
      },
      {
        id: 'setting spray-seamakeup',
        name: 'sea makeup setting spray',
        price: 120000,
        desc: 'kunci makeup tahan lama serta segar sepanjang hari',
        img: 'image/sm_settspray.jpg'
      },
      {
        id: 'concelear-skintific',
        name: 'Concelear Skintific',
        price: 69000,
        desc: 'Concealer ringan dengan coverage tinggi, cocok untuk menyamarkan pori-pori dan menutupi ketidaksempurnaan kulit.',
        img: 'image/skin_concelear.jpg'
      },
      {
        id: 'blush on-seamakeup',
        name: 'sea makeup vibrant flushed liquid blush',
        price: 70000,
        desc: 'blush on cair yang diformulasikan khusus untuk kulit berjerawat',
        img: 'image/sm_blush.jpg'
      },
      {
        id: 'lip-velvet-luxcrime',
        name: 'Lip velvet Luxcrime',
        price: 63000,
        desc: 'Teksturnya yang lembut dan halus saat diaplikasikan, meninggalkan rasa lembut dan halus seperti beludru untuk kenyamanan pemakaian. Diperkaya dengan Vitamin E, Minyak Jojoba, dan Squalene untuk menjaga bibir tetap lembut.',
        img: 'image/luxcrime_lip velvet.jpg'
      },
      {
        id: 'sunscreen-skintific2',
        name: 'Bright Sunscreen Skintific',
        price: 71091,
        desc: 'Sunscreen 2-in-1 dengan efek mencerahkan ini memberikan perlindungan SPF 50 PA++++ sekaligus memberikan tone up secara instan tanpa meninggalkan white cast.',
        img: 'image/skin_bright sunscreen.jpg'
      },
      {
        id: 'Serum-somethinc',
        name: 'Somethinc Serum',
        price: 120000,
        desc: 'Serum pencerah wajah dengan kandungan 2% BHA Salicylid Acid Liquid Profector.',
        img: 'image/somth_serum.jpeg'
      },
      {
        id: 'Lip Tint-dearmebeauty',
        name: 'Lip Tint Dear Me Beauty',
        price: 45000,
        desc: 'Lip tint berbahan ringan, warna tahan lama, cocok untuk tampilan natural sehari-hari.',
        img: 'image/dearme_lip tint.png'
      },
      {
        id: 'Face Wash-somethinc',
        name: 'Face Wash Somethinc',
        price: 60000,
        desc: 'Pembersih wajah dengan aroma mint, membantu menyegarkan dan membersihkan kotoran ringan.',
        img: 'image/someth_cuci muka.png'
      },
      {
        id: 'Sunscreen-dearmebeauty',
        name: 'Sunscreen Dear Me Beauty',
        price: 65000,
        desc: 'Tabir surya harian yang tidak lengket, memberikan efek glowing natural dan perlindungan kelembapan.',
        img: 'image/dearme_sunscreen.png'
      },
      {
        id: 'Skintint-RAD',
        name: 'Skintint Rose All Day',
        price: 85000,
        desc: 'Skintint berbahan ringan, sehingga tidak membuat makeup berat diwajah.',
        img: 'image/Skintint Rose All Day.png'
      },
      {
        id: 'Blush On-dearmebeauty',
        name: 'Blush On Dear Me Beauty',
        price: 50000,
        desc: 'Blush On dalam bentuk cream yang mudah untuk diblend.',
        img: 'image/dearme_blush on.png'
      },
      {
        id: 'Moisturizer-dearmebeauty',
        name: 'Moisturizer Dear Me Beauty',
        price: 45000,
        desc: 'Moisturizer berbahan ringan dan cocok untuk digunakan kulit normal',
        img: 'image/dearme_cream.png'
      },
      {
        id: 'Mascara-RAD',
        name: 'Mascara Rose All Day',
        price: 65000,
        desc: 'Mascara yang dapat membuat bulu mata lentik natural',
        img: 'image/rad_maskara.png'
      },
      {
        id: 'Loose Powder-RAD',
        name: 'Loose Powder Rose All Day',
        price: 55000,
        desc: 'Loose Powder ringan yang dapat menahan minyak sehari-hari',
        img: 'image/rad_bedak.png'
      },
      {
        id: 'Cushion-RAD',
        name: 'Cushion Rose All Day',
        price: 220000,
        desc: 'Cushion dengan coverage tinggi',
        img: 'image/rad_cushion.png'
      },
      {
        id: 'Lip Tint-somethinc',
        name: 'Lip Tint Somethinc',
        price: 85000,
        desc: 'Lip Tint berbahan ringan, warna tahan lama, cocok untuk tampilan natural sehari-hari',
        img: 'image/somth_lip tint.jpg'
      },
      {
        id: 'Cushion-somethinc',
        name: 'Cushion Somethinc',
        price: 150000,
        desc: 'Cuushion dengan bahan ringan yang dapat menahan minyak',
        img: 'image/someth_cuschion.png'
      },
      {
        id: 'Moisturizer-skintific',
        name: 'Moisturizer Somethinc',
        price: 225000,
        desc: 'Moisturizer untuk memperkuat skin barrier',
        img: 'image/someth_mois.png'
      },
      {
        id: 'Concealer-RAD',
        name: 'Concealer Rose All Day',
        price: '120000',
        desc: 'Concealer dengan coverage tinggi',
        img: 'image/rad_concealer rose.png'
      },
      {
        id: 'Foundation-dearmebeauty',
        name: 'Foundation Dear Me Beauty',
        price: 75000,
        desc: 'Foundation coverage tinggi yang cocok digunakan untuk acara-acara penting',
        img: 'image/dearme_foundation.png'
      },
      {
        id: 'Body Serum-glad2glow',
        name: 'Body Serum Gland 2 Glow',
        price: 79000,
        desc: 'Body serum yang diformulasikan untuk menutrisi kulit secara mendalam dan membantu mencerahkan tampilan kulit kusam',
        img: 'image/g2g_body serum.jpg'
      },
      {
        id: 'Cushion-BNB',
        name: 'Cushion Barenbliss',
        price: 95000,
        desc: 'Cushion dengan flawless matte yang memberikan coverage tinggi dan tahan lama',
        img: 'image/barenblis_cushion.jpg'
      },
      {
        id: 'Micellar Water-glad2glow',
        name: 'Micellar Water Gland 2 Glow',
        price: 45000,
        desc: 'Micellar Water pembersih wajah yang mampu mengangkat makeup',
        img: 'image/g2g_micelar water.jpg'
      },
      {
        id: 'Liptint-BNB',
        name: 'Liptint Barenbliss',
        price: 55000,
        desc: 'Liptint Barenbliss dengan tekstur gel ringan dan tahan lama hingga 12 jam',
        img: 'image/barenblis_liptint.jpg'
      },
      {
        id: 'Milk Amino-glad2glow',
        name: 'Milk Amino Glad 2 Glow',
        price: 65000,
        desc: 'Milk Amino dengan essence berbasis susu untuk menjaga kelembapan kulit',
        img: 'image/g2g_milk amino.jpg'
      },
      { 
        id: 'Maskara-BNB',
        name: 'Maskara Barenbliss',
        price: 65000,
        desc: 'Maskara Barenbliss yang memberikan efek panjang lentik dengan formula tahan air hingga 24 jam',
        img: 'image/barenblis_maskara.jpg'
      },
      {
        id: 'Power Bright Serum-glad2glow',
        name: 'Power Bright Serum Glad 2 Glow',
        price: 89000,
        desc: 'Power Bright Serum pencerah wajah dengan kandungan vitamin C untuk mengatasi noda hitam dan warna kulit yang tidak merata',
        img: 'image/g2g_power bright serum.jpg'
      },
      {
        id: 'Blush on-BNB',
        name: 'Blush on Barenbliss',
        price: 77000,
        desc: 'Blush on yang memiliki tekstur mochi yang lembut dan creamy tahan lama hingga 12 jam',
        img: 'image/barenblish_blush on.jpg'
      },
      {
        id: 'Serum-glad2glow',
        name: 'Serum Glad 2 Glow',
        price: 75000,
        desc: 'Serum dengan multifungsi yang membantu menutrisi kulit dan menjaga elastisitas',
        img: 'image/g2g_serum.jpg'
      }
    ];

    function formatRupiah(n){
      return 'Rp' + Number(n).toLocaleString('id-ID');
    }

    const grid = document.getElementById('productGrid');
    function renderProducts(filterText = '') {
      grid.innerHTML = '';
      const q = filterText.trim().toLowerCase();
      const toShow = products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
      toShow.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <h3>${p.name}</h3>
          <p class="small">${p.desc}</p>
          <div class="price">${formatRupiah(p.price)}</div>
          <div class="actions">
            <button class="btn" data-add="${p.id}">Tambah ke Keranjang</button>
            <button class="btn ghost" data-detail="${p.id}">Lihat</button>
          </div>
        `;
        grid.appendChild(card);
      });
    }
    renderProducts();

    let cart = JSON.parse(localStorage.getItem('blushy_cart') || '[]');
    function saveCart(){ localStorage.setItem('blushy_cart', JSON.stringify(cart)); updateCartCount(); }

    function updateCartCount(){
      document.getElementById('cartCount').innerText = cart.length;
    }
    updateCartCount();

    document.addEventListener('click', (ev) => {
      const addId = ev.target.getAttribute('data-add');
      const detailId = ev.target.getAttribute('data-detail');

      if(addId){
        const p = products.find(x=>x.id===addId);
        cart.push({id:p.id, name:p.name, price:p.price, qty:1, img:p.img});
        saveCart();
        showToast(`${p.name} ditambahkan ke keranjang`);
      }

      if(detailId){
        openModalProduct(detailId);
      }
    });

    document.getElementById('searchInput').addEventListener('input', (e)=>{
      renderProducts(e.target.value);
    });

    const backdrop = document.getElementById('backdrop');
    const modalBox = document.getElementById('modalBox');

    function openBackdrop(htmlContent){
      modalBox.innerHTML = htmlContent;
      backdrop.style.display = 'flex';
      backdrop.querySelector('.modal').scrollTop = 0;
    }
    function closeBackdrop(){
      backdrop.style.display = 'none';
      modalBox.innerHTML = '';
    }

    backdrop.addEventListener('click', (e)=>{
      if(e.target === backdrop) closeBackdrop();
    });

    function openModalProduct(id){
      const p = products.find(x=>x.id===id);
      openBackdrop(`
        <div style="display:flex;gap:14px;flex-direction:column">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h4>${p.name}</h4><span class="close-x" onclick="closeBackdrop()">×</span>
          </div>
          <img src="${p.img}" alt="${p.name}" style="width:100%;height:260px;object-fit:cover;border-radius:10px">
          <p class="muted">${p.desc}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
            <div class="price">${formatRupiah(p.price)}</div>
            <div style="display:flex;gap:8px">
              <button class="btn" onclick="addToCartFromModal('${p.id}')">Tambah ke Keranjang</button>
              <button class="btn ghost" onclick="openCheckout()">Beli Sekarang</button>
            </div>
          </div>
        </div>
      `);
    }
    function addToCartFromModal(id){
      const p = products.find(x=>x.id===id);
      cart.push({id:p.id,name:p.name,price:p.price,qty:1,img:p.img});
      saveCart();
      showToast(`${p.name} ditambahkan ke keranjang`);
      closeBackdrop();
    }

    /* ======= CART MODAL ======= */
    function openCartModal(){
      const itemsHTML = cart.map((it, idx) => `
        <div class="cart-item" data-idx="${idx}">
          <img src="${it.img}" alt="${it.name}">
          <div class="meta">
            <h5>${it.name}</h5>
            <p class="muted">${formatRupiah(it.price)} • Qty: <strong>${it.qty}</strong></p>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
            <button class="rm" onclick="removeFromCart(${idx})">Hapus</button>
            <div style="display:flex;gap:6px">
              <button onclick="changeQty(${idx}, -1)" style="border-radius:8px;padding:6px;border:none;background:#f3f3f3;cursor:pointer">−</button>
              <button onclick="changeQty(${idx}, +1)" style="border-radius:8px;padding:6px;border:none;background:#f3f3f3;cursor:pointer">+</button>
            </div>
          </div>
        </div>
      `).join('') || '<p class="muted">Keranjang kosong — tambahkan produk dulu 😊</p>';

      const total = cart.reduce((s,i)=>s + i.price * i.qty, 0);
      openBackdrop(`
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h4>Keranjang Belanja</h4><span class="close-x" onclick="closeBackdrop()">×</span>
          </div>
          <div class="cart-list">${itemsHTML}</div>
          <div class="total-row">
            <div>Total</div>
            <div>${formatRupiah(total)}</div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end">
            <button class="btn ghost" onclick="closeBackdrop()">Lanjut Belanja</button>
            <button class="btn" onclick="openCheckout()">Lanjut ke Pembayaran</button>
          </div>
        </div>
      `);
    }

    function removeFromCart(idx){
      cart.splice(idx,1);
      saveCart();
      openCartModal();
    }
    function changeQty(idx, delta){
      const item = cart[idx];
      if(!item) return;
      item.qty = Math.max(1, item.qty + delta);
      saveCart();
      openCartModal();
    }

    /* ======= CHECKOUT ======= */
    function openCheckout(){
      // prefill summary
      const total = cart.reduce((s,i)=>s + i.price * i.qty, 0);
      if(cart.length === 0){
        showToast('Keranjang masih kosong — tambahkan produk dulu');
        return;
      }
      const itemsSummary = cart.map(i=>`<li style="margin:6px 0">${i.name} × ${i.qty} — <strong>${formatRupiah(i.price * i.qty)}</strong></li>`).join('');
      openBackdrop(`
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h4>Checkout</h4><span class="close-x" onclick="closeBackdrop()">×</span>
          </div>

          <div style="display:flex;gap:14px;flex-direction:column;margin-top:8px">
            <div>
              <label class="small">Nama Penerima</label>
              <input type="text" id="fName" placeholder="Nama lengkap">
            </div>
            <div>
              <label class="small">No. HP</label>
              <input type="text" id="fPhone" placeholder="0812xxxx">
            </div>
            <div>
              <label class="small">Alamat Pengiriman</label>
              <textarea id="fAddress" placeholder="Contoh: Jl. Merdeka No.10, Jakarta"></textarea>
            </div>

            <div>
              <label class="small">Metode Pembayaran</label>
              <select id="fPayment">
                <option value="bank">Transfer Bank</option>
                <option value="cod">Bayar di Tempat (COD)</option>
                <option value="e-wallet">E-Wallet (OVO/GoPay/Dana)</option>
              </select>
            </div>

            <div>
              <h5 style="margin:10px 0 6px">Ringkasan Pesanan</h5>
              <ul class="muted">${itemsSummary}</ul>
              <div class="total-row" style="padding-top:8px">
                <div>Total yang harus dibayar</div>
                <div>${formatRupiah(total)}</div>
              </div>
            </div>

            <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px">
              <button class="btn ghost" onclick="closeBackdrop()">Kembali</button>
              <button class="btn" onclick="confirmOrder()">Konfirmasi & Bayar</button>
            </div>
          </div>
        </div>
      `);
    }

    function confirmOrder(){
      const name = document.getElementById('fName')?.value?.trim();
      const phone = document.getElementById('fPhone')?.value?.trim();
      const address = document.getElementById('fAddress')?.value?.trim();
      const payment = document.getElementById('fPayment')?.value;

      if(!name || !phone || !address){
        showToast('Isi nama, no. HP, dan alamat terlebih dahulu');
        return;
      }

      const order = {
        id: 'ORD' + Date.now().toString().slice(-6),
        date: new Date().toISOString(),
        customer: {name, phone, address, payment},
        items: cart,
        total: cart.reduce((s,i)=>s + i.price * i.qty, 0)
      };

      const history = JSON.parse(localStorage.getItem('blushy_orders') || '[]');
      history.push(order);
      localStorage.setItem('blushy_orders', JSON.stringify(history));

      cart = [];
      saveCart();

      openBackdrop(`
        <div style="text-align:center">
          <h4>Terima Kasih, ${order.customer.name}!</h4>
          <p class="muted">Pesananmu sudah kami terima. ID Pesanan <strong>${order.id}</strong></p>
          <p class="muted">Total: <strong>${formatRupiah(order.total)}</strong></p>
          <p class="muted">Metode: <strong>${order.customer.payment}</strong></p>
          <div style="margin-top:12px;display:flex;gap:8px;justify-content:center">
            <button class="btn" onclick="closeBackdrop()">Tutup</button>
            <button class="btn ghost" onclick="viewOrders()">Lihat Riwayat Pesanan</button>
          </div>
        </div>
      `);
    }

    function viewOrders(){
      const history = JSON.parse(localStorage.getItem('blushy_orders') || '[]').reverse();
      const html = history.length ? history.map(o => `
        <div style="padding:10px;border-radius:8px;border:1px solid #f3f3f3;margin-bottom:8px">
          <div style="display:flex;justify-content:space-between"><strong>${o.id}</strong><span class="muted">${new Date(o.date).toLocaleString()}</span></div>
          <div class="muted">${o.customer.name} • ${o.customer.phone}</div>
          <div style="margin-top:8px">
            ${o.items.map(it=>`<div style="display:flex;justify-content:space-between"><div>${it.name} × ${it.qty}</div><div>${formatRupiah(it.price * it.qty)}</div></div>`).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:8px"><div class="muted">Total</div><div><strong>${formatRupiah(o.total)}</strong></div></div>
        </div>
      `).join('') : '<p class="muted">Belum ada riwayat pemesanan.</p>';

      openBackdrop(`
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h4>Riwayat Pesanan</h4><span class="close-x" onclick="closeBackdrop()">×</span>
          </div>
          <div style="margin-top:12px">${html}</div>
          <div style="display:flex;justify-content:flex-end;margin-top:10px">
            <button class="btn ghost" onclick="closeBackdrop()">Tutup</button>
          </div>
        </div>
      `);
    }

    document.getElementById('btnLogin').addEventListener('click', ()=>{
      openBackdrop(`
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h4>Login</h4><span class="close-x" onclick="closeBackdrop()">×</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
            <input id="loginEmail" type="email" placeholder="Email">
            <input id="loginPass" type="password" placeholder="Kata Sandi">
            <div style="display:flex;justify-content:flex-end;gap:8px">
              <button class="btn ghost" onclick="closeBackdrop()">Batal</button>
              <button class="btn" onclick="doLogin()">Masuk</button>
            </div>
          </div>
        </div>
      `);
    });
    document.getElementById('btnRegister').addEventListener('click', ()=>{
      openBackdrop(`
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <h4>Daftar</h4><span class="close-x" onclick="closeBackdrop()">×</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
            <input id="regName" type="text" placeholder="Nama lengkap">
            <input id="regEmail" type="email" placeholder="Email">
            <input id="regPass" type="password" placeholder="Kata Sandi">
            <div style="display:flex;justify-content:flex-end;gap:8px">
              <button class="btn ghost" onclick="closeBackdrop()">Batal</button>
              <button class="btn" onclick="doRegister()">Daftar</button>
            </div>
          </div>
        </div>
      `);
    });

    function doLogin(){
      const email = document.getElementById('loginEmail').value;
      const pass = document.getElementById('loginPass').value;
      if(!email || !pass){ showToast('Isi email & kata sandi'); return; }
      localStorage.setItem('blushy_user', JSON.stringify({email}));
      showToast('Berhasil login (simulasi)');
      closeBackdrop();
    }
    function doRegister(){
      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const pass = document.getElementById('regPass').value;
      if(!name || !email || !pass){ showToast('Lengkapi form pendaftaran'); return; }
      localStorage.setItem('blushy_user', JSON.stringify({name,email}));
      showToast('Akun berhasil dibuat (simulasi)');
      closeBackdrop();
    }

    function showToast(msg=''){
      const t = document.createElement('div');
      t.innerText = msg;
      t.style.position = 'fixed';
      t.style.right = '20px';
      t.style.bottom = '20px';
      t.style.padding = '10px 14px';
      t.style.borderRadius = '10px';
      t.style.background = 'rgba(0,0,0,0.8)';
      t.style.color = '#fff';
      t.style.zIndex = 9999;
      document.body.appendChild(t);
      setTimeout(()=>{ t.style.opacity = 0; t.style.transform = 'translateY(6px)'; }, 1600);
      setTimeout(()=>t.remove(), 2100);
    }


    document.getElementById('openCart').addEventListener('click', openCartModal);
    document.getElementById('navHome').addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
    document.getElementById('navProducts').addEventListener('click', ()=> { document.getElementById('productGrid').scrollIntoView({behavior:'smooth'}); });


    window.closeBackdrop = closeBackdrop;
    window.openCheckout = openCheckout;
    window.removeFromCart = removeFromCart;
    window.changeQty = changeQty;
    window.addToCartFromModal = addToCartFromModal;
    window.viewOrders = viewOrders;
    window.confirmOrder = confirmOrder;


    window.addEventListener('storage', ()=> {
      cart = JSON.parse(localStorage.getItem('blushy_cart') || '[]');
      updateCartCount();
    });

  
    document.addEventListener('error', function(e){
      if(e.target.tagName === 'IMG'){
        e.target.src = 'https://via.placeholder.com/400x300.png?text=Image';
      }
    }, true);

    function updateUserUI(){
      const user = JSON.parse(localStorage.getItem('blushy_user'));

      const authBox = document.querySelector('.auth');

      if(user){
        authBox.innerHTML = `
          <span style="font-weight:600;color:#444">Halo, ${user.name || user.email}</span>
          <button class="btn ghost" onclick="logoutUser()">Logout</button>
        `;
      } else {
        authBox.innerHTML = `
          <button class="btn ghost" id="btnLogin">Login</button>
          <button class="btn" id="btnRegister">Daftar</button>
        `;

        document.getElementById('btnLogin').addEventListener('click', openLoginModal);
        document.getElementById('btnRegister').addEventListener('click', openRegisterModal);
      }
    }

    function logoutUser(){
      localStorage.removeItem('blushy_user');
      showToast('Berhasil logout');
      updateUserUI();
    }

    function doLogin(){
      const email = document.getElementById('loginEmail').value;
      const pass = document.getElementById('loginPass').value;
      if(!email || !pass){ showToast('Isi email & kata sandi'); return; }

      localStorage.setItem('blushy_user', JSON.stringify({email}));

      showToast('Berhasil login');
      closeBackdrop();
      updateUserUI();
    }

    function doRegister(){
      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const pass = document.getElementById('regPass').value;
      if(!name || !email || !pass){ showToast('Lengkapi form pendaftaran'); return; }

      localStorage.setItem('blushy_user', JSON.stringify({name,email}));

      showToast('Akun berhasil dibuat');
      closeBackdrop();
      updateUserUI();
    }

    updateUserUI();
