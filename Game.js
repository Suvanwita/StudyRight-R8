class Game{
    constructor(){}

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
          
   
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }

    
    start(){
        if(gameState===0){
            form1=new Form1();
            form1.display();
        }
    }
   
    displayInfo(){
        if(gameState===1){
            form2=new Form2();
            form2.display();
        }
    }

    displayChoose(){
      if(gameState===2){
         // clear();
            //goal.hide();
          form3=new Form3();
          form3.display();
      }  
    }

    displayGoalSetting(){
        if(gameState===3){
           // goal=new GoalSetting();
           // goal.display();
        }
    }

    displayTimePlanner(){
       if(gameState===4){
        
       }
    }
    displayExamSchedule(){
       if(gameState===5){
         
       }
    }
    displayYourProgress(){
       if(gameState===6){

       }
    }
    displayLibrary(){
       if(gameState===7){
         
           //bookRecord.display();
       }
    }
    displayAssignment(){
       if(gameState===10){
          
       }
    }
    displayTuitionClass(){
       if(gameState===9){}
    }
    displayFeesPayment(){
       if(gameState===8){
           //feeRecord=new FeesPayments();
           //feeRecord.display();
       }
    }
    displayCocurricularActivities(){
       if(gameState===11){}
    }

    displayReminders(){
       if(gameState===12){
          
       }
    }
    

}

    

  
//hussain.madarwala@whitehatjr.com
//sonalmehta2701@gmail.com