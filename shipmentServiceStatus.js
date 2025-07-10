import { LightningElement, api, wire } from 'lwc';
import getShipmentStatus from '@salesforce/apex/ShipmentStatusIntegration.getShipmentStatus';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class ShipmentStatus extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: ['Shipment__c.Tracking_Number__c'] }) shipment;

    get trackingNumber() {
        return getFieldValue(this.shipment.data, 'Shipment__c.Tracking_Number__c') || '';
    }

    shipmentStatus = '';

    handleTrackingNumberChange(event) {
        this.trackingNumber = event.target.value;
        console.log('TrackingNumber: ' + this.trackingNumber);
    }

    refreshShipmentStatus(){
        this.shipmentStatus = ''; 
    }

   async fetchShipmentStatus() {
       try {
            this.shipmentStatus = await getShipmentStatus({ trackingNumber: this.trackingNumber });
            console.log('Result: ' + this.shipmentStatus);
        } catch (error) {
            console.error('Error: ' + error);
        }
    }
}