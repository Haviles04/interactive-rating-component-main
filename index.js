





const ratingSheetAnswer = () => {
   const ratingAnswer = document.getElementsByName('rating');
   const ratingQuestion = document.getElementById('ratingQuestion');
   const thankYouBox = document.getElementById('thankYou');
   const ratingSelect = document.getElementById('chosenRating');

   for(let i = 0; i < ratingAnswer.length; i ++){
      if (ratingAnswer[i].checked){
         ratingQuestion.style.visibility ="hidden";
         thankYouBox.style.visibility ="";
         ratingSelect.innerHTML="You selected ${ratingAnswer} out of 5"
      } else {
         ratingSelect.innerHTML="Error, please try again!"
      }
   }
};
