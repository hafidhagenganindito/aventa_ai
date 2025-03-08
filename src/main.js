import "./css/style.css";
import "./css/style1.css";
import "./css/style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

import { startCountdown } from "./timer.js";

document.addEventListener("DOMContentLoaded", function () {
  startCountdown()
  const button = document.querySelector(".buy-button-1"); // Change selector if needed
  const button2 = document.querySelector(".buy-button"); // Change selector if needed
  if (button) {
    button.addEventListener("click", function () {
      window.open("https://aventa-app-4z85.vercel.app/registrasi/"+refCode, "_blank");
    });
  }
  if (button2) {
    button2.addEventListener("click", function () {
      window.open("https://aventa-app-4z85.vercel.app/registrasi/"+refCode, "_blank");
    });
  }
});

function getReferralCode() {
  const path = window.location.pathname; // Get the path (e.g., "/f9985")
  return path.substring(1); // Remove the leading "/"
}

const refCode = getReferralCode();
console.log("Referral Code:", refCode);

document.querySelector('#app').innerHTML = `
  
<!-- Revolutionkan Bisnis Online Anda dengan => style  -->
    <div class="div-1">
      <p>
        <span class="text-1">Revolutionkan </span>
        <span class="text-1">Bisnis Online Anda dengan</span>
      </p>
    </div>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Aventa, Jagonya jualan! => style -->
    <div class="div-2">
      <p>
        <span class="text-2">Aventa, </span>
        <span class="text-2">Jagonya jualan!</span>
      </p>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Aventa adalah AI (artificial intelligence) yang dirancang untuk meningkatkan penjualan, efisiensi, dan kualitas pelayanan bisnis online Anda. => style -->
    <div class="div-3">
      <p>Aventa adalah AI (artificial intelligence)</p>
      <p>yang dirancang untuk meningkatkan</p>
      <p>penjualan, efisiensi, dan kualitas</p>
      <p>pelayanan bisnis online Anda.</p>
    </div>

    <!--  --------------------------------------------------------------------------------------------------------------- -->
    <!-- Dengan teknologi Artificial Intelligence, Aventa akan mengelola bisnis online Anda secara otomatis dan efektif, mulai dari: => style -->
    <div class="div-4">
      <p>
        <span class="text-4">Dengan teknologi Artificial Intelligence,</span>
        <span class="text-4-1"> Aventa akan mengelola bisnis </span>
        <span class="text-4-1">online Anda secara otomatis dan</span>
        <span class="text-4-1"> efektif, mulai dari:</span>
      </p>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- List cards  => style -->
    <div class="div-card">
      <!-- Card 1 -->
      <div class="card">
        <div class="card-image">
          <img src="/src/images/image1.png" alt="" />
        </div>
        <div class="card-content">
          <span class="card-description">Membuat materi iklan</span>
          <br />
          <span class="card-description">yang menarik</span>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="card">
        <div class="card-image">
          <img src="/src/images/image2.png" alt="" />
        </div>
        <div class="card-content">
          <span class="card-description">Mempromosikan iklan </span>
          <br />
          <span class="card-description">untuk meningkatkan penjualan</span>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="card">
        <div class="card-image">
          <img src="/src/images/image3.png" alt="" />
        </div>
        <div class="card-content">
          <span class="card-description">Menjawab pertanyaan pelanggan </span>
          <br />
          <span class="card-description">dengan cepat dan akurat</span>
        </div>
      </div>
      <!-- Card 4 -->
      <div class="card">
        <div class="card-image">
          <img src="/src/images/image4.png" alt="" />
        </div>
        <div class="card-content">
          <span class="card-description">Bernegosiasi dengan pelanggan </span>
          <br />
          <span class="card-description">untuk meningkatkan penjualan</span>
        </div>
      </div>
      <!-- Card 5 -->
      <div class="card">
        <div class="card-image">
          <img src="/src/images/image5.png" alt="" />
        </div>
        <div class="card-content">
          <span class="card-description">Melakukan transaksi dengan </span>
          <br />
          <span class="card-description">
            pelanggan secara aman dan efektif</span
          >
        </div>
      </div>
      <!-- Card 6 -->
      <div class="card">
        <div class="card-image">
          <img src="/src/images/image6.png" alt="" />
        </div>
        <div class="card-content">
          <span class="card-description">Mencatat data pelanggan untuk </span>
          <br />
          <span class="card-description"> analisis dan perbaikan</span>
        </div>
      </div>
      <!-- Card 7 -->
      <div class="card">
        <div class="card-image">
          <img src="/src/images/image7.png" alt="" />
        </div>
        <div class="card-content">
          <span class="card-description"
            >Melaporkan hasil penjualan untuk
          </span>
          <br />
          <span class="card-description"> memantau kemajuan</span>
        </div>
      </div>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Dengan Aventa, Anda dapat meningkatkan kepuasan pelanggan secara signifikan! => style1 -->
    <div class="div-5">
      <p>
        <span class="text-5">Dengan Aventa, Anda dapat </span>
        <span class="text-5">meningkatkan kepuasan pelanggan</span>
        <span class="text-5"> secara signifikan!</span>
      </p>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Pemula diseluruh dunia sedang menghasilkan uang jutaan rupiah dari rumah dengan teknologi Artificial Intelligence => style1  -->
    <div class="div-6">
      <span class="text-6">Pemula diseluruh dunia sedang </span><br />
      <span class="text-6">menghasilkan uang jutaan rupiah </span><br />
      <span class="text-6">dari rumah dengan teknologi </span><br />
      <span class="text-6-1">Artificial Intelligence</span>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Woman img => style1 -->
    <div class="image">
      <img class="image-item" src="/src/images/image8.png" alt="" />
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Saya juga mau menghasilkan uang dari rumah, tapi.. => style1  -->
    <div class="div-7">
      <span>Saya juga mau menghasilkan</span>
      <br />
      <span>uang dari rumah, tapi..</span>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Lists style1 -->
    <div class="images">
      <div class="image-list-1">
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" /> Saya
        Gaptek
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" />
      </div>
      <div class="image-list-1">
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" /> Saya
        Sibuk Bekerja
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" />
      </div>
      <div class="image-list-1">
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" /> Saya
        Sibuk Ngurus Keluarga
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" />
      </div>
      <div class="image-list-1">
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" /> Saya
        Masih Sekolah
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" />
      </div>
      <div class="image-list-1">
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" /> Saya
        Tidak Punya Pengalaman
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" />
      </div>
      <div class="image-list-1">
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" /> Saya
        Takut Gagal
        <img class="image-list-1-1" src="/src/images/image9.png" alt="" />
      </div>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- dan saya tidak tahu bagaimana cara memulainya => style1 -->
    <div class="div-8">
      <p>
        <span class="text-3">dan saya tidak tahu </span>
        <span class="text-3"> bagaimana cara memulainya</span>
      </p>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- TENANG!! Kamu hanya perlu duduk diam dan tiba-tiba dapat duit, karena bisnis online kamu 100% dikerjakan oleh Aventa. => style1 -->
    <div class="div-9">
      <h1 class="text-7">TENANG!!</h1>
      <span class="text-7-1">Kamu hanya perlu duduk diam</span><br />
      <span class="text-7-1">dan tiba-tiba dapat duit, karena</span><br />
      <span class="text-7-1">bisnis online kamu 100%</span><br />
      <span class="text-7-1">dikerjakan oleh Aventa.</span><br />
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Dan kamu tidak perlu repot dan pusing untuk setting kecerdasan Artificial Intelligence (AI), karena semua sudah siap tinggal pakai. => style2  -->
    <div class="div-10">
      <p class="text-8">
        <span>Dan kamu tidak perlu repot dan pusing</span>
        <span> untuk setting kecerdasan Artificial</span><br />
        <span> Intelligence (AI), karena semua sudah </span><br />
        <span>siap tinggal pakai.</span><br />
      </p>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- ayo segera Miliki Aventa, Jagonya jualan! => style2  -->
    <div class="div-11">
      <h1>
        <span class="text-9">ayo segera Miliki</span>
        <span class="text-9-1"> Aventa, Jagonya jualan!</span>
      </h1>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- AI image => style2 -->
    <div class="image1">
      <img class="image-item1" src="/src/images/image10.png" alt="" />
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Sayangnya, Aventa yang jago jualan ini tidak gratisan. Untuk memiliki Aventa, harus dimaharin Rp. 500,000 => stye2  -->
    <div class="div-12">
      <span class="text-10">Sayangnya, Aventa yang jago jualan </span><br />
      <span class="text-10">ini tidak gratisan.</span><br />
      <span class="text-10-1"> Untuk memiliki Aventa, harus dimaharin </span
      ><br />
      <span class="text-10-2">Rp. 500,000 </span><br />
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Hari ini saja! - Jangan lewatkan kesempatan untuk mendapatkan penawaran yang luar biasa ini! Dapatkan sekarang juga dan nikmati manfaatnya! -->
    <!-- => style2  -->
    <!-- <div class="div-1">
      <p>
        <span class="text-1">Revolutionkan </span>
        <span class="text-1">Bisnis Online Anda dengan</span>
      </p>
    </div> -->

    <div class="discount-container">
      <div class="title">Hari Ini Saja!</div>
      <div class="discount">Dapatkan Diskon</div>
      <div class="discount-percentage">88,2%</div>
      <div class="pay-only">dan Bayar Hanya</div>
      <div class="price-container">
        <div class="new-price">Rp. 59,000</div>
        <div class="only">saja!</div>
      </div>
      <div class="old-price">Rp. 500,000</div>
      <button class="buy-button">SAYA MAU</button>
      <div class="bottom-text">
        Jangan Lewatkan Kesempatan untuk Mendapatkan Penawaran yang Luar Biasa
        Ini! Dapatkan Sekarang Juga dan Nikmati Manfaatnya!
      </div>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <div class="aventa-card">
      <div class="aventa-image">
        <img
          class="aventa-image-1"
          src="/src/images/image11.png"
          alt="Aventa Logo"
        />
      </div>

      <div class="aventa-logo">
        <h1 class="aventa-p">AVENTA</h1>
      </div>
      <div>
        <p class="aventa-p-1">Artifical Intelligence</p>
      </div>
    </div>

    <div class="aventa-text">
      <span>Anda Sangat </span><br />
      <span>Beruntung, Miliki</span><br />
      <span class="aventa-text-1">Aventa </span><span>Sekarang</span><br />
      <span> dan Dapatkan Voucher </span><br />
      <span>Belanja Senilai</span>
    </div>

    <div class="btn-voucher">Rp 500.000</div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Yuk... Maharin sekarang! Mumpung promonya masih berlaku sampai 1 jam kedepan. => style2 -->
    <div class="promo-text">
      <p class="title">Yuk... Maharin sekarang!</p>
      <p class="promo-text-1">Mumpung promonya masih</p>
      <p>berlaku sampai <span class="highlight">1 jam</span> kedepan.</p>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <div class="discount-timer">
      <p>Harga Spesial Diskon Ini Akan Berakhir Pada :</p>
    </div>

    <!-- ------------------------------------------------ -->
    <!-- Timer -->
    <!-- Timer => timer.css   -->
    <div class="timer-container">
      <!-- Spinner Jam -->
      <div class="spinner">
        <svg class="circle-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" class="background-circle"></circle>
          <circle
            cx="50"
            cy="50"
            r="40"
            class="progress-circle"
            id="hourCircle"
          ></circle>
        </svg>
        <span class="timer-text" id="hourText">01</span>
        <p class="label">JAM</p>
      </div>

      <!-- Spinner Menit -->
      <div class="spinner">
        <svg class="circle-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" class="background-circle"></circle>
          <circle
            cx="50"
            cy="50"
            r="40"
            class="progress-circle"
            id="minuteCircle"
          ></circle>
        </svg>
        <span class="timer-text" id="minuteText">30</span>
        <p class="label">MENIT</p>
      </div>

      <!-- Spinner Detik -->
      <div class="spinner">
        <svg class="circle-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" class="background-circle"></circle>
          <circle
            cx="50"
            cy="50"
            r="40"
            class="progress-circle"
            id="secondCircle"
          ></circle>
        </svg>
        <span class="timer-text" id="secondText">45</span>
        <p class="label">DETIK</p>
      </div>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Button Saya Mau => style2 -->
    <button class="buy-button-1">SAYA MAU</button>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- Salam hangat dari sahabatmu, Destya Ayu Sinta Putri 💖 => style2 -->
    <div class="greeting">
      <span>Salam hangat dari sahabatmu,</span><br />
      <span>Destya Ayu Sinta Putri 💖 <span class="heart"></span></span>
    </div>

    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <!-- ✨ AVENTA, JAGONYA JUALAN! ✨ => style2 -->
    <div class="aventa-title">
      ✨
      <h1>AVENTA, JAGONYA JUALAN!</h1>
      ✨
    </div>
`

