import PI from "./lib2" ;
import { EPSILON } from "./lib2" ;
import { API_URL } from "./lib2";

let radius = 10;
let circumeference = 2 * PI * radius;
const equal = Math.abs(circumeference) < EPSILON;

