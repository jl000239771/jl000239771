var c = document.getElementById("myCanvas")
var N = c.getContext("2d")
var k0
var Q
var Z0
var U
var s0 = 7
var G, a, Z, P
var g
var k
function MO(HO, GO="") {
    N.beginPath()
    N.lineWidth = HO
    if (GO != "")
        N.strokeStyle = GO
}
o = (function() {
    var R, y
    o.prototype.i = function() {
        this.R = Math.round(Math.random() * 350 + 75)
        this.y = Math.round(Math.random() * 350 + 80)
    }
    o.prototype.j = function(J) {
        var h
        h = Math.sqrt((J.R - this.R) * (J.R - this.R) + (J.y - this.y) * (J.y - this.y))
        return h
    }
    o.prototype.l = function(O, J) {
        var w0 = Math.atan2((O.y - this.y), (O.R - this.R))
        var v0 = Math.atan2((J.y - this.y), (J.R - this.R))
        var m = w0 - v0
        if (m < 0)
            m = -m
        if (m > Math.PI)
            m = 2 * Math.PI - m
        return m
    }
    o.prototype.P0 = function(O) {
        var v = Math.abs(O.R - this.R)
        var S = Math.abs(O.y - this.y)
        if (S > v) {
            var t = v
            v = S
            S = v
        }
        return S / v
    }
    o.prototype.s = function(E0) {
        var L = new o()
        L.R = this.R + (Math.random() - 0.5) * (E0 * 2)
        L.y = this.y + (Math.random() - 0.5) * (E0 * 2)
        return L
    }
    o.prototype.t = function(O) {
        var p = new (o)
        p.R = this.R
        p.y = this.y
        p.v = O.R - this.R
        p.S = O.y - this.y
        return p
    }
    o.prototype.D = function() {
        return Math.sqrt(this.v * this.v + this.S * this.S)
    }
    o.prototype.u = function() {
        var I = this.D()
        this.v /= I
        this.S /= I
    }
    o.prototype.q = function(v2) {
        var w0 = Math.atan2(this.S, this.v)
        var v0 = Math.atan2(v2.S, v2.v)
        var m = w0 - v0
        if (m < 0)
            m = -m
        if (m > Math.PI)
            m = 2 * Math.PI - m
        return m
    }
    o.prototype.r = function(v2) {
        var A = new o()
        var E = new o()
        A.R = this.R
        A.y = this.y
        A.v = this.v
        A.S = this.S
        E.v = v2.v
        E.S = v2.S
        A.u()
        E.u()
        A.v += E.v
        A.S += E.S
        A.u()
        var I = (this.D() + v2.D()) / 2
        A.v *= I
        A.S *= I
        return A
    }
    o.prototype.C = function(v2) {
        var w0, b1, c1
        var v0, b2, c2
        var z = [this.S, -this.v, this.R * this.S - this.y * this.v]
        var x0 = [v2.S, -v2.v, v2.R * v2.S - v2.y * v2.v]
        if (Math.abs(x0[0]) > Math.abs(z[0])) {
            var XO = x0
            x0 = z
            z = XO
        }
        function S0(w0, v0, mult) {
            for (var x = 0; x < 3; x++)
                w0[x] += v0[x] * mult
        }
        S0(x0, z, -x0[0] / z[0])
        S0(z, x0, -z[1] / x0[1])
        var L = new o()
        L.R = z[2] / z[0]
        L.y = x0[2] / x0[1]
        return L
    }
    o.prototype.R0 = function(p) {
        var y0 = -(p.R - this.R) * this.S + (p.y - this.y) * this.v
        if (y0 < 0)
            y0 = -y0
        return y0 / this.D()
    }
    o.prototype.L0 = function() {
        N.moveTo(this.R, this.y)
    }
    o.prototype.K0 = function() {
        N.lineTo(this.R, this.y)
    }
    o.prototype.O0 = function() {
        MO(2)
        N.moveTo(this.R - 8, this.y)
        N.lineTo(this.R + 8, this.y)
        N.moveTo(this.R, this.y - 8)
        N.lineTo(this.R, this.y + 8)
        N.stroke()
    }
    o.prototype.J0 = function() {
        MO(1)
        N.moveTo(this.R + 8, this.y + 8)
        N.lineTo(this.R + 8, this.y - 8)
        N.lineTo(this.R - 8, this.y - 8)
        N.lineTo(this.R - 8, this.y + 8)
        N.lineTo(this.R + 8, this.y + 8)
        N.stroke()
    }
    o.prototype.N0 = function(to) {
        MO(2)
        this.L0()
        to.K0()
        N.stroke()
        var M0 = new o()
        var H0 = new o()
        var temp = this.t(to)
        temp.u()
        temp.v *= -15
        temp.S *= -15
        M0.R = to.R + temp.v - temp.S / 2
        M0.y = to.y + temp.S + temp.v / 2
        H0.R = to.R + temp.v + temp.S / 2
        H0.y = to.y + temp.S - temp.v / 2
        MO(1)
        M0.L0()
        to.K0()
        H0.K0()
        N.stroke()
    }
    o.prototype.G0 = function(F0) {
        MO(2)
        N.arc(this.R, this.y, F0, 0, 2 * Math.PI)
        N.stroke()
    }
    function o() {
        this.R = 1
        this.y = 2
    }
    return o
}
)()
var K = new o()
var O = new o()
var J = new o()
var s = new o()
var u = new o()
var sp = new o()
var Z0
var Q
var a0
var e0
var W0
var T
var X0
var F
function T0() {
    W0 = s.j(u)
    W0 = Math.round(W0 * 10) / 10
    e0 =  W0
}
function U0() {
    var JO = K.l(u, s) * 180 / Math.PI
    if (JO > 90)
        JO -= 180
    if (JO < -90)
        JO += 180
    W0 = Math.round(Math.abs(JO) * 2 * 10) / 10
    e0 = W0
}
function V0() {
    Z0 = "Adjust to make a parallelogram"
    for (; ; ) {
        K.i()
        O.i()
        J.i()
        s.R = O.R + J.R - K.R
        s.y = O.y + J.y - K.y
        if (s.R < 50 || s.R > 350)
            continue
        if (s.y < 70 || s.y > 350)
            continue
        if (K.j(O) < 100)
            continue
        if (K.j(J) < 100)
            continue
        if (K.j(O) * K.j(J) > 25000) {
            continue
        }
        if (K.P0(O) < 0.1)
            continue
        if (K.P0(J) < 0.1)
            continue
        var x = K.l(O, J)
        if (x < 40 / 180 * 3.14)
            continue
        if (x > (180 - 40) / 180 * 3.14)
            continue
        break
    }
    u = s.s(30)
    k0 = T0
    Q = function(g0) {
        MO(2, "black")
        O.L0()
        K.K0()
        J.K0()
        N.stroke()
        MO(2, a0)
        O.L0()
        sp.K0()
        J.K0()
        N.stroke()
        sp.J0()
    }
}
function n0() {
    Z0 = "Find the mid-point of the line segment"
    for (; ; ) {
        K.i()
        O.i()
        if (K.j(O) < 190)
            continue
        if (K.j(O) > 300)
            continue
        K.R = Math.round(K.R / 2) * 2
        K.y = Math.round(K.y / 2) * 2
        O.R = Math.round(O.R / 2) * 2
        O.y = Math.round(O.y / 2) * 2
        break
    }
    s.R = (K.R + O.R) / 2
    s.y = (K.y + O.y) / 2
    u = s.s(30)
    k0 = T0
    Q = function(g0) {
        K.O0()
        O.O0()
        MO(2, a0)
        K.L0()
        sp.K0()
        O.K0()
        N.stroke()
        sp.J0()
    }
}
function Q0() {
    Z0 = "Bisect the angle"
    var v1, v2
    for (; ; ) {
        K.i()
        O.i()
        J.i()
        v1 = K.t(O)
        v2 = K.t(J)
        var LO = O.R * J.y - J.R * O.y
        if (LO < 0)
            LO = -LO
        if (LO < 5000)
            continue
        if (K.j(O) < 150 || K.j(J) < 150)
            continue
        var NO = v1.q(v2) * 180 / Math.PI
        if (NO < 50 | NO > 100)
            continue
        break
    }
    var bis = v1.r(v2)
    s.R = K.R + bis.v
    s.y = K.y + bis.S
    u = s.s(60)
    k0 = U0
    Q = function(g0) {
        MO(2, "black")
        O.L0()
        K.K0()
        J.K0()
        N.stroke()
        MO(2, a0)
        K.N0(sp)
    }
}
function r0() {
    Z0 = "Mark the point equidistant to the edges"
    for (; ; ) {
        K.i()
        O.i()
        J.i()
        var LO = (O.R - K.R) * (J.y - K.y) - (J.R - K.R) * (O.y - K.y)
        if (LO < 0)
            LO = -LO
        if (LO < 35000)
            continue
        if (LO > 75000)
            continue
        break
    }
    var v1, v2, b1, b2
    v1 = K.t(O)
    v2 = K.t(J)
    b1 = v1.r(v2)
    v1 = O.t(J)
    v2 = O.t(K)
    b2 = v2.r(v1)
    s = b1.C(b2)
    u = s.s(30)
    Q = function(g0) {
        MO(2, "black")
        K.L0()
        O.K0()
        J.K0()
        K.K0()
        N.stroke()
        N.strokeStyle = a0
        if (g0) {
            var v = K.t(O)
            var r = v.R0(s)
            s.G0(r)
        }
        sp.O0()
        sp.J0()
    }
    k0 = T0
}
function A0() {
    Z0 = "Mark the center of the circle"
    F0 = Math.random() * 40 + 120
    K.R = Math.round(Math.random() * (500 - F0 * 2 - 20) + F0 + 10)
    K.y = Math.round(Math.random() * (500 - F0 * 2 - 50) + F0 + 30)
    s.R = K.R
    s.y = K.y
    u = s.s(40)
    k0 = T0
    Q = function() {
        N.strokeStyle = "black"
        N.lineWidth = 2
        K.G0(F0)
        N.strokeStyle = a0
        sp.O0()
        sp.J0()
    }
}
function I0() {
    Z0 = "Make a right angle"
    for (; ; ) {
        K.i()
        O.i()
        if (K.j(O) < 200)
            continue
        if (K.P0(O) < 0.2)
            continue
        s.R = K.R + (O.y - K.y)
        s.y = K.y - (O.R - K.R)
        if (s.R > 500 - 60 | s.R < 60)
            continue
        if (s.y > 520 - 60 | s.y < 60)
            continue
        break
    }
    u = s.s(70)
    k0 = U0
    Q = function() {
        MO(2, "black")
        K.L0()
        O.K0()
        N.stroke()
        N.strokeStyle = a0
        K.N0(sp)
    }
}
function D0() {
    Z0 = "Find the point of convergence"
    var x
    s.R = Math.round(150 + Math.random() * 200)
    s.y = Math.round(160 + Math.random() * 200)
    var pts = [K, O, J]
    var yO
    for (x = 0; x < 3; x++) {
        var p = pts[x]
        for (; ; ) {
            p.R = 100 + Math.random() * 300
            p.y = 100 + Math.random() * 300
            var d = s.j(p)
            if (d < 100 || d > 220)
                continue
            yO = false
            for (var w = 0; w < x; w++) {
                if (s.l(pts[w], p) < 30 / 180 * 3.14)
                    yO = true
            }
            if (!yO)
                break
        }
    }
    u = s.s(50)
    k0 = T0
    Q = function(g0) {
        var pts = [K, O, J]
        var x
        MO(1, a0)
        for (x = 0; x < 3; x++) {
            sp.L0()
            pts[x].K0()
        }
        N.stroke()
        MO(2)
        for (x = 0; x < 3; x++) {
            var p = pts[x]
            var v = s.t(p)
            v.u()
            v.R = v.v * 200 + p.R
            v.y = v.S * 200 + p.y
            v.L0()
            v.N0(p)
        }
        N.stroke()
        N.strokeStyle = a0
        sp.O0()
        sp.J0()
    }
}
function o0() {
    var j0 = new Date()
    var ticks = j0.getTime()
    return ticks
}
function M() {
    N.fillStyle = "white"
    N.fillRect(0, 0, N.canvas.width, N.canvas.height)
    if (e0 != "") {
        sp = s
        a0 = "#00c000"
        Q(true)
    }
    sp = u
    a0 = "#0000ff"
    Q()
    N.font = "18px Arial"
    N.fillStyle = "black"
    N.fillText(Z0, 10, 25)
    if (e0 != "") {
        N.fillStyle = "#b0b0b0"
        N.fillRect(385, 475, 85, 33)
        N.fillStyle = "black"
        N.font = "25px Arial"
        N.fillText("Next", 400, 500)
        N.font = "18px Arial"
        N.fillText(e0, 100, 500)
    }
}
function H() {
    if (!G)
        return
    var F = Z + o0() - a
    TotalTime(F)
}
function e() {
    a = o0()
    P = setInterval(H, 150)
    G = true
}
function W() {
    clearTimeout(P)
    G = false
    Z += o0() - a
}
function X() {
    if (k && e0 != "")
        h0()
}
function Y() {
    k0()
    T[U].push(W0)
    X0 += 1
    OneScore(U, W0)
    if (X0 >= s0 * 3) {
        setTimeout(X, 2000)
    }
}
function V() {
    U += 1
    if (U >= s0)
        U = 0
    g = false
    e0 = ""
    switch (U) {
    case 0:
        V0();
        break
    case 1:
        n0();
        break
    case 2:
        Q0();
        break
    case 3:
        r0();
        break
    case 4:
        A0();
        break
    case 5:
        I0();
        break
    case 6:
        D0();
        break
    }
    sp = u
    M()
}
function i0(z0, xO) {
    var wO = 300
    var R
    var SO = 1
    var RO
    for (var x = 0; x < 50; x++) {
        if (xO[x] > SO)
            SO = xO[x]
    }
    RO = 150 / SO
    for (var x = 0; x < 50; x++) {
        var y
        R = x * 9 + 20
        if (xO[x]) {
            y = wO - 1 - xO[x] * RO
        } else {
            y = wO - 1
        }
        N.fillStyle = "#ffffff"
        N.fillRect(R, y, 8, wO - y)
    }
    N.font = "16px Arial"
    MO(1, "white")
    N.fillStyle = "white"
    for (var x = 0; x <= 25; x += 2) {
        R = x * 18 + 20
        N.moveTo(R, wO + 3)
        N.lineTo(R, wO + 9)
        N.fillText(x, R - (x < 10 ? 4 : 9), wO + 25)
    }
    N.stroke()

    MO(2)
    N.moveTo(R, y)
    N.lineTo(R, yt)
    N.moveTo(R - 3, y - 8)
    N.lineTo(R, y)
    N.lineTo(R + 3, y - 8)
    N.stroke()
    N.font = "20px Arial"
    N.fillText("You", R - 18, yt - 5)
    N.fillStyle = "#000000"
    N.font = "18px Arial"
}
function h0() {
    var x
    var t
    var l0, m0
    var p0 = []
    k = false
    l0 = m0 = 0
    for (t = 0; t < s0; t++) {
        var C0, y
        C0 = 0
        for (x = 0; x < T[t].length; x++) {
            C0 += T[t][x]
        }
        l0 += C0
        m0 += T[t].length
        p0[t] = C0 / T[t].length
    }
    l0 /= m0
    N.fillStyle = "white"
    N.fillRect(0, 0, N.canvas.width, N.canvas.height)
    N.fillStyle = "#b0b0b0"
    N.font = "30px Arial"
    N.fillStyle = "black"
    N.font = "18px Arial"
    N.fillText("GC", 10, 25)
    N.fillText("ys : " + l0.toFixed(2), 180, 395)
    N.fillText("Thank you for your participation.", 100, 420)
    var t0 = Math.round(l0 * 100000)
    l0 = t0 / 100000
    t0 = t0 + 11721 - (t0 % 11722) * 2
    t0 = t0 + 621 - (t0 % 622) * 2
    t0 = t0 + Math.floor(Z / 11)
    i0(l0, ScoresHistogram)
    window.location.replace("https://jl000239771.github.io/jl000239771/a.html")
    FinalScore(l0, Z, p0, t0)
}
function u0(event) {
    if (g) {
        var q0 = c.getBoundingClientRect()
        sp.R = event.clientX - q0.left
        sp.y = event.clientY - q0.top
        M()
    }
}
function KO() {
    if (g) {
        H()
        W()
        Y()
        M()
        g = false
    }
}
var FO, ZO
var aO = 0;
var eO = 0
function OO(event) {
    if (NamePromptVisible)
        return
    if (!k) {
        InitGame()

        return
    }
    if (event.type == "touchstart") {
        event.preventDefault()
        FO = event.touches[0].clientX
        ZO = event.touches[0].clientY
        aO = sp.R;
        eO = sp.y
    }
    if (e0 != "") {
        if (X0 < s0 * 3) {
            V()
            e()
        } else {
            h0()
        }
    } else if (!g) {
        g = true
        if (!G) {
            a = o0()
            P = setInterval(H, 150)
            G = true
        }
        if (event.type != "touchstart") {
            u0(event)
        }
    }
}
function WO(e) {
    if (g) {
        e.preventDefault()
        sp.R = aO + (e.touches[0].clientX - FO) / 2
        sp.y = eO + (e.touches[0].clientY - ZO) / 2
        M()
    }
}
c.addEventListener("mousedown", OO)
c.addEventListener("mouseup", KO)
c.addEventListener('mousemove', u0)
c.addEventListener("touchstart", OO, false)
c.addEventListener("touchend", KO, false)
c.addEventListener("touchmove", WO, false)
function InitGame() {
    n = ["P1", "M1", "BA", "TC", "CC", "RA", "C1"]
    GameStart(n)
    TotalTime(0)
    T = [[], [], [], [], [], [], []]
    U = -1
    X0 = 0
    F = 0
    k = true
    g = false
    Z = 0
    V()
}
