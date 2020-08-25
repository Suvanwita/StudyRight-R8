class Reminders{
    constructor(){
        this.remindText=createElement("h1");
        this.l1=createElement("h1");
        this.l2=createElement("h2");
        this.r1=createInput("");
        this.r2=createInput("");
        this.r3=createInput("");
        this.r4=createInput("");
        this.r5=createInput("");
        this.d1=createInput("");
        this.m1=createInput("");
        this.y1=createInput("");
        this.hr1=createInput("");
        this.mn1=createInput("");
        this.d2=createInput("");
        this.m2=createInput("");
        this.y2=createInput("");
        this.hr2=createInput("");
        this.mn2=createInput("");
        this.d3=createInput("");
        this.m3=createInput("");
        this.y3=createInput("");
        this.hr3=createInput("");
        this.mn3=createInput("");
        this.d4=createInput("");
        this.m4=createInput("");
        this.y4=createInput("");
        this.hr4=createInput("");
        this.mn4=createInput("");
        this.d5=createInput("");
        this.m5=createInput("");
        this.y5=createInput("");
        this.hr5=createInput("");
        this.mn5=createInput("");
        
        this.backButton=createButton("Go Back");
    }
    display(){
        this.remindText.position(200,100);
        this.remindText.html("REMINDERS"+"</br>"+"You can set reminders at a scheduled time over here."+"</br>"+"Now, you will not miss any important assignment.")
        this.l1.position(220,250);
        this.l2.position(910,250);
        this.l1.html("Reminders");
        this.l2.html("Date & Time for Alert"+"</br>"+"DD-MM-YY HH-MM");
        this.r1.position(240,400);
        this.r1.size(600,40);
        this.r2.position(240,500);
        this.r2.size(600,40);
        this.r3.position(240,600);
        this.r3.size(600,40);
        this.r4.position(240,700);
        this.r4.size(600,40);
        this.r5.position(240,800);
        this.r5.size(600,40);

        this.d1.position(930,400);
        this.d1.size(30,30);
        this.m1.position(970,400);
        this.m1.size(30,30);
        this.y1.position(1010,400);
        this.y1.size(30,30);
        this.hr1.position(1050,400);
        this.hr1.size(30,30);
        this.mn1.position(1090,400);
        this.mn1.size(30,30);

        this.d2.position(930,500);
        this.d2.size(30,30);
        this.m2.position(970,500);
        this.m2.size(30,30);
        this.y2.position(1010,500);
        this.y2.size(30,30);
        this.hr2.position(1050,500);
        this.hr2.size(30,30);
        this.mn2.position(1090,500);
        this.mn2.size(30,30);

        this.d3.position(930,600);
        this.d3.size(30,30);
        this.m3.position(970,600);
        this.m3.size(30,30);
        this.y3.position(1010,600);
        this.y3.size(30,30);
        this.hr3.position(1050,600);
        this.hr3.size(30,30);
        this.mn3.position(1090,600);
        this.mn3.size(30,30);

        this.d4.position(930,700);
        this.d4.size(30,30);
        this.m4.position(970,700);
        this.m4.size(30,30);
        this.y4.position(1010,700);
        this.y4.size(30,30);
        this.hr4.position(1050,700);
        this.hr4.size(30,30);
        this.mn4.position(1090,700);
        this.mn4.size(30,30);

        this.d5.position(930,800);
        this.d5.size(30,30);
        this.m5.position(970,800);
        this.m5.size(30,30);
        this.y5.position(1010,800);
        this.y5.size(30,30);
        this.hr5.position(1050,800);
        this.hr5.size(30,30);
        this.mn5.position(1090,800);
        this.mn5.size(30,30);

        this.backButton.position(697,876);

        this.backButton.mousePressed(()=>{
            clear();
            game.update(2);
    
            this.backButton.hide();
    
            this.remindText.hide();
            this.l1.hide();
            this.l2.hide();
            
            this.r1.hide();
            this.r2.hide();
            this.r3.hide();
            this.r4.hide();
            this.r5.hide();
           
            this.d1.hide();
            this.m1.hide();
            this.y1.hide();
            this.hr1.hide();
            this.mn1.hide();
           
            this.d2.hide();
            this.m2.hide();
            this.y2.hide();
            this.hr2.hide();
            this.mn2.hide();

            this.d3.hide();
            this.m3.hide();
            this.y3.hide();
            this.hr3.hide();
            this.mn3.hide();

            this.d4.hide();
            this.m4.hide();
            this.y4.hide();
            this.hr4.hide();
            this.mn4.hide();

            this.d5.hide();
            this.m5.hide();
            this.y5.hide();
            this.hr5.hide();
            this.mn5.hide();

            game.displayChoose();
            //hide();
    
        })

    }
        hide(){
            this.backButton.hide();
    
            this.remindText.hide();
            this.l1.hide();
            this.l2.hide();
            
            this.r1.hide();
            this.r2.hide();
            this.r3.hide();
            this.r4.hide();
            this.r5.hide();
           
            this.d1.hide();
            this.m1.hide();
            this.y1.hide();
            this.hr1.hide();
            this.mn1.hide();
           
            this.d2.hide();
            this.m2.hide();
            this.y2.hide();
            this.hr2.hide();
            this.mn2.hide();

            this.d3.hide();
            this.m3.hide();
            this.y3.hide();
            this.hr3.hide();
            this.mn3.hide();

            this.d4.hide();
            this.m4.hide();
            this.y4.hide();
            this.hr4.hide();
            this.mn4.hide();

            this.d5.hide();
            this.m5.hide();
            this.y5.hide();
            this.hr5.hide();
            this.mn5.hide();

        }

    }

