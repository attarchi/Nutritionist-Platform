import { PostgresClient } from '../postgres';
import { PostgresConfig } from '../types';

describe('PostgresClient', () => {
    let client: PostgresClient;
    const config: PostgresConfig = {
        host: 'localhost',
        port: 5432,
        username: 'test',
        password: 'test',
        database: 'test_db'
    };

    beforeEach(() => {
        client = new PostgresClient(config);
    });

    afterEach(async () => {
        await client.disconnect();
    });

    it('should create a new instance', () => {
        expect(client).toBeInstanceOf(PostgresClient);
    });

    it('should implement DatabaseClient interface', () => {
        expect(client.connect).toBeDefined();
        expect(client.disconnect).toBeDefined();
        expect(client.isConnected).toBeDefined();
    });
}); 