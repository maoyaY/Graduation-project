﻿(function(a, b, c) {
    function p(a) {
        var b = a.keyCode || a.charCode;
        return b >= 48 && b <= 57 || b >= 37 && b <= 40 || b == 8 || b == 46
    }

    function q(a) {
        var b = this,
            c = {
                "M+": b.getMonth() + 1,
                "d+": b.getDate(),
                "h+": b.getHours() % 12 == 0 ? 12 : b.getHours() % 12,
                "H+": b.getHours(),
                "m+": b.getMinutes(),
                "s+": b.getSeconds(),
                "q+": Math.floor((b.getMonth() + 3) / 3),
                w: "0123456".indexOf(b.getDay()),
                S: b.getMilliseconds()
            };
        /(y+)/.test(a) && (a = a.replace(RegExp.$1, (b.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var d in c)(new RegExp("(" + d + ")")).test(a) && (a = a.replace(RegExp.$1, RegExp.$1.length == 1 ? c[d] : ("00" + c[d]).substr(("" + c[d]).length)));
        return a
    }

    function r(b, c) {
        function p(b, c) {
            sting = a.trim(b);
            if (b === "") return;
            return c = c.replace(/yyyy/, y4).replace(/yy/, y2).replace(/MM/, M2).replace(/M/, M1).replace(/dd/, d2).replace(/d/, d1).replace(/HH/, H2).replace(/H/, H1).replace(/mm/, m2).replace(/m/, m1).replace(/ss/, s2).replace(/s/, s1), c = new RegExp("^" + c + "$"), d = c, c.test(b)
        }

        function q(a) {
            var b = [],
                c = 0,
                d;
            yi = a.indexOf("yyyy"), yi < 0 && (yi = a.indexOf("yy")), yi >= 0 && (b[c] = yi, c++), Mi = a.indexOf("MM"), Mi < 0 && (Mi = a.indexOf("M")), Mi >= 0 && (b[c] = Mi, c++), di = a.indexOf("dd"), di < 0 && (di = a.indexOf("d")), di >= 0 && (b[c] = di, c++), Hi = a.indexOf("HH"), Hi < 0 && (Hi = a.indexOf("H")), Hi >= 0 && (b[c] = Hi, c++), mi = a.indexOf("mm"), mi < 0 && (mi = a.indexOf("m")), mi >= 0 && (b[c] = mi, c++), si = a.indexOf("ss"), si < 0 && (si = a.indexOf("s")), si >= 0 && (b[c] = si, c++), d = [yi, Mi, di, Hi, mi, si];
            for (c = 0; c < b.length - 1; c++)
                for (j = 0; j < b.length - 1 - c; j++)
                    if (b[j] > b[j + 1]) {
                        var e = b[j];
                        b[j] = b[j + 1], b[j + 1] = e
                    }
            for (c = 0; c < b.length; c++)
                for (j = 0; j < d.length; j++) b[c] == d[j] && (d[j] = c);
            return d
        }
        var d, e = new Date;
        y4 = "([0-9]{4})", y2 = "([0-9]{2})", yi = -1, M2 = "(0[1-9]|1[0-2])", M1 = "([1-9]|1[0-2])", Mi = -1, d2 = "(0[1-9]|[1-2][0-9]|30|31)", d1 = "([1-9]|[1-2][0-9]|30|31)", di = -1, H2 = "([0-1][0-9]|20|21|22|23)", H1 = "([0-9]|1[0-9]|20|21|22|23)", Hi = -1, m2 = "([0-5][0-9])", m1 = "([0-9]|[1-5][0-9])", mi = -1, s2 = "([0-5][0-9])", s1 = "([0-9]|[1-5][0-9])", si = -1;
        if (p(b, c)) {
            var f = d.exec(b),
                g, h = q(c),
                i = h[0] >= 0 ? f[h[0] + 1] : e.getFullYear(),
                k = h[1] >= 0 ? f[h[1] + 1] - 1 : e.getMonth(),
                l = h[2] >= 0 ? f[h[2] + 1] : e.getDate(),
                m = h[3] >= 0 ? f[h[3] + 1] : e.getHours(),
                n = h[4] >= 0 ? f[h[4] + 1] : e.getMinutes(),
                o = h[5] >= 0 ? f[h[5] + 1] : e.getSeconds(),
                g = new Date(i, k, l, m, n, o);
            return g.getDate() == l ? g : e
        }
        return e
    }

    function s(b, c, d) {
        var e = new Date;
        return /%/.test(b) ? (d = d || 0, b = b.replace(/%y/, e.getFullYear()).replace(/%M/, e.getMonth() + 1).replace(/%d/, e.getDate() + d).replace(/%H/, e.getHours()).replace(/%m/, e.getMinutes()).replace(/%s/, e.getSeconds()).replace(f, "0$1")) : /^#[\w-]+$/.test(b) && (b = a.trim(a(b)[0].value), b.length > 0 && c && (b = q.call(r(b, c), "yyyy-MM-dd"))), b
    }
    var d = b.document,
        e, f = /\b(\w)\b/g,
        g = !! b.ActiveXObject,
        h = g && !b.XMLHttpRequest,
        i = a(b),
        k = "JCA" + (new Date).getTime(),
        l = function(a, b) {
            var c = a.length,
                e;
            for (; b < c; b++) {
                e = d.querySelector ? a[b].src : a[b].getAttribute("src", 4);
                if (e.substr(e.lastIndexOf("/")).indexOf("lhgcalendar") !== -1) break
            }
            return e.substr(0, e.lastIndexOf("/") + 1)
        }(d.getElementsByTagName("script"), 0),
        m = h ? '<iframe id="lhgcal_frm" hideFocus="true" frameborder="0" src="about:blank" style="position:absolute;z-index:-1;width:100%;top:0px;left:0px;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>' : "",
    // hj modify change position: year month
        n = '<table class="lcui_border" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="lcui_lt"></td><td class="lcui_t"></td><td class="lcui_rt"></td></tr><tr><td class="lcui_l"></td><td><div class="lcui_head"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td width="14"><a class="cui_py" href="javascript:void(0);"></a></td><td width="60"><input class="cui_iy" maxlength="4" value=""/>\u5e74</td><td><a class="cui_ny" href="javascript:void(0);"></a></td><td width="14"><a class="cui_pm" href="javascript:void(0);"></a></td><td width="40"><input class="cui_im" maxlength="4" value=""/>\u6708</td><td width="9"><a class="cui_nm" href="javascript:void(0);"></a></td></tr></table><div class="cui_ymlist" style="display:none;"><table width="100%" cellspacing="1" cellpadding="0" border="0"><thead class="cui_ybar"><tr><td><a class="cui_pybar" href="javascript:void(0);">\u00ab</a></td><td><a class="cui_cybar" href="javascript:void(0);">\u00d7</a></td><td><a class="cui_nybar" href="javascript:void(0);">\u00bb</a></td></tr></thead><tbody class="cui_lbox"></tbody></table></div></div><div class="lcui_body"><table cellspacing="1" cellpadding="0" border="0"><thead><tr><td>\u65e5</td><td>\u4e00</td><td>\u4e8c</td><td>\u4e09</td><td>\u56db</td><td>\u4e94</td><td>\u516d</td></tr></thead><tbody class="cui_db"></tbody></table></div><div class="cui_foot"><table width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td align="center" class="lcui_today"><a class="cui_tbtn" href="javascript:void(0);">\u4eca\u5929</a></td><td align="center" class="lcui_time"><input class="cui_hour" maxlength="2"/>:<input class="cui_minute" maxlength="2"/>:<input class="cui_second" maxlength="2"/></td><td align="center" class="lcui_empty"><a class="cui_dbtn" href="javascript:void(0);">\u6e05\u7a7a</a><td align="center" class="lcui_sure"><a class="cui_sbtn" href="javascript:void(0);">\u786e\u5b9a</a></td></tr></table></div></td><td class="lcui_r"></td></tr><tr><td class="lcui_lb"></td><td class="lcui_b"></td><td class="lcui_rb"></td></tr></tbody></table>' + m;
    try {
        d.execCommand("BackgroundImageCache", !1, !0)
    } catch (o) {}(function(a) {
        // hj remove
        //var b = d.createElement("link");
        //b.href = l + "../../css/lhgcalendar.css", b.rel = "stylesheet", a.appendChild(b)
    })(d.getElementsByTagName("head")[0]);
    var t = function(a) {
        a = a || {};
        var b = t.setting;
        for (var d in b) a[d] === c && (a[d] = b[d]);
        return e ? e._init(a) : new t.fn._init(a)
    };
    t.fn = t.prototype = {
        constructor: t,
        _init: function(b) {
            var c = this,
                d, g = c._getEvent(),
                i, j;
            return c.config = b, c.DOM = d = c.DOM || c._getDOM(), c.evObj = g.srcElement || g.target, c.inpE = b.id ? a(b.id)[0] : c.evObj, b.btnBar ? d.foot[0].style.display = "" : d.foot[0].style.display = "none", b.minDate && (b.minDate = s(b.minDate, b.targetFormat, b.noToday ? 1 : 0)), b.maxDate && (b.maxDate = s(b.maxDate, b.targetFormat, b.noToday ? -1 : 0)), i = a.trim(c.inpE.value), i.length > 0 ? j = r(i, b.format) : j = new Date, d.hour[0].value = (j.getHours() + "").replace(f, "0$1"), d.minute[0].value = (j.getMinutes() + "").replace(f, "0$1"), d.second[0].value = (j.getSeconds() + "").replace(f, "0$1"), a("input", d.foot[0]).attr({
                disabled: b.format.indexOf("H") >= 0 ? !1 : !0
            }),/* hj add */ a("table", d.foot[0]).css({
                display: b.format.indexOf("H") >= 0 ? "" : "none"
            }),c._draw(j).show()._offset(c.evObj), h && a("#lhgcal_frm").css({
                height: d.wrap[0].offsetHeight + "px"
            }), e || (d.wrap[0].style.width = d.wrap[0].offsetWidth + "px", c._addEvent(), e = c), c
        },
        _draw: function(a, b) {
            var c = this,
                e = c.DOM,
                g, h, i, j = [],
                k, l, m = c.config,
                n, o, p, q = 0,
                r;
            c.year = k = a.getFullYear(), c.month = l = a.getMonth() + 1, c.day = b || a.getDate(), e.iy[0].value = k, e.im[0].value = l, g = (new Date(k, l - 1, 1)).getDay(), h = (new Date(k, l - 1, 0)).getDate(), i = (new Date(k, l, 0)).getDate();
            for (var t = 0; t < g; t++) j.push(h), h--;
            j.reverse();
            for (var t = 1; t <= i; t++) j.push(t);
            for (var t = 1; t <= 42 - i - g; t++) j.push(t);
            n = d.createDocumentFragment();
            for (var t = 0; t < 6; t++) {
                o = d.createElement("tr");
                for (var u = 0; u < 7; u++) {
                    p = d.createElement("td"), r = (k + "-" + l + "-" + j[q]).replace(f, "0$1");
                    if (q < g || q >= i + g || m.minDate && m.minDate > r || m.maxDate && m.maxDate < r || m.disWeek && m.disWeek.indexOf(u) >= 0) c._setCell(p, j[q]);
                    else if (m.disDate) {
                        for (var v = 0, w = m.disDate.length; v < w; v++) {
                            /%/.test(m.disDate[v]) && (m.disDate[v] = s(m.disDate[v]));
                            var x = new RegExp(m.disDate[v]),
                                y = m.enDate ? !x.test(r) : x.test(r);
                            if (y) break
                        }
                        y ? c._setCell(p, j[q]) : c._setCell(p, j[q], !0)
                    } else c._setCell(p, j[q], !0);
                    o.appendChild(p), q++
                }
                n.appendChild(o)
            }
            while (e.db[0].firstChild) e.db[0].removeChild(e.db[0].firstChild);
            return e.db[0].appendChild(n), c
        },
        _setCell: function(b, c, d) {
            d ? (b.innerHTML = '<a href="javascript:void(0);">' + c + "</a>", b.firstChild[k + "D"] = c + "", c === this.day && a(b).addClass("cui_today")) : b.innerHTML = c + ""
        },
        _drawList: function(a, b) {
            var c = this.DOM,
                e, f, g = d.createDocumentFragment();
            for (var h = 0; h < 4; h++) {
                e = d.createElement("tr");
                for (var i = 0; i < 3; i++) f = d.createElement("td"), f.innerHTML = '<a href="javascript:void(0);">' + (b ? b[a] : a) + "</a>", e.appendChild(f), b ? f.firstChild[k + "M"] = a : f.firstChild[k + "Y"] = a, a++;
                g.appendChild(e)
            }
            while (c.lbox[0].firstChild) c.lbox[0].removeChild(c.lbox[0].firstChild);
            return c.lbox[0].appendChild(g), this
        },
        _showList: function() {
            this.DOM.ymlist[0].style.display = "block"
        },
        _hideList: function() {
            this.DOM.ymlist[0].style.display = "none"
        },
        _offset: function() {
            var b = this,
                c = b.DOM,
                d, e = a(b.evObj).offset(),
                f = e.top + b.evObj.offsetHeight,
                g = i.width(),
                h = i.height(),
                j = i.scrollLeft(),
                k = i.scrollTop(),
                l = c.wrap[0].offsetWidth,
                m = c.wrap[0].offsetHeight;
            return f + m > h + k && (f = e.top - m - 2), e.left + l > g + j && (e.left -= l), c.wrap.css({
                left: e.left + "px",
                top: f + "px"
            }), d = c.im.offset().top + c.im[0].offsetHeight, c.ymlist[0].style.top = d - f + "px", b
        },
        _getDOM: function() {
            var b = d.createElement("div");
            b.style.cssText = "position:absolute;display:none;z-index:" + this.config.zIndex + ";", b.innerHTML = n;
            var c, e = 0,
                f = {
                    wrap: a(b)
                }, g = b.getElementsByTagName("*"),
                h = g.length;
            for (; e < h; e++) c = g[e].className.split("cui_")[1], c && (f[c] = a(g[e]));
            return d.body.appendChild(b), f
        },
        _getEvent: function() {
            if (g) return b.event;
            var a = this._getEvent.caller;
            while (a != null) {
                var c = a.arguments[0];
                if (c && (c + "").indexOf("Event") >= 0) return c;
                a = a.caller
            }
            return null
        },
        _setDate: function(b) {
            b = parseInt(b, 10);
            var c = this,
                d = c.config,
                e = c.DOM,
                f = new Date(c.year, c.month - 1, b);
            if (d.format.indexOf("H") >= 0) {
                var g = parseInt(e.hour[0].value, 10),
                    h = parseInt(e.minute[0].value, 10),
                    i = parseInt(e.second[0].value, 10);
                f = new Date(c.year, c.month - 1, b, g, h, i)
            }
            c.day = b, d.onSetDate && d.onSetDate.call(c), c.inpE.value = q.call(f, d.format);
            if (d.real) {
                var j = d.format.indexOf("H") >= 0 ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd";
                a(d.real)[0].value = q.call(f, j)
            }
            c.hide()
        },
        _addEvent: function() {
            var b = this,
                c = b.DOM;
            c.wrap.bind("click", function(d) {
                var e = d.target;
                //console.log(e);
                if (e[k + "D"]) b._setDate(e[k + "D"]);
                else if (e === c.pm[0]) b._draw(new Date(b.year, b.month - 2), b.day);
                else if (e === c.nm[0]) b._draw(new Date(b.year, b.month), b.day);
                else if (e === c.py[0]) b._draw(new Date(b.year - 1, b.month - 1), b.day);
                else if (e === c.ny[0]) b._draw(new Date(b.year + 1, b.month - 1), b.day);
                else if (e === c.tbtn[0]) {// hj 今天
                    var f = new Date;
                    b.year = f.getFullYear(), b.month = f.getMonth() + 1, b.day = f.getDate(), b._setDate(b.day)
                } else if (e === c.dbtn[0]) {// hj 清空
                    var g = b.config;
                    g.onSetDate && (b.year = "", b.month = "", b.day = "", g.onSetDate.call(b)), b.inpE.value = "", b.hide(), g.real && (a(g.real)[0].value = "")
                } else if (e === c.sbtn[0]) {// hj add sure 确定 作用等同点击日期
                    var _e = $(e).parent().parent().parent().parent().parent().parent().find(".cui_today a")[0];
                    b._setDate(_e[k + "D"]);
                } else {
                    if (e === c.im[0]) {
                        var h = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                            i = c.im.offset().left - parseInt(c.wrap[0].style.left, 10);
                        return c.im[0].select(), c.ybar[0].style.display = "none", c.ymlist[0].style.left = i + "px", b._drawList(0, h)._showList(), !1
                    }
                    if (e === c.iy[0]) {
                        var i = c.iy.offset().left - parseInt(c.wrap[0].style.left, 10);
                        return c.iy[0].select(), c.ybar[0].style.display = "", c.ymlist[0].style.left = i + "px", b._drawList(b.year - 4)._showList(), !1
                    }
                    var f = new Date,
                        j = c.im[0].value || f.getMonth() + 1,
                        l = c.iy[0].value || f.getFullYear();
                    b._draw(new Date(l, j - 1), b.day)
                }

                return b._hideList(), !1
            }), c.ymlist.bind("click", function(d) {
                var e = d.target;
                if (e[k + "M"] >= 0) c.im[0].value = e[k + "M"] + 1, b._draw(new Date(b.year, e[k + "M"]), b.day)._hideList();
                else if (e[k + "Y"]) c.iy[0].value = e[k + "Y"], b._draw(new Date(e[k + "Y"], b.month - 1), b.day)._hideList();
                else if (e === c.pybar[0]) {
                    var f = a("a", c.lbox[0])[0][k + "Y"];
                    b._drawList(f - 12)
                } else if (e === c.nybar[0]) {
                    var f = a("a", c.lbox[0])[0][k + "Y"];
                    b._drawList(f + 12)
                } else e === c.cybar[0] && b._hideList();
                return !1
            }), c.im.bind("keypress", p), c.iy.bind("keypress", p), c.hour.bind("keypress", p), c.minute.bind("keypress", p), c.second.bind("keypress", p), a(d).bind("click", function(a) {
                a.target !== b.evObj && b.hide()._hideList()
            })
        },
        show: function() {
            return this.DOM.wrap[0].style.display = "block", this
        },
        hide: function() {
            return this.DOM.wrap[0].style.display = "none", this
        },
        getDate: function(a) {
            var b = this,
                c = b.DOM,
                d = parseInt(c.hour[0].value, 10),
                e = parseInt(c.minute[0].value, 10),
                f = parseInt(c.second[0].value, 10);
            if (b.year === "" && b.month === "" && b.day === "") return "";
            switch (a) {
                case "y":
                    return b.year;
                case "M":
                    return b.month;
                case "d":
                    return b.day;
                case "H":
                    return d;
                case "m":
                    return e;
                case "s":
                    return f;
                case "date":
                    return b.year + "-" + b.month + "-" + b.day;
                // hj add start
                case "date2":
                    return b.year + "-" + (b.month < 10 ? "0" + b.month : b.month) + "-" + (b.day < 10 ? "0" + b.day : b.day);
                // hj add end
                case "dateTime":
                    return b.year + "-" + b.month + "-" + b.day + " " + d + ":" + e + ":" + f;
                // hj add start
                case "dateTime2":
                    return b.year + "-" + (b.month < 10 ? "0" + b.month : b.month) + "-" + (b.day < 10 ? "0" + b.day : b.day) + " " + (d < 10 ? "0" + d : d) + ":" + (e < 10 ? "0" + e : e) + ":" + (f < 10 ? "0" + f : f)
                // hj add end
            }
        }
    }, t.fn._init.prototype = t.fn, t.formatDate = function(a, b) {
        return q.call(a, b)
    }, t.setting = {
        id: null,
        format: "yyyy-MM-dd",
        minDate: null,
        maxDate: null,
        btnBar: !0,
        targetFormat: null,
        disWeek: null,
        onSetDate: null,
        real: null,
        disDate: null,
        enDate: !1,
        zIndex: 1978,
        noToday: !1,
        linkageObj: null
    }, a.fn.calendar = function(a, b) {
        return b = b || "click", this.bind(b, function() {
            return t(a), !1
        }), this
    }, b.lhgcalendar = a.calendar = t
})(this.jQuery || this.lhgcore, this)