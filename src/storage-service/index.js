const PgStorage = require('./pg-storage/PgStorage');
const FileStorage = require('./FileStorage');

const getStorageService = (serviceOptions) => {
  const { storageType, pgStorageOptions } = serviceOptions;
  // TODO прописать storageType, pgStorageOptions в типы cs.d.ts и в README
  if (storageType === 'postgres') {
    return new PgStorage(pgStorageOptions);
  }
  return new FileStorage();
};

module.exports = { getStorageService };
