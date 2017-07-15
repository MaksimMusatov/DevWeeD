$(".frontPage").append(
    '<selection><div class="mainWindow"><div class="logo"><div class="name-logo">DevWeeD<br>FarmProj</div></div><div class="button playGame">START</div><div class="button scores">DIFFIC</div></div></selection>'
);

function startPlay() {

   $('.frontPage').load('game_page.html section')
};

$('.playGame').on('click', startPlay);
//TODO: добавить отдельную страницу через жквери (аякс) метод .load. sdelat' dropdawn, kotoriu' vivedet vseh unitov i dast vozmojnost' vibrat' 1
