// name >> e o nome da tabela
// properties >> sao os campos da tabela

const EntrySchema = {
    name: 'Entry',
    primaryKey: 'id',
    properties: {
      id: 'string',
      amount: 'double',
      description: 'string?',
      entryAt: 'date',
      latitude: 'float?',
      longitude: 'float?',
      address: 'string?',
      photo: 'string?',
      isInit: 'bool',
      category: 'Category',
    },
  };
  
  export default EntrySchema;
  