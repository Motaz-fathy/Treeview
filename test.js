carets = document.getElementsByClassName("caret");
delbuttons = document.querySelectorAll(".delete");
caretparent = document.querySelector("#caretparent")
frontEnd = document.querySelector('#frontEnd')
parentitem = document.querySelectorAll('.parentitem')
childitem = document.querySelectorAll('.childitem')
grandchilditem = document.querySelectorAll('.grandchilditem')
greatgrandchilditem = document.querySelectorAll('.greatgrandchilditem')


for(i = 0 ; i<greatgrandchilditem.length ; i++) {
  greatgrandchilditem[i].querySelector('.greatgrandchildnumber').innerHTML = i+1
}
for(i = 0 ; i<grandchilditem.length ; i++) {
  grandchilditem[i].querySelector('.grandchildnumber').innerHTML = `0${i+1}`
}
for(i = 0 ; i < parentitem.length ; i ++ ){
  parentitem[i].querySelector('.parentnumber').innerHTML = `000${i+1}`
}
for(j = 0 ; j < childitem.length ; j++){
  childitem[j].querySelector('.childnumber').innerHTML = `00${j+1}`
}



for (var i = 0; i < carets.length; i++) {
  carets[i].addEventListener("click", function() {
    this.classList.toggle("caret-down");
    parent = this.parentElement;
    pn = parent.parentElement;
    pn.querySelector(".nested").classList.toggle("active");
  });
}

frontEnd.addEventListener("click" , function(e){
    if(e.target.classList == "delete"){
      deletebtn = e.target ;
      li = deletebtn.parentElement ;
      allnodecaret = li.parentElement
      pli = li.parentElement.classList.value
      
      if(pli == 'caretparent'){
        allnodecaret.remove()
      }

      if( pli == 'nested active') {
        li.remove()
      }else{
        console.log("not caret element ")
      }
    }
})

