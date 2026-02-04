# fp-appliance-asset-tracker-test-app
A TypeScript-first internal dashboard which tracks all appliances and other assets. The app is designed to track assets, manage service lifecycles and simulate a real enterprise internal tool. This is a test application as part of my mentorship training program
<br>
<br>

**Stack**
+ Vite
+ React
+ TypeScript
+ Tailwind
+ MongoDB (Later iteration)
<br>
<br>

**System Architecture**

<br>

**High-level Architecture Design**
<br>
<br>
Basic architecture for frontend layout & business logic for backend. 

```
┌──────────────────────────────┐
│      Presentation Layer      │
│  (React + TypeScript UI)     │
│                              │
│  - Dashboard Page            │
│  - Appliance Table           │
│  - Forms & Filters           │
└──────────────▲───────────────┘
               │
┌──────────────┴───────────────┐
│      State & Logic Layer     │
│                              │
│  - React State (useState)    │
│  - Business Rules            │
│  - TypeScript Models         │
└──────────────▲───────────────┘
               │
┌──────────────┴───────────────┐
│        Data Layer (Mock)     │
│                              │
│  - Mock Appliance Data       │
│  - Simulated API Responses   │
│                              │
│  (Future: REST / Backend)    │
└──────────────────────────────┘
```

<br>

**Data Flow Diagram**
<br>
<br>
This diagram illustrates the applications use of unidirectional data flow. I'm using predictable states in the logic layer level to update the states of the item

```
Mock Data → Dashboard State → Props → UI Components
                      ↑
                User Actions
           (Add / Edit / Filter)
```

<br>
<br>


**Current vs Future Architecture**
+ Current (Phase 1)
+ Frontend-only
+ Local state
+ Mock data
+ No authentication
  
**Future Enhancements**
+ Authentication 
+ REST API integration
+ Backend service (Node / Python)
+ Database (Postgres)
+ Role-based access
+ Authentication (SSO / AD)

<br>
<br>


**Architecture Approach**

I've developed this project to follow a simple layered frontend architecture commonly used in internal enterprise applications. Since it's an entry-level project, I won't be storing any user data in a specific database but rather utilise mock data to visual how the system works. 
<br>
The application is built using React and TypeScript and is structured into three primary layers:
<br> 
Presentation Layer:
+ Responsible for rendering the user interface, including dashboards, tables, forms, and filters.
State & Logic Layer: 
+ Manages application state, business logic, and type-safe domain models using TypeScript interfaces.
Data Layer (Mocked): 
+ Simulates backend data using static mock data to represent appliance records. This layer is designed to be easily replaced with a real API in future iterations.
The architecture supports clear separation of concerns, predictable data flow, and scalability for future backend integration.
<br>
<br> 


**Installation & Set Up**
<br>
<br>
<br>
<br>

**Mock UI** 

Note: this is an AI Generated Concept
<img width="1536" height="1024" alt="F P Mentorship Project Images" src="https://github.com/user-attachments/assets/62a56d0b-da7f-4148-a7c7-44f1ba8ea605" />


<br>

**Licenses** 
<br>
TBC

<br>
