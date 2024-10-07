let dogruCevap = 0;

let soru1 = prompt("Türkiye'nin başkenti neresidir ? \n A)Ankara \n B)Adana \n C)Amasya").toLowerCase();

if (soru1 === "a") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap A şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}


let soru2 = prompt("Fas'ın Başkenti neresidir ? \n A)Kasablanka \n B)Rabat \n C)Marakeş").toLowerCase();

if (soru2 === "b") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap B şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru3 = prompt("Sırbistan'ın Başkenti neresidir ? \n A)Belgrad \n B)Niş \n C)Subotica").toLowerCase();

if (soru3 === "a") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap A şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru4 = prompt("Romanya'nın Başkenti neresidir ? \n A)Sibiu \n B)Köstence \n C)Bükreş").toLowerCase();

if (soru4 === "c") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap C şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru5 = prompt("Polonya'nın Başkenti neresidir ? \n A)Gdansk \n B)Krakow \n C)Varşova").toLowerCase();
if (soru5 === "c") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap C şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru6 = prompt("Bulgaristan'ın Başkenti neresidir ? \n A)Varna \n B)Sofya \n C)Filibe").toLowerCase();
if (soru6 === "b") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap B şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru7 =  prompt("Hırvatistan'ın Başkenti neresidir ? \n A)Dubrovnik \n B)Zagreb \n C)Zadar").toLowerCase();
if (soru7 === "b") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap B şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru8 =  prompt("Yunanistan'ın Başkenti neresidir ? \n A)Atina \n B)Mykonos \n C)Selanik").toLowerCase();
if (soru8 === "a") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap A şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru9 =  prompt("Slovenya'nın Başkenti neresidir ? \n A)Maribor \n B)Celje \n C)Lübliyana").toLowerCase();
if (soru9 === "c") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap C şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let soru10 =  prompt("Karadağ'ın Başkenti neresidir ? \n A)Kotor \n B)Budva \n C)Podgoritsa").toLowerCase();
if (soru10 === "c") {
  dogruCevap++;
  alert("Tebrikler doğru cevap \n Bir sonraki soru için altaki butonuna tıklayınız :)");
}else {
  alert("Doğru cevap C şıkkı. \n Bir sonraki soru için alttaki butonuna tıklayınız. ");
}

let yanlısCevap = 10 -dogruCevap

alert("Doğru cevap sayınız: " + dogruCevap + "\nYanlış cevap sayınız: " + yanlısCevap);
