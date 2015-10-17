import angular from "angular";
import groups from "./groups/groups.module";
import run from "./app.run";

let app = angular.module("app", [groups]);

app.run(run);

export default app;

