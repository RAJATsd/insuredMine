# insuredMine

All the code resides in the master branch

This is my assignment for insuredmine hiring purpose. Before you go through the project I want you to know that I tried my best 
to implement worker threads but couldn't, thus I implemented the API without it. I have never worked on that before this. 
Also I couldn't implement cpu utilisation and restart, and aggregated policy API.


The app starts at 8080

APIs:

POST /csv/insertCsv : (api to insert all the data of the csv file)

input : provide the csv file with the key as "csv"

output : a confirmatory messages that the insersion was successful




POST /csv/insertMessage : (api to create a post-service that takes the message, day, and time in body 
parameters and it inserts that message into DB at that particular day and time. )

input : the input json should be as follows { date:"year-month-date", time:"hours:minutes", message:"any message you wanna give" }

output : a confirmatory messages that the message will be inserted



GET /csv/getPolicyInfo/:userName : Search API to find policy info with the help of username.

input : name of the user in the url param

output : the object containing all the info of the policy



The completed tasks are as follows accoding to the mail

Task 1 :

1. Completed partially

2. Completed

4.Completed


Task 2 : 

2. Completed




Problems I faced :

1. Implementing worker thread : 

At first I thought of splitting the no of rows to be inserted in 4 groups , because that's the no.
of threads my processor supports, and thus inserting those rows in worker file. But the simple findOne function of mongoose was 
giving error in worker file. Then I thought to parse the CSV file in the thread, there also, the parsing was unsuccessful, while 
the same code was working in my normal controller. Thus I scrapped worker 

2. API to provide aggregated policy : 

I didn't understand exactly what do I have to accomplish

4. Real time cpu utilization and restarting :
 
Could not file the solution of this task
