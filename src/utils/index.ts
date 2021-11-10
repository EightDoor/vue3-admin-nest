import * as crypto from 'crypto';
import config from 'src/config';

const utils = {
  /**
   * 密码加密
   */
  PasswordEncryPtion(val: string): string {
    return crypto.createHmac('sha256', config.secret).update(val).digest('hex');
  },
};
export default utils;
