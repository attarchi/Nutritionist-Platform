export interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

export interface QueryResult<T> {
    rows: T[];
    rowCount: number;
}

export interface DatabaseClient {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isConnected(): boolean;
}

export interface PostgresConfig extends DatabaseConfig {
    ssl?: boolean;
    maxConnections?: number;
}

export interface CouchDBConfig extends DatabaseConfig {
    protocol?: 'http' | 'https';
    auth?: {
        username: string;
        password: string;
    };
}

export interface CouchDBDocument {
    _id: string;
    _rev: string;
    [key: string]: any;
} 