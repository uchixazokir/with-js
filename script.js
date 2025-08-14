let a = ()=>{
   let set = prompt(`nechta`) 
   let con = confirm(set * 45000+`som \n zakaz qilasizmi`)

   switch(con){
      case true:
        alert(`qabul qilindi`)
        break
        default:
            alert(`atkaz qilindi`)
   }
}