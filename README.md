# LWCAssignment

This project allows a Customer Service Representative to view the latest shipment status directly from a Lightning Web Component (LWC) on the Shipment record page. The status is retrieved via an Apex controller.
1. Created Custom Object - Shipment (Shipment__c) and Tracking Number (Tracking_Number__C) field in Shipment object.
2. LWC component created and will display shipment status on the Shipment record page.
3. Shipment status is fetched from an Apex controller based on the Tracking Number field.

   We can implement this in 2 approaches:
    1st Approach: APEX REST Service where exposing Apex as standard webservice with a specific URL endpoint and interacting it using standard HTTP methods like Get. 
                 @RestResource with urlMapping allows defining a custom, predictable URL for the service(/service/apexrest/mockShipmentStatus), mimicking how external systems might interact with salesforce
    2nd Approach: standard @AuraEnabled apex method. In this we are accessing URL with in the salesforce. so instead of APEX REST service still be a valid, i used standard Apex and LWC communication
