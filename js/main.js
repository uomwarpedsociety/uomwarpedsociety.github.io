mainload = function(){
  currentpage = new CurrentPage();
};

clickmain = function(){
  document.getElementById('aboutimage').src = "image/about.png";
  document.getElementById('eventimage').src = "image/events.png";
  document.getElementById('pictureimage').src = "image/pictures.png";
  document.getElementById('joinimage').src = "image/join.png";
  document.getElementById('committeeimage').src = "image/committee.png";
}

hoverabout = function(){
  document.getElementById('aboutimage').src = "image/abouthover.png";
}

hoverevent = function(){
  document.getElementById('eventimage').src = "image/eventshover.png";
}

hoverpicture = function(){
  document.getElementById('pictureimage').src = "image/pictureshover.png";
}

hoverjoin = function(){
  document.getElementById('joinimage').src = "image/joinhover.png";
}

hovercommittee = function(){
  document.getElementById('committeeimage').src = "image/committeehover.png";
}

leaveabout = function(){
  if (currentpage.about === false){
    document.getElementById('aboutimage').src = "image/about.png";
  }
  else {
    document.getElementById('aboutimage').src = "image/aboutselected.png";
  }
}

leaveevent = function(){
  if (currentpage.event === false){
    document.getElementById('eventimage').src = "image/events.png";
  }
  else {
    document.getElementById('eventimage').src = "image/eventsselected.png";
  }
}

leavepicture = function(){
  if (currentpage.picture === false){
    document.getElementById('pictureimage').src = "image/pictures.png";
  }
  else {
    document.getElementById('pictureimage').src = "image/picturesselected.png";
  }
}

leavejoin = function(){
  if (currentpage.join === false){
    document.getElementById('joinimage').src = "image/join.png";
  }
  else {
    document.getElementById('joinimage').src = "image/joinselected.png";
  }
}

leavecommittee = function(){
  if (currentpage.committee === false){
    document.getElementById('committeeimage').src = "image/committee.png";
  }
  else {
    document.getElementById('committeeimage').src = "image/committeeselected.png";
  }
}

clickabout = function(){
  document.getElementById('aboutimage').src = "image/aboutselected.png";
  document.getElementById('eventimage').src = "image/events.png";
  document.getElementById('pictureimage').src = "image/pictures.png";
  document.getElementById('joinimage').src = "image/join.png";
  document.getElementById('committeeimage').src = "image/committee.png";
  currentpage.reset();
  currentpage.about = true;
}

clickevent = function(){
  document.getElementById('aboutimage').src = "image/about.png";
  document.getElementById('eventimage').src = "image/eventsselected.png";
  document.getElementById('pictureimage').src = "image/pictures.png";
  document.getElementById('joinimage').src = "image/join.png";
  document.getElementById('committeeimage').src = "image/committee.png";
  currentpage.reset();
  currentpage.event = true;
}

clickpicture = function(){
  document.getElementById('aboutimage').src = "image/about.png";
  document.getElementById('eventimage').src = "image/events.png";
  document.getElementById('pictureimage').src = "image/picturesselected.png";
  document.getElementById('joinimage').src = "image/join.png";
  document.getElementById('committeeimage').src = "image/committee.png";
  currentpage.reset();
  currentpage.picture = true;
}

clickjoin = function(){
  document.getElementById('aboutimage').src = "image/about.png";
  document.getElementById('eventimage').src = "image/events.png";
  document.getElementById('pictureimage').src = "image/pictures.png";
  document.getElementById('joinimage').src = "image/joinselected.png";
  document.getElementById('committeeimage').src = "image/committee.png";
  currentpage.reset();
  currentpage.join = true;
}

clickcommittee = function(){
  document.getElementById('aboutimage').src = "image/about.png";
  document.getElementById('eventimage').src = "image/events.png";
  document.getElementById('pictureimage').src = "image/pictures.png";
  document.getElementById('joinimage').src = "image/join.png";
  document.getElementById('committeeimage').src = "image/committeeselected.png";
  currentpage.reset();
  currentpage.committee = true;
}

CurrentPage = function(){
  this.about = false;
  this.event = false;
  this.picture = false;
  this.join = false;
  this.committee = false;
  this.reset = function(){
    this.about = false;
    this.event = false;
    this.picture = false;
    this.join = false;
    this.committee = false;
  }
}

mainload();
