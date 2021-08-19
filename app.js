function pinGenerate(){
 pin = Math.round(Math.random()*10000)
 if((""+pin).length==4){
    document.getElementById('display-pin').value = pin;
 }
 else{
     return pinGenerate()
 } 
 
}
document.getElementById('type_key').addEventListener('click', function(event){
     if(isNaN(event.target.innerText)){
         if(event.target.innerText=='C'){
            document.getElementById('input_text').value=''
         }
         if(event.target.innerText=='<'){
           str = document.getElementById('input_text').value
           document.getElementById('input_text').value= str.substring(0, str.length-1)
         }
         if(event.target.innerText=='Submit'){
             
             if(document.getElementById('input_text').value==document.getElementById('display-pin').value){
                
                document.getElementById('notify_success').style.display='block';
                document.getElementById('notify_error').style.display='none';
             }
             else{
                document.getElementById('notify_success').style.display='none'; 
                document.getElementById('notify_error').style.display='block';
             }
         }

     }
     else{
         document.getElementById('input_text').value+=event.target.innerText;
     }
})