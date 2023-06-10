// Metadata
const getTableSchema = table => {
  if (!!table?.schema?.fields === false) {
    return undefined;
  }
  const pairs = table.schema.fields.map(f => [f.name, f.type.toString()]);
  return Object.fromEntries(pairs);
};

// Records Count
const getTableCount = table => {
  if (!!table === false) {
    return undefined;
  }
  return table.toArray().length;
};

const getTableData = table => {
  if (!!table === false) {
    return undefined;
  }

  const data = [];
  const nRows = getTableCount(table);
  for (let i = 0; i < nRows; i += 1) {
    data.push(table.get(i).toArray());
  }

  return data;
};

export default {
  getTableCount,
  getTableData,
  getTableSchema,
};
