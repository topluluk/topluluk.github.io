
import angular from "angular";
import groups from "./groups/groups.module";
import config from "./app.config";

let app = angular.module("app", [groups]);
app.config(config);

export default app;