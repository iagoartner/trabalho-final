function mascara(i,t){
   
    var v = i.value;
 
    if(t == "cpf"){
       i.setAttribute("maxlength", "14");
       if (v.length == 3 || v.length == 7) i.value += ".";
       if (v.length == 11) i.value += "-";
    }
 
    if(t == "tel"){
       if(v[0] == 9){
          i.setAttribute("maxlength", "10");
          if (v.length == 5) i.value += "-";
       }else{
          i.setAttribute("maxlength", "9");
          if (v.length == 4) i.value += "-";
       }
    }
 }