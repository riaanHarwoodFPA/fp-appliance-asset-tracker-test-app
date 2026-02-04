export type ApplianceStatus = | "Active" | "In Service" | "Retired"; 

export interface Appliance {
    id: string;
    model: string;
    serialNumber: string;
    warrantyExpiryDate: string;
    status: ApplianceStatus; 
}

