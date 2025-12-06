
    const products = [
      {
        id: 'bedak-luxcrime',
        name: 'Bedak Luxcrime',
        price: 61700,
        desc: 'Bedak ringan yang menyerap minyak berlebih dan mengecilkan pori-pori tanpa terlihat menggumpal.',
        img: 'image/luxcrime_bedak.jpg'
      },
      {
        id: 'time-lipstain',
        name: 'Time Lip Stain',
        price: 58000,
        desc: 'Lipstik glossy dengan efek glitter eksklusif untuk tampilan bibir berkilau, dan transferproof. Memiliki warna-warna cerah dengan daya tahan lama.',
        img: 'image/time_lip_stain.jpg'
      },
      {
        id: 'sunscreen-skintific',
        name: 'Sunscreen Skintific',
        price: 77520,
        desc: 'Sebagai perisai UV yang menjaga kulitmu dari bahaya sinar UVA, UVB, dan Blue Light-tanpa rasa lengket.',
        img: 'image/skin_sunscreen.jpg'
      },
      {
        id: 'pinkflash-lipcream',
        name: 'Pinkflash Lip Cream',
        price: 59500,
        desc: 'Lip cream matte yang creamy dan hadir dengan beragam warna nude. Dengan Formulasi pigmented tinggi, hasil akhir matte lembut, dan menjaga kelembapan bibir.',
        img: 'image/pinkflash_lip_cream.jpg'
      },
      {
        id: 'moisturizer-glad2glow',
        name: 'Moisturizer Glad 2 Glow',
        price: 145000,
        desc: 'Pelembap harian yang tidak lengket, memberikan efek glowing natural dan perlindungan kelembapan.',
        img: 'image/g2g_retinol_moisturizer.jpg'
      },
      {
        id: 'micellar water-seamakeup',
        name: 'Sea Makeup Micellar Water',
        price: 65000,
        desc: 'Membantu menghapus makeup secara mudah dan menyeluruh. Mengandung Salicylic Acid, Bisabolol, dan Mugwort untuk membersihkan makeup secara menyeluruh tanpa perih.',
        img : 'image/sm_micellar_water.jpg'
      },
      {
        id: 'time-cushion',
        name: 'Time Cushion',
        price: 95000,
        desc: 'Cushion dengan hasil akhir satin glow yang tahan lama dan ringan di kulit. Menawarkan full coverage dengan hasil akhir matte halus dan tahan lama, efektif menyamarkan noda, pori, dan meratakan warna kulit tanpa terasa berat.',
        img: 'image/time_cushion.jpg'
      },
      {
        id: 'contour-luxcrime',
        name: 'Contour Luxcrime',
        price: 88590,
        desc: 'Sangat mudah dibaurkan dan dibentuk, meluncur tanpa bobot, sehingga mudah diaplikasikan. Dengan aplikator spons unik yang mudah digunakan untuk membentuk wajah, melebur sempurna ke kulit, memberikan hasil akhir lembut tanpa pudar.',
        img: 'image/luxcrime_contour.jpg'
      },
      {
        id: 'prime-mop',
        name: 'Primer MOP',
        price: 170000,
        desc: 'Primer dengan formula yang dapat melembabkan, mengencangkan, dan meminimalkan tampilan pori-pori di wajah',
        img: 'image/mop_primer.jpg'
      },
      {
        id: 'pinkflash-eyeshadow3',
        name: 'Pinkflash 3 Eyeshadow',
        price: 48000,
        desc: 'Palet eyeshadow mini dengan 3 warna intens dan mudah dibaurkan.',
        img: 'image/pinkflash_3_eyeshadow.jpg'
      },
      {
        id: 'lip-vinyl-luxcrime',
        name: 'Lip Vinyl Luxcrime',
        price: 76820,
        desc: 'Lipstik tahan transfer dengan kilau tinggi, tahan lama. Dengan pigmentasi tinggi, tekstur lembut, mudah dibaurkan, tahan lama, dan tahan air.',
        img: 'image/luxcrime_lip_vinyl.jpg'
      },
      {
        id: 'eyeshadow-mop',
        name: 'Eyeshadow MOP',
        price: 200000,
        desc: 'Palet eyeshadow 3 shades dengan kombinasi warna yang cantik. Dengan pigmentasi tinggi, formula mudah dibaurkan (blends well), dan variasi hasil akhir seperti matte, shimmer, glitter, & satin.',
        img: 'image/mop_eyeshadow.jpg'
      },
      {
        id: 'time-contour',
        name: 'Time Contour',
        price: 72000,
        desc: 'Contour dengan tekstur creamy yang mudah dibaurkan, memberikan dimensi natural pada wajah. Dengan formula lembut seperti bedak yang mudah dibaurkan, menghasilkan warna intens dalam satu sapuan.',
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
        name: 'Foundation MOP',
        price: 170500,
        desc: 'Hybrid matte foundation dengan coverage super tinggi dengan hasil akhir satin-matte yang nyaman, ringan, dan mudah dibaurkan, diperkaya dengan SPF 40 PA++, Niacinamide, dan Peptides.',
        img: 'image/mop_foundat.jpg'
      },
      {
        id: 'pinkflash-lipglaze',
        name: 'Pinkflash Lip Glaze',
        price: 56500,
        desc: 'Lip gloss ringan dengan kilau lembut, memberikan hasil glossy tanpa rasa lengket, menyamarkan garis bibir, menawarkan pigmentasi tinggi, ketahanan lama, dan mudah diaplikasikan.',
        img: 'image/pinkflash_lip_glaze.jpg'
      },
      {
        id: 'lip-serum-skintific',
        name: 'Lip Serum Skintific',
        price: 116000,
        desc: 'Dapat mencerahkan, menghaluskan, meratakan dan perawatan untuk bibir gelap dengan formula kandungan utama Peptida, Vitamin C, dan Squalane yang menutrisi intensif dalam 14 hari.',
        img: 'image/skin_lip_serum.jpg'
      },
      {
        id: 'time-lipmatte',
        name: 'Time Lip Matte',
        price: 63000,
        desc: 'Lip matte lembut dengan warna intens dan hasil akhir velvet yang tidak membuat bibir kering, tahan lama, dan nyaman di bibir.',
        img: 'image/time_lip_matte.jpg'
      },
      {
        id: 'lip cream-mop',
        name: 'Lip Cream MOP',
        price: 59500,
        desc: 'Lip cream matte yang creamy dan hadir dengan warna nude diperkaya Vitamin E untuk menjaga kelembapan bibir.',
        img: 'image/mop_lip_cream.jpg'
      },
      {
        id: 'bedak-skintific',
        name: 'Bedak Skintific',
        price: 149000,
        desc: 'Bedak Tabur Invisiblur All Day dengan hasil akhir matte instan, sempurna, serta mampu  mengontrol minyak hingga 16 jam, tahan air & keringat, serta menjaga kelembapan kulit berkat kandungan Multi Molecular Weight Hyaluronic Acid dan dilapisi Amino Acid.',
        img: 'image/skin_bedak.jpg'
      },
      {
        id: 'pinkflash-bundlingmaskara',
        name: 'Pinkflash Bundling Maskara',
        price: 78000,
        desc: 'Paket hemat kombinasi maskara waterproof untuk menciptakan tampilan mata lengkap, dengan keunggulan formula waterproof, tahan lama, tidak menggumpal, dan memberikan efek bervolume serta memanjangkan bulu mata.',
        img: 'image/pinkflash_bundling_maskara.jpg'
      },
      {
        id: 'wipes-luxcrime',
        name: 'Wipes Luxcrime',
        price: 47500,
        desc: 'Tisu penghapus riasan tanpa membuat kulit kering atau membutuhkan air diformulasikan dengan bahan menutrisi seperti Niacinamide dan Bunga Marigold, cocok untuk bepergian.',
        img: 'image/luxcrime_wipes.jpg'
      },
      {
        id: 'loose powder-mop',
        name: 'Loose Powder MOP',
        price: 150000,
        desc: 'Bedak tabur transparan bertekstur sangat halus yang dirancang untuk mengunci makeup, mengontrol minyak, dan memberikan efek blur/soft focus untuk menyamarkan pori-pori serta garis halus, menghasilkan tampilan wajah matte yang halus, ringan, tahan lama.',
        img: 'image/mop_loose_powder.jpg'
      },
      {
        id: 'time-stellardust',
        name: 'Time Stellar Dust Lip Stain',
        price: 64000,
        desc: 'Lip stain berkilau dengan efek shimmering lembut, memberikan kesan elegan dan mempesona, bertekstur ringan yang menawarkan pigmentasi intens, warna cerah, dan daya tahan luar biasa berkat formula "2 in 1 Hybrid Lip".',
        img: 'image/time_stellar_dust_lip_stain.jpg'
      },
      {
        id: 'cushion-skintific',
        name: 'Cushion Skintific',
        price: 169000,
        desc: 'Cushion dalam kemasan praktis dengan finish velvet matte, menjadikan tampilan akhir flawless and looks like a healthy skin.',
        img: 'image/skin_cushion.jpg'
      },
      {
        id: 'sunscreen-luxcrime',
        name: 'Sunscreen Luxcrime',
        price: 68500,
        desc: 'Tabir surya ultra-halus dan ringan dengan SPF50+ untuk perlindungan UV Anda sepanjang hari. Dengan tekstur essence atau krim-gel yang tidak lengket, tidak meninggalkan white cast, cepat meresap, dan menghidrasi kulit dengan kandungan Niacinamide dan Hyaluronic Acid sambil mencerahkan dan melindungi dari UV serta polusi',
        img: 'image/luxcrime_sunscreen.jpg'
      },
      {
        id: 'lip balm-seamakeup',
        name: 'Sea Makeup Lip Balm',
        price: 53800,
        desc: 'Tinted lip balm dengan warna yang vibrant dan strong glossy effect dengan kandungan 3X Hyaluronic Acid dan Hydrating Oil Blend yang dapat menghidrasi bibir secara lembut sepanjang hari.',
        img: 'image/sm_lipbalm.jpg'
      },
      {
        id: 'pinkflash-eyeshadow',
        name: 'Pinkflash Eyeshadow',
        price: 50500,
        desc: 'Eyeshadow palette dengan pilihan warna nude dan shimmer, mudah diaplikasikan untuk daily look, tekstur lembut, mudah dibaur, tahan lama, dan formula waterproof, menawarkan beragam pilihan warna dan hasil akhir.',
        img: 'image/pinkflash_eyeshadow.jpg'
      },
      {
        id: 'loose powder-seamakeup',
        name: 'Sea Makeup Loose Powder',
        price: 78000,
        desc: 'Bedak tabur ringan dengan partikel halus yang dirancang untuk kulit berjerawat dan berminyak, berfungsi menyamarkan pori (blurring), mengontrol minyak hingga 8 jam, mengunci makeup, memberikan hasil akhir matte dan flawless.',
        img: 'image/sm_loose_powder.jpg'
      },
      {
        id: 'skin tint-luxcrime',
        name: 'Skin Tint Luxcrime',
        price: 125150,
        desc: 'Skin Tint yang ringan dengan coverage tinggi, sekaligus menghidrasi dan melindungi kulit dari sinar matahari dengan perlindungan SPF 35 PA+++, serta coverage yang dapat dibangun (buildable) dari ringan hingga medium tanpa terasa berat, lengket, atau menyebabkan pilling.',
        img: 'image/luxcrime_skin_tint.jpg'
      },
      {
        id: 'setting spray-seamakeup',
        name: 'Sea Makeup Setting Spray',
        price: 120000,
        desc: 'Kunci makeup tahan lama serta segar sepanjang hari, mampu merawat dan mencegah jerawat dengan kandungan succinic acid serta membantu mengontrol minyak tanpa membuat kulit kering.',
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
        name: 'Sea Makeup Vibrant Flushed Liquid Blush',
        price: 70000,
        desc: 'Blush on cair yang diformulasikan khusus untuk kulit berjerawat. engan 2 warna ini berpigmen, mudah dibaurkan, dan cocok untuk semua warna kulit.',
        img: 'image/sm_blush.jpg'
      },
      {
        id: 'lip-velvet-luxcrime',
        name: 'Lip velvet Luxcrime',
        price: 63000,
        desc: 'Lip cream dengan tekstur lembut seperti beludru, hasil akhir semi-matte yang membaur halus di bibir, diperkaya Vitamin E dan minyak jojoba untuk melembapkan, memberikan warna intens namun nyaman, serta memiliki efek blurring untuk menyamarkan tekstur bibir',
        img: 'image/luxcrime_lip_velvet.jpg'
      },
      {
        id: 'sunscreen-skintific2',
        name: 'Bright Sunscreen Skintific',
        price: 71091,
        desc: 'Sunscreen 2-in-1 dengan memberikan perlindungan SPF 50 PA++++ dan meratakan warna kulit secara instan dengan efek tone-up alami sekaligus one up secara instan tanpa meninggalkan white cast.',
        img: 'image/skin_bright_sunscreen.jpg'
      },
      {
        id: 'Serum-somethinc',
        name: 'Somethinc Serum',
        price: 120000,
        desc: 'Serum pencerah wajah dengan kandungan 2% BHA Salicylid Acid Liquid Profector. Mampu membersihkan pori tersumbat, mengurangi komedo, jerawat, dan mengontrol minyak berlebih, menenangkan kulit dan memperkuat skin barrier, serta cocok untuk kulit berminyak dan berjerawat.',
        img: 'image/somth_serum.jpeg'
      },
      {
        id: 'Lip Tint-dearmebeauty',
        name: 'Lip Tint Dear Me Beauty',
        price: 45000,
        desc: 'Lip tint berbahan ringan, warna tahan lama, cocok untuk tampilan natural sehari-hari. Dikaya nutrisi seperti Rosehip Oil, Vitamin E, dan Niacinamide untuk bibir sehat, serta Velvet Lip Tint dengan tekstur velvety-matte yang lembut, blurring effect, dan pigmentasi kuat.',
        img: 'image/dearme_lip_tint.png'
      },
      {
        id: 'Face Wash-somethinc',
        name: 'Face Wash Somethinc',
        price: 60000,
        desc: 'Pembersih wajah dengan aroma mint, membantu menyegarkan dan membersihkan kotoran ringan. Diformulasikan untuk membersihkan secara mendalam tanpa membuat kulit kering atau merusak skin barrier, cocok untuk semua jenis kulit termasuk sensitif dan berjerawat.',
        img: 'image/someth_cuci_muka.png'
      },
      {
        id: 'Sunscreen-dearmebeauty',
        name: 'Sunscreen Dear Me Beauty',
        price: 65000,
        desc: 'Tabir surya harian yang tidak lengket, memberikan efek glowing natural dan perlindungan kelembapan. Dengan SPF 50+ PA++++ yang melindungi dari UVA/UVB, blue light, polusi, dan radikal bebas.',
        img: 'image/dearme_sunscreen.png'
      },
      {
        id: 'Skintint-RAD',
        name: 'Skintint Rose All Day',
        price: 85000,
        desc: 'Skintint berbahan ringan, sehingga tidak membuat makeup berat diwajah, dengan coverage tipis hingga sedang yang bisa dibangun, formula pore-blurring, serta mengandung bahan perawatan kulit seperti Niacinamide dan Squalane, dilengkapi SPF 25 PA+++ dan Anti-Pollutant, cocok untuk semua jenis kulit.',
        img: 'image/Skintint_Rose_All_Day.png'
      },
      {
        id: 'Blush On-dearmebeauty',
        name: 'Blush On Dear Me Beauty',
        price: 50000,
        desc: 'Blush On dalam bentuk cream yang mudah untuk diblend, dengan coverage tipis hingga sedang yang bisa dibangun, formula pore-blurring, serta mengandung bahan perawatan kulit seperti Niacinamide dan Squalane, dilengkapi SPF 25 PA+++ dan Anti-Pollutant, cocok untuk semua jenis kulit.',
        img: 'image/dearme_blush_on.png'
      },
      {
        id: 'Moisturizer-dearmebeauty',
        name: 'Moisturizer Dear Me Beauty',
        price: 45000,
        desc: 'Moisturizer berbahan ringan dan cocok untuk digunakan kulit normal, dengan kombinasi Niacinamide 5%, 3x Ceramide Complex, dan Cica (80% Cica), membantu mencerahkan, menenangkan, dan mengurangi jerawat, serta melindungi dari blue light, menjadikannya ideal untuk semua jenis kulit, termasuk sensitif dan rentan jerawat.',
        img: 'image/dearme_cream.png'
      },
      {
        id: 'Mascara-RAD',
        name: 'Mascara Rose All Day',
        price: 65000,
        desc: 'Mascara yang dengan  formula waterproof, non-clumpy, dan tahan lama, memberikan efek panjang dan lentik natural.',
        img: 'image/rad_maskara.png'
      },
      {
        id: 'Loose Powder-RAD',
        name: 'Loose Powder Rose All Day',
        price: 55000,
        desc: 'Loose Powder ringan yang dapat menahan minyak sehari-hari. Memberikan hasil akhir soft matte, dan formula non-comedogenic yang tidak menyumbat pori.',
        img: 'image/rad_bedak.png'
      },
      {
        id: 'Cushion-RAD',
        name: 'Cushion Rose All Day',
        price: 220000,
        desc: 'Cushion lokal dengan efek pore-blurring untuk kulit flawless, dilindungi SPF 40 PA+++, serta mengandung 2% Niacinamide dan Hyaluronic Acid untuk melembapkan, mencerahkan, dan mengontrol minyak tanpa membuatnya cakey atau greasy, cocok untuk semua jenis kulit.',
        img: 'image/rad_cushion.png'
      },
      {
        id: 'Lip Tint-somethinc',
        name: 'Lip Tint Somethinc',
        price: 85000,
        desc: 'Lip Tint berbahan ringan, warna tahan lama, cocok untuk tampilan natural sehari-hari. Dengan hasil akhir blur powdery yang ringan, tahan lama, dan menutupi garis bibir gelap, serta Ombrella Lip Totem Tint dengan efek glossy dan stain tahan lama, dan Ceraplump Tinted Lip Balm yang lebih fokus pada perawatan bibir dengan pelembap, ceramide, peptide, dan SPF 25 PA++++ untuk bibir plumpy, sehat, dan terlindungi.',
        img: 'image/somth_lip_tint.jpg'
      },
      {
        id: 'Cushion-somethinc',
        name: 'Cushion Somethinc',
        price: 150000,
        desc: 'Cuushion dengan berbahan ringan yang dapat menahan minyak, tahan lama, dan diformulasikan untuk kulit serta cuaca Indonesia, dengan hasil akhir matte atau healthy glow yang menyatu dengan warna kulit dan menutupi kekurangan wajah.',
        img: 'image/someth_cuschion.png'
      },
      {
        id: 'Moisturizer-skintific',
        name: 'Moisturizer Somethinc',
        price: 225000,
        desc: 'Pelembap gel-krim ringan yang diformulasikan untuk mengunci kelembapan hingga 24 jam, memperkuat skin barrier, menghidrasi, mencerahkan, serta menyamarkan noda hitam.',
        img: 'image/someth_mois.png'
      },
      {
        id: 'Concealer-RAD',
        name: 'Concealer Rose All Day',
        price: '120000',
        desc: 'Concealer dengan dengan medium-to-high coverage yang bisa di-build, hasil akhir satin, dan formula creaseless (tidak mudah retak) yang melembapkan sekaligus mengontrol minyak berkat kandungan skincare seperti Hyaluronic Acid, Niacinamide, dan Marine Blue Vital C, dilengkapi efek pore-blurring, tahan lama, dan water-resistant, ideal untuk menutupi noda sambil merawat kulit.',
        img: 'image/rad_concealer_rose.png'
      },
      {
        id: 'Foundation-dearmebeauty',
        name: 'Foundation Dear Me Beauty',
        price: 75000,
        desc: 'Foundation coverage tinggi yang mampu meratakan warna kulit dan menyamarkan pori-pori dengan hasil akhir satin atau velvet yang halus seperti kulit asli, non-comedogenic, mudah dibaurkan, dan cukup tahan lama untuk pemakaian harian.',
        img: 'image/dearme_foundation.png'
      },
      {
        id: 'Body Serum-glad2glow',
        name: 'Body Serum Glad 2 Glow',
        price: 79000,
        desc: 'Body serum yang diformulasikan untuk menutrisi kulit secara mendalam dan membantu mencerahkan tampilan kulit kusam, menyamarkan noda gelap, meratakan warna kulit, dan melembapkan hingga 24 jam dengan kandungan utama seperti Niacinamide, Glycerin, serta ekstrak buah seperti Creamy Berry atau Tropical, memberikan kulit tampak lebih glowing, halus, dan harum tahan lama.',
        img: 'image/g2g_body_serum.jpg'
      },
      {
        id: 'Cushion-BNB',
        name: 'Cushion Barenbliss',
        price: 95000,
        desc: 'Cushion dengan flawless matte yang memberikan coverage tinggi dan tahan lama, mampu menyerap minyak berlebih dan menutrisi kulit, memberikan ketahanan hingga 24 jam.',
        img: 'image/barenblis_cushion.jpg'
      },
      {
        id: 'Micellar Water-glad2glow',
        name: 'Micellar Water Glad 2 Glow',
        price: 45000,
        desc: 'Pembersih makeup tanpa bilas yang mengangkat kotoran dan makeup, termasuk yang waterproof, dengan cepat dan lembut.',
        img: 'image/g2g_micelar_water.jpg'
      },
      {
        id: 'Liptint-BNB',
        name: 'Liptint Barenbliss',
        price: 55000,
        desc: 'Liptint Barenbliss dengan tekstur gel ringan dengan aroma buah persik yang memberikan warna intens, hasil akhir glossy, dan sensasi lembap tahan lama hingga 12 jam.',
        img: 'image/barenblis_liptint.jpg'
      },
      {
        id: 'Milk Amino-glad2glow',
        name: 'Milk Amino Glad 2 Glow',
        price: 65000,
        desc: 'Milk Amino dengan formula pH rendah yang lembut, kaya busa, mengandung bahan utama amino acid (asam amino) dan milk (susu) yang berfungsi membersihkan secara mendalam, menjaga kelembaban kulit, merawat skin barrier, dan membuat kulit terasa lebih cerah serta segar.',
        img: 'image/g2g_milk_amino.jpg'
      },
      { 
        id: 'Maskara-BNB',
        name: 'Maskara Barenbliss',
        price: 65000,
        desc: 'Maskara Barenbliss yang memberikan efek panjang lentik dengan formula tahan air hingga 24 jam, memberikan efek panjang, tebal, dan lentik dramatis tanpa menggumpal, diperkaya dengan kandungan seperti Peptida, Vitamin E, Jojoba Oil, dan Olive Oil untuk menutrisi dan memperkuat bulu mata.',
        img: 'image/barenblis_maskara.jpg'
      },
      {
        id: 'Power Bright Serum-glad2glow',
        name: 'Power Bright Serum Glad 2 Glow',
        price: 89000,
        desc: 'Serum dengan kandungan vitamin C untuk mengatasi noda hitam dan warna kulit yang tidak merata dengan formula utama 10% Niacinamide, Ekstrak Delima (Pomegranate), dan Alpha Arbutin yang ringan, cepat menyerap, dan efektif untuk mencerahkan, meratakan warna kulit, serta menyamarkan bekas jerawat.',
        img: 'image/g2g_power_bright_serum.jpg'
      },
      {
        id: 'Blush on-BNB',
        name: 'Blush on Barenblish',
        price: 77000,
        desc: 'Blush on yang memiliki tekstur mochi yang lembut dan creamy tahan lama hingga 12 jam dengan hasil akhir soft-matte, sangat mudah dibaurkan, serta diperkaya kandungan pelembap (skincare) untuk kulit sehat dan nyaman digunakan seharian.',
        img: 'image/barenblish_blush_on.jpg'
      },
      {
        id: 'Serum-glad2glow',
        name: 'Serum Glad 2 Glow',
        price: 75000,
        desc: 'Serum dengan multifungsi yang membantu menutrisi kulit dan menjaga elastisitas, untuk mengatasi masalah kulit seperti kusam, jerawat, dan noda hitam, dengan fokus mencerahkan, melembapkan, serta menenangkan kulit.',
        img: 'image/g2g_serum.jpg'
      }
    ];

    function formatRupiah(n){
      return 'Rp' + Number(n).toLocaleString('id-ID');
    }
    function trimDesc(text, max = 90) {
      return text.length > max ? text.substring(0, max) + "..." : text; 
    }
    function trimName(text, max = 20) {
      return text.length > max ? text.substring(0, max) + "..." : text;
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
          <h3>${trimName(p.name, 20)}</h3>
          <p class="small">${trimDesc(p.desc, 90)}</p>
          <div class="price">${formatRupiah(p.price)}</div>
          <div class="actions">
            <button class="btn add-cart" data-add="${p.id}">Tambah ke Keranjang</button>
            <button class="btn cart-icon-btn" data-add="${p.id}">
              <img src="image/keranjang.jpg" alt="cart">
            </button>
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

let vouchers = {
  'FIRST20': {
    name: 'Voucher Pembelian Pertama',
    discount: 0.20, 
    minPurchase: 0,
    used: false,
    description: 'Diskon 20% untuk pembelian pertama'
  }
};

function checkFirstTimeBuyer() {
  const orders = JSON.parse(localStorage.getItem('blushy_orders') || '[]');
  return orders.length === 0; 
}

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

    
  function openCheckout(){
  const total = cart.reduce((s,i)=>s + i.price * i.qty, 0);
  if(cart.length === 0){
    showToast('Keranjang masih kosong — tambahkan produk dulu');
    return;
  }
  
  const isFirstBuyer = checkFirstTimeBuyer();
  const voucherApplied = localStorage.getItem('voucher_applied') === 'FIRST20';
  
  let discount = 0;
  let finalTotal = total;
  
  if(voucherApplied && isFirstBuyer) {
    discount = total * vouchers['FIRST20'].discount;
    finalTotal = total - discount;
  }
  
  const itemsSummary = cart.map(i=>`<li style="margin:6px 0">${i.name} × ${i.qty} — <strong>${formatRupiah(i.price * i.qty)}</strong></li>`).join('');
  
  const voucherSection = isFirstBuyer ? `
    <div style="background:#FFF3CD;padding:12px;border-radius:8px;margin:10px 0">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <strong>🎉 Voucher Pembelian Pertama</strong>
          <p class="small" style="margin:4px 0 0">Diskon 20% untuk pembelian pertamamu!</p>
        </div>
        <button class="btn" onclick="applyVoucher('FIRST20')" id="voucherBtn" style="font-size:12px;padding:6px 12px">
          ${voucherApplied ? '✓ Terpasang' : 'Klaim'}
        </button>
      </div>
    </div>
  ` : '';
  
  openBackdrop(`
    <div class="modal-body-scroll">
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
            <option value="e-wallet">E-Wallet</option>
          </select>
        </div>

        <div id="bankOptions" style="display:none; margin-top:8px;">
          <label class="small">Pilih Bank</label>
          <select id="fBank" class= "bank-select">
            <option value="bri">Bank BRI</option>
            <option value="bni">Bank BNI</option>
            <option value="bca">Bank BCA</option>
            <option value="mandiri">Bank Mandiri</option>
            <option value="lainnya">Bank Lainnya</option>
          </select>
        </div>
        <div id="ewalletOptions" style="display:none; margin-top:8px;">
          <label class="small">Pilih E-Wallet</label>
          <select id="fEwallet" class="ewallet-select">
            <option value="ovo">OVO</option>
            <option value="dana">Dana</option>
            <option value="gopay">Gopay</option>
            <option value="shopeepay">ShopeePay</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
    </div>
    
        ${voucherSection}

        <div>
          <h5 style="margin:10px 0 6px">Ringkasan Pesanan</h5>
          <ul class="muted">${itemsSummary}</ul>
          <div style="padding-top:8px">
            <div style="display:flex;justify-content:space-between;padding:4px 0">
              <div class="muted">Subtotal</div>
              <div>${formatRupiah(total)}</div>
            </div>
            ${voucherApplied && isFirstBuyer ? `
              <div style="display:flex;justify-content:space-between;padding:4px 0;color:#28a745">
                <div>Diskon Voucher (20%)</div>
                <div>- ${formatRupiah(discount)}</div>
              </div>
            ` : ''}
            <div class="total-row" style="padding-top:8px;border-top:1px solid #eee">
              <div>Total yang harus dibayar</div>
              <div>${formatRupiah(finalTotal)}</div>
            </div>
          </div>
        </div>

        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px">
          <button class="btn ghost" onclick="closeBackdrop()">Kembali</button>
          <button class="btn" onclick="confirmOrder()">Konfirmasi & Bayar</button>
        </div>
      </div>
    </div>
  `);
  document.getElementById('fPayment').addEventListener('change', function () {
    const bankBox = document.getElementById('bankOptions');
    const ewBox = document.getElementById('ewalletOptions');

    if (this.value === 'bank') {
      bankBox.style.display = 'block';
      ewBox.style.display = 'none';
    } 
    else if (this.value === 'e-wallet') {
      ewBox.style.display = 'block';
      bankBox.style.display = 'none';
    } 
    else {
      bankBox.style.display = 'none';
      ewBox.style.display = 'none';
    }
  });

}
function applyVoucher(code) {
  const isFirstBuyer = checkFirstTimeBuyer();
  
  if(!isFirstBuyer) {
    showToast('Voucher ini hanya untuk pembelian pertama');
    return;
  }
  
  if(vouchers[code] && !vouchers[code].used) {
    localStorage.setItem('voucher_applied', code);
    showToast('✓ Voucher berhasil diterapkan!');
    openCheckout(); 
  }
}

function openVoucherInfo() {
  const isFirstBuyer = checkFirstTimeBuyer();
  const voucherApplied = localStorage.getItem('voucher_applied') === 'FIRST20';
  
  if(!isFirstBuyer) {
    openBackdrop(`
      <div style="text-align:center">
        <h4>🎟️ Voucher Pembelian Pertama</h4>
        <img src="image/voucher_desweb.png" style="width:100%;max-width:300px;border-radius:12px;margin:16px 0">
        <p class="muted">Maaf, voucher ini hanya untuk pembeli pertama kali.</p>
        <p style="color:#666;font-size:14px">Kamu sudah pernah berbelanja sebelumnya 😊</p>
        <button class="btn" onclick="closeBackdrop()" style="margin-top:12px">Tutup</button>
      </div>
    `);
    return;
  }
  
  openBackdrop(`
    <div style="text-align:center">
      <h4>🎉 Voucher Pembelian Pertama</h4>
      <img src="image/voucher_desweb.png" style="width:100%;max-width:300px;border-radius:12px;margin:16px 0">
      <div style="background:#FFF3CD;padding:14px;border-radius:10px;margin:12px 0;text-align:left">
        <p style="margin:0;font-weight:600;color:#333">📌 Detail Voucher:</p>
        <ul style="margin:8px 0;padding-left:20px;color:#666">
          <li>Diskon <strong>20%</strong> untuk total belanja</li>
          <li>Berlaku untuk pembelian pertama</li>
          <li>Tidak ada minimum pembelian</li>
          <li>Voucher otomatis tersedia saat checkout</li>
        </ul>
      </div>
      ${voucherApplied ? 
        '<p style="color:#28a745;font-weight:600">✓ Voucher sudah aktif di keranjangmu!</p>' : 
        '<p class="muted">Voucher akan muncul otomatis saat kamu checkout 🛒</p>'
      }
      <div style="display:flex;gap:8px;justify-content:center;margin-top:16px">
        <button class="btn ghost" onclick="closeBackdrop()">Tutup</button>
        <button class="btn" onclick="closeBackdrop(); document.getElementById('navProducts').click()">Belanja Sekarang</button>
      </div>
    </div>
  `);
}

window.openVoucherInfo = openVoucherInfo;

window.applyVoucher = applyVoucher;

   function confirmOrder(){
  const name = document.getElementById('fName')?.value?.trim();
  const phone = document.getElementById('fPhone')?.value?.trim();
  const address = document.getElementById('fAddress')?.value?.trim();
  const payment = document.getElementById('fPayment')?.value;
  let selectedBank = '';
  if (payment == 'bank') {
    selectedBank = document.getElementById('fBank')?.value || ''; 
  }

  if(!name || !phone || !address){
    showToast('Isi nama, no. HP, dan alamat terlebih dahulu');
    return;
  }

  const isFirstBuyer = checkFirstTimeBuyer();
  const voucherApplied = localStorage.getItem('voucher_applied') === 'FIRST20';
  
  let subtotal = cart.reduce((s,i)=>s + i.price * i.qty, 0);
  let discount = 0;
  let finalTotal = subtotal;
  
  if(voucherApplied && isFirstBuyer) {
    discount = subtotal * vouchers['FIRST20'].discount;
    finalTotal = subtotal - discount;
    vouchers['FIRST20'].used = true;
    localStorage.removeItem('voucher_applied'); 
  }

  const order = {
    id: 'ORD' + Date.now().toString().slice(-6),
    date: new Date().toISOString(),
    customer: {name, phone, address, payment, bank: selectedBank},
    items: cart,
    subtotal: subtotal,
    discount: discount,
    total: finalTotal,
    voucherUsed: voucherApplied ? 'FIRST20' : null
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
      ${discount > 0 ? `<p style="color:#28a745;font-weight:600">🎉 Kamu hemat ${formatRupiah(discount)} dengan voucher!</p>` : ''}
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
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPass').value.trim();

      if(!email || !pass){
        showToast("Isi email dan password");
        return;
      }

      let users = JSON.parse(localStorage.getItem('blushy_users') || '[]');

      
      const user = users.find(u => u.email === email && u.pass === pass);

      if(!user){
        showToast("Email atau password salah / belum terdaftar");
        return;
      }

    
      localStorage.setItem('blushy_user', JSON.stringify(user));

      showToast("Berhasil login!");
      closeBackdrop();
      updateUserUI();
    }


    function doRegister(){
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const pass = document.getElementById('regPass').value.trim();

      if(!name || !email || !pass){
        showToast("Lengkapi semua data pendaftaran");
        return;
      }

      
      let users = JSON.parse(localStorage.getItem('blushy_users') || '[]');

      
      if(users.some(u => u.email === email)){
        showToast("Email sudah terdaftar, gunakan email lain");
        return;
      }

      users.push({name, email, pass});
      localStorage.setItem('blushy_users', JSON.stringify(users));

      showToast("Akun berhasil dibuat!");
      closeBackdrop();
    }

    function updateUserUI(){
      const user = JSON.parse(localStorage.getItem('blushy_user'));
      const authBox = document.querySelector('.auth');

      if(user){
        authBox.innerHTML = `
          <span style="font-weight:600;color:#444">Halo, ${user.name || user.email}</span>
          <button class="btn ghost" id="btnLogout">Logout</button>
        `;
        document.getElementById('btnLogout').addEventListener('click', logoutUser);

      } else {
        authBox.innerHTML = `
          <button class="btn ghost" id="btnLogin">Login</button>
          <button class="btn" id="btnRegister">Daftar</button>
        `;

        document.getElementById('btnLogin').addEventListener('click', function() {
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

        document.getElementById('btnRegister').addEventListener('click', function() {
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
      }
    }

    function openLoginModal(){
      btnLogin.click(); 
    }

    function openRegisterModal(){
      btnRegister.click();
    }

    updateUserUI();



