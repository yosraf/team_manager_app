import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Firebase Config
 * @description
 * Cordova plugin for Firebase Config
 *
 * @usage
 * ```typescript
 * import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';
 *
 *
 * constructor(private firebaseConfig: FirebaseConfig) { }
 *
 * ...
 *
 *
 * this.firebaseConfig.getBoolean('my_key')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class FirebaseConfig extends IonicNativePlugin {
    /**
     * Starts fetching configs, adhering to the specified minimum fetch interval.
     *
     * @param {number} expirationDuration
     * @returns {Promise<null>}
     */
    fetch(expirationDuration?: number): Promise<null>;
    /**
     * Asynchronously activates the most recently fetched configs, so that the fetched key value pairs take effect.
     *
     * @returns {Promise<null>}
     */
    activate(): Promise<null>;
    /**
     * Asynchronously fetches and then activates the fetched configs.
     *
     * @returns {Promise<null>}
     */
    fetchAndActivate(): Promise<null>;
    /**
     * Fetches a boolean configuration value from RemoteConfig
     *
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    getBoolean(key: string): Promise<boolean>;
    /**
     * Fetches a string configuration value from RemoteConfig
     *
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    getString(key: string): Promise<string>;
    /**
     * Fetches a numeric configuration value from RemoteConfig
     *
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    getNumber(key: string): Promise<number>;
    /**
     * Fetches an array of bytes configuration value from RemoteConfig
     *
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    getBytes(key: string): Promise<any[]>;
}
