class Form1{
    constructor(){}

    display(){
        var WelcomeLabel=createElement("h2");
        WelcomeLabel.position(550,100);
        WelcomeLabel.html("Let's plan everything regarding your studies with Study R8! ");
        //WelcomeLabel.style('font-style','Arial');

        var nameLabel=createElement("h3");
        nameLabel.position(550,190);
        nameLabel.html("Name:");

        var input1=createInput("");
        input1.position(650,200);
        input1.size(250,30);

        var emailLabel=createElement("h3");
        emailLabel.position(550,285);
        emailLabel.html("Email-Id:");

        var input2=createInput("");
        input2.position(650,290);
        input2.size(250,30);

        var NextButton=createButton("Next");
        NextButton.position(670,360);
        NextButton.size(100,30);

        NextButton.mousePressed(function(){

            var name=input1.value();
            var email=input2.value();
            
            input1.hide();
            input2.hide();
            nameLabel.hide();
            emailLabel.hide();
            NextButton.hide();
            WelcomeLabel.hide();

            game.update(1);
            game.displayInfo();

    
            user.updateUserCount(userCount+1);
            user.updateUserDetails(name,email);
                
          
        })
  
    }

}