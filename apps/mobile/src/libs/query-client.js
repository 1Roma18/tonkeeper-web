"use strict";
exports.__esModule = true;
exports.queryClient = void 0;
var react_query_1 = require("@tanstack/react-query");
exports.queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30000,
            refetchOnWindowFocus: false
        }
    }
});
