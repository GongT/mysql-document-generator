import { ITable } from './common/fetch/type';
import { ConnectionConfig } from 'mysql';
import { mysqlConnect, mysqlDisconnect } from './common/mysql/connection';
import { resolveInformation } from './common/fetch/main';

interface WithDatabase {
	database: string;
}
export async function resolveDatabase(
	connection: Omit<ConnectionConfig, 'database' | 'charset'> & WithDatabase
): Promise<ITable[]> {
	const { database, ...config } = connection;
	await mysqlConnect(database, config);
	const data = await resolveInformation(database);
	await mysqlDisconnect();
	return data;
}
