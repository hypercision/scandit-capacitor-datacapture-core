declare module '@capacitor/core' {
    interface PluginRegistry {
        ScanditCaptureCorePlugin: ScanditCaptureCorePluginInterface;
    }
}
export interface ScanditCaptureCorePluginInterface {
    initializePlugins(): Promise<any>;
}
