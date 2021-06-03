//
//  Extensions.swift
//  ScanditCaptureCorePlugin
//
//  Created by Florin Dobre on 07.01.2021.
//  Copyright © 2021 Max Lynch. All rights reserved.
//

import Foundation

public extension NSDictionary {
    var jsonString: String {
        guard let theJSONData = try? JSONSerialization.data(withJSONObject: self,
                                                            options: []) else {
            return ""
        }

        return String(data: theJSONData, encoding: .utf8) ?? ""
    }
}
