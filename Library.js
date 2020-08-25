
class Library{

    constructor(){
    this.libText=createElement("h2");
    this.libLabel1=createElement("h2");
    this.libLabel2=createElement("h2");
    this.libLabel3=createElement("h2");
    this.libLabel4=createElement("h2");

    this.BackButton=createButton("Go back");
    this.BackButton.size(100,30);

    this.book1Input=createInput("");
    this.book2Input=createInput("");
    this.book3Input=createInput("");
    this.book4Input=createInput("");
    this.book5Input=createInput("");
    this.book6Input=createInput("");
    this.book7Input=createInput("");
    this.book8Input=createInput("");
    this.book1Source=createInput("");
    this.book2Source=createInput("");
    this.book3Source=createInput("");
    this.book4Source=createInput("");
    this.book5Source=createInput("");
    this.book6Source=createInput("");
    this.book7Source=createInput("");
    this.book8Source=createInput("");
    this.book1Issue=createInput("");
    this.book2Issue=createInput("");
    this.book3Issue=createInput("");
    this.book4Issue=createInput("");
    this.book5Issue=createInput("");
    this.book6Issue=createInput("");
    this.book7Issue=createInput("");
    this.book8Issue=createInput("");
    this.book1Return=createInput("");
    this.book2Return=createInput("");
    this.book3Return=createInput("");
    this.book4Return=createInput("");
    this.book5Return=createInput("");
    this.book6Return=createInput("");
    this.book7Return=createInput("");
    this.book8Return=createInput("");


    }

    display(){
    
    this.libText.position(160,110);  
    this.libText.html("*  LIBRARY  *"+"<br/>"+"Here you can make a list of the books/copies you have borrowed from the library/friend/teacher, their date of issue & return."+"<br/>"+"So it is now much easier for you to track every book/copy you borrowed.") 
    
   
    this.libLabel1.position(260,230);
    this.libLabel1.html("Name of the book");

   
    this.libLabel2.position(510,230);
    this.libLabel2.html("Source of the book");

    
    this.libLabel3.position(760,230);
    this.libLabel3.html("Date of issue");

    
    this.libLabel4.position(1010,230);
    this.libLabel4.html("Date of return");

 
   this.BackButton.position(780,800);

    this.book1Input.position(260,300);
    this.book2Input.position(260,360);
    this.book3Input.position(260,420);
    this.book4Input.position(260,480);
    this.book5Input.position(260,540);
    this.book6Input.position(260,600);
    this.book7Input.position(260,660);
    this.book8Input.position(260,720);
   
    this.book1Source.position(510,300);
    this.book2Source.position(510,360);
    this.book3Source.position(510,420);
    this.book4Source.position(510,480);
    this.book5Source.position(510,540);
    this.book6Source.position(510,600);
    this.book7Source.position(510,660);
    this.book8Source.position(510,720);
    
    this.book1Issue.position(760,300);
    this.book2Issue.position(760,360);
    this.book3Issue.position(760,420);
    this.book4Issue.position(760,480);
    this.book5Issue.position(760,540);
    this.book6Issue.position(760,600);
    this.book7Issue.position(760,660);
    this.book8Issue.position(760,720);

    this.book1Return.position(1010,300);
    this.book2Return.position(1010,360);
    this.book3Return.position(1010,420);
    this.book4Return.position(1010,480);
    this.book5Return.position(1010,540);
    this.book6Return.position(1010,600);
    this.book7Return.position(1010,660);
    this.book8Return.position(1010,720);
    
   
    this.BackButton.mousePressed(()=>{
        clear();
        game.update(2);

        this.BackButton.hide();

        this.libText.hide();
        this.libLabel1.hide();
        this.libLabel2.hide();
        this.libLabel3.hide();  
        this.libLabel4.hide();  

        this.book1Input.hide();
        this.book2Input.hide();
        this.book3Input.hide();
        this.book4Input.hide();
        this.book5Input.hide();
        this.book6Input.hide();
        this.book7Input.hide();
        this.book8Input.hide();
       
        this.book1Source.hide();
        this.book2Source.hide();
        this.book3Source.hide();
        this.book4Source.hide();
        this.book5Source.hide();
        this.book6Source.hide();
        this.book7Source.hide();
        this.book8Source.hide();
        
        this.book1Issue.hide();
        this.book2Issue.hide();
        this.book3Issue.hide();
        this.book4Issue.hide();
        this.book5Issue.hide();
        this.book6Issue.hide();
        this.book7Issue.hide();
        this.book8Issue.hide();
    
        this.book1Return.hide();
        this.book2Return.hide();
        this.book3Return.hide();
        this.book4Return.hide();
        this.book5Return.hide();
        this.book6Return.hide();
        this.book7Return.hide();
        this.book8Return.hide();
        
        
        game.displayChoose();
        //hide();

    });
}
hide(){
    this.BackButton.hide();

        this.libText.hide();
        this.libLabel1.hide();
        this.libLabel2.hide();
        this.libLabel3.hide();  
        this.libLabel4.hide();  

        this.book1Input.hide();
        this.book2Input.hide();
        this.book3Input.hide();
        this.book4Input.hide();
        this.book5Input.hide();
        this.book6Input.hide();
        this.book7Input.hide();
        this.book8Input.hide();
       
        this.book1Source.hide();
        this.book2Source.hide();
        this.book3Source.hide();
        this.book4Source.hide();
        this.book5Source.hide();
        this.book6Source.hide();
        this.book7Source.hide();
        this.book8Source.hide();
        
        this.book1Issue.hide();
        this.book2Issue.hide();
        this.book3Issue.hide();
        this.book4Issue.hide();
        this.book5Issue.hide();
        this.book6Issue.hide();
        this.book7Issue.hide();
        this.book8Issue.hide();
    
        this.book1Return.hide();
        this.book2Return.hide();
        this.book3Return.hide();
        this.book4Return.hide();
        this.book5Return.hide();
        this.book6Return.hide();
        this.book7Return.hide();
        this.book8Return.hide();
        
         
}     


}