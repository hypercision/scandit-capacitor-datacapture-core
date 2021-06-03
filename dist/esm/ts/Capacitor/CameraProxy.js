import { Plugins } from '@capacitor/core';
import { Capacitor, CapacitorFunction } from './Capacitor';
export class CameraProxy {
    static forCamera(camera) {
        const proxy = new CameraProxy();
        proxy.camera = camera;
        return proxy;
    }
    getCurrentState() {
        return new Promise((resolve, reject) => Plugins[Capacitor.pluginName][CapacitorFunction.GetCurrentCameraState]().then(resolve, reject));
    }
    getIsTorchAvailable() {
        return new Promise((resolve, reject) => Plugins[Capacitor.pluginName][CapacitorFunction.GetIsTorchAvailable]({
            position: this.camera.position,
        }).then(resolve, reject));
    }
}
//# sourceMappingURL=CameraProxy.js.map