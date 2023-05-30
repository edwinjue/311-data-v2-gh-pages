// A script to seed duckDb database with requests data
// import duckdb from 'duckdb';
const duckdb = require('duckdb');

// Create a persistent db
const db = new duckdb.Database('./db/master.duckdb');

// Create `requests` table
const tableName = 'requests';
db.exec(`DROP TABLE IF EXISTS ${tableName}`);
db.exec(`CREATE TABLE ${tableName}(SRNumber VARCHAR(255),CreatedDate TIMESTAMP,UpdatedDate TIMESTAMP,ActionTaken VARCHAR(255),Owner VARCHAR(255),RequestType VARCHAR(255),Status VARCHAR(255),RequestSource VARCHAR(255),CreatedByUserOrganization VARCHAR(255),MobileOS VARCHAR(255),Anonymous VARCHAR(255),AssignTo VARCHAR(255),ServiceDate TIMESTAMP,ClosedDate TIMESTAMP,AddressVerified VARCHAR(255),ApproximateAddress VARCHAR(255),Address VARCHAR(255),HouseNumber INTEGER,Direction VARCHAR(255),StreetName VARCHAR(255),Suffix VARCHAR(255),ZipCode INTEGER,Latitude DECIMAL(8,6),Longitude DECIMAL(9,6),Location VARCHAR(255),TBMPage INTEGER,TBMColumn VARCHAR(255),TBMRow INTEGER,APC VARCHAR(255),CD INTEGER,CDMember VARCHAR(255),NC INTEGER,NCName VARCHAR(255),PolicePrecinct VARCHAR(255))`);

// Seed it
db.exec(`COPY ${tableName} from './data/csv/${tableName}.csv' ( HEADER, DELIMITER ',', TIMESTAMPFORMAT '%m/%d/%Y %H:%M:%S %p')`);

// Query it
db.all(`SELECT COUNT(*) FROM ${tableName}`, (err, res) => {
  try {
    if (err) {
      throw err;
    }

    // Output number or records imported
    const [{ 'count_star()': count }] = res;
    console.log(`Imported: ${count} records`);
  } catch (e) {
    console.error('Error occured:', e);
  }
});
