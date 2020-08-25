class FeesPayments{
    constructor(){
    this.Text=createElement("h2");
    this.label1=createElement("h3");
    this.label2=createElement("h3");
    //months
    this.Jan=createElement("h3");
    this.Feb=createElement("h3");
    this.Mar=createElement("h3");
    this.Apr=createElement("h3");
    this.May=createElement("h3");
    this.June=createElement("h3");
    this.July=createElement("h3");
    this.Aug=createElement("h3");
    this.Sept=createElement("h3");
    this.Oct=createElement("h3");
    this.Nov=createElement("h3");
    this.Dec=createElement("h3");
    
    this.BackButton=createButton("Return");
    this.BackButton.size(100,30);
    }
    
    display(){
    this.Text.position(120,90);
    this.Text.html("FEES PAYMENT"+"</br>"+"Keep a record of the fees paid to school or other tutors.")
   
    this.label1.position(130,200);
    this.label1.html("School/Teacher");
    this.label2.position(265,200);
    this.label2.html("Amount");

    this.Jan.position(345,200);
    this.Jan.html("Jan");
    this.Feb.position(425,200);
    this.Feb.html("Feb");
    this.Mar.position(505,200);
    this.Mar.html("Mar");
    this.Apr.position(585,200);
    this.Apr.html("Apr");
    this.May.position(665,200);
    this.May.html("May");
    this.June.position(745,200);
    this.June.html("June");
    this.July.position(825,200);
    this.July.html("July");
    this.Aug.position(905,200);
    this.Aug.html("Aug");
    this.Sept.position(985,200);
    this.Sept.html("Sept");
    this.Oct.position(1065,200);
    this.Oct.html("Oct");
    this.Nov.position(1145,200);
    this.Nov.html("Nov");
    this.Dec.position(1225,200);
    this.Dec.html("Dec");

    this.BackButton.position(780,800); 

    this.BackButton.mousePressed(()=>{
      clear();
      game.update(2);
      this.Text.hide();
      this.label1.hide();
      this.label2.hide();
      this.Jan.hide();
      this.Feb.hide();  
      this.Mar.hide();
      this.Apr.hide();
      this.May.hide();
      this.June.hide();  
      this.July.hide();
      this.Aug.hide();
      this.Sept.hide();
      this.Oct.hide();  
      this.Nov.hide();
      this.Dec.hide();
      this.BackButton.hide();
      for(feej=1;feej<=216;feej++){
        check.hide();
        }
      game.displayChoose();
      //hide();

      });
    }
    hide(){
      this.Text.hide();
      this.label1.hide();
      this.label2.hide();
      this.Jan.hide();
      this.Feb.hide();  
      this.Mar.hide();
      this.Apr.hide();
      this.May.hide();
      this.June.hide();  
      this.July.hide();
      this.Aug.hide();
      this.Sept.hide();
      this.Oct.hide();  
      this.Nov.hide();
      this.Dec.hide();  
      this.BackButton.hide();
      for(feej=1;feej<=216;feej++){
      check.hide();
      }

    }


    

}