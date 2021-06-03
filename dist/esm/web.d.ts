import { WebPlugin } from '@capacitor/core';
import { ScanditCaptureCorePluginInterface } from './definitions';
export declare class ScanditCaptureCorePlugin extends WebPlugin implements ScanditCaptureCorePluginInterface {
    constructor();
    initializePlugins(): Promise<any>;
}
declare const scanditCaptureCore: ScanditCaptureCorePlugin;
export { scanditCaptureCore };
