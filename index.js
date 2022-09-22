




   const ratingForm = document.getElementById('ratingForm');
   const ratingAnswer = document.getElementsByName('rating:checked').value;
   const ratingQuestion = document.getElementById('ratingQuestion');
   const thankYouBox = document.getElementById('thankYou');
   const ratingSelect = document.getElementById('chosenRating');


   
 

 const ratingSheetAnswer = () => {
         ratingQuestion.style.visibility ="hidden";
         thankYouBox.style.visibility ="visible";
         ratingSelect.innerHTML=`You selected ${answer} out of 5`
      
   };
