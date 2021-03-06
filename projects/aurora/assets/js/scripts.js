var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

function indexInParent(t) {
    for (var e = t.parentNode.childNodes, i = 0, n = 0; n < e.length; n++) {
        if (e[n] == t) return i;
        1 == e[n].nodeType && i++
    }
    return -1
}

function eq(t) {
    return t >= 0 && t < this.length ? this[t] : -1
}

function preventDefault(t) {
    (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1
}

function preventDefaultForScrollKeys(t) {
    if (keys[t.keyCode]) return preventDefault(t), !1
}

function disableScroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function triggerResize() {
    var t = document.createEvent("HTMLEvents");
    t.initEvent("resize", !0, !1), window.dispatchEvent(t)
}

function showDynamicLoad() {
    var t = document.getElementById("dynamicLoad").querySelector(".progress");
    TweenMax.to(t, .5, {
        width: "100%",
        ease: Expo.easeInOut
    })
}

function runDynamicLoad(t) {
    var e = document.getElementById("dynamicLoad").querySelector(".bar"),
        i = t.querySelectorAll("img"),
        n = 0,
        s = i.length;

    function r() {
        var t = 100 / s * (n += 1) << 0;
        e.style.width = t + "%", n === s && setTimeout(function() {
            l()
        }, 200)
    }
    0 == s && setTimeout(function() {
        l()
    }, 100);
    for (var a = 0; a < s; a++) {
        var o = new Image;
        o.onload = r, o.onerror = r, o.src = i[a].src
    }

    function l() {
        var t = document.getElementById("main-logo"),
            e = document.getElementById("menu"),
            i = document.getElementById("menu-overlay"),
            n = (document.getElementById("nav"), document.getElementById("menuClip")),
            s = (document.getElementById("navClose"), document.querySelectorAll(".menu-item")),
            r = n.querySelectorAll(".menu-content"),
            a = document.getElementById("logo-wrap"),
            o = document.getElementById("logo-box"),
            l = document.querySelector(".barba-container");
        setTimeout(function() {
            hideDynamicLoad(), init(), closeMenu(a, o, s, t, e, n, i), triggerResize(), headerAnimate(), TweenMax.to(l, .6, {
                alpha: 1
            })
        }, 500), setTimeout(function() {
            TweenMax.set(r, {
                alpha: 1,
                ease: Expo.easeOut
            }), triggerResize()
        }, 2e3)
    }
}

function hideDynamicLoad() {
    var t = document.getElementById("dynamicLoad").querySelector(".progress");
    setTimeout(function() {
        TweenMax.set(t, {
            css: {
                right: "0",
                left: "auto"
            }
        }), TweenMax.to(t, .5, {
            alpha: 1,
            width: "0",
            ease: Expo.easeInOut,
            onComplete: void setTimeout(function() {
                TweenMax.set(t, {
                    css: {
                        left: "0",
                        right: "auto"
                    }
                }), triggerResize()
            }, 1e3)
        })
    }, 500)
}

function headerAnimate() {
    var t = document.getElementById("section-header");
    if (t) {
        if (t.classList.contains("active")) return;
        t.classList.add("active");
        var e = t.querySelectorAll(".q_split_wrap"),
            i = t.querySelectorAll(".rev_clip"),
            n = t.querySelectorAll(".line"),
            s = document.querySelectorAll(".rev_item");
        if (TweenMax.set(s, {
                alpha: 0
            }), window.scroll(0, 0), e && q_animate(e, "stagTop", .6), i.length > 0) {
            var r = i[0].clientWidth;
            TweenMax.fromTo(i, 1.8, {
                x: -50,
                clipPath: "inset(0px " + r + "px 0px 0px)",
                webkitClipPath: "inset(0px " + r + "px 0px 0px)"
            }, {
                x: 0,
                clipPath: "inset(0px 0px 0px 0px)",
                webkitClipPath: "inset(0px 0px 0px 0px)",
                ease: Expo.easeInOut
            })
        }
        n && TweenMax.to(n, 1.8, {
            height: 240,
            delay: .3,
            ease: Expo.easeInOut
        })
    }
}

function scrollTop() {
    var t = document.getElementById("scrollTop");
    t && t.addEventListener("click", function(t) {
        window.scroll(0, 0)
    })
}

function navMenu(t, e) {
    var i = document.getElementById("main-logo"),
        n = document.getElementById("menu"),
        s = document.getElementById("menu-overlay"),
        r = document.getElementById("nav"),
        a = document.getElementById("menuClip"),
        o = document.getElementById("navClose"),
        l = document.querySelectorAll(".menu-item");
    r.addEventListener("click", function(r) {
        openMenu(t, e, l, i, n, a, s)
    }), o.addEventListener("click", function(r) {
        closeMenu(t, e, l, i, n, a, s)
    })
}

function openMenu(t, e, i, n, s, r, a) {
    n.classList.add("menu-opened"), s.classList.add("active"), t.classList.add("open"), e.classList.add("open"), TweenMax.to(r, .8, {
        width: "100%",
        ease: Expo.easeInOut
    }), TweenMax.to(a, .6, {
        width: "100%",
        ease: Expo.easeInOut
    }), TweenMax.staggerFromTo(i, .6, {
        alpha: .8,
        xPercent: -100
    }, {
        alpha: 1,
        xPercent: 0,
        ease: Expo.easeOut,
        delay: .3
    }, .08)
}

function closeMenu(t, e, i, n, s, r, a) {
    n.classList.remove("menu-opened"), s.classList.remove("active"), t.classList.remove("open"), e.classList.remove("open"), TweenMax.to(a, 1, {
        width: "0",
        ease: Expo.easeInOut
    }), TweenMax.to(r, .8, {
        width: "0%",
        ease: Expo.easeInOut
    })
}

function init() {
    var t = document.querySelectorAll(".q_magnet"),
        e = document.getElementById("q_slide"),
        i = document.querySelectorAll(".reveal"),
        n = document.getElementById("logo-wrap"),
        s = document.getElementById("logo-box"),
        r = (document.getElementById("footer"), document.getElementById("head")),
        a = document.getElementById("year_copy");
    if (qReveal(i, n, s, r), e && qSlide(e), t.length > 0 && qMagnet(t), r.classList.remove("hide"), window.scroll(0, 0), navMenu(n, s), scrollTop(), qCursor(), !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (document.body.classList.remove("horizontal-scroll"), document.getElementsByClassName("q_smooth").length) new Parallax({
            extends: !0,
            touchMultiplier: 1.8,
            forceVS: !0,
            preload: !0,
            native: !0,
            section: document.querySelector(".q_smooth"),
            divs: document.querySelectorAll(".vs-div")
        }).init();
        if (document.getElementsByClassName("q_horizontal").length) document.body.classList.add("horizontal-scroll"), new Horizontal({
            extends: !0,
            preload: !1,
            native: !1,
            direction: "horizontal",
            section: document.querySelector(".q_horizontal"),
            divs: document.querySelectorAll(".vsh")
        }).init()
    }
    if (a) {
        var o = new Date;
        a.innerHTML = o.getFullYear()
    }
}

function qCursor() {
    window;
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", t.style.top = n.clientY + "px", e.style.left = n.clientX + "px", e.style.top = n.clientY + "px", i.style.left = n.clientX + "px", i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
}(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, n, s, r, a, o, l, h, u, c, d, f, p, _;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    s = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    r = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    h = o.isArray,
                    u = r.prototype = i.to({}, .1, {}),
                    c = [];
                r.version = "1.20.4", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(t, e) {
                    var n, s = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[n] = t[n];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || r)
                        for (var o, l = 1 / (1 - s), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
                    return this
                }, u.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, l, h, u, c, d, f, p, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        w = this._rawPrevTime;
                    if (t >= _ - 1e-7 && t >= 0 ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > w || 0 >= t && t >= -1e-7 || w === a && "isPause" !== this.data) && w !== t && (n = !0, w > a && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || w === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && w > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (w >= 0 && (n = !0), this._rawPrevTime = f = !e || t || w === t ? t : a)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !p ? (u = this._time / y, (1 === (c = this._easeType) || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === (d = this._easePower) ? u *= u : 2 === d ? u *= u * u : 3 === d ? u *= u * u * u : 4 === d && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : p || (this.ratio = this._ease.getRatio(this._time / y))), m !== this._time || n || v !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = w, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                            !this._time || s || p ? s && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === a && f !== a && (this._rawPrevTime = 0))
                    } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, a, o, u, d, f) {
                    o = o || 0;
                    var p, _, m, g, v = 0,
                        y = [],
                        w = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), u.apply(f || a.callbackScope || this, d || c)
                        },
                        x = a.cycle,
                        T = a.startAt && a.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > o && ((t = n(t)).reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        for (g in _ = {}, a) _[g] = a[g];
                        if (x && (s(_, t, m), null != _.duration && (e = _.duration, delete _.duration)), T) {
                            for (g in T = _.startAt = {}, a.startAt) T[g] = a.startAt[g];
                            s(_.startAt, t, m)
                        }
                        _.delay = v + (_.delay || 0), m === p && u && (_.onComplete = w), y[m] = new r(t[m], e, _), v += o
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, a, o, l)
                }, r.delayedCall = function(t, e, i, n, s) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var d = function(t, e) {
                        for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), s = (n = n.concat(d(r, e))).length), r = r._next;
                        return n
                    },
                    f = r.getAllTweens = function(e) {
                        return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var r, a, o, l = f(0 != s),
                        h = l.length,
                        u = i && n && s;
                    for (o = 0; h > o; o++) a = l[o], (u || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, a, u, c, d, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                            for (c = t.length; --c > -1;) r.killChildTweensOf(t[c], e);
                        else {
                            for (u in s = [], f)
                                for (a = f[u].target.parentNode; a;) a === t && (s = s.concat(f[u].tweens)), a = a.parentNode;
                            for (d = s.length, c = 0; d > c; c++) e && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, n, s) {
                    i = !1 !== i, n = !1 !== n;
                    for (var r, a, o = f(s = !1 !== s), l = i && n && s, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || a, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    r = i._internals,
                    a = n._internals = {},
                    o = r.isSelector,
                    l = r.isArray,
                    h = r.lazyTweens,
                    u = r.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    d = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    p = a.pauseCallback = function() {},
                    _ = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.20.4", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, s) {
                    var r = n.repeat && c.TweenMax || i;
                    return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
                }, m.from = function(t, e, n, s) {
                    return this.add((n.repeat && c.TweenMax || i).from(t, e, n), s)
                }, m.fromTo = function(t, e, n, s, r) {
                    var a = s.repeat && c.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, n, s), r) : this.set(t, s, r)
                }, m.staggerTo = function(t, e, s, r, a, l, h, u) {
                    var c, p, m = new n({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = s.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = _(t)), 0 > (r = r || 0) && ((t = _(t)).reverse(), r *= -1), p = 0; p < t.length; p++)(c = d(s)).startAt && (c.startAt = d(c.startAt), c.startAt.cycle && f(c.startAt, t, p)), g && (f(c, t, p), null != c.duration && (e = c.duration, delete c.duration)), m.to(t[p], e, c, p * r);
                    return this.add(m, a)
                }, m.staggerFrom = function(t, e, i, n, s, r, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, a, o)
                }, m.staggerFromTo = function(t, e, i, n, s, r, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, a, o, l)
                }, m.call = function(t, e, n, s) {
                    return this.add(i.delayedCall(0, t, e, n), s)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, r, a, o, l = new n(t),
                        h = l._timeline;
                    for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;) o = a._next, e && a instanceof i && a.target === a.vars.onComplete || (0 > (r = a._startTime - a._delay) && (s = 1), l.add(a, r)), a = o;
                    return h.add(l, 0), s && l.totalDuration(), l
                }, m.add = function(s, r, a, o) {
                    var h, u, c, d, f, p;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) {
                            for (a = a || "normal", o = o || 0, h = r, u = s.length, c = 0; u > c; c++) l(d = s[c]) && (d = new n({
                                tweens: d
                            })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === a ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof s) return this.addLabel(s, r);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, r), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = (f = this).rawTime() > s._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, n, s) {
                    var r = i.delayedCall(0, p, n, s || this);
                    return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, s) {
                    var r, a;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && l(s)))
                        for (a = s.length; --a > -1;) s[a] instanceof t && s[a].timeline === this && this.remove(s[a]);
                    if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - r : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
                    else {
                        if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = r + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : r
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, a, o, l, c, d, f = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (f !== this._time && (t += this._time - f), t >= p - 1e-7 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (d = this._time) >= f)
                            for (n = this._first; n && (a = n._next, d === this._time && (!this._paused || g));)(n._active || n._startTime <= d && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, d === this._time && (!this._paused || g));) {
                                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                    if (c === n) {
                                        for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))), o && (this._gc || (_ === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, s) {
                    s = s || -9999999999;
                    for (var r = [], a = this._first, o = 0; a;) a._startTime < s || (a instanceof i ? !1 !== e && (r[o++] = a) : (!1 !== n && (r[o++] = a), !1 !== t && (o = (r = r.concat(a.getChildren(!0, e, n))).length))), a = a._next;
                    return r
                }, m.getTweensOf = function(t, e) {
                    var n, s, r = this._gc,
                        a = [],
                        o = 0;
                    for (r && this._enabled(!0, !0), s = (n = i.getTweensOf(t)).length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (a[o++] = n[s]);
                    return r && this._enabled(!1, !0), a
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (n in r) r[n] >= i && (r[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                    return s
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var s = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, s
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : r = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i), s = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    s = 1e-10,
                    r = e._internals,
                    a = r.lazyTweens,
                    o = r.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    h = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.20.4", u.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, s) {
                    return this.add(e.delayedCall(0, t, n, s), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, s, r, a = {
                            ease: h,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        o = i.repeat && l.TweenMax || e;
                    for (s in i) a[s] = i[s];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, r = new o(this, n, a), a.onStart = function() {
                        r.target.paused(!0), r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
                    }, r
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var n = this.tweenTo(e, i);
                    return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, l, h, u, c, d, f, p = this._time,
                        _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        g = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        w = this._rawPrevTime,
                        x = this._paused,
                        T = this._cycle;
                    if (p !== this._time && (t += this._time - p), t >= _ - 1e-7 && t >= 0) this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === s) && w !== t && this._first && (u = !0, w > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === m && w !== s && (w > 0 || 0 > t && w >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = r = !0, h = "onReverseComplete") : w >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (u = !0)
                        } else if (0 === m && 0 > w && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = m + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= p || this._repeat && T !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                        d && d._startTime < m && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== T && !this._locked) {
                        var b = this._yoyo && 0 != (1 & T),
                            S = b === (this._yoyo && 0 != (1 & this._cycle)),
                            k = this._totalTime,
                            M = this._cycle,
                            P = this._rawPrevTime,
                            O = this._time;
                        if (this._totalTime = T * m, this._cycle < T ? b = !b : this._totalTime += m, this._time = p, this._rawPrevTime = 0 === m ? w - 1e-4 : w, this._cycle = T, this._locked = !0, p = b ? 0 : m, this.render(p, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = M, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                        if (S && (this._cycle = T, this._locked = !0, p = b ? m + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = O, this._totalTime = k, this._cycle = M, this._rawPrevTime = P
                    }
                    if (this._time !== p && this._first || i || u || d) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= p)
                            for (n = this._first; n && (l = n._next, f === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                        else
                            for (n = this._last; n && (l = n._prev, f === this._time && (!this._paused || x));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (d === n) {
                                        for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                        d = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = l
                            }
                        this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                    } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, s, r = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (n = 0; l > n; n++)(s = a[n]).isActive() && (r[o++] = s);
                    return r
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0), t = 180 / Math.PI, e = [], i = [], n = [], s = {}, r = _gsScope._gsDefine.globals, a = function(t, e, i, n) {
                i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
            }, o = function(t, e, i, n) {
                var s = {
                        a: t
                    },
                    r = {},
                    a = {},
                    o = {
                        c: n
                    },
                    l = (t + e) / 2,
                    h = (e + i) / 2,
                    u = (i + n) / 2,
                    c = (l + h) / 2,
                    d = (h + u) / 2,
                    f = (d - c) / 8;
                return s.b = l + (t - l) / 4, r.b = c + f, s.c = r.a = (s.b + r.b) / 2, r.c = a.a = (c + d) / 2, a.b = d - f, o.b = u + (n - u) / 4, a.c = o.a = (a.b + o.b) / 2, [s, r, a, o]
            }, l = function(t, s, r, a, l) {
                var h, u, c, d, f, p, _, m, g, v, y, w, x, T = t.length - 1,
                    b = 0,
                    S = t[0].a;
                for (h = 0; T > h; h++) u = (f = t[b]).a, c = f.d, d = t[b + 1].d, l ? (y = e[h], x = ((w = i[h]) + y) * s * .25 / (a ? .5 : n[h] || .5), m = c - ((p = c - (c - u) * (a ? .5 * s : 0 !== y ? x / y : 0)) + (((_ = c + (d - c) * (a ? .5 * s : 0 !== w ? x / w : 0)) - p) * (3 * y / (y + w) + .5) / 4 || 0))) : m = c - ((p = c - (c - u) * s * .5) + (_ = c + (d - c) * s * .5)) / 2, p += m, _ += m, f.c = g = p, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = c - u, f.ca = g - u, f.ba = S - u, r ? (v = o(u, S, g, c), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, S = _;
                (f = t[b]).b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, r && (v = o(f.a, S, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
            }, h = function(t, n, s, r) {
                var o, l, h, u, c, d, f = [];
                if (r)
                    for (l = (t = [r].concat(t)).length; --l > -1;) "string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = r[n] + Number(d.charAt(0) + d.substr(2)));
                if (0 > (o = t.length - 2)) return f[0] = new a(t[0][n], 0, 0, t[0][n]), f;
                for (l = 0; o > l; l++) h = t[l][n], u = t[l + 1][n], f[l] = new a(h, 0, 0, u), s && (c = t[l + 2][n], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
                return f[l] = new a(t[l][n], 0, 0, t[l + 1][n]), f
            }, u = function(t, r, a, o, u, c) {
                var d, f, p, _, m, g, v, y, w = {},
                    x = [],
                    T = c || t[0];
                for (f in u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == r && (r = 1), t[0]) x.push(f);
                if (t.length > 1) {
                    for (y = t[t.length - 1], v = !0, d = x.length; --d > -1;)
                        if (f = x[d], Math.abs(T[f] - y[f]) > .05) {
                            v = !1;
                            break
                        }
                    v && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0, d = x.length; --d > -1;) f = x[d], s[f] = -1 !== u.indexOf("," + f + ","), w[f] = h(t, f, s[f], c);
                for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
                if (!o) {
                    for (d = x.length; --d > -1;)
                        if (s[f])
                            for (g = (p = w[x[d]]).length - 1, _ = 0; g > _; _++) m = p[_ + 1].da / i[_] + p[_].da / e[_] || 0, n[_] = (n[_] || 0) + m * m;
                    for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
                }
                for (d = x.length, _ = a ? 4 : 1; --d > -1;) p = w[f = x[d]], l(p, r, a, o, s[f]), v && (p.splice(0, _), p.splice(p.length - _, _));
                return w
            }, c = function(t, e, i) {
                var n, s, r, o, l, h, u, c, d, f, p, _ = {},
                    m = "cubic" === (e = e || "soft") ? 3 : 2,
                    g = "soft" === e,
                    v = [];
                if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                for (d in t[0]) v.push(d);
                for (h = v.length; --h > -1;) {
                    for (_[d = v[h]] = l = [], f = 0, c = t.length, u = 0; c > u; u++) n = null == i ? t[u][d] : "string" == typeof(p = t[u][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && u > 1 && c - 1 > u && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                    for (c = f - m + 1, f = 0, u = 0; c > u; u += m) n = l[u], s = l[u + 1], r = l[u + 2], o = 2 === m ? 0 : l[u + 3], l[f++] = p = 3 === m ? new a(n, s, r, o) : new a(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                    l.length = f
                }
                return _
            }, d = function(t, e, i) {
                for (var n, s, r, a, o, l, h, u, c, d, f, p = 1 / i, _ = t.length; --_ > -1;)
                    for (r = (d = t[_]).a, a = d.d - r, o = d.c - r, l = d.b - r, n = s = 0, u = 1; i >= u; u++) n = s - (s = ((h = p * u) * h * a + 3 * (c = 1 - h) * (h * o + c * l)) * h), e[f = _ * i + u - 1] = (e[f] || 0) + n * n
            }, f = function(t, e) {
                var i, n, s, r, a = [],
                    o = [],
                    l = 0,
                    h = 0,
                    u = (e = e >> 0 || 6) - 1,
                    c = [],
                    f = [];
                for (i in t) d(t[i], a, e);
                for (s = a.length, n = 0; s > n; n++) l += Math.sqrt(a[n]), f[r = n % e] = l, r === u && (h += l, c[r = n / e >> 0] = f, o[r] = h, l = 0, f = []);
                return {
                    length: h,
                    lengths: o,
                    segments: c
                }
            }, p = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, s, r, a, o, l = e.values || [],
                        h = {},
                        d = l[0],
                        p = e.autoRotate || i.vars.orientToBezier;
                    for (n in this._autoRotate = p ? p instanceof Array ? p : [
                            ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                        ] : null, d) this._props.push(n);
                    for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), o || h[n] !== l[0][n] && (o = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                        var _ = f(this._beziers, this._timeRes);
                        this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate)
                        for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                            for (a = 0; 3 > a; a++) n = p[r][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                            n = p[r][2], this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var i, n, s, r, a, o, l, h, u, c, d = this._segCount,
                        f = this._func,
                        p = this._target,
                        _ = e !== this._startRatio;
                    if (this._timeRes) {
                        if (u = this._lengths, c = this._curSeg, e *= this._length, s = this._li, e > this._l2 && d - 1 > s) {
                            for (h = d - 1; h > s && (this._l2 = u[++s]) <= e;);
                            this._l1 = u[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0]
                        } else if (e < this._l1 && s > 0) {
                            for (; s > 0 && (this._l1 = u[--s]) >= e;);
                            0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = c = this._segments[s], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                        }
                        if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < c.length - 1) {
                            for (h = c.length - 1; h > s && (this._s2 = c[++s]) <= e;);
                            this._s1 = c[s - 1], this._si = s
                        } else if (e < this._s1 && s > 0) {
                            for (; s > 0 && (this._s1 = c[--s]) >= e;);
                            0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = c[s], this._si = s
                        }
                        o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else o = (e - (i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0) * (1 / d)) * d;
                    for (n = 1 - o, s = this._props.length; --s > -1;) r = this._props[s], l = (o * o * (a = this._beziers[r][i]).da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._mod[r] && (l = this._mod[r](l, p)), f[r] ? p[r](l) : p[r] = l;
                    if (this._autoRotate) {
                        var m, g, v, y, w, x, T, b = this._autoRotate;
                        for (s = b.length; --s > -1;) r = b[s][2], x = b[s][3] || 0, T = !0 === b[s][4] ? 1 : t, a = this._beziers[b[s][0]], m = this._beziers[b[s][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, g += ((y = a.b + (a.c - a.b) * o) - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, v += ((w = m.b + (m.c - m.b) * o) - v) * o, w += (m.c + (m.d - m.c) * o - w) * o, l = _ ? Math.atan2(w - v, y - g) * T + x : this._initialRotations[s], this._mod[r] && (l = this._mod[r](l, p)), f[r] ? p[r](l) : p[r] = l)
                    }
                }
            }), _ = p.prototype, p.bezierThrough = u, p.cubicToQuadratic = o, p._autoCSS = !0, p.quadraticToCubic = function(t, e, i) {
                return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, p._cssRegister = function() {
                var t = r.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        n = e._setPluginRatio,
                        s = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, r, a, o, l) {
                            e instanceof Array && (e = {
                                values: e
                            }), l = new p;
                            var h, u, c, d = e.values,
                                f = d.length - 1,
                                _ = [],
                                m = {};
                            if (0 > f) return o;
                            for (h = 0; f >= h; h++) c = i(t, d[h], a, o, l, f !== h), _[h] = c.end;
                            for (u in e) m[u] = e[u];
                            return m.values = _, (o = new s(t, "bezier", 0, 0, c.pt, 2)).data = c, o.plugin = l, o.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                                ["left", "top", "rotation", h, !1]
                            ] : null != c.end.x && [
                                ["x", "y", "rotation", h, !1]
                            ]), m.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(c.proxy, m, a._tween), o
                        }
                    })
                }
            }, _._mod = function(t) {
                for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
            }, _._kill = function(t) {
                var e, i, n = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                if (n = this._autoRotate)
                    for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                return this._super._kill.call(this, t)
            }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, s, r, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.20.4", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var u, c, d, f, p, _, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    k = /alpha\(opacity *=.+?\)/i,
                    M = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    O = /-([a-z])/gi,
                    D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    C = function(t, e) {
                        return e.toUpperCase()
                    },
                    E = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    L = /,(?=[^\)]*(?:\(|$))/gi,
                    Y = /[\s,\(]/i,
                    I = Math.PI / 180,
                    F = 180 / Math.PI,
                    z = {},
                    N = {
                        style: {}
                    },
                    q = _gsScope.document || {
                        createElement: function() {
                            return N
                        }
                    },
                    W = function(t, e) {
                        return q.createElementNS ? q.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : q.createElement(t)
                    },
                    j = W("div"),
                    B = W("img"),
                    H = a._internals = {
                        _specialProps: l
                    },
                    U = (_gsScope.navigator || {}).userAgent || "",
                    X = function() {
                        var t = U.indexOf("Android"),
                            e = W("a");
                        return d = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === t || parseFloat(U.substr(t + 8, 2)) > 3), p = d && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6, f = -1 !== U.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (_ = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    V = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    G = function(t) {
                        _gsScope.console && console.log(t)
                    },
                    Z = "",
                    K = "",
                    $ = function(t, e) {
                        var i, n, s = (e = e || j).style;
                        if (void 0 !== s[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                        return n >= 0 ? (Z = "-" + (K = 3 === n ? "ms" : i[n]).toLowerCase() + "-", K + t) : null
                    },
                    Q = q.defaultView ? q.defaultView.getComputedStyle : function() {},
                    J = a.getStyle = function(t, e, i, n, s) {
                        var r;
                        return X || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || Q(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : V(t)
                    },
                    tt = H.convertToPixels = function(t, i, n, s, r) {
                        if ("px" === s || !s && "lineHeight" !== i) return n;
                        if ("auto" === s || !n) return 0;
                        var o, l, h, u = E.test(i),
                            c = t,
                            d = j.style,
                            f = 0 > n,
                            p = 1 === n;
                        if (f && (n = -n), p && (n *= 100), "lineHeight" !== i || s)
                            if ("%" === s && -1 !== i.indexOf("border")) o = n / 100 * (u ? t.clientWidth : t.clientHeight);
                            else {
                                if (d.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[u ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                                else {
                                    if (c = t.parentNode || q.body, -1 !== J(c, "display").indexOf("flex") && (d.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                                    d[u ? "width" : "height"] = n + s
                                }
                                c.appendChild(j), o = parseFloat(j[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(j), u && "%" === s && !1 !== a.cacheWidths && ((l = c._gsCache = c._gsCache || {}).time = h, l.width = o / n * 100), 0 !== o || r || (o = tt(t, i, n, s, !0))
                            } else l = Q(t).lineHeight, t.style.lineHeight = n, o = parseFloat(Q(t).lineHeight), t.style.lineHeight = l;
                        return p && (o /= 100), f ? -o : o
                    },
                    et = H.calculateOffset = function(t, e, i) {
                        if ("absolute" !== J(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = J(t, "margin" + n, i);
                        return t["offset" + n] - (tt(t, e, parseFloat(s), s.replace(T, "")) || 0)
                    },
                    it = function(t, e) {
                        var i, n, s, r = {};
                        if (e = e || Q(t, null))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (s = e[i]).indexOf("-transform") || Dt === s) && (r[s.replace(O, C)] = e.getPropertyValue(s));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Ot === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(O, C)] = e[i]);
                        return X || (r.opacity = V(t)), n = jt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Et && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    nt = function(t, e, i, n, s) {
                        var r, a, o, l = {},
                            h = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(x, "") ? r : 0 : et(t, a), void 0 !== h[a] && (o = new vt(h, a, h[a], o)));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    st = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    at = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Q(t))[e] || 0;
                        if (t.getCTM && Nt(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = st[e],
                            r = s.length;
                        for (i = i || Q(t, null); --r > -1;) n -= parseFloat(J(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(J(t, "border" + s[r] + "Width", i, !0)) || 0;
                        return n
                    },
                    ot = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, n = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ot(n[i]));
                            return t.join(",")
                        }
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(x, "")), e.oy = parseFloat(r.replace(x, "")), e.v = t), e || t
                    },
                    lt = function(t, e) {
                        return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ht = function(t, e) {
                        return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ut = function(t, e, i, n) {
                        var s, r, a, o, l;
                        return "function" == typeof t && (t = t(g, m)), null == t ? o = e : "number" == typeof t ? o = t : (s = 360, r = t.split("_"), a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), r.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && ((a %= s) !== a % 180 && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (a / s | 0) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (a / s | 0) * s)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o
                    },
                    ct = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    dt = function(t, e, i) {
                        return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ft = a.parseColor = function(t, e) {
                        var i, n, s, r, a, o, l, h, u, c, d;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), r = t.charAt(3), t = "#" + n + n + s + s + r + r), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = d = t.match(v), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(y)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (s = .5 >= l ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = dt(a + 1 / 3, n, s), i[1] = dt(a, n, s), i[2] = dt(a - 1 / 3, n, s);
                                else i = t.match(v) || ct.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = ct.black;
                        return e && !d && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, l = ((h = Math.max(n, s, r)) + (u = Math.min(n, s, r))) / 2, h === u ? a = o = 0 : (c = h - u, o = l > .5 ? c / (2 - h - u) : c / (h + u), a = h === n ? (s - r) / c + (r > s ? 6 : 0) : h === s ? (r - n) / c + 2 : (n - s) / c + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    pt = function(t, e) {
                        var i, n, s, r = t.match(_t) || [],
                            a = 0,
                            o = "";
                        if (!r.length) return t;
                        for (i = 0; i < r.length; i++) n = r[i], a += (s = t.substr(a, t.indexOf(n, a) - a)).length + n.length, 3 === (n = ft(n, e)).length && n.push(1), o += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return o + t.substr(a)
                    },
                    _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ct) _t += "|" + h + "\\b";
                _t = new RegExp(_t + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    _t.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), _t.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var mt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var s, r = e ? (t.match(_t) || [""])[0] : "",
                            a = t.split(r).join("").match(w) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            u = a.length,
                            c = u > 0 ? a[0].replace(v, "") : "";
                        return u ? s = e ? function(t) {
                            var e, d, f, p;
                            if ("number" == typeof t) t += c;
                            else if (n && L.test(t)) {
                                for (p = t.replace(L, "|").split("|"), f = 0; f < p.length; f++) p[f] = s(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(_t) || [r])[0], f = (d = t.split(e).join("").match(w) || []).length, u > f--)
                                for (; ++f < u;) d[f] = i ? d[(f - 1) / 2 | 0] : a[f];
                            return o + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, d;
                            if ("number" == typeof t) t += c;
                            else if (n && L.test(t)) {
                                for (r = t.replace(L, "|").split("|"), d = 0; d < r.length; d++) r[d] = s(r[d]);
                                return r.join(",")
                            }
                            if (d = (e = t.match(w) || []).length, u > d--)
                                for (; ++d < u;) e[d] = i ? e[(d - 1) / 2 | 0] : a[d];
                            return o + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    gt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, s, r, a, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return s.parse(e, o, r, a)
                            }
                    },
                    vt = (H._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, r, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t)
                            for (l = a.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i[r] = s
                                    }
                                } else i[r] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, s) {
                        this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                    }),
                    yt = (H._parseToProxy = function(t, e, i, n, s, r) {
                        var a, o, l, h, u, c = n,
                            d = {},
                            f = {},
                            p = i._transform,
                            _ = z;
                        for (i._transform = null, z = e, n = u = i.parse(t, e, n, s), z = _, r && (i._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (n.type <= 1 && (f[o = n.p] = n.s + n.c, d[o] = n.s, r || (h = new vt(n, "s", o, h, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, f[o = n.p + "_" + l] = n.data[l], d[o] = n[l], r || (h = new vt(n, l, o, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: f,
                            firstMPT: h,
                            pt: u
                        }
                    }, H.CSSPropTween = function(t, e, n, s, a, o, l, h, u, c, d) {
                        this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof yt || r.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === d ? n + s : d, a && (this._next = a, a._prev = this)
                    }),
                    wt = function(t, e, i, n, s, r) {
                        var a = new yt(t, e, i, n - i, s, -1, r);
                        return a.b = i, a.e = a.xs0 = n, a
                    },
                    xt = a.parseComplex = function(t, e, i, n, s, r, o, l, h, c) {
                        i = i || r || "", "function" == typeof n && (n = n(g, m)), o = new yt(t, e, 0, 0, o, c ? 2 : 1, null, !1, l, i, n), n += "", s && _t.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
                        var d, f, p, _, w, x, T, b, S, k, M, P, O, D = i.split(", ").join(",").split(" "),
                            C = n.split(", ").join(",").split(" "),
                            E = D.length,
                            A = !1 !== u;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (D = D.join(" ").replace(L, ", ").split(" "), C = C.join(" ").replace(L, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), C = C.join(" ").split(",").join(", ").split(" ")), E = D.length), E !== C.length && (E = (D = (r || "").split(" ")).length), o.plugin = h, o.setRatio = c, _t.lastIndex = 0, d = 0; E > d; d++)
                            if (_ = D[d], w = C[d], (b = parseFloat(_)) || 0 === b) o.appendXtra("", b, lt(w, b), w.replace(y, ""), A && -1 !== w.indexOf("px"), !0);
                            else if (s && _t.test(_)) P = ")" + ((P = w.indexOf(")") + 1) ? w.substr(P) : ""), O = -1 !== w.indexOf("hsl") && X, k = w, _ = ft(_, O), w = ft(w, O), (S = _.length + w.length > 6) && !X && 0 === w[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[d]).join("transparent")) : (X || (S = !1), O ? o.appendXtra(k.substr(0, k.indexOf("hsl")) + (S ? "hsla(" : "hsl("), _[0], lt(w[0], _[0]), ",", !1, !0).appendXtra("", _[1], lt(w[1], _[1]), "%,", !1).appendXtra("", _[2], lt(w[2], _[2]), S ? "%," : "%" + P, !1) : o.appendXtra(k.substr(0, k.indexOf("rgb")) + (S ? "rgba(" : "rgb("), _[0], w[0] - _[0], ",", !0, !0).appendXtra("", _[1], w[1] - _[1], ",", !0).appendXtra("", _[2], w[2] - _[2], S ? "," : P, !0), S && (_ = _.length < 4 ? 1 : _[3], o.appendXtra("", _, (w.length < 4 ? 1 : w[3]) - _, P, !1))), _t.lastIndex = 0;
                        else if (x = _.match(v)) {
                            if (!(T = w.match(y)) || T.length !== x.length) return o;
                            for (p = 0, f = 0; f < x.length; f++) M = x[f], k = _.indexOf(M, p), o.appendXtra(_.substr(p, k - p), Number(M), lt(T[f], M), "", A && "px" === _.substr(k + M.length, 2), 0 === f), p = k + M.length;
                            o["xs" + o.l] += _.substr(p)
                        } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + w : w;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (P = o.xs0 + o.data.s, d = 1; d < o.l; d++) P += o["xs" + d] + o.data["xn" + d];
                            o.e = P + o["xs" + d]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    Tt = 9;
                for ((h = yt.prototype).l = h.pr = 0; --Tt > 0;) h["xn" + Tt] = 0, h["xs" + Tt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, s, r) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += r && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new yt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (n || ""), a)
                };
                var bt = function(t, e) {
                        e = e || {}, this.p = e.prefix && $(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    St = H._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s = t.split(","),
                            r = e.defaultValue;
                        for (i = i || [r], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || r, new bt(s[n], e)
                    },
                    kt = H._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            St(t, {
                                parser: function(t, i, n, s, r, a, h) {
                                    var u = o.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), l[n].parse(t, i, n, s, r, a, h)) : (G("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                (h = bt.prototype).parseComplex = function(t, e, i, n, s, r) {
                    var a, o, l, h, u, c, d = this.keyword;
                    if (this.multi && (L.test(i) || L.test(e) ? (o = e.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : d && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, d && ((u = e.indexOf(d)) !== (c = i.indexOf(d)) && (-1 === c ? o[a] = o[a].split(d).join("") : -1 === u && (o[a] += " " + d)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
                }, h.parse = function(t, e, i, n, r, a, o) {
                    return this.parseComplex(t.style, this.format(J(t, this.p, s, !1, this.dflt)), this.format(e), r, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    St(t, {
                        parser: function(t, n, s, r, a, o, l) {
                            var h = new yt(t, s, 0, 0, a, 2, s, !1, i);
                            return h.plugin = o, h.setRatio = e(t, n, r._tween, s), h
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = !0;
                var Mt, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ot = $("transform"),
                    Dt = Z + "transform",
                    Ct = $("transformOrigin"),
                    Et = null !== $("perspective"),
                    At = H.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Et) && (a.defaultForce3D || "auto")
                    },
                    Rt = _gsScope.SVGElement,
                    Lt = function(t, e, i) {
                        var n, s = q.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s), s
                    },
                    Yt = q.documentElement || {},
                    It = function() {
                        var t, e, i, n = _ || /Android/i.test(U) && !_gsScope.chrome;
                        return q.createElementNS && !n && (t = Lt("svg", Yt), i = (e = Lt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        })).getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[Ot] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Et), Yt.removeChild(t)), n
                    }(),
                    Ft = function(t, e, i, n, s, r) {
                        var o, l, h, u, c, d, f, p, _, m, g, v, y, w, x = t._gsTransform,
                            T = Wt(t, !0);
                        x && (y = x.xOrigin, w = x.yOrigin), (!n || (o = n.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), o = [(-1 !== (e = ot(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), n && T !== qt && (d = T[0], f = T[1], p = T[2], _ = T[3], m = T[4], g = T[5], (v = d * _ - f * p) && (l = u * (_ / v) + c * (-p / v) + (p * g - _ * m) / v, h = u * (-f / v) + c * (d / v) - (d * g - f * m) / v, u = i.xOrigin = o[0] = l, c = i.yOrigin = o[1] = h)), x && (r && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), s || !1 !== s && !1 !== a.defaultSmoothOrigin ? (l = u - y, h = c - w, x.xOffset += l * T[0] + h * T[2] - l, x.yOffset += l * T[1] + h * T[3] - h) : x.xOffset = x.yOffset = 0), r || t.setAttribute("data-svg-origin", o.join(" "))
                    },
                    zt = function(t) {
                        var e, i = W("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            s = this.nextSibling,
                            r = this.style.cssText;
                        if (Yt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = zt
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return s ? n.insertBefore(this, s) : n.appendChild(this), Yt.removeChild(i), this.style.cssText = r, e
                    },
                    Nt = function(t) {
                        return !(!Rt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return zt.call(t, !0)
                            }
                        }(t))
                    },
                    qt = [1, 0, 0, 1, 0, 0],
                    Wt = function(t, e) {
                        var i, n, s, r, a, o, l = t._gsTransform || new At,
                            h = t.style;
                        if (Ot ? n = J(t, Dt, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(A)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Ot || !(o = !Q(t) || "none" === Q(t).display) && t.parentNode || (o && (r = h.display, h.display = "block"), t.parentNode || (a = 1, Yt.appendChild(t)), i = !(n = J(t, Dt, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? h.display = r : o && Xt(h, "display"), a && Yt.removeChild(t)), (l.svg || t.getCTM && Nt(t)) && (i && -1 !== (h[Ot] + "").indexOf("matrix") && (n = h[Ot], i = 0), s = t.getAttribute("transform"), i && s && (n = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return qt;
                        for (s = (n || "").match(v) || [], Tt = s.length; --Tt > -1;) r = Number(s[Tt]), s[Tt] = (a = r - (r |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + r : r;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    jt = H.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var r, o, l, h, u, c, d = n && t._gsTransform || new At,
                            f = d.scaleX < 0,
                            p = 2e-5,
                            _ = 1e5,
                            m = Et && (parseFloat(J(t, Ct, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin) || 0,
                            g = parseFloat(a.defaultTransformPerspective) || 0;
                        if (d.svg = !(!t.getCTM || !Nt(t)), d.svg && (Ft(t, J(t, Ct, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Mt = a.useSVGTransformAttr || It), (r = Wt(t)) !== qt) {
                            if (16 === r.length) {
                                var v, y, w, x, T, b = r[0],
                                    S = r[1],
                                    k = r[2],
                                    M = r[3],
                                    P = r[4],
                                    O = r[5],
                                    D = r[6],
                                    C = r[7],
                                    E = r[8],
                                    A = r[9],
                                    R = r[10],
                                    L = r[12],
                                    Y = r[13],
                                    I = r[14],
                                    z = r[11],
                                    N = Math.atan2(D, R);
                                d.zOrigin && (L = E * (I = -d.zOrigin) - r[12], Y = A * I - r[13], I = R * I + d.zOrigin - r[14]), d.rotationX = N * F, N && (v = P * (x = Math.cos(-N)) + E * (T = Math.sin(-N)), y = O * x + A * T, w = D * x + R * T, E = P * -T + E * x, A = O * -T + A * x, R = D * -T + R * x, z = C * -T + z * x, P = v, O = y, D = w), N = Math.atan2(-k, R), d.rotationY = N * F, N && (y = S * (x = Math.cos(-N)) - A * (T = Math.sin(-N)), w = k * x - R * T, A = S * T + A * x, R = k * T + R * x, z = M * T + z * x, b = v = b * x - E * T, S = y, k = w), N = Math.atan2(S, b), d.rotation = N * F, N && (v = b * (x = Math.cos(N)) + S * (T = Math.sin(N)), y = P * x + O * T, w = E * x + A * T, S = S * x - b * T, O = O * x - P * T, A = A * x - E * T, b = v, P = y, E = w), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), N = Math.atan2(P, O), d.scaleX = (Math.sqrt(b * b + S * S + k * k) * _ + .5 | 0) / _, d.scaleY = (Math.sqrt(O * O + D * D) * _ + .5 | 0) / _, d.scaleZ = (Math.sqrt(E * E + A * A + R * R) * _ + .5 | 0) / _, b /= d.scaleX, P /= d.scaleY, S /= d.scaleX, O /= d.scaleY, Math.abs(N) > p ? (d.skewX = N * F, P = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(N))) : d.skewX = 0, d.perspective = z ? 1 / (0 > z ? -z : z) : 0, d.x = L, d.y = Y, d.z = I, d.svg && (d.x -= d.xOrigin - (d.xOrigin * b - d.yOrigin * P), d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * O))
                            } else if (!Et || s || !r.length || d.x !== r[4] || d.y !== r[5] || !d.rotationX && !d.rotationY) {
                                var q = r.length >= 6,
                                    W = q ? r[0] : 1,
                                    j = r[1] || 0,
                                    B = r[2] || 0,
                                    H = q ? r[3] : 1;
                                d.x = r[4] || 0, d.y = r[5] || 0, l = Math.sqrt(W * W + j * j), h = Math.sqrt(H * H + B * B), u = W || j ? Math.atan2(j, W) * F : d.rotation || 0, c = B || H ? Math.atan2(B, H) * F + u : d.skewX || 0, d.scaleX = l, d.scaleY = h, d.rotation = u, d.skewX = c, Et && (d.rotationX = d.rotationY = d.z = 0, d.perspective = g, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * W + d.yOrigin * B), d.y -= d.yOrigin - (d.xOrigin * j + d.yOrigin * H))
                            }
                            for (o in Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (f ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = m, d) d[o] < p && d[o] > -p && (d[o] = 0)
                        }
                        return n && (t._gsTransform = d, d.svg && (Mt && t.style[Ot] ? e.delayedCall(.001, function() {
                            Xt(t.style, Ot)
                        }) : !Mt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), d
                    },
                    Bt = function(t) {
                        var e, i, n = this.data,
                            s = -n.rotation * I,
                            r = s + n.skewX * I,
                            a = 1e5,
                            o = (Math.cos(s) * n.scaleX * a | 0) / a,
                            l = (Math.sin(s) * n.scaleX * a | 0) / a,
                            h = (Math.sin(r) * -n.scaleY * a | 0) / a,
                            u = (Math.cos(r) * n.scaleY * a | 0) / a,
                            c = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -h, h = -i, e = d.filter, c.filter = "";
                            var f, p, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== d.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                w = n.x + m * n.xPercent / 100,
                                x = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (w += (f = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (f * o + (p = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * l), x += p - (f * h + p * u)), v ? y += ", Dx=" + ((f = m / 2) - (f * o + (p = g / 2) * l) + w) + ", Dy=" + (p - (f * h + p * u) + x) + ")" : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(R, y) : c.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                                var S, k, M, P = 8 > _ ? 1 : -1;
                                for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), n.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + x), Tt = 0; 4 > Tt; Tt++) M = (i = -1 !== (S = d[k = rt[Tt]]).indexOf("px") ? parseFloat(S) : tt(this.t, k, parseFloat(S), S.replace(T, "")) || 0) !== n[k] ? 2 > Tt ? -n.ieOffsetX : -n.ieOffsetY : 2 > Tt ? f - n.ieOffsetX : p - n.ieOffsetY, c[k] = (n[k] = Math.round(i - M * (0 === Tt || 2 === Tt ? 1 : P))) + "px"
                            }
                        }
                    },
                    Ht = H.set3DTransformRatio = H.setTransformRatio = function(t) {
                        var e, i, n, s, r, a, o, l, h, u, c, d, p, _, m, g, v, y, w, x, T, b, S, k = this.data,
                            M = this.t.style,
                            P = k.rotation,
                            O = k.rotationX,
                            D = k.rotationY,
                            C = k.scaleX,
                            E = k.scaleY,
                            A = k.scaleZ,
                            R = k.x,
                            L = k.y,
                            Y = k.z,
                            F = k.svg,
                            z = k.perspective,
                            N = k.force3D,
                            q = k.skewY,
                            W = k.skewX;
                        if (q && (W += q, P += q), !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || Y || z || D || O || 1 !== A) || Mt && F || !Et) P || W || F ? (P *= I, b = W * I, S = 1e5, i = Math.cos(P) * C, r = Math.sin(P) * C, n = Math.sin(P - b) * -E, a = Math.cos(P - b) * E, b && "simple" === k.skewType && (e = Math.tan(b - q * I), n *= e = Math.sqrt(1 + e * e), a *= e, q && (e = Math.tan(q * I), i *= e = Math.sqrt(1 + e * e), r *= e)), F && (R += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, L += k.yOrigin - (k.xOrigin * r + k.yOrigin * a) + k.yOffset, Mt && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), R += .01 * k.xPercent * m.width, L += .01 * k.yPercent * m.height), (m = 1e-6) > R && R > -m && (R = 0), m > L && L > -m && (L = 0)), w = (i * S | 0) / S + "," + (r * S | 0) / S + "," + (n * S | 0) / S + "," + (a * S | 0) / S + "," + R + "," + L + ")", F && Mt ? this.t.setAttribute("transform", "matrix(" + w) : M[Ot] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + w) : M[Ot] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + E + "," + R + "," + L + ")";
                        else {
                            if (f && ((m = 1e-4) > C && C > -m && (C = A = 2e-5), m > E && E > -m && (E = A = 2e-5), !z || k.z || k.rotationX || k.rotationY || (z = 0)), P || W) P *= I, g = i = Math.cos(P), v = r = Math.sin(P), W && (P -= W * I, g = Math.cos(P), v = Math.sin(P), "simple" === k.skewType && (e = Math.tan((W - q) * I), g *= e = Math.sqrt(1 + e * e), v *= e, k.skewY && (e = Math.tan(q * I), i *= e = Math.sqrt(1 + e * e), r *= e))), n = -v, a = g;
                            else {
                                if (!(D || O || 1 !== A || z || F)) return void(M[Ot] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + L + "px," + Y + "px)" + (1 !== C || 1 !== E ? " scale(" + C + "," + E + ")" : ""));
                                i = a = 1, n = r = 0
                            }
                            u = 1, s = o = l = h = c = d = 0, p = z ? -1 / z : 0, _ = k.zOrigin, m = 1e-6, x = ",", T = "0", (P = D * I) && (g = Math.cos(P), l = -(v = Math.sin(P)), c = p * -v, s = i * v, o = r * v, u = g, p *= g, i *= g, r *= g), (P = O * I) && (e = n * (g = Math.cos(P)) + s * (v = Math.sin(P)), y = a * g + o * v, h = u * v, d = p * v, s = n * -v + s * g, o = a * -v + o * g, u *= g, p *= g, n = e, a = y), 1 !== A && (s *= A, o *= A, u *= A, p *= A), 1 !== E && (n *= E, a *= E, h *= E, d *= E), 1 !== C && (i *= C, r *= C, l *= C, c *= C), (_ || F) && (_ && (R += s * -_, L += o * -_, Y += u * -_ + _), F && (R += k.xOrigin - (k.xOrigin * i + k.yOrigin * n) + k.xOffset, L += k.yOrigin - (k.xOrigin * r + k.yOrigin * a) + k.yOffset), m > R && R > -m && (R = T), m > L && L > -m && (L = T), m > Y && Y > -m && (Y = 0)), w = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", w += (m > i && i > -m ? T : i) + x + (m > r && r > -m ? T : r) + x + (m > l && l > -m ? T : l), w += x + (m > c && c > -m ? T : c) + x + (m > n && n > -m ? T : n) + x + (m > a && a > -m ? T : a), O || D || 1 !== A ? (w += x + (m > h && h > -m ? T : h) + x + (m > d && d > -m ? T : d) + x + (m > s && s > -m ? T : s), w += x + (m > o && o > -m ? T : o) + x + (m > u && u > -m ? T : u) + x + (m > p && p > -m ? T : p) + x) : w += ",0,0,0,0,1,0,", w += R + x + L + x + Y + x + (z ? 1 + -Y / z : 1) + ")", M[Ot] = w
                        }
                    };
                (h = At.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, r, o, l) {
                        if (n._lastParsedTransform === l) return r;
                        n._lastParsedTransform = l;
                        var h, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), u && (l.scale = u(g, t));
                        var c, d, f, p, _, v, y, w, x, T = t._gsTransform,
                            b = t.style,
                            S = Pt.length,
                            k = l,
                            M = {},
                            P = "transformOrigin",
                            O = jt(t, s, !0, k.parseTransform),
                            D = k.transform && ("function" == typeof k.transform ? k.transform(g, m) : k.transform);
                        if (O.skewType = k.skewType || O.skewType || a.defaultSkewType, n._transform = O, D && "string" == typeof D && Ot)(d = j.style)[Ot] = D, d.display = "block", d.position = "absolute", q.body.appendChild(j), c = jt(j, null, !1), "simple" === O.skewType && (c.scaleY *= Math.cos(c.skewX * I)), O.svg && (v = O.xOrigin, y = O.yOrigin, c.x -= O.xOffset, c.y -= O.yOffset, (k.transformOrigin || k.svgOrigin) && (D = {}, Ft(t, ot(k.transformOrigin), D, k.svgOrigin, k.smoothOrigin, !0), v = D.xOrigin, y = D.yOrigin, c.x -= D.xOffset - O.xOffset, c.y -= D.yOffset - O.yOffset), (v || y) && (w = Wt(j, !0), c.x -= v - (v * w[0] + y * w[2]), c.y -= y - (v * w[1] + y * w[3]))), q.body.removeChild(j), c.perspective || (c.perspective = O.perspective), null != k.xPercent && (c.xPercent = ht(k.xPercent, O.xPercent)), null != k.yPercent && (c.yPercent = ht(k.yPercent, O.yPercent));
                        else if ("object" == typeof k) {
                            if (c = {
                                    scaleX: ht(null != k.scaleX ? k.scaleX : k.scale, O.scaleX),
                                    scaleY: ht(null != k.scaleY ? k.scaleY : k.scale, O.scaleY),
                                    scaleZ: ht(k.scaleZ, O.scaleZ),
                                    x: ht(k.x, O.x),
                                    y: ht(k.y, O.y),
                                    z: ht(k.z, O.z),
                                    xPercent: ht(k.xPercent, O.xPercent),
                                    yPercent: ht(k.yPercent, O.yPercent),
                                    perspective: ht(k.transformPerspective, O.perspective)
                                }, null != (_ = k.directionalRotation))
                                if ("object" == typeof _)
                                    for (d in _) k[d] = _[d];
                                else k.rotation = _;
                                "string" == typeof k.x && -1 !== k.x.indexOf("%") && (c.x = 0, c.xPercent = ht(k.x, O.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (c.y = 0, c.yPercent = ht(k.y, O.yPercent)), c.rotation = ut("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : O.rotation, O.rotation, "rotation", M), Et && (c.rotationX = ut("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", M), c.rotationY = ut("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", M)), c.skewX = ut(k.skewX, O.skewX), c.skewY = ut(k.skewY, O.skewY)
                        }
                        for (Et && null != k.force3D && (O.force3D = k.force3D, p = !0), (f = O.force3D || O.z || O.rotationX || O.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == k.scale || (c.scaleZ = 1); --S > -1;)((D = c[x = Pt[S]] - O[x]) > 1e-6 || -1e-6 > D || null != k[x] || null != z[x]) && (p = !0, r = new yt(O, x, O[x], D, r), x in M && (r.e = M[x]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                        return D = k.transformOrigin, O.svg && (D || k.svgOrigin) && (v = O.xOffset, y = O.yOffset, Ft(t, ot(D), c, k.svgOrigin, k.smoothOrigin), r = wt(O, "xOrigin", (T ? O : c).xOrigin, c.xOrigin, r, P), r = wt(O, "yOrigin", (T ? O : c).yOrigin, c.yOrigin, r, P), (v !== O.xOffset || y !== O.yOffset) && (r = wt(O, "xOffset", T ? v : O.xOffset, O.xOffset, r, P), r = wt(O, "yOffset", T ? y : O.yOffset, O.yOffset, r, P)), D = "0px 0px"), (D || Et && f && O.zOrigin) && (Ot ? (p = !0, x = Ct, D = (D || J(t, x, s, !1, "50% 50%")) + "", (r = new yt(b, x, 0, 0, r, -1, P)).b = b[x], r.plugin = o, Et ? (d = O.zOrigin, D = D.split(" "), O.zOrigin = (D.length > 2 && (0 === d || "0px" !== D[2]) ? parseFloat(D[2]) : d) || 0, r.xs0 = r.e = D[0] + " " + (D[1] || "50%") + " 0px", (r = new yt(O, "zOrigin", 0, 0, r, -1, r.n)).b = d, r.xs0 = r.e = O.zOrigin) : r.xs0 = r.e = D) : ot(D + "", O)), p && (n._transformType = O.svg && Mt || !f && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), u && (l.scale = u), r
                    },
                    prefix: !0
                }), St("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), St("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, a, o) {
                        e = this.format(e);
                        var l, h, u, c, d, f, p, _, m, g, v, y, w, x, T, b, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = $(S[h])), -1 !== (d = c = J(t, S[h], s, !1, "0px")).indexOf(" ") && (c = d.split(" "), d = c[0], c = c[1]), f = u = l[h], p = parseFloat(d), y = d.substr((p + "").length), (w = "=" === f.charAt(1)) ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), v = f.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(f), v = f.substr((_ + "").length)), "" === v && (v = n[i] || y), v !== y && (x = tt(t, "borderLeft", p, y), T = tt(t, "borderTop", p, y), "%" === v ? (d = x / m * 100 + "%", c = T / g * 100 + "%") : "em" === v ? (d = x / (b = tt(t, "borderLeft", 1, "em")) + "em", c = T / b + "em") : (d = x + "px", c = T + "px"), w && (f = parseFloat(d) + _ + v, u = parseFloat(c) + _ + v)), a = xt(k, S[h], d + " " + c, f + " " + u, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: mt("0px 0px 0px 0px", !1, !0)
                }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, r, a) {
                        return xt(t.style, i, this.format(J(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
                    },
                    prefix: !0,
                    formatter: mt("0px 0px", !1, !0)
                }), St("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, r, a) {
                        var o, l, h, u, c, d, f = "background-position",
                            p = s || Q(t, null),
                            m = this.format((p ? _ ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((d = J(t, "backgroundImage").replace(D, "")) && "none" !== d)) {
                            for (o = m.split(" "), l = g.split(" "), B.setAttribute("src", d), h = 2; --h > -1;)(u = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - B.width : t.offsetHeight - B.height, o[h] = u ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, r, a)
                    },
                    formatter: ot
                }), St("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return ot(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
                    }
                }), St("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), St("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), St("transformStyle", {
                    prefix: !0
                }), St("backfaceVisibility", {
                    prefix: !0
                }), St("userSelect", {
                    prefix: !0
                }), St("margin", {
                    parser: gt("marginTop,marginRight,marginBottom,marginLeft")
                }), St("padding", {
                    parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), St("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, r, a) {
                        var o, l, h;
                        return 9 > _ ? (l = t.currentStyle, h = 8 > _ ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(J(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
                    }
                }), St("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), St("autoRound,strictUnits", {
                    parser: function(t, e, i, n, s) {
                        return s
                    }
                }), St("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, r, a) {
                        var o = J(t, "borderTopWidth", s, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(T, "");
                        return "px" !== h && (o = parseFloat(o) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + J(t, "borderTopStyle", s, !1, "solid") + " " + J(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
                    }
                }), St("borderWidth", {
                    parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), St("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, s, r) {
                        var a = t.style,
                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new yt(a, o, 0, 0, s, -1, i, !1, 0, a[o], e)
                    }
                });
                var Ut = function(t) {
                    var e, i = this.t,
                        n = i.filter || J(this.data, "filter") || "",
                        s = this.s + this.c * t | 0;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = n.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(b, "opacity=" + s))
                };
                St("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, r, a) {
                        var o = parseFloat(J(t, "opacity", s, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === J(t, "visibility", s) && 0 !== e && (o = 0), X ? r = new yt(l, "opacity", o, e - o, r) : ((r = new yt(l, "opacity", 100 * o, 100 * (e - o), r)).xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Ut), h && ((r = new yt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                    }
                });
                var Xt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Vt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Xt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                St("className", {
                    parser: function(t, e, n, r, a, o, l) {
                        var h, u, c, d, f, p = t.getAttribute("class") || "",
                            _ = t.style.cssText;
                        if ((a = r._classNamePT = new yt(t, n, 0, 0, a, 2)).setRatio = Vt, a.pr = -11, i = !0, a.b = p, u = it(t, s), c = t._gsClassPT) {
                            for (d = {}, f = c.data; f;) d[f.p] = 1, f = f._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = nt(t, u, it(t), l, d), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = _, a.xfirst = r.parse(t, h.difs, a, o)
                    }
                });
                var Gt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, r, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", s = !0;
                        else
                            for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1;) i = e[n], l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Ct : l[i].p), Xt(a, i);
                        s && (Xt(a, Ot), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (St("clearProps", {
                        parser: function(t, e, n, s, r) {
                            return (r = new yt(t, n, 0, 0, r, 2)).setRatio = Gt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = h.length; Tt--;) kt(h[Tt]);
                (h = a.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o, h) {
                    if (!t.nodeType) return !1;
                    this._target = m = t, this._tween = o, this._vars = e, g = h, u = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, s = Q(t, ""), r = this._overwriteProps;
                    var f, _, v, y, w, x, T, b, k, M = t.style;
                    if (c && "" === M.zIndex && (("auto" === (f = J(t, "zIndex", s)) || "" === f) && this._addLazySet(M, "zIndex", 0)), "string" == typeof e && (y = M.cssText, f = it(t, s), M.cssText = y + ";" + e, f = nt(t, f, it(t)).difs, !X && S.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, M.cssText = y), e.className ? this._firstPT = _ = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = _ = this.parse(t, e, null), this._transformType) {
                        for (k = 3 === this._transformType, Ot ? d && (c = !0, "" === M.zIndex && (("auto" === (T = J(t, "zIndex", s)) || "" === T) && this._addLazySet(M, "zIndex", 0)), p && this._addLazySet(M, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : M.zoom = 1, v = _; v && v._next;) v = v._next;
                        b = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, v), b.setRatio = Ot ? Ht : Bt, b.data = this._transform || jt(t, s, !0), b.tween = o, b.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; _;) {
                            for (x = _._next, v = y; v && v.pr > _.pr;) v = v._next;
                            (_._prev = v ? v._prev : w) ? _._prev._next = _: y = _, (_._next = v) ? v._prev = _ : w = _, _ = x
                        }
                        this._firstPT = y
                    }
                    return !0
                }, h.parse = function(t, e, i, r) {
                    var a, o, h, c, d, f, p, _, v, y, w = t.style;
                    for (a in e) {
                        if ("function" == typeof(f = e[a]) && (f = f(g, m)), o = l[a]) i = o.parse(t, f, a, this, i, r, e);
                        else {
                            if ("--" === a.substr(0, 2)) {
                                this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", Q(t).getPropertyValue(a) + "", f + "", a, !1, a);
                                continue
                            }
                            d = J(t, a, s) + "", v = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && M.test(f) ? (v || (f = ((f = ft(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = xt(w, a, d, f, !0, "transparent", i, 0, r)) : v && Y.test(f) ? i = xt(w, a, d, f, !0, null, i, 0, r) : (p = (h = parseFloat(d)) || 0 === h ? d.substr((h + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (h = at(t, a, s), p = "px") : "left" === a || "top" === a ? (h = et(t, a, s), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), (y = v && "=" === f.charAt(1)) ? (c = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), c *= parseFloat(f), _ = f.replace(T, "")) : (c = parseFloat(f), _ = v ? f.replace(T, "") : ""), "" === _ && (_ = a in n ? n[a] : p), f = c || 0 === c ? (y ? c + h : c) + _ : e[a], p !== _ && ("" !== _ || "lineHeight" === a) && (c || 0 === c) && h && (h = tt(t, a, h, p), "%" === _ ? (h /= tt(t, a, 100, "%") / 100, !0 !== e.strictUnits && (d = h + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? h /= tt(t, a, 1, _) : "px" !== _ && (c = tt(t, a, c, _), _ = "px"), y && (c || 0 === c) && (f = c + h + _)), y && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== w[a] && (f || f + "" != "NaN" && null != f) ? (i = new yt(w, a, c || h || 0, 0, i, -1, a, !1, 0, d, f)).xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : d : G("invalid " + a + " tween value: " + e[a]) : (i = new yt(w, a, h, c - h, i, 0, a, !1 !== u && ("px" === _ || "zIndex" === a), 0, d, f)).xs0 = _)
                        }
                        r && i && !i.plugin && (i.plugin = r)
                    }
                    return i
                }, h.setRatio = function(t) {
                    var e, i, n, s = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (e = Math.round(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(t);
                                s = s._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || jt(this._target, s, !0), this._transformType = this._transform.svg && Mt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Zt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Zt, n.data = this
                }, h._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, h._kill = function(e) {
                    var i, n, s, r = e;
                    if (e.autoAlpha || e.alpha) {
                        for (n in r = {}, e) r[n] = e[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, r)
                };
                var Kt = function(t, e, i) {
                    var n, s, r, a;
                    if (t.slice)
                        for (s = t.length; --s > -1;) Kt(t[s], e, i);
                    else
                        for (s = (n = t.childNodes).length; --s > -1;) a = (r = n[s]).type, r.style && (e.push(it(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || Kt(r, e, i)
                };
                return a.cascadeTo = function(t, i, n) {
                    var s, r, a, o, l = e.to(t, i, n),
                        h = [l],
                        u = [],
                        c = [],
                        d = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Kt(t, u, d), l.render(i, !0, !0), Kt(t, c), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;)
                        if ((r = nt(d[s], u[s], c[s])).firstMPT) {
                            for (a in r = r.difs, n) f[a] && (r[a] = n[a]);
                            for (a in o = {}, r) o[a] = u[s][a];
                            h.push(e.fromTo(d[s], i, o, r))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), a = r.length, o = {}, l = s._propLookup.roundProps; --a > -1;) o[r[a]] = Math.round;
                    for (a = r.length; --a > -1;)
                        for (t = r[a], i = s._firstPT; i;) n = i._next, i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n), i._next = i._prev = null, s._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, i, n) {
                    var s, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (s in e) "function" == typeof(r = e[s]) && (r = r(n, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", r + "", s, !1, s), this._overwriteProps.push(s);
                    return !0
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, n) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var s, r, a, o, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (s in e) "useRadians" !== s && ("function" == typeof(o = e[s]) && (o = o(n, t)), r = (h = (o + "").split("_"))[0], a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (o = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - a, h.length && (-1 !== (r = h.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = 0 > l ? l + u : l - u)), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, s, a, a + l, s), this._overwriteProps.push(s)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    a = r.com.greensock,
                    o = 2 * Math.PI,
                    l = Math.PI / 2,
                    h = a._class,
                    u = function(e, i) {
                        var n = h("easing." + e, function() {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    c = t.register || function() {},
                    d = function(t, e, i, n, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, t), r
                    },
                    f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    _ = d("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, (g = (e = h("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0)).prototype = new t).constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = e.config = function(t, i) {
                    return new e(t, i)
                }, (g = (i = h("easing.ExpoScaleEase", function(t, e, i) {
                    this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
                }, !0)).prototype = new t).constructor = i, g.getRatio = function(t) {
                    return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                }, g.config = i.config = function(t, e, n) {
                    return new i(t, e, n)
                }, (g = (n = h("easing.RoughEase", function(e) {
                    for (var i, n, s, r, a, o, l = (e = e || {}).taper || "none", h = [], u = 0, c = 0 | (e.points || 20), d = c, p = !1 !== e.randomize, _ = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = p ? Math.random() : 1 / c * d, n = m ? m.getRatio(i) : i, "none" === l ? s = g : "out" === l ? s = (r = 1 - i) * r * g : "in" === l ? s = i * i * g : .5 > i ? s = (r = 2 * i) * r * .5 * g : s = (r = 2 * (1 - i)) * r * .5 * g, p ? n += Math.random() * s - .5 * s : d % 2 ? n += .5 * s : n -= .5 * s, _ && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new f(1, 1, null), d = c; --d > -1;) a = h[d], o = new f(a.x, a.y, o);
                    this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
                }, !0)).prototype = new t).constructor = n, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new n(t)
                }, n.ease = new n, d("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), d("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), d("Elastic", (s = function(e, i, n) {
                    var s = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function(t, e) {
                        return new s(t, e)
                    }, s
                })("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), s("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), d("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), d("Sine", u("SineOut", function(t) {
                    return Math.sin(t * l)
                }), u("SineIn", function(t) {
                    return 1 - Math.cos(t * l)
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), _
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            n = t.document,
            s = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!s.TweenLite) {
            var r, a, o, l, h, u = function(t) {
                    var e, i = t.split("."),
                        n = s;
                    for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                c = u("com.greensock"),
                d = 1e-10,
                f = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                p = function() {},
                _ = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                m = {},
                g = function(n, r, a, o) {
                    this.sc = m[n] ? m[n].sc : [], m[n] = this, this.gsClass = null, this.func = a;
                    var l = [];
                    this.check = function(h) {
                        for (var c, d, f, p, _ = r.length, v = _; --_ > -1;)(c = m[r[_]] || new g(r[_], [])).gsClass ? (l[_] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && a) {
                            if (f = (d = ("com.greensock." + n).split(".")).pop(), p = u(d.join("."))[f] = this.gsClass = a.apply(a, l), o)
                                if (s[f] = i[f] = p, "undefined" != typeof module && module.exports)
                                    if (n === e)
                                        for (_ in module.exports = i[e] = p, i) p[_] = i[_];
                                    else i[e] && (i[e][f] = p);
                            else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return p
                            });
                            for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                        }
                    }, this.check(!0)
                },
                v = t._gsDefine = function(t, e, i, n) {
                    return new g(t, e, i, n)
                },
                y = c._class = function(t, e, i) {
                    return e = e || function() {}, v(t, [], function() {
                        return e
                    }, i), e
                };
            v.globals = s;
            var w = [0, 0, 1, 1],
                x = y("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? w.concat(e) : w
                }, !0),
                T = x.map = {},
                b = x.register = function(t, e, i, n) {
                    for (var s, r, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], s = n ? y("easing." + r, null, !0) : c.easing[r] || {}, a = u.length; --a > -1;) o = u[a], T[r + "." + o] = T[o + r] = s[o] = t.getRatio ? t : t[o] || new t
                };
            for ((o = x.prototype)._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, a = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) o = r[a] + ",Power" + a, b(new x(null, null, 1, a), o, "easeOut", !0), b(new x(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), b(new x(null, null, 3, a), o, "easeInOut");
            T.linear = c.easing.Linear.easeIn, T.swing = c.easing.Quad.easeInOut;
            var S = y("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (o = S.prototype).addEventListener = function(t, e, i, n, s) {
                s = s || 0;
                var r, a, o = this._listeners[t],
                    u = 0;
                for (this !== l || h || l.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;)(r = o[a]).c === e && r.s === i ? o.splice(a, 1) : 0 === u && r.pr < s && (u = a + 1);
                o.splice(u, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                })
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for ((e = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(n = s[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                M = t.cancelAnimationFrame,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                O = P();
            for (a = (r = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !k;) k = t[r[a] + "RequestAnimationFrame"], M = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i, s, r, a, o, u = this,
                    c = P(),
                    f = !(!1 === e || !k) && "auto",
                    _ = 500,
                    m = 33,
                    g = function(t) {
                        var e, n, l = P() - O;
                        l > _ && (c += l - m), O += l, u.time = (O - c) / 1e3, e = u.time - o, (!i || e > 0 || !0 === t) && (u.frame++, o += e + (e >= a ? .004 : a - e), n = !0), !0 !== t && (r = s(g)), n && u.dispatchEvent("tick")
                    };
                S.call(u), u.time = u.frame = 0, u.tick = function() {
                    g(!0)
                }, u.lagSmoothing = function(t, e) {
                    return arguments.length ? (_ = t || 1 / d, void(m = Math.min(e, _, 0))) : 1 / d > _
                }, u.sleep = function() {
                    null != r && (f && M ? M(r) : clearTimeout(r), s = p, r = null, u === l && (h = !1))
                }, u.wake = function(t) {
                    null !== r ? u.sleep() : t ? c += -O + (O = P()) : u.frame > 10 && (O = P() - _ + 5), s = 0 === i ? p : f && k ? k : function(t) {
                        return setTimeout(t, 1e3 * (o - u.time) + 1 | 0)
                    }, u === l && (h = !0), g(2)
                }, u.fps = function(t) {
                    return arguments.length ? (a = 1 / ((i = t) || 60), o = this.time + a, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), f = t, void u.fps(i)) : f
                }, u.fps(t), setTimeout(function() {
                    "auto" === f && u.frame < 5 && "hidden" !== (n || {}).visibilityState && u.useRAF(!1)
                }, 1500)
            }), (o = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
            var D = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, G) {
                    h || l.wake();
                    var i = this.vars.useFrames ? V : G;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = D.ticker = new c.Ticker, (o = D.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var C = function() {
                h && P() - O > 2e3 && ("hidden" !== (n || {}).visibilityState || !l.lagSmoothing()) && l.wake();
                var t = setTimeout(C, 2e3);
                t.unref && t.unref()
            };
            C(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function(t, e, i) {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, o._enabled = function(t, e) {
                return h || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    s = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(s);
                        break;
                    case 1:
                        i.call(s, n[0]);
                        break;
                    case 2:
                        i.call(s, n[0], n[1]);
                        break;
                    default:
                        i.apply(s, n)
                }
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = _(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (h || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && K(), this.render(t, e, !1), L.length && K())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                var e, i;
                for (t = t || d, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                return this
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (h || t || l.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var E = y("core.SimpleTimeline", function(t) {
                D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (o = E.prototype = new D).constructor = E, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, i, n) {
                var s, r;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                    for (r = t._startTime; s && s._startTime > r;) s = s._prev;
                return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, o.rawTime = function() {
                return h || l.wake(), this._totalTime
            };
            var A = y("TweenLite", function(e, i, n) {
                    if (D.call(this, i, n), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : A.selector(e) || e;
                    var s, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? X[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (o || e instanceof Array || e.push && _(e)) && "number" != typeof e[0])
                        for (this._targets = a = f(e), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++)(r = a[s]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(f(r))) : (this._siblings[s] = $(r, this, !1), 1 === l && this._siblings[s].length > 1 && J(r, this, null, 1, this._siblings[s])) : "string" == typeof(r = a[s--] = A.selector(r)) && a.splice(s + 1, 1) : a.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -d, this.render(Math.min(0, -this._delay)))
                }, !0),
                R = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (o = A.prototype = new D).constructor = A, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, A.version = "1.20.4", A.defaultEase = o._ease = new x(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = l, A.autoSleep = 120, A.lagSmoothing = function(t, e) {
                l.lagSmoothing(t, e)
            }, A.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (A.selector = i, i(e)) : void 0 === n ? e : n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var L = [],
                Y = {},
                I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                F = /[\+-]=-?[\.\d]/,
                z = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                N = function(t, e, i, n) {
                    var s, r, a, o, l, h, u, c = [],
                        d = 0,
                        f = "",
                        p = 0;
                    for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(I) || [], r = e.match(I) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = r.length, o = 0; l > o; o++) u = r[o], f += (h = e.substr(d, e.indexOf(u, d) - d)) || !o ? h : ",", d += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), u === s[o] || s.length <= o ? f += u : (f && (c.push(f), f = ""), a = parseFloat(s[o]), c.push(a), c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: a,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                        f: 0,
                        m: p && 4 > p ? Math.round : 0
                    }), d += u.length;
                    return (f += e.substr(d)) && c.push(f), c.setRatio = z, F.test(e) && (c.end = null), c
                },
                q = function(t, e, i, n, s, r, a, o, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var h = typeof t[e],
                        u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        c = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e],
                        d = "string" == typeof n && "=" === n.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: c,
                            f: "function" === h,
                            pg: 0,
                            n: s || e,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                    return ("number" != typeof c || "number" != typeof n && !d) && (a || isNaN(c) || !d && isNaN(n) || "boolean" == typeof c || "boolean" == typeof n ? (f.fp = a, f = {
                        t: N(c, d ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : n, o || A.defaultStringFilter, f),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0,
                        m: 0
                    }) : (f.s = parseFloat(c), d || (f.c = parseFloat(n) - f.s || 0))), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
                },
                W = A._internals = {
                    isArray: _,
                    isSelector: R,
                    lazyTweens: L,
                    blobDif: N
                },
                j = A._plugins = {},
                B = W.tweenLookup = {},
                H = 0,
                U = W.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                X = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                V = D._rootFramesTimeline = new E,
                G = D._rootTimeline = new E,
                Z = 30,
                K = W.lazyRender = function() {
                    var t, e = L.length;
                    for (Y = {}; --e > -1;)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    L.length = 0
                };
            G._startTime = l.time, V._startTime = l.frame, G._active = V._active = !0, setTimeout(K, 1), D._updateRoot = A.render = function() {
                var t, e, i;
                if (L.length && K(), G.render((l.time - G._startTime) * G._timeScale, !1, !1), V.render((l.frame - V._startTime) * V._timeScale, !1, !1), L.length && K(), l.frame >= Z) {
                    for (i in Z = l.frame + (parseInt(A.autoSleep, 10) || 120), B) {
                        for (t = (e = B[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete B[i]
                    }
                    if ((!(i = G._first) || i._paused) && A.autoSleep && !V._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", D._updateRoot);
            var $ = function(t, e, i) {
                    var n, s, r = t._gsTweenID;
                    if (B[r || (t._gsTweenID = r = "t" + H++)] || (B[r] = {
                            target: t,
                            tweens: []
                        }), e && ((n = B[r].tweens)[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return B[r].tweens
                },
                Q = function(t, e, i, n) {
                    var s, r, a = t.vars.onOverwrite;
                    return a && (s = a(t, e, i, n)), (a = A.onOverwrite) && (r = a(t, e, i, n)), !1 !== s && !1 !== r
                },
                J = function(t, e, i, n, s) {
                    var r, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, r = 0; l > r; r++)
                            if ((o = s[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var h, u = e._startTime + d,
                        c = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (r = s.length; --r > -1;)(o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || tt(e, 0, p), 0 === tt(o, h, p) && (c[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (c[f++] = o)));
                    for (r = f; --r > -1;)
                        if (o = c[r], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                            if (2 !== n && !Q(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                tt = function(t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return (r /= s) > e ? r - e : i && r === e || !t._initted && 2 * d > r - e ? d : (r += t.totalDuration() / t._timeScale / s) > e + d ? 0 : r - e - d
                };
            o._init = function() {
                var t, e, i, n, s, r, a = this.vars,
                    o = this._overwrittenProps,
                    l = this._duration,
                    h = !!a.immediateRender,
                    u = a.ease;
                if (a.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {}, a.startAt) s[n] = a.startAt[n];
                    if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== a.lazy, s.startAt = s.delay = null, s.onUpdate = a.onUpdate, s.onUpdateParams = a.onUpdateParams, s.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = A.to(this.target, 0, s), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (a.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (h = !1), i = {}, a) U[n] && "autoCSS" !== n || (i[n] = a[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = A.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, a.easeParams) : T[u] || A.defaultEase : A.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (e && A._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, s, r) {
                var a, o, l, h, u, c;
                if (null == e) return !1;
                for (a in Y[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && j.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, n = {};
                        for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                        t.css = n
                    }(this.vars, e), this.vars)
                    if (c = this.vars[a], U[a]) c && (c instanceof Array || c.push && _(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
                    else if (j[a] && (h = new j[a])._onInitTween(e, this.vars[a], this, r)) {
                    for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: a,
                            pg: 1,
                            pr: h._priority,
                            m: 0
                        }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[a] = q.call(this, e, a, "get", c, a, 0, null, this.vars.stringFilter, r);
                return s && this._kill(s, e) ? this._initProps(e, i, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (Y[e._gsTweenID] = !0), l)
            }, o.render = function(t, e, i) {
                var n, s, r, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === d && "isPause" !== this.data) && h !== t && (i = !0, h > d && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : d);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== d || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : d)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, L.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || n || i) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === d && a !== d && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
                var n, s, r, a, o, l, h, u, c, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((_(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, u = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (A.onOverwrite || this.vars.onOverwrite)) {
                            for (r in h) o[r] && (c || (c = []), c.push(r));
                            if ((c || !t) && !Q(this, i, e, c)) return !1
                        }
                        for (r in h)(a = o[r]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), u && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -d, this.render(Math.min(0, -this._delay))), this
            }, o._enabled = function(t, e) {
                if (h || l.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = $(n[i], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return D.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, A.to = function(t, e, i) {
                return new A(t, e, i)
            }, A.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i)
            }, A.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new A(t, e, n)
            }, A.delayedCall = function(t, e, i, n, s) {
                return new A(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, A.set = function(t, e) {
                return new A(t, 0, e)
            }, A.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, n, s, r;
                if (t = "string" != typeof t ? t : A.selector(t) || t, (_(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(A.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (n = $(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, A.killTweensOf = A.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = A.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var et = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
            }, !0);
            if (o = et.prototype, et.version = "1.19.0", et.API = 2, o._firstPT = null, o._addTween = q, o.setRatio = z, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, o._mod = o._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, A._onPluginEvent = function(t, e) {
                    var i, n, s, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : r) ? o._prev._next = o: s = o, (o._next = n) ? n._prev = o : r = o, o = a
                        }
                        o = e._firstPT = s
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, et.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === et.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, v.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            et.call(this, i, n), this._overwriteProps = s || []
                        }, !0 === t.global),
                        o = a.prototype = new et(i);
                    for (e in o.constructor = a, a.API = t.API, r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, et.activate([a]), a
                }, r = t._gsQueue) {
                for (a = 0; a < r.length; a++) r[a]();
                for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
    }(this, function() {
        "use strict";

        function t() {
            return Kt.apply(null, arguments)
        }

        function e(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }

        function i(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t)
        }

        function n(t) {
            return void 0 === t
        }

        function s(t) {
            return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
        }

        function r(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }

        function a(t, e) {
            var i, n = [];
            for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
            return n
        }

        function o(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function l(t, e) {
            for (var i in e) o(e, i) && (t[i] = e[i]);
            return o(e, "toString") && (t.toString = e.toString), o(e, "valueOf") && (t.valueOf = e.valueOf), t
        }

        function h(t, e, i, n) {
            return vt(t, e, i, n, !0).utc()
        }

        function u(t) {
            return null == t._pf && (t._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }), t._pf
        }

        function c(t) {
            if (null == t._isValid) {
                var e = u(t),
                    i = $t.call(e.parsedDateParts, function(t) {
                        return null != t
                    }),
                    n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
                t._isValid = n
            }
            return t._isValid
        }

        function d(t) {
            var e = h(NaN);
            return null != t ? l(u(e), t) : u(e).userInvalidated = !0, e
        }

        function f(t, e) {
            var i, s, r;
            if (n(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), n(e._i) || (t._i = e._i), n(e._f) || (t._f = e._f), n(e._l) || (t._l = e._l), n(e._strict) || (t._strict = e._strict), n(e._tzm) || (t._tzm = e._tzm), n(e._isUTC) || (t._isUTC = e._isUTC), n(e._offset) || (t._offset = e._offset), n(e._pf) || (t._pf = u(e)), n(e._locale) || (t._locale = e._locale), Qt.length > 0)
                for (i = 0; i < Qt.length; i++) n(r = e[s = Qt[i]]) || (t[s] = r);
            return t
        }

        function p(e) {
            f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Jt && (Jt = !0, t.updateOffset(this), Jt = !1)
        }

        function _(t) {
            return t instanceof p || null != t && null != t._isAMomentObject
        }

        function m(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }

        function g(t) {
            var e = +t,
                i = 0;
            return 0 !== e && isFinite(e) && (i = m(e)), i
        }

        function v(t, e, i) {
            var n, s = Math.min(t.length, e.length),
                r = Math.abs(t.length - e.length),
                a = 0;
            for (n = 0; n < s; n++)(i && t[n] !== e[n] || !i && g(t[n]) !== g(e[n])) && a++;
            return a + r
        }

        function y(e) {
            !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function w(e, i) {
            var n = !0;
            return l(function() {
                if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                    for (var s, r = [], a = 0; a < arguments.length; a++) {
                        if (s = "", "object" == typeof arguments[a]) {
                            for (var o in s += "\n[" + a + "] ", arguments[0]) s += o + ": " + arguments[0][o] + ", ";
                            s = s.slice(0, -2)
                        } else s = arguments[a];
                        r.push(s)
                    }
                    y(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
                }
                return i.apply(this, arguments)
            }, i)
        }

        function x(e, i) {
            null != t.deprecationHandler && t.deprecationHandler(e, i), te[e] || (y(i), te[e] = !0)
        }

        function T(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }

        function b(t, e) {
            var n, s = l({}, t);
            for (n in e) o(e, n) && (i(t[n]) && i(e[n]) ? (s[n] = {}, l(s[n], t[n]), l(s[n], e[n])) : null != e[n] ? s[n] = e[n] : delete s[n]);
            for (n in t) o(t, n) && !o(e, n) && i(t[n]) && (s[n] = l({}, s[n]));
            return s
        }

        function S(t) {
            null != t && this.set(t)
        }

        function k(t, e) {
            var i = t.toLowerCase();
            ie[i] = ie[i + "s"] = ie[e] = t
        }

        function M(t) {
            return "string" == typeof t ? ie[t] || ie[t.toLowerCase()] : void 0
        }

        function P(t) {
            var e, i, n = {};
            for (i in t) o(t, i) && ((e = M(i)) && (n[e] = t[i]));
            return n
        }

        function O(t, e) {
            ne[t] = e
        }

        function D(e, i) {
            return function(n) {
                return null != n ? (E(this, e, n), t.updateOffset(this, i), this) : C(this, e)
            }
        }

        function C(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }

        function E(t, e, i) {
            t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
        }

        function A(t, e, i) {
            var n = "" + Math.abs(t),
                s = e - n.length;
            return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
        }

        function R(t, e, i, n) {
            var s = n;
            "string" == typeof n && (s = function() {
                return this[n]()
            }), t && (oe[t] = s), e && (oe[e[0]] = function() {
                return A(s.apply(this, arguments), e[1], e[2])
            }), i && (oe[i] = function() {
                return this.localeData().ordinal(s.apply(this, arguments), t)
            })
        }

        function L(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function Y(t, e) {
            return t.isValid() ? (e = I(e, t.localeData()), ae[e] = ae[e] || function(t) {
                var e, i, n = t.match(se);
                for (e = 0, i = n.length; e < i; e++) oe[n[e]] ? n[e] = oe[n[e]] : n[e] = L(n[e]);
                return function(e) {
                    var s, r = "";
                    for (s = 0; s < i; s++) r += T(n[s]) ? n[s].call(e, t) : n[s];
                    return r
                }
            }(e), ae[e](t)) : t.localeData().invalidDate()
        }

        function I(t, e) {
            function i(t) {
                return e.longDateFormat(t) || t
            }
            var n = 5;
            for (re.lastIndex = 0; n >= 0 && re.test(t);) t = t.replace(re, i), re.lastIndex = 0, n -= 1;
            return t
        }

        function F(t, e, i) {
            Se[t] = T(e) ? e : function(t, n) {
                return t && i ? i : e
            }
        }

        function z(t, e) {
            return o(Se, t) ? Se[t](e._strict, e._locale) : new RegExp(function(t) {
                return N(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, s) {
                    return e || i || n || s
                }))
            }(t))
        }

        function N(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function q(t, e) {
            var i, n = e;
            for ("string" == typeof t && (t = [t]), s(e) && (n = function(t, i) {
                    i[e] = g(t)
                }), i = 0; i < t.length; i++) ke[t[i]] = n
        }

        function W(t, e) {
            q(t, function(t, i, n, s) {
                n._w = n._w || {}, e(t, n._w, n, s)
            })
        }

        function j(t, e, i) {
            null != e && o(ke, t) && ke[t](e, i._a, i, t)
        }

        function B(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }

        function H(t, e) {
            var i;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = g(e);
                else if (!s(e = t.localeData().monthsParse(e))) return t;
            return i = Math.min(t.date(), B(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
        }

        function U(e) {
            return null != e ? (H(this, e), t.updateOffset(this, !0), this) : C(this, "Month")
        }

        function X() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, n = [],
                s = [],
                r = [];
            for (e = 0; e < 12; e++) i = h([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
            for (n.sort(t), s.sort(t), r.sort(t), e = 0; e < 12; e++) n[e] = N(n[e]), s[e] = N(s[e]);
            for (e = 0; e < 24; e++) r[e] = N(r[e]);
            this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function V(t) {
            return G(t) ? 366 : 365
        }

        function G(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }

        function Z(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
        }

        function K(t, e, i) {
            var n = 7 + e - i;
            return -((7 + Z(t, 0, n).getUTCDay() - e) % 7) + n - 1
        }

        function $(t, e, i, n, s) {
            var r, a, o = 1 + 7 * (e - 1) + (7 + i - n) % 7 + K(t, n, s);
            return o <= 0 ? a = V(r = t - 1) + o : o > V(t) ? (r = t + 1, a = o - V(t)) : (r = t, a = o), {
                year: r,
                dayOfYear: a
            }
        }

        function Q(t, e, i) {
            var n, s, r = K(t.year(), e, i),
                a = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
            return a < 1 ? n = a + J(s = t.year() - 1, e, i) : a > J(t.year(), e, i) ? (n = a - J(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = a), {
                week: n,
                year: s
            }
        }

        function J(t, e, i) {
            var n = K(t, e, i),
                s = K(t + 1, e, i);
            return (V(t) - n + s) / 7
        }

        function tt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, n, s, r, a = [],
                o = [],
                l = [],
                u = [];
            for (e = 0; e < 7; e++) i = h([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), a.push(n), o.push(s), l.push(r), u.push(n), u.push(s), u.push(r);
            for (a.sort(t), o.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) o[e] = N(o[e]), l[e] = N(l[e]), u[e] = N(u[e]);
            this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
        }

        function et() {
            return this.hours() % 12 || 12
        }

        function it(t, e) {
            R(t, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }

        function nt(t, e) {
            return e._meridiemParse
        }

        function st(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function rt(t) {
            var e = null;
            if (!$e[t] && "undefined" != typeof module && module && module.exports) try {
                e = Ge._abbr, require("./locale/" + t), at(e)
            } catch (t) {}
            return $e[t]
        }

        function at(t, e) {
            var i;
            return t && ((i = n(e) ? lt(t) : ot(t, e)) && (Ge = i)), Ge._abbr
        }

        function ot(t, e) {
            if (null !== e) {
                var i = Ke;
                if (e.abbr = t, null != $e[t]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = $e[t]._config;
                else if (null != e.parentLocale) {
                    if (null == $e[e.parentLocale]) return Qe[e.parentLocale] || (Qe[e.parentLocale] = []), Qe[e.parentLocale].push({
                        name: t,
                        config: e
                    }), null;
                    i = $e[e.parentLocale]._config
                }
                return $e[t] = new S(b(i, e)), Qe[t] && Qe[t].forEach(function(t) {
                    ot(t.name, t.config)
                }), at(t), $e[t]
            }
            return delete $e[t], null
        }

        function lt(t) {
            var i;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ge;
            if (!e(t)) {
                if (i = rt(t)) return i;
                t = [t]
            }
            return function(t) {
                for (var e, i, n, s, r = 0; r < t.length;) {
                    for (e = (s = st(t[r]).split("-")).length, i = (i = st(t[r + 1])) ? i.split("-") : null; e > 0;) {
                        if (n = rt(s.slice(0, e).join("-"))) return n;
                        if (i && i.length >= e && v(s, i, !0) >= e - 1) break;
                        e--
                    }
                    r++
                }
                return null
            }(t)
        }

        function ht(t) {
            var e, i = t._a;
            return i && -2 === u(t).overflow && (e = i[Pe] < 0 || i[Pe] > 11 ? Pe : i[Oe] < 1 || i[Oe] > B(i[Me], i[Pe]) ? Oe : i[De] < 0 || i[De] > 24 || 24 === i[De] && (0 !== i[Ce] || 0 !== i[Ee] || 0 !== i[Ae]) ? De : i[Ce] < 0 || i[Ce] > 59 ? Ce : i[Ee] < 0 || i[Ee] > 59 ? Ee : i[Ae] < 0 || i[Ae] > 999 ? Ae : -1, u(t)._overflowDayOfYear && (e < Me || e > Oe) && (e = Oe), u(t)._overflowWeeks && -1 === e && (e = Re), u(t)._overflowWeekday && -1 === e && (e = Le), u(t).overflow = e), t
        }

        function ut(t) {
            var e, i, n, s, r, a, o = t._i,
                l = Je.exec(o) || ti.exec(o);
            if (l) {
                for (u(t).iso = !0, e = 0, i = ii.length; e < i; e++)
                    if (ii[e][1].exec(l[1])) {
                        s = ii[e][0], n = !1 !== ii[e][2];
                        break
                    }
                if (null == s) return void(t._isValid = !1);
                if (l[3]) {
                    for (e = 0, i = ni.length; e < i; e++)
                        if (ni[e][1].exec(l[3])) {
                            r = (l[2] || " ") + ni[e][0];
                            break
                        }
                    if (null == r) return void(t._isValid = !1)
                }
                if (!n && null != r) return void(t._isValid = !1);
                if (l[4]) {
                    if (!ei.exec(l[4])) return void(t._isValid = !1);
                    a = "Z"
                }
                t._f = s + (r || "") + (a || ""), _t(t)
            } else t._isValid = !1
        }

        function ct(t) {
            var e, i, n, s, r, a, o, l = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            };
            if (e = t._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), i = ri.exec(e)) {
                if (n = i[1] ? "ddd" + (5 === i[1].length ? ", " : " ") : "", s = "D MMM " + (i[2].length > 10 ? "YYYY " : "YY "), r = "HH:mm" + (i[4] ? ":ss" : ""), i[1]) {
                    var h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(i[2]).getDay()];
                    if (i[1].substr(0, 3) !== h) return u(t).weekdayMismatch = !0, void(t._isValid = !1)
                }
                switch (i[5].length) {
                    case 2:
                        0 === o ? a = " +0000" : a = ((o = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(i[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + o).replace(/^-?/, "0").match(/..$/)[0] + "00";
                        break;
                    case 4:
                        a = l[i[5]];
                        break;
                    default:
                        a = l[" GMT"]
                }
                i[5] = a, t._i = i.splice(1).join(""), " ZZ", t._f = n + s + r + " ZZ", _t(t), u(t).rfc2822 = !0
            } else t._isValid = !1
        }

        function dt(t, e, i) {
            return null != t ? t : null != e ? e : i
        }

        function ft(e) {
            var i = new Date(t.now());
            return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
        }

        function pt(t) {
            var e, i, n, s, r = [];
            if (!t._d) {
                for (n = ft(t), t._w && null == t._a[Oe] && null == t._a[Pe] && function(t) {
                        var e, i, n, s, r, a, o, l;
                        if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, a = 4, i = dt(e.GG, t._a[Me], Q(yt(), 1, 4).year), n = dt(e.W, 1), ((s = dt(e.E, 1)) < 1 || s > 7) && (l = !0);
                        else {
                            r = t._locale._week.dow, a = t._locale._week.doy;
                            var h = Q(yt(), r, a);
                            i = dt(e.gg, t._a[Me], h.year), n = dt(e.w, h.week), null != e.d ? ((s = e.d) < 0 || s > 6) && (l = !0) : null != e.e ? (s = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : s = r
                        }
                        n < 1 || n > J(i, r, a) ? u(t)._overflowWeeks = !0 : null != l ? u(t)._overflowWeekday = !0 : (o = $(i, n, s, r, a), t._a[Me] = o.year, t._dayOfYear = o.dayOfYear)
                    }(t), null != t._dayOfYear && (s = dt(t._a[Me], n[Me]), (t._dayOfYear > V(s) || 0 === t._dayOfYear) && (u(t)._overflowDayOfYear = !0), i = Z(s, 0, t._dayOfYear), t._a[Pe] = i.getUTCMonth(), t._a[Oe] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = r[e] = n[e];
                for (; e < 7; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[De] && 0 === t._a[Ce] && 0 === t._a[Ee] && 0 === t._a[Ae] && (t._nextDay = !0, t._a[De] = 0), t._d = (t._useUTC ? Z : function(t, e, i, n, s, r, a) {
                    var o = new Date(t, e, i, n, s, r, a);
                    return t < 100 && t >= 0 && isFinite(o.getFullYear()) && o.setFullYear(t), o
                }).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[De] = 24)
            }
        }

        function _t(e) {
            if (e._f !== t.ISO_8601)
                if (e._f !== t.RFC_2822) {
                    e._a = [], u(e).empty = !0;
                    var i, n, s, r, a, o = "" + e._i,
                        l = o.length,
                        h = 0;
                    for (s = I(e._f, e._locale).match(se) || [], i = 0; i < s.length; i++) r = s[i], (n = (o.match(z(r, e)) || [])[0]) && ((a = o.substr(0, o.indexOf(n))).length > 0 && u(e).unusedInput.push(a), o = o.slice(o.indexOf(n) + n.length), h += n.length), oe[r] ? (n ? u(e).empty = !1 : u(e).unusedTokens.push(r), j(r, n, e)) : e._strict && !n && u(e).unusedTokens.push(r);
                    u(e).charsLeftOver = l - h, o.length > 0 && u(e).unusedInput.push(o), e._a[De] <= 12 && !0 === u(e).bigHour && e._a[De] > 0 && (u(e).bigHour = void 0), u(e).parsedDateParts = e._a.slice(0), u(e).meridiem = e._meridiem, e._a[De] = function(t, e, i) {
                        var n;
                        return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
                    }(e._locale, e._a[De], e._meridiem), pt(e), ht(e)
                } else ct(e);
            else ut(e)
        }

        function mt(t) {
            var i = t._i,
                n = t._f;
            return t._locale = t._locale || lt(t._l), null === i || void 0 === n && "" === i ? d({
                nullInput: !0
            }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)), _(i) ? new p(ht(i)) : (r(i) ? t._d = i : e(n) ? function(t) {
                var e, i, n, s, r;
                if (0 === t._f.length) return u(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (s = 0; s < t._f.length; s++) r = 0, e = f({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], _t(e), c(e) && (r += u(e).charsLeftOver, r += 10 * u(e).unusedTokens.length, u(e).score = r, (null == n || r < n) && (n = r, i = e));
                l(t, i || e)
            }(t) : n ? _t(t) : gt(t), c(t) || (t._d = null), t))
        }

        function gt(o) {
            var l = o._i;
            n(l) ? o._d = new Date(t.now()) : r(l) ? o._d = new Date(l.valueOf()) : "string" == typeof l ? function(e) {
                var i = si.exec(e._i);
                null !== i ? e._d = new Date(+i[1]) : (ut(e), !1 === e._isValid && (delete e._isValid, ct(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e))))
            }(o) : e(l) ? (o._a = a(l.slice(0), function(t) {
                return parseInt(t, 10)
            }), pt(o)) : i(l) ? function(t) {
                if (!t._d) {
                    var e = P(t._i);
                    t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }), pt(t)
                }
            }(o) : s(l) ? o._d = new Date(l) : t.createFromInputFallback(o)
        }

        function vt(t, n, s, r, a) {
            var o = {};
            return !0 !== s && !1 !== s || (r = s, s = void 0), (i(t) && function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }(t) || e(t) && 0 === t.length) && (t = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = s, o._i = t, o._f = n, o._strict = r,
                function(t) {
                    var e = new p(ht(mt(t)));
                    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
                }(o)
        }

        function yt(t, e, i, n) {
            return vt(t, e, i, n, !1)
        }

        function wt(t, i) {
            var n, s;
            if (1 === i.length && e(i[0]) && (i = i[0]), !i.length) return yt();
            for (n = i[0], s = 1; s < i.length; ++s) i[s].isValid() && !i[s][t](n) || (n = i[s]);
            return n
        }

        function xt(t) {
            var e = P(t),
                i = e.year || 0,
                n = e.quarter || 0,
                s = e.month || 0,
                r = e.week || 0,
                a = e.day || 0,
                o = e.hour || 0,
                l = e.minute || 0,
                h = e.second || 0,
                u = e.millisecond || 0;
            this._isValid = function(t) {
                for (var e in t)
                    if (-1 === li.indexOf(e) || null != t[e] && isNaN(t[e])) return !1;
                for (var i = !1, n = 0; n < li.length; ++n)
                    if (t[li[n]]) {
                        if (i) return !1;
                        parseFloat(t[li[n]]) !== g(t[li[n]]) && (i = !0)
                    }
                return !0
            }(e), this._milliseconds = +u + 1e3 * h + 6e4 * l + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = lt(), this._bubble()
        }

        function Tt(t) {
            return t instanceof xt
        }

        function bt(t) {
            return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
        }

        function St(t, e) {
            R(t, 0, 0, function() {
                var t = this.utcOffset(),
                    i = "+";
                return t < 0 && (t = -t, i = "-"), i + A(~~(t / 60), 2) + e + A(~~t % 60, 2)
            })
        }

        function kt(t, e) {
            var i = (e || "").match(t);
            if (null === i) return null;
            var n = ((i[i.length - 1] || []) + "").match(hi) || ["-", 0, 0],
                s = 60 * n[1] + g(n[2]);
            return 0 === s ? 0 : "+" === n[0] ? s : -s
        }

        function Mt(e, i) {
            var n, s;
            return i._isUTC ? (n = i.clone(), s = (_(e) || r(e) ? e.valueOf() : yt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), t.updateOffset(n, !1), n) : yt(e).local()
        }

        function Pt(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }

        function Ot() {
            return !!this.isValid() && this._isUTC && 0 === this._offset
        }

        function Dt(t, e) {
            var i, n, r, a = t,
                l = null;
            return Tt(t) ? a = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : s(t) ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (l = ui.exec(t)) ? (i = "-" === l[1] ? -1 : 1, a = {
                y: 0,
                d: g(l[Oe]) * i,
                h: g(l[De]) * i,
                m: g(l[Ce]) * i,
                s: g(l[Ee]) * i,
                ms: g(bt(1e3 * l[Ae])) * i
            }) : (l = ci.exec(t)) ? (i = "-" === l[1] ? -1 : 1, a = {
                y: Ct(l[2], i),
                M: Ct(l[3], i),
                w: Ct(l[4], i),
                d: Ct(l[5], i),
                h: Ct(l[6], i),
                m: Ct(l[7], i),
                s: Ct(l[8], i)
            }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (r = function(t, e) {
                var i;
                return t.isValid() && e.isValid() ? (e = Mt(e, t), t.isBefore(e) ? i = Et(t, e) : ((i = Et(e, t)).milliseconds = -i.milliseconds, i.months = -i.months), i) : {
                    milliseconds: 0,
                    months: 0
                }
            }(yt(a.from), yt(a.to)), (a = {}).ms = r.milliseconds, a.M = r.months), n = new xt(a), Tt(t) && o(t, "_locale") && (n._locale = t._locale), n
        }

        function Ct(t, e) {
            var i = t && parseFloat(t.replace(",", "."));
            return (isNaN(i) ? 0 : i) * e
        }

        function Et(t, e) {
            var i = {
                milliseconds: 0,
                months: 0
            };
            return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
        }

        function At(t, e) {
            return function(i, n) {
                var s;
                return null === n || isNaN(+n) || (x(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = i, i = n, n = s), Rt(this, Dt(i = "string" == typeof i ? +i : i, n), t), this
            }
        }

        function Rt(e, i, n, s) {
            var r = i._milliseconds,
                a = bt(i._days),
                o = bt(i._months);
            e.isValid() && (s = null == s || s, r && e._d.setTime(e._d.valueOf() + r * n), a && E(e, "Date", C(e, "Date") + a * n), o && H(e, C(e, "Month") + o * n), s && t.updateOffset(e, a || o))
        }

        function Lt(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (null != (e = lt(t)) && (this._locale = e), this)
        }

        function Yt() {
            return this._locale
        }

        function It(t, e) {
            R(0, [t, t.length], 0, e)
        }

        function Ft(t, e, i, n, s) {
            var r;
            return null == t ? Q(this, n, s).year : (e > (r = J(t, n, s)) && (e = r), function(t, e, i, n, s) {
                var r = $(t, e, i, n, s),
                    a = Z(r.year, 0, r.dayOfYear);
                return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
            }.call(this, t, e, i, n, s))
        }

        function zt(t, e) {
            e[Ae] = g(1e3 * ("0." + t))
        }

        function Nt(t) {
            return t
        }

        function qt(t, e, i, n) {
            var s = lt(),
                r = h().set(n, e);
            return s[i](r, t)
        }

        function Wt(t, e, i) {
            if (s(t) && (e = t, t = void 0), t = t || "", null != e) return qt(t, e, i, "month");
            var n, r = [];
            for (n = 0; n < 12; n++) r[n] = qt(t, n, i, "month");
            return r
        }

        function jt(t, e, i, n) {
            "boolean" == typeof t ? (s(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, s(e) && (i = e, e = void 0), e = e || "");
            var r = lt(),
                a = t ? r._week.dow : 0;
            if (null != i) return qt(e, (i + a) % 7, n, "day");
            var o, l = [];
            for (o = 0; o < 7; o++) l[o] = qt(e, (o + a) % 7, n, "day");
            return l
        }

        function Bt(t, e, i, n) {
            var s = Dt(e, i);
            return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
        }

        function Ht(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t)
        }

        function Ut(t) {
            return 4800 * t / 146097
        }

        function Xt(t) {
            return 146097 * t / 4800
        }

        function Vt(t) {
            return function() {
                return this.as(t)
            }
        }

        function Gt(t) {
            return function() {
                return this.isValid() ? this._data[t] : NaN
            }
        }

        function Zt() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t, e, i = qi(this._milliseconds) / 1e3,
                n = qi(this._days),
                s = qi(this._months);
            t = m(i / 60), e = m(t / 60), i %= 60, t %= 60;
            var r = m(s / 12),
                a = s %= 12,
                o = n,
                l = e,
                h = t,
                u = i,
                c = this.asSeconds();
            return c ? (c < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (o ? o + "D" : "") + (l || h || u ? "T" : "") + (l ? l + "H" : "") + (h ? h + "M" : "") + (u ? u + "S" : "") : "P0D"
        }
        var Kt, $t = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                    if (n in e && t.call(this, e[n], n, e)) return !0;
                return !1
            },
            Qt = t.momentProperties = [],
            Jt = !1,
            te = {};
        t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
        var ee = Object.keys ? Object.keys : function(t) {
                var e, i = [];
                for (e in t) o(t, e) && i.push(e);
                return i
            },
            ie = {},
            ne = {},
            se = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            re = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            ae = {},
            oe = {},
            le = /\d/,
            he = /\d\d/,
            ue = /\d{3}/,
            ce = /\d{4}/,
            de = /[+-]?\d{6}/,
            fe = /\d\d?/,
            pe = /\d\d\d\d?/,
            _e = /\d\d\d\d\d\d?/,
            me = /\d{1,3}/,
            ge = /\d{1,4}/,
            ve = /[+-]?\d{1,6}/,
            ye = /\d+/,
            we = /[+-]?\d+/,
            xe = /Z|[+-]\d\d:?\d\d/gi,
            Te = /Z|[+-]\d\d(?::?\d\d)?/gi,
            be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Se = {},
            ke = {},
            Me = 0,
            Pe = 1,
            Oe = 2,
            De = 3,
            Ce = 4,
            Ee = 5,
            Ae = 6,
            Re = 7,
            Le = 8,
            Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            };
        R("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), R("MMM", 0, 0, function(t) {
            return this.localeData().monthsShort(this, t)
        }), R("MMMM", 0, 0, function(t) {
            return this.localeData().months(this, t)
        }), k("month", "M"), O("month", 8), F("M", fe), F("MM", fe, he), F("MMM", function(t, e) {
            return e.monthsShortRegex(t)
        }), F("MMMM", function(t, e) {
            return e.monthsRegex(t)
        }), q(["M", "MM"], function(t, e) {
            e[Pe] = g(t) - 1
        }), q(["MMM", "MMMM"], function(t, e, i, n) {
            var s = i._locale.monthsParse(t, n, i._strict);
            null != s ? e[Pe] = s : u(i).invalidMonth = t
        });
        var Ie = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Fe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ze = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Ne = be,
            qe = be;
        R("Y", 0, 0, function() {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t
        }), R(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), k("year", "y"), O("year", 1), F("Y", we), F("YY", fe, he), F("YYYY", ge, ce), F("YYYYY", ve, de), F("YYYYYY", ve, de), q(["YYYYY", "YYYYYY"], Me), q("YYYY", function(e, i) {
            i[Me] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e)
        }), q("YY", function(e, i) {
            i[Me] = t.parseTwoDigitYear(e)
        }), q("Y", function(t, e) {
            e[Me] = parseInt(t, 10)
        }), t.parseTwoDigitYear = function(t) {
            return g(t) + (g(t) > 68 ? 1900 : 2e3)
        };
        var We = D("FullYear", !0);
        R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), k("week", "w"), k("isoWeek", "W"), O("week", 5), O("isoWeek", 5), F("w", fe), F("ww", fe, he), F("W", fe), F("WW", fe, he), W(["w", "ww", "W", "WW"], function(t, e, i, n) {
            e[n.substr(0, 1)] = g(t)
        });
        R("d", 0, "do", "day"), R("dd", 0, 0, function(t) {
            return this.localeData().weekdaysMin(this, t)
        }), R("ddd", 0, 0, function(t) {
            return this.localeData().weekdaysShort(this, t)
        }), R("dddd", 0, 0, function(t) {
            return this.localeData().weekdays(this, t)
        }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), k("day", "d"), k("weekday", "e"), k("isoWeekday", "E"), O("day", 11), O("weekday", 11), O("isoWeekday", 11), F("d", fe), F("e", fe), F("E", fe), F("dd", function(t, e) {
            return e.weekdaysMinRegex(t)
        }), F("ddd", function(t, e) {
            return e.weekdaysShortRegex(t)
        }), F("dddd", function(t, e) {
            return e.weekdaysRegex(t)
        }), W(["dd", "ddd", "dddd"], function(t, e, i, n) {
            var s = i._locale.weekdaysParse(t, n, i._strict);
            null != s ? e.d = s : u(i).invalidWeekday = t
        }), W(["d", "e", "E"], function(t, e, i, n) {
            e[n] = g(t)
        });
        var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            He = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Ue = be,
            Xe = be,
            Ve = be;
        R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, et), R("k", ["kk", 2], 0, function() {
            return this.hours() || 24
        }), R("hmm", 0, 0, function() {
            return "" + et.apply(this) + A(this.minutes(), 2)
        }), R("hmmss", 0, 0, function() {
            return "" + et.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
        }), R("Hmm", 0, 0, function() {
            return "" + this.hours() + A(this.minutes(), 2)
        }), R("Hmmss", 0, 0, function() {
            return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
        }), it("a", !0), it("A", !1), k("hour", "h"), O("hour", 13), F("a", nt), F("A", nt), F("H", fe), F("h", fe), F("k", fe), F("HH", fe, he), F("hh", fe, he), F("kk", fe, he), F("hmm", pe), F("hmmss", _e), F("Hmm", pe), F("Hmmss", _e), q(["H", "HH"], De), q(["k", "kk"], function(t, e, i) {
            var n = g(t);
            e[De] = 24 === n ? 0 : n
        }), q(["a", "A"], function(t, e, i) {
            i._isPm = i._locale.isPM(t), i._meridiem = t
        }), q(["h", "hh"], function(t, e, i) {
            e[De] = g(t), u(i).bigHour = !0
        }), q("hmm", function(t, e, i) {
            var n = t.length - 2;
            e[De] = g(t.substr(0, n)), e[Ce] = g(t.substr(n)), u(i).bigHour = !0
        }), q("hmmss", function(t, e, i) {
            var n = t.length - 4,
                s = t.length - 2;
            e[De] = g(t.substr(0, n)), e[Ce] = g(t.substr(n, 2)), e[Ee] = g(t.substr(s)), u(i).bigHour = !0
        }), q("Hmm", function(t, e, i) {
            var n = t.length - 2;
            e[De] = g(t.substr(0, n)), e[Ce] = g(t.substr(n))
        }), q("Hmmss", function(t, e, i) {
            var n = t.length - 4,
                s = t.length - 2;
            e[De] = g(t.substr(0, n)), e[Ce] = g(t.substr(n, 2)), e[Ee] = g(t.substr(s))
        });
        var Ge, Ze = D("Hours", !0),
            Ke = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: Fe,
                monthsShort: ze,
                week: {
                    dow: 0,
                    doy: 6
                },
                weekdays: je,
                weekdaysMin: He,
                weekdaysShort: Be,
                meridiemParse: /[ap]\.?m?\.?/i
            },
            $e = {},
            Qe = {},
            Je = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ti = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ei = /Z|[+-]\d\d(?::?\d\d)?/,
            ii = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ni = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            si = /^\/?Date\((\-?\d+)/i,
            ri = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
        t.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
        var ai = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = yt.apply(null, arguments);
                return this.isValid() && t.isValid() ? t < this ? this : t : d()
            }),
            oi = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = yt.apply(null, arguments);
                return this.isValid() && t.isValid() ? t > this ? this : t : d()
            }),
            li = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        St("Z", ":"), St("ZZ", ""), F("Z", Te), F("ZZ", Te), q(["Z", "ZZ"], function(t, e, i) {
            i._useUTC = !0, i._tzm = kt(Te, t)
        });
        var hi = /([\+\-]|\d\d)/gi;
        t.updateOffset = function() {};
        var ui = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            ci = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        Dt.fn = xt.prototype, Dt.invalid = function() {
            return Dt(NaN)
        };
        var di = At(1, "add"),
            fi = At(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var pi = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });
        R(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), R(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), It("gggg", "weekYear"), It("ggggg", "weekYear"), It("GGGG", "isoWeekYear"), It("GGGGG", "isoWeekYear"), k("weekYear", "gg"), k("isoWeekYear", "GG"), O("weekYear", 1), O("isoWeekYear", 1), F("G", we), F("g", we), F("GG", fe, he), F("gg", fe, he), F("GGGG", ge, ce), F("gggg", ge, ce), F("GGGGG", ve, de), F("ggggg", ve, de), W(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
            e[n.substr(0, 2)] = g(t)
        }), W(["gg", "GG"], function(e, i, n, s) {
            i[s] = t.parseTwoDigitYear(e)
        }), R("Q", 0, "Qo", "quarter"), k("quarter", "Q"), O("quarter", 7), F("Q", le), q("Q", function(t, e) {
            e[Pe] = 3 * (g(t) - 1)
        }), R("D", ["DD", 2], "Do", "date"), k("date", "D"), O("date", 9), F("D", fe), F("DD", fe, he), F("Do", function(t, e) {
            return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
        }), q(["D", "DD"], Oe), q("Do", function(t, e) {
            e[Oe] = g(t.match(fe)[0])
        });
        var _i = D("Date", !0);
        R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), k("dayOfYear", "DDD"), O("dayOfYear", 4), F("DDD", me), F("DDDD", ue), q(["DDD", "DDDD"], function(t, e, i) {
            i._dayOfYear = g(t)
        }), R("m", ["mm", 2], 0, "minute"), k("minute", "m"), O("minute", 14), F("m", fe), F("mm", fe, he), q(["m", "mm"], Ce);
        var mi = D("Minutes", !1);
        R("s", ["ss", 2], 0, "second"), k("second", "s"), O("second", 15), F("s", fe), F("ss", fe, he), q(["s", "ss"], Ee);
        var gi, vi = D("Seconds", !1);
        for (R("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), R(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), R(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), R(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), R(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), R(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), R(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), k("millisecond", "ms"), O("millisecond", 16), F("S", me, le), F("SS", me, he), F("SSS", me, ue), gi = "SSSS"; gi.length <= 9; gi += "S") F(gi, ye);
        for (gi = "S"; gi.length <= 9; gi += "S") q(gi, zt);
        var yi = D("Milliseconds", !1);
        R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
        var wi = p.prototype;
        wi.add = di, wi.calendar = function(e, i) {
            var n = e || yt(),
                s = Mt(n, this).startOf("day"),
                r = t.calendarFormat(this, s) || "sameElse",
                a = i && (T(i[r]) ? i[r].call(this, n) : i[r]);
            return this.format(a || this.localeData().calendar(r, this, yt(n)))
        }, wi.clone = function() {
            return new p(this)
        }, wi.diff = function(t, e, i) {
            var n, s, r, a;
            return this.isValid() && (n = Mt(t, this)).isValid() ? (s = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (e = M(e)) || "month" === e || "quarter" === e ? (a = function(t, e) {
                var i, n, s = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    r = t.clone().add(s, "months");
                return e - r < 0 ? (i = t.clone().add(s - 1, "months"), n = (e - r) / (r - i)) : (i = t.clone().add(s + 1, "months"), n = (e - r) / (i - r)), -(s + n) || 0
            }(this, n), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (r = this - n, a = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - s) / 864e5 : "week" === e ? (r - s) / 6048e5 : r), i ? a : m(a)) : NaN
        }, wi.endOf = function(t) {
            return void 0 === (t = M(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
        }, wi.format = function(e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var i = Y(this, e);
            return this.localeData().postformat(i)
        }, wi.from = function(t, e) {
            return this.isValid() && (_(t) && t.isValid() || yt(t).isValid()) ? Dt({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, wi.fromNow = function(t) {
            return this.from(yt(), t)
        }, wi.to = function(t, e) {
            return this.isValid() && (_(t) && t.isValid() || yt(t).isValid()) ? Dt({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }, wi.toNow = function(t) {
            return this.to(yt(), t)
        }, wi.get = function(t) {
            return T(this[t = M(t)]) ? this[t]() : this
        }, wi.invalidAt = function() {
            return u(this).overflow
        }, wi.isAfter = function(t, e) {
            var i = _(t) ? t : yt(t);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = M(n(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
        }, wi.isBefore = function(t, e) {
            var i = _(t) ? t : yt(t);
            return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = M(n(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
        }, wi.isBetween = function(t, e, i, n) {
            return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
        }, wi.isSame = function(t, e) {
            var i, n = _(t) ? t : yt(t);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = M(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
        }, wi.isSameOrAfter = function(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
        }, wi.isSameOrBefore = function(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
        }, wi.isValid = function() {
            return c(this)
        }, wi.lang = pi, wi.locale = Lt, wi.localeData = Yt, wi.max = oi, wi.min = ai, wi.parsingFlags = function() {
            return l({}, u(this))
        }, wi.set = function(t, e) {
            if ("object" == typeof t)
                for (var i = function(t) {
                        var e = [];
                        for (var i in t) e.push({
                            unit: i,
                            priority: ne[i]
                        });
                        return e.sort(function(t, e) {
                            return t.priority - e.priority
                        }), e
                    }(t = P(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
            else if (T(this[t = M(t)])) return this[t](e);
            return this
        }, wi.startOf = function(t) {
            switch (t = M(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }, wi.subtract = fi, wi.toArray = function() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
        }, wi.toObject = function() {
            var t = this;
            return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds()
            }
        }, wi.toDate = function() {
            return new Date(this.valueOf())
        }, wi.toISOString = function() {
            if (!this.isValid()) return null;
            var t = this.clone().utc();
            return t.year() < 0 || t.year() > 9999 ? Y(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : T(Date.prototype.toISOString) ? this.toDate().toISOString() : Y(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }, wi.inspect = function() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
                e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
            var i = "[" + t + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                s = e + '[")]';
            return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
        }, wi.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
        }, wi.toString = function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, wi.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
        }, wi.valueOf = function() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, wi.creationData = function() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }, wi.year = We, wi.isLeapYear = function() {
            return G(this.year())
        }, wi.weekYear = function(t) {
            return Ft.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, wi.isoWeekYear = function(t) {
            return Ft.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, wi.quarter = wi.quarters = function(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }, wi.month = U, wi.daysInMonth = function() {
            return B(this.year(), this.month())
        }, wi.week = wi.weeks = function(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }, wi.isoWeek = wi.isoWeeks = function(t) {
            var e = Q(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        }, wi.weeksInYear = function() {
            var t = this.localeData()._week;
            return J(this.year(), t.dow, t.doy)
        }, wi.isoWeeksInYear = function() {
            return J(this.year(), 1, 4)
        }, wi.date = _i, wi.day = wi.days = function(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = function(t, e) {
                return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
            }(t, this.localeData()), this.add(t - e, "d")) : e
        }, wi.weekday = function(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }, wi.isoWeekday = function(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                var e = function(t, e) {
                    return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                }(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7
        }, wi.dayOfYear = function(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }, wi.hour = wi.hours = Ze, wi.minute = wi.minutes = mi, wi.second = wi.seconds = vi, wi.millisecond = wi.milliseconds = yi, wi.utcOffset = function(e, i, n) {
            var s, r = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                if ("string" == typeof e) {
                    if (null === (e = kt(Te, e))) return this
                } else Math.abs(e) < 16 && !n && (e *= 60);
                return !this._isUTC && i && (s = Pt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), r !== e && (!i || this._changeInProgress ? Rt(this, Dt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? r : Pt(this)
        }, wi.utc = function(t) {
            return this.utcOffset(0, t)
        }, wi.local = function(t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Pt(this), "m")), this
        }, wi.parseZone = function() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = kt(xe, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }, wi.hasAlignedHourOffset = function(t) {
            return !!this.isValid() && (t = t ? yt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
        }, wi.isDST = function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, wi.isLocal = function() {
            return !!this.isValid() && !this._isUTC
        }, wi.isUtcOffset = function() {
            return !!this.isValid() && this._isUTC
        }, wi.isUtc = Ot, wi.isUTC = Ot, wi.zoneAbbr = function() {
            return this._isUTC ? "UTC" : ""
        }, wi.zoneName = function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, wi.dates = w("dates accessor is deprecated. Use date instead.", _i), wi.months = w("months accessor is deprecated. Use month instead", U), wi.years = w("years accessor is deprecated. Use year instead", We), wi.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }), wi.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!n(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (f(t, this), (t = mt(t))._a) {
                var e = t._isUTC ? h(t._a) : yt(t._a);
                this._isDSTShifted = this.isValid() && v(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        });
        var xi = S.prototype;
        xi.calendar = function(t, e, i) {
            var n = this._calendar[t] || this._calendar.sameElse;
            return T(n) ? n.call(e, i) : n
        }, xi.longDateFormat = function(t) {
            var e = this._longDateFormat[t],
                i = this._longDateFormat[t.toUpperCase()];
            return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t])
        }, xi.invalidDate = function() {
            return this._invalidDate
        }, xi.ordinal = function(t) {
            return this._ordinal.replace("%d", t)
        }, xi.preparse = Nt, xi.postformat = Nt, xi.relativeTime = function(t, e, i, n) {
            var s = this._relativeTime[i];
            return T(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
        }, xi.pastFuture = function(t, e) {
            var i = this._relativeTime[t > 0 ? "future" : "past"];
            return T(i) ? i(e) : i.replace(/%s/i, e)
        }, xi.set = function(t) {
            var e, i;
            for (i in t) T(e = t[i]) ? this[i] = e : this["_" + i] = e;
            this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, xi.months = function(t, i) {
            return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ie).test(i) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
        }, xi.monthsShort = function(t, i) {
            return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ie.test(i) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, xi.monthsParse = function(t, e, i) {
            var n, s, r;
            if (this._monthsParseExact) return function(t, e, i) {
                var n, s, r, a = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = h([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                return i ? "MMM" === e ? -1 !== (s = Ye.call(this._shortMonthsParse, a)) ? s : null : -1 !== (s = Ye.call(this._longMonthsParse, a)) ? s : null : "MMM" === e ? -1 !== (s = Ye.call(this._shortMonthsParse, a)) ? s : -1 !== (s = Ye.call(this._longMonthsParse, a)) ? s : null : -1 !== (s = Ye.call(this._longMonthsParse, a)) ? s : -1 !== (s = Ye.call(this._shortMonthsParse, a)) ? s : null
            }.call(this, t, e, i);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                if (s = h([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
                if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
                if (!i && this._monthsParse[n].test(t)) return n
            }
        }, xi.monthsRegex = function(t) {
            return this._monthsParseExact ? (o(this, "_monthsRegex") || X.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = qe), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }, xi.monthsShortRegex = function(t) {
            return this._monthsParseExact ? (o(this, "_monthsRegex") || X.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = Ne), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, xi.week = function(t) {
            return Q(t, this._week.dow, this._week.doy).week
        }, xi.firstDayOfYear = function() {
            return this._week.doy
        }, xi.firstDayOfWeek = function() {
            return this._week.dow
        }, xi.weekdays = function(t, i) {
            return t ? e(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(i) ? "format" : "standalone"][t.day()] : e(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }, xi.weekdaysMin = function(t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
        }, xi.weekdaysShort = function(t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
        }, xi.weekdaysParse = function(t, e, i) {
            var n, s, r;
            if (this._weekdaysParseExact) return function(t, e, i) {
                var n, s, r, a = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = h([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                return i ? "dddd" === e ? -1 !== (s = Ye.call(this._weekdaysParse, a)) ? s : null : "ddd" === e ? -1 !== (s = Ye.call(this._shortWeekdaysParse, a)) ? s : null : -1 !== (s = Ye.call(this._minWeekdaysParse, a)) ? s : null : "dddd" === e ? -1 !== (s = Ye.call(this._weekdaysParse, a)) ? s : -1 !== (s = Ye.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = Ye.call(this._minWeekdaysParse, a)) ? s : null : "ddd" === e ? -1 !== (s = Ye.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = Ye.call(this._weekdaysParse, a)) ? s : -1 !== (s = Ye.call(this._minWeekdaysParse, a)) ? s : null : -1 !== (s = Ye.call(this._minWeekdaysParse, a)) ? s : -1 !== (s = Ye.call(this._weekdaysParse, a)) ? s : -1 !== (s = Ye.call(this._shortWeekdaysParse, a)) ? s : null
            }.call(this, t, e, i);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                if (s = h([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
                if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
                if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
                if (!i && this._weekdaysParse[n].test(t)) return n
            }
        }, xi.weekdaysRegex = function(t) {
            return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = Ue), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, xi.weekdaysShortRegex = function(t) {
            return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, xi.weekdaysMinRegex = function(t) {
            return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || tt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ve), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, xi.isPM = function(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }, xi.meridiem = function(t, e, i) {
            return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        }, at("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(t) {
                var e = t % 10;
                return t + (1 === g(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
            }
        }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", at), t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", lt);
        var Ti = Math.abs,
            bi = Vt("ms"),
            Si = Vt("s"),
            ki = Vt("m"),
            Mi = Vt("h"),
            Pi = Vt("d"),
            Oi = Vt("w"),
            Di = Vt("M"),
            Ci = Vt("y"),
            Ei = Gt("milliseconds"),
            Ai = Gt("seconds"),
            Ri = Gt("minutes"),
            Li = Gt("hours"),
            Yi = Gt("days"),
            Ii = Gt("months"),
            Fi = Gt("years"),
            zi = Math.round,
            Ni = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            qi = Math.abs,
            Wi = xt.prototype;
        return Wi.isValid = function() {
                return this._isValid
            }, Wi.abs = function() {
                var t = this._data;
                return this._milliseconds = Ti(this._milliseconds), this._days = Ti(this._days), this._months = Ti(this._months), t.milliseconds = Ti(t.milliseconds), t.seconds = Ti(t.seconds), t.minutes = Ti(t.minutes), t.hours = Ti(t.hours), t.months = Ti(t.months), t.years = Ti(t.years), this
            }, Wi.add = function(t, e) {
                return Bt(this, t, e, 1)
            }, Wi.subtract = function(t, e) {
                return Bt(this, t, e, -1)
            }, Wi.as = function(t) {
                if (!this.isValid()) return NaN;
                var e, i, n = this._milliseconds;
                if ("month" === (t = M(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + Ut(e), "month" === t ? i : i / 12;
                switch (e = this._days + Math.round(Xt(this._months)), t) {
                    case "week":
                        return e / 7 + n / 6048e5;
                    case "day":
                        return e + n / 864e5;
                    case "hour":
                        return 24 * e + n / 36e5;
                    case "minute":
                        return 1440 * e + n / 6e4;
                    case "second":
                        return 86400 * e + n / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + n;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }, Wi.asMilliseconds = bi, Wi.asSeconds = Si, Wi.asMinutes = ki, Wi.asHours = Mi, Wi.asDays = Pi, Wi.asWeeks = Oi, Wi.asMonths = Di, Wi.asYears = Ci, Wi.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN
            }, Wi._bubble = function() {
                var t, e, i, n, s, r = this._milliseconds,
                    a = this._days,
                    o = this._months,
                    l = this._data;
                return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * Ht(Xt(o) + a), a = 0, o = 0), l.milliseconds = r % 1e3, t = m(r / 1e3), l.seconds = t % 60, e = m(t / 60), l.minutes = e % 60, i = m(e / 60), l.hours = i % 24, a += m(i / 24), o += s = m(Ut(a)), a -= Ht(Xt(s)), n = m(o / 12), o %= 12, l.days = a, l.months = o, l.years = n, this
            }, Wi.get = function(t) {
                return t = M(t), this.isValid() ? this[t + "s"]() : NaN
            }, Wi.milliseconds = Ei, Wi.seconds = Ai, Wi.minutes = Ri, Wi.hours = Li, Wi.days = Yi, Wi.weeks = function() {
                return m(this.days() / 7)
            }, Wi.months = Ii, Wi.years = Fi, Wi.humanize = function(t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e = this.localeData(),
                    i = function(t, e, i) {
                        var n = Dt(t).abs(),
                            s = zi(n.as("s")),
                            r = zi(n.as("m")),
                            a = zi(n.as("h")),
                            o = zi(n.as("d")),
                            l = zi(n.as("M")),
                            h = zi(n.as("y")),
                            u = s <= Ni.ss && ["s", s] || s < Ni.s && ["ss", s] || r <= 1 && ["m"] || r < Ni.m && ["mm", r] || a <= 1 && ["h"] || a < Ni.h && ["hh", a] || o <= 1 && ["d"] || o < Ni.d && ["dd", o] || l <= 1 && ["M"] || l < Ni.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h];
                        return u[2] = e, u[3] = +t > 0, u[4] = i,
                            function(t, e, i, n, s) {
                                return s.relativeTime(e || 1, !!i, t, n)
                            }.apply(null, u)
                    }(this, !t, e);
                return t && (i = e.pastFuture(+this, i)), e.postformat(i)
            }, Wi.toISOString = Zt, Wi.toString = Zt, Wi.toJSON = Zt, Wi.locale = Lt, Wi.localeData = Yt, Wi.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Zt), Wi.lang = pi, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), F("x", we), F("X", /[+-]?\d+(\.\d{1,3})?/), q("X", function(t, e, i) {
                i._d = new Date(1e3 * parseFloat(t, 10))
            }), q("x", function(t, e, i) {
                i._d = new Date(g(t))
            }), t.version = "2.18.1",
            function(t) {
                Kt = t
            }(yt), t.fn = wi, t.min = function() {
                return wt("isBefore", [].slice.call(arguments, 0))
            }, t.max = function() {
                return wt("isAfter", [].slice.call(arguments, 0))
            }, t.now = function() {
                return Date.now ? Date.now() : +new Date
            }, t.utc = h, t.unix = function(t) {
                return yt(1e3 * t)
            }, t.months = function(t, e) {
                return Wt(t, e, "months")
            }, t.isDate = r, t.locale = at, t.invalid = d, t.duration = Dt, t.isMoment = _, t.weekdays = function(t, e, i) {
                return jt(t, e, i, "weekdays")
            }, t.parseZone = function() {
                return yt.apply(null, arguments).parseZone()
            }, t.localeData = lt, t.isDuration = Tt, t.monthsShort = function(t, e) {
                return Wt(t, e, "monthsShort")
            }, t.weekdaysMin = function(t, e, i) {
                return jt(t, e, i, "weekdaysMin")
            }, t.defineLocale = ot, t.updateLocale = function(t, e) {
                if (null != e) {
                    var i, n = Ke;
                    null != $e[t] && (n = $e[t]._config), (i = new S(e = b(n, e))).parentLocale = $e[t], $e[t] = i, at(t)
                } else null != $e[t] && (null != $e[t].parentLocale ? $e[t] = $e[t].parentLocale : null != $e[t] && delete $e[t]);
                return $e[t]
            }, t.locales = function() {
                return ee($e)
            }, t.weekdaysShort = function(t, e, i) {
                return jt(t, e, i, "weekdaysShort")
            }, t.normalizeUnits = M, t.relativeTimeRounding = function(t) {
                return void 0 === t ? zi : "function" == typeof t && (zi = t, !0)
            }, t.relativeTimeThreshold = function(t, e) {
                return void 0 !== Ni[t] && (void 0 === e ? Ni[t] : (Ni[t] = e, "s" === t && (Ni.ss = e - 1), !0))
            }, t.calendarFormat = function(t, e) {
                var i = t.diff(e, "days", !0);
                return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
            }, t.prototype = wi, t
    }),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Barba", [], e) : "object" == typeof exports ? exports.Barba = e() : t.Barba = e()
    }(this, function() {
        return function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var s = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "http://localhost:8080/dist", e(0)
        }([function(t, e, i) {
            "function" != typeof Promise && (window.Promise = i(1));
            var n = {
                version: "1.0.0",
                BaseTransition: i(4),
                BaseView: i(6),
                BaseCache: i(8),
                Dispatcher: i(7),
                HistoryManager: i(9),
                Pjax: i(10),
                Prefetch: i(13),
                Utils: i(5)
            };
            t.exports = n
        }, function(t, e, i) {
            (function(e) {
                ! function(i) {
                    function n() {}

                    function s(t) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this)
                    }

                    function r(t, e) {
                        for (; 3 === t._state;) t = t._value;
                        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void d(function() {
                            var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                            if (null !== i) {
                                var n;
                                try {
                                    n = i(t._value)
                                } catch (t) {
                                    return void o(e.promise, t)
                                }
                                a(e.promise, n)
                            } else(1 === t._state ? a : o)(e.promise, t._value)
                        }))
                    }

                    function a(t, e) {
                        try {
                            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var i = e.then;
                                if (e instanceof s) return t._state = 3, t._value = e, void l(t);
                                if ("function" == typeof i) return void u(function(t, e) {
                                    return function() {
                                        t.apply(e, arguments)
                                    }
                                }(i, e), t)
                            }
                            t._state = 1, t._value = e, l(t)
                        } catch (e) {
                            o(t, e)
                        }
                    }

                    function o(t, e) {
                        t._state = 2, t._value = e, l(t)
                    }

                    function l(t) {
                        2 === t._state && 0 === t._deferreds.length && d(function() {
                            t._handled || f(t._value)
                        });
                        for (var e = 0, i = t._deferreds.length; e < i; e++) r(t, t._deferreds[e]);
                        t._deferreds = null
                    }

                    function h(t, e, i) {
                        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
                    }

                    function u(t, e) {
                        var i = !1;
                        try {
                            t(function(t) {
                                i || (i = !0, a(e, t))
                            }, function(t) {
                                i || (i = !0, o(e, t))
                            })
                        } catch (t) {
                            if (i) return;
                            i = !0, o(e, t)
                        }
                    }
                    var c = setTimeout,
                        d = "function" == typeof e && e || function(t) {
                            c(t, 0)
                        },
                        f = function(t) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                        };
                    s.prototype.catch = function(t) {
                        return this.then(null, t)
                    }, s.prototype.then = function(t, e) {
                        var i = new this.constructor(n);
                        return r(this, new h(t, e, i)), i
                    }, s.all = function(t) {
                        var e = Array.prototype.slice.call(t);
                        return new s(function(t, i) {
                            function n(r, a) {
                                try {
                                    if (a && ("object" == typeof a || "function" == typeof a)) {
                                        var o = a.then;
                                        if ("function" == typeof o) return void o.call(a, function(t) {
                                            n(r, t)
                                        }, i)
                                    }
                                    e[r] = a, 0 == --s && t(e)
                                } catch (t) {
                                    i(t)
                                }
                            }
                            if (0 === e.length) return t([]);
                            for (var s = e.length, r = 0; r < e.length; r++) n(r, e[r])
                        })
                    }, s.resolve = function(t) {
                        return t && "object" == typeof t && t.constructor === s ? t : new s(function(e) {
                            e(t)
                        })
                    }, s.reject = function(t) {
                        return new s(function(e, i) {
                            i(t)
                        })
                    }, s.race = function(t) {
                        return new s(function(e, i) {
                            for (var n = 0, s = t.length; n < s; n++) t[n].then(e, i)
                        })
                    }, s._setImmediateFn = function(t) {
                        d = t
                    }, s._setUnhandledRejectionFn = function(t) {
                        f = t
                    }, void 0 !== t && t.exports ? t.exports = s : i.Promise || (i.Promise = s)
                }(this)
            }).call(e, i(2).setImmediate)
        }, function(t, e, i) {
            (function(t, n) {
                function s(t, e) {
                    this._id = t, this._clearFn = e
                }
                var r = i(3).nextTick,
                    a = Function.prototype.apply,
                    o = Array.prototype.slice,
                    l = {},
                    h = 0;
                e.setTimeout = function() {
                    return new s(a.call(setTimeout, window, arguments), clearTimeout)
                }, e.setInterval = function() {
                    return new s(a.call(setInterval, window, arguments), clearInterval)
                }, e.clearTimeout = e.clearInterval = function(t) {
                    t.close()
                }, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                }, e.enroll = function(t, e) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                }, e.unenroll = function(t) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                }, e._unrefActive = e.active = function(t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }, e.setImmediate = "function" == typeof t ? t : function(t) {
                    var i = h++,
                        n = !(arguments.length < 2) && o.call(arguments, 1);
                    return l[i] = !0, r(function() {
                        l[i] && (n ? t.apply(null, n) : t.call(null), e.clearImmediate(i))
                    }), i
                }, e.clearImmediate = "function" == typeof n ? n : function(t) {
                    delete l[t]
                }
            }).call(e, i(2).setImmediate, i(2).clearImmediate)
        }, function(t, e) {
            function i() {
                c && h && (c = !1, h.length ? u = h.concat(u) : d = -1, u.length && n())
            }

            function n() {
                if (!c) {
                    var t = a(i);
                    c = !0;
                    for (var e = u.length; e;) {
                        for (h = u, u = []; ++d < e;) h && h[d].run();
                        d = -1, e = u.length
                    }
                    h = null, c = !1, o(t)
                }
            }

            function s(t, e) {
                this.fun = t, this.array = e
            }

            function r() {}
            var a, o, l = t.exports = {};
            ! function() {
                try {
                    a = setTimeout
                } catch (t) {
                    a = function() {
                        throw new Error("setTimeout is not defined")
                    }
                }
                try {
                    o = clearTimeout
                } catch (t) {
                    o = function() {
                        throw new Error("clearTimeout is not defined")
                    }
                }
            }();
            var h, u = [],
                c = !1,
                d = -1;
            l.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                u.push(new s(t, e)), 1 !== u.length || c || a(n, 0)
            }, s.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = r, l.addListener = r, l.once = r, l.off = r, l.removeListener = r, l.removeAllListeners = r, l.emit = r, l.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, l.cwd = function() {
                return "/"
            }, l.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, l.umask = function() {
                return 0
            }
        }, function(t, e, i) {
            var n = i(5),
                s = {
                    oldContainer: void 0,
                    newContainer: void 0,
                    newContainerLoading: void 0,
                    extend: function(t) {
                        return n.extend(this, t)
                    },
                    init: function(t, e) {
                        var i = this;
                        return this.oldContainer = t, this._newContainerPromise = e, this.deferred = n.deferred(), this.newContainerReady = n.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(t) {
                            i.newContainer = t, i.newContainerReady.resolve()
                        }), this.deferred.promise
                    },
                    done: function() {
                        this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                    },
                    start: function() {}
                };
            t.exports = s
        }, function(t, e) {
            var i = {
                getCurrentUrl: function() {
                    return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
                },
                cleanLink: function(t) {
                    return t.replace(/#.*/, "")
                },
                xhrTimeout: 5e3,
                xhr: function(t) {
                    var e = this.deferred(),
                        i = new XMLHttpRequest;
                    return i.onreadystatechange = function() {
                        if (4 === i.readyState) return 200 === i.status ? e.resolve(i.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                    }, i.ontimeout = function() {
                        return e.reject(new Error("xhr: Timeout exceeded"))
                    }, i.open("GET", t), i.timeout = this.xhrTimeout, i.setRequestHeader("x-barba", "yes"), i.send(), e.promise
                },
                extend: function(t, e) {
                    var i = Object.create(t);
                    for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
                    return i
                },
                deferred: function() {
                    return new function() {
                        this.resolve = null, this.reject = null, this.promise = new Promise(function(t, e) {
                            this.resolve = t, this.reject = e
                        }.bind(this))
                    }
                },
                getPort: function(t) {
                    var e = void 0 !== t ? t : window.location.port,
                        i = window.location.protocol;
                    return "" != e ? parseInt(e) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
                }
            };
            t.exports = i
        }, function(t, e, i) {
            var n = i(7),
                s = i(5),
                r = {
                    namespace: null,
                    extend: function(t) {
                        return s.extend(this, t)
                    },
                    init: function() {
                        var t = this;
                        n.on("initStateChange", function(e, i) {
                            i && i.namespace === t.namespace && t.onLeave()
                        }), n.on("newPageReady", function(e, i, n) {
                            t.container = n, e.namespace === t.namespace && t.onEnter()
                        }), n.on("transitionCompleted", function(e, i) {
                            e.namespace === t.namespace && t.onEnterCompleted(), i && i.namespace === t.namespace && t.onLeaveCompleted()
                        })
                    },
                    onEnter: function() {},
                    onEnterCompleted: function() {},
                    onLeave: function() {},
                    onLeaveCompleted: function() {}
                };
            t.exports = r
        }, function(t, e) {
            var i = {
                events: {},
                on: function(t, e) {
                    this.events[t] = this.events[t] || [], this.events[t].push(e)
                },
                off: function(t, e) {
                    t in this.events != 0 && this.events[t].splice(this.events[t].indexOf(e), 1)
                },
                trigger: function(t) {
                    if (t in this.events != 0)
                        for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            };
            t.exports = i
        }, function(t, e, i) {
            var n = i(5),
                s = {
                    data: {},
                    extend: function(t) {
                        return n.extend(this, t)
                    },
                    set: function(t, e) {
                        this.data[t] = e
                    },
                    get: function(t) {
                        return this.data[t]
                    },
                    reset: function() {
                        this.data = {}
                    }
                };
            t.exports = s
        }, function(t, e) {
            t.exports = {
                history: [],
                add: function(t, e) {
                    e || (e = void 0), this.history.push({
                        url: t,
                        namespace: e
                    })
                },
                currentStatus: function() {
                    return this.history[this.history.length - 1]
                },
                prevStatus: function() {
                    var t = this.history;
                    return t.length < 2 ? null : t[t.length - 2]
                }
            }
        }, function(t, e, i) {
            var n = i(5),
                s = i(7),
                r = i(11),
                a = i(8),
                o = i(9),
                l = {
                    Dom: i(12),
                    History: o,
                    Cache: a,
                    cacheEnabled: !0,
                    transitionProgress: !1,
                    ignoreClassLink: "no-barba",
                    start: function() {
                        this.init()
                    },
                    init: function() {
                        var t = this.Dom.getContainer();
                        this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)), s.trigger("initStateChange", this.History.currentStatus()), s.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML), s.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                    },
                    bindEvents: function() {
                        document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                    },
                    getCurrentUrl: function() {
                        return n.cleanLink(n.getCurrentUrl())
                    },
                    goTo: function(t) {
                        window.history.pushState(null, null, t), this.onStateChange()
                    },
                    forceGoTo: function(t) {
                        window.location = t
                    },
                    load: function(t) {
                        var e, i = n.deferred(),
                            s = this;
                        return (e = this.Cache.get(t)) || (e = n.xhr(t), this.Cache.set(t, e)), e.then(function(t) {
                            var e = s.Dom.parseResponse(t);
                            s.Dom.putContainer(e), s.cacheEnabled || s.Cache.reset(), i.resolve(e)
                        }, function() {
                            s.forceGoTo(t), i.reject()
                        }), i.promise
                    },
                    getHref: function(t) {
                        if (t) return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
                    },
                    onLinkClick: function(t) {
                        for (var e = t.target; e && !this.getHref(e);) e = e.parentNode;
                        if (this.preventCheck(t, e)) {
                            t.stopPropagation(), t.preventDefault(), s.trigger("linkClicked", e, t);
                            var i = this.getHref(e);
                            this.goTo(i)
                        }
                    },
                    preventCheck: function(t, e) {
                        if (!window.history.pushState) return !1;
                        var i = this.getHref(e);
                        return !(!e || !i || t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || e.target && "_blank" === e.target || window.location.protocol !== e.protocol || window.location.hostname !== e.hostname || n.getPort() !== n.getPort(e.port) || i.indexOf("#") > -1 || e.getAttribute && "string" == typeof e.getAttribute("download") || n.cleanLink(i) == n.cleanLink(location.href) || e.classList.contains(this.ignoreClassLink))
                    },
                    getTransition: function() {
                        return r
                    },
                    onStateChange: function() {
                        var t = this.getCurrentUrl();
                        if (this.transitionProgress && this.forceGoTo(t), this.History.currentStatus().url === t) return !1;
                        this.History.add(t);
                        var e = this.load(t),
                            i = Object.create(this.getTransition());
                        this.transitionProgress = !0, s.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                        var n = i.init(this.Dom.getContainer(), e);
                        e.then(this.onNewContainerLoaded.bind(this)), n.then(this.onTransitionEnd.bind(this))
                    },
                    onNewContainerLoaded: function(t) {
                        this.History.currentStatus().namespace = this.Dom.getNamespace(t), s.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
                    },
                    onTransitionEnd: function() {
                        this.transitionProgress = !1, s.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                    }
                };
            t.exports = l
        }, function(t, e, i) {
            var n = i(4).extend({
                start: function() {
                    this.newContainerLoading.then(this.finish.bind(this))
                },
                finish: function() {
                    document.body.scrollTop = 0, this.done()
                }
            });
            t.exports = n
        }, function(t, e) {
            var i = {
                dataNamespace: "namespace",
                wrapperId: "barba-wrapper",
                containerClass: "barba-container",
                currentHTML: document.documentElement.innerHTML,
                parseResponse: function(t) {
                    this.currentHTML = t;
                    var e = document.createElement("div");
                    e.innerHTML = t;
                    var i = e.querySelector("title");
                    return i && (document.title = i.textContent), this.getContainer(e)
                },
                getWrapper: function() {
                    var t = document.getElementById(this.wrapperId);
                    if (!t) throw new Error("Barba.js: wrapper not found!");
                    return t
                },
                getContainer: function(t) {
                    if (t || (t = document.body), !t) throw new Error("Barba.js: DOM not ready!");
                    var e = this.parseContainer(t);
                    if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                    return e
                },
                getNamespace: function(t) {
                    return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
                },
                putContainer: function(t) {
                    t.style.visibility = "hidden", this.getWrapper().appendChild(t)
                },
                parseContainer: function(t) {
                    return t.querySelector("." + this.containerClass)
                }
            };
            t.exports = i
        }, function(t, e, i) {
            var n = i(5),
                s = i(10),
                r = {
                    ignoreClassLink: "no-barba-prefetch",
                    init: function() {
                        return !!window.history.pushState && (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this)))
                    },
                    onLinkEnter: function(t) {
                        for (var e = t.target; e && !s.getHref(e);) e = e.parentNode;
                        if (e && !e.classList.contains(this.ignoreClassLink)) {
                            var i = s.getHref(e);
                            if (s.preventCheck(t, e) && !s.Cache.get(i)) {
                                var r = n.xhr(i);
                                s.Cache.set(i, r)
                            }
                        }
                    }
                };
            t.exports = r
        }])
    }),
    function() {
        function t(t) {
            return document.getElementById(t)
        }
        document.addEventListener("DOMContentLoaded", function() {
            var e = t("overlay"),
                i = t("progstat"),
                n = t("content-overlay"),
                s = t("progress-overlay"),
                r = t("loading-items"),
                a = t("logo"),
                o = document.images,
                l = 0,
                h = o.length,
                u = a.querySelectorAll(u);

            function c() {
                var t = 100 / h * (l += 1) << 0;
                i.innerHTML = "Loading " + t + "%", l === h && setTimeout(function() {
                    d()
                }, 100)
            }

            function d() {
                enableScroll(), TweenMax.to(e, 1.5, {
                    width: 0,
                    ease: Expo.easeInOut,
                    delay: .5
                }), TweenMax.to(s, 1.5, {
                    width: 0,
                    ease: Expo.easeInOut,
                    delay: .6
                }), TweenMax.to(n, 1.5, {
                    alpha: 0,
                    ease: Power3.easeInOut,
                    delay: .6
                }), TweenMax.to(r, 1.3, {
                    alpha: 0,
                    ease: Expo.easeInOut,
                    delay: .5
                }), setTimeout(function() {
                    e.style.display = "none", n.style.display = "none"
                }, 2200), setTimeout(function() {
                    triggerResize(), headerAnimate()
                }, 600), setTimeout(function() {
                    triggerResize()
                }, 1200)
            }
            disableScroll(), TweenMax.set(u, {
                x: 110,
                alpha: 0
            }), TweenMax.staggerTo(u, 1.5, {
                x: 0,
                alpha: 1,
                ease: Power4.easeInOut
            }, .02), 0 == h && setTimeout(function() {
                d()
            }, 400);
            for (var f = 0; f < h; f++) {
                var p = new Image;
                p.onload = c, p.onerror = c, p.src = o[f].src
            }
        }, !1)
    }(), document.addEventListener("DOMContentLoaded", function() {
        Barba.Pjax.start()
    }), Barba.Dispatcher.on("linkClicked", function(t, e) {
        document.getElementById("main-logo"), document.getElementById("menu"), document.getElementById("menu-overlay"), document.getElementById("nav");
        var i = document.getElementById("menuClip"),
            n = (document.getElementById("navClose"), document.querySelectorAll(".menu-item")),
            s = i.querySelectorAll(".menu-content"),
            r = (document.getElementById("logo-wrap"), document.getElementById("logo-box"), document.getElementById("head"), document.getElementById("head"), document.querySelector(".barba-container"));
        t.classList.contains("logo") ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll"), t.classList.contains("barba_nav") && (TweenMax.staggerTo(n, .6, {
            alpha: .8,
            xPercent: -100,
            ease: Expo.easeOut
        }, .05), TweenMax.to(s, .6, {
            alpha: 0,
            ease: Expo.easeOut
        })), TweenMax.to(r, .4, {
            alpha: 0
        }), showDynamicLoad()
    }), Barba.Dispatcher.on("initStateChange", function() {
        "function" == typeof ga && ga("send", "pageview", location.pathname)
    }), Barba.Dispatcher.on("newPageReady", function(t, e, i) {
        runDynamicLoad(i)
    }), Barba.Dispatcher.on("transitionCompleted", function(t, e) {});
var HideShowTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.finish.bind(this))
    },
    fadeOut: function() {},
    finish: function() {
        this.newContainer.style.opacity = 0, this.done()
    }
});

function q_animate(t, e, i) {
    if ("stagTop" === e && TweenMax.staggerFromTo(t, 1, {
            alpha: 0,
            y: 130
        }, {
            alpha: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: i
        }, .15), "fadeOut" === e && TweenMax.to(t, .3, {
            alpha: 0,
            ease: Power1.easeOut,
            delay: i
        }, .15), "stagLeft" === e && TweenMax.staggerFromTo(t, 1.5, {
            alpha: 0,
            x: 200
        }, {
            alpha: 1,
            x: 0,
            ease: Power4.easeOut,
            delay: i
        }, .1), "stagRight" === e && TweenMax.staggerFromTo(t, 1.5, {
            alpha: 0,
            x: -200
        }, {
            alpha: 1,
            x: 0,
            ease: Power4.easeOut,
            delay: i
        }, .1), "slideTop" === e && TweenMax.fromTo(t, 1.5, {
            alpha: 0,
            y: 50
        }, {
            alpha: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: i
        }), "slideLeft" === e) TweenMax.fromTo(t, 1.5, {
        alpha: 0,
        xPercent: -100
    }, {
        alpha: 1,
        xPercent: 0,
        ease: Expo.easeOut,
        delay: i
    });
    else if ("sideLeft" === e) TweenMax.staggerFromTo(t, 1.5, {
        alpha: 0,
        x: 120
    }, {
        alpha: 1,
        x: 0,
        ease: Expo.easeOut,
        delay: i
    }, .2);
    else if ("clientLeft" === e) TweenMax.staggerFromTo(t, 1.5, {
        alpha: 0,
        x: 180
    }, {
        alpha: .6,
        x: 0,
        ease: Expo.easeOut,
        delay: i
    }, .05);
    else if ("sideRight" === e) TweenMax.staggerFromTo(t, 1.5, {
        alpha: 0,
        x: -120
    }, {
        alpha: 1,
        x: 0,
        ease: Expo.easeOut,
        delay: i
    }, .2);
    else if ("clipRight" === e) TweenMax.staggerTo(t, 1, {
        clipPath: "inset(0px 0px 0px 0px)",
        ease: Expo.easeInOut,
        delay: i
    }, .1);
    else if ("splitLeft" === e) {
        var n = t.textContent.split("");
        t.innerHTML = "";
        for (var s = 0; s < n.length; s++) t.innerHTML += "<span>" + n[s] + "</span>";
        var r = t.querySelectorAll("span");
        TweenMax.set(r, {
            x: 110,
            alpha: 0
        }), setTimeout(function() {
            TweenMax.staggerTo(r, 1.5, {
                x: 0,
                alpha: 1,
                ease: Power4.easeInOut
            }, .03)
        }, i)
    } else if ("splitRight" === e) {
        n = t.textContent.split("");
        t.innerHTML = "";
        for (s = 0; s < n.length; s++) t.innerHTML += "<span>" + n[s] + "</span>";
        r = t.querySelectorAll("span");
        TweenMax.set(r, {
            x: -110,
            alpha: 0
        }), setTimeout(function() {
            TweenMax.staggerTo(r, 1.5, {
                x: 0,
                alpha: 1,
                ease: Power4.easeInOut
            }, -.02)
        }, i)
    }
}

function animateText() {
    for (var t = document.getElementById("lettr").querySelectorAll("font"), e = t.length - 1; e >= 0; e--) {
        i(t[e])
    }

    function i(t) {
        var e = t.textContent.split("");
        for (t.innerHTML = "", w = 0; w < e.length; w++) t.innerHTML += "<span>" + e[w] + "</span>";
        chars = t.querySelectorAll("span");
        for (var i = chars.length - 1; i >= 0; i--) {
            n(chars[i], i)
        }

        function n(t, e) {
            t.style.transitionDelay = .1 * e + "s"
        }
    }
}

function qMagnet(t) {
    if (window.innerWidth > 540)
        for (var e = t.length - 1; e >= 0; e--) {
            var i = t[e],
                n = i.getAttribute("friction") || .3;
            i.addEventListener("mouseover", function() {
                this.classList.add("hovered")
            }), i.addEventListener("mouseout", function() {
                this.classList.remove("hovered"), this.style.transform = "translate(0px, 0px)"
            }), i.addEventListener("mousemove", function(t) {
                const e = this.getBoundingClientRect(),
                    i = e.left + e.width / 2,
                    s = e.top + e.height / 2,
                    r = Math.floor(i - t.clientX) * n * -1,
                    a = Math.floor(s - t.clientY) * n * -1;
                TweenMax.to(this, 0, {
                    x: r,
                    y: a
                })
            })
        }
}

function animateReveal(t) {
    var e = t[0].target,
        i = e.querySelectorAll(".rev_item");
    i.length > 0 && (e.classList.contains("q_active") ? q_animate(i, "stagTop", .3) : TweenMax.to(i, .5, {
        alpha: 0
    }));
    var n = e.querySelectorAll(".rev_line");
    n.length > 0 && (e.classList.contains("q_active") ? TweenMax.to(n[0], 1.2, {
        x: 0,
        width: 72,
        ease: Expo.easeInOut
    }) : TweenMax.to(n[0], 1.2, {
        x: 100,
        width: 0,
        ease: Expo.easeInOut
    }));
    var s = e.querySelectorAll(".rev_item_delay");
    s.length > 0 && (e.classList.contains("q_active") ? q_animate(s, "stagTop", .5) : TweenMax.to(s, .5, {
        alpha: 0
    }));
    var r = e.querySelectorAll(".rev_clip");
    if (r.length > 0) {
        var a = r[0].clientWidth;
        e.classList.contains("q_active") ? r[0].classList.contains("delay") ? TweenMax.fromTo(r, 1.2, {
            x: -100,
            alpha: 1,
            clipPath: "inset(0px " + a + "px 0px 0px)",
            webkitClipPath: "inset(0px " + a + "px 0px 0px)"
        }, {
            x: 0,
            alpha: 1,
            clipPath: "inset(0px 0px 0px 0px)",
            webkitClipPath: "inset(0px 0px 0px 0px)",
            ease: Expo.easeInOut,
            delay: .15
        }) : TweenMax.fromTo(r, 1.8, {
            x: -100,
            alpha: 1,
            clipPath: "inset(0px " + a + "px 0px 0px)",
            webkitClipPath: "inset(0px " + a + "px 0px 0px)"
        }, {
            x: 0,
            alpha: 1,
            clipPath: "inset(0px 0px 0px 0px)",
            webkitClipPath: "inset(0px 0px 0px 0px)",
            ease: Expo.easeInOut
        }) : TweenMax.to(r, 1, {
            alpha: 0,
            x: -50,

            ease: Power4.easeInOut
        })
    }
    var o = e.querySelectorAll(".rev_scale");
    if (o.length > 0) {
        var l = o[0];
        e.classList.contains("q_active") ? TweenMax.fromTo(l, 2.8, {
            css: {
                scale: 1.3,
                opacity: .5
            }
        }, {
            css: {
                scale: 1,
                opacity: 1
            },
            ease: Power3.easeOut
        }) : TweenMax.to(l, 1, {
            css: {
                scale: 1.3,
                opacity: .5
            },
            ease: Power3.easeIn
        })
    }
    var h = e.querySelectorAll(".rev_letter");
    if (h.length > 0) {
        l = h[0];
        e.classList.contains("q_active") && q_animate(l, "splitLeft", .6)
    }
    var u = e.querySelectorAll(".rev_client");
    u.length > 0 && e.classList.contains("q_active") && q_animate(u, "clientLeft", .6)
}

function qReveal(t, e, i, n, s) {
    var r = document.querySelectorAll(".rev_item");
    if (TweenMax.set(r, {
            alpha: 0
        }), t.length > 0) {
        for (var a = t.length - 1; a >= 0; a--) {
            var o = t[a];
            o.querySelectorAll(".rev_item");
            new MutationObserver(function(t) {
                animateReveal(t)
            }).observe(o, {
                attributes: !0,
                attributeFilter: ["class"],
                childList: !1,
                characterData: !1
            })
        }
        window.addEventListener("scroll", function() {
            qRevealScroll(t, e, i, n, s)
        })
    }
}

function qRevealScroll(t, e, i, n) {
    for (var s = window.scrollY, r = t.length - 1; r >= 0; r--) {
        a(t[r], s)
    }

    function a(t, s) {
        var r = t.offsetTop - window.innerHeight / 1.2 + 100;
        t.clientHeight, t.querySelectorAll(".rev_item");
        if (s > 100 ? (e.classList.add("active"), i.classList.add("active")) : s < 100 && (e.classList.remove("active"), i.classList.remove("active")), s < 10) {
            if (!t.classList.contains("q_active")) return;
            t.classList.remove("q_active")
        } else {
            if (s > r) {
                if (t.classList.contains("q_active")) return;
                t.classList.add("q_active")
            }
            var a = document.getElementById("footer");
            if (a) {
                var o = a.offsetTop - window.innerHeight / 2;
                if (s > o) {
                    if (menu.classList.contains("active")) return;
                    n.classList.add("hide")
                } else s < o && n.classList.remove("hide")
            }
        }
    }
}

function qSlide(t) {
    t.classList.add("q_slide");
    var e = t.querySelectorAll(".slide"),
        i = t.querySelector(".pagination"),
        n = document.getElementById("bar");

    function s() {
        var t = document.createEvent("HTMLEvents");
        t.initEvent("resize", !0, !1), window.dispatchEvent(t)
    }

    function r() {
        if (null != t.getAttribute("autoplay")) {
            var e = t.getAttribute("autoplay") || 4e3;
            n && function() {
                var e = t.getAttribute("autoplay") || 4e3;
                TweenMax.fromTo(n, e / 1e3, {
                    height: "0%"
                }, {
                    height: "100%"
                })
            }();
            setTimeout(function() {
                u(t, !1, !0)
            }, e)
        }
    }
    var a = 1;
    if (null != t.getAttribute("parallax")) a = t.getAttribute("parallax") || .25;
    if (null != t.getAttribute("opacity")) var o = t.getAttribute("opacity") || .6;

    function l() {
        if (i) {
            var e = i.querySelectorAll(".item"),
                n = i.querySelector(".q_current"),
                s = indexInParent(t.querySelector(".is-new"));
            n.classList.remove("q_current"), e[s].classList.add("q_current")
        }
    }

    function h(t, i, s) {
        if ("true" !== t.getAttribute("wait")) {
            var h = t.querySelectorAll(".slide-content"),
                u = t.querySelector(".q_current"),
                c = u.querySelector(".image-container"),
                d = eq.call(e, i),
                f = (i = indexInParent(d), d.querySelector(".image-container")),
                p = d.querySelector(".slide-content") || h[i],
                _ = t.querySelectorAll(".q_split_wrap");
            if (p) var m = p.querySelectorAll(".q_split_wrap");
            if (d !== u) {
                d.classList.add("is-new");
                if (clearTimeout(0), l(), t.setAttribute("wait", "true"), indexInParent(d) > indexInParent(u)) var g = 0,
                    v = "auto",
                    y = -t.clientWidth * (1 - a) + "px",
                    w = "auto",
                    x = 0,
                    T = -t.clientWidth * a + "px";
                else g = "", v = 0, y = -t.clientWidth * a + "px", w = 0, x = "auto", T = t.clientWidth * a + "px";
                if (d.style.display = "block", d.style.width = 0, d.style.right = g, d.style.left = v, d.style.zIndex = 2, f.style.width = t.clientWidth + "px", c.style.transform = "translateX(0)", TweenMax.set(f, {
                        x: y
                    }), o && (f.style.opacity = o), p && (p.style.width = t.clientWidth + "px", p.style.right = x, p.style.left = w), o ? TweenMax.to(c, 1.5, {
                        x: T,
                        opacity: o,
                        ease: Expo.easeInOut
                    }) : TweenMax.to(c, 1.5, {
                        x: T,
                        ease: Expo.easeInOut
                    }), TweenMax.to(d, 1.5, {
                        width: t.clientWidth,
                        ease: Expo.easeInOut
                    }), n && setTimeout(function() {
                        TweenMax.set(n, {
                            height: "0%"
                        })
                    }, 800), TweenMax.to(f, 1.5, {
                        x: 0,
                        opacity: 1,
                        ease: Expo.easeInOut,
                        onComplete: function() {
                            d.classList.add("q_current"), d.classList.remove("is-new"), u.classList.remove("q_current"), d.removeAttribute("style"), f.removeAttribute("style"), p && p.removeAttribute("style"), c.removeAttribute("style"), t.setAttribute("wait", "false"), s && r()
                        }
                    }), null != t.getAttribute("animate")) {
                    var b = t.getAttribute("animate") || "stagTop";
                    q_animate(_, "fadeOut", .5), q_animate(m, b, .6)
                }
            }
        }
    }

    function u(t, i, n) {
        var r = t.querySelector(".q_current"),
            a = null;
        i ? (a = r.previousElementSibling) || (a = e[e.length - 1]) : (a = r.nextElementSibling) || (a = e[0]), h(t, indexInParent(a), n), s()
    }
    for (var c = e.length - 1; c >= 0; c--) {
        (m = e[c]).classList.add("is-loaded")
    }
    var d = t.querySelector(".arrows");
    if (d) {
        var f = d.querySelector(".next"),
            p = d.querySelector(".prev");
        f.addEventListener("click", function(e) {
            u(t, !1)
        }), p.addEventListener("click", function(e) {
            u(t, !0)
        })
    }
    if (i) {
        var _ = i.querySelectorAll(".item");
        for (c = _.length - 1; c >= 0; c--) {
            _[c].addEventListener("click", function(e) {
                h(t, indexInParent(e.target)), s()
            })
        }
    }
    if (r(), null != t.getAttribute("mousefollow") && window.innerWidth > 540) {
        for (c = e.length - 1; c >= 0; c--) {
            var m = e[c].querySelector(".image-wrapper");
            TweenMax.set(m, {
                scale: 1.1
            })
        }
        t.onmousemove = function(i) {
            ! function(i) {
                var n = Math.max(-100, Math.min(100, t.clientWidth / 2 - i.clientX)),
                    s = Math.max(-100, Math.min(100, t.clientHeight / 2 - i.clientY));
                x = 25 * n / 100, y = 15 * s / 100;
                for (var r = e.length - 1; r >= 0; r--) {
                    var a = e[r].querySelector(".image-wrapper");
                    TweenMax.to(a, 3, {
                        autoAlpha: 1,
                        x: x,
                        y: y,
                        ease: Power1.easeOut
                    })
                }
            }(i)
        }
    }
}
Barba.Pjax.getTransition = function() {
        return HideShowTransition
    },
    function() {
        return function t(e, i, n) {
            function s(a, o) {
                if (!i[a]) {
                    if (!e[a]) {
                        var l = "function" == typeof require && require;
                        if (!o && l) return l(a, !0);
                        if (r) return r(a, !0);
                        var h = new Error("Cannot find module '" + a + "'");
                        throw h.code = "MODULE_NOT_FOUND", h
                    }
                    var u = i[a] = {
                        exports: {}
                    };
                    e[a][0].call(u.exports, function(t) {
                        return s(e[a][1][t] || t)
                    }, u, u.exports, t, e, i, n)
                }
                return i[a].exports
            }
            for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) s(n[a]);
            return s
        }
    }()({
        1: [function(t, e, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                s = h(t("dom-classes")),
                r = h(t("dom-create-element")),
                a = h(t("prefix")),
                o = h(t("virtual-scroll")),
                l = h(t("dom-events"));

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var u = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.createBound(), this.options = e, this.prefix = (0, a.default)("transform"), this.rAF = void 0, this.isRAFCanceled = !1;
                    var i = this.constructor.name ? this.constructor.name : "Smooth";
                    this.extends = void 0 === e.extends ? this.constructor !== t : e.extends, this.callback = this.options.callback || null, this.vars = {
                        direction: this.options.direction || "vertical",
                        native: this.options.native || !1,
                        ease: this.options.ease || .075,
                        preload: this.options.preload || !1,
                        current: 0,
                        last: 0,
                        target: 0,
                        height: window.innerHeight,
                        width: window.innerWidth,
                        bounding: 0,
                        timer: null,
                        ticking: !1
                    }, this.vs = this.vars.native ? null : new o.default({
                        limitInertia: this.options.vs && this.options.vs.limitInertia || !1,
                        mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
                        touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
                        firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
                        preventTouch: this.options.vs && this.options.vs.preventTouch || !0
                    }), this.dom = {
                        listener: this.options.listener || document.body,
                        section: this.options.section || document.querySelector(".vs-section") || null,
                        scrollbar: this.vars.native || this.options.noscrollbar ? null : {
                            state: {
                                clicked: !1,
                                x: 0
                            },
                            el: (0, r.default)({
                                selector: "div",
                                styles: "vs-scrollbar vs-" + this.vars.direction + " vs-scrollbar-" + i.toLowerCase()
                            }),
                            drag: {
                                el: (0, r.default)({
                                    selector: "div",
                                    styles: "vs-scrolldrag"
                                }),
                                delta: 0,
                                height: 50
                            }
                        }
                    }
                }
                return n(t, [{
                    key: "createBound",
                    value: function() {
                        var t = this;
                        ["run", "calc", "debounce", "resize", "mouseUp", "mouseDown", "mouseMove", "calcScroll", "scrollTo"].forEach(function(e) {
                            return t[e] = t[e].bind(t)
                        })
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.addClasses(), this.vars.preload && this.preloadImages(), this.vars.native ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar(), this.addEvents(), this.resize()
                    }
                }, {
                    key: "addClasses",
                    value: function() {
                        var t = this.vars.native ? "native" : "virtual",
                            e = "vertical" === this.vars.direction ? "y" : "x";
                        s.default.add(this.dom.listener, "is-" + t + "-scroll"), s.default.add(this.dom.listener, e + "-scroll")
                    }
                }, {
                    key: "preloadImages",
                    value: function() {
                        var t = this,
                            e = Array.prototype.slice.call(this.dom.listener.querySelectorAll("img"), 0);
                        e.forEach(function(i) {
                            var n = document.createElement("img");
                            l.default.once(n, "load", function() {
                                e.splice(e.indexOf(i), 1), 0 === e.length && t.resize()
                            }), n.src = i.getAttribute("src")
                        })
                    }
                }, {
                    key: "calc",
                    value: function(t) {
                        var e = t.deltaY;
                        this.vars.target += -1 * e, this.clampTarget()
                    }
                }, {
                    key: "debounce",
                    value: function() {
                        var t = this,
                            e = this.dom.listener === document.body;
                        this.vars.target = "vertical" === this.vars.direction ? e ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : e ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft, clearTimeout(this.vars.timer), this.vars.ticking || (this.vars.ticking = !0, s.default.add(this.dom.listener, "is-scrolling")), this.vars.timer = setTimeout(function() {
                            t.vars.ticking = !1, s.default.remove(t.dom.listener, "is-scrolling")
                        }, 200)
                    }
                }, {
                    key: "run",
                    value: function() {
                        if (!this.isRAFCanceled) {
                            if (this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease, this.vars.current < .1 && (this.vars.current = 0), this.requestAnimationFrame(), this.extends || (this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))), !this.vars.native && !this.options.noscrollbar) {
                                var t = this.dom.scrollbar.drag.height,
                                    e = "vertical" === this.vars.direction ? this.vars.height : this.vars.width,
                                    i = Math.abs(this.vars.current) / (this.vars.bounding / (e - t)) + t / .5 - t,
                                    n = Math.max(0, Math.min(i - t, i + t));
                                this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(n.toFixed(2))
                            }
                            this.callback && this.vars.current !== this.vars.last && this.callback(this.vars.current), this.vars.last = this.vars.current
                        }
                    }
                }, {
                    key: "getTransform",
                    value: function(t) {
                        return "vertical" === this.vars.direction ? "translate3d(0," + t + "px,0)" : "translate3d(" + t + "px,0,0)"
                    }
                }, {
                    key: "on",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.isRAFCanceled && (this.isRAFCanceled = !1);
                        var e = this.dom.listener === document.body ? window : this.dom.listener;
                        this.vars.native ? l.default.on(e, "scroll", this.debounce) : this.vs && this.vs.on(this.calc), t && this.requestAnimationFrame()
                    }
                }, {
                    key: "off",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = this.dom.listener === document.body ? window : this.dom.listener;
                        this.vars.native ? l.default.off(e, "scroll", this.debounce) : this.vs && this.vs.off(this.calc), t && this.cancelAnimationFrame()
                    }
                }, {
                    key: "requestAnimationFrame",
                    value: function(t) {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }, e
                    }(function() {
                        this.rAF = requestAnimationFrame(this.run)
                    })
                }, {
                    key: "cancelAnimationFrame",
                    value: function(t) {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }, e
                    }(function() {
                        this.isRAFCanceled = !0, cancelAnimationFrame(this.rAF)
                    })
                }, {
                    key: "addEvents",
                    value: function() {
                        this.on(), l.default.on(window, "resize", this.resize)
                    }
                }, {
                    key: "removeEvents",
                    value: function() {
                        this.off(), l.default.off(window, "resize", this.resize)
                    }
                }, {
                    key: "addFakeScrollBar",
                    value: function() {
                        this.dom.listener.appendChild(this.dom.scrollbar.el), this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el), l.default.on(this.dom.scrollbar.el, "click", this.calcScroll), l.default.on(this.dom.scrollbar.el, "mousedown", this.mouseDown), l.default.on(document, "mousemove", this.mouseMove), l.default.on(document, "mouseup", this.mouseUp)
                    }
                }, {
                    key: "removeFakeScrollBar",
                    value: function() {
                        l.default.off(this.dom.scrollbar.el, "click", this.calcScroll), l.default.off(this.dom.scrollbar.el, "mousedown", this.mouseDown), l.default.off(document, "mousemove", this.mouseMove), l.default.off(document, "mouseup", this.mouseUp), this.dom.listener.removeChild(this.dom.scrollbar.el)
                    }
                }, {
                    key: "mouseDown",
                    value: function(t) {
                        t.preventDefault(), 1 == t.which && (this.dom.scrollbar.state.clicked = !0)
                    }
                }, {
                    key: "mouseUp",
                    value: function(t) {
                        this.dom.scrollbar.state.clicked = !1, s.default.remove(this.dom.listener, "is-dragging")
                    }
                }, {
                    key: "mouseMove",
                    value: function(t) {
                        this.dom.scrollbar.state.clicked && this.calcScroll(t)
                    }
                }, {
                    key: "addFakeScrollHeight",
                    value: function() {
                        this.dom.scroll = (0, r.default)({
                            selector: "div",
                            styles: "vs-scroll-view"
                        }), this.dom.listener.appendChild(this.dom.scroll)
                    }
                }, {
                    key: "removeFakeScrollHeight",
                    value: function() {
                        this.dom.listener.removeChild(this.dom.scroll)
                    }
                }, {
                    key: "calcScroll",
                    value: function(t) {
                        var e = "vertical" == this.vars.direction ? t.clientY : t.clientX,
                            i = "vertical" == this.vars.direction ? this.vars.height : this.vars.width,
                            n = e * (this.vars.bounding / i);
                        s.default.add(this.dom.listener, "is-dragging"), this.vars.target = n, this.clampTarget(), this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        this.vars.native ? "vertical" == this.vars.direction ? window.scrollTo(0, t) : window.scrollTo(t, 0) : (this.vars.target = t, this.clampTarget())
                    }
                }, {
                    key: "resize",
                    value: function() {
                        var t = "vertical" === this.vars.direction ? "height" : "width";
                        if (this.vars.height = window.innerHeight, this.vars.width = window.innerWidth, !this.extends) {
                            var e = this.dom.section.getBoundingClientRect();
                            this.vars.bounding = "vertical" === this.vars.direction ? e.height - (this.vars.native ? 0 : this.vars.height) : e.right - (this.vars.native ? 0 : this.vars.width)
                        }
                        this.vars.native || this.options.noscrollbar ? this.vars.native && (this.dom.scroll.style[t] = this.vars.bounding + "px") : (this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height)), this.dom.scrollbar.drag.el.style[t] = this.dom.scrollbar.drag.height + "px"), !this.vars.native && this.clampTarget()
                    }
                }, {
                    key: "clampTarget",
                    value: function() {
                        this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.vars.native ? (s.default.remove(this.dom.listener, "is-native-scroll"), this.removeFakeScrollHeight()) : (s.default.remove(this.dom.listener, "is-virtual-scroll"), !this.options.noscrollbar && this.removeFakeScrollBar()), "vertical" === this.vars.direction ? s.default.remove(this.dom.listener, "y-scroll") : s.default.remove(this.dom.listener, "x-scroll"), this.vars.current = 0, this.vs && (this.vs.destroy(), this.vs = null), this.removeEvents()
                    }
                }]), t
            }();
            i.default = u, window.Smooth = u
        }, {
            "dom-classes": 3,
            "dom-create-element": 4,
            "dom-events": 5,
            prefix: 9,
            "virtual-scroll": 15
        }],
        2: [function(t, e, i) {
            "use strict";
            var n = Object.prototype.toString,
                s = Object.prototype.hasOwnProperty;

            function r(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            e.exports = function(t) {
                if (!t) return console.warn("bindAll requires at least one argument.");
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var i in t) s.call(t, i) && "function" == typeof t[i] && "[object Function]" == n.call(t[i]) && e.push(i);
                for (var a = 0; a < e.length; a++) {
                    var o = e[a];
                    t[o] = r(t[o], t)
                }
            }
        }, {}],
        3: [function(t, e, i) {
            var n = t("indexof"),
                s = /\s+/,
                r = Object.prototype.toString;

            function a(t) {
                if (t.classList) return t.classList;
                var e = t.className.replace(/^\s+|\s+$/g, "").split(s);
                return "" === e[0] && e.shift(), e
            }

            function o(t, e) {
                if (t.classList) t.classList.add(e);
                else {
                    var i = a(t);
                    ~n(i, e) || i.push(e), t.className = i.join(" ")
                }
            }

            function l(t, e) {
                return t.classList ? t.classList.contains(e) : !!~n(a(t), e)
            }

            function h(t, e) {
                if ("[object RegExp]" == r.call(e)) return u(t, e);
                if (t.classList) t.classList.remove(e);
                else {
                    var i = a(t),
                        s = n(i, e);
                    ~s && i.splice(s, 1), t.className = i.join(" ")
                }
            }

            function u(t, e, i) {
                for (var n = Array.prototype.slice.call(a(t)), s = 0; s < n.length; s++) e.test(n[s]) && h(t, n[s])
            }
            e.exports = a, e.exports.add = o, e.exports.contains = l, e.exports.has = l, e.exports.toggle = function(t, e) {
                if (t.classList) return t.classList.toggle(e);
                l(t, e) ? h(t, e) : o(t, e)
            }, e.exports.remove = h, e.exports.removeMatching = u
        }, {
            indexof: 6
        }],
        4: [function(t, e, i) {
            e.exports = function(t) {
                t = t || {};
                var e = document.createElement(t.selector);
                if (t.attr)
                    for (var i in t.attr) t.attr.hasOwnProperty(i) && e.setAttribute(i, t.attr[i]);
                return "a" == t.selector && t.link && (e.href = t.link, t.target && e.setAttribute("target", t.target)), "img" == t.selector && t.src && (e.src = t.src, t.lazyload && (e.style.opacity = 0, e.onload = function() {
                    e.style.opacity = 1
                })), t.id && (e.id = t.id), t.styles && (e.className = t.styles), t.html && (e.innerHTML = t.html), t.children && e.appendChild(t.children), e
            }
        }, {}],
        5: [function(t, e, i) {
            var n = t("synthetic-dom-events"),
                s = function(t, e, i, n) {
                    return t.addEventListener(e, i, n || !1)
                },
                r = function(t, e, i, n) {
                    return t.removeEventListener(e, i, n || !1)
                },
                a = function(t, e, i) {
                    var s = n(e, i);
                    t.dispatchEvent(s)
                };
            document.addEventListener || (s = function(t, e, i) {
                return t.attachEvent("on" + e, i)
            }), document.removeEventListener || (r = function(t, e, i) {
                return t.detachEvent("on" + e, i)
            }), document.dispatchEvent || (a = function(t, e, i) {
                var s = n(e, i);
                return t.fireEvent("on" + s.type, s)
            }), e.exports = {
                on: s,
                off: r,
                once: function(t, e, i, n) {
                    s(t, e, function s(a) {
                        r(t, e, s, n), i(a)
                    }, n)
                },
                emit: a
            }
        }, {
            "synthetic-dom-events": 10
        }],
        6: [function(t, e, i) {
            var n = [].indexOf;
            e.exports = function(t, e) {
                if (n) return t.indexOf(e);
                for (var i = 0; i < t.length; ++i)
                    if (t[i] === e) return i;
                return -1
            }
        }, {}],
        7: [function(t, e, i) {
            (function() {
                (null != i ? i : this).Lethargy = function() {
                    function t(t, e, i, n) {
                        this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this), this.lastDownDeltas = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this), this.deltasTimestamp = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this)
                    }
                    return t.prototype.check = function(t) {
                        var e;
                        return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                    }, t.prototype.isInertia = function(t) {
                        var e, i, n, s, r, a, o;
                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), o = n.reduce(function(t, e) {
                            return t + e
                        }), r = i.reduce(function(t, e) {
                            return t + e
                        }), a = o / n.length, s = r / i.length, Math.abs(a) < Math.abs(s * this.tolerance) && this.sensitivity < Math.abs(s) && t)
                    }, t.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }, t.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }, t
                }()
            }).call(this)
        }, {}],
        8: [function(t, e, i) {
            "use strict";
            var n = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                            return e[t]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        n[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, e) {
                for (var i, a, o = function(t) {
                        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }(t), l = 1; l < arguments.length; l++) {
                    for (var h in i = Object(arguments[l])) s.call(i, h) && (o[h] = i[h]);
                    if (n) {
                        a = n(i);
                        for (var u = 0; u < a.length; u++) r.call(i, a[u]) && (o[a[u]] = i[a[u]])
                    }
                }
                return o
            }
        }, {}],
        9: [function(t, e, i) {
            var n = "undefined" != typeof document ? document.createElement("p").style : {},
                s = ["O", "ms", "Moz", "Webkit"],
                r = /([A-Z])/g,
                a = {};

            function o(t) {
                if (t = t.replace(/-([a-z])/g, function(t, e) {
                        return e.toUpperCase()
                    }), void 0 !== n[t]) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = s.length; i--;) {
                    var r = s[i] + e;
                    if (void 0 !== n[r]) return r
                }
                return t
            }
            e.exports = function(t) {
                return t in a ? a[t] : a[t] = o(t)
            }, e.exports.dash = function(t) {
                return t = o(t), r.test(t) && (t = "-" + t.replace(r, "-$1"), r.lastIndex = 0), t.toLowerCase()
            }
        }, {}],
        10: [function(t, e, i) {
            window;
            var n = document || {},
                s = (n.documentElement, !0);
            try {
                n.createEvent("KeyEvents")
            } catch (t) {
                s = !1
            }
            e.exports = n.createEvent ? function(t, e) {
                e = e || {};
                var i = o(t),
                    a = i;
                "KeyboardEvent" === i && s && (i = "KeyEvents", a = "KeyEvent");
                var l = n.createEvent(i),
                    h = "init" + a,
                    u = "function" == typeof l[h] ? h : "initEvent",
                    c = r[u],
                    d = [],
                    f = {};
                e.type = t;
                for (var p = 0; p < c.length; ++p) {
                    var _ = e[m = c[p]];
                    void 0 === _ && (_ = l[m]), f[m] = !0, d.push(_)
                }
                for (var m in l[u].apply(l, d), "KeyboardEvent" === i && (l = function(t, e) {
                        return t.ctrlKey == (e.ctrlKey || !1) && t.altKey == (e.altKey || !1) && t.shiftKey == (e.shiftKey || !1) && t.metaKey == (e.metaKey || !1) && t.keyCode == (e.keyCode || 0) && t.charCode == (e.charCode || 0) || ((t = document.createEvent("Event")).initEvent(e.type, e.bubbles, e.cancelable), t.ctrlKey = e.ctrlKey || !1, t.altKey = e.altKey || !1, t.shiftKey = e.shiftKey || !1, t.metaKey = e.metaKey || !1, t.keyCode = e.keyCode || 0, t.charCode = e.charCode || 0), t
                    }(l, e)), e) f[m] || (l[m] = e[m]);
                return l
            } : function(t, e) {
                e = e || {};
                var i = n.createEventObject();
                for (var s in i.type = t, e) void 0 !== e[s] && (i[s] = e[s]);
                return i
            };
            var r = t("./init.json"),
                a = t("./types.json"),
                o = function() {
                    var t = {};
                    for (var e in a)
                        for (var i = a[e], n = 0; n < i.length; n++) t[i[n]] = e;
                    return function(e) {
                        return t[e] || "Event"
                    }
                }()
        }, {
            "./init.json": 11,
            "./types.json": 12
        }],
        11: [function(t, e, i) {
            e.exports = {
                initEvent: ["type", "bubbles", "cancelable"],
                initUIEvent: ["type", "bubbles", "cancelable", "view", "detail"],
                initMouseEvent: ["type", "bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
                initMutationEvent: ["type", "bubbles", "cancelable", "relatedNode", "prevValue", "newValue", "attrName", "attrChange"],
                initKeyboardEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
                initKeyEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"]
            }
        }, {}],
        12: [function(t, e, i) {
            e.exports = {
                MouseEvent: ["click", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout"],
                KeyboardEvent: ["keydown", "keyup", "keypress"],
                MutationEvent: ["DOMSubtreeModified", "DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMAttrModified", "DOMCharacterDataModified"],
                HTMLEvents: ["load", "unload", "abort", "error", "select", "change", "submit", "reset", "focus", "blur", "resize", "scroll"],
                UIEvent: ["DOMFocusIn", "DOMFocusOut", "DOMActivate"]
            }
        }, {}],
        13: [function(t, e, i) {
            function n() {}
            n.prototype = {
                on: function(t, e, i) {
                    var n = this.e || (this.e = {});
                    return (n[t] || (n[t] = [])).push({
                        fn: e,
                        ctx: i
                    }), this
                },
                once: function(t, e, i) {
                    var n = this;

                    function s() {
                        n.off(t, s), e.apply(i, arguments)
                    }
                    return s._ = e, this.on(t, s, i)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) i[n].fn.apply(i[n].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var i = this.e || (this.e = {}),
                        n = i[t],
                        s = [];
                    if (n && e)
                        for (var r = 0, a = n.length; r < a; r++) n[r].fn !== e && n[r].fn._ !== e && s.push(n[r]);
                    return s.length ? i[t] = s : delete i[t], this
                }
            }, e.exports = n
        }, {}],
        14: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                return JSON.parse(JSON.stringify(t))
            }
        }, {}],
        15: [function(t, e, i) {
            "use strict";
            var n = t("object-assign"),
                s = t("tiny-emitter"),
                r = t("lethargy").Lethargy,
                a = t("./support"),
                o = (t("./clone"), t("bindall-standalone")),
                l = "virtualscroll";
            e.exports = p;
            var h = 37,
                u = 38,
                c = 39,
                d = 40,
                f = 32;

            function p(t) {
                o(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = n({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    limitInertia: !1
                }, t), this.options.limitInertia && (this._lethargy = new r), this._emitter = new s, this._event = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                    passive: this.options.passive
                })
            }
            p.prototype._notify = function(t) {
                var e = this._event;
                e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(l, {
                    x: e.x,
                    y: e.y,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    originalEvent: t
                })
            }, p.prototype._onWheel = function(t) {
                var e = this.options;
                if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                    var i = this._event;
                    i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, a.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
                }
            }, p.prototype._onMouseWheel = function(t) {
                if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                    var e = this._event;
                    e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
                }
            }, p.prototype._onTouchStart = function(t) {
                var e = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStartX = e.pageX, this.touchStartY = e.pageY
            }, p.prototype._onTouchMove = function(t) {
                var e = this.options;
                e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                var i = this._event,
                    n = t.targetTouches ? t.targetTouches[0] : t;
                i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t)
            }, p.prototype._onKeyDown = function(t) {
                var e = this._event;
                e.deltaX = e.deltaY = 0;
                var i = window.innerHeight - 40;
                switch (t.keyCode) {
                    case h:
                    case u:
                        e.deltaY = this.options.keyStep;
                        break;
                    case c:
                    case d:
                        e.deltaY = -this.options.keyStep;
                        break;
                    case f && t.shiftKey:
                        e.deltaY = i;
                        break;
                    case f:
                        e.deltaY = -i;
                        break;
                    default:
                        return
                }
                this._notify(t)
            }, p.prototype._bind = function() {
                a.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), a.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), a.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), a.hasPointer && a.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && document.addEventListener("keydown", this._onKeyDown)
            }, p.prototype._unbind = function() {
                a.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), a.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), a.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), a.hasPointer && a.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && document.removeEventListener("keydown", this._onKeyDown)
            }, p.prototype.on = function(t, e) {
                this._emitter.on(l, t, e);
                var i = this._emitter.e;
                i && i[l] && 1 === i[l].length && this._bind()
            }, p.prototype.off = function(t, e) {
                this._emitter.off(l, t, e);
                var i = this._emitter.e;
                (!i[l] || i[l].length <= 0) && this._unbind()
            }, p.prototype.reset = function() {
                var t = this._event;
                t.x = 0, t.y = 0
            }, p.prototype.destroy = function() {
                this._emitter.off(), this._unbind()
            }
        }, {
            "./clone": 14,
            "./support": 16,
            "bindall-standalone": 2,
            lethargy: 7,
            "object-assign": 8,
            "tiny-emitter": 13
        }],
        16: [function(t, e, i) {
            "use strict";
            e.exports = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in document,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            }
        }, {}]
    }, {}, [1]);
class Parallax extends Smooth {
    constructor(t) {
        super(t), this.createExtraBound(), this.resizing = !1, this.cache = null, this.dom.divs = Array.prototype.slice.call(t.divs, 0)
    }
    createExtraBound() {
        ["getCache", "inViewport"].forEach(t => this[t] = this[t].bind(this))
    }
    resize() {
        this.resizing = !0, this.getCache(), super.resize(), this.resizing = !1
    }
    getCache() {
        this.cache = [], this.dom.divs.forEach((t, e) => {
            t.style.display = "block", t.style.transform = "none";
            const i = this.vars.target,
                n = t.getBoundingClientRect(),
                s = {
                    el: t,
                    state: !0,
                    top: n.top + i,
                    left: n.left,
                    center: n.height / 2,
                    bottom: n.bottom + i,
                    speed: t.getAttribute("data-speed") || "0"
                };
            this.cache.push(s)
        }), this.vars.bounding = this.dom.section.getBoundingClientRect().height - (this.vars.native ? 0 : this.vars.height)
    }
    run() {
        this.dom.divs.forEach(this.inViewport), this.dom.section.style[this.prefix] = this.getTransform(-1 * this.vars.current), super.run()
    }
    inViewport(t, e) {
        if (!this.cache || this.resizing) return;
        const i = this.cache[e],
            n = this.vars.current,
            s = (i.top - n) * i.speed,
            r = Math.round(i.top + s - n);
        Math.round(i.bottom + s - n) > 0 && r < this.vars.height && (t.style.display = "block", t.style[this.prefix] = this.getTransform(s))
    }
}
class Horizontal extends Smooth {
    constructor(t) {
        super(t), this.createExtraBound(), this.resizing = !1, this.cache = null, this.dom.divs = Array.prototype.slice.call(t.divs, 0)
    }
    createExtraBound() {
        ["getCache", "inViewport"].forEach(t => this[t] = this[t].bind(this))
    }
    resize() {
        this.resizing = !0, this.getCache(), super.resize(), this.resizing = !1
    }
    getCache() {
        this.cache = [];
        const t = this.vars.width / 2.6;
        this.dom.divs.forEach((e, i) => {
            e.style.display = "inline-block", e.style.transform = "none";
            const n = this.vars.target,
                s = e.getBoundingClientRect(),
                r = {
                    el: e,
                    state: !0,
                    left: s.left + n,
                    right: s.right + n,
                    center: t / 2,
                    speed: e.getAttribute("data-speed") || "0"
                };
            this.cache.push(r)
        }), this.dom.section.style.width = this.vars.width + "px", this.vars.bounding = t * this.dom.divs.length - this.vars.width
    }
    run() {
        this.dom.divs.forEach(this.inViewport), this.dom.section.style[this.prefix] = `translate3d(${-1*this.vars.current}px,0,0)`, super.run()
    }
    inViewport(t, e) {
        if (this.cache && !this.resizing) {
            var i = this.cache[e],
                n = this.vars.current,
                s = (i.left - n) * i.speed,
                r = Math.round(i.left + s - n);
            Math.round(i.right + s - n) > 0 && this.vars.width;
            t.style[this.prefix] = this.getTransform(s)
        }
    }
}