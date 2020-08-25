class ExamSchedule{
     constructor(){
       this.Text=createElement("h2");
       this.label1=createElement("h3");
       this.label2=createElement("h3");
       this.label3=createElement("h3");
       this.label4=createElement("h3");
       this.label5=createElement("h3");
       this.label6=createElement("h3");
        //exam schedule inputs
        this.exam1=createInput("");
        this.exam2=createInput("");
        this.exam3=createInput("");
        this.exam4=createInput("");
        this.exam5=createInput("");
        this.exam6=createInput("");
        this.exam7=createInput("");
        this.exam8=createInput("");
        this.date1=createInput("");
        this.date2=createInput("");
        this.date3=createInput("");
        this.date4=createInput("");
        this.date5=createInput("");
        this.date6=createInput("");
        this.date7=createInput("");
        this.date8=createInput("");
        this.venue1=createInput("");
        this.venue2=createInput("");
        this.venue3=createInput("");
        this.venue4=createInput("");
        this.venue5=createInput("");
        this.venue6=createInput("");
        this.venue7=createInput("");
        this.venue8=createInput("");
        this.time1=createInput("");
        this.time2=createInput("");
        this.time3=createInput("");
        this.time4=createInput("");
        this.time5=createInput("");
        this.time6=createInput("");
        this.time7=createInput("");
        this.time8=createInput("");
        this.subject1=createInput("");
        this.subject2=createInput("");
        this.subject3=createInput("");
        this.subject4=createInput("");
        this.subject5=createInput("");
        this.subject6=createInput("");
        this.subject7=createInput("");
        this.subject8=createInput("");
        this.comments1=createInput("");
        this.comments2=createInput("");
        this.comments3=createInput("");
        this.comments4=createInput("");
        this.comments5=createInput("");
        this.comments6=createInput("");
        this.comments7=createInput("");
        this.comments8=createInput("");
        
     }
     display(){
       this.Text.position(160,130);
       this.Text.html("EXAM SCHEDULE"+"</br>"+"My oncoming exam schedule");
     
        this.label1.position(155,230);
        this.label1.html("Name of Examination");

        this.label2.position(365,230);
        this.label2.html("Date of Examination");

        this.label3.position(560,230);
        this.label3.html("Venue of Examination");

        this.label4.position(755,230);
        this.label4.html("Time of Examination");

        this.label5.position(960,230);
        this.label5.html("Subject & Paper");

        this.label6.position(1165,230);
        this.label6.html("Comments");

        this.exam1.position(160,300);
        this.exam2.position(160,360);
        this.exam3.position(160,420);
        this.exam4.position(160,480);
        this.exam5.position(160,540);
        this.exam6.position(160,600);
        this.exam7.position(160,660);
        this.exam8.position(160,720);
        this.date1.position(360,300);
        this.date2.position(360,360);
        this.date3.position(360,420);
        this.date4.position(360,480);
        this.date5.position(360,540);
        this.date6.position(360,600);
        this.date7.position(360,660);
        this.date8.position(360,720);
        this.venue1.position(560,300);
        this.venue2.position(560,360);
        this.venue3.position(560,420);
        this.venue4.position(560,480);
        this.venue5.position(560,540);
        this.venue6.position(560,600);
        this.venue7.position(560,660);
        this.venue8.position(560,720);
        this.time1.position(760,300);
        this.time2.position(760,360);
        this.time3.position(760,420);
        this.time4.position(760,480);
        this.time5.position(760,540);
        this.time6.position(760,600);
        this.time7.position(760,660);
        this.time8.position(760,720);
        this.subject1.position(960,300);
        this.subject2.position(960,360);
        this.subject3.position(960,420);
        this.subject4.position(960,480);
        this.subject5.position(960,540);
        this.subject6.position(960,600);
        this.subject7.position(960,660);
        this.subject8.position(960,720);
        this.comments1.position(1160,300);
        this.comments2.position(1160,360);
        this.comments3.position(1160,420);
        this.comments4.position(1160,480);
        this.comments5.position(1160,540);
        this.comments6.position(1160,600);
        this.comments7.position(1160,660);
        this.comments8.position(1160,720);


        
     }
}