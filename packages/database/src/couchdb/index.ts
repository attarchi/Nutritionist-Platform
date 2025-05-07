import nano from 'nano';
import { DatabaseClient, CouchDBConfig, CouchDBDocument } from '../types';

export class CouchDBClient implements DatabaseClient {
    private client: nano.ServerScope;
    private db: nano.DocumentScope<CouchDBDocument>;
    private config: CouchDBConfig;

    constructor(config: CouchDBConfig) {
        this.config = config;
        const url = `${this.config.protocol || 'http'}://${this.config.host}:${this.config.port}`;
        this.client = nano(url);

        if (this.config.auth) {
            this.client.auth(this.config.auth.username, this.config.auth.password);
        }

        this.db = this.client.use(this.config.database);
    }

    async connect(): Promise<void> {
        try {
            await this.db.info();
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new Error(`Failed to connect to CouchDB: ${errorMessage}`);
        }
    }

    async disconnect(): Promise<void> {
        // CouchDB doesn't require explicit disconnection
    }

    isConnected(): boolean {
        return !!this.db;
    }

    async get<T extends CouchDBDocument>(id: string): Promise<T & CouchDBDocument> {
        return await this.db.get(id) as T & CouchDBDocument;
    }

    async insert<T extends CouchDBDocument>(doc: T): Promise<nano.DocumentInsertResponse> {
        return await this.db.insert(doc);
    }

    async update<T extends CouchDBDocument>(id: string, doc: T): Promise<nano.DocumentInsertResponse> {
        const existing = await this.get(id);
        return await this.db.insert({ ...doc, _id: id, _rev: existing._rev });
    }

    async delete(id: string): Promise<nano.DocumentDestroyResponse> {
        const doc = await this.get(id);
        return await this.db.destroy(id, doc._rev);
    }
} 