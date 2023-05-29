

const questions = document.querySelectorAll('.question');


questions.forEach(function(question){
   const btn = question.querySelector(".question-btn");

   btn.addEventListener("click",function(){
      questions.forEach(function (item){
         if(item !==  question){
            item.classList.remove("show-text");
            item.querySelector("i").classList.remove("show-arrow");
         }
      });
      question.classList.toggle("show-text");
      question.querySelector("i").classList.toggle("show-arrow");

   })
})

let switchText_text = {
    "1": {
       "text": "Lazard pioneered the independent advisory model of investment banking, which means we serve solely as an advisor, not as a lender or proprietary trader. Our clients are therefore assured that our financial interests align with theirs. For generations, this business model has helped us build client relationships built on trust and discretion.",
      
    },
    "2": {
       "text": "Every country has its own style, its own influencers, and its own way of doing business. Being part of the local fabric is essential to understanding it. Thanks to Lazard’s long and multi-cultural history, we have deep roots in business centers around the world, Linkedin a global network.  Our clients benefit from the depth of our local insights and relationships, enhanced by our global perspective.",
       
    },
    "3": {
        "text": "Clients who hire professional advisors rightly expect the highest level of expertise and wise counsel. Our culture prizes intellectual curiosity, diverse perspectives, thoughtfulness and the wisdom of experience. Our clients benefit from our continuous investment in attracting, retaining and developing the best people for this type of work.",
        
     },
   
 }
 function switchText(lang) {
    for (let key in switchText_text[lang]) {
       document.getElementById(key).innerHTML = switchText_text[lang][key];
    }
 }
