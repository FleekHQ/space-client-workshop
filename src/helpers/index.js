export const getBucketObject = (bucket) => ({
  key: bucket.getKey(),
  name: bucket.getName(),
  path: bucket.getPath(),
  createdAt: bucket.getCreatedat(),
  updatedAt: bucket.getUpdatedat(),
});


export const getEntryObject = (entry) => ({
  path: entry.getPath(),
  name: entry.getName(),
  isDir: entry.getIsdir(),
  created: entry.getCreated(),
  updated: entry.getUpdated(),
  ipfsHash: entry.getIpfshash(),
  sizeInBytes: entry.getSizeinbytes(),
  fileExtension: entry.getFileextension(),
});
