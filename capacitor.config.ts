import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ftmoney.com',
  appName: 'Money Manager',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
