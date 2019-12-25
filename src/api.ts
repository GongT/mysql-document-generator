import { ConnectionConfig } from 'mysql';
import { resolveInformation } from './common/fetch/main';
import { ITable } from './common/fetch/type';
import { mysqlConnect, mysqlDisconnect } from './common/mysql/connection';

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
