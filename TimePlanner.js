class TimePlanner{
    constructor(){
        this.timeText=createElement("h2");
        this.label=createElement("h1");
        this.BackButton3=createButton("Go back");
        this.year=createButton("Yearly Planner");
        this.month=createButton("Monthly Planner");
        this.week=createButton("Weekly Planner");
    }

    display(){
          
       this.timeText.position(40,560);
       this.timeText.html("Time is the most precious gift." +"<br/>"+"Don't waste it.");
                   
        this.BackButton3.position(750,800);
        this.BackButton3.size(100,30);

        this.week.position(610,280);
        this.week.size(350,80);
        this.week.style('font-size','40px');
        this.month.position(610,380);
        this.month.size(350,80);
        this.month.style('font-size','40px');
        this.year.position(610,480);
        this.year.size(350,80);
        this.year.style('font-size','40px');

        this.label.position(600,150);
        this.label.html("SELECT  YOUR  PLANNER")

        this.BackButton3.mousePressed(()=>{

                this.timeText.hide();
                this.BackButton3.hide();
                this.label.hide();
                this.week.hide();
                this.month.hide();
                this.year.hide();

                game.update(2);
                game.displayChoose();          
            });

 }

 hide(){
    this.timeText.hide();
    this.BackButton3.hide();
    this.label.hide();
    this.week.hide();
    this.month.hide();
    this.year.hide();
}
 
}