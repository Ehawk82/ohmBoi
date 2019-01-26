function findV(r,i) { var v = r * i; return v; };/*find voltage*/
function findR(v,i) { var r = v / i; return r; };/*find resistance*/
function findI(v,r) { var i = v / r; return i; };/*find current*/

module.exports = { findV: findV, findR: findR, findI: findI };