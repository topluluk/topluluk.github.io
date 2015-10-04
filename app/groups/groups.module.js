import controller from "./groups.controller";
import angular from "angular";

let groups = angular.module("groups", []);
groups.controller("groups.controller", controller);

export default groups.name;

