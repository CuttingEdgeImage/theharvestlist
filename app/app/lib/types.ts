export type Market = {
    id: string; // stable internal id
    name: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    county?: string;
    latitude?: number;
    longitude?: number;
  
    phone?: string;
    website?: string;
    email?: string;
  
    // operations
    season1Date?: string;
    season1Time?: string;
    season2Date?: string;
    season2Time?: string;
    season3Date?: string;
    season3Time?: string;
    season4Date?: string;
    season4Time?: string;
  
    // tags/filters (we will normalize later)
    products?: string[];
    acceptsSNAP?: boolean;
    acceptsWIC?: boolean;
    acceptsSFMNP?: boolean;
    acceptsFMNP?: boolean;
  
    lastUpdated?: string; // ISO date
  };
  