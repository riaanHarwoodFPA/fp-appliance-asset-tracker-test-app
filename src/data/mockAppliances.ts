// This file is to simulate mock data that will be displayed on the dashboard. This simulates t
// the retrieval of data from the backend system


import type { Appliance } from "../models/Appliance";

export const mockAppliances: Appliance[] = [
    {
        id: "APL-001"; 
        model: "REF710A";
        serialNumber: "SN123456789"; 
        warrantyExpiryDate: "2026-30-06";
        status: "Active";
    },

    {
        id: "APL-002"; 
        model: "DISH428";
        serialNumber: "SN2219833641"; 
        warrantyExpiryDate: "2026-19-09";
        status: "Active";
    },
    {
        id: "APL-001"; 
        model: "WASH123";
        serialNumber: "SN11213488952"; 
        warrantyExpiryDate: "2026-30-11";
        status: "Active";
    }
]
