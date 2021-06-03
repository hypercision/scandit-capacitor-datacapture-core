// extension CDVInvokedUrlCommand {
//    var defaultArgument: Any? {
//        return argument(at: 0)
//    }
//
//    var defaultArgumentAsString: String? {
//        if let defaultArgument = defaultArgument as? String {
//            return defaultArgument
//        }
//
//        guard let defaultArgument = defaultArgument,
//            let data = try? JSONSerialization.data(withJSONObject: defaultArgument) else {
//            return nil
//        }
//
//        return String(data: data, encoding: .utf8)
//    }
// }

public protocol CommandJSONArgument: Decodable {
    static func fromJSONObject(_ jsonObject: Any) throws -> Self
}

public extension CommandJSONArgument {
    static func fromJSONObject(_ jsonObject: Any) throws -> Self {
        let data = try JSONSerialization.data(withJSONObject: jsonObject)
        return try JSONDecoder().decode(Self.self, from: data)
    }
}
