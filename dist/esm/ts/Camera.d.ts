import { CameraPosition, CameraSettings, FrameSource, FrameSourceListener, FrameSourceState, TorchState } from './Camera+Related';
import { CameraProxy } from './Capacitor/CameraProxy';
import { DataCaptureContext } from './DataCaptureContext';
import { DefaultSerializeable } from './Serializeable';
export interface PrivateCamera {
    context: Optional<DataCaptureContext>;
    position: CameraPosition;
    _desiredState: FrameSourceState;
    desiredTorchState: TorchState;
    settings: CameraSettings;
    listeners: FrameSourceListener[];
    _proxy: CameraProxy;
    proxy: CameraProxy;
    initialize: () => void;
    didChange: () => Promise<void>;
}
export declare class Camera extends DefaultSerializeable implements FrameSource {
    private type;
    private settings;
    private position;
    private _desiredTorchState;
    private _desiredState;
    private listeners;
    private context;
    private _proxy;
    private get proxy();
    static get default(): Optional<Camera>;
    static atPosition(cameraPosition: CameraPosition): Optional<Camera>;
    get desiredState(): FrameSourceState;
    set desiredTorchState(desiredTorchState: TorchState);
    get desiredTorchState(): TorchState;
    switchToDesiredState(state: FrameSourceState): Promise<void>;
    getCurrentState(): Promise<FrameSourceState>;
    getIsTorchAvailable(): Promise<boolean>;
    addListener(listener: Optional<FrameSourceListener>): void;
    removeListener(listener: Optional<FrameSourceListener>): void;
    applySettings(settings: CameraSettings): Promise<void>;
    private initialize;
    private didChange;
}
