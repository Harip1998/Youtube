window.onload = function () {

    var SongsList = [
        {
            title: "Google CEO Sundar Pichai’s I/O 2017 keynote",
            views: "40k views",
            time: "1 month ago",
           
        },
        {
            title: "FILHALL | Akshay Kumar Ft Nupur Sanon | BPraak | Jaani | Arvindr Khaira | Ammy Virk | Official Video",
            views: "20M",
            time: "1 years ago",
          
        },
        {
            title: "Aawara Shaam Hai | Meet Bros Ft. Piyush Mehroliyaa |Gaana Originals| Manjul, Rits Badiani, Shabbir",
            views: "45M",
            time: "3 years ago",
           
        },
        {
            title: "CAR Chalana SIKHIYE Sirf 10 Minutes Me! - Part 2. Easy Tutorial.",
            views: "1M",
            time: "2 years ago",
            
        },
        {
            title: "Data Structures and Algorithms",
            views: "2 M",
            time: "3 years ago",
           
        },
        {
            title: "Data Structures & Algorithms #1 - What Are Data Structures?",
            views: "4M",
            time: "5 years ago",
           
        },
    ]
    
    var commentList = [
    { name: "Harinath Prajapati", date: "1 day ago", comment: " stay at home",
     like: 123 },
    { name: "Pulkit Arora", date: " 3 day ago", comment: "Let's stay home, stop corona. ", like: 200},
    { name: " John Devidson", date: " 3 day ago", comment: "I request everyone to stay home safe due to #coronavirus epidemic (covid)-19 with all the precautionary measures like hand washing santizer wear mask when you go out for shopping and make sure your immune system is good.There are so many herbs  in ayurveda that easily boost your immune system like amla , giloy , tulsi.  I Used to drink giloy juice everyday to boost my immunity and if you cannot find these items in ur kitchen then you can use giloy capsules from #planetayurveda that have so many health benefits no side effects and boostbyour immunity naturally. ", like: 164 },
    { name: " Sachin Singh ", date: "5 days ago", comment: "fight with Corona ", like: 548},
    { name: " Soccer dag ", date: "2 mins ago", comment: " We are United .We will fight together with this virus.The whole world will fight and we will definitely win. Please Please Please 🙏🙏🙏.....Stay at home if not for world do it for your country,if not for country do it for your family.If you can't stay at home means that you are not hurting you only but your family and loved ones.Just for 21 days lockdown yourself   and your family at home.If there is no lockdown in your country then also please stay at home.The whole world is suffering from this virus. Let's break the chain.", like:6584},
    
     ]

    function renderSongsList(list) {
        var col= "";
        for (var i = 0; i < list.length; i++) {
            console.log("sa", list[i]);
            var Song = list[i];
            col += `<div class="row">
           
            <div class="col-sm-6">
           <iframe width="300" height="150" src="https://www.youtube.com/embed/vWLcyFtni6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           
            
            <div class="col-sm-6">
            <h6>${Song.title}</h6>

            <p>${Song.views} view . ${Song.time}</p>
            </div>
           </div>`;
        }
        document.getElementById("user_input").innerHTML = col;
    }
    renderSongsList(SongsList);

function renderComments(list) {
var com = "";
for (var i = 0 ; i < list.length; i++){
    console.log("b", list[i]);
    var comment = list[i];
    com += `<div class="container comment">
            
            <span class="one name">${comment.name}</span>
            <span class="one date">${comment.date}</span>
            <span class="comment_post">${comment.comment} </span>
             <button class="likes" style="margin-left: 7%;"><i class="fas fa-thumbs-up"></i> ${comment.like}</button>
            <button class="likes"><i class="fas fa-thumbs-down"></i></button>
            <button class="likes">REPLY</button>
            
            
        </div>`
}
document.getElementById("commentsList").innerHTML = com;
}
renderComments(commentList);

    document.getElementById("user_input2").addEventListener('keyup', (event) => {
        console.log(`key: ${event} has been released`, document.getElementById("user_input2").value);
        const value = document.getElementById("user_input2").value;
        var newList = [];
        for (var i = 0; i < SongsList.length; i++) {
            if (SongsList[i].title.includes(value)) {
                newList.push(SongsList[i]);
            }
        }
        renderSongsList(newList);
      
    });

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))


};

  
