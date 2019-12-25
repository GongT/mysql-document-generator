import { ConnectionConfig } from 'mysql';

export declare function addDiagnosis(message: string, todo?: string, isWarn?: boolean): void;

export declare function diagnosisColumn(colInfo: IInformationSchemaColumnsRowRaw): void;

export declare function diagnosisLink(tables: ITable[]): void;

export declare function diagnosisMessage(): {
    warns: number;
    errors: number;
};

export declare function diagnosisTable(table: ITable): void;

export declare function getAllDiagnosis(): {
    message: string;
    isWarn: boolean;
    todo: string;
}[];

export declare interface IInformationSchemaColumnsRow {
    TABLE_NAME: string;
    COLUMN_NAME: string;
    ORDINAL_POSITION: number;
    COLUMN_DEFAULT: string;
    IS_NULLABLE: string;
    CHARACTER_SET_NAME: string;
    COLUMN_TYPE: string;
    COLUMN_KEY: string;
    EXTRA: string;
    COLUMN_COMMENT: string;
}

export declare interface IInformationSchemaColumnsRowRaw extends IInformationSchemaColumnsRow {
    TABLE_CATALOG: 'def';
    TABLE_SCHEMA: string;
    DATA_TYPE: string;
    CHARACTER_MAXIMUM_LENGTH: number;
    CHARACTER_OCTET_LENGTH: number;
    NUMERIC_PRECISION: number;
    NUMERIC_SCALE: number;
    DATETIME_PRECISION: number;
    COLLATION_NAME: number;
}

export declare interface IInformationSchemaTablesRow {
    TABLE_SCHEMA: string;
    TABLE_NAME: string;
    ENGINE: string;
    TABLE_ROWS: number;
    AVG_ROW_LENGTH: number;
    AUTO_INCREMENT: number;
    CREATE_TIME: number;
    UPDATE_TIME: number;
    TABLE_COLLATION: string;
    TABLE_COMMENT: string;
}

export declare interface IShowIndexesRow {
    Non_unique: number;
    Key_name: string;
    Seq_in_index: number;
    Column_name: string;
    Index_type: string;
    Index_comment: string;
}

export declare interface ITable {
    name: string;
    comment: string;
    engine: string;
    create_time: number;
    update_time: number;
    table_collation: string;
    row_count: number;
    average_row_length: number;
    current_index: number;
    columns: ITableColumn[];
    keys: ITableKey[];
}

export declare interface ITableColumn {
    name: string;
    comment: string;
    order: number;
    defaultValue: string;
    charset: string;
    type: string;
    keyType: string;
    onUpdateCurrentTimestamp: boolean;
}

export declare interface ITableKey {
    name: string;
    comment?: string;
    columns: string[];
    unique: boolean;
    type: string;
}

export declare function mysqlConnect(database: string, config: Omit<ConnectionConfig, 'database' | 'charset'>): Promise<void>;

export declare function mysqlDisconnect(): Promise<void>;

export declare class NormalError extends Error {
}

declare interface PromiseQueryFunction {
    (sql: string, args?: any[]): Promise<any[]>;
}

export declare let queryApplicationSchema: PromiseQueryFunction;

export declare let queryInformationSchema: PromiseQueryFunction;

export declare function resolveDatabase(connection: Omit<ConnectionConfig, 'database' | 'charset'> & WithDatabase): Promise<ITable[]>;

export declare function resolveInformation(dbName: string): Promise<ITable[]>;

declare interface WithDatabase {
    database: string;
}

export { }
