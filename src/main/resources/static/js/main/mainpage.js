
const clothesroompageopen = document.getElementById("clothesroompageopen");
const clothesroombutton = document.getElementById("clothesroom-button");


clothesroompageopen.addEventListener("click", function() {

  if (clothesroombutton.style.display === "none") {
    clothesroombutton.style.display = "block";
  } else {
    clothesroombutton.style.display = "none";
  }
});

let outerpoint, toppoint, bottompoint, etcpoint, personpoint, yourpoint;

document.getElementsByName('outer').forEach(function (element) {
element.addEventListener('click', function (event) {
outerpoint = event.target.value;
document.getElementById('yourouter').value = outerpoint;
});
});

document.getElementsByName('top').forEach(function (element) {
element.addEventListener('click', function (event) {
toppoint = event.target.value;
document.getElementById('yourtop').value = toppoint;
});
}); 

document.getElementsByName('bottom').forEach(function (element) {
element.addEventListener('click', function (event) {
bottompoint = event.target.value;
document.getElementById('yourbottom').value = bottompoint;
});
});

document.getElementsByName('etc').forEach(function (element) {
  element.addEventListener('click', function (event) {
  etcpoint = event.target.value;
  document.getElementById('youretc').value = etcpoint;
  });
  });

  document.getElementsByName('person').forEach(function (element) {
    element.addEventListener('click', function (event) {
    personpoint = event.target.value;
    });
    }); 











function checkyourpoint(a) {
  let result = a;

  if (outerpoint == 'pedding') {
    result = result + 12;
  } else if (outerpoint == 'coat') {
    result = result + 7;
  } else if (outerpoint == 'cardigan') {
    result = result + 3;
  }

  // 아우터 종류에 따른 점수 추가

  if (toppoint == 'sweatshirt') {
    result = result + 4;
  } else if (toppoint == 'tshirt' || toppoint == 'shirt') {
    result = result + 1;
  }



  if (bottompoint == 'pants') {
    result = result + 2;
  } else if (bottompoint == 'shortpants') {
    result = result + 1;
  }



  if (etcpoint == 'muffler' || etcpoint == 'beanie') {
    result = result + 1;
  }



  if (personpoint == 'hotman') {
    result = result + 4;
  } else if (personpoint == 'coldman') {
    result = result - 4 ;
  } else if (personpoint == 'normalman') {
    result = result ;
  }



  return result;
}

var hottestweatherpoint;
var coolestweatherpoint;
var averageweatherpoint ;



function changeweatherpoint() {
  if(dayweather == 'morning') {
    hottestweatherpoint = 6;  
    coolestweatherpoint = -5;
  } else if(dayweather == 'afternoon') {
    hottestweatherpoint = 14;  
    coolestweatherpoint = 10;
  } else if(dayweather == 'evening') {
    hottestweatherpoint = 1;  
    coolestweatherpoint = -7;
  }
  averageweatherpoint = (hottestweatherpoint + coolestweatherpoint)/ 2;
}


  
 let hotimg = document.createElement('img');
 hotimg.src = '/img/hotimg.png';
 let coldimg = document.createElement('img')
 coldimg.src = '/img/coldimg.png'
 let goodimg = document.createElement('img')
 goodimg.src = '/img/goodimg.png'

 var character = document.getElementById("character");
 
 function yourlook(yourpoint) {
   if (yourpoint + averageweatherpoint >= 16) {
     console.log("더워");
     character.replaceChild(hotimg, character.firstElementChild);
   } else if (yourpoint + averageweatherpoint <= 9) {
     console.log('추워');
     character.replaceChild(coldimg, character.firstElementChild);
   } else if (yourpoint + averageweatherpoint > 9 && yourpoint + averageweatherpoint < 16) {
     console.log('굳');
     character.replaceChild(goodimg, character.firstElementChild);
   }


};


document.getElementById('submitbutton').addEventListener('click', function(event) {
let yourpoint = 0;
changeweatherpoint() ;
yourpoint = checkyourpoint(yourpoint);
yourlook(yourpoint);
console.log(averageweatherpoint)
console.log(yourpoint + averageweatherpoint ) ;
console.log(yourpoint);

});


function togglemenu() {
  document.getElementById('sidebar1').classList.toggle('active');
}

document.getElementsByName('day').forEach(function (element) {
  element.addEventListener('click', function (event) {
  dayweather = event.target.value;
  console.log(dayweather);
  changeweatherpoint();
  console.log(averageweatherpoint);
  console.log(personpoint) ;
  console.log(yourpoint);
  });
  });

