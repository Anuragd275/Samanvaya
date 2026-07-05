# Samanvaya | समन्वय | Centra Schema Mapper

## Purpose

Scrapers present on Telegram and web produce different schemized records which eventually breaks the Client component on Android, to fix it, Central Schema Mapper will sit between scrapers and DB. 

Scrapers will no longer insert records in DB, they'll just scrape the ASIN (in case of Amazon), and supply it to CSM.

CSM will then form a consistent schemized record to ensure data consistensy.

---


## Workflow

```mermaid
flowchart LR

    Client["Telegram Scrapers<br/>Website Scrapers"]

    subgraph CSM["Central Schema Mapper"]
        API["GET /v1/map/:asin"]
        Mapper["Schema Mapper"]
    end

    subgraph Internal["Internal Services"]
        Amazon["Amazon Product API"]
        Insert["MongoDB Insert API"]
    end

    Database[("MongoDB")]

    Client -->|ASIN| API
    API --> Mapper
    Mapper --> Amazon
    Amazon --> Mapper
    Mapper --> Insert
    Insert --> Database
    Insert -->|Success JSON| Client
```

---

## Tech Stack used


| Technology                                                                                                        | Purpose                            |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)    | REST API Framework                 |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Core Programming Language          |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)                | HTTP Client for Internal API Calls |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)             | Powered by Vercel                  |