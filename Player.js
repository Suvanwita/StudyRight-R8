class User{
    constructor(){}

    getUserCount(){
        var userCountRef=database.ref("userCount");
        userCountRef.on("value",function(data){
            userCount=data.val();     
        });
    }
   
    updateUserCount(count){
        database.ref('/').update({
            userCount:count
        })    
        console.log(userCount);
    }

    updateUserDetails(name,email){
        var userIndex="User"+userCount;
       
        database.ref("Users/"+userIndex).update({
            name:name,
            email:email
        })
    }

  //goal setting      
    readGoal(data){
    userGoal=database.ref("Users/UserIndex/Goal");
    userGoal.on("value",function(data){
        userGoal=data.val();
    });
   }
     writeGoal(data){
        database.ref("Users/UserIndex/Goal").set({
            Goal:goalvalue
        })            
     }
    
   //library
   readBook1(data){
    userGoal=database.ref("Users/UserIndex/Book1");
    userGoal.on("value",function(data){
        userGoal=data.val();
    });
   }
   writeBook1(data){
    database.ref("Users/UserIndex/Book1").set({
        Book1:book1Input.value()
    })            
    }
   
     
   
    }


