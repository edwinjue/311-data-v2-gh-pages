// Metadata
const getTableSchema = (table) => {
  if (!!table?.schema?.fields === false) {
    return;
  }
  const pairs = table.schema.fields.map((f) => [f.name, f.type.toString()]);
  return Object.fromEntries(pairs);
};

// Records Count
const getTableCount = (table) => {
  if (!!table === false) {
    return;
  }
  return table.toArray().length;
};

const ddbh = {
  getTableCount,
  getTableSchema,
};

export default ddbh;
