/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.capacitor.datacapture.core.utils

import java.util.concurrent.atomic.AtomicBoolean

abstract class Callback {

    protected val disposed: AtomicBoolean = AtomicBoolean(false)

    open fun dispose() {
        disposed.set(true)
    }
}
