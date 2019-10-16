Feature: To Create New Quote

@CucumberScenario
Scenario: User Create New Quote
Given I Am On Duck Creek Login Page
When I Enter Username "jThir"  
And I Enter Password "zoo9999!"
And I Click On Login Button
And I Click On New Quote Link
And I Select PartyType "Person"
And I Select SearchType "Name and Address"
And I Enter First Name "prachi"
And I Enter Last Name "deshmukh"
And I Select Location State "AZ"
And I Select Location Zipcode "56007"
And I Click On Run Clearance Button
And I Click On New Quote Button
And I Select Product "Personal Home AZ (1.0.0.0)"
And I Click On Start
And I Enter Firstname "Hirmalk"
And I Enter Lastname "Palkarol"
And I Enter dateOfBirth "07/07/1990"
And I Enter Address1 "pdc5"
And I Enter Address2 "pdc3"
And I Enter City "London"
And I Enter ZipCode "56005"
And I Click On GetInfromation 
And I Click On Continue to Quote 
And I Enter Zipcodeq "56202"
And I Enter Primaryphone "9874563215"
And I Enter Emailaddress "testy@ghk.com"
And I Enter Dwelling Limit "100000"
And I Enter Year Limit "2015"
And I Click On Complete an Application
And I Click On Next button applicant page
And I Click On Next button policy term page
And I Click On Next button dwelling info page
And I Enter yearbuilt "2016"
And I Click On Next button dwelling coverage page
And I Enter replacementCostofdweling "100000"
And I Click On Next button additional cov page
And I Click On Next button watercraft cov page 
And I Click On Next button spp page 
And I Click On Next button additional int page
And I Click On Next button uw page
And I Click On Next button InsHistory page
And I Click On Next button claims history page
















