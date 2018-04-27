///#access_token=513059489.8aae704.a82aca91f55b4dddb850021b9a502eff
var doc = document;


const access_token='513059489.8aae704.a82aca91f55b4dddb850021b9a502eff';
var pathUser = "https://api.instagram.com/v1/users/self/?access_token="+access_token;
var pathContent = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+access_token+"&count=5";


// inf about User
var xmlh = new XMLHttpRequest();
xmlh.open('GET', pathUser, false);
xmlh.send();
var userFull =JSON.parse(xmlh.responseText);

// inf about Content
var xhr = new XMLHttpRequest();
xhr.open('GET', pathContent, false);
xhr.send();
var dataFull =JSON.parse(xhr.responseText);

//  var dataFull =JSON.parse(xhr.responseText, function(key, value) {
//     if (key == 'created_time') return new Date(value);
//      return value;
//  });
 doc.img.src = userFull.data.profile_picture;

var header = doc.getElementById("header");
headName = userFull.data.username;
headCount = userFull.data.counts.media;
header.innerHTML = headName +'<br/>Публикаций '+ headCount;



var content = doc.getElementById('content');
for (var i = 0; i< 5 ; i++) {
    var intent = doc.createElement('div');
    intent.id = 'intent';

    var photo = doc.createElement('div');
    photo.id = "photo";
    var srcPh = dataFull.data[i].images.standard_resolution.url;
    var ph = doc.createElement('img');
        ph.src=srcPh;
        ph.name = "pht";
    photo.appendChild(ph);
   // photo.innerHTML = "  <img name='ph' src = srcPh width='100%'/>";
    intent.appendChild(photo);


    var description = doc.createElement('div');
    description.id = "description";
    var descText = dataFull.data[i].caption.text;
    var descLike = dataFull.data[i].likes.count;
    var descComm =  dataFull.data[i].comments.count;
    var descTime = dataFull.data[i].created_time;

   description.innerHTML = descText +"<br/>Лайков "+ descLike + "Коммент" + descComm +  "<br/>" + descTime;
    intent.appendChild(description);

    // var tags = dataFull.data[i].tags;
    // if(tag.length > 0){
    //     var tagsDiv = doc.createElement('div');
    //     tagsDiv.id = 'tags';
    //     var j = 0;
    //     var str ="";
    //     while(j < tags.length)
    //     {a
    //        var tag = "#" + tags[j];
    //        str = str +" "+ tag;
    //         j++;
    //     }
    //     tagsDiv.innerHTML = str;
    //     intent.appendChild(tagsDiv);
    // }

    content.appendChild(intent);
}
function loadPhoto()
{
    
}
if (dataFull.pagination !="")
{
    var button = doc.createElement('input');
    button.type = "button";
    button.name = "button";
    button.onclick = loadPhoto;
    button.value = "Загрущить еще";
    content.appendChild(button);
}
