global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

import client from '../src/client';
import { getBucketObject, getEntryObject } from '../src/helpers';


(async ()=>{
  const bucket = "buckettoshare" + Date.now();
  try {
    console.log('creating bucket...');
    const res = await client.createBucket({ slug: bucket});
    const bucketObj = res.getBucket();

    console.log(getBucketObject(bucketObj));
  } catch (error) {
    console.error(error);
  }


  try {
    console.log('creating folder...');
    await client.createFolder({ bucket, path: "testFolderA" });
    console.log('folder created!');
  } catch (error) {
    console.error(error);
  }

  try {
    console.log('fetchig directory...');
    const res = await client.listDirectory({ bucket, path:"" });

    const entryList = res.getEntriesList();
    const entries = entryList.map((entry) => getEntryObject(entry));

    console.log(entries);
  } catch (error) {
    console.error(error);
  }

  try {
    console.log('sharing bucket...');
    const res = await client.shareBucket({ bucket });
    const threadInfo = res.getThreadinfo();

    console.log({
      bucket,
      key: threadInfo.getKey(),
      addressList: threadInfo.getAddressesList(),
      addresses: threadInfo.getAddressesList().join(', '),
    });
  } catch (error) {
    console.error(error);
  }
})();

