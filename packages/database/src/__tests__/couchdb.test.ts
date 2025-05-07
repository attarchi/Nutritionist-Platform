import { CouchDBClient } from '../couchdb';
import { CouchDBConfig } from '../types';

describe('CouchDBClient', () => {
    let client: CouchDBClient;
    const config: CouchDBConfig = {
        host: 'localhost',
        port: 5984,
        username: 'test',
        password: 'test',
        database: 'test_db'
    };

    beforeEach(() => {
        client = new CouchDBClient(config);
    });

    it('should create a new instance', () => {
        expect(client).toBeInstanceOf(CouchDBClient);
    });

    it('should implement DatabaseClient interface', () => {
        expect(client.connect).toBeDefined();
        expect(client.disconnect).toBeDefined();
        expect(client.isConnected).toBeDefined();
    });

    it('should have document operations', () => {
        expect(client.get).toBeDefined();
        expect(client.insert).toBeDefined();
        expect(client.update).toBeDefined();
        expect(client.delete).toBeDefined();
    });
}); 