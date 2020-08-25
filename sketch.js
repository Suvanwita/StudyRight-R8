var form1, form2, form3, user, game, timePlanner,examSchedule,bookRecord,feeRecord,reminderRecord,activityRecord,assRecord;
var gameState = 0;
var database;
var userCount;
var userIndex;
var goal;
var ImgSprite;
//var goalInput,goalvalue,submitButton;
var timeText, assText,Text3;
var libArray = [];
var userGoal=null;
var formImg,classImg,chooseImg,goalImg;
var feeCheckX,feeCheckY;
var feej;

function preload() { //to load images
   
  var  formImg=loadImage("Images/books.jfif");
  var  classImg=loadImage("Images/classroom.jfif");
  var  chooseImg=loadImage("Images/goalQuotes.jfif");
  var  goalImg=loadImage("Images/goalSetting.jfif");
  var  timeTableImg=loadImage("Images/timeTable.jfif");
  var  assignmentImg=loadImage("Images/assignment.jfif");
  var  examScheduleImg=loadImage("Images/exams.jfif");
  var  progressImg=loadImage("Images/examresults.jfif");
  var  libraryImg=loadImage("Images/library.jfif");
  var  tuitionImg=loadImage("Images/tuitionclass.jfif");
  var  feesImg=loadImage("Images/fees.jfif");
  var  cocurricularImg=loadImage("Images/Cocurricular.jfif");
  var remindImg=loadImage("Images/reminder.jfif");
   
}


function setup() {
    canvas = createCanvas(displayWidth - 36, displayHeight - 20);
    database = firebase.database();

   // ImgSprite = createSprite(160, 480, 200, 300);

    user = new User();
    user.getUserCount();
    user.readGoal();

    game = new Game();
    game.getState();
    game.start();


}


function draw() {

    //console.log(mouseX, mouseY);

    if (gameState === 0) {//user form introductory
        background(253,160,222);
       // ImgSprite.addImage(formImg);
      
    }

    if (gameState === 1) {//study r8 intro
        background(247, 140, 153);
      // ImgSprite.addImage(classImg);
    }

    if (gameState === 2) {//choose planner
        clear();
        background(184,255,245);
        //ImgSprite.addImage(chooseImg);
    }

    if (gameState === 3) {//goalsetting
        background(193,163,255);
       // ImgSprite.addImage(goalImg);
       // game.displayGoalSetting();
       goal=new GoalSetting();
       game.update(3.5);
  
    }
    if(gameState===3.5){
        goal.display();
    }


    if (gameState === 4) {//timeplanner
        background(204, 155, 247);
       //ImgSprite.addImage(timeTableImg);

        hr = hour();
        mn = minute();
        sc = second();
        angleMode(DEGREES);
        scAngle = map(sc, 0, 60, 0, 360);
        mnAngle = map(mn, 0, 60, 0, 360);
        hrAngle = map(hr % 12, 0, 60, 0, 360);
        fill(242, 201, 195);
        ellipse(150, 300, 300, 300);
        //second hand
        translate(150, 300);
        rotate(-80);//-90
        push();
        rotate(scAngle);
        stroke(134, 165, 213);
        strokeWeight(3);
        line(0, 0, 140, 0);
        pop();
        //minute hand
        translate(0, 0);
        rotate(-10);//-180
        push();
        rotate(mnAngle);
        stroke(107, 96, 190);
        strokeWeight(6);
        line(0, 0, 120, 0);
        pop();
        //hour hand
        translate(0, 0);
        rotate(180);//180
        push();
        rotate(hrAngle);
        stroke(107, 96, 190);
        strokeWeight(8);
        line(0, 0, 80, 0);
        pop();

        //game.displayTimePlanner();
        timePlanner=new TimePlanner;
        game.update(4.5);
       }
        if(gameState==4.5){
            timePlanner.display();
        }

    if (gameState === 5) {//exam
        background(255, 241, 59);
        //game.displayExamSchedule();

        var examX = 140, examY = 160;
        for (examY = 160; examY < 701; examY += 60) {
            line(140, examY, 1340, examY);
        }
        for (examX = 140; examX < 1341; examX += 200) {
            line(examX, 160, examX, 700);
        }        
       // ImgSprite.addImage(examScheduleImg);

       examSchedule=new ExamSchedule;
       game.update(5.5); 

    }
    if(gameState==5.5){    
        examSchedule.display(); 
    }

    if (gameState === 6) {//progress
        background(231, 221, 247);
      //  ImgSprite.addImage(progressImg);


    }

    if (gameState === 7) {//library
        background(218, 169, 203);
       
       // ImgSprite.addImage(libraryImg);
        var timeX = 240, timeY = 160;
        for (timeY = 160; timeY < 710; timeY += 60) {
            line(240, timeY, 1230, timeY);
        }
        for (timeX = 240; timeX < 1230; timeX += 247) {
            line(timeX, 160, timeX, 710);
        }

        
        bookRecord=new Library();
        game.update(7.5);
       //game.displayLibrary();
    }
    if(gameState==7.5){
        bookRecord.display();
    }

    if (gameState === 8) {//fees
        background(229, 147, 204);
      //  ImgSprite.addImage(feesImg);

        line(100, 140, 100, 710);
        var feeX = 100, feeY = 140;
        for (feeY = 140; feeY < 740; feeY += 30) {
            line(100, feeY, 1293, feeY);
        }
        for (feeX = 250; feeX < 1293; feeX += 80) {
            line(feeX, 140, feeX, 710);
        }
        if(gameState!=2){
        for (var feeCheckY = 245; feeCheckY < 760; feeCheckY += 30) {
            for (var feeCheckX = 360; feeCheckX < 1280; feeCheckX += 80) {
                // createCheckbox(feeCheckX,feecheckY);
                check = createCheckbox("", false);
                check.position(feeCheckX, feeCheckY);
               
            }
        }}

        feeRecord=new FeesPayments();
        game.update(8.5);

        //game.displayFeesPayment();

    }
    if (gameState==8.5){
        feeRecord.display();
    }

    if(gameState==8 ||gameState==8.5 ){
        for(feej=1;feej<=216;feej++){
            check.hide();
            }  
    }

    if (gameState === 9) {//assignment
        background(170, 248, 239);
        //ImgSprite.addImage(assignmentImg);
        //assignment,subject,dueDate,source
        var asX = 240, asY = 160;
        for (asY = 160; asY < 710; asY += 60) {
            line(240, asY, 1230, asY);
        }
        for (asX = 240; asX < 1230; asX += 247) {
            line(asX, 160, asX, 710);
        }
        assRecord=new Assignment();
        game.update(9.5);
       // game.displayAssignment();
    }
    if(gameState==9.5){
        assRecord.display();
    }
    if (gameState === 10) {//tuition
        background(227, 241, 159);
        var tuiX = 70, tuiY = 120;
        for (tuiY = 120; tuiY < 770; tuiY += 80) {
            line(70, tuiY, 1210, tuiY);
        }
        for (tuiX = 70; tuiX < 1220; tuiX += 190) {
            line(tuiX, 120, tuiX, 760);
        }
       // ImgSprite.addImage(tuitionImg);
    }

    if (gameState === 11) {//cocurricular
        background(248, 248, 0);
        var coX = 240, coY = 160;
        for (coY = 160; coY < 710; coY += 60) {
            line(240, coY, 1240, coY);
        }
        for (coX = 240; coX < 1240; coX += 199) {
            line(coX, 160, coX, 710);
        }

        activityRecord=new Cocurricular();
        game.update(11.5);
       // ImgSprite.addImage(cocurricularImg);
    }
    if(gameState==11.5){
        activityRecord.display();
    }

    if (gameState === 12) {
        background(250, 100, 100);
        //ImgSprite.addImage(remindImg);
        for(reY=200;reY<1200;reY+=100){
            line(200,reY,1200,reY);
        }
        line(200,200,200,800);
        line(1200,200,1200,800);
        line(900,200,900,800);

        console.log(hour()+":"+minute())

        reminderRecord=new Reminders();
        game.update(12.5);
    }
    if(gameState==12.5){
        reminderRecord.display();
    }

    
drawSprites();
}


//photoscissors.com