public with sharing class ShipmentStatusIntegration {

    @AuraEnabled
    public static String getShipmentStatus(String trackingNumber) {
        // Check for null or empty tracking number
        if (String.isBlank(trackingNumber)) {
            return 'Error - Tracking number is Missing';
        }

        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=' + trackingNumber);
        req.setMethod('GET');

        try {
            HttpResponse res = http.send(req);
            if (res.getStatusCode() == 200) {
                return res.getBody();
            } else {
                return 'Error - Unable to fetch status';
            }
        } catch (Exception e) {
            return 'Error - Exception occurred: ' + e.getMessage();
        }
    }
}