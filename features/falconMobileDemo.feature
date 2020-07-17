Feature: Main navigation

    Scenario: Dashboard
        Given User launch the chrome browser
        When  User opens URL "http://10.10.10.231:8082/#/app/dashboard"
        Then  Page Title should be "ATMECS - Falcon Test Repotrs"
        Then User clicks on MWBooking
        Then Click on Select Customer and select Atmecs
        Then Click on Select Module and select Login
        Then Click on Select Status and select Pass and verify
        Then Click on Select Status and select Fail and verify
        Then Click on Select Status and select Skip and verify
        