# LWCAssignment

This project allows a Customer Service Representative to view the latest shipment status directly from a Lightning Web Component (LWC) on the Shipment record page. The status is retrieved via an Apex controller.
1. Created Custom Object - Shipment (Shipment__c) and Tracking Number (Tracking_Number__C) field in Shipment object.
2. LWC component created and will display shipment status on the Shipment record page. Added LWC to the Lightning Record Page.
3. Shipment status is fetched from an Apex controller based on the Tracking Number field.
4. Click the "Shipment Status" button to fetch and display the current status of the shipment based on the tracking number.
5. To clear the displayed status and refresh, click the "REFRESH" button.
6. Created Remote site settings


1st Approach: Apex REST Service
This method involves exposing Apex as a standard web service through a custom URL endpoint. By using the @RestResource annotation with urlMapping, we define a predictable, RESTful URL path—such as /services/apexrest/mockShipmentStatus. The service is designed to respond to standard HTTP methods like GET, making it ideal for external system integration where Salesforce behaves like a traditional API server.

2nd Approach: Standard Apex Method with @AuraEnabled
In this approach, we stay entirely within the Salesforce platform. Instead of using a RESTful service, we rely on the built-in communication between Apex and Lightning Web Components (LWC) using @AuraEnabled methods. This is suitable when there’s no need to expose the functionality externally, and everything is executed within the trusted Salesforce environment.

Note: I have developed this with both approaches in my trailhead org.
