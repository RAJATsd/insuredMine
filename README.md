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

