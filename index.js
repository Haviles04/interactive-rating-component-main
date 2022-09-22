




   const ratingForm = document.getElementById('ratingForm');
   const ratingAnswer = document.getElementsByName('rating:checked');
   const ratingQuestion = document.getElementById('ratingQuestion');
   const thankYouBox = document.getElementById('thankYou');
   const ratingSelect = document.getElementById('chosenRating');
   const answer = ratingAnswer.value;

   
 

 const ratingSheetAnswer = () => {
         ratingQuestion.style.visibility ="hidden";
         thankYouBox.style.visibility ="visible";
         ratingSelect.innerHTML=`You selected ${answer} out of 5`
      
   };
