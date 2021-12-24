import { Injectable } from '@nestjs/common';
import {
  auth, rs, conf, zone,
} from 'qiniu';
import Config from '../../config';

@Injectable()
export default class UploadService {
  async getToken() {
    const mac = new auth.digest.Mac(Config.qiniuSetting.accessKey, Config.qiniuSetting.secretKey);

    const options = {
      scope: Config.qiniuSetting.scope,
    };
    const putPolicy = new rs.PutPolicy(options);
    return putPolicy.uploadToken(mac);
  }

  async del(key: string) {
    return new Promise((resolve) => {
      const mac = new auth.digest.Mac(Config.qiniuSetting.accessKey, Config.qiniuSetting.secretKey);
      const config = new conf.Config({
        zone: zone.Zone_z1,
      });
      const bucketManager = new rs.BucketManager(mac, config);
      bucketManager.delete(Config.qiniuSetting.scope, key, (e) => {
        if (!e) {
          resolve(false);
        }
        resolve(JSON.stringify(e));
      });
    });
  }
}
