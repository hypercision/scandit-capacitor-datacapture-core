import { FrameSourceState } from '../Camera+Related';
declare type Camera = any;
export declare class CameraProxy {
    private camera;
    static forCamera(camera: Camera): CameraProxy;
    getCurrentState(): Promise<FrameSourceState>;
    getIsTorchAvailable(): Promise<boolean>;
}
export {};
