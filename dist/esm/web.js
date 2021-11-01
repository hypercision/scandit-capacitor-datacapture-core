var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
import { getDefaults } from './ts/Capacitor/Capacitor';
import { Color, Direction, MarginsWithUnit, MeasureUnit, NumberWithUnit, Orientation, Point, PointWithUnit, Quadrilateral, Rect, RectWithUnit, Size, SizeWithAspect, SizeWithUnit, SizeWithUnitAndAspect, SizingMode, } from './ts/Common';
import { RadiusLocationSelection, RectangularLocationSelection, } from './ts/LocationSelection';
import { AimerViewfinder, Brush, LaserlineViewfinder, NoViewfinder, RectangularViewfinder, } from './ts/Viewfinder';
import { LaserlineViewfinderStyle, RectangularViewfinderAnimation, RectangularViewfinderLineStyle, RectangularViewfinderStyle, } from './ts/Viewfinder+Related';
import { CameraPosition, CameraSettings, FocusGestureStrategy, FocusRange, FrameSourceState, TorchState, VideoResolution, } from './ts/Camera+Related';
import { Feedback, Sound, Vibration, } from './ts/Feedback';
import { Camera } from './ts/Camera';
import { DataCaptureContext, DataCaptureContextSettings } from './ts/DataCaptureContext';
import { Anchor, DataCaptureView, HTMLElementState, TorchSwitchControl, ZoomSwitchControl, } from './ts/DataCaptureView';
import { SwipeToZoom, TapToFocus, } from './ts/DataCaptureView+Related';
import { DataCaptureVersion, } from './ts/DataCaptureVersion';
import { NoneLocationSelection, } from './ts/LocationSelection';
import { VolumeButtonObserver, } from './ts/VolumeButtonObserver';
const corePluginName = 'ScanditCaptureCorePlugin';
export class ScanditCaptureCorePlugin extends WebPlugin {
    constructor() {
        super({
            name: corePluginName,
            platforms: ['ios', 'android'],
        });
    }
    initializePlugins() {
        return __awaiter(this, void 0, void 0, function* () {
            let api = {
                Feedback,
                Camera,
                Color,
                DataCaptureContext,
                DataCaptureContextSettings,
                MarginsWithUnit,
                NumberWithUnit,
                Point,
                PointWithUnit,
                Quadrilateral,
                RadiusLocationSelection,
                Rect,
                RectWithUnit,
                RectangularLocationSelection,
                Size,
                SizeWithAspect,
                SizeWithUnit,
                SizeWithUnitAndAspect,
                Brush,
                LaserlineViewfinder,
                RectangularViewfinder,
                LaserlineViewfinderStyle,
                RectangularViewfinderAnimation,
                RectangularViewfinderLineStyle,
                RectangularViewfinderStyle,
                AimerViewfinder,
                CameraPosition,
                CameraSettings,
                FrameSourceState,
                TorchState,
                VideoResolution,
                FocusRange,
                FocusGestureStrategy,
                Anchor,
                DataCaptureView,
                TorchSwitchControl,
                ZoomSwitchControl,
                TapToFocus,
                SwipeToZoom,
                DataCaptureVersion,
                Direction,
                Orientation,
                HTMLElementState,
                MeasureUnit,
                NoneLocationSelection,
                SizingMode,
                Sound,
                NoViewfinder,
                Vibration,
                VolumeButtonObserver,
            };
            for (const key of Object.keys(window.Capacitor.Plugins)) {
                if (key.startsWith('Scandit') && key.indexOf('Native') < 0 && key !== corePluginName) {
                    const pluginApi = yield window.Capacitor.Plugins[key].initialize();
                    api = Object.assign(Object.assign({}, api), pluginApi);
                }
            }
            return new Promise((resolve, reject) => getDefaults.then(() => {
                resolve(api);
            }, reject));
        });
    }
}
const scanditCaptureCore = new ScanditCaptureCorePlugin();
export { scanditCaptureCore };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(scanditCaptureCore);
//# sourceMappingURL=web.js.map