@RestResource(urlMapping='/mockShipmentStatus')
global class MockShippingStatusService {
    @HttpGet
    global static String doGet() {
        String trackingNumber = RestContext.request.params.get('trackingNumber');
        if (trackingNumber == null) {
            return 'Error - Must provide tracking number';
        }
        return 'Shipped - On Time';
    }
}
