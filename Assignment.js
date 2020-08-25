//var book1,book2,book3,book4,book5,book6,book7,book8,book9,book10;
//var libText,libLabel1,libLabel2,libLabel3,libLabel4;
class Assignment{
    constructor(){
        this.as1=createInput("");
        this.as2=createInput("");
        this.as3=createInput("");
        this.as4=createInput("");
        this.as5=createInput("");
        this.as6=createInput("");
        this.as7=createInput("");
        this.as8=createInput("");
        this.sub1=createInput("");
        this.sub2=createInput("");
        this.sub3=createInput("");
        this.sub4=createInput("");
        this.sub5=createInput("");
        this.sub6=createInput("");
        this.sub7=createInput("");
        this.sub8=createInput("");
        this.sou1=createInput("");
        this.sou2=createInput("");
        this.sou3=createInput("");
        this.sou4=createInput("");
        this.sou5=createInput("");
        this.sou6=createInput("");
        this.sou7=createInput("");
        this.sou8=createInput("");
        this.due1=createInput("");
        this.due2=createInput("");
        this.due3=createInput("");
        this.due4=createInput("");
        this.due5=createInput("");
        this.due6=createInput("");
        this.due7=createInput("");
        this.due8=createInput(""); 
        this.assText=createElement("h2");
        this.assLabel1=createElement("h2");
        this.assLabel2=createElement("h2");
        this.assLabel3=createElement("h2");
        this.assLabel4=createElement("h2");
    }
    display(){
    
    this.assText.position(160,140);  
    this.assText.html("*  ASSIGNMENTS  *"+"<br/>"+"Here you can make a list of your assignments,the subject,the source and the due date") 
    
   
    this.assLabel1.position(260,230);
    this.assLabel1.html("Your Assignments");

    
    this.assLabel2.position(510,230);
    this.assLabel2.html("Subject");

    
    this.assLabel3.position(760,230);
    this.assLabel3.html("Source(School/tuition)");

    
    this.assLabel4.position(1010,230);
    this.assLabel4.html("Due Date");

    
    

        this.as1.position(260,310);
        this.as2.position(260,370);
        this.as3.position(260,430);
        this.as4.position(260,490);
        this.as5.position(260,550);
        this.as6.position(260,610);
        this.as7.position(260,670);
        this.as8.position(260,730);

        this.sub1.position(510,310);
        this.sub2.position(510,370);
        this.sub3.position(510,430);
        this.sub4.position(510,490);
        this.sub5.position(510,550);
        this.sub6.position(510,610);
        this.sub7.position(510,670);
        this.sub8.position(510,730); 

        this.sou1.position(760,310);
        this.sou2.position(760,370);
        this.sou3.position(760,430);
        this.sou4.position(760,490);
        this.sou5.position(760,550);
        this.sou6.position(760,610);
        this.sou7.position(760,670);
        this.sou8.position(760,730);

        this.due1.position(1010,310);
        this.due2.position(1010,370);
        this.due3.position(1010,430);
        this.due4.position(1010,490);
        this.due5.position(1010,550);
        this.due6.position(1010,610);
        this.due7.position(1010,670);
        this.due8.position(1010,730);
    }

}