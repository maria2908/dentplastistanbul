<script setup>
</script>
<template>

  <footer>
    <div class="footer bg-customDark">
      <div class="row flex justify-center items-center">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="hover:opacity-60" style="width: 35px" viewBox="0 0 512 512">
            <path fill="#ffffff"
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
          </svg>
        </a>
        <a href="#">
          <svg style="width: 35px" class="ml-12 hover:opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#ffffff"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </a>
        <a href="#">
          <svg style="width: 35px" class="ml-12 hover:opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#ffffff"
                  d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
          </svg>
        </a>
      </div>

      <div class="row">
        <ul>
          <li><a href="#">{{ $t('menu.main') }}</a></li>
          <li><a href="#">{{ $t('menu.dentistry') }}</a></li>
          <li><a href="#">{{ $t('menu.plastic-surgery') }}</a></li>
          <li><a href="#">{{ $t('menu.breast-enlargement') }}</a></li>
          <li><a href="#">{{ $t('menu.liposuction') }}</a></li>
        </ul>
      </div>

      <div class="row">
        Dentplastistanbul Copyright © 2024
      </div>
    </div>
  </footer>

</template>

<style scoped>

.footer {
  padding: 30px 0px;
  font-family: 'Play', sans-serif;
  text-align: center;
}

.footer .row {
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: white;
  font-size: 0.8em;
}

.footer .row a {
  text-decoration: none;
  color: white;
}

.footer .row ul a:hover {
  border-bottom: 2px solid white;
}

.footer .row ul {
  width: 100%;
}

.footer .row ul li {
  display: inline-block;
  margin: 0px 30px;
}

.footer .row a i {
  font-size: 2em;
  margin: 0% 1%;
}

@media (max-width: 720px) {
  .footer {
    text-align: left;
    padding: 5%;
  }

  .footer .row ul li {
    display: block;
    margin: 10px 0px;
    text-align: left;
  }

  .footer .row a i {
    margin: 0% 3%;
  }
}
</style>