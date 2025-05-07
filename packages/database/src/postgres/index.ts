import { Pool, PoolConfig } from 'pg';
import { DatabaseClient, PostgresConfig, QueryResult } from '../types';

export class PostgresClient implements DatabaseClient {
    private pool: Pool;
    private config: PostgresConfig;

    constructor(config: PostgresConfig) {
        this.config = config;
        this.pool = new Pool(this.getPoolConfig());
    }

    private getPoolConfig(): PoolConfig {
        return {
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.database,
            ssl: this.config.ssl,
            max: this.config.maxConnections
        };
    }

    async connect(): Promise<void> {
        await this.pool.connect();
    }

    async disconnect(): Promise<void> {
        await this.pool.end();
    }

    isConnected(): boolean {
        return this.pool.totalCount > 0;
    }

    async query<T>(text: string, params?: any[]): Promise<QueryResult<T>> {
        const result = await this.pool.query(text, params);
        return {
            rows: result.rows as T[],
            rowCount: result.rowCount
        };
    }
} 