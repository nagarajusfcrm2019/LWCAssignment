import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const TRACKING_FIELD = 'Shipment__c.Tracking_Number__c';

export default class MockShipmentStatus extends LightningElement {
    @api recordId; // Populated automatically if used on a record page
    trackingNumber = '';
    status = '';

    @wire(getRecord, { recordId: '$recordId', fields: [TRACKING_FIELD] })
    loadTracking({ error, data }) {
        if (data) {
            this.trackingNumber = data.fields.Tracking_Number__c.value;
        } else if (error) {
            console.error('Error loading record:', error);
            this.status = 'Unable to load tracking number';
        }
    }

    async checkStatus() {
        const endpoint = `https://merzcommunities--tina.sandbox.my.salesforcesites.com/services/apexrest/mockShipmentStatus?trackingNumber=${this.trackingNumber}`;
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.text();
            console.log('Response content:', result);
            this.status = result;
        } catch (error) {
            console.error('Fetch error:', error);
            this.status = 'Unable to retrieve status.';
        }
    }
}
